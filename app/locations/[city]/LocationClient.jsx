'use client';

import { useRef } from 'react';
import { useReveal } from '../../../lib/useReveal';
import PageHeader from '../../../components/PageHeader';
import Breadcrumb from '../../../components/Breadcrumb';
import Cta from '../../../components/Cta';

export default function LocationClient({ loc }) {
  const ref = useRef(null);
  useReveal(ref);

  return (
    <div ref={ref} className="page-shell">
      <section className="page-hero">
        <div className="wrap">
          <Breadcrumb label={loc.name} href={`/locations/${loc.slug}`} />
          <PageHeader
            pill={`Web Design in ${loc.name}`}
            title={<>Dominating Search in <span className="highlight-text">{loc.name}</span></>}
            sub={`We help local businesses in ${loc.name} rank higher, load faster, and convert more traffic into paying customers.`}
          />
        </div>
      </section>

      <section className="location-content" style={{ padding: '80px 0' }}>
        <div className="wrap text-content reveal-up" style={{ maxWidth: 800, margin: '0 auto', fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--text-muted)' }}>
          <h2 style={{ color: '#fff', fontSize: '2rem', marginBottom: '24px' }}>Custom Web Development for {loc.name} Businesses</h2>
          <p style={{ marginBottom: '24px' }}>
            When customers in <strong>{loc.name}</strong> search for your services, they aren't looking for a slow, outdated website. 
            They want immediate answers, trust signals, and a seamless way to contact you. We specialize in building digital 
            experiences that meet those exact needs.
          </p>
          <p style={{ marginBottom: '40px' }}>
            Unlike traditional agencies that use bloated WordPress templates, we engineer custom-built Next.js applications that load 
            in under a second. We combine this technical foundation with aggressive Local SEO strategies to ensure you dominate 
            the local search market.
          </p>

          <h2 style={{ color: '#fff', fontSize: '2rem', marginBottom: '24px' }}>Why {loc.name} Companies Choose Embra</h2>
          <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <li><strong>Sub-Second Load Times:</strong> Google explicitly rewards speed in local search. Our client websites average 96/100 on Google PageSpeed Insights.</li>
            <li><strong>Hyper-Local SEO:</strong> We structure your site with LocalBusiness JSON-LD schema, service-area clusters, and optimized metadata tailored to {loc.name}.</li>
            <li><strong>Zero Upfront Risk:</strong> We build a custom, interactive homepage sample for your brand in 24 hours. You only move forward if you love it.</li>
          </ul>

          <div style={{ marginTop: '40px', padding: '24px', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', border: '1px solid var(--line-dark)' }}>
            <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '12px' }}>Explore Our Work &amp; Services</h3>
            <p style={{ fontSize: '0.95rem', marginBottom: '12px' }}>
              See how we help businesses achieve measurable search visibility and conversion gains:
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              {loc.slug === 'los-angeles' && (
                <a href="/portfolio/tuxford-collision" style={{ color: 'var(--primary-bright)', textDecoration: 'underline' }}>View Los Angeles Case Study: Tuxford Collision (+280% organic traffic) &rarr;</a>
              )}
              {loc.slug === 'chicago' && (
                <a href="/portfolio/skyhightreeservice" style={{ color: 'var(--primary-bright)', textDecoration: 'underline' }}>View Chicago Case Study: Sky High Tree Service (+215% emergency leads) &rarr;</a>
              )}
              {loc.slug === 'alaska' && (
                <a href="/portfolio/alaska-fast-fix" style={{ color: 'var(--primary-bright)', textDecoration: 'underline' }}>View Alaska Case Study: Fast Fix Handyman (+190% local calls) &rarr;</a>
              )}
              <a href="/services" style={{ color: 'var(--primary-bright)', textDecoration: 'underline' }}>Explore All Services &rarr;</a>
            </div>
          </div>
        </div>
      </section>

      <Cta variant="default" />
    </div>
  );
}
