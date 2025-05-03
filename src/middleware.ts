import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("bearer-token")?.value;
  const { pathname } = request.nextUrl;

  // Permitir el acceso libre al login
  if (pathname === "/login") return NextResponse.next();

  if (!token) {
    const loginUrl = new URL("/login", request.url);
    return NextResponse.redirect(loginUrl);
  }

  // Si hay token, continuar con la navegación normal
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico|.*\\..*).*)"],
};
