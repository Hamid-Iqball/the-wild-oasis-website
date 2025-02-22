import { auth } from "./app/_lib/auth"; 
// import { NextResponse } from "next/server";

// export function middleware(request) {


//   // Otherwise, redirect to /about
//   return NextResponse.redirect(new URL("/about", request.url));
// }

// export const config = {
//   matcher: ["/account" , "/cabins"], // Only match the root path, not "/about"
// };

//for authorization the middleware function is comming from the auth.js

export const middleware = auth

export const config ={
    matcher:["/account"]
}