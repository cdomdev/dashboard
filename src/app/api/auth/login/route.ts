"use server";

import { cookies } from "next/headers";
import { NextResponse } from "next/server";

const HOST = process.env.NEXT_PUBLIC_HOST_API;

export async function POST(req: Request) {
  const data = await req.json();

  const response = await fetch(`${HOST}/api/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();

  if (!response.ok) {
    return NextResponse.json({ result }, { status: response.status });
  }

  const { accessToken, refreshToken } = result;

  const cookiesSession = await cookies();

  cookiesSession.set("bearer-token", accessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
  });

  cookiesSession.set("bearer-token-rfsh", refreshToken, {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    path: "/",
  });

return NextResponse.json({ response: response.status, result });

}
