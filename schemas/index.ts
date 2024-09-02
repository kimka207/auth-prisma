import { z } from "zod";

export const loginSchema = z.object({
  username: z.string().min(1, { message: "username required" }),
  password: z.string().min(1, { message: "Password required" }),
});
export const registerSchema = z.object({
  fullName: z.string().min(4, { message: "Full name required" }),
  username: z.string().min(1, { message: "username required" }),
  email: z.string().email({ message: "invalid email" }),
  password: z.string().min(1, { message: "Password required" }),
});
