// Server component — exports unique metadata, renders the client-side inner component
export const metadata = {
  alternates: { canonical: '/about' },
  title: 'About Us — Our Team, Values & Approach to Web Design',
  description:
    'Learn how Embra Technologies helps US businesses compete online with custom-built websites, local SEO, and transparent pricing. High-performance React builds, 96/100 average PageSpeed.',
  openGraph: {
    title: 'About Embra Technologies — Who We Are',
    description:
      'We give hardworking local businesses fast, modern websites that rank on Google — built from scratch, not templated.',
    url: 'https://www.embratechnologies.org/about',
  },
};

import AboutClient from './AboutClient';

export default function AboutPage() {
  return <AboutClient />;
}
