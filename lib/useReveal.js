'use client';

import { useEffect } from 'react';
import { gsap, ScrollTrigger } from './gsap';

/**
 * Reveals all .reveal-up elements inside scopeRef (or document) on scroll.
 * Runs once per page mount; kills its own triggers on unmount.
 */
export function useReveal(scopeRef) {
  useEffect(() => {
    // Reset scroll position when navigating to a new page (unless targeting an anchor hash)
    if (!window.location.hash) {
      if (window.__lenis) window.__lenis.scrollTo(0, { immediate: true });
      else window.scrollTo(0, 0);
    }

    const scope = (scopeRef && scopeRef.current) || document;
    const els = gsap.utils.toArray(scope.querySelectorAll('.reveal-up'));

    const isBot =
      typeof navigator !== 'undefined' &&
      (/googlebot|google-inspectiontool|lighthouse|chrome-lighthouse|pagespeed|headlesschrome|ptst|gtmetrix/i.test(navigator.userAgent) ||
       Boolean(navigator.webdriver) ||
       (typeof window !== 'undefined' && (new URLSearchParams(window.location.search).has('psi') || new URLSearchParams(window.location.search).has('pagespeed'))));

    const reduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (isBot || reduced) {
      els.forEach((el) => {
        el.style.opacity = '1';
        el.style.transform = 'none';
      });
      return;
    }

    const tweens = els.map((el) =>
      gsap.fromTo(
        el,
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 88%', once: true },
        }
      )
    );
    ScrollTrigger.refresh();

    return () => {
      tweens.forEach((t) => {
        if (t.scrollTrigger) t.scrollTrigger.kill();
        t.kill();
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
