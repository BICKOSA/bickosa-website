import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
    <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-navy">
      {/* Background images with auto-switch and crossfade */}
      <div className="absolute inset-0">
        {HERO_IMAGES.map((img, i) => (
          <img
            key={i}
            src={img.src}
            alt={img.alt}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              i === activeIndex ? "opacity-100 z-0" : "opacity-0 z-[-1]"
            }`}
            aria-hidden={i !== activeIndex}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-br from-navy/90 via-navy/85 to-navy/90 z-[1]" />
      </div>

      {/* Decorative gold accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gold opacity-80 z-10" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-28 sm:py-36 w-full">
        <div className="grid lg:grid-cols-[1fr_380px] gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gold/30 bg-gold/10 mb-8 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <span className="text-[12px] font-semibold tracking-wide uppercase text-gold">
                Est. 1999 · Bbiina, Luzira
              </span>
            </div>

            <h1 className="text-[42px] sm:text-[54px] lg:text-[64px] font-extrabold leading-[1.05] tracking-tight mb-7 animate-fade-in-up text-primary-foreground [text-shadow:0_2px_12px_rgba(0,0,0,0.5)]" style={{ animationDelay: "0.2s" }}>
              Preserving Legacy.<br />
              Building <span className="text-gold">Community</span>.<br />
              Giving Back.
            </h1>

            <p className="text-[17px] sm:text-[18px] leading-[1.7] mb-10 max-w-[540px] animate-fade-in-up text-primary-foreground/90 [text-shadow:0_1px_8px_rgba(0,0,0,0.6)]" style={{ animationDelay: "0.3s" }}>
              BICKOSA is the home of Bishop Cipriano Kihangire alumni — bringing together former students through shared identity, lasting connections, and a commitment to give back.
            </p>

            <div className="flex flex-wrap gap-3 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <Link
                to="/about"
                className="inline-flex items-center h-12 px-7 text-[14px] font-semibold rounded-md bg-gold text-navy hover:bg-gold-light transition-colors"
              >
                Explore Our Story
              </Link>
              <Link
                to="/events"
                className="inline-flex items-center h-12 px-7 text-[14px] font-medium rounded-md border border-primary-foreground/40 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20 transition-colors [text-shadow:0_1px_4px_rgba(0,0,0,0.4)]"
              >
                Upcoming Events
              </Link>
            </div>
          </div>

          {/* Side quote card */}
          <div className="hidden lg:block animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
            <div className="bg-navy/80 backdrop-blur-md border border-primary-foreground/20 rounded-xl p-8 shadow-xl">
              <p className="serif-heading text-[22px] leading-[1.45] text-primary-foreground [text-shadow:0_1px_6px_rgba(0,0,0,0.5)] mb-6">
                "Per Aspera Ad Astra"
              </p>
              <p className="text-[14px] text-primary-foreground/85 leading-relaxed mb-4 [text-shadow:0_1px_4px_rgba(0,0,0,0.4)]">
                Through hardship to the stars — a motto that continues to inspire every alumnus.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-px bg-gold" />
                <span className="text-[11px] font-semibold uppercase tracking-wider text-gold">School Motto</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
