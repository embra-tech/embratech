import Link from 'next/link';
import PageHeader from '../../../components/PageHeader';
import Breadcrumb from '../../../components/Breadcrumb';
import Cta from '../../../components/Cta';
import JsonLd from '../../../components/JsonLd';
import siteConfig from '../../../lib/site-config';

const description = 'Custom tree service website design for US contractors. Explore a live project, compare pricing and request a free homepage sample.';
const serviceDescription = 'Websites for tree removal, trimming and stump grinding businesses across the US. Show homeowners your services, recent work and service area, with clear ways to call or request an estimate.';
const headingStyle = { color: '#fff', fontSize: '2rem', marginBottom: '24px', marginTop: '48px' };
const paragraphStyle = { marginBottom: '20px' };
const linkStyle = { color: 'var(--primary-bright)', textDecoration: 'underline' };

export const metadata = {
  title: 'Tree Service Website Design for More Calls',
  alternates: { canonical: '/niches/tree-service-website-design' },
  description,
  openGraph: {
    title: 'Tree Service Website Design for More Calls | Embra',
    description,
    url: siteConfig.siteUrl + '/niches/tree-service-website-design',
    images: [{
      url: siteConfig.ogImage,
      width: siteConfig.ogImageWidth,
      height: siteConfig.ogImageHeight,
      alt: 'Tree Service Website Design for More Calls | Embra',
    }],
  },
};

const faqs = [
  {
    question: 'How much does a tree-service website cost?',
    answer: 'Our Starter plan covers a homepage plus 2 inner pages for $700 total with split payments, or $600 paid in full. Growth provides up to 7 pages for $1,000 total with split payments, or $900 paid in full. See the pricing page for full scope and payment options.',
  },
  {
    question: 'Can I see a design before committing?',
    answer: 'Yes. Request a free custom homepage sample within 24 hours. The sample is a preview of the design; the full website scope and launch schedule are agreed separately.',
  },
  {
    question: 'Can you include removal, trimming and stump grinding?',
    answer: 'Yes, when those are services your business provides. We can organize them into clear sections or dedicated pages depending on the detail customers need and the package you choose.',
  },
  {
    question: 'Will the website guarantee a top-three Google ranking?',
    answer: 'No. We can build a clear technical and content foundation and discuss additional local SEO work, but a website purchase cannot guarantee a ranking position or a fixed number of leads.',
  },
  {
    question: 'What should I provide?',
    answer: 'Your service list, service area, business contact details, logo if available, and photos you have permission to use. Provide supporting information for any insurance, license, certification or review claims you want displayed.',
  },
  {
    question: 'Do I own the completed website?',
    answer: 'Our website-build plans include ownership with no platform lock-in. Review the selected package, payment schedule and contract terms before starting.',
  },
];

function SampleButtons() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center', alignItems: 'center' }}>
      {[
        { href: '/contact', label: 'Get My Free Homepage Sample →', className: 'btn-primary' },
        { href: '/pricing', label: 'Compare Website Plans →', className: 'btn-ghost' },
      ].map(({ href, label, className }) => (
        <Link key={href} href={href} className={'btn-flip ' + className + ' btn-large'} style={{ maxWidth: '100%', paddingInline: 'clamp(10px, 3vw, 30px)', fontSize: 'clamp(12px, 3.5vw, 15.5px)' }}>
          <span className="btn-flip-inner">
            <span className="btn-flip-state">{label}</span>
            <span className="btn-flip-state" aria-hidden="true">{label}</span>
          </span>
        </Link>
      ))}
    </div>
  );
}

