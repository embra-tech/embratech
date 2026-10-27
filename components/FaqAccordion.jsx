// 2026-10-26: FAQ dropdowns using native <details>/<summary>.
// SEO-safe: every question and answer is in the HTML (Google indexes collapsed <details> content),
// no JavaScript, keyboard-accessible. The first question starts open.
export default function FaqAccordion({ items, openFirst = true }) {
  return (
    <div className="faq-accordion">
      {items.map((f, i) => (
        <details key={f.q} className="faq-item" open={openFirst && i === 0}>
          <summary>
            <h3>{f.q}</h3>
            <span className="faq-chevron" aria-hidden="true" />
          </summary>
          <div className="faq-answer">
            <p>{f.a}</p>
          </div>
        </details>
      ))}
    </div>
  );
}
