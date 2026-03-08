import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, Award, Users, BookOpen, Shield, Star, Handshake, GraduationCap } from "lucide-react";

const values = [
  { icon: Users, label: "Unity" },
  { icon: Award, label: "Excellence" },
  { icon: Shield, label: "Integrity" },
  { icon: Heart, label: "Service" },
  { icon: BookOpen, label: "Legacy" },
  { icon: Handshake, label: "Community" },
  { icon: Star, label: "Accountability" },
  { icon: GraduationCap, label: "Pride in Belonging" },
];

const whatWeDo = [
  "Alumni engagement and relationship-building",
  "Events, reunions, and community gatherings",
  "Community support and outreach programs",
  "School development and infrastructure support",
  "Storytelling, remembrance, and institutional memory",
  "Networks, partnerships, and mentorship connections",
];

const AboutPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="gradient-hero py-20 sm:py-28">
        <div className="container-wide px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-heading font-bold mb-6" style={{ color: "hsl(var(--primary-foreground))" }}>
              About BICKOSA
            </h1>
            <p className="text-lg" style={{ color: "hsl(var(--primary-foreground) / 0.8)" }}>
              The official alumni association of Bishop Cipriano Kihangire Senior Secondary School — connecting alumni, preserving heritage, and building a brighter future together.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-3xl">
            <span className="text-secondary text-sm font-semibold tracking-widest uppercase">Who We Are</span>
            <h2 className="text-3xl font-heading font-bold text-foreground mt-3 mb-6">Our Identity</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              BICKOSA, the Bishop Cipriano Kihangire Old Students Association, is a community of former students united by a shared educational heritage and a desire to remain connected to one another and to the school.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              The association serves as a platform for relationship-building, service, remembrance, collective action, and institutional support. Whether in Uganda or the diaspora, BICKOSA alumni share a bond that transcends time and distance.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-card">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bento-card">
              <span className="text-secondary text-sm font-semibold tracking-widest uppercase">Our Mission</span>
              <h3 className="text-2xl font-heading font-bold text-foreground mt-3 mb-4">Purpose-Driven Community</h3>
              <p className="text-muted-foreground leading-relaxed">
                To unite old students of Bishop Cipriano Kihangire Senior Secondary School, preserve shared heritage, strengthen alumni relationships, and mobilize the community toward meaningful support for one another, the school, and society.
              </p>
            </div>
            <div className="bento-card bg-primary text-primary-foreground">
              <span className="text-sm font-semibold tracking-widest uppercase opacity-70">Our Vision</span>
              <h3 className="text-2xl font-heading font-bold mt-3 mb-4">A Lasting Legacy</h3>
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
                <span className="font-heading font-semibold text-foreground">{v.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="section-padding bg-card">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-secondary text-sm font-semibold tracking-widest uppercase">Our Activities</span>
              <h2 className="text-3xl font-heading font-bold text-foreground mt-3">What We Do</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {whatWeDo.map((item) => (
                <div key={item} className="flex items-start gap-3 p-4 rounded-xl bg-background">
                  <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0" />
                  <p className="text-foreground text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-background">
        <div className="container-wide text-center">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-4">Get Involved</h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Whether you want to reconnect with classmates, support school initiatives, or share your story, there's a place for you in BICKOSA.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild><Link to="/contact">Reach Out</Link></Button>
            <Button asChild variant="outline"><Link to="/projects">Support an Initiative</Link></Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
