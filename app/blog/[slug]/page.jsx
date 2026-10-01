import Link from 'next/link';
import { notFound } from 'next/navigation';
import { BLOG_POSTS } from '../../../lib/blogData';
import Cta from '../../../components/Cta';
import siteConfig from '../../../lib/site-config';

export const dynamicParams = false;

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    title: `${post.title} | Embra`,
    description: post.excerpt,
    alternates: { canonical: `/blog/${params.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://www.embratechnologies.org/blog/${params.slug}`,
      type: 'article',
      publishedTime: post.date,
      images: [
        {
          url: 'https://www.embratechnologies.org/opengraph-image.jpg',
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      images: ['https://www.embratechnologies.org/opengraph-image.jpg'],
    },
  };
}

export default function BlogPostPage({ params }) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const cleanText = post.content.replace(/<[^>]*>/g, '');
  const wordCount = cleanText.split(/\s+/).filter(Boolean).length;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.dateModified || post.date,
    wordCount: wordCount,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteConfig.siteUrl}/blog/${params.slug}`,
    },
    image: `${siteConfig.siteUrl}${siteConfig.ogImage}`,
    author: {
      '@type': 'Person',
      name: siteConfig.author.name !== 'TODO_OWNER' ? siteConfig.author.name : post.author,
      jobTitle: siteConfig.author.role !== 'TODO_OWNER' ? siteConfig.author.role : 'Lead Technical Architect',
      worksFor: {
        '@type': 'Organization',
        name: siteConfig.legalName,
        url: siteConfig.siteUrl,
      },
      url: `${siteConfig.siteUrl}/about`,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.legalName,
      url: siteConfig.siteUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.siteUrl}${siteConfig.logo}`,
      },
    },
    url: `${siteConfig.siteUrl}/blog/${params.slug}`,
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${siteConfig.siteUrl}/` },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${siteConfig.siteUrl}/blog` },
      { '@type': 'ListItem', position: 3, name: post.title, item: `${siteConfig.siteUrl}/blog/${params.slug}` },
    ],
  };

  return (
    <div className="page-shell">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([schema, breadcrumbSchema]) }}
      />

      <section className="page-hero" style={{ paddingBottom: '40px' }}>
        <div className="wrap" style={{ maxWidth: '800px' }}>
          <nav className="cs-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">›</span>
            <Link href="/blog">Blog</Link>
            <span aria-hidden="true">›</span>
            <span aria-current="page" style={{ maxWidth: '320px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{post.title}</span>
          </nav>

          <div
            style={{
              marginTop: '30px',
              fontSize: '13px',
              color: 'rgba(255,255,255,0.5)',
              display: 'flex',
              gap: '12px',
              flexWrap: 'wrap',
            }}
          >
            <span>{post.date}</span>
            <span>·</span>
            <span>By {post.author}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>

          <h1
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              lineHeight: 1.15,
              marginTop: '15px',
              marginBottom: '20px',
              letterSpacing: '-0.02em',
            }}
          >
            {post.title}
          </h1>

          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.5 }}>
            {post.excerpt}
          </p>
        </div>
      </section>

      <section className="blog-content" style={{ paddingBottom: '100px' }}>
        <div className="wrap" style={{ maxWidth: '800px' }}>
          <div
            className="prose"
            dangerouslySetInnerHTML={{ __html: post.content }}
            style={{ color: 'rgba(255,255,255,0.85)', fontSize: '16px', lineHeight: 1.8 }}
          />

          <div style={{ marginTop: '60px', paddingTop: '40px', borderTop: '1px solid var(--line-dark)' }}>
            <Link href="/blog" className="btn-flip btn-ghost btn-small">
              <span className="btn-flip-inner">
                <span className="btn-flip-state">← Back to all posts</span>
                <span className="btn-flip-state" aria-hidden="true">← Back to all posts</span>
              </span>
            </Link>
          </div>
        </div>
      </section>

      <Cta variant="about" />
    </div>
  );
}
