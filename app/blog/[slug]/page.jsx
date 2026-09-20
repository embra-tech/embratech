import Link from 'next/link';
import { BLOG_POSTS } from '../../../lib/blogData';
import Cta from '../../../components/Cta';
import Script from 'next/script';

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }) {
  const post = BLOG_POSTS.find(p => p.slug === params.slug);
  if (!post) return {};
  return {
    title: `${post.title} | Embra Technologies`,
    description: post.excerpt,
    alternates: { canonical: `/blog/${params.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://www.embratechnologies.org/blog/${params.slug}`,
      type: 'article',
      publishedTime: post.date,
    },
  };
}

export default function BlogPostPage({ params }) {
  const post = BLOG_POSTS.find(p => p.slug === params.slug);
  if (!post) return null;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { '@type': 'Organization', name: post.author, url: 'https://www.embratechnologies.org' },
    publisher: { '@type': 'Organization', name: 'Embra Technologies', url: 'https://www.embratechnologies.org' },
    url: `https://www.embratechnologies.org/blog/${params.slug}`,
  };

  return (
    <div className="page-shell">
      <Script id="blog-schema" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify(schema)}
      </Script>

      <section className="page-hero" style={{ paddingBottom: '40px' }}>
        <div className="wrap" style={{ maxWidth: '800px' }}>
          <nav className="cs-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">�</span>
            <Link href="/blog">Blog</Link>
            <span aria-hidden="true">�</span>
            <span>Article</span>
          </nav>
          
          <div style={{ marginTop: '30px', fontSize: '13px', color: 'rgba(255,255,255,0.5)', display: 'flex', gap: '15px' }}>
            <span>{post.date}</span>
            <span>{post.readTime}</span>
          </div>
          
          <h1 style={{ fontSize: 'var(--fs-4xl)', lineHeight: 1.1, marginTop: '15px', marginBottom: '20px', letterSpacing: '-0.02em' }}>
            {post.title}
          </h1>
          
          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.5 }}>
            {post.excerpt}
          </p>
        </div>
      </section>

      <section className="blog-content" style={{ paddingBottom: '100px' }}>
        <div className="wrap" style={{ maxWidth: '800px' }}>
          <div className="prose" dangerouslySetInnerHTML={{ __html: post.content }} style={{ color: 'rgba(255,255,255,0.85)', fontSize: '16px', lineHeight: 1.8 }} />
          
          <div style={{ marginTop: '60px', paddingTop: '40px', borderTop: '1px solid var(--line-dark)' }}>
            <Link href="/blog" className="btn-flip btn-ghost btn-small">
              <span className="btn-flip-inner">
                <span className="btn-flip-state">? Back to all posts</span>
                <span className="btn-flip-state" aria-hidden="true">? Back to all posts</span>
              </span>
            </Link>
          </div>
        </div>
      </section>

      <Cta variant="default" />
    </div>
  );
}
