'use client';

import { useRef } from 'react';
import { useReveal } from '../../lib/useReveal';
import PageHeader from '../../components/PageHeader';
import WhyUs from '../../components/WhyUs';
import Cta from '../../components/Cta';
import Faq from '../../components/Faq';
import Breadcrumb from '../../components/Breadcrumb';

const SERVICES = [
  {
    step: '01', title: 'Custom Website Design & Development',
    desc: 'Written from scratch in React — no WordPress themes, no drag-and-drop builders. Engineered to load in under a second and built around your customers, not a template.',
    points: [
      'Written from scratch — no WordPress themes or Wix templates',
      'Mobile-first, flawless on every device',
      'Sub-second loads meeting Core Web Vitals',
      'CMS-ready so your team can edit content',
      'Conversion-focused layouts and CTAs',
    ],
    icon: <><rect x="3" y="3" width="18" height="18" rx="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" /></>,
  },
  {
    step: '02', title: 'Search Engine Optimization (SEO)',
    desc: 'Technical architecture, keyword targeting, and on-page optimisation so your business ranks at the top when customers search.',
    points: [
      'Technical SEO audits & semantic HTML structure',
      'JSON-LD structured data & schema markup',
      'High-intent keyword targeting & content strategy',
      'Local search optimisation & Google Business Profile',
      'Ongoing ranking & traffic reporting',
    ],
    icon: <><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></>,
  },
  {
    step: '03', title: 'Digital Identity Management',
    desc: 'Consistent, professional social media content and brand voice across platforms — building trust wherever clients find you.',
    points: [
      'Cross-platform brand cohesion',
      'Content strategy & scheduled publishing',
      'Social profile design & optimisation',
      'Reputation & review management',
      'Monthly growth reporting',
    ],
    icon: <><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" /></>,
  },
  {
    step: '04', title: 'Digital Systems & Seamless Integrations',
    desc: 'Payment gateways, CRM automations, lead capture funnels, and analytics pipelines tailored smoothly to your operations.',
    points: [
      'Stripe & payment gateway integration',
      'CRM sync & lead funnel automation',
      'Lead capture & quote request pipelines',
      'Analytics & conversion tracking setup',
      'Third-party API integrations',
    ],
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
            title={<>Everything you need to <span className="highlight-text">grow online.</span></>}
            sub="Exactly what it says: web design, SEO, and digital management built around your business — not a template, not a subscription trap, not a monthly fee you can’t cancel."
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

            <WhyUs />
      <Faq variant="services" />
      <Cta variant="services" />
    </div>
  );
}

