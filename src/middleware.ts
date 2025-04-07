import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";


export function middleware(req:NextRequest) {
   
  const { pathname } = req.nextUrl;
    if( pathname.startsWith("/dashboard")) {
        // Check authorization
        const token = cookies().get("accessToken")?.value;
        if(token) {
           return NextResponse.next();
        }else {
           return NextResponse.redirect(new URL("/login", req.url));
        }
    }

    if(pathname.startsWith("/login")) {
        // Check if user is already logged in
        const token = cookies().get("accessToken")?.value;
        if(token) {
           return NextResponse.redirect(new URL("/dashboard", req.url));
        }
    }
}