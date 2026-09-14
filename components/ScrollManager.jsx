'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';
import { gsap, ScrollTrigger } from '../lib/gsap';

export default function ScrollManager({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.09,
      smoothWheel: true,
      wheelMultiplier: 1,
    });
    window.__lenis = lenis;

    lenis.on('scroll', ScrollTrigger.update);
    const raf = (time) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    // Web fonts (Figtree/Inter, loaded with display:'swap') finish swapping in
    // asynchronously and can reflow the page after ScrollTrigger has already
    // measured it, leaving trigger start/end offsets stale. That's the classic
    // cause of scroll-triggered content (counters, reveal-ups) never firing on
    // some loads. Re-measure once fonts are actually ready, and again after
    // full window load (images can also shift layout).
    const refresh = () => ScrollTrigger.refresh();
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(refresh);
    }
    window.addEventListener('load', refresh);

    return () => {
      window.removeEventListener('load', refresh);
      gsap.ticker.remove(raf);
      lenis.destroy();
      window.__lenis = null;
    };
  }, []);

  return children;
}
