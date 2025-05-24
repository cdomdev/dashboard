import { NextResponse } from "next/server";

const HOST = process.env.NEXT_PUBLIC_HOST_API;

export async function GET() {
  try {
    const res = await fetch(`${HOST}/api/auth/refresh-token`, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log("datos de la renovacion del token refe --->", res);

    if (!res.ok) return NextResponse.json({ res }, { status: res.status });

    const data = await res.json();

    console.log("data de la res de la ruta next", data)

    return NextResponse.json({ response: res.status, data });
  } catch (err) {
    console.error("Error al refrescar token:", err);
    return null;
  }
}
