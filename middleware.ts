import { NextRequest, NextResponse } from 'next/server'

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  if (pathname.startsWith('/portal') && pathname !== '/portal/login') {
    const token = req.cookies.get('portal_session')?.value
    if (token !== process.env.PORTAL_SECRET) {
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
