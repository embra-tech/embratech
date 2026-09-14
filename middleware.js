import { NextResponse } from 'next/server';

export function middleware(request, event) {
  // Extract visitor information from Vercel's headers
  const ip = request.headers.get('x-forwarded-for') || 'Unknown';
  const country = request.headers.get('x-vercel-ip-country') || 'Unknown';
  const city = request.headers.get('x-vercel-ip-city') || 'Unknown';
  const pathname = request.nextUrl.pathname;

  const logData = [{
    type: 'visitor_tracking',
    ip_address: ip,
    country: country,
    city: city,
    path: pathname,
    timestamp: new Date().toISOString()
  }];

  // Bypass Vercel Log Drains by sending directly to Axiom's REST API
  const axiomToken = process.env.AXIOM_TOKEN;
  const axiomDataset = process.env.AXIOM_DATASET;

  if (axiomToken && axiomDataset) {
    const logPromise = fetch(`https://api.axiom.co/v1/datasets/${axiomDataset}/ingest`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${axiomToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(logData)
    }).catch(err => console.error('Axiom Error:', err));

    // event.waitUntil ensures the fetch completes even after the response is sent to the user
    event.waitUntil(logPromise);
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
};
