import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { SHOW_CIGARETTES, VAPE_PAGE, isHiddenCigarettePath } from "./app/lib/cigaretteGate";

export function proxy(request: NextRequest) {
  if (SHOW_CIGARETTES) return NextResponse.next();
  if (!isHiddenCigarettePath(request.nextUrl.pathname)) return NextResponse.next();
  const url = request.nextUrl.clone();
  url.pathname = VAPE_PAGE;
  url.search = "";
  return NextResponse.redirect(url, 302);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|.*\\.(?:png|jpg|jpeg|webp|gif|svg|ico|css|js|map|txt|xml|woff2?)$).*)"],
};
