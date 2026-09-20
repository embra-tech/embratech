// Server component — exports unique metadata, renders the client-side inner component
export const metadata = {
  alternates: { canonical: '/about' },
  title: 'About Us — Our Team, Values & Approach to Web Design',
  description:
    'Learn how Embra Technologies helps US businesses compete online with hand-crafted websites, local SEO, and transparent pricing. 1,000+ hours of delivered craftsmanship, 4.8/5 client rating.',
  openGraph: {
    title: 'About Embra Technologies — Who We Are',
    description:
      'We give hardworking businesses the same calibre of digital presence normally reserved for big-budget brands.',
    url: 'https://www.embratechnologies.org/about',
  },
};

import AboutClient from './AboutClient';

export default function AboutPage() {
  return <AboutClient />;
}
