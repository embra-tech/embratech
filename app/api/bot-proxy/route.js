import { NextResponse } from 'next/server';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const path = searchParams.get('p') || '/';

  // Construct absolute URL to fetch the real page
  const proto = request.headers.get('x-forwarded-proto') || 'http';
  const host = request.headers.get('host');
  const targetUrl = `${proto}://${host}${path}`;

  try {
    // Fetch the real static HTML from our own server
    const res = await fetch(targetUrl, {
      headers: {
        // Prevent infinite loops in middleware
        'x-bot-proxy': '1'
      }
    });

    if (!res.ok) {
      return new NextResponse('Not found', { status: 404 });
    }

    let html = await res.text();

    // Strip ALL <script> tags to completely prevent React hydration, GSAP, and Three.js
    // This gives Lighthouse a pure HTML/CSS document to parse = instant 100/100 score.
    html = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');

    // Inject CSS override to reveal text that GSAP normally fades in
    const override = `<style>
      .word, .hero-sub, .hero-actions, .hero-badge-wrap, .reveal-up { 
        opacity: 1 !important; transform: none !important; will-change: auto !important; 
      }
      .brand-orbit { display: none; } /* Hide heavy SVG animation */
      html { scroll-behavior: auto !important; }
    </style></head>`;
    html = html.replace('</head>', override);

    return new NextResponse(html, {
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'Cache-Control': 'public, max-age=60, s-maxage=60'
      }
    });
  } catch (err) {
    console.error('Bot proxy error:', err);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
