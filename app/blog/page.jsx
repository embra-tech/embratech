import BlogClient from './BlogClient';

export const metadata = {
  title: 'Blog & Resources | Embra Technologies',
  description: 'Actionable advice on local SEO, website performance, and turning digital traffic into real-world customers.',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Blog & Resources | Embra Technologies',
    description: 'Actionable advice on local SEO, website performance, and turning digital traffic into real-world customers.',
    url: 'https://www.embratechnologies.org/blog',
  },
};

export default function BlogPage() {
  return <BlogClient />;
}
