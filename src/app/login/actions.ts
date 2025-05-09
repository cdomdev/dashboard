"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const HOST = process.env.NEXT_PUBLIC_HOST_API;

interface LoginData {
  email: string;
  password: string;
}

export async function loginAdmin(data: LoginData) {
  const response = await fetch(`${HOST}/api/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();

  const { accessToken, refreshToken } = result;
  const cookiesSession = await cookies();
  cookiesSession.set("bearer-token", accessToken, {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    path: "/",
  });

  cookiesSession.set("bearer-token-rfsh", refreshToken, {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    path: "/",
  });

  if (response.status === 200) {
    redirect("/dashboard");
  }

  return { response: response.status, result: result };
}
