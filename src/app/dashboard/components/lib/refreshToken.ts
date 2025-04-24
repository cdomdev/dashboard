"use server";

import { cookies } from "next/headers";

export async function refreshAdminToken() {
  try {
    const response = await fetch(
      "http://localhost:3000/api/refresh-token-admin",
      {
        method: "POST",
        credentials: "include",
      }
    );

    if (!response.ok) {
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

export async function getAccessToken() {
  const cookieStore = await cookies();
  const token = cookieStore.get("bearer-token")?.value;
  return token || null;
}
