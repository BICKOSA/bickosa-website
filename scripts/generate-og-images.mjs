/**
 * generate-og-images.mjs
 *
 * Generates 1200×630 Open Graph PNG images for every BICKOSA page.
 * Uses the Bento design system: bento grid, design tokens, typography (eyebrow → title → text).
 * See docs/BENTO_STYLE.md and src/styles/bento.css.
 *
 * Usage:
 *   bun run generate:og
 *   node scripts/generate-og-images.mjs
 */

import sharp from "sharp";
import { readFileSync, mkdirSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const OUT_DIR = resolve(ROOT, "public/meta");

// ─── Bento design tokens (from src/index.css / bento.css) ─────────────────────
const NAVY_950 = "#040e22";
const NAVY_900 = "#0d1b3e";
const NAVY_700 = "#1a3060";
const NAVY_600 = "#1e3d7a";
const NAVY_200 = "#a3b8de";
const NAVY_100 = "#dde5f4";
const NAVY_50 = "#eef2fa";

const GOLD_700 = "#8c5c00";
const GOLD_600 = "#a87020";
const GOLD_500 = "#c9a84c";
const GOLD_400 = "#d4b86a";
const GOLD_300 = "#e2cd96";
const GOLD_200 = "#efddb8";
const GOLD_50 = "#fdf8ed";

const WHITE = "#ffffff";
const SURFACE = "#f7f8fc";
const SURFACE_ALT = "#f0f3fb";
const BORDER = "#e4e8f2";
const TEXT_SECONDARY = "#4a5470";

// Bento layout
const BENTO_GAP = 12;
const RADIUS_2XL = 28; // 1.75rem

// ─── Dimensions ───────────────────────────────────────────────────────────────
const W = 1200;
const H = 630;
const PAD = 40;

// ─── Logo ─────────────────────────────────────────────────────────────────────
const logoPath  = resolve(ROOT, "src/assets/bickosa-logo.png");
const logoB64   = readFileSync(logoPath).toString("base64");
const logoDataUri = `data:image/png;base64,${logoB64}`;

// ─── Page definitions ─────────────────────────────────────────────────────────
// Mirrors src/config/metadata.ts — update both together if routes change.
const PAGES = [
  {
    slug: "home",
    title: "BICKOSA",
    subtitle: "Bishop Cipriano Kihangire Alumni",
    label: "Home",
  },
  {
    slug: "about",
    title: "About BICKOSA",
    subtitle: "Our identity, values, and what we stand for",
    label: "About",
  },
  {
    slug: "school",
    title: "BCK Senior Secondary",
    subtitle: "The school at the heart of our story",
    label: "School",
  },
  {
    slug: "history",
    title: "History & Legacy",
    subtitle: "A journey from 1999 to today",
    label: "History",
  },
  {
    slug: "stories",
    title: "Alumni Stories",
    subtitle: "Voices from the BICKOSA community",
    label: "Stories",
  },
  {
    slug: "news",
    title: "News & Updates",
    subtitle: "Latest announcements from BICKOSA",
    label: "News",
  },
  {
    slug: "events",
    title: "Events",
    subtitle: "Reunions, gatherings & community events",
    label: "Events",
  },
  {
    slug: "projects",
    title: "Projects & Giving",
    subtitle: "Collective impact for BCK SSS & community",
    label: "Projects",
  },
  {
    slug: "gallery",
    title: "Gallery",
    subtitle: "Memories, school life & alumni moments",
    label: "Gallery",
  },
  {
    slug: "contact",
    title: "Contact BICKOSA",
    subtitle: "Get in touch with the alumni association",
    label: "Contact",
  },
  {
    slug: "governance",
    title: "Governance",
    subtitle: "Transparency, leadership & accountability",
    label: "Governance",
  },
  {
    slug: "faq",
    title: "FAQs",
    subtitle: "Frequently asked questions about BICKOSA",
    label: "FAQ",
  },
  {
    slug: "archive",
    title: "Archive",
    subtitle: "Publications, records & legacy materials",
    label: "Archive",
  },
];

// ─── SVG template ─────────────────────────────────────────────────────────────

/**
 * Wraps long text into SVG <tspan> lines.
 * @param {string} text
 * @param {number} maxChars – approx characters per line
 * @returns {string} SVG tspan elements
 */
function wrapText(text, x, yStart, lineHeight, maxChars = 42) {
  const words = text.split(" ");
  const lines = [];
  let current = "";

  for (const word of words) {
    const candidate = current ? `${current} ${word}` : word;
    if (candidate.length > maxChars && current) {
      lines.push(current);
      current = word;
    } else {
      current = candidate;
    }
  }
  if (current) lines.push(current);

  return lines
    .map(
      (line, i) =>
        `<tspan x="${x}" dy="${i === 0 ? 0 : lineHeight}">${escapeXml(line)}</tspan>`
    )
    .join("");
}

function escapeXml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function buildSvg({ title, subtitle, label }) {
  // Bento layout: white content card (left) + navy accent card (right)
  const mainW = 800;
  const mainH = H - PAD * 2;
  const mainX = PAD;
  const mainY = PAD;

  const accentX = mainX + mainW + BENTO_GAP;
  const accentW = W - accentX - PAD;
  const accentH = mainH;
  const accentY = PAD;

  const innerPad = 44;
  const logoW = 56;
  const logoH = 56;
  const logoX = mainX + innerPad;
  const logoY = mainY + innerPad + 8;

  // Title Y positioned after logo + eyebrow
  const eyebrowY = logoY + logoH + 32;
  const titleY = eyebrowY + 56;
  const subtitleY = titleY + 74;

  // bc-dots-dark on accent card
  const dotSpacing = 22;
  const dotsAccent = [];
  for (let row = 0; row < Math.ceil(accentH / dotSpacing); row++) {
    for (let col = 0; col < Math.ceil(accentW / dotSpacing); col++) {
      const cx = accentX + 12 + col * dotSpacing;
      const cy = accentY + 12 + row * dotSpacing;
      if (cx < accentX + accentW - 12 && cy < accentY + accentH - 12) {
        dotsAccent.push(`<circle cx="${cx}" cy="${cy}" r="1" fill="${WHITE}" opacity="0.055"/>`);
      }
    }
  }

  // Accent card centre for page label
  const accentCX = accentX + accentW / 2;
  const accentCY = accentY + accentH / 2;

  return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
    width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="gradNavy" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${NAVY_900}"/>
      <stop offset="100%" stop-color="${NAVY_700}"/>
    </linearGradient>
    <linearGradient id="accentBar" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="${GOLD_500}"/>
      <stop offset="100%" stop-color="${GOLD_300}"/>
    </linearGradient>
    <radialGradient id="glowGold" cx="50%" cy="40%" r="55%">
      <stop offset="0%" stop-color="${GOLD_400}" stop-opacity="0.18"/>
      <stop offset="100%" stop-color="${NAVY_900}" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <!-- Page background (surface) -->
  <rect width="${W}" height="${H}" fill="${SURFACE}"/>

  <!-- ─── Main card (bc-white) ─────────────────────────────────────────── -->
  <rect x="${mainX}" y="${mainY}" width="${mainW}" height="${mainH}"
        rx="${RADIUS_2XL}" fill="${WHITE}" stroke="${BORDER}" stroke-width="1"/>

  <!-- bc-accent-bar (gold gradient top edge) -->
  <rect x="${mainX}" y="${mainY}" width="${mainW}" height="4"
        rx="${RADIUS_2XL}" fill="url(#accentBar)"/>

  <!-- bc-border-left-gold -->
  <rect x="${mainX}" y="${mainY + mainH * 0.18}" width="3.5" height="${mainH * 0.3}"
        fill="${GOLD_500}" rx="2"/>

  <!-- Logo (on white = visible) -->
  <image href="${logoDataUri}"
    x="${logoX}" y="${logoY}"
    width="${logoW}" height="${logoH}"
    preserveAspectRatio="xMidYMid meet"/>

  <!-- Brand text next to logo -->
  <text x="${logoX + logoW + 16}" y="${logoY + 24}"
        font-family="Georgia, 'Times New Roman', serif"
        font-size="18" font-weight="700" fill="${NAVY_900}" letter-spacing="-0.01em">BICKOSA</text>
  <text x="${logoX + logoW + 16}" y="${logoY + 46}"
        font-family="Inter, -apple-system, sans-serif"
        font-size="12" fill="${TEXT_SECONDARY}" letter-spacing="0.02em">Bishop Cipriano Kihangire Alumni</text>

  <!-- bc-eyebrow -->
  <text x="${logoX}" y="${eyebrowY}"
        font-family="Inter, -apple-system, sans-serif"
        font-size="12" font-weight="700" fill="${GOLD_600}"
        letter-spacing="0.2em">${escapeXml(label.toUpperCase())}</text>

  <!-- bc-title (navy on white) -->
  <text x="${logoX}" y="${titleY}"
        font-family="Georgia, 'Times New Roman', serif"
        font-size="52" font-weight="700" fill="${NAVY_900}" letter-spacing="-0.025em">
    ${wrapText(title, logoX, titleY, 64, 26)}
  </text>

  <!-- bc-text (subtitle) -->
  <text x="${logoX}" y="${subtitleY}"
        font-family="Inter, -apple-system, sans-serif"
        font-size="22" fill="${TEXT_SECONDARY}" letter-spacing="0.01em">
    ${wrapText(subtitle, logoX, subtitleY, 32, 38)}
  </text>

  <!-- Domain (bottom of main card) -->
  <text x="${logoX}" y="${mainY + mainH - innerPad + 10}"
        font-family="Inter, -apple-system, sans-serif"
        font-size="14" fill="${NAVY_200}" letter-spacing="0.06em">bickosa.com</text>

  <!-- ─── Accent card (bc-grad-navy) ───────────────────────────────────── -->
  <rect x="${accentX}" y="${accentY}" width="${accentW}" height="${accentH}"
        rx="${RADIUS_2XL}" fill="url(#gradNavy)"/>

  <!-- Gold glow on accent card -->
  <rect x="${accentX}" y="${accentY}" width="${accentW}" height="${accentH}"
        rx="${RADIUS_2XL}" fill="url(#glowGold)"/>

  <!-- bc-dots-dark -->
  ${dotsAccent.join("")}

  <!-- Page label (centred, large, gold) -->
  <text x="${accentCX}" y="${accentCY - 8}"
        font-family="Georgia, 'Times New Roman', serif"
        font-size="48" font-weight="700" fill="${GOLD_500}"
        text-anchor="middle" letter-spacing="-0.02em">${escapeXml(label)}</text>

  <!-- Thin gold divider under label -->
  <line x1="${accentCX - 32}" y1="${accentCY + 16}" x2="${accentCX + 32}" y2="${accentCY + 16}"
        stroke="${GOLD_500}" stroke-width="2" opacity="0.5"/>

  <!-- Tag: "Est. 1999" -->
  <rect x="${accentCX - 44}" y="${accentCY + 32}" width="88" height="26" rx="13"
        fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
  <text x="${accentCX}" y="${accentCY + 50}"
        font-family="Inter, -apple-system, sans-serif"
        font-size="11" font-weight="600" fill="rgba(255,255,255,0.7)"
        text-anchor="middle" letter-spacing="0.08em">EST. 1999</text>

  <!-- Gold accent bar bottom of accent card -->
  <rect x="${accentX}" y="${accentY + accentH - 4}" width="${accentW}" height="4"
        rx="0 0 ${RADIUS_2XL} ${RADIUS_2XL}" fill="url(#accentBar)" opacity="0.7"/>
</svg>`;
}

// ─── Main ─────────────────────────────────────────────────────────────────────

mkdirSync(OUT_DIR, { recursive: true });

let generated = 0;
let failed = 0;

for (const page of PAGES) {
  const outPath = resolve(OUT_DIR, `${page.slug}.png`);
  const svg = buildSvg(page);

  try {
    await sharp(Buffer.from(svg))
      .png({ compressionLevel: 8, palette: false })
      .toFile(outPath);
    console.log(`  ✓  ${page.slug}.png`);
    generated++;
  } catch (err) {
    console.error(`  ✗  ${page.slug}.png — ${err.message}`);
    failed++;
  }
}

console.log(`\n${generated} image(s) generated → public/meta/`);
if (failed > 0) console.error(`${failed} image(s) failed.`);
process.exit(failed > 0 ? 1 : 0);
