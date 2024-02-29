
import { withAuth } from "next-auth/middleware"


export default withAuth(
  function middleware(req) {
    const {pathname,origin} = req.nextUrl;
    const {token} = req.nextauth;

  },
  {
    callbacks: {
      authorized: ({ token }) =>{
        return !!token
      }
    },
  }
)
export const config = { matcher: [ "/services","/profile","/services/:path*","/dashboard","/admin/:path*"] }