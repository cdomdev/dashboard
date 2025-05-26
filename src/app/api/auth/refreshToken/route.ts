"use server"
import { cookies } from "next/headers"
import { NextResponse } from "next/server";

const HOST = process.env.NEXT_PUBLIC_HOST_API;

export async function GET() {
  try {
    const res = await fetch(`${HOST}/api/auth/refresh-token`, {
      method: "GET",
      credentials: "include",
    });

    const data = await res.json();

    console.log("Respuesta del servidor en el refresh ---> :", data); 

    if (!res.ok) return NextResponse.json({ data }, { status: res.status });

    // definir nueva cookie 

    const cookiesSession = await cookies()

    const { newAccessToken } = data

    cookiesSession.set("bearer-token", newAccessToken, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      path: "/",
    });

    return NextResponse.json({ response: res.status, data });
  } catch (err) {
    console.error("Error al refrescar token:", err);
    return NextResponse.json({ error: "Error al refrescar token" }, { status: 500 });
  }
  
}
