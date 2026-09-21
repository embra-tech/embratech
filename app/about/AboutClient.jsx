'use client';

import { useEffect, useRef, useState } from 'react';
import { useReveal } from '../../lib/useReveal';
import { gsap, ScrollTrigger } from '../../lib/gsap';
import PageHeader from '../../components/PageHeader';
import Cta from '../../components/Cta';
import Breadcrumb from '../../components/Breadcrumb';

const STATS = [
  { value: 5, suffix: '', label: 'Live client websites built and actively ranking on Google' },
  { value: 96, suffix: '/100', label: 'Average PageSpeed score across our 5 live builds — verify any of them', decimals: 0 },
  { value: 24, suffix: 'h', label: 'Hours to your free custom homepage sample, no deposit required' },
  { value: 7, suffix: '-day', label: 'Satisfaction window — if the full build is not right, you walk away' },
];

const VALUES = [
  { title: 'Clarity over complexity', text: 'We translate technical work into plain language, honest timelines, and transparent pricing — no jargon, no hidden fees.' },
  { title: 'Precision in every build', text: 'Every layout, interaction, and line of code is deliberate and tested — no bloated templates, ever.' },
  { title: 'Results you can measure', text: 'Speed scores, search rankings, inbound leads. We build for outcomes you can verify in Google Analytics and Search Console.' },
  { title: 'Partnership beyond launch', text: 'We stay on as your digital team — maintaining, optimizing, and growing your presence long after go-live.' },
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
            sub="Most service businesses lose customers every day to competitors with worse skills but a better-looking site. We fix that — with websites written from scratch in React, search rankings that bring in real leads, and a team you can actually reach."
          />
        </div>
      </section>

      <section className="about-story">
        <div className="wrap about-story-grid">
          <div className="reveal-up">
            <h2>Why we exist</h2>
            <p>We started Embra Technologies because great web work was gatekept behind agency retainers most local businesses can't afford. We changed the model: flat pricing, senior-level execution, and you see the actual work before you pay a cent.</p>
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
            <h3>Senior builders — not account managers.</h3>
            <p>
              We are a small team of senior designers and engineers based in Brooklyn, NY. When you email us, the person who replies is the same person writing your code and designing your pages. No account managers, no handoffs to junior staff, no work shipped overseas.
            </p>
            <p>
              We built Embra because great web work was gatekept behind agency retainers most local businesses can't justify. Our answer was to cut the overhead entirely and put the savings back into execution quality — which is why our sites average 96/100 on PageSpeed and rank, while costing a fraction of what a full-service agency charges.
            </p>
            <p style={{marginTop: '20px', fontSize: '14px', color: 'rgba(255,255,255,0.5)', fontStyle: 'italic'}}>
              Want to know who you're working with? Reach out directly at sales@embratechnologies.org — we reply within one business day, not a bot.
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

