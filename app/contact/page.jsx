import ContactClient from './ContactClient';
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

export default function ContactPage() {
  return <ContactClient />;
}
