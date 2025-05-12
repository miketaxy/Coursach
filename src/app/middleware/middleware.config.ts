import { NextRequest, NextResponse } from "next/server";
import { getTokenFromRequest } from "../lib/token/tokenFromRequest";

export function middleware(request: NextRequest) {
  if (
    request.nextUrl.pathname.startsWith("/login") ||
    request.nextUrl.pathname.startsWith("/register")
  ) {
    return NextResponse.next();
  }

  const token = getTokenFromRequest(request);

  if (!token) {
    return NextResponse.redirect("/login");
  }
}
