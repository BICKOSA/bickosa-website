# BICKOSA Bento Grid Style Guide

This document summarizes the Bento Grid design system used across the BICKOSA website. The reference implementation is the brand-identity HTML file: `bickosa-bento-grid.html`.

## Color Hierarchy

1. **White / Surface** — Default for most cards and page background. Use `bc-white`, `bc-surface`, `bc-navy-tint`, `bc-gold-tint`.
2. **Navy Tint** — Light emphasis (quotes, featured stats). Use `bc-navy-tint` with optional `bc-border-left-gold`.
3. **Navy** — Hero cards only. **Maximum one per grid section.** Use `bc-navy` or `bc-grad-navy` to anchor a layout.
4. **Gold** — Single CTA or accent per page. Use `bc-gold` or gold accent bars/tags sparingly.

## Card Themes

| Class         | Use case |
|---------------|----------|
| `bc-white`    | Primary content cards (events, profiles, articles). |
| `bc-surface`  | Supporting content, KPIs, sidebar-style blocks. |
| `bc-navy-tint` | Quotes, light emphasis, featured stats. Pair with `bc-border-left-gold` for priority. |
| `bc-gold-tint` | Achievements, milestones, engagement (e.g. streaks). |
| `bc-navy` / `bc-grad-navy` | Hero or featured block — one per section. |
| `bc-gold`     | Single primary CTA card per page (e.g. Join, Donate). |

## Typography

- **Display (headings):** `var(--font-display)` (Playfair Display).
- **Body:** `var(--font-sans)` (Inter).
- **Serif accent (quotes):** `var(--font-serif)` (Cormorant Garamond).

Section structure: `section-eyebrow` (gold, uppercase) → `section-heading` (Playfair) → `section-sub` (optional).  
Card structure: `bc-eyebrow` → `bc-title` (with modifiers `.lg`, `.xl`, `.on-dark`, `.gold`) → `bc-text` → `bc-footer` (optional).

## Layout

- **Page shell:** `.page` — max-width 1280px, padding 56px 32px 96px (responsive at 640px).
- **Grid:** `.bento` — 12 columns, gap `var(--bento-gap)`. Column classes: `col-3` … `col-12`, optional `row-2`.
- **Breakpoints:** 960px (e.g. col-3/4 → span 6), 640px (all span 12, reduced padding).

## Components

- **Buttons:** `bc-btn`, `bc-btn-navy`, `bc-btn-gold`, `bc-btn-outline`, `bc-btn-ghost-dark`, etc.
- **Tags:** `bc-tag`, `bc-tag-navy`, `bc-tag-gold`, `bc-tag-on-dark`, etc.
- **Decorative:** `bc-accent-bar`, `bc-accent-bar-navy`, `bc-border-left-gold`, `bc-dots-dark`, `bc-glow`.

Use the React components in `@/components/bento` (`BentoGrid`, `BentoCard`) for consistent layout and theming.
