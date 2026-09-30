'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

export default function DurationTracker() {
  const pathname = usePathname();
  const startTimeRef = useRef(Date.now());
  const currentPathRef = useRef(pathname);

  useEffect(() => {
    // We only want to set the initial values once on mount
    startTimeRef.current = Date.now();
    currentPathRef.current = pathname;
  }, []);

  useEffect(() => {
    // Helper to send beacon
    const sendDuration = (path, start) => {
      const elapsed_ms = Date.now() - start;
      if (elapsed_ms < 100) return; // Ignore extremely short blips
      
      let sessionId = null;
      try {
        const match = document.cookie.match(/(?:^|;\s*)embra_session=([^;]*)/);
        if (match) {
          const data = JSON.parse(decodeURIComponent(match[1]));
          sessionId = data.id;
        }
      } catch (e) {}

      if (!sessionId) return; 

      const payload = {
        session_id: sessionId,
        path: path,
        elapsed_ms: elapsed_ms
      };

      const blob = new Blob([JSON.stringify(payload)], { type: 'application/json' });
      navigator.sendBeacon('/api/duration', blob);
    };

    // If pathname changed (SPA navigation)
    if (currentPathRef.current !== pathname) {
      sendDuration(currentPathRef.current, startTimeRef.current);
      currentPathRef.current = pathname;
      startTimeRef.current = Date.now();
    }

    // Handle visibilitychange / pagehide
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        sendDuration(currentPathRef.current, startTimeRef.current);
        // Reset timer so we don't double-count if they come back to the tab
        startTimeRef.current = Date.now(); 
      }
    };
    
    const handlePageHide = () => {
      sendDuration(currentPathRef.current, startTimeRef.current);
    };

    window.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('pagehide', handlePageHide);

    return () => {
      window.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('pagehide', handlePageHide);
    };
  }, [pathname]);

  return null;
}
