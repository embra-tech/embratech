import ContactClient from './ContactClient';
import JsonLd from '../../components/JsonLd';
import siteConfig from '../../lib/site-config';

export const metadata = {
  alternates: { canonical: '/contact' },
  title: 'Contact Us for a Free Homepage Sample | Embra',
  description:
    'Start your project today. Contact Embra Technologies with your business goals and we will reply within 24 hours with a free custom homepage sample.',
  openGraph: {
    title: 'Contact Us for a Free Homepage Sample | Embra',
    description:
      'Start your project today. Contact Embra Technologies with your business goals and we will reply within 24 hours with a free custom homepage sample.',
    url: `${siteConfig.siteUrl}/contact`,
  },
};

const contactSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact Embra Technologies',
  url: `${siteConfig.siteUrl}/contact`,
  description: 'Request a free 24-hour custom homepage sample for your home service business.',
  mainEntity: {
    '@type': 'LocalBusiness',
    '@id': `${siteConfig.siteUrl}/#localbusiness`,
    name: siteConfig.brandName,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
    ],
  },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={contactSchema} />
      <ContactClient />
    </>
  );
}
