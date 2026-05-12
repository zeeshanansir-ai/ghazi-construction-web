import { NextRequest, NextResponse } from 'next/server'

// Static session token — set by API route after password is verified
const SESSION_TOKEN = 'ghazi-portal-v1'

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  if (pathname.startsWith('/portal') && pathname !== '/portal/login') {
    const token = req.cookies.get('portal_session')?.value
    if (token !== SESSION_TOKEN) {
      const url = req.nextUrl.clone()
      url.pathname = '/portal/login'
      return NextResponse.redirect(url)
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/portal/:path*'],
}
