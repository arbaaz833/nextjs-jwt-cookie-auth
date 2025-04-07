import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";


export function middleware(req:NextRequest) {
    console.log("Middleware called");
    console.log("Request headers: ", req.headers);
  const { pathname } = req.nextUrl;
    if( pathname.startsWith("/dashboard")) {
        // Check authorization
        const token = cookies().get("accessToken")?.value;
        if(token) {
            NextResponse.next();
        }else {
            return NextResponse.rewrite(new URL("/login", req.url));
        }
    }
}