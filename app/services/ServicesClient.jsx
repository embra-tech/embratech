'use client';

import { useRef } from 'react';
import { useReveal } from '../../lib/useReveal';
import PageHeader from '../../components/PageHeader';
import WhyUs from '../../components/WhyUs';
import Cta from '../../components/Cta';
import Faq from '../../components/Faq';
import Breadcrumb from '../../components/Breadcrumb';
import siteConfig from '../../lib/site-config';
import Link from 'next/link';
import StockPhoto from '../../components/StockPhoto';
import GrowthBars from '../../components/GrowthBars';

const SERVICES = [
  {
    step: '01', title: 'Custom Website Design & Development',
    desc: 'Written from scratch with Next.js and React, without WordPress themes or drag-and-drop builders, and built around your services, your service area and the questions your customers ask.',
    points: [
      'Written from scratch, no themes or templates',
      'Designed for phones first',
      'Fast-loading pages',
      'Admin dashboard on the Pro plan',
      'A clear next step on every page',
    ],
    link: '/services/web-design',
    linkLabel: 'Explore custom website design',
    photo: 'stock-webdesign',
    icon: <><rect x="3" y="3" width="18" height="18" rx="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" /></>,
  },
  {
    step: '02', title: 'Local SEO for Home Service Businesses',
    desc: 'Your Google Business Profile, service pages, structured data and business listings, so homeowners searching for the services you offer in the areas you cover can find you.',
    points: [
      'Google Business Profile optimization',
      'Service pages and structured data',
      'Consistent business listings',
      'Technical SEO checks',
      'Progress reporting in plain language',
    ],
    link: '/services/local-seo',
    linkLabel: 'Explore local SEO services',
    photo: 'stock-localseo',
    growth: true,
    icon: <><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></>,
  },
  {
    step: '03', title: 'Digital Identity Management',
    desc: 'Consistent, professional social media content and brand voice across platforms, building trust wherever clients find you.',
    points: [
      'Cross-platform brand cohesion',
      'Content strategy & scheduled publishing',
      'Social profile design & optimization',
      'Reputation & review management',
      'Monthly growth reporting',
    ],
    photo: 'stock-growth',
    icon: <><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" /></>,
  },
  {
    step: '04', title: 'Website Integrations',
    photo: 'stock-integrations',
    desc: 'Payment, CRM, quote request and analytics connections, set up to fit the way your business already works.',
    points: [
      'Stripe & payment gateway integration',
      'CRM sync & lead funnel automation',
      'Lead capture & quote request pipelines',
      'Analytics & conversion tracking setup',
      'Third-party API integrations',
    ],
    link: '/services/website-integrations',
    linkLabel: 'Explore website integrations',
    icon: <><rect x="3" y="3" width="7.5" height="7.5" rx="1.5" /><rect x="13.5" y="3" width="7.5" height="7.5" rx="1.5" /><rect x="3" y="13.5" width="7.5" height="7.5" rx="1.5" /><rect x="13.5" y="13.5" width="7.5" height="7.5" rx="1.5" /></>,
  },
];

