# Frontend Approval Needed

Items that require a visual/UI change and cannot be implemented under the current frontend freeze.
Each item is logged here with a one-line reason for blocking.

---

## Logged Items

### FE-01 — Interactive ROI Calculator on /blog/website-roi-calculator
**Reason:** A functional calculator widget (input fields, JS computation) requires new UI components and likely new CSS/JS. The text-based worksheet formula has been added instead.

### FE-02 — Footer "Industries" Navigation Column
**Reason:** Adding a new column to the footer navigation structure is a structural/visual change to an existing layout component (`Footer.jsx`). Requires design approval before implementation.

### FE-03 — Breadcrumb Visual Trail on New Static Pages
**Reason:** Visual breadcrumb components on new niche/location pages are not being added to avoid any possible className or layout shift. JSON-LD BreadcrumbList schema has been added instead (no visible change).

### FE-04 — Author Photo / Bio Card on Blog Posts
**Reason:** A visual author card component would require new CSS. The author schema points to /about until real author bio data is provided in site-config.js.

### FE-05 — Favicon PNG/ICO Addition
**Reason:** Adding 48×48 PNG and ICO files and wiring them in metadata icons requires verifying no layout shift occurs with the existing SVG. Needs screenshot diff review before shipping.
