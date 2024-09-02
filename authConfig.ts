import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { loginSchema } from "./schemas";
import { getUserByUsername } from "./services";
import bcrypt from "bcryptjs";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";

export default {
  providers: [
    GithubProvider({
      name: "github",
      clientId: process.env.GITHUB_CLIENT_KEY,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    GoogleProvider({
      name: "google",
      clientId: process.env.GOOGLE_CLIENT_KEY,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Credentials({
      async authorize(values) {
        const validCredentials = loginSchema.safeParse(values);

        if (!validCredentials.success) {
          return null;
        }

        const { username, password } = validCredentials.data;
        const user = await getUserByUsername(username);

        if (!user || !user?.password) {
          return null;
        }

        const passwordsMatch = await bcrypt.compare(password, user?.password);

        if (passwordsMatch) {
          return user;
        }

        return null;
      },
    }),
  ],
  secret: process.env.AUTH_SECRET,
} satisfies NextAuthConfig;
