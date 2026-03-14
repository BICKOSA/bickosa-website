import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BentoCard } from "@/components/bento";
import heroImg1 from "@/assets/hero-campus-1.png";
import heroImg2 from "@/assets/hero-campus-2.png";

const HERO_IMAGES = [
  { src: heroImg1, alt: "BCK SSS Bbiina campus aerial view" },
  { src: heroImg2, alt: "BCK SSS Bbiina campus and grounds" },
];

const SWITCH_INTERVAL_MS = 6000;

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveIndex((i) => (i + 1) % HERO_IMAGES.length);
    }, SWITCH_INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="section">
      <div className="bento">
        {/* Hero: navy gradient with background images — large, anchors the grid */}
        <BentoCard
          variant="grad-navy"
          col={8}
          row2
          minHeight={420}
          className="min-h-[420px] overflow-hidden"
        >
          {/* Background images with crossfade */}
          <div className="absolute inset-0">
            {HERO_IMAGES.map((img, i) => (
              <img
                key={i}
                src={img.src}
                alt=""
                aria-hidden
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                  i === activeIndex ? "opacity-100 z-0" : "opacity-0 z-[-1]"
                }`}
              />
            ))}
            {/* Previous overlay (same as pre-Bento hero): navy gradient for contrast */}
            <div
              className="absolute inset-0 z-[1]"
              style={{
                background: "linear-gradient(to bottom right, rgba(13, 27, 62, 0.9) 0%, rgba(13, 27, 62, 0.85) 50%, rgba(13, 27, 62, 0.9) 100%)",
              }}
            />
            {/* Extra darkening at bottom for CTAs and avatars */}
            <div
              className="absolute inset-0 z-[1] pointer-events-none"
              style={{
                background: "linear-gradient(to top, rgba(13, 27, 62, 0.4) 0%, transparent 50%)",
              }}
            />
          </div>
          <div
            className="bc-glow glow-gold-soft z-[2]"
            style={{ width: 320, height: 320, bottom: -80, right: -60 }}
            aria-hidden
          />
          <span className="bc-tag bc-tag-on-dark z-[2]" style={{ width: "fit-content" }}>
            Est. 1999 · Luzira, Kampala
          </span>
          <div style={{ marginTop: 20, flex: 1 }} className="relative z-[2]">
            <div
              className="bc-eyebrow"
              style={{
                fontSize: "11px",
                letterSpacing: "0.18em",
                color: "var(--gold-500)",
                marginBottom: 10,
              }}
            >
              Bishop Cipriano Kihangire
            </div>
            <h1 className="bc-title xl on-dark">
              Welcome Back,
              <br />
              <span style={{ color: "var(--gold-400)" }}>Old Student.</span>
            </h1>
            <p className="bc-text on-dark" style={{ marginTop: 16, maxWidth: 400, fontSize: "0.9375rem" }}>
              Connect with 2,700+ BCK graduates across Uganda and the world. Events, the sports
              league, and a community that never forgets where it came from.
            </p>
          </div>
          <div
            className="bc-footer relative z-[2]"
            style={{ paddingTop: 24, borderTop: "1px solid rgba(255,255,255,0.1)" }}
          >
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <Link to="/contact" className="bc-btn bc-btn-gold">
                Join BICKOSA
              </Link>
              <Link to="/about" className="bc-btn bc-btn-ghost-dark">
                Explore →
              </Link>
            </div>
            <div className="bc-avatars" style={{ flexShrink: 0 }}>
              <div className="bca bca-1">CM</div>
              <div className="bca bca-2">JO</div>
              <div className="bca bca-3">AK</div>
              <div className="bca bca-4">RN</div>
              <div className="bca bca-5">+2.7k</div>
            </div>
          </div>
        </BentoCard>

        {/* Year Founded — gold tint */}
        <BentoCard variant="gold-tint" col={4} minHeight={200}>
          <div className="bc-accent-bar" aria-hidden />
          <div className="bc-eyebrow">Year Founded</div>
          <div className="bc-stat lg gold" style={{ marginTop: 4 }}>
            1999
          </div>
          <div className="bc-stat-label">BCK SSS · Luzira, Kampala</div>
          <div className="bc-footer">
            <span className="bc-tag bc-tag-gold">Per Aspera Ad Astra</span>
          </div>
        </BentoCard>

        {/* Membership CTA — white */}
        <BentoCard variant="white" col={4} minHeight={200}>
          <div className="bc-accent-bar-navy" aria-hidden />
          <div className="bc-eyebrow">Membership</div>
          <div className="bc-title" style={{ fontSize: "1.15rem" }}>
            Become a BICKOSA member today
          </div>
          <p className="bc-text" style={{ marginTop: 6 }}>
            Events, the alumni directory, the sports league, and mentorship.
          </p>
          <div className="bc-footer">
            <Link to="/contact" className="bc-btn bc-btn-navy">
              Register Now
            </Link>
            <Link to="/about" className="bc-arrow bc-arrow-light" aria-label="Explore">
              →
            </Link>
          </div>
        </BentoCard>

        {/* Alumni count — surface */}
        <BentoCard variant="surface" col={3} minHeight={180}>
          <div className="bc-eyebrow">Network</div>
          <div className="bc-stat gold" style={{ fontSize: "2.75rem" }}>
            2.7k+
          </div>
          <div className="bc-stat-label">Registered Alumni</div>
          <div className="bc-progress" style={{ marginTop: 14 }}>
            <div className="bc-progress-fill navy" style={{ width: "72%" }} />
          </div>
          <p className="bc-text sm" style={{ marginTop: 5, color: "var(--text-muted)" }}>
            72% active this year
          </p>
        </BentoCard>

        {/* Quote — navy tint */}
        <BentoCard variant="navy-tint" col={9} minHeight={180}>
          <div className="bc-border-left-gold" aria-hidden />
          <div style={{ paddingLeft: 16, flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <p className="bc-quote">
              &ldquo;Through hardships to the stars — the BCK spirit never dims, no matter how far
              we travel.&rdquo;
            </p>
            <p className="bc-quote-attr">
              — Per Aspera Ad Astra · Bishop Cipriano Kihangire SSS
            </p>
          </div>
        </BentoCard>
      </div>
    </section>
  );
};

export default HeroSection;
