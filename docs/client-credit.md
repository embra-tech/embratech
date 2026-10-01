# Client Credit Link Guide

## What Is This?

A "footer credit link" is a small link at the bottom of a client's website that reads something like:
> "Website by Embra Technologies"

When a client's site links back to `https://www.embratechnologies.org`, it:
- Passes link equity ("PageRank") to our domain, improving our authority
- Acts as a reference/testimonial signal in Google's local ranking system
- Drives referral traffic from potential clients visiting the client's site

## Script to Send to Clients

Send this message (via text, email, or WhatsApp) to each client:

---

**Subject:** Quick website favour (takes 2 minutes)

Hi [Client Name],

Quick favour — could you add a small credit link to the bottom of your website footer? Something like:

> Website by [Embra Technologies](https://www.embratechnologies.org)

This just links back to us so potential customers can find us through your site. It's completely optional, takes 2 minutes, and doesn't change anything about your site visually except adding one small line.

If you're comfortable with it, let me know and I'll send you the exact code snippet to paste in.

Thanks!

---

## The Code Snippet

If the client uses their own editor or developer, send this HTML:

```html
<p style="font-size:13px; color:#888; margin-top:16px;">
  Website by <a href="https://www.embratechnologies.org" target="_blank" rel="noopener">Embra Technologies</a>
</p>
```

## Target Clients

| Client | Site | Status |
|--------|------|--------|
| Tuxford Collision Center | `/portfolio/tuxford-collision` | Not asked |
| V Vasquez Handyman LLC | `/portfolio/vvasquez-handyman` | Not asked |
| Alaska Fast Fix | `/portfolio/alaska-fast-fix` | Not asked |
| Sky High Tree Service | `/portfolio/sky-high-tree` | Not asked |
| BestBreaks | `/portfolio/bestbreaks` | Not asked |

## Anchor Text Variety (Important for SEO)

Use varied anchor text across clients to avoid over-optimization:
- "Website by Embra Technologies"
- "Built by Embra"
- "Web design by Embra"
- "Designed by Embra Technologies"
- "Web design: Embra Technologies"

**Never use the same anchor text for all 5 clients.**
