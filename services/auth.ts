import { db } from "@/lib/db";

export const getUserByUsername = async (username: string) => {
  try {
    const existingUser = await db.user.findUnique({ where: { username } });
    return existingUser;
  } catch (error) {
    return null;
  }
};

export const getUserByID = async (id: string) => {
  try {
    const existingUser = await db.user.findUnique({ where: { id } });
    return existingUser;
  } catch (error) {
    return null;
  }
};
