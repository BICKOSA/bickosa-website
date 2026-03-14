import { Link } from "react-router-dom";
import { BentoCard } from "@/components/bento";
import heroImg from "@/assets/school-green-roofs.png";

const values = [
  { title: "Catholic Foundation", description: "A school grounded in faith, character formation, and service to community." },
  { title: "Academic Excellence", description: "A longstanding commitment to learning, discipline, and student growth." },
  { title: "Moral Uprightness", description: "A culture that values integrity, responsibility, and principled leadership." },
  { title: "Unity in Diversity", description: "Bringing together students from different backgrounds under one shared identity." },
];

const LegacySection = () => {
  return (
    <section className="section">
      <p className="section-eyebrow">Our Foundation</p>
      <h2 className="section-heading">A Legacy Worth Preserving</h2>
      <p className="section-sub">
        The story of BICKOSA begins with BCK SSS — a school shaped by faith, discipline,
        excellence, and the values that live on through its students and alumni.
      </p>

      <div className="bento">
        <BentoCard variant="grad-navy" col={5} row2 minHeight={320} className="min-h-[320px]">
          <div className="bc-dots-dark" aria-hidden />
          <div
            className="bc-glow glow-gold-soft"
            style={{ width: 200, height: 200, bottom: -60, right: -40 }}
            aria-hidden
          />
          <span className="bc-tag bc-tag-on-dark">BCK SSS · Luzira</span>
          <div style={{ marginTop: 20, flex: 1 }}>
            <p className="bc-quote on-dark" style={{ marginBottom: 12 }}>
              &ldquo;Per Aspera Ad Astra&rdquo;
            </p>
            <p className="bc-text on-dark text-sm">
              Through Hardship to the Stars — our school motto since 1999
            </p>
          </div>
          <div className="bc-footer">
            <Link to="/school" className="bc-btn bc-btn-ghost-dark">
              Discover the school →
            </Link>
          </div>
        </BentoCard>

        <BentoCard variant="white" col={7} minHeight={320}>
          <div className="bc-accent-bar" aria-hidden />
          <div className="bc-eyebrow">Our Values</div>
          <div className="grid gap-4" style={{ gridTemplateColumns: "repeat(2, 1fr)" }}>
            {values.map((item, i) => (
              <div key={item.title} className="flex items-start gap-3">
                <span
                  className="text-[13px] font-bold flex-shrink-0 pt-0.5 w-5"
                  style={{ color: "var(--gold-600)" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="bc-title" style={{ fontSize: "0.9375rem", marginBottom: 4 }}>
                    {item.title}
                  </h3>
                  <p className="bc-text sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bc-footer">
            <Link to="/school" className="bc-btn bc-btn-outline-navy">
              Discover the school&apos;s story
            </Link>
            <span className="bc-arrow bc-arrow-light">→</span>
          </div>
        </BentoCard>

        <BentoCard variant="surface" col={12} minHeight={0} className="!min-h-0 !p-0 overflow-hidden">
          <img src={heroImg} alt="BCK SSS Heritage" className="w-full aspect-[2.5/1] object-cover" />
        </BentoCard>
      </div>
    </section>
  );
};

export default LegacySection;
