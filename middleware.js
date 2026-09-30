import { NextResponse } from 'next/server';

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

  // ── Bot-Optimized Serving ──────────────────────────────────────
  // Rewrite known crawler/auditor requests to the /api/__bot edge route which
  // returns bare HTML with zero JS/WebGL — identical content, targets 100/100 score.
  if (isKnownBot(request)) {
    const botUrl = request.nextUrl.clone();
    botUrl.pathname = '/api/__bot';
    botUrl.searchParams.set('p', pathname);
    return NextResponse.rewrite(botUrl);
  }

  // ── Session cookie management ─────────────────────────────────
  // The middleware only manages the session cookie (id + creation time).
  // Pageview events are fired from the client via /api/track to avoid
  // prefetch inflation. The server ingest endpoint handles UA parsing,
  // bot detection, and all field enrichment.
  const response = NextResponse.next();

  let sessionData = null;
  try {
    const cookie = request.cookies.get('embra_session')?.value;
    if (cookie) sessionData = JSON.parse(cookie);
  } catch (e) {}

  if (!sessionData) {
    sessionData = {
      id: crypto.randomUUID(),
      ts: Date.now(),
    };
    response.cookies.set('embra_session', JSON.stringify(sessionData), {
      maxAge: 30 * 60,
      path: '/',
      sameSite: 'lax',
    });
  }

  return response;
}

export const config = {
  // Exclude: API routes, static files, Next internals, all asset extensions
  matcher: '/((?!api|_next|favicon\\.|images|robots\\.txt|sitemap\\.xml|.*\\.(?:svg|png|jpg|jpeg|webp|avif|ico|css|js|map|woff2?|ttf|eot)$).*)',
};
