// Server component — exports metadata for the Home page
export const metadata = {
  alternates: { canonical: '/' },
  title: 'Custom Websites, SEO & Digital Identity for Growing Businesses',
  description:
    'Embra Technologies designs hand-crafted websites that load in under a second, rank on Google, and convert visitors into paying clients. Free 24-hour homepage sample for US businesses.',
  openGraph: {
    title: 'Embra Technologies — Custom Websites & SEO',
    description:
      'Fast, modern websites built to rank and convert. Free custom homepage sample in 24 hours — no obligation.',
    url: 'https://www.embratechnologies.org/',
  },
};

import HomePage from '../components/HomePage';
import Script from 'next/script';

export default function Page() {
  return (
    <>
      <Script
        id="faqpage-home"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How long does a custom website project take?","acceptedAnswer":{"@type":"Answer","text":"Most custom website projects take between 2 to 4 weeks from initial discovery to final launch, depending on scope and complexity. We share a clear timeline before work begins."}},{"@type":"Question","name":"Will my website be mobile responsive and fast?","acceptedAnswer":{"@type":"Answer","text":"Yes � every website we build is mobile-first and engineered for sub-second loading, consistently scoring 95+ on Google PageSpeed Insights and meeting Core Web Vitals."}},{"@type":"Question","name":"How do your SEO services help my business?","acceptedAnswer":{"@type":"Answer","text":"We structure your site with clean semantic HTML, JSON-LD schema markup, high-intent keyword targeting, and fast server responses so search engines rank your business ahead of local competitors."}},{"@type":"Question","name":"Do you provide maintenance and ongoing support?","acceptedAnswer":{"@type":"Answer","text":"Yes � our $150/mo Care Plan covers hosting, security monitoring, monthly SEO health reports, content updates, and digital identity management. Cancel anytime."}}]}' }}
        strategy="beforeInteractive"
      />
      <HomePage />
    </>
  );
}
