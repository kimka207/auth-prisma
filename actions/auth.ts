"use server";

import { z } from "zod";
import { loginSchema, registerSchema } from "@/schemas/index";
import bcrypt from "bcryptjs";
import { db } from "@/lib/db";
import { getUserByUsername } from "@/services";
import { signIn } from "@/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { AuthError } from "next-auth";

export const registerUser = async (values: z.infer<typeof registerSchema>) => {
  const validUser = registerSchema.safeParse(values);

  if (!validUser.success) {
    return { error: "user required" };
  }

  const { fullName, username, password, email } = validUser.data;

  try {
    const existingUser = await getUserByUsername(email);

    if (existingUser) {
      return { error: "User Exists" };
    }

    const hashpassword = await bcrypt.hash(password, 10);
    await db.user.create({
      data: {
        fullName,
        username,
        email,
        password: hashpassword,
      },
    });
  } catch (error) {
    throw error;
  }
};

export const loginUser = async (values: z.infer<typeof loginSchema>) => {
  const validUser = loginSchema.safeParse(values);

  if (!validUser.success) {
    throw { error: "user required" };
  }

  const { email, password } = validUser.data;

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid Credentials" };

        default:
          return "Something went wrong";
      }
    }
    throw error;
  }
};
