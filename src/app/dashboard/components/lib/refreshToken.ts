"use server";

import { cookies } from "next/headers";

const HOST = process.env.NEXT_PUBLIC_HOST_API;

console.log(HOST)
export async function refreshAdminToken() {
  const refreshToken = getToken("bearer-token-rfsh");
  if (!refreshToken) return null;

  try {
    const response = await fetch(`${HOST}/api/refresh-token-admin`, {
      method: "POST",
      headers: {
        Cookie: `bearer-token-rfsh=${refreshToken}`,
      },
    });

    if (!response) {
      throw new Error("No se pudo renovar el token");
    }

    const { newAccessToken } = await response.json();

    const cookieStore = await cookies();

    cookieStore.set("bearer-token", newAccessToken, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      path: "/",
    });

    return newAccessToken;
  } catch (error) {
    console.error("Error en refreshAdminToken:", error);
    return null;
  }
}

export async function getToken(name: string) {
  const cookieStore = await cookies();
  const token = cookieStore.get(name)?.value;
  return token || null;
}
