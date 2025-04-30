"use server";

import { cookies } from "next/headers";
import { query } from "./request";

export async function refreshAdminToken() {
  try {
    const response = await query("/api/refresh-token-admin", "POST");

    if (!response) {
      throw new Error("No se pudo renovar el token");
    }

    const { newAccessToken } = await response.data;

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
