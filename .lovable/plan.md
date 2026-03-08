

# Redesign BICKOSA Website Using Research-Backed Design Language

## Overview

Apply the comprehensive design language system from the research report across the entire BICKOSA website. This involves updating design tokens, typography scale, spacing system, component patterns, navigation structure, page templates, and content copy to match the specification.

## What Changes

### 1. Design Tokens & CSS Foundation (`src/index.css`, `tailwind.config.ts`)

Update the color system to match the report's token specification:
- `--brand-navy-900: #0B1B34` (primary text, hero, nav)
- `--brand-navy-700: #173A6A` (link accents)
- `--brand-gold-500: #D6A82C` (highlights, badges, CTAs)
- `--vibe-cobalt-500: #2563EB` (youthful accent, links, active states)
- `--vibe-teal-500: #0EA5A4` (mentorship, secondary accent)
- `--vibe-coral-500: #F97316` (events, community energy)
- Neutral scale: `#FAFBFD` (page bg), `#F4F6FB` (section alternation), `#E6EAF2` (borders), `#475467` (secondary text), `#101828` (deep ink)
- Add success/warning/danger tokens

Update typography scale to match the report:
- H1: 56px/1.1/700, H2: 40px/1.15/650, H3: 28px/1.2/600, H4: 20px/1.3/600
- Body L: 18px/1.6, Body M: 16px/1.6, Caption: 13px/1.5, Overline: 12px/1.2/600
- Mobile adjustments: H1 36-40px, H2 28-32px

Adopt 8pt spacing grid: section padding 80-120px desktop, 48-72px mobile. Max content width 1200px (xl breakpoint).

### 2. Global Navigation (`src/components/Header.tsx`)

Restructure per report spec:
- Left: logo + "BICKOSA" wordmark
- Center: About, History, Events, News, Projects, Stories, Gallery
- Right: "Join BICKOSA" (primary gold CTA) + "Contact" link
- Desktop: sticky, starts transparent on hero pages then solid on scroll
- Mobile: hamburger with grouped sections
- Move Governance, FAQ, Archive to footer or "More" dropdown

### 3. Footer (`src/components/Footer.tsx`)

Restructure into 5 columns per report:
- About (mission summary)
- Explore (page links)
- Get Involved (Join/Contact/Volunteer)
- Policies (Privacy, Cookies, Terms — placeholder links)
- Contact (email/phone/address)

### 4. Homepage Sections (all `src/components/home/*.tsx`)

**HeroSection.tsx** — Two-column layout per report:
- Eyebrow: "BICKOSA Alumni Community"
- H1: "A proud network — built on legacy, carried by community."
- Subtext with placeholder counts
- Primary CTA: "Join the community" / Secondary: "See upcoming events"
- Supporting line: "Prefer to help right away? Support a project in 2 minutes."
- Remove the side quote card; use a hero image on the right column instead

**TrustStrip.tsx** — Credibility strip:
- Format: "{members_count}+ alumni · {chapters_count} chapters · {projects_count} active projects · {events_count} events/year"
- Single-line clean strip, not a 4-column stat grid

**AboutSnapshot.tsx** — "What we do" section:
- 3 cards: "Reconnect" / "Grow" / "Give back" per report copy
- Remove emoji icons, use line icons or initials instead

**LegacySection.tsx** — Keep split layout but update copy per report

**EventsSection.tsx** — "Featured event" pattern:
- Highlight next event with date/time/venue/chapter metadata
- CTA: "View details"
- Use coral accent for date chips per report spec

**AlumniStories.tsx** — "Alumni Spotlight" pattern:
- Featured story with name, excerpt, CTA "Read story"
- Cards: 3:2 image ratio, media → title → metadata → excerpt → CTA anatomy

**ProjectsPreview.tsx** — "What we're building together":
- Project cards with title, description per report
- CTA: "View all projects"

**NewsSection.tsx** — Latest 3 articles with category chips (Community / School / Chapters)

**GalleryPreview.tsx** — 6-photo preview grid with CTA "Explore the gallery"

**FinalCTA.tsx** — Final CTA band:
- Headline: "Your chapter is part of the story."
- CTA row: "Join" + "Donate" + "Contact"

### 5. Inner Pages (all `src/pages/*.tsx`)

