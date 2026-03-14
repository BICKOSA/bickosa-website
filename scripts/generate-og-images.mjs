/**
 * generate-og-images.mjs
 *
 * Generates 1200×630 Open Graph PNG images for every BICKOSA page.
 * Uses the bickosa-logo.png and the project's navy/gold brand colours.
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

// ─── Brand colours (from index.css) ───────────────────────────────────────────
const NAVY      = "#111d3a";   // hsl(222 47% 11%)
const NAVY_MID  = "#1b2d55";   // slightly lighter for gradient feel
const GOLD      = "#d4922a";   // hsl(38 72% 52%)
const GOLD_LIGHT = "#e8b45f";  // softer gold for description text
const WHITE     = "#ffffff";

// ─── Dimensions ───────────────────────────────────────────────────────────────
const W = 1200;
const H = 630;

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
  // Logo: scale to fit within 280×100 box, centred at top-left region
  const logoW = 280;
  const logoH = 100;
  const logoX = 80;
  const logoY = 72;

  // Decorative dots pattern (subtle)
  const dots = Array.from({ length: 6 }, (_, row) =>
    Array.from({ length: 10 }, (_, col) => {
      const cx = 880 + col * 32;
      const cy = 60 + row * 32;
      return `<circle cx="${cx}" cy="${cy}" r="2" fill="${GOLD}" opacity="0.15"/>`;
    }).join("")
  ).join("");

  return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
    width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <!-- Background gradient: deep navy to slightly lighter navy -->
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%"   stop-color="${NAVY}"/>
      <stop offset="100%" stop-color="${NAVY_MID}"/>
    </linearGradient>
    <!-- Subtle left-side glow -->
    <radialGradient id="glow" cx="0%" cy="100%" r="70%">
      <stop offset="0%"   stop-color="${GOLD}" stop-opacity="0.08"/>
      <stop offset="100%" stop-color="${NAVY}" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <!-- Background -->
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect width="${W}" height="${H}" fill="url(#glow)"/>

  <!-- Decorative dot grid (top-right) -->
  ${dots}

  <!-- Gold accent bar – bottom -->
  <rect x="0" y="${H - 8}" width="${W}" height="8" fill="${GOLD}"/>

  <!-- Gold accent bar – left edge -->
  <rect x="0" y="0" width="6" height="${H}" fill="${GOLD}"/>

  <!-- Horizontal rule under logo area -->
  <line x1="${logoX}" y1="${logoY + logoH + 20}" x2="${logoX + 380}" y2="${logoY + logoH + 20}"
        stroke="${GOLD}" stroke-width="1.5" opacity="0.4"/>

  <!-- Logo image -->
  <image href="${logoDataUri}"
    x="${logoX}" y="${logoY}"
    width="${logoW}" height="${logoH}"
    preserveAspectRatio="xMinYMid meet"/>

  <!-- Page label pill (top-right) -->
  <rect x="${W - 180}" y="60" width="120" height="34" rx="17"
        fill="none" stroke="${GOLD}" stroke-width="1.5" opacity="0.6"/>
  <text x="${W - 120}" y="82" font-family="Georgia, 'Times New Roman', serif"
        font-size="14" fill="${GOLD}" opacity="0.85" text-anchor="middle"
        letter-spacing="2">${escapeXml(label.toUpperCase())}</text>

  <!-- Main title -->
  <text x="${logoX}" y="280"
        font-family="Georgia, 'Times New Roman', serif"
        font-size="64" font-weight="bold"
        fill="${WHITE}" letter-spacing="-1">
    ${wrapText(title, logoX, 280, 76, 22)}
  </text>

  <!-- Subtitle / description -->
  <text x="${logoX}" y="420"
        font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
        font-size="26" fill="${GOLD_LIGHT}" opacity="0.9" letter-spacing="0.3">
    ${wrapText(subtitle, logoX, 420, 38, 48)}
  </text>

  <!-- Domain watermark (bottom-right) -->
  <text x="${W - 80}" y="${H - 28}"
        font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
        font-size="16" fill="${WHITE}" opacity="0.3"
        text-anchor="end" letter-spacing="1.5">BICKOSA.COM</text>
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