export default function ServicesClient() {
  const ref = useRef(null);
  useReveal(ref);

  return (
    <div ref={ref} className="page-shell">
      <section className="page-hero">
        <div className="wrap">
          <Breadcrumb label="Services" href="/services" />
          <PageHeader
            pill="Services"
            badge="What We Deliver"
            title={<>Web Design &amp; Local SEO for <span className="highlight-text">Home Service Businesses</span></>}
            sub="Custom websites, local SEO and the integrations that connect them, for plumbers, HVAC companies, roofers, tree services, handymen and auto body shops across the US. Published pricing and no long-term contracts."
          />
        </div>
      </section>

      <section className="service-detail-section">
        <div className="wrap">
          <div className="service-detail-list">
            {SERVICES.map((s) => (
              <div className="service-detail reveal-up" key={s.step}>
                <div className="service-detail-icon">
                  <span className="service-detail-step">{s.step}</span>
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">{s.icon}</svg>
                </div>
                <div className="service-detail-content">
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <ul>
                    {s.points.map((p) => (
                      <li key={p}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                        {p}
                      </li>
                    ))}
                  </ul>
                  {s.link && (
                    <div style={{ marginTop: '20px' }}>
                      <Link href={s.link} style={{ color: 'var(--primary-bright)', textDecoration: 'underline', fontWeight: 500 }}>
                        {s.linkLabel} &rarr;
                      </Link>
                    </div>
                  )}
                  {s.growth && <GrowthBars />}
                  {s.photo && (
                    <div className="service-photo">
                      <StockPhoto name={s.photo} variant="thumb" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

            {/* Service Areas */}
      <section className="services-locations-section" style={{ padding: '60px 0', borderTop: '1px solid var(--line-dark)', borderBottom: '1px solid var(--line-dark)', background: 'rgba(255,255,255,0.01)' }}>
        <div className="wrap">
          <div className="section-head reveal-up" style={{ textAlign: 'center', marginBottom: '32px' }}>
            <div className="section-badge"><span className="badge-pill">Coverage</span><span className="badge-text">Service Areas</span></div>
            <h2>Areas We Work In</h2>
            <p>We work remotely with home service businesses across the US. These pages cover areas where we have client work or local context.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
            {siteConfig.serviceAreas.map((loc) => {
              const descs = {
                'los-angeles': 'Auto body, collision, and service contractor web development & local search.',
                'chicago': 'Commercial services, emergency tree care, and trade contractor websites.',
                'alaska': 'Handyman, home repair, and remote contractor digital presence.',
                'gulf-coast': 'Marine, industrial, hospitality, and coastal contractor platforms.',
                'brooklyn': 'Brooklyn & NYC home service businesses, contractors, and tradespeople.',
              };
              return (
                <a
                  key={loc.slug}
                  href={`/locations/${loc.slug}`}
                  style={{
                    padding: '20px',
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid var(--line-dark)',
                    borderRadius: '12px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px',
                    transition: 'border-color 0.2s',
                  }}
                >
                  <strong style={{ color: '#fff', fontSize: '1.1rem' }}>{loc.name} &rarr;</strong>
                  <span style={{ fontSize: '0.85rem', color: 'var(--muted-inv)', lineHeight: 1.5 }}>{descs[loc.slug] ?? `Local web design & SEO for ${loc.name} businesses.`}</span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <WhyUs />
      <Faq variant="services" />
      
      {/* Industries We Serve */}
      <section style={{ padding: '60px 0', borderTop: '1px solid var(--line-dark)', background: 'rgba(255,255,255,0.01)' }}>
        <div className="wrap">
          <div className="section-head reveal-up" style={{ textAlign: 'center', marginBottom: '32px' }}>
            <div className="section-badge"><span className="badge-pill">By Trade</span><span className="badge-text">Industries We Serve</span></div>
            <h2>Specialist websites for every home service trade</h2>
            <p>Each trade has unique trust signals, search intent, and conversion patterns. <Link href="/niches">Explore our industry-specific guides →</Link></p>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center' }}>
            {[
              { label: 'Handyman', href: '/niches/web-design-for-handyman-businesses' },
              { label: 'Tree Service', href: '/niches/tree-service-website-design' },
              { label: 'Auto Body', href: '/niches/auto-body-shop-website-design' },
              { label: 'Landscaping', href: '/niches/landscaping-website-design' },
              { label: 'Plumbing', href: '/niches/plumber-website-design' },
              { label: 'HVAC', href: '/niches/hvac-website-design' },
              { label: 'Roofing', href: '/niches/roofing-website-design' },
            ].map((n) => (
              <Link
                key={n.href}
                href={n.href}
                style={{
                  padding: '10px 20px',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid var(--line-dark)',
                  borderRadius: '8px',
                  color: 'var(--paper-bright)',
                  fontWeight: 500,
                  fontSize: '0.9rem',
                  textDecoration: 'none',
                  transition: 'border-color 0.2s',
                }}
              >
                {n.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '40px 0', borderTop: '1px solid var(--line-dark)' }}>
        <div className="wrap" style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="/pricing" className="btn-secondary" style={{ padding: '12px 24px', borderRadius: '8px', border: '1px solid var(--line-dark)' }}>View Pricing Plans &rarr;</a>
          <a href="/portfolio" className="btn-secondary" style={{ padding: '12px 24px', borderRadius: '8px', border: '1px solid var(--line-dark)' }}>See Our Work &rarr;</a>
        </div>
      </section>

      <Cta variant="services" />
    </div>
  );
}

