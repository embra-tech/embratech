'use client';

import { useEffect, useRef, useCallback } from 'react';
import { usePathname } from 'next/navigation';

// ── Asset path filter (mirrors server) ──────────────────────────────────────
const ASSET_RE = /^\/(_next\/|api\/|images\/|favicon\.|.*\.(svg|png|jpg|jpeg|webp|avif|ico|css|js|map|woff2?|ttf|eot)$)/i;
const SKIP_PATHS = new Set(['/robots.txt', '/sitemap.xml']);
function isAssetPath(p) {
  return ASSET_RE.test(p) || SKIP_PATHS.has(p);
}

// ── Helpers ─────────────────────────────────────────────────────────────────
function getSessionId() {
  try {
    const match = document.cookie.match(/(?:^|;\s*)embra_session=([^;]*)/);
    if (match) return JSON.parse(decodeURIComponent(match[1])).id;
  } catch (e) {}
  return null;
}

function sendTrack(events) {
  try {
    const payload = JSON.stringify(Array.isArray(events) ? events : [events]);
    const blob = new Blob([payload], { type: 'application/json' });
    if (navigator.sendBeacon && navigator.sendBeacon('/api/track', blob)) return;
    // Fallback
    fetch('/api/track', { method: 'POST', body: payload, keepalive: true,
      headers: { 'Content-Type': 'application/json' } }).catch(() => {});
  } catch (e) {}
}

// ── Component ───────────────────────────────────────────────────────────────
export default function VisitorTracker() {
  const pathname = usePathname();

  // Refs survive re-renders without triggering them
  const currentPath = useRef(null);
  const navSeq = useRef(0);
  const pageLoadTime = useRef(0);
  const visibleTime = useRef(0);       // accumulated visible ms for current page
  const lastVisibleAt = useRef(0);     // timestamp when tab last became visible
  const lastPageviewTs = useRef(0);    // dedup: last pageview send timestamp
  const durationSent = useRef(false);  // whether duration was already sent for this page

  // ── Accumulate visible time ───────────────────────────────────────────────
  const startVisibleTimer = useCallback(() => {
    if (document.visibilityState === 'visible') {
      lastVisibleAt.current = Date.now();
    }
  }, []);

  const pauseVisibleTimer = useCallback(() => {
    if (lastVisibleAt.current > 0) {
      visibleTime.current += Date.now() - lastVisibleAt.current;
      lastVisibleAt.current = 0;
    }
  }, []);

  const getAccumulatedMs = useCallback(() => {
    let total = visibleTime.current;
    if (lastVisibleAt.current > 0) {
      total += Date.now() - lastVisibleAt.current;
    }
    return total;
  }, []);

  // ── Send duration for current page (exactly once) ─────────────────────────
  const flushDuration = useCallback(() => {
    if (durationSent.current) return;
    pauseVisibleTimer();
    const ms = getAccumulatedMs();
    // Bounds: 300 ms – 30 min
    if (ms < 300 || ms > 1_800_000) return;

    const sid = getSessionId();
    if (!sid) return;

    durationSent.current = true;
    sendTrack({
      event_type: 'page_duration',
      session_id: sid,
      path: currentPath.current,
      nav_sequence: navSeq.current,
      duration_ms: ms,
    });
  }, [pauseVisibleTimer, getAccumulatedMs]);

  // ── Fire pageview (with dedup + visibility gate) ──────────────────────────
  const firePageview = useCallback((path) => {
    if (isAssetPath(path)) return;
    if (document.visibilityState !== 'visible') return;

    const now = Date.now();
    // Dedup: ignore if same session+path within 1 second
    if (currentPath.current === path && now - lastPageviewTs.current < 1000) return;

    // Flush duration for previous page first
    if (currentPath.current !== null) {
      flushDuration();
    }

    // Increment nav sequence (stored in sessionStorage for persistence)
    let seq = 1;
    try {
      const stored = sessionStorage.getItem('embra_nav_seq');
      if (stored) seq = parseInt(stored, 10) + 1;
    } catch (e) {}
    try { sessionStorage.setItem('embra_nav_seq', String(seq)); } catch (e) {}

    const prevPath = currentPath.current;
    currentPath.current = path;
    navSeq.current = seq;
    pageLoadTime.current = now;
    visibleTime.current = 0;
    lastVisibleAt.current = now;
    durationSent.current = false;
    lastPageviewTs.current = now;

    const sid = getSessionId();
    if (!sid) return;

    sendTrack({
      event_type: 'pageview',
      session_id: sid,
      path,
      nav_sequence: seq,
      referrer_path: prevPath,
    });
  }, [flushDuration]);

  // ── Visibility change handler ─────────────────────────────────────────────
  useEffect(() => {
    const handleVisibility = () => {
      try {
        if (document.visibilityState === 'hidden') {
          // User is leaving, flush duration
          flushDuration();
        } else {
          // User came back, if duration wasn't sent yet, resume timer
          if (!durationSent.current) {
            startVisibleTimer();
          }
        }
      } catch (e) {}
    };

    const handlePageHide = () => {
      try { flushDuration(); } catch (e) {}
    };

    document.addEventListener('visibilitychange', handleVisibility);
    window.addEventListener('pagehide', handlePageHide);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibility);
      window.removeEventListener('pagehide', handlePageHide);
    };
  }, [flushDuration, startVisibleTimer]);

  // ── React to pathname changes ─────────────────────────────────────────────
  useEffect(() => {
    // This effect fires on initial mount AND on every SPA route change.
    // usePathname() only updates on real navigations, NOT on prefetch.
    firePageview(pathname);
  }, [pathname, firePageview]);

  return null;
}
