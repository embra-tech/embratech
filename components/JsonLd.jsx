/**
 * components/JsonLd.jsx
 * Reusable server-rendered JSON-LD structured data component.
 * Renders a <script type="application/ld+json"> tag with the provided schema.
 *
 * Usage:
 *   <JsonLd data={schemaObject} />
 *   <JsonLd data={[schema1, schema2]} />
 */
export default function JsonLd({ data }) {
  if (!data) return null;
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
