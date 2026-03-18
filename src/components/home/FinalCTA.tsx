import { Link } from "react-router-dom";

const FinalCTA = () => {
  return (
    <section
      className="relative overflow-hidden rounded-bento-2xl"
      style={{ background: "linear-gradient(140deg, var(--navy-900) 0%, var(--navy-700) 100%)" }}
    >
      <div className="bc-dots-dark" aria-hidden />
      <div
        className="absolute top-0 left-0 right-0 h-[3px]"
        style={{
          background: "linear-gradient(90deg, var(--gold-500), var(--gold-300))",
        }}
      />

      <div className="relative max-w-[1280px] mx-auto px-6 sm:px-8 py-28 sm:py-36">
        <div className="max-w-2xl mx-auto text-center">
          <span className="bc-tag bc-tag-on-dark" style={{ marginBottom: 24 }}>
            Once BCK, Always BCK
          </span>

          <h2
            className="text-[34px] sm:text-[44px] font-bold tracking-tight leading-[1.08] mb-6"
            style={{ fontFamily: "var(--font-display)", color: "var(--white)" }}
          >
            The Community
            <br />
            That <span style={{ color: "var(--gold-400)" }}>Stays</span> With You
          </h2>

          <p
            className="text-[16px] leading-[1.75] mb-10 max-w-md mx-auto"
            style={{ color: "var(--navy-200)" }}
          >
            Whether you&apos;re reconnecting with classmates, discovering what BICKOSA is building,
            or celebrating the school that shaped you — this community is yours.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="https://portal.bickosa.com/join"
              target="_blank"
              rel="noopener noreferrer"
              className="bc-btn bc-btn-gold"
            >
              Join BICKOSA
            </a>
            <Link to="/contact" className="bc-btn bc-btn-ghost-dark">
              Contact BICKOSA →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
