import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

const publicPaths = ["/login", "/signup"];

export function middleware(req:NextRequest) {
    
        // Check authorization
        const token = cookies().get("accessToken")?.value;
        if(publicPaths.some(path => req.nextUrl.pathname.startsWith(path))) {
         if(token) return NextResponse.redirect(new URL("/", req.url));
         else NextResponse.next();
        }else {
            if(!token) {
                return NextResponse.redirect(new URL("/login", req.url));
            }
            return NextResponse.next();
        }
}

export const config = {
    matcher: ['/', '/login', '/signup']
};



