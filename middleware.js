import { NextResponse } from 'next/server';

export function middleware(request) {
  // Extract visitor information from Vercel's headers
  const ip = request.headers.get('x-forwarded-for') || 'Unknown';
  const country = request.headers.get('x-vercel-ip-country') || 'Unknown';
  const city = request.headers.get('x-vercel-ip-city') || 'Unknown';
  const pathname = request.nextUrl.pathname;

  // Log as a JSON string. 
  // Axiom automatically parses JSON logs into neat, searchable database columns!
  console.log(JSON.stringify({
    type: 'visitor_tracking',
    ip_address: ip,
    country: country,
    city: city,
    path: pathname,
    timestamp: new Date().toISOString()
  }));

  return NextResponse.next();
}

export const config = {
  // Run on all pages, but exclude API routes, Next.js static files, and images
  matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
};
