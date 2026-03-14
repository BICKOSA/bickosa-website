import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, Quote } from "lucide-react";
import heroImg from "@/assets/school-courtyard.png";

const values = [
  { label: "Unity", description: "We are stronger when we stay connected.", accent: "bg-cobalt" },
  { label: "Excellence", description: "We carry forward a culture of growth, effort, and ambition.", accent: "bg-teal" },
  { label: "Integrity", description: "We value honesty, responsibility, and moral character.", accent: "bg-gold" },
  { label: "Service", description: "We believe in giving back with purpose.", accent: "bg-coral" },
  { label: "Legacy", description: "We preserve the story and spirit of BCK.", accent: "bg-cobalt" },
  { label: "Community", description: "We create room for belonging across generations.", accent: "bg-teal" },
  { label: "Accountability", description: "We aim to act with transparency and trust.", accent: "bg-gold" },
  { label: "Pride in Belonging", description: "We celebrate the identity that connects us.", accent: "bg-coral" },
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
      <section className="page-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={heroImg} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative container-wide px-6 sm:px-8 lg:px-12">
          <div className="max-w-xl">
            <div className="gold-accent-bar" />
            <p className="text-[12px] font-semibold uppercase tracking-[0.15em] mb-5 text-gold">Who We Are</p>
            <h1 className="text-[42px] sm:text-[52px] font-extrabold tracking-tight leading-[1.06] mb-5 text-primary-foreground">
              About BICKOSA
            </h1>
            <p className="text-[16px] leading-[1.7] text-primary-foreground/55">
              The official alumni association of Bishop Cipriano Kihangire Senior Secondary School — a home for old students united by memory, identity, friendship, service, and shared commitment.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-[1fr_380px] gap-16 items-start">
            <div>
              <h2 className="text-[30px] sm:text-[34px] font-bold tracking-tight text-foreground leading-[1.15] mb-6">A Community Built on Shared Roots</h2>
              <p className="text-[16px] text-muted-foreground leading-[1.75] mb-4">
                BICKOSA brings together former students of Bishop Cipriano Kihangire Senior Secondary School across generations and locations. It exists to preserve belonging beyond school years — creating space for old students to reconnect, collaborate, support one another, and contribute meaningfully.
              </p>
              <p className="text-[15px] text-muted-foreground leading-[1.75]">
                At its core, BICKOSA is about identity, continuity, and collective strength.
              </p>
            </div>
            <div className="bg-muted rounded-xl p-7 border-l-3 border-gold">
              <Quote className="w-5 h-5 text-gold/50 mb-3" />
              <p className="serif-heading text-[17px] text-foreground/75 leading-[1.6] mb-3">
                "What makes us strong is not where we are today, but where we come from — and the bond that holds us together."
              </p>
              <p className="text-[12px] text-muted-foreground">BICKOSA Community</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-xl p-8 sm:p-10">
              <div className="w-10 h-10 rounded-lg bg-cobalt/10 flex items-center justify-center mb-5">
                <span className="text-cobalt font-bold text-[16px]">M</span>
              </div>
              <h3 className="text-[22px] font-bold tracking-tight text-foreground mb-4">Our Mission</h3>
              <p className="text-[15px] text-muted-foreground leading-[1.75]">
                To unite old students of Bishop Cipriano Kihangire Senior Secondary School, preserve shared heritage, strengthen alumni relationships, and mobilize the community toward meaningful support for one another, the school, and society.
              </p>
            </div>
            <div className="bg-navy rounded-xl p-8 sm:p-10">
              <div className="w-10 h-10 rounded-lg bg-gold/15 flex items-center justify-center mb-5">
                <span className="text-gold font-bold text-[16px]">V</span>
              </div>
              <h3 className="text-[22px] font-bold tracking-tight text-primary-foreground mb-4">Our Vision</h3>
              <p className="text-[15px] text-primary-foreground/55 leading-[1.75]">
                To build a vibrant, trusted, and impactful alumni community that honors the legacy of BCK while creating long-term value for generations of students and old students.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="gold-accent-bar" />
          <h2 className="text-[30px] sm:text-[34px] font-bold tracking-tight text-foreground leading-[1.15] mb-10">Core Values</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
            {values.map((v) => (
              <div key={v.label} className="group bg-card border border-border rounded-xl p-6 hover:shadow-sm transition-shadow">
                <div className={`w-2 h-2 rounded-full ${v.accent} mb-4`} />
                <p className="text-[14px] font-semibold text-foreground mb-1.5">{v.label}</p>
                <p className="text-[13px] text-muted-foreground leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted">
        <div className="container-wide max-w-2xl">
          <div className="gold-accent-bar" />
          <h2 className="text-[30px] sm:text-[34px] font-bold tracking-tight text-foreground leading-[1.15] mb-6">What BICKOSA Exists to Do</h2>
          <div className="space-y-0">
            {whatWeDo.map((item, i) => (
              <div key={item} className="flex items-start gap-4 py-5 border-b border-border">
                <span className="text-[13px] font-bold text-gold/60 w-5 flex-shrink-0 pt-0.5">{String(i + 1).padStart(2, "0")}</span>
                <p className="text-[15px] text-foreground leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide max-w-2xl">
          <h2 className="text-[30px] sm:text-[34px] font-bold tracking-tight text-foreground leading-[1.15] mb-6">Why BICKOSA Matters</h2>
          <p className="text-[16px] text-muted-foreground leading-[1.75] mb-4">
            Alumni associations help institutions live beyond the classroom. They preserve memory, deepen identity, and turn shared experience into long-term value.
          </p>
          <p className="text-[15px] text-muted-foreground leading-[1.75]">
            It is not just about looking back. It is also about building forward.
          </p>
        </div>
      </section>

      <section className="section-padding bg-muted">
        <div className="container-wide max-w-2xl">
          <h2 className="text-[30px] sm:text-[34px] font-bold tracking-tight text-foreground leading-[1.15] mb-5">Leadership & Governance</h2>
          <p className="text-[15px] text-muted-foreground leading-[1.75] mb-8">
            BICKOSA is stewarded by leaders committed to serving the alumni community with responsibility, structure, and purpose.
          </p>
          <Link to="/governance" className="inline-flex items-center gap-2 text-[14px] font-semibold text-cobalt hover:text-cobalt/80 transition-colors">
            View Governance <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <section className="bg-navy">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-20 sm:py-24 text-center">
          <h2 className="text-[30px] sm:text-[34px] font-bold tracking-tight text-primary-foreground leading-[1.15] mb-4">Be Part of the Association</h2>
          <p className="text-[15px] text-primary-foreground/50 leading-[1.75] mb-8 max-w-md mx-auto">
            Whether you want to reconnect, contribute, or simply stay informed, there is a place for you within BICKOSA.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/contact" className="inline-flex items-center h-11 px-6 text-[14px] font-semibold bg-gold text-navy rounded-md hover:bg-gold-light transition-colors">
              Contact BICKOSA
            </Link>
            <Link to="/events" className="inline-flex items-center h-11 px-6 text-[14px] font-medium border border-primary-foreground/20 text-primary-foreground rounded-md hover:bg-primary-foreground/10 transition-colors">
              Explore Events
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
