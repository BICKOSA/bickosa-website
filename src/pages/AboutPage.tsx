import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, Award, Users, BookOpen, Shield, Star, Handshake, GraduationCap, ArrowRight } from "lucide-react";

const values = [
  { icon: Users, label: "Unity", description: "We are stronger when we stay connected." },
  { icon: Award, label: "Excellence", description: "We carry forward a culture of growth, effort, and ambition." },
  { icon: Shield, label: "Integrity", description: "We value honesty, responsibility, and moral character." },
  { icon: Heart, label: "Service", description: "We believe in giving back with purpose." },
  { icon: BookOpen, label: "Legacy", description: "We preserve the story and spirit of BCK." },
  { icon: Handshake, label: "Community", description: "We create room for belonging across generations." },
  { icon: Star, label: "Accountability", description: "We aim to act with transparency and trust." },
  { icon: GraduationCap, label: "Pride in Belonging", description: "We celebrate the identity that connects us." },
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
      {/* Hero */}
      <section className="gradient-hero py-20 sm:py-28">
        <div className="container-wide px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "hsl(var(--gold))" }}>Who We Are</p>
            <h1 className="text-4xl sm:text-5xl font-heading font-bold mb-6" style={{ color: "hsl(var(--primary-foreground))" }}>
              About BICKOSA
            </h1>
            <p className="text-lg" style={{ color: "hsl(var(--primary-foreground) / 0.8)" }}>
              BICKOSA is the official alumni association of Bishop Cipriano Kihangire Senior Secondary School — a home for old students united by memory, identity, friendship, service, and a shared commitment to the legacy of BCK.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="section-padding bg-background">
        <div className="container-wide max-w-3xl">
          <span className="text-secondary text-sm font-semibold tracking-widest uppercase">Our Identity</span>
          <h2 className="text-3xl font-heading font-bold text-foreground mt-3 mb-6">A Community Built on Shared Roots</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            BICKOSA, the Bishop Cipriano Kihangire Old Students Association, brings together former students of Bishop Cipriano Kihangire Senior Secondary School across generations and locations. It exists to preserve belonging beyond school years — creating space for old students to reconnect, collaborate, support one another, and contribute meaningfully to the school and society.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            At its core, BICKOSA is about identity, continuity, and collective strength.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-card">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bento-card">
              <span className="text-secondary text-sm font-semibold tracking-widest uppercase">Our Mission</span>
              <h3 className="text-2xl font-heading font-bold text-foreground mt-3 mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To unite old students of Bishop Cipriano Kihangire Senior Secondary School, preserve shared heritage, strengthen alumni relationships, and mobilize the community toward meaningful support for one another, the school, and society.
              </p>
            </div>
            <div className="bento-card bg-primary text-primary-foreground">
              <span className="text-sm font-semibold tracking-widest uppercase opacity-70">Our Vision</span>
              <h3 className="text-2xl font-heading font-bold mt-3 mb-4">Our Vision</h3>
              <p className="opacity-80 leading-relaxed">
                To build a vibrant, trusted, and impactful alumni community that honors the legacy of BCK while creating long-term value for generations of students and old students.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="text-center mb-12">
            <span className="text-secondary text-sm font-semibold tracking-widest uppercase">What We Stand For</span>
            <h2 className="text-3xl font-heading font-bold text-foreground mt-3">Core Values</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {values.map((v) => (
              <div key={v.label} className="bento-card text-center p-6">
                <v.icon className="w-8 h-8 text-secondary mx-auto mb-3" />
                <span className="font-heading font-semibold text-foreground block mb-1">{v.label}</span>
                <p className="text-xs text-muted-foreground">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="section-padding bg-card">
        <div className="container-wide max-w-3xl">
          <div className="text-center mb-10">
            <span className="text-secondary text-sm font-semibold tracking-widest uppercase">Our Activities</span>
            <h2 className="text-3xl font-heading font-bold text-foreground mt-3">What BICKOSA Exists to Do</h2>
            <p className="text-muted-foreground mt-3">BICKOSA serves the alumni community through a number of interconnected roles:</p>
          </div>
          <div className="space-y-3">
            {whatWeDo.map((item) => (
              <div key={item} className="flex items-start gap-3 p-4 rounded-xl bg-background">
                <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0" />
                <p className="text-foreground text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="section-padding bg-background">
        <div className="container-wide max-w-3xl">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-6">Why BICKOSA Matters</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            Alumni associations help institutions live beyond the classroom. They preserve memory, deepen identity, and turn shared experience into long-term value. For BCK, BICKOSA represents an opportunity to organize the pride, relationships, and goodwill of old students into something lasting and meaningful.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            It is not just about looking back. It is also about building forward.
          </p>
        </div>
      </section>

      {/* Leadership Preview */}
      <section className="section-padding bg-card">
        <div className="container-wide max-w-3xl">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-6">Leadership & Governance</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            BICKOSA is stewarded by leaders and members committed to serving the alumni community with responsibility, structure, and purpose. As the association continues to grow, clear governance remains essential to building trust and sustaining impact.
          </p>
          <Button asChild variant="outline">
            <Link to="/governance">View Governance <ArrowRight className="ml-2 w-4 h-4" /></Link>
          </Button>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-background">
        <div className="container-wide text-center max-w-2xl">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-4">Be Part of the Association</h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Whether you want to reconnect, contribute, partner, or simply stay informed, there is a place for you within BICKOSA.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild><Link to="/contact">Contact BICKOSA</Link></Button>
            <Button asChild variant="outline"><Link to="/events">Explore Events</Link></Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
