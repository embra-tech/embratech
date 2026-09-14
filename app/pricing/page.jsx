// Server component — exports unique metadata, renders the client-side inner component
export const metadata = {
  title: 'Pricing — Transparent Website Design & Monthly Care Plans',
  description:
    'One clear build price (\$500), one clear monthly care plan (\$150/mo). See a free custom homepage sample for your business before paying a cent. No lock-in, full ownership.',
  openGraph: {
    title: 'Embra Technologies Pricing — Honest, No-Surprise Website Costs',
    description:
      'From \$500 build to \$150/mo care plans. Try risk-free with a custom homepage sample in 24 hours.',
    url: 'https://embratechnologies.org/pricing',
  },
};

import PricingClient from './PricingClient';

export default function PricingPage() {
  return <PricingClient />;
}