Update each page hero and content to match report templates:

**AboutPage.tsx**: Mission/Vision structured blocks, values as chips ("Unity · Service · Excellence · Integrity · Stewardship"), "How we work" section, CTAs to Join + Governance

**HistoryPage.tsx**: Two-column timeline on desktop, vertical on mobile. Add "Jump to decade" chips. Year markers with expand/collapse details.

**EventsPage.tsx**: Add filter chips (Type: Reunion/AGM/Sports/Mentorship). Event list with left date block (DD + MMM), middle title+venue, right CTA. Featured event card with coral date chip.

**StoriesPage.tsx**: Editorial story cards with 3:2 image ratio, stronger typography, "Submit a story" CTA

**NewsPage.tsx**: Category + year filters, clean article listing with metadata hierarchy

**ProjectsPage.tsx**: Campaign-style cards with goal/raised/progress if applicable, "Where your donation goes" transparency module, budget breakdown placeholder

**GalleryPage.tsx**: Filter by Year/Event/Category. Curated consistent rows (not Pinterest chaos). Lightbox with captions.

**ContactPage.tsx**: Add form variants — General inquiry, Data correction, Partnership. Cleaner layout.

**GovernancePage.tsx**: Leadership placeholders, Constitution PDF link, policy links (privacy/cookies/refunds/terms)

**FAQPage.tsx**: Reorganize into sections: Membership, Events, Donations, Privacy

**ArchivePage.tsx**: Categories — Magazines, AGM minutes, Project reports, Press features, In memoriam

### 6. Card System Standardization

Apply shared card anatomy from the report:
- Media (optional) → title → metadata row → excerpt → CTA
- Border: neutral-200, radius: 12px
- Hover: slight elevation + border darkens
- Event cards: coral date chip, location + chapter metadata
- Story cards: 3:2 image ratio with profile info
- Project cards: goal + progress metadata

### 7. Button System (`src/components/ui/button.tsx`)

Update variants per report:
- Primary: navy bg, white text, subtle shadow on hover (sm: 36px, md: 44px, lg: 52px)
- Secondary: white bg, navy border, navy text
- Ghost/link: cobalt text with underline on hover
- Keep destructive variant

### 8. Motion & Interaction

- Hover/focus: 120-180ms transitions
- Panel transitions: 180-240ms
- Section reveals: 240-320ms with subtle easing
- Add `prefers-reduced-motion` media query support
- Image scale on hover for gallery/cards

### 9. Color Usage Rule Enforcement

- 80-90% neutrals, 10-15% navy, 3-7% accents per page
- Each section gets one "identity color" (cobalt OR teal OR coral) for chips/dividers/icons
- Only hero uses gradient (navy → slightly lighter navy)
- Remove oversaturated backgrounds and excessive accent usage

## Files to Create/Modify

**Modified files (19):**
- `src/index.css` — new token values, spacing utilities, typography classes
- `tailwind.config.ts` — updated colors, spacing, breakpoints
- `src/components/ui/button.tsx` — size/variant updates
- `src/components/Header.tsx` — restructured nav with scroll behavior
- `src/components/Footer.tsx` — 5-column layout with policy links
- `src/components/Layout.tsx` — minor padding adjustments
- `src/components/home/HeroSection.tsx` — two-column with report copy
- `src/components/home/TrustStrip.tsx` — single-line credibility strip
- `src/components/home/AboutSnapshot.tsx` — 3-card "What we do"
- `src/components/home/LegacySection.tsx` — updated copy
- `src/components/home/AlumniStories.tsx` — editorial card pattern
- `src/components/home/EventsSection.tsx` — featured event + list
- `src/components/home/ProjectsPreview.tsx` — campaign cards
- `src/components/home/NewsSection.tsx` — category chips
- `src/components/home/GalleryPreview.tsx` — curated 6-photo grid
- `src/components/home/FinalCTA.tsx` — updated CTA band
- All 13 page files in `src/pages/` — updated per report templates

## Technical Notes

- Keep Inter + Source Serif 4 font imports (already loaded)
- All accent colors already exist in tailwind config; update hex values to match report tokens
- Maintain existing routing structure in App.tsx
- Use existing lucide-react icons (2px stroke line icons match report spec)
- No new dependencies needed

