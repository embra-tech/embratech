import ContactClient from './ContactClient';
import JsonLd from '../../components/JsonLd';
import siteConfig from '../../lib/site-config';

export const metadata = {
  alternates: { canonical: '/contact' },
  title: 'Contact Us for a Free Homepage Sample',
  description:
    'Start your project today. Contact Embra Technologies with your business goals and we will reply within 24 hours with a free custom homepage sample.',
  openGraph: {
    title: 'Contact Us for a Free Homepage Sample | Embra',
    description:
      'Start your project today. Contact Embra Technologies with your business goals and we will reply within 24 hours with a free custom homepage sample.',
    url: `${siteConfig.siteUrl}/contact`,
    images: [
      {
        url: siteConfig.ogImage,
        width: siteConfig.ogImageWidth,
        height: siteConfig.ogImageHeight,
        alt: 'Contact Embra Technologies',
      },
    ],
  },
};

const contactSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact Embra Technologies',
  url: `${siteConfig.siteUrl}/contact`,
  description: 'Request a free 24-hour custom homepage sample for your home service business.',
  // 2026-11-24: reference the sitewide business entity (app/layout.jsx) instead of redefining it. This page
  // used to declare the same @id as a "LocalBusiness" named "Embra" with no address, while every page
  // declares it as a ProfessionalService: two conflicting descriptions of one business.
  mainEntity: { '@id': `${siteConfig.siteUrl}/#localbusiness` },
};

// 2026-10-21: page-level BreadcrumbList removed; the visible <Breadcrumb> in ContactClient already outputs an identical one.

export default function ContactPage() {
  return (
    <>
      <JsonLd data={[contactSchema]} />
      <ContactClient />
    </>
  );
}
