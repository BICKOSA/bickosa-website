import Layout from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import heroImg from "@/assets/school-courtyard.png";
import { BentoCard } from "@/components/bento";

const values = [
  { label: "Unity", description: "We are stronger when we stay connected." },
  { label: "Excellence", description: "We carry forward a culture of growth, effort, and ambition." },
  { label: "Integrity", description: "We value honesty, responsibility, and moral character." },
  { label: "Service", description: "We believe in giving back with purpose." },
  { label: "Legacy", description: "We preserve the story and spirit of BCK." },
  { label: "Community", description: "We create room for belonging across generations." },
  { label: "Accountability", description: "We aim to act with transparency and trust." },
  { label: "Pride in Belonging", description: "We celebrate the identity that connects us." },
];

const whatWeDo = [
  "Keeping alumni connected to one another and to the school",
  "Organizing events, reunions, sports, and community activities",
  "Preserving the stories and history of the BCK community",
  "Supporting initiatives that strengthen the school and its students",
  "Creating space for alumni to contribute, mentor, collaborate, and give back",
];

const AboutPage = () => {
  return (
    <Layout>
      <PageHero
        eyebrow="Who We Are"
        title="About BICKOSA"
        description="The official alumni association of Bishop Cipriano Kihangire Senior Secondary School — a home for old students united by memory, identity, friendship, service, and shared commitment."
        image={heroImg}
      />

      <section className="section">
        <p className="section-eyebrow">Community</p>
        <h2 className="section-heading">A Community Built on Shared Roots</h2>
        <p className="section-sub">
          BICKOSA brings together former students of Bishop Cipriano Kihangire Senior Secondary
          School across generations and locations.
        </p>
        <div className="bento">
          <BentoCard variant="white" col={8} minHeight={220}>
            <p className="bc-text">
              It exists to preserve belonging beyond school years — creating space for old students
              to reconnect, collaborate, support one another, and contribute meaningfully. At its
              core, BICKOSA is about identity, continuity, and collective strength.
            </p>
          </BentoCard>
          <BentoCard variant="navy-tint" col={4} minHeight={220}>
            <div className="bc-border-left-gold" aria-hidden />
            <div style={{ paddingLeft: 16 }}>
              <p className="bc-quote">
                &ldquo;What makes us strong is not where we are today, but where we come from — and
                the bond that holds us together.&rdquo;
              </p>
              <p className="bc-quote-attr">BICKOSA Community</p>
            </div>
          </BentoCard>
        </div>
      </section>

      <section className="section">
        <p className="section-eyebrow">Mission & Vision</p>
        <h2 className="section-heading">What We Stand For</h2>
        <div className="bento">
          <BentoCard variant="white" col={6} minHeight={240}>
            <div className="bc-accent-bar-navy" aria-hidden />
            <div
              className="w-10 h-10 rounded-bento-lg flex items-center justify-center mb-5"
              style={{ background: "var(--navy-50)", color: "var(--navy-700)", fontFamily: "var(--font-display)", fontWeight: 700 }}
            >
              M
            </div>
            <h3 className="bc-title">Our Mission</h3>
            <p className="bc-text">
              To unite old students of Bishop Cipriano Kihangire Senior Secondary School, preserve
              shared heritage, strengthen alumni relationships, and mobilize the community toward
              meaningful support for one another, the school, and society.
            </p>
          </BentoCard>
          <BentoCard variant="grad-navy" col={6} minHeight={240}>
            <div className="bc-dots-dark" aria-hidden />
            <div
              className="w-10 h-10 rounded-bento-lg flex items-center justify-center mb-5"
              style={{ background: "rgba(255,255,255,0.1)", color: "var(--gold-400)", fontFamily: "var(--font-display)", fontWeight: 700 }}
            >
              V
            </div>
            <h3 className="bc-title on-dark">Our Vision</h3>
            <p className="bc-text on-dark">
              To build a vibrant, trusted, and impactful alumni community that honors the legacy of
              BCK while creating long-term value for generations of students and old students.
            </p>
          </BentoCard>
        </div>
      </section>

      <section className="section">
        <p className="section-eyebrow">Values</p>
        <h2 className="section-heading">Core Values</h2>
        <div className="bento">
          {values.map((v) => (
            <BentoCard key={v.label} variant="surface" col={3} minHeight={160}>
              <div className="bc-eyebrow">Value</div>
              <h3 className="bc-title" style={{ fontSize: "1rem" }}>
                {v.label}
              </h3>
              <p className="bc-text sm">{v.description}</p>
            </BentoCard>
          ))}
        </div>
      </section>

      <section className="section">
        <p className="section-eyebrow">Purpose</p>
        <h2 className="section-heading">What BICKOSA Exists to Do</h2>
        <div className="bento">
          <BentoCard variant="white" col={12} minHeight={0} className="!min-h-0">
            <div className="space-y-0">
              {whatWeDo.map((item, i) => (
                <div
                  key={item}
                  className="flex items-start gap-4 py-5 border-b"
                  style={{ borderColor: "var(--border-soft)" }}
                >
                  <span
                    className="text-[13px] font-bold w-5 flex-shrink-0 pt-0.5"
                    style={{ color: "var(--gold-600)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-[15px] leading-relaxed" style={{ color: "var(--text-primary)" }}>
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </BentoCard>
        </div>
      </section>

      <section className="section">
        <p className="section-eyebrow">Impact</p>
        <h2 className="section-heading">Why BICKOSA Matters</h2>
        <p className="section-sub">
          Alumni associations help institutions live beyond the classroom. They preserve memory,
          deepen identity, and turn shared experience into long-term value. It is not just about
          looking back — it is also about building forward.
        </p>
      </section>

      <section className="section">
        <p className="section-eyebrow">Governance</p>
        <h2 className="section-heading">Leadership & Governance</h2>
        <p className="section-sub mb-8">
          BICKOSA is stewarded by leaders committed to serving the alumni community with
          responsibility, structure, and purpose.
        </p>
        <Link to="/governance" className="bc-btn bc-btn-navy">
          View Governance <ArrowRight className="w-4 h-4 inline ml-1" />
        </Link>
      </section>

      <section
        className="section"
        style={{
          background: "var(--navy-900)",
          marginLeft: "calc(-50vw + 50%)",
          marginRight: "calc(-50vw + 50%)",
          paddingLeft: "max(32px, calc(50vw - 640px))",
          paddingRight: "max(32px, calc(50vw - 640px))",
          paddingTop: 80,
          paddingBottom: 80,
        }}
      >
        <div className="max-w-[1280px] mx-auto text-center">
          <h2
            className="text-[30px] sm:text-[34px] font-bold tracking-tight leading-[1.15] mb-4"
            style={{ fontFamily: "var(--font-display)", color: "var(--white)" }}
          >
            Be Part of the Association
          </h2>
          <p
            className="text-[15px] leading-[1.75] mb-8 max-w-md mx-auto"
            style={{ color: "var(--navy-200)" }}
          >
            Whether you want to reconnect, contribute, or simply stay informed, there is a place for
            you within BICKOSA.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/contact" className="bc-btn bc-btn-gold">
              Contact BICKOSA
            </Link>
            <Link to="/events" className="bc-btn bc-btn-ghost-dark">
              Explore Events
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
