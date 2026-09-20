// Server component — exports unique metadata, renders the client-side inner component
export const metadata = {
  alternates: { canonical: '/contact' },
  title: 'Contact Us — Start Your Website Project Today',
  description:
    'Get in touch with Embra Technologies. Describe your business and goals — we reply within 24 hours with a free custom homepage sample, no obligation.',
  openGraph: {
    title: 'Contact Embra Technologies — Free Homepage Sample in 24 Hours',
    description:
      'Tell us about your business. We\'ll design a custom homepage sample for you within 24 hours — completely free, no commitment needed.',
    url: 'https://www.embratechnologies.org/contact',
  },
};

import ContactClient from './ContactClient';

export default function ContactPage() {
  return <ContactClient />;
}
