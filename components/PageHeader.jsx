'use client';

export default function PageHeader({ pill, badge, title, sub }) {
  return (
    <div className="page-head">
      <div className="section-badge">
        <span className="badge-pill">{pill}</span>
        <span className="badge-text">{badge}</span>
      </div>
      <h1>{title}</h1>
      {sub && <p className="page-head-sub">{sub}</p>}
    </div>
  );
}
