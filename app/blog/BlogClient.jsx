'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { useReveal } from '../../lib/useReveal';
import PageHeader from '../../components/PageHeader';
import Breadcrumb from '../../components/Breadcrumb';
import Cta from '../../components/Cta';
import { BLOG_POSTS } from '../../lib/blogData';

export default function BlogClient() {
  const ref = useRef(null);
  useReveal(ref);

  return (
    <div ref={ref} className="page-shell">
      <section className="page-hero">
        <div className="wrap">
          <Breadcrumb label="Blog" href="/blog" />
          <PageHeader
            pill="Resources"
            badge="Insights"
            title={<>Growth strategies for <span className="highlight-text">local businesses.</span></>}
            sub="Actionable advice on local SEO, website performance, and turning digital traffic into real-world customers."
          />
        </div>
      </section>

      <section className="blog-index">
        <div className="wrap">
          <div className="blog-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '30px', marginBottom: '80px' }}>
            {BLOG_POSTS.map((post, i) => (
              <Link href={`/blog/${post.slug}`} key={post.slug} className="blog-card reveal-up" style={{ animationDelay: `${i * 0.1}s`, display: 'block', background: 'rgba(255,255,255,0.02)', border: '1px solid var(--line-dark)', borderRadius: '16px', padding: '30px', textDecoration: 'none', transition: 'border-color 0.3s' }}>
                <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', marginBottom: '12px', display: 'flex', justifyContent: 'space-between' }}>
                  <span>{post.date}</span>
                  <span>·</span>
                  <span>{post.readTime}</span>
                  <span>·</span>
                  <span>By {post.author}</span>
                </div>
                <h3 style={{ fontSize: '20px', color: '#fff', marginBottom: '12px', lineHeight: 1.3 }}>{post.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14.5px', lineHeight: 1.6, marginBottom: '20px' }}>{post.excerpt}</p>
                <span style={{ color: 'var(--primary)', fontSize: '13px', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                  Read Article
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Cta variant="default" />
    </div>
  );
}
