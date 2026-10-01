import { notFound } from 'next/navigation';
import LocationClient from './LocationClient';
import siteConfig from '../../../lib/site-config';

const LOCATIONS = [
  { slug: 'los-angeles', name: 'Los Angeles', state: 'CA' },
  { slug: 'chicago', name: 'Chicago', state: 'IL' },
  { slug: 'alaska', name: 'Alaska', state: 'AK' },
  { slug: 'gulf-coast', name: 'the Gulf Coast', state: 'Region' },
  { slug: 'brooklyn', name: 'Brooklyn', state: 'NY' }
];

export function generateStaticParams() {
  return LOCATIONS.map((loc) => ({
    city: loc.slug,
  }));
}

export function generateMetadata({ params }) {
  const loc = LOCATIONS.find(l => l.slug === params.city);
  if (!loc) return {};
  const url = `${siteConfig.siteUrl}/locations/${params.city}`;
  const desc = `Embra Technologies builds high-converting, lightning-fast websites for growing businesses in ${loc.name}. Get a free custom homepage sample today.`;
  
  const titleText = loc.slug === 'brooklyn'
    ? 'Web Design & SEO Agency in Brooklyn, NY | Embra'
    : `Web Design & SEO Agency in ${loc.name} | Embra`;

  const meta = {
    title: titleText,
    alternates: { canonical: `/locations/${params.city}` },
    description: desc,
    openGraph: {
      title: titleText,
      description: desc,
      url,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: `Embra Technologies — Web Design & SEO in ${loc.name}`,
        },
      ],
    },
  };

  if (params.city === 'gulf-coast') {
    meta.robots = { index: false, follow: true };
  }

  return meta;
}

export default function LocationPage({ params }) {
  const loc = LOCATIONS.find(l => l.slug === params.city);
  if (!loc) notFound();

  return <LocationClient loc={loc} />;
}
