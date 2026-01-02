import { cookies } from "next/headers";
import crypto from "crypto";

const SESSION_COOKIE = "session_token";

export async function createSession(userId: string) {
  const token = crypto.randomBytes(32).toString("hex");

  const cookieStore = await cookies();

  cookieStore.set({
    name: SESSION_COOKIE,
    value: `${userId}:${token}`,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
  });
}

export async function getSession() {
  const cookieStore = await cookies();
  const cookie = cookieStore.get(SESSION_COOKIE);

  if (!cookie) return null;

  const [userId] = cookie.value.split(":");
  return userId;
}

export async function destroySession() {
  const cookieStore = await cookies();
  cookieStore.delete(SESSION_COOKIE);
}

