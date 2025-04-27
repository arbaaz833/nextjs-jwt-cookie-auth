import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

const publicPaths = ["/login", "/signup"];

export function middleware(req:NextRequest) {
    
        // Check authorization
        const token = cookies().get("accessToken")?.value;
        if(publicPaths.some(path => req.nextUrl.pathname.startsWith(path))) {
         if(token) return NextResponse.redirect(new URL("/dashboard", req.url));
         else NextResponse.next();
        }else {
            if(!token) {
                return NextResponse.redirect(new URL("/login", req.url));
            }
            if(req.nextUrl.pathname === "/") {
                return NextResponse.redirect(new URL("/dashboard", req.url));
            }
            return NextResponse.next();
        }
}

export const config = {
    matcher: ['/', '/login', '/signup','/dashboard'],
};