export default function NichePage() {
  // Breadcrumb supplies the single BreadcrumbList matching the visible navigation.
  const jsonLdData = [{
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Tree Service Website Design for Local Tree Care Companies',
    serviceType: 'Tree Service Website Design',
    provider: { '@id': siteConfig.siteUrl + '/#localbusiness' },
    areaServed: { '@type': 'Country', name: 'United States' },
    description: serviceDescription,
  }];

  return (
    <div className="page-shell">
      <JsonLd data={jsonLdData} />
      <section className="page-hero">
        <div className="wrap">
          <Breadcrumb label="Tree Service Website Design" href="/niches/tree-service-website-design" />
          <PageHeader
            pill="Tree Service Web Design"
            title={<>Tree Service Website Design for Local Tree Care Companies</>}
            sub={serviceDescription}
          />
          <div style={{ maxWidth: 760, margin: '28px auto 0' }}>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '24px' }}>Starter: $700 total with split payments, or $600 paid in full. Includes a custom homepage plus 2 inner pages.</p>
            <SampleButtons />
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.7, marginTop: '16px' }}>See a free custom homepage sample within 24 hours, with no upfront commitment.</p>
          </div>
        </div>
      </section>

      <section className="location-content" style={{ padding: '64px 0 80px' }}>
        <div className="wrap text-content" style={{ maxWidth: 840, margin: '0 auto', fontSize: '1.1rem', lineHeight: 1.85, color: 'var(--text-muted)' }}>
          <h2 style={{ ...headingStyle, marginTop: 0 }}>See a Tree-Service Website We&apos;ve Built</h2>
          <p style={paragraphStyle}>Sky High Tree Service serves Naperville and surrounding Chicagoland communities. Its website brings service information, project photos, service-area details and contact options together for homeowners comparing local tree-care providers.</p>

          <div data-preview-card="true" style={{ margin: '32px 0 48px', borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--line-dark)', background: 'rgba(255,255,255,0.02)' }}>
            <div style={{ background: 'rgba(0,0,0,0.5)', padding: '12px 18px', display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '12px', borderBottom: '1px solid var(--line-dark)' }}>
              <div style={{ display: 'flex', gap: '6px' }}>
                <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff5f56', display: 'inline-block' }} />
                <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#ffbd2e', display: 'inline-block' }} />
                <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#27c93f', display: 'inline-block' }} />
              </div>
              <div style={{ flex: 1, minWidth: 0, overflowWrap: 'anywhere', background: 'rgba(255,255,255,0.06)', borderRadius: '6px', padding: '4px 12px', fontSize: '0.82rem', color: 'var(--muted-inv)', fontFamily: 'monospace' }}>
                skyhightreeservicechicago.com
              </div>
            </div>
            <picture>
              <source type="image/avif" srcSet="/images/optimized/skyhightreeservice-480.avif 480w, /images/optimized/skyhightreeservice-720.avif 720w, /images/optimized/skyhightreeservice-960.avif 960w" sizes="(max-width: 840px) 100vw, 840px" />
              <source type="image/webp" srcSet="/images/optimized/skyhightreeservice-480.webp 480w, /images/optimized/skyhightreeservice-720.webp 720w, /images/optimized/skyhightreeservice-960.webp 960w" sizes="(max-width: 840px) 100vw, 840px" />
              <img
                src="/images/optimized/skyhightreeservice-720.jpg"
                alt="Sky High Tree Service website preview designed by Embra Technologies"
                loading="lazy"
                decoding="async"
                width={840}
                height={480}
                style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
              />
            </picture>
            <div style={{ padding: '16px 20px', borderTop: '1px solid var(--line-dark)', background: 'rgba(0,0,0,0.25)' }}>
              <p style={{ fontSize: '0.88rem', color: 'var(--muted-inv)', marginBottom: '12px' }}>Sky High Tree Service — a live Embra project with phone links, an estimate form and a project gallery.</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px 24px', fontSize: '0.88rem' }}>
                <a href="https://skyhightreeservicechicago.com/" style={linkStyle}>View the Live Website &rarr;</a>
                <Link href="/portfolio/sky-high-tree" style={linkStyle}>Read the Project Case Study &rarr;</Link>
              </div>
            </div>
          </div>

          <h2 style={headingStyle}>A Website for Everyday Tree Work and Urgent Calls</h2>
          <p style={paragraphStyle}>Some customers need help after a storm. Others are planning pruning, stump removal or routine maintenance. Your website should help both groups understand what you offer and decide whether to contact you.</p>
          <p style={paragraphStyle}>As a tree service web design company, Embra builds around your actual services, coverage and project photos. We organize the information homeowners need and make calling or requesting an estimate straightforward on mobile.</p>

          <h2 style={headingStyle}>What Your Tree-Service Website Can Include</h2>
          <ul style={{ paddingLeft: '24px', marginBottom: '20px' }}>
            <li style={paragraphStyle}><strong>Clear contact options.</strong> Tap-to-call links and an estimate form help visitors take the next step. Show emergency availability only if your team actually provides it.</li>
            <li style={paragraphStyle}><strong>Useful service information.</strong> Explain the work you perform, such as tree removal, pruning or stump grinding. Choose separate pages when a service has enough distinct information to help customers.</li>
            <li style={paragraphStyle}><strong>Real project photos.</strong> Use your crew&apos;s work, equipment and before-and-after images to help homeowners evaluate your business.</li>
            <li style={paragraphStyle}><strong>Accurate trust information.</strong> Show the insurance, licenses and arborist credentials you can substantiate. No assumed coverage amounts or invented badges.</li>
            <li style={paragraphStyle}><strong>Clear service coverage.</strong> Describe the towns and areas you actually serve, without promising work outside your operating area.</li>
          </ul>

          <h2 style={headingStyle}>Local SEO for the Services and Areas You Cover</h2>
          <p style={paragraphStyle}>A clear website gives search engines and customers useful information about your business. We plan page titles, headings, service descriptions and internal links around your actual work and service area.</p>
          <p style={paragraphStyle}>Your Google Business Profile, website and business details should tell a consistent story. Dedicated service or area pages should offer useful, specific information; a page for every town is not automatically the right approach. Explore our <Link href="/services/local-seo" style={linkStyle}>local SEO services</Link> for the broader scope.</p>
          <p style={paragraphStyle}>Search visibility depends on competition, relevance, authority and other factors. We do not promise a particular Google position.</p>

          <h2 style={headingStyle}>Tree-Service Website Pricing</h2>
          <p style={paragraphStyle}><strong>Starter:</strong> $700 total with split payments, or $600 paid in full. Includes a custom homepage plus 2 inner pages, mobile-responsive design, contact and quote forms, and an on-page SEO foundation.</p>
          <p style={paragraphStyle}><strong>Growth:</strong> $1,000 total with split payments, or $900 paid in full. Includes up to 7 custom pages, structured data and Google Business Profile setup, alongside the Starter features.</p>
          <p style={paragraphStyle}>For ongoing website support, review the <Link href="/services/care-plan" style={linkStyle}>$150/month Care Plan</Link> and its scope. Compare all payment options, inclusions and terms on our <Link href="/pricing" style={linkStyle}>pricing page</Link>.</p>

          <h2 style={{ ...headingStyle, marginTop: '56px' }}>Frequently Asked Questions</h2>
          <div style={{ marginTop: '24px', marginBottom: '40px' }}>
            {faqs.map(({ question, answer }) => (
              <div key={question} style={{ marginBottom: '28px' }}>
                <h3 style={{ color: '#fff', fontSize: '1.25rem', marginBottom: '12px' }}>{question}</h3>
                <p style={{ color: 'var(--text-muted)' }}>{answer}</p>
              </div>
            ))}
          </div>

          <div data-sample-cta="true" style={{ margin: '56px 0', padding: '40px clamp(16px, 4vw, 32px)', borderRadius: '16px', background: 'linear-gradient(135deg, rgba(37,99,235,0.08) 0%, rgba(16,185,129,0.05) 100%)', border: '1px solid var(--line-dark)', textAlign: 'center' }}>
            <h2 style={{ color: '#fff', fontSize: '1.6rem', marginBottom: '12px', fontWeight: 700 }}>See Your Tree-Service Homepage Before You Commit</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', maxWidth: '620px', margin: '0 auto 24px', lineHeight: 1.6 }}>Tell us about your services and the areas you cover. Request a free custom homepage sample, or compare the website plans to choose the scope that fits your business.</p>
            <SampleButtons />
          </div>
        </div>
      </section>

      <Cta variant="default" />
    </div>
  );
}
