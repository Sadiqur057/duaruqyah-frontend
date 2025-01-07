import { NextResponse } from "next/server";

export function middleware(request) {
  return NextResponse.redirect(
    new URL("duas/dua'27s-importance?cat=1", request.url)
  );
}

export const config = {
  matcher: ["/", "/duas"],
};
