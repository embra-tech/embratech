import { NextResponse } from 'next/server';

// ── Session cookie management ───────────────────────────────────
// The middleware only manages the session cookie (id + creation time).
// Pageview events are fired from the client via /api/track to avoid
// prefetch inflation. The server ingest endpoint handles UA parsing,
// bot detection, and all field enrichment.
//
// 2026-10-01: the former "bot-optimized serving" branch was removed.
// It rewrote search-engine crawlers (Googlebot, Bingbot, Lighthouse…) to
// /api/__bot, but that route was never built (underscore-prefixed folders
// are private in the App Router), so every crawler received a 404 and the
// site could not be indexed. Crawlers now receive exactly the same response
// as visitors. Details and revert steps: INDEXING_FIX_CHANGELOG.md
export function middleware(request) {
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
      // HTTPS-only in production; still readable by DurationTracker (not httpOnly).
      secure: process.env.NODE_ENV === 'production',
    });
  }

  return response;
}

export const config = {
  // Exclude: API routes, static files, Next internals, all asset extensions
  matcher: '/((?!api|_next|favicon\\.|images|robots\\.txt|sitemap\\.xml|.*\\.(?:svg|png|jpg|jpeg|webp|avif|ico|css|js|map|woff2?|ttf|eot)$).*)',
};
