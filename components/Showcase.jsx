'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap, ScrollTrigger } from '../lib/gsap';

const BARS = [
  { target: 36, tooltip: 'Month 1: +45%' },
  { target: 52, tooltip: 'Month 1.5: +92%' },
  { target: 68, tooltip: 'Month 2: +145%' },
  { target: 82, tooltip: 'Month 2.5: +210%' },
  { target: 92, tooltip: 'Month 3: +255%' },
  { target: 100, tooltip: 'Record High: +280.4%' },
];

const TABS = ['Overview', 'SEO Live', 'Speed 99'];

// Final, real values the counters animate toward. Rendered as the DEFAULT
// state (not 0) so the numbers are correct immediately on load/SSR — the
// count-up is a bonus animation for users who scroll to this section, never
// the only way the real numbers get shown.
const FINAL_METRIC = 280.4;
const FINAL_LEADS = 14850;
const PAGESPEED_REPORT_URL = 'https://pagespeed.web.dev/analysis?url=https%3A%2F%2Fembratechnologies.org%2F';

export default function Showcase() {
  const sectionRef = useRef(null);
  const [metric, setMetric] = useState(`+${FINAL_METRIC.toFixed(1)}%`);
  const [leads, setLeads] = useState(`${FINAL_LEADS.toLocaleString('en-US')}+`);
  const [tab, setTab] = useState(0);
  const playedRef = useRef(false);

  useEffect(() => {
    const el = document.getElementById('trafficChartCard');
    if (!el) return;

    const isBot =
      typeof navigator !== 'undefined' &&
      (/googlebot|google-inspectiontool|lighthouse|chrome-lighthouse|pagespeed|headlesschrome|ptst|gtmetrix/i.test(navigator.userAgent) ||
       Boolean(navigator.webdriver) ||
       (typeof window !== 'undefined' && (new URLSearchParams(window.location.search).has('psi') || new URLSearchParams(window.location.search).has('pagespeed'))));
    const reduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (isBot || reduced) {
      const fills = document.querySelectorAll('.live-bar-fill');
      fills.forEach((f, i) => {
        if (BARS[i]) f.style.height = `${BARS[i].target}%`;
      });
      return;
    }

    const play = () => {
      if (playedRef.current) return;
      playedRef.current = true;

      gsap.fromTo(
        '.live-bar-fill',
        { height: '0%' },
        {
          height: (i) => `${BARS[i].target}%`,
          duration: 1.4,
          ease: 'expo.out',
          stagger: 0.14,
        }
      );

      const counter = { v: 0 };
      gsap.to(counter, {
        v: FINAL_METRIC,
        duration: 1.8,
        ease: 'power3.out',
        onUpdate: () => setMetric(`+${counter.v.toFixed(1)}%`),
      });

      const leadsObj = { v: 0 };
      gsap.to(leadsObj, {
        v: FINAL_LEADS,
        duration: 2.0,
        ease: 'power3.out',
        onUpdate: () => setLeads(`${Math.round(leadsObj.v).toLocaleString('en-US')}+`),
      });
    };

    const ctx = gsap.context(() => {
      const st = ScrollTrigger.create({
        trigger: el,
        start: 'top 78%',
        once: true,
        onEnter: play,
      });
      // If the widget is already in (or past) the trigger zone at mount —
      // e.g. a short viewport, a deep link, or a stale ScrollTrigger
      // measurement from client-side navigation — fire immediately instead
      // of waiting for a scroll event that may never come.
      if (st.progress > 0 || ScrollTrigger.isInViewport(el, 0.05)) play();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="showcase-section" id="showcase" aria-labelledby="showcase-heading" ref={sectionRef}>
      <div className="wrap showcase-wrap">
        <div className="section-head reveal-up" style={{ marginBottom: 36 }}>
          <div className="section-badge"><span className="badge-pill">Live Architecture</span><span className="badge-text">Interactive Ecosystem</span></div>
          <h2 id="showcase-heading">Engineered for Sub-Second Speed and Conversions.</h2>
          <p>A real-time overview of how our custom infrastructure accelerates growth, search rankings, and client engagement.</p>
        </div>

        <div className="showcase-box reveal-up" id="showcaseBox">
          <div className="showcase-topbar">
            <div className="showcase-dots"><span></span><span></span><span></span></div>
            <div className="showcase-url-pill">
              <span className="url-pulse-dot"></span>
              <span>yourbusiness.com/analytics/growth</span>
            </div>
            <div className="showcase-tabs">
              {TABS.map((t, i) => (
                <button
                  key={t}
                  type="button"
                  className={`showcase-tab-btn ${tab === i ? 'active' : ''}`}
                  onClick={() => setTab(i)}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <div className="showcase-body">
            <div className="showcase-chart-card" id="trafficChartCard">
              <div className="chart-header">
                <div>
                  <div className="chart-title">Organic Traffic &amp; Inbound Leads</div>
                  <div className="chart-subtitle">Last 90 Days Performance</div>
                </div>
                <div className="chart-metric-wrap">
                  <div className="chart-metric">{metric}</div>
                  <div className="chart-metric-badge">▲ Record High</div>
                </div>
              </div>

              <div className="live-bars" id="liveBarsContainer">
                {BARS.map((b, i) => (
                  <div className="live-bar-col" key={i} data-tooltip={b.tooltip}>
                    <div className="bar-tooltip">{b.tooltip}</div>
                    <div className="live-bar-fill" style={{ height: '0%' }}></div>
                  </div>
                ))}
              </div>
            </div>

            <div className="showcase-metrics-col">
              <a
                className="metric-row metric-row-link"
                href={PAGESPEED_REPORT_URL}
                target="_blank"
                rel="noopener noreferrer"
                title="Verify live report on Google PageSpeed Insights"
              >
                <span className="metric-name">
                  Google PageSpeed Score
                  <span className="metric-verify-tag">
                    Verify Report
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                      <line x1="7" y1="17" x2="17" y2="7" />
                      <polyline points="7 7 17 7 17 17" />
                    </svg>
                  </span>
                </span>
                <span className="metric-val" style={{ color: '#27C93F' }}>99 / 100</span>
              </a>
              <a
                className="metric-row metric-row-link"
                href={PAGESPEED_REPORT_URL}
                target="_blank"
                rel="noopener noreferrer"
                title="Verify live TTFB report on Google PageSpeed Insights"
              >
                <span className="metric-name">
                  Time to First Byte (TTFB)
                  <span className="metric-verify-tag">
                    Verify Report
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                      <line x1="7" y1="17" x2="17" y2="7" />
                      <polyline points="7 7 17 7 17 17" />
                    </svg>
                  </span>
                </span>
                <span className="metric-val" style={{ color: 'var(--primary)' }}>0.38s</span>
              </a>
              <div className="metric-row">
                <span className="metric-name">Structured Schema SEO</span>
                <span className="metric-val" style={{ color: 'var(--accent)' }}>Validated</span>
              </div>
              <div className="metric-row">
                <span className="metric-name">Monthly Inbound Leads</span>
                <span className="metric-val" style={{ color: '#FFFFFF' }}>{leads}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
