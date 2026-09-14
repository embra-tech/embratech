'use client';

import { useRef } from 'react';
import { useReveal } from '../../lib/useReveal';
import PageHeader from '../../components/PageHeader';
import Faq from '../../components/Faq';
import Cta from '../../components/Cta';
import Breadcrumb from '../../components/Breadcrumb';

export default function PricingClient() {
  const ref = useRef(null);
  useReveal(ref);

  return (
    <div ref={ref} className="page-shell">
      <section className="page-hero">
        <div className="wrap">
          <Breadcrumb label="Pricing" href="/pricing" />
          <PageHeader
            pill="Pricing"
            badge="Simple & Transparent"
            title={<>Honest pricing. <span className="highlight-text">No surprises.</span></>}
            sub="One clear build price, one clear monthly care plan. See a free custom homepage sample of your own business before you pay a cent."
          />
        </div>
      </section>

      <section className="pricing-section">
        <div className="wrap">
          <div className="pricing-grid">

            <div className="pricing-card reveal-up">
              <div className="pricing-card-head">
                <span className="pricing-label">One-Time Build</span>
                <div className="pricing-amount">$500<span className="pricing-per"> one-time</span></div>
                <p>Custom homepage design + complete development</p>
              </div>
              <ul className="pricing-list">
                <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>Custom, hand-crafted homepage design</li>
                <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>Complete development &amp; launch</li>
                <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>100% mobile responsive</li>
                <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>On-page SEO foundation</li>
                <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>Contact &amp; quote request forms</li>
                <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>Full ownership — no lock-in</li>
              </ul>
              <a href="/contact" className="btn-flip btn-ghost btn-large pricing-btn">
                <span className="btn-flip-inner">
                  <span className="btn-flip-state">Get Started <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" /></svg></span>
                  <span className="btn-flip-state">Get Started <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg></span>
                </span>
              </a>
            </div>

            <div className="pricing-card pricing-featured reveal-up">
              <span className="pricing-flag">Most Popular</span>
              <div className="pricing-card-head">
                <span className="pricing-label">Build + Care Plan</span>
                <div className="pricing-amount">$500 + $150<span className="pricing-per">/mo</span></div>
                <p>Everything in the build, plus ongoing growth management</p>
              </div>
              <ul className="pricing-list">
                <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>Everything in the One-Time Build</li>
                <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>Hosting, maintenance &amp; security updates</li>
                <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>Ongoing SEO monitoring &amp; reporting</li>
                <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>Digital identity &amp; social management</li>
                <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>Content updates &amp; backups</li>
                <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>Priority support &amp; uptime monitoring</li>
              </ul>
              <a href="/contact" className="btn-flip btn-primary btn-large pricing-btn">
                <span className="btn-flip-inner">
                  <span className="btn-flip-state">Start Growing <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" /></svg></span>
                  <span className="btn-flip-state">Start Growing <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg></span>
                </span>
              </a>
            </div>

            <div className="pricing-card reveal-up">
              <div className="pricing-card-head">
                <span className="pricing-label">Care Plan Only</span>
                <div className="pricing-amount">$150<span className="pricing-per">/month</span></div>
                <p>Already have a site? We&apos;ll maintain, secure &amp; grow it.</p>
              </div>
              <ul className="pricing-list">
                <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>Hosting &amp; performance management</li>
                <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>Security patches &amp; daily backups</li>
                <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>Monthly SEO health reports</li>
                <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>Content &amp; social updates</li>
                <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>Analytics &amp; lead tracking</li>
                <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>Cancel anytime</li>
              </ul>
              <a href="/contact" className="btn-flip btn-ghost btn-large pricing-btn">
                <span className="btn-flip-inner">
                  <span className="btn-flip-state">Get Care Plan <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" /></svg></span>
                  <span className="btn-flip-state">Get Care Plan <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg></span>
                </span>
              </a>
            </div>

          </div>

          <div className="sample-banner reveal-up">
            <div className="sample-banner-icon">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
            </div>
            <div>
              <h3>Free custom homepage sample</h3>
              <p>We&apos;ll design a custom homepage sample for your business in 24 hours — review it risk-free before committing to anything.</p>
            </div>
            <a href="/contact" className="btn-flip btn-primary">
              <span className="btn-flip-inner">
                <span className="btn-flip-state">Claim Free Sample <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" /></svg></span>
                <span className="btn-flip-state">Claim Free Sample <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg></span>
              </span>
            </a>
          </div>
        </div>
      </section>

      <Faq variant="pricing" />
      <Cta variant="pricing" />
    </div>
  );
}
