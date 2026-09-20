'use client';

import { useEffect, useRef, useState } from 'react';
import { useReveal } from '../../lib/useReveal';
import { gsap, ScrollTrigger } from '../../lib/gsap';
import PageHeader from '../../components/PageHeader';
import Cta from '../../components/Cta';
import Breadcrumb from '../../components/Breadcrumb';

const STATS = [
  { value: 1000, suffix: '+', label: 'Hours of design & development craftsmanship' },
  { value: 4.8, suffix: '/5', label: 'Average client satisfaction rating', decimals: 1 },
  { value: 99, suffix: '/100', label: 'Typical Google PageSpeed performance score' },
  { value: 24, suffix: 'h', label: 'Free homepage sample turnaround time' },
];

const VALUES = [
  { title: 'Clarity over complexity', text: 'We translate technical work into plain language, honest timelines, and transparent pricing — no jargon, no hidden fees.' },
  { title: 'Precision in every build', text: 'Every layout, interaction, and line of code is deliberate and tested — no bloated templates, ever.' },
  { title: 'Results you can measure', text: 'Speed scores, search rankings, inbound leads. We build for outcomes you can verify in Google Analytics and Search Console.' },
  { title: 'Partnership beyond launch', text: 'We stay on as your digital team — maintaining, optimising, and growing your presence long after go-live.' },
];

export default function AboutClient() {
  const ref = useRef(null);
  useReveal(ref);
  const statsRef = useRef(null);

  // Initialise to final values so SSR/crawlers and non-scrolling users always see real numbers.
  // The GSAP animation is purely a cosmetic count-up bonus for users who scroll to the section.
  const [vals, setVals] = useState(
    STATS.map((s) => (s.decimals ? s.value.toFixed(s.decimals) : s.value.toLocaleString('en-US')))
  );

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: statsRef.current,
        start: 'top 82%',
        once: true,
        onEnter: () => {
          STATS.forEach((s, i) => {
            const obj = { v: 0 };
            gsap.to(obj, {
              v: s.value,
              duration: 1.8,
              delay: i * 0.12,
              ease: 'power3.out',
              onUpdate: () => {
                setVals((prev) => {
                  const next = [...prev];
                  next[i] = s.decimals ? obj.v.toFixed(s.decimals) : Math.round(obj.v).toLocaleString('en-US');
                  return next;
                });
              },
            });
          });
        },
      });
    }, statsRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={ref} className="page-shell">
      <section className="page-hero">
        <div className="wrap">
          <Breadcrumb label="About" href="/about" />
          <PageHeader
            pill="About"
            badge="Who We Are"
            title={<>Built for businesses that <span className="highlight-text">deserve to be found.</span></>}
            sub="Most service businesses lose customers every day to competitors with worse skills but a better online presence. We fix that — with hand-crafted websites, search rankings that bring in real leads, and a team you can actually reach."
          />
        </div>
      </section>

      <section className="about-story">
        <div className="wrap about-story-grid">
          <div className="reveal-up">
            <h2>Why we exist</h2>
            <p>Most service businesses lose customers every day to competitors with worse skills but better websites. We started Embra Technologies to fix that imbalance — giving hardworking local businesses the same calibre of digital presence normally reserved for big-budget brands.</p>
          </div>
          <div className="reveal-up">
            <h2>How we work</h2>
            <p>Strategy first, then design, then code. Every project begins with understanding your customers and conversion goals. The result: websites that load in under a second, rank on Google, and turn visitors into booked jobs and paying clients.</p>
          </div>
        </div>
      </section>

      
      <section className="about-team">
        <div className="wrap cs-two-col">
          <div className="cs-col-label reveal-up">The Team</div>
          <div className="cs-col-body reveal-up">
            <h3>A lean team built for impact, not overhead.</h3>
            <p>
              When you hire a massive agency, you pay for their downtown office, their account managers, and their ping-pong tables. The actual work is often handed off to junior developers or outsourced entirely.
            </p>
            <p>
              We built Embra Technologies to be different. We are a small, tight-knit team of senior designers and engineers. When you talk to us, you're talking directly to the people building your site. No middlemen. No lost translation. Just fast execution and accountability.
            </p>
          </div>
        </div>
      </section>

      <section className="about-stats">
        <div className="wrap">
          <div className="stats-grid" ref={statsRef}>
            {STATS.map((s, i) => (
              <div className="stat-card reveal-up" key={s.label}>
                <div className="stat-value">{vals[i]}<span className="stat-suffix">{s.suffix}</span></div>
                <p>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-values">
        <div className="wrap">
          <div className="section-head reveal-up">
            <div className="section-badge"><span className="badge-pill">Values</span><span className="badge-text">What Drives Us</span></div>
            <h2>The principles behind every build.</h2>
          </div>
          <div className="why-grid">
            {VALUES.map((v) => (
              <div className="why-card reveal-up" key={v.title}>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

            <Cta variant="about" />
    </div>
  );
}

