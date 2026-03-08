import { Link } from "react-router-dom";
import heroImg from "@/assets/hero-school.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center" style={{ background: "hsl(var(--navy))" }}>
      <div className="absolute inset-0 opacity-20">
        <img src={heroImg} alt="BCK SSS Campus" className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, hsl(222 47% 11% / 0.85) 0%, hsl(222 47% 11% / 0.95) 100%)" }} />

      <div className="relative max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-24 sm:py-32">
        <div className="max-w-[640px]">
          <p className="text-[13px] font-medium tracking-[0.15em] uppercase mb-6 animate-fade-in-up" style={{ color: "hsl(var(--gold))", animationDelay: "0.1s" }}>
            Bishop Cipriano Kihangire Old Students Association
          </p>
          <h1 className="text-[40px] sm:text-[52px] lg:text-[60px] font-bold leading-[1.08] tracking-tight mb-6 animate-fade-in-up" style={{ color: "hsl(var(--primary-foreground))", animationDelay: "0.2s" }}>
            Preserving Legacy.<br />
            Building Community.<br />
            Giving Back.
          </h1>
          <p className="text-[17px] leading-[1.65] mb-10 animate-fade-in-up" style={{ color: "hsl(var(--primary-foreground) / 0.6)", animationDelay: "0.3s" }}>
            BICKOSA is the home of the Bishop Cipriano Kihangire alumni community — bringing together former students through shared identity, lasting connections, collective pride, and a commitment to support one another and the growth of our school.
          </p>
          <div className="flex flex-wrap gap-3 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <Link
              to="/about"
              className="inline-flex items-center h-11 px-6 text-[14px] font-medium rounded-md transition-opacity hover:opacity-90"
              style={{ background: "hsl(var(--primary-foreground))", color: "hsl(var(--navy))" }}
            >
              Explore Our Story
            </Link>
            <Link
              to="/events"
              className="inline-flex items-center h-11 px-6 text-[14px] font-medium rounded-md border transition-colors hover:bg-white/10"
              style={{ borderColor: "hsl(var(--primary-foreground) / 0.2)", color: "hsl(var(--primary-foreground))" }}
            >
              View Events
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
