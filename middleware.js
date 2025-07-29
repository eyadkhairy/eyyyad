import { NextResponse } from "next/server";

export const config = {
  matcher: "/integrations/:path*",
};

export function middleware(request) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-createxyz-project-id", "bd6f9037-c6a2-414b-89ad-01782ca330b9");
  requestHeaders.set("x-createxyz-project-group-id", "0cc2ba14-1fb6-4cb5-93a5-00e78f1bb8f8");


  request.nextUrl.href = `https://www.create.xyz/${request.nextUrl.pathname}`;

  return NextResponse.rewrite(request.nextUrl, {
    request: {
      headers: requestHeaders,
    },
  });
}