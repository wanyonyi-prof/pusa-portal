import { cookies } from "next/headers";

const COOKIE = "pusa_admin";

export async function isAdmin(): Promise<boolean> {
  const store = await cookies();
  const c = store.get(COOKIE);
  return c?.value === "granted";
}

export function adminCookieName() {
  return COOKIE;
}