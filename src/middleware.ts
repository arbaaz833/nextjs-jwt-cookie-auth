import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";


export function middleware(req:NextRequest) {
    
        // Check authorization
        const token = cookies().get("accessToken")?.value;
        if(token) {
           return NextResponse.next();
        }else {
           return NextResponse.redirect(new URL("/login", req.url));
        }
}

export const config = {
    matcher: [
        "/dashboard/:path*",
    ]   }

