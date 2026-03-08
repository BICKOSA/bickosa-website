import { Link } from "react-router-dom";

const FinalCTA = () => {
  return (
    <section style={{ background: "hsl(var(--navy))" }}>
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-24 sm:py-32">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-[40px] font-bold tracking-tight leading-[1.1] mb-5" style={{ color: "hsl(var(--primary-foreground))" }}>
            Once BCK, Always BCK
          </h2>
          <p className="text-[16px] leading-[1.7] mb-10 max-w-lg mx-auto" style={{ color: "hsl(var(--primary-foreground) / 0.55)" }}>
            Whether you are reconnecting with classmates, discovering what BICKOSA is building, or simply celebrating the school that shaped you — this community is yours.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              to="/about"
              className="inline-flex items-center h-11 px-6 text-[14px] font-medium rounded-md transition-opacity hover:opacity-90"
              style={{ background: "hsl(var(--primary-foreground))", color: "hsl(var(--navy))" }}
            >
              Stay Connected
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center h-11 px-6 text-[14px] font-medium rounded-md border transition-colors hover:bg-white/10"
              style={{ borderColor: "hsl(var(--primary-foreground) / 0.2)", color: "hsl(var(--primary-foreground))" }}
            >
              Contact BICKOSA
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
