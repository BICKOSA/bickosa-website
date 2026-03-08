import { Link } from "react-router-dom";
import heroImg from "@/assets/hero-school.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-navy">
      <div className="absolute inset-0">
        <img src={heroImg} alt="BCK SSS Campus — alumni gathered on the school grounds" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/85 to-navy/70" />
      </div>

      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gold/60" />

      <div className="relative max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12 py-28 sm:py-36 w-full">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gold/25 bg-gold/10 mb-8 animate-fade-in-up">
            <span className="w-1.5 h-1.5 rounded-full bg-gold" />
            <span className="overline text-gold">BICKOSA Alumni Community</span>
          </div>

          <h1 className="text-[40px] sm:text-[52px] lg:text-[56px] font-bold leading-[1.1] tracking-tight mb-7 text-primary-foreground animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            A proud network — built on legacy, carried by{" "}
            <span className="text-gold">community</span>.
          </h1>

          <p className="text-[17px] sm:text-[18px] leading-[1.65] mb-10 max-w-[540px] text-primary-foreground/55 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            BICKOSA connects alumni of Bishop Cipriano Kihangire S.S.S. across countries through chapters, reunions, mentorship, and projects that support the next generation.
          </p>

          <div className="flex flex-wrap gap-3 mb-6 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <Link
              to="/about"
              className="inline-flex items-center h-[52px] px-8 text-[15px] font-semibold rounded-lg bg-gold text-navy hover:bg-gold-light transition-colors duration-150"
            >
              Join the community
            </Link>
            <Link
              to="/events"
              className="inline-flex items-center h-[52px] px-8 text-[15px] font-medium rounded-lg border border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 transition-colors duration-150"
            >
              See upcoming events
            </Link>
          </div>

          <p className="text-[13px] text-primary-foreground/35 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            Prefer to help right away?{" "}
            <Link to="/projects" className="text-gold/70 hover:text-gold underline underline-offset-2 transition-colors duration-150">
              Support a project in 2 minutes
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
