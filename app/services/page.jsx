// Server component — exports unique metadata, renders the client-side inner component
export const metadata = {
  title: 'Services — Custom Web Design, SEO & Digital Identity Management',
  description:
    'Embra Technologies offers custom website design, search engine optimization, social media identity, payment integrations, and launch & scale services for US small businesses.',
  openGraph: {
    title: 'Embra Technologies Services — Everything to Grow Your Business Online',
    description:
      'From custom UI design to local SEO and Stripe integrations — one agency, every digital service your business needs.',
    url: 'https://embratechnologies.org/services',
  },
};

import ServicesClient from './ServicesClient';

export default function ServicesPage() {
  return <ServicesClient />;
}
