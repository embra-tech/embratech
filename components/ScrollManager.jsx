'use client';

import { useEffect } from 'react';

export default function ScrollManager({ children }) {
  useEffect(() => {
    let lenis = null;
    let rafHandle = null;

    // Dynamic import keeps GSAP + Lenis out of the initial JS bundle
    // so they don't block first paint. They load after React hydrates.
    Promise.all([
      import('lenis'),
      import('../lib/gsap'),
    ]).then(([{ default: Lenis }, { gsap, ScrollTrigger }]) => {
      lenis = new Lenis({
        lerp: 0.09,
        smoothWheel: true,
        wheelMultiplier: 1,
      });
      window.__lenis = lenis;

      lenis.on('scroll', ScrollTrigger.update);
      const raf = (time) => lenis.raf(time * 1000);
      gsap.ticker.add(raf);
      gsap.ticker.lagSmoothing(0);

      // Re-measure once fonts are ready and again on full window load
      const refresh = () => ScrollTrigger.refresh();
      if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(refresh);
      }
      window.addEventListener('load', refresh);

      // Store cleanup references
      rafHandle = { gsap, raf, refresh };
    });

    return () => {
      if (rafHandle) {
        window.removeEventListener('load', rafHandle.refresh);
        rafHandle.gsap.ticker.remove(rafHandle.raf);
      }
      if (lenis) {
        lenis.destroy();
        window.__lenis = null;
      }
    };
  }, []);

  return children;
}
