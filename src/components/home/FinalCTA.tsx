import { Link } from "react-router-dom";

const FinalCTA = () => {
  return (
    <section className="relative overflow-hidden bg-navy">
      <div className="absolute top-0 left-0 right-0 h-px bg-gold/20" />

      <div className="relative max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12 py-24 sm:py-32">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-[32px] sm:text-[40px] font-bold tracking-tight leading-[1.15] mb-5 text-primary-foreground">
            Your chapter is part of the story.
          </h2>

          <p className="text-[16px] leading-[1.7] mb-10 max-w-md mx-auto text-primary-foreground/45">
            Whether you're reconnecting, contributing, or celebrating — this community is yours.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <Link
              to="/about"
              className="inline-flex items-center h-[52px] px-8 text-[15px] font-semibold rounded-lg bg-gold text-navy hover:bg-gold-light transition-colors duration-150"
            >
              Join BICKOSA
            </Link>
            <Link
              to="/projects"
              className="inline-flex items-center h-[52px] px-8 text-[15px] font-medium rounded-lg border border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 transition-colors duration-150"
            >
              Donate
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center h-[52px] px-8 text-[15px] font-medium rounded-lg border border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 transition-colors duration-150"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
