'use client';

import { useRef } from 'react';
import { useReveal } from '../lib/useReveal';
import dynamic from 'next/dynamic';

// Hero and Showcase are above the fold — load immediately
import Hero from './Hero';
import Showcase from './Showcase';

// Everything below the fold loads only when needed
const Marquee = dynamic(() => import('./Marquee'), { ssr: false });
const Services = dynamic(() => import('./Services'), { ssr: false });
const Process = dynamic(() => import('./Process'), { ssr: false });
const WhyUs = dynamic(() => import('./WhyUs'), { ssr: false });
const Testimonials = dynamic(() => import('./Testimonials'), { ssr: false });
const Faq = dynamic(() => import('./Faq'), { ssr: false });
const Cta = dynamic(() => import('./Cta'), { ssr: false });

export default function HomePage() {
  const ref = useRef(null);
  useReveal(ref);
  return (
    <div ref={ref}>
      <Hero />
      <Showcase />
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
