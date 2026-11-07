import Link from 'next/link';
import { notFound } from 'next/navigation';
import { BLOG_POSTS } from '../../../lib/blogData';
import Cta from '../../../components/Cta';
import OfferStrip from '../../../components/OfferStrip';
import ProjectShot from '../../../components/ProjectShot';
import siteConfig from '../../../lib/site-config';

// 2026-10-26: one relevant project screenshot per article, shown after the introduction (below the
// first screen, so it never delays the page's main content) with a link to the related page.
const POST_SHOTS = {
  'auto-body-shop-marketing': { name: 'tuxford', url: 'tuxfordcollision.com', alt: 'Tuxford Collision Center auto body website, an example from Embra Technologies', caption: 'Example: Tuxford Collision Center, Los Angeles. Licensing, rating and free towing offer up front.', href: '/niches/auto-body-shop-website-design', linkText: 'Auto body website design' },
  'what-tree-service-website-needs': { name: 'skyhightreeservice', url: 'skyhightreeservicechicago.com', alt: 'Sky High Tree Service website, an example from Embra Technologies', caption: 'Example: Sky High Tree Service, Chicagoland. Call and estimate options, project photos and service area.', href: '/niches/tree-service-website-design', linkText: 'Tree service website design' },
  'hvac-local-seo': { name: 'hvac-mockup', url: 'Polar Air HVAC', concept: true, alt: 'Concept design for Polar Air HVAC, a sample brand (not a real client), by Embra Technologies', caption: 'Concept design showing seasonal tune-up callouts, financing details and same-day service requests.', href: '/niches/hvac-website-design', linkText: 'HVAC website design' },
  'local-seo-guide-for-service-businesses': { name: 'pndlaundry', url: 'pndlaundry.com', alt: 'Pick N Drop Laundry website, a Los Angeles local SEO project by Embra Technologies', caption: 'Local SEO project: Pick N Drop Laundry, Los Angeles. Clicks 9 to 21, impressions 471 to 1,399 (Search Console).', href: '/portfolio/pnd-laundry', linkText: 'Read the case study' },
  'website-cost-for-home-service-businesses': { name: 'vvasquez', url: 'vvasquezhandymanllc.net', alt: 'V Vasquez Handyman LLC website, an example from Embra Technologies', caption: 'Example: V Vasquez Handyman LLC, Merced, CA. A clear service catalog with a pre-filled quote form.', href: '/pricing', linkText: 'See our pricing' },
  'website-roi-calculator': { name: 'alaskahandyman', url: 'alaskafastfixhandyman.com', alt: 'Alaska Fast Fix Handyman website, an example from Embra Technologies', caption: 'Example: Alaska Fast Fix Handyman. Tap-to-call on every page and a clear service area.', href: '/portfolio/alaska-fast-fix', linkText: 'Read the case study' },
  'why-pagespeed-matters': { name: 'bestbreaks', url: 'bestbreaks.com.au', alt: 'BestBreaks travel website, an example from Embra Technologies', caption: 'Example: BestBreaks. Its case study links to live PageSpeed reports you can check yourself.', href: '/portfolio/bestbreaks', linkText: 'Read the case study' },
};

// 2026-11-08: topic photo behind each guide's hero (reviewed Pexels trade photos; 480-1600 versions exist).
const POST_HERO = {
  'auto-body-shop-marketing': 'stock-autobody',
  'what-tree-service-website-needs': 'stock-tree',
  'hvac-local-seo': 'stock-hvac',
  'local-seo-guide-for-service-businesses': 'stock-localseo',
  'website-cost-for-home-service-businesses': 'stock-webdesign',
  'website-roi-calculator': 'stock-growth',
  'why-pagespeed-matters': 'stock-integrations',
};
const heroSet = (n, ext) => [480, 720, 960, 1600].map((w) => `/images/optimized/${n}-${w}.${ext} ${w}w`).join(', ');

export const dynamicParams = false;

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    title: post.metaTitle || post.title, // 2026-10-19: short search title; on-page H1 still uses post.title
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
          width: siteConfig.ogImageWidth,
          height: siteConfig.ogImageHeight,
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

  // 2026-11-08: give every <h2> an id and build the "In this guide" contents list from them.
  const toc = [];
  const contentWithIds = post.content.replace(/<h2>([\s\S]*?)<\/h2>/g, (m, inner) => {
    const text = inner.replace(/<[^>]+>/g, '').trim();
    const id = text.toLowerCase().replace(/&[a-z]+;/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    toc.push({ id, text });
    return `<h2 id="${id}">${inner}</h2>`;
  });

  // Split the article at its first section heading so the screenshot sits after the introduction.
  const shot = POST_SHOTS[params.slug];
  const splitAt = contentWithIds.indexOf('<h2');
  const introHtml = splitAt > 0 ? contentWithIds.slice(0, splitAt) : contentWithIds;
  const restHtml = splitAt > 0 ? contentWithIds.slice(splitAt) : '';
  const heroImg = POST_HERO[params.slug];

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

      <div className="read-progress" aria-hidden="true" />
      <section className="page-hero" style={{ paddingBottom: '40px' }}>
        {heroImg && (
          <div className="page-hero-media" aria-hidden="true">
            <picture>
              <source type="image/avif" srcSet={heroSet(heroImg, 'avif')} sizes="(max-width: 767px) 60vw, 100vw" />
              <source type="image/webp" srcSet={heroSet(heroImg, 'webp')} sizes="(max-width: 767px) 60vw, 100vw" />
              <img src={`/images/optimized/${heroImg}-960.jpg`} alt="" decoding="async" fetchPriority="high" />
            </picture>
          </div>
        )}
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
          <OfferStrip variant={['local-seo-guide-for-service-businesses', 'hvac-local-seo', 'auto-body-shop-marketing'].includes(params.slug) ? 'seo' : 'sample'} />
        </div>
      </section>

      <section className="blog-content" style={{ paddingBottom: '100px' }}>
        <div className="wrap" style={{ maxWidth: '800px' }}>
          <div
            className="prose"
            dangerouslySetInnerHTML={{ __html: introHtml }}
            style={{ color: 'rgba(255,255,255,0.85)', fontSize: '16px', lineHeight: 1.8 }}
          />
          {toc.length > 2 && (
            <details className="toc-box" open>
              <summary>In this guide <span className="toc-count">{toc.length} sections</span></summary>
              <ol>
                {toc.map((t) => <li key={t.id}><a href={`#${t.id}`}>{t.text}</a></li>)}
              </ol>
            </details>
          )}
          {shot && <ProjectShot {...shot} />}
          {restHtml && (
            <div
              className="prose"
              dangerouslySetInnerHTML={{ __html: restHtml }}
              style={{ color: 'rgba(255,255,255,0.85)', fontSize: '16px', lineHeight: 1.8 }}
            />
          )}

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
