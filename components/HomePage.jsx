'use client';

import { useRef } from 'react';
import { useReveal } from '../lib/useReveal';
import Hero from './Hero';
import Showcase from './Showcase';
import FeaturedWork from './FeaturedWork';
import Marquee from './Marquee';
import Services from './Services';
import Process from './Process';
import WhyUs from './WhyUs';
import Testimonials from './Testimonials';
import Faq from './Faq';
import Cta from './Cta';

export default function HomePage() {
  const ref = useRef(null);
  useReveal(ref);
  return (
    // 2026-11-20: .home-shell scopes the shared premium effects (globals.css, components/PremiumFx.jsx) to the homepage.
    <div ref={ref} className="home-shell">
      <Hero />
      <Showcase />
      <FeaturedWork />
      <Marquee />
      <Services />
      <Process />
      <WhyUs />
      <Testimonials />
      <Faq variant="home" />
      <Cta variant="home" />
    </div>
  );
}
