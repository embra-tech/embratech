import BlogClient from './BlogClient';
import siteConfig from '../../lib/site-config';

export const metadata = {
  title: 'Local SEO & Web Design Blog for Service Businesses',
  description: 'Actionable advice on local SEO, website performance, and turning digital traffic into real-world customers for growing US service businesses.',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Local SEO & Web Design Blog for Service Businesses | Embra',
    description: 'Actionable advice on local SEO, website performance, and turning digital traffic into real-world customers for growing US service businesses.',
    url: 'https://www.embratechnologies.org/blog',
    images: [
      {
        url: siteConfig.ogImage,
        width: siteConfig.ogImageWidth,
        height: siteConfig.ogImageHeight,
        alt: 'Embra Technologies blog',
      },
    ],
  },
};

export default function BlogPage() {
  return <BlogClient />;
}
