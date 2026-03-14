import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="relative overflow-hidden bg-navy">
      {/* Subtle warm gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-warm to-navy opacity-90" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gold/20" />

      <div className="relative max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-28 sm:py-36">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gold/25 bg-gold/10 mb-8">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-gold">Once BCK, Always BCK</span>
          </div>

          <h2 className="text-[34px] sm:text-[44px] font-extrabold tracking-tight leading-[1.08] mb-6 text-primary-foreground">
            The Community<br />
            That <span className="text-gold">Stays</span> With You
          </h2>

          <p className="text-[16px] leading-[1.75] mb-10 max-w-md mx-auto text-primary-foreground/55">
            Whether you're reconnecting with classmates, discovering what BICKOSA is building, or celebrating the school that shaped you — this community is yours.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <Link
              to="/about"
              className="inline-flex items-center h-12 px-7 text-[14px] font-semibold rounded-md bg-gold text-navy hover:bg-gold-light transition-colors"
            >
              Stay Connected
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 h-12 px-7 text-[14px] font-medium rounded-md border border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
            >
              Contact BICKOSA <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
