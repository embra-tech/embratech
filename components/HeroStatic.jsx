'use client';

/**
 * HeroStatic — Lightweight hero served to bots and slow connections.
 * Zero Three.js, zero GSAP. Pure CSS. Same visible content as Hero.
 * Used by HomePage when navigator.connection.saveData or window.__IS_BOT__.
 */
export default function HeroStatic() {
  return (
    <section className="hero hero-static" id="heroSection" aria-labelledby="hero-heading">
      {/* Pure CSS gradient background — no WebGL */}
      <div className="hero-bg hero-static-bg" aria-hidden="true">
        <div className="hero-grid" />
        <div className="hero-ray-line r1"><div className="hero-ray-beam" /></div>
        <div className="hero-ray-line r2"><div className="hero-ray-beam" /></div>
        <div className="hero-ray-line r3"><div className="hero-ray-beam" /></div>
      </div>
      <div className="hero-overlay" aria-hidden="true" />

      <div className="wrap hero-inner">
        <div className="hero-badge-wrap revealed">
          <a href="#services" className="section-badge">
            <span className="badge-pill">New</span>
            <span className="badge-text">See It Before You Pay</span>
            <svg className="badge-arrow" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </a>
        </div>

        <h1 id="hero-heading" style={{ opacity: 1 }}>
          <span className="word revealed">Your</span>{' '}
          <span className="word revealed">website.</span>{' '}
          <span className="word revealed">Built</span>{' '}
          <span className="word revealed">before</span>{' '}
          <span className="word revealed">you</span>{' '}
          <span className="word revealed"><span className="highlight-text">buy.</span></span>
        </h1>

        <p className="hero-sub revealed">
          We build your homepage in 24 hours, for free. No templates, no commitments. See real work built for your business before you spend a cent. Love it and we build the rest. Walk away and you owe us nothing.
        </p>

        <div className="hero-actions revealed">
          <a href="/contact" className="btn-flip btn-primary btn-large">
            <span className="btn-flip-inner">
              <span className="btn-flip-state">
                Get My Free Sample{' '}
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
                </svg>
              </span>
              <span className="btn-flip-state" aria-hidden="true">
                Get My Free Sample{' '}
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </span>
            </span>
          </a>
          <a href="/portfolio" className="btn-flip btn-ghost btn-large">
            <span className="btn-flip-inner">
              <span className="btn-flip-state">See Our Work</span>
              <span className="btn-flip-state" aria-hidden="true">See Our Work</span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
