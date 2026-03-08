import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

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
      <section className="page-hero">
        <div className="container-wide px-6 sm:px-8 lg:px-12">
          <div className="max-w-xl">
            <p className="text-[12px] font-medium uppercase tracking-[0.15em] mb-5" style={{ color: "hsl(var(--gold))" }}>Who We Are</p>
            <h1 className="text-[40px] sm:text-[48px] font-bold tracking-tight leading-[1.08] mb-5" style={{ color: "hsl(var(--primary-foreground))" }}>
              About BICKOSA
            </h1>
            <p className="text-[16px] leading-[1.65]" style={{ color: "hsl(var(--primary-foreground) / 0.55)" }}>
              BICKOSA is the official alumni association of Bishop Cipriano Kihangire Senior Secondary School — a home for old students united by memory, identity, friendship, service, and a shared commitment to the legacy of BCK.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-4">Our Identity</p>
          <h2 className="text-[28px] sm:text-[32px] font-bold tracking-tight text-foreground leading-[1.15] mb-6">A Community Built on Shared Roots</h2>
          <p className="text-[16px] text-muted-foreground leading-[1.7] mb-4">
            BICKOSA, the Bishop Cipriano Kihangire Old Students Association, brings together former students of Bishop Cipriano Kihangire Senior Secondary School across generations and locations. It exists to preserve belonging beyond school years — creating space for old students to reconnect, collaborate, support one another, and contribute meaningfully to the school and society.
          </p>
          <p className="text-[15px] text-muted-foreground leading-[1.7]">
            At its core, BICKOSA is about identity, continuity, and collective strength.
          </p>
        </div>
      </section>

      <section className="section-padding bg-muted">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-px bg-border rounded-lg overflow-hidden">
            <div className="bg-card p-8 sm:p-12">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-4">Our Mission</p>
              <h3 className="text-[22px] font-bold tracking-tight text-foreground mb-4">Mission</h3>
              <p className="text-[15px] text-muted-foreground leading-[1.7]">
                To unite old students of Bishop Cipriano Kihangire Senior Secondary School, preserve shared heritage, strengthen alumni relationships, and mobilize the community toward meaningful support for one another, the school, and society.
              </p>
            </div>
            <div className="p-8 sm:p-12" style={{ background: "hsl(var(--navy))" }}>
              <p className="text-xs font-medium uppercase tracking-[0.15em] mb-4" style={{ color: "hsl(var(--primary-foreground) / 0.4)" }}>Our Vision</p>
              <h3 className="text-[22px] font-bold tracking-tight mb-4" style={{ color: "hsl(var(--primary-foreground))" }}>Vision</h3>
              <p className="text-[15px] leading-[1.7]" style={{ color: "hsl(var(--primary-foreground) / 0.6)" }}>
                To build a vibrant, trusted, and impactful alumni community that honors the legacy of BCK while creating long-term value for generations of students and old students.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-4">What We Stand For</p>
          <h2 className="text-[28px] sm:text-[32px] font-bold tracking-tight text-foreground leading-[1.15] mb-10">Core Values</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-border rounded-lg overflow-hidden">
            {values.map((v) => (
              <div key={v.label} className="bg-card p-6 sm:p-8">
                <p className="text-[14px] font-semibold text-foreground mb-1.5">{v.label}</p>
                <p className="text-[13px] text-muted-foreground leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted">
        <div className="container-wide max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-4">Our Activities</p>
          <h2 className="text-[28px] sm:text-[32px] font-bold tracking-tight text-foreground leading-[1.15] mb-6">What BICKOSA Exists to Do</h2>
          <div className="border-t border-border">
            {whatWeDo.map((item, i) => (
              <div key={item} className="flex items-start gap-5 py-5 border-b border-border">
                <span className="text-[13px] font-medium text-muted-foreground w-5 flex-shrink-0 pt-0.5">{String(i + 1).padStart(2, "0")}</span>
                <p className="text-[15px] text-foreground leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide max-w-2xl">
          <h2 className="text-[28px] sm:text-[32px] font-bold tracking-tight text-foreground leading-[1.15] mb-6">Why BICKOSA Matters</h2>
          <p className="text-[16px] text-muted-foreground leading-[1.7] mb-4">
            Alumni associations help institutions live beyond the classroom. They preserve memory, deepen identity, and turn shared experience into long-term value.
          </p>
          <p className="text-[15px] text-muted-foreground leading-[1.7]">
            It is not just about looking back. It is also about building forward.
          </p>
        </div>
      </section>

      <section className="section-padding bg-muted">
        <div className="container-wide max-w-2xl">
          <h2 className="text-[28px] sm:text-[32px] font-bold tracking-tight text-foreground leading-[1.15] mb-5">Leadership & Governance</h2>
          <p className="text-[15px] text-muted-foreground leading-[1.7] mb-8">
            BICKOSA is stewarded by leaders and members committed to serving the alumni community with responsibility, structure, and purpose.
          </p>
          <Link to="/governance" className="inline-flex items-center gap-2 text-[14px] font-medium text-foreground hover:opacity-70 transition-opacity">
            View Governance <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide text-center max-w-lg">
          <h2 className="text-[28px] sm:text-[32px] font-bold tracking-tight text-foreground leading-[1.15] mb-4">Be Part of the Association</h2>
          <p className="text-[15px] text-muted-foreground leading-[1.7] mb-8">
            Whether you want to reconnect, contribute, or simply stay informed, there is a place for you within BICKOSA.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/contact" className="inline-flex items-center h-10 px-5 text-[14px] font-medium text-primary-foreground bg-primary rounded-md hover:opacity-90 transition-opacity">
              Contact BICKOSA
            </Link>
            <Link to="/events" className="inline-flex items-center h-10 px-5 text-[14px] font-medium text-foreground border border-border rounded-md hover:bg-muted transition-colors">
              Explore Events
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
