'use client';

import { useEffect, useRef } from 'react';
import { ScrollTrigger } from '../lib/gsap';
import dynamic from 'next/dynamic';
const ThreeCanvas = dynamic(() => import('./three/ThreeCanvas'), { ssr: false });


/* ================= 01/05 — BLUEPRINT GENESIS =================
   A browser interface draws itself into existence, line by line,
   the way an architect's blueprint resolves into a finished
   structure. Auto-plays when scrolled into view; replayable. */
function BlueprintStage() {
  const stageRef = useRef(null);

  const play = () => {
    const el = stageRef.current;
    if (!el) return;
    el.classList.remove('play');
    void el.offsetWidth; // force reflow to restart CSS animations
    el.classList.add('play');
  };

  useEffect(() => {
    const st = ScrollTrigger.create({
      trigger: stageRef.current,
      start: 'top 82%',
      once: true,
      onEnter: play,
    });
    return () => st.kill();
  }, []);

  return (
    <div className="blueprint-stage" ref={stageRef} aria-hidden="true">
      <svg viewBox="0 0 400 300" width="100%" height="100%">
        <rect className="bp-draw bp-frame" x="20" y="20" width="360" height="260" rx="12" />
        <g className="bp-fade bp-dots">
          <circle cx="38" cy="36" r="3" fill="var(--line)" />
          <circle cx="48" cy="36" r="3" fill="var(--line)" />
          <circle cx="58" cy="36" r="3" fill="var(--line)" />
        </g>
        <rect className="bp-fade bp-logo" x="32" y="48" width="30" height="12" rx="3" fill="var(--line)" />
        <g className="bp-navlines">
          <line className="bp-draw" x1="270" y1="54" x2="296" y2="54" />
          <line className="bp-draw" x1="304" y1="54" x2="330" y2="54" />
          <line className="bp-draw" x1="338" y1="54" x2="364" y2="54" />
        </g>
        <line className="bp-draw bp-divider" x1="20" y1="70" x2="380" y2="70" />
        <line className="bp-draw bp-headline" x1="48" y1="104" x2="230" y2="104" strokeWidth="10" />
        <line className="bp-draw bp-subhead1" x1="48" y1="126" x2="280" y2="126" strokeWidth="5" />
        <line className="bp-draw bp-subhead2" x1="48" y1="138" x2="200" y2="138" strokeWidth="5" />
        <rect className="bp-draw bp-btn-outline" x="48" y="156" width="110" height="32" rx="16" />
        <rect className="bp-cta-fill" x="48" y="156" width="110" height="32" rx="16" />
        <line className="bp-cta-label" x1="68" y1="172" x2="118" y2="172" />
        <g className="bp-cards">
          <rect className="bp-draw" x="48" y="214" width="96" height="50" rx="6" />
          <rect className="bp-draw" x="156" y="214" width="96" height="50" rx="6" />
          <rect className="bp-draw" x="264" y="214" width="96" height="50" rx="6" />
        </g>
        <g className="bp-card-fills">
          <rect x="48" y="214" width="96" height="50" rx="6" />
          <rect x="156" y="214" width="96" height="50" rx="6" />
          <rect x="264" y="214" width="96" height="50" rx="6" />
        </g>
        <line className="bp-draw bp-footer" x1="20" y1="272" x2="380" y2="272" />
      </svg>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" aria-labelledby="services-heading">
      <div className="wrap">
        <div className="section-head reveal-up">
          <div className="section-badge"><span className="badge-pill">Services</span><span className="badge-text">What We Deliver</span></div>
          <h2 id="services-heading">Everything Your Business Needs to Grow Online.</h2>
          <p>Custom-engineered digital solutions built to elevate your brand and convert visitors into long-term clients.</p>
        </div>

        <div className="bento-grid">

          {/* Card 1 — Web development, featuring Blueprint Genesis 01/05 */}
          <article className="bento-card reveal-up">
            <div className="card-ui-mockup">
              <BlueprintStage />
            </div>
            <div className="bento-card-body">
              <div className="bento-card-toprow">
                <h3>Custom Website Design &amp; Development</h3>
                <button type="button" className="replay-btn" onClick={() => {
                  const el = document.querySelector('.blueprint-stage');
                  if (el) { el.classList.remove('play'); void el.offsetWidth; el.classList.add('play'); }
                }}>
                  <span className="replay-icon" aria-hidden="true">↻</span>Replay 01/05
                </button>
              </div>
              <p>Bespoke, responsive websites built around your business goals and customer journey — engineered to load in under a second.</p>
              <div className="bento-card-tags"><span className="bento-tag">Custom UI/UX</span><span className="bento-tag">Mobile First</span><span className="bento-tag">Sub-Second Speed</span><span className="bento-tag">CMS Ready</span></div>
              <a href="#contact" className="btn-flip btn-ghost btn-small"><span className="btn-flip-inner"><span className="btn-flip-state">Start Your Project <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" /></svg></span><span className="btn-flip-state" aria-hidden="true">Start Your Project <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg></span></span></a>
            </div>
          </article>

          {/* Card 2 — SEO, featuring Rank Climb (B) */}
          <article className="bento-card reveal-up">
            <div className="card-ui-mockup three-mockup">
              <div className="ui-seo-stats mockup-overlay"><span className="ui-stat-pill">Rank #1 Google</span><span className="ui-stat-score">+280% Traffic</span></div>
              <ThreeCanvas type='rankClimb' />
              <span className="mockup-tag">Rank Climb</span>
            </div>
            <div className="bento-card-body">
              <h3>Search Engine Optimization (SEO)</h3>
              <p>Technical architecture, keyword targeting, and on-page optimization so your business ranks at the top when customers search.</p>
              <div className="bento-card-tags"><span className="bento-tag">Technical SEO</span><span className="bento-tag">Keyword Strategy</span><span className="bento-tag">Schema Markup</span><span className="bento-tag">Local Search</span></div>
              <a href="#contact" className="btn-flip btn-ghost btn-small"><span className="btn-flip-inner"><span className="btn-flip-state">Improve My Rankings <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" /></svg></span><span className="btn-flip-state" aria-hidden="true">Improve My Rankings <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg></span></span></a>
            </div>
          </article>

          {/* Card 3 — Digital Identity, featuring Constellation (C) */}
          <article className="bento-card reveal-up">
            <div className="card-ui-mockup three-mockup">
              <ThreeCanvas type='constellation' />
              <span className="mockup-tag">Constellation</span>
            </div>
            <div className="bento-card-body">
              <h3>Digital Identity Management</h3>
              <p>Consistent, professional social media content and brand voice across platforms — building trust wherever clients find you.</p>
              <div className="bento-card-tags"><span className="bento-tag">Brand Cohesion</span><span className="bento-tag">Content Strategy</span><span className="bento-tag">Social Growth</span><span className="bento-tag">Multi-Platform</span></div>
              <a href="#contact" className="btn-flip btn-ghost btn-small"><span className="btn-flip-inner"><span className="btn-flip-state">Build My Brand <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" /></svg></span><span className="btn-flip-state" aria-hidden="true">Build My Brand <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg></span></span></a>
            </div>
          </article>

          {/* Card 4 — Digital Systems & Integrations, featuring Data Streams (B) */}
          <article className="bento-card reveal-up">
            <div className="card-ui-mockup three-mockup">
              <ThreeCanvas type='dataStreams' />
              <span className="mockup-tag">Data Streams</span>
            </div>
            <div className="bento-card-body">
              <h3>Digital Systems &amp; Seamless Integrations</h3>
              <p>Payment gateways, CRM automations, lead capture funnels, and analytics pipelines tailored smoothly to your operations.</p>
              <div className="bento-card-tags"><span className="bento-tag">Stripe Payments</span><span className="bento-tag">CRM Sync</span><span className="bento-tag">Lead Funnels</span><span className="bento-tag">Analytics</span></div>
              <a href="#contact" className="btn-flip btn-ghost btn-small"><span className="btn-flip-inner"><span className="btn-flip-state">Automate My Business <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" /></svg></span><span className="btn-flip-state" aria-hidden="true">Automate My Business <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg></span></span></a>
            </div>
          </article>

          {/* Card 5 — Custom UI Design, featuring Layer Stack (C) */}
          <article className="bento-card reveal-up">
            <div className="card-ui-mockup three-mockup">
              <ThreeCanvas type='layerStack' />
              <span className="mockup-tag">Layer Stack</span>
            </div>
            <div className="bento-card-body">
              <h3>Custom UI Design</h3>
              <p>Interfaces built for clarity and conversion. Consistent design systems, purposeful micro-interactions, and layouts your customers navigate without thinking — all tested against real usability standards.</p>
              <div className="bento-card-tags"><span className="bento-tag">Design Systems</span><span className="bento-tag">Motion Language</span><span className="bento-tag">Prototyping</span><span className="bento-tag">Accessibility-First</span></div>
              <a href="#contact" className="btn-flip btn-ghost btn-small"><span className="btn-flip-inner"><span className="btn-flip-state">Design My Interface <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" /></svg></span><span className="btn-flip-state" aria-hidden="true">Design My Interface <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg></span></span></a>
            </div>
          </article>

          {/* Card 6 — Launch & Scale, featuring Rocket Arc (A) */}
          <article className="bento-card reveal-up">
            <div className="card-ui-mockup three-mockup">
              <ThreeCanvas type='rocketArc' />
              <span className="mockup-tag">Rocket Arc</span>
            </div>
            <div className="bento-card-body">
              <h3>Launch &amp; Scale</h3>
              <p>Zero-drama launches, then growth infrastructure. CI/CD, observability, CRO experiments and scaling paths that hold under real traffic.</p>
              <div className="bento-card-tags"><span className="bento-tag">CI/CD Pipelines</span><span className="bento-tag">Observability</span><span className="bento-tag">CRO Testing</span><span className="bento-tag">Traffic-Ready</span></div>
              <a href="#contact" className="btn-flip btn-ghost btn-small"><span className="btn-flip-inner"><span className="btn-flip-state">Scale My Business <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" /></svg></span><span className="btn-flip-state" aria-hidden="true">Scale My Business <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg></span></span></a>
            </div>
          </article>

        </div>
      </div>
    </section>
  );
}


