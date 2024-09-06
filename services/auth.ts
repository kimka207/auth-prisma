"use server";

import { db } from "@/lib/db";

export const getUserByUsername = async (email: string) => {
  try {
    const existingUser = await db.user.findUnique({
      where: { email },
    });
    return existingUser;
  } catch (error) {
    return null;
  }
};

export const getUserByID = async (id: string) => {
  try {
    const existingUser = await db.user.findFirst({ where: { id } });
    return existingUser;
  } catch (error) {
    return null;
  }
};
