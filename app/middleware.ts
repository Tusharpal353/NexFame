import { getSession } from "next-auth/react";
import { NextResponse } from "next/server";

export async function middleware(req) {
    const session = await getSession({req})
    const {pathname} = req.nexturl;
    if (!session) {
        return NextResponse.redirect(new URL("/login", req.url));
      }
    
      // If accessing brand pages and the user is not a brand, redirect them
      if (pathname.startsWith("/brand") && session.user?.role !== "brand") {
        return NextResponse.redirect(new URL("/unauthorized", req.url));
      }
    
      // If accessing celebrity pages and the user is not a celebrity, redirect them
      if (pathname.startsWith("/celeb") && session.user?.role !== "celeb") {
        return NextResponse.redirect(new URL("/unauthorized", req.url));
      }
    
      return NextResponse.next();

    
}