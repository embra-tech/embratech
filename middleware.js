import { NextResponse } from 'next/server';
import { UAParser } from 'ua-parser-js';

// Bot UA regex — same pattern used in Hero.jsx and useReveal.js
const BOT_UA_RE =
  /googlebot|google-inspectiontool|lighthouse|chrome-lighthouse|pagespeed|headlesschrome|ptst|gtmetrix|bingbot|slurp|duckduckbot|baiduspider|yandexbot|sogou|exabot|facebot|ia_archiver/i;

function isKnownBot(request) {
  const ua = request.headers.get('user-agent') || '';
  const { searchParams } = request.nextUrl;
  return (
    BOT_UA_RE.test(ua) ||
    searchParams.has('psi') ||
    searchParams.has('pagespeed')
  );
}

export function middleware(request, event) {
  const { pathname } = request.nextUrl;
  const isPrefetch = request.headers.get('next-router-prefetch') === '1' || request.headers.get('x-middleware-prefetch') === '1';

  // Extract visitor information from Vercel's headers
  const ip = request.headers.get('x-forwarded-for') || 'Unknown';
  const country = request.headers.get('x-vercel-ip-country') || 'Unknown';
  const city = request.headers.get('x-vercel-ip-city') || 'Unknown';
  
  let rawUserAgent = request.headers.get('user-agent') || '';

  // Fix Bug 2: "User-Agent:" prefix baked into the value
  if (rawUserAgent.toLowerCase().startsWith('user-agent:')) {
    rawUserAgent = rawUserAgent.replace(/^user-agent:\s*/i, '').trim();
  }

  // Fix Bug 1: URL strings in User-Agent (often seen in wp-admin scans)
  if (rawUserAgent.startsWith('http://') || rawUserAgent.startsWith('https://')) {
    rawUserAgent = `Spoofed Bot (URL in UA) - ${rawUserAgent}`;
  }

  // Session Tracking logic
  let sessionData = null;
  try {
    const cookie = request.cookies.get('embra_session')?.value;
    if (cookie) sessionData = JSON.parse(cookie);
  } catch (e) {}

  if (!sessionData) {
    sessionData = {
      id: crypto.randomUUID(),
      seq: 1,
      path: pathname,
      referrer: null
    };
  } else if (!isPrefetch) {
    sessionData.seq += 1;
    sessionData.referrer = sessionData.path;
    sessionData.path = pathname;
  }

  // Parse User Agent
  const parser = new UAParser(rawUserAgent);
  const browser = parser.getBrowser();
  const os = parser.getOS();
  const device = parser.getDevice();
  const isBot = isKnownBot(request);

  let deviceType = 'unknown';
  if (isBot) {
    deviceType = 'bot';
  } else if (device.type === 'mobile') {
    deviceType = 'mobile';
  } else if (device.type === 'tablet') {
    deviceType = 'tablet';
  } else if (!device.type) {
    deviceType = 'desktop'; 
  }

  // ── Bot-Optimized Serving ──────────────────────────────────────
  let response;
  if (isBot) {
    const botUrl = request.nextUrl.clone();
    botUrl.pathname = '/api/__bot';
    botUrl.searchParams.set('p', pathname);
    response = NextResponse.rewrite(botUrl);
  } else {
    response = NextResponse.next();
  }

  if (!isPrefetch) {
    response.cookies.set('embra_session', JSON.stringify(sessionData), {
      maxAge: 30 * 60, // 30 minutes
      path: '/',
      sameSite: 'lax',
    });
  }

  // ── Visitor Analytics (Axiom) ─────────────────────────────────
  if (!isPrefetch) {
    const logData = [{
      type: 'visitor_tracking',
      event_type: 'pageview',
      session_id: sessionData.id,
      nav_sequence: sessionData.seq,
      referrer_path: sessionData.referrer,
      ip_address: ip,
      country: country,
      city: city,
      path: pathname,
      user_agent: rawUserAgent,
      browser_name: browser.name || 'unknown',
      browser_version: browser.version || 'unknown',
      os_name: os.name || 'unknown',
      os_version: os.version || 'unknown',
      device_type: deviceType,
      is_bot: isBot,
      timestamp: new Date().toISOString()
    }];

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

      event.waitUntil(logPromise);
    }
  }

  return response;
}

export const config = {
  // Exclude: API routes, static files, Next internals
  matcher: '/((?!api|_next/static|_next/image|favicon.ico|images|robots.txt|sitemap.xml).*)',
};
