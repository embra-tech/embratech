import { notFound } from 'next/navigation';
import LocationClient from './LocationClient';

const LOCATIONS = [
  { slug: 'los-angeles', name: 'Los Angeles', state: 'CA' },
  { slug: 'chicago', name: 'Chicago', state: 'IL' },
  { slug: 'alaska', name: 'Alaska', state: 'AK' },
  { slug: 'gulf-coast', name: 'the Gulf Coast', state: 'Region' }
];

export function generateStaticParams() {
  return LOCATIONS.map((loc) => ({
    city: loc.slug,
  }));
}

export function generateMetadata({ params }) {
  const loc = LOCATIONS.find(l => l.slug === params.city);
  if (!loc) return {};
  const url = `https://www.embratechnologies.org/locations/${params.city}`;
  const desc = `Embra Technologies builds high-converting, lightning-fast websites for growing businesses in ${loc.name}. Get a free custom homepage sample today.`;
  return {
    title: `Web Design & SEO Agency in ${loc.name} — Embra Technologies`,
    alternates: { canonical: `/locations/${params.city}` },
    description: desc,
    openGraph: {
      title: `Web Design & SEO Agency in ${loc.name} — Embra Technologies`,
      description: desc,
      url,
      images: [
        {
          url: 'https://www.embratechnologies.org/opengraph-image.jpg',
          width: 1200,
          height: 630,
          alt: `Embra Technologies — Web Design & SEO in ${loc.name}`,
        },
      ],
    },
  };
}

export default function LocationPage({ params }) {
  const loc = LOCATIONS.find(l => l.slug === params.city);
  if (!loc) notFound();

  return <LocationClient loc={loc} />;
}
