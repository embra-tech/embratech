// Server component — exports metadata for the Home page
export const metadata = {
  title: 'Custom Websites, SEO & Digital Identity for Growing Businesses',
  description:
    'Embra Technologies designs hand-crafted websites that load in under a second, rank on Google, and convert visitors into paying clients. Free 24-hour homepage sample for US businesses.',
  openGraph: {
    title: 'Embra Technologies — Custom Websites & SEO',
    description:
      'Fast, modern websites built to rank and convert. Free custom homepage sample in 24 hours — no obligation.',
    url: 'https://embratechnologies.org/',
  },
};

import HomePage from '../components/HomePage';

export default function Page() {
  return <HomePage />;
}
