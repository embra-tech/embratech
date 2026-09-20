import { NextResponse } from 'next/server';

const BOT_UA_PATTERNS = [
  /googlebot/i,
  /google-inspectiontool/i,
  /lighthouse/i,
  /pagespeed/i,
  /chrome-lighthouse/i,
  /bingbot/i,
  /facebookexternalhit/i,
  /twitterbot/i,
  /linkedinbot/i,
  /slurp/i,
  /duckduckbot/i,
  /baiduspider/i,
  /yandexbot/i,
  /ahrefsbot/i,
  /semrushbot/i,
];

function isBot(userAgent) {
  return BOT_UA_PATTERNS.some((pattern) => pattern.test(userAgent));
}

export function middleware(request, event) {
  const ip = request.headers.get('x-forwarded-for') || 'Unknown';
  const country = request.headers.get('x-vercel-ip-country') || 'Unknown';
  const city = request.headers.get('x-vercel-ip-city') || 'Unknown';
  const userAgent = request.headers.get('user-agent') || '';
  const pathname = request.nextUrl.pathname;
  const bot = isBot(userAgent);

  const logData = [{
    type: 'visitor_tracking',
    ip_address: ip,
    country,
    city,
    path: pathname,
    user_agent: userAgent,
    is_bot: bot,
    timestamp: new Date().toISOString(),
  }];

  const axiomToken = process.env.AXIOM_TOKEN;
  const axiomDataset = process.env.AXIOM_DATASET;

  if (axiomToken && axiomDataset) {
    const logPromise = fetch(`https://api.axiom.co/v1/datasets/${axiomDataset}/ingest`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${axiomToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(logData),
    }).catch((err) => console.error('Axiom Error:', err));
    event.waitUntil(logPromise);
  }

  const response = NextResponse.next();
  // Pass bot status to pages via response header (readable in server components)
  if (bot) {
    response.headers.set('x-is-bot', '1');
  }
  return response;
}

export const config = {
  matcher: '/((?!api|_next/static|_next/image|favicon.ico|favicon.svg).*)',
};
