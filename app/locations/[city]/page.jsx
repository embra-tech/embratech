import { notFound } from 'next/navigation';
import PageHeader from '../../../components/PageHeader';
import Breadcrumb from '../../../components/Breadcrumb';
import Cta from '../../../components/Cta';

const LOCATIONS = [
  { slug: 'los-angeles', name: 'Los Angeles', state: 'CA' },
  { slug: 'chicago', name: 'Chicago', state: 'IL' },
  { slug: 'alaska', name: 'Alaska', state: 'AK' },
  { slug: 'gulf-coast', name: 'the Gulf Coast', state: 'Region' }
];

export function generateStaticParams() {
  return LOCATIONS.map((loc) => ({
    city: loc.slug,
  }));
}

export function generateMetadata({ params }) {
  const loc = LOCATIONS.find(l => l.slug === params.city);
  if (!loc) return {};
  return {
    title: `Web Design & SEO Agency in ${loc.name}`,
    description: `Embra Technologies builds high-converting, lightning-fast websites for growing businesses in ${loc.name}. Get a free custom homepage sample today.`,
  };
}

export default function LocationPage({ params }) {
  const loc = LOCATIONS.find(l => l.slug === params.city);
  if (!loc) notFound();

  return (
    <div className="page-shell">
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
            Unlike traditional agencies that use bloated WordPress templates, we engineer hand-crafted Next.js applications that load 
            in under a second. We combine this technical foundation with aggressive Local SEO strategies to ensure you dominate 
            the local search market.
          </p>

          <h2 style={{ color: '#fff', fontSize: '2rem', marginBottom: '24px' }}>Why {loc.name} Companies Choose Embra</h2>
          <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <li><strong>Sub-Second Load Times:</strong> Google explicitly rewards speed in local search. Our sites regularly score 99/100 on PageSpeed Insights.</li>
            <li><strong>Hyper-Local SEO:</strong> We structure your site with LocalBusiness JSON-LD schema, service-area clusters, and optimized metadata tailored to {loc.name}.</li>
            <li><strong>Zero Upfront Risk:</strong> We build a custom, interactive homepage sample for your brand in 24 hours. You only move forward if you love it.</li>
          </ul>
        </div>
      </section>

      <Cta variant="default" />
    </div>
  );
}
