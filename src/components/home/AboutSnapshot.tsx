import { Link } from "react-router-dom";
import { BentoCard } from "@/components/bento";
import heroImg from "@/assets/school-courtyard.png";

const values = [
  { title: "Unity", desc: "Bound by shared experience" },
  { title: "Service", desc: "Giving back to school & community" },
  { title: "Legacy", desc: "Preserving heritage across generations" },
  { title: "Pride", desc: "Proudly BCK, proudly BICKOSA" },
];

const AboutSnapshot = () => {
  return (
    <section className="section">
      <p className="section-eyebrow">Who We Are</p>
      <h2 className="section-heading">A Community Built on Shared Roots</h2>
      <p className="section-sub">
        BICKOSA brings together former students of Bishop Cipriano Kihangire Senior Secondary
        School under one shared home — a space for connection, memory, collaboration, and
        contribution.
      </p>

      <div className="bento">
        <BentoCard variant="white" col={6} minHeight={280}>
          <div className="bc-accent-bar-navy" aria-hidden />
          <p className="bc-text" style={{ flex: "none", marginBottom: 16 }}>
            Through events, storytelling, community engagement, and support for school-focused
            initiatives, BICKOSA helps preserve the spirit of BCK while creating room for future
            impact.
          </p>
          <div className="bc-border-left-gold" aria-hidden />
          <div style={{ paddingLeft: 16, flex: 1 }}>
            <p className="bc-quote">
              &ldquo;What makes us strong is not where we are today, but where we come from — and
              the bond that holds us together.&rdquo;
            </p>
            <p className="bc-quote-attr">BICKOSA Community</p>
          </div>
          <div className="bc-footer">
            <Link to="/about" className="bc-btn bc-btn-navy">
              Learn more about BICKOSA
            </Link>
            <span className="bc-arrow bc-arrow-light">→</span>
          </div>
        </BentoCard>

        <BentoCard variant="surface" col={6} minHeight={280} className="!p-0 overflow-hidden">
          <div className="relative h-full min-h-[280px]">
            <img
              src={heroImg}
              alt="BCK SSS Community"
              className="w-full h-full object-cover"
            />
            <div
              className="absolute -bottom-6 -left-4 sm:-left-6 rounded-bento-xl p-5 shadow-xl"
              style={{ background: "var(--navy-900)" }}
            >
              <p
                className="text-[28px] font-bold tracking-tight"
                style={{ fontFamily: "var(--font-display)", color: "var(--gold-500)" }}
              >
                25+
              </p>
              <p className="text-[12px] mt-0.5" style={{ color: "var(--navy-200)" }}>
                Years of
                <br />
                alumni community
              </p>
            </div>
          </div>
        </BentoCard>

        {values.map((item) => (
          <BentoCard key={item.title} variant="navy-tint" col={3} minHeight={140}>
            <div className="bc-eyebrow">Value</div>
            <h3 className="bc-title" style={{ fontSize: "1rem" }}>
              {item.title}
            </h3>
            <p className="bc-text sm">{item.desc}</p>
          </BentoCard>
        ))}
      </div>
    </section>
  );
};

export default AboutSnapshot;
