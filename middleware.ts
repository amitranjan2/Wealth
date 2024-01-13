import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'


import Cookies from 'js-cookie';

export function middleware(request: NextRequest) {

  const expirationInMinutes = 30;
  const expirationDate = new Date(new Date().getTime() + expirationInMinutes * 60 * 1000);
  try {
    // console.log("Middleware started",request);

    const currentPathname = request.nextUrl.pathname;

    console.log("currentPathname ",currentPathname);3


    // Cookies.set("currentPathname", currentPathname, { expires: 30 });

    // request.cookies.set("sd","sds");

    // const response = NextResponse.next();
    // response.setHeader('Set-Cookie', `currentPathname=${encodeURIComponent(currentPathname)}; expires=${expirationDate.toUTCString()}; path=/`);

    if (!request.cookies.get('jwtToken')) {

      console.log("inside if condition ");

      
      // console.log("yourCookie ",yourCookie);
      // If the cookie is not present, redirect to the login page
      return NextResponse.redirect(new URL('/login', request.url));
    }

    // Your middleware logic here

    console.log("Middleware completed successfully");

    // Example: Redirect to /home
    return NextResponse.next();
  } catch (error) {
    console.error("Error in middleware:", error);

    // Handle the error accordingly
    // return NextResponse.redirect(new URL('/blog', request.url));
  }
}

export const config = { 
  matcher: ['/blog/:path*','/articles/:path*'],
}
 