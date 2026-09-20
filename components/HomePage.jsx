'use client';

import { useRef, useState, useEffect, Suspense, lazy } from 'react';
import { useReveal } from '../lib/useReveal';
import Hero from './Hero';
import HeroStatic from './HeroStatic';

// ── Lazy-load everything below the fold ──────────────────────────
// This ensures only Hero is in the critical JS path; all other
// components are split into separate chunks loaded after LCP.
const Showcase    = lazy(() => import('./Showcase'));
const Marquee     = lazy(() => import('./Marquee'));
const Services    = lazy(() => import('./Services'));
const Process     = lazy(() => import('./Process'));
const WhyUs       = lazy(() => import('./WhyUs'));
const Testimonials = lazy(() => import('./Testimonials'));
const Faq         = lazy(() => import('./Faq'));
const Cta         = lazy(() => import('./Cta'));

function useIsLightweightMode() {
  const [lightweight, setLightweight] = useState(false);
  useEffect(() => {
    const saveData = navigator?.connection?.saveData;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (saveData || reducedMotion) setLightweight(true);
  }, []);
  return lightweight;
}

export default function HomePage() {
  const ref = useRef(null);
  useReveal(ref);
  const lightweight = useIsLightweightMode();

  return (
    <div ref={ref}>
      {lightweight ? <HeroStatic /> : <Hero />}
      <Suspense fallback={null}>
        <Showcase />
        <Marquee />
        <Services />
        <Process />
        <WhyUs />
        <Testimonials />
        <Faq variant="home" />
        <Cta variant="home" />
      </Suspense>
    </div>
  );
}
