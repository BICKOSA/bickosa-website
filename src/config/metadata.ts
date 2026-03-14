/**
 * Page metadata and Open Graph config for all routes.
 * Used by PageMeta to set document title and og/twitter meta tags.
 */

const SITE_NAME = "BICKOSA — Bishop Cipriano Kihangire Alumni";
const DEFAULT_DESCRIPTION =
  "BICKOSA — Bishop Cipriano Kihangire Old Students Association. Preserving legacy, building community, giving back.";

/** Default OG image — used as fallback when no per-page image is set. */
const DEFAULT_OG_IMAGE = "/meta/home.png";

export interface PageMetaConfig {
  title: string;
  description: string;
  /** Optional: absolute URL for og:image. If not set, DEFAULT_OG_IMAGE is used. */
  ogImage?: string;
}

/** Metadata keyed by path (exact match). Fallback for unknown paths uses default. */
export const PAGE_METADATA: Record<string, PageMetaConfig> = {
  "/": {
    title: SITE_NAME,
    description: DEFAULT_DESCRIPTION,
    ogImage: "/meta/home.png",
  },
  "/about": {
    title: `About BICKOSA | ${SITE_NAME}`,
    description:
      "The official alumni association of Bishop Cipriano Kihangire Senior Secondary School — a home for old students united by memory, identity, friendship, service, and shared commitment.",
    ogImage: "/meta/about.png",
  },
  "/school": {
    title: `Bishop Cipriano Kihangire S.S.S. | ${SITE_NAME}`,
    description:
      "The school at the heart of the BICKOSA story — shaping generations through faith, discipline, excellence, and community. BCK SSS, Bbiina/Luzira.",
    ogImage: "/meta/school.png",
  },
  "/history": {
    title: `History & Legacy | ${SITE_NAME}`,
    description:
      "A journey of growth, identity, community, and enduring values — from 1999 to today. The story of BCK SSS and BICKOSA.",
    ogImage: "/meta/history.png",
  },
  "/stories": {
    title: `Alumni Stories | ${SITE_NAME}`,
    description:
      "Voices and stories from the Bishop Cipriano Kihangire alumni community — resilience, friendship, and the bond that holds us together.",
    ogImage: "/meta/stories.png",
  },
  "/news": {
    title: `News & Updates | ${SITE_NAME}`,
    description:
      "Latest news, announcements, and updates from BICKOSA and Bishop Cipriano Kihangire Senior Secondary School.",
    ogImage: "/meta/news.png",
  },
  "/events": {
    title: `Events | ${SITE_NAME}`,
    description:
      "Upcoming alumni events, reunions, and community gatherings. Stay connected with BICKOSA and fellow BCK alumni.",
    ogImage: "/meta/events.png",
  },
  "/projects": {
    title: `Projects & Giving | ${SITE_NAME}`,
    description:
      "BICKOSA projects and giving — school infrastructure support, community outreach, and collective impact for BCK SSS and the Bbiina/Luzira community.",
    ogImage: "/meta/projects.png",
  },
  "/gallery": {
    title: `Gallery | ${SITE_NAME}`,
    description:
      "A curated visual archive of school life, alumni memories, events, and the shared experiences that define BICKOSA.",
    ogImage: "/meta/gallery.png",
  },
  "/contact": {
    title: `Contact | ${SITE_NAME}`,
    description:
      "Get in touch with BICKOSA. Inquiries, partnerships, stories, event collaboration, and contact details for the alumni association.",
    ogImage: "/meta/contact.png",
  },
  "/governance": {
    title: `Governance | ${SITE_NAME}`,
    description:
      "How BICKOSA is run — service, transparency, accountability, and continuity. Leadership that serves the alumni community.",
    ogImage: "/meta/governance.png",
  },
  "/faq": {
    title: `FAQs | ${SITE_NAME}`,
    description:
      "Frequently asked questions about BICKOSA, membership, events, and how to get involved with the BCK alumni community.",
    ogImage: "/meta/faq.png",
  },
  "/archive": {
    title: `Archive | ${SITE_NAME}`,
    description:
      "Publications, historic notices, anniversary materials, event records, and legacy stories from the BICKOSA archive.",
    ogImage: "/meta/archive.png",
  },
};

/** Default meta when path is not in PAGE_METADATA (e.g. 404). */
export const DEFAULT_PAGE_META: PageMetaConfig = {
  title: `Page Not Found | ${SITE_NAME}`,
  description: DEFAULT_DESCRIPTION,
};

export function getPageMeta(pathname: string): PageMetaConfig & { ogImage: string } {
  const meta = PAGE_METADATA[pathname] ?? DEFAULT_PAGE_META;
  const ogImage = meta.ogImage ?? DEFAULT_OG_IMAGE;
  return { ...meta, ogImage };
}

export { DEFAULT_OG_IMAGE };
