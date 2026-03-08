import { Link } from "react-router-dom";
import heroImg from "@/assets/hero-school.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-navy">
      {/* Background image with warm overlay */}
      <div className="absolute inset-0">
        <img src={heroImg} alt="BCK SSS Campus" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-navy/90 via-navy-warm/85 to-navy/95" />
      </div>

      {/* Decorative gold accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gold opacity-80" />

      <div className="relative max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-28 sm:py-36 w-full">
        <div className="grid lg:grid-cols-[1fr_380px] gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gold/30 bg-gold/10 mb-8 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <span className="text-[12px] font-semibold tracking-wide uppercase text-gold">
                Est. 1999 · Bbiina, Luzira
              </span>
            </div>

            <h1 className="text-[42px] sm:text-[54px] lg:text-[64px] font-extrabold leading-[1.05] tracking-tight mb-7 animate-fade-in-up text-primary-foreground" style={{ animationDelay: "0.2s" }}>
              Preserving Legacy.<br />
              Building <span className="text-gold">Community</span>.<br />
              Giving Back.
            </h1>

            <p className="text-[17px] sm:text-[18px] leading-[1.7] mb-10 max-w-[540px] animate-fade-in-up text-primary-foreground/65" style={{ animationDelay: "0.3s" }}>
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
                className="inline-flex items-center h-12 px-7 text-[14px] font-medium rounded-md border border-primary-foreground/25 text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
              >
                Upcoming Events
              </Link>
            </div>
          </div>

          {/* Side quote card */}
          <div className="hidden lg:block animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
            <div className="bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-xl p-8">
              <p className="serif-heading text-[22px] leading-[1.45] text-primary-foreground/90 mb-6">
                "Per Aspera Ad Astra"
              </p>
              <p className="text-[14px] text-primary-foreground/50 leading-relaxed mb-4">
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
