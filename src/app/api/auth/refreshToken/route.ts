"use server";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

const HOST = process.env.NEXT_PUBLIC_HOST_API;

export async function GET() {
  try {
    const cookieStore = await cookies();
    const refreshToken = cookieStore.get("bearer-token-rfsh");

    if (!refreshToken) {
      return NextResponse.json(
        { error: "No hay refresh token" },
        { status: 401 }
      );
    }

    const res = await fetch(`${HOST}/api/auth/refresh-token`, {
      method: "GET",
      headers: {
        Cookie: `bearer-token-rfsh=${refreshToken.value}`,
      },
    });

    const contentType = res.headers.get("content-type") || "";

    if (!contentType.includes("application/json")) {
      const errorText = await res.text();
      console.error("Respuesta no JSON del servidor:", errorText);
      return NextResponse.json(
        { error: "Respuesta no válida del servidor externo" },
        { status: 502 }
      );
    }

    const data = await res.json();

    const response = NextResponse.json({ response: res.status, data });

    response.cookies.set("bearer-token", data.newAccessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
    });

    return response;
  } catch (err) {
    console.error("Error al refrescar token:", err);
    return NextResponse.json(
      { error: "Error al refrescar token" },
      { status: 500 }
    );
  }
}
