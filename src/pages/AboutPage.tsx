import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, Users, TrendingUp, Heart, Shield, Star } from "lucide-react";

const values = ["Unity", "Service", "Excellence", "Integrity", "Stewardship"];

const AboutPage = () => {
  return (
    <Layout>
      <section className="page-hero">
        <div className="container-wide px-6 sm:px-8 lg:px-12">
          <div className="max-w-2xl">
            <p className="overline text-gold mb-5">About BICKOSA</p>
            <h1 className="text-[40px] sm:text-[52px] lg:text-[56px] font-bold tracking-tight leading-[1.1] mb-6 text-primary-foreground">
              About BICKOSA
            </h1>
            <p className="text-[17px] sm:text-[18px] leading-[1.65] text-primary-foreground/50 max-w-xl">
              We are a community of alumni united by shared heritage, lifelong friendships, and a commitment to give back.
            </p>
          </div>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-xl p-8 sm:p-10">
              <div className="w-11 h-11 rounded-xl bg-cobalt/10 flex items-center justify-center mb-5">
                <Star className="w-5 h-5 text-cobalt" strokeWidth={2} />
              </div>
              <h3 className="text-[22px] font-bold tracking-tight text-foreground mb-4">Our Mission</h3>
              <p className="text-[15px] text-muted-foreground leading-[1.7]">
                To unite alumni, strengthen chapters, and support the school through community-led programs and development projects.
              </p>
            </div>
            <div className="bg-navy rounded-xl p-8 sm:p-10">
              <div className="w-11 h-11 rounded-xl bg-gold/15 flex items-center justify-center mb-5">
                <TrendingUp className="w-5 h-5 text-gold" strokeWidth={2} />
              </div>
              <h3 className="text-[22px] font-bold tracking-tight text-primary-foreground mb-4">Our Vision</h3>
              <p className="text-[15px] text-primary-foreground/50 leading-[1.7]">
                A vibrant alumni community that empowers members and strengthens the next generation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding section-alt">
        <div className="container-wide">
          <h2 className="text-[28px] sm:text-[32px] font-bold tracking-tight text-foreground leading-[1.15] mb-8">Values</h2>
          <div className="flex flex-wrap gap-3">
            {values.map((v) => (
              <span key={v} className="inline-flex items-center px-5 py-2.5 rounded-lg bg-card border border-border text-[14px] font-medium text-foreground">
                {v}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="section-padding bg-background">
        <div className="container-wide max-w-readable">
          <h2 className="text-[28px] sm:text-[32px] font-bold tracking-tight text-foreground leading-[1.15] mb-6">How we work</h2>
          <p className="text-[16px] text-muted-foreground leading-[1.7] mb-4">
            Chapters power local activity. The central committee coordinates strategy, governance, communications, and fundraising.
          </p>
          <p className="text-[15px] text-muted-foreground leading-[1.7]">
            BICKOSA brings together former students of Bishop Cipriano Kihangire Senior Secondary School across generations and locations. It exists to preserve belonging beyond school years — creating space for old students to reconnect, collaborate, and contribute meaningfully.
          </p>
        </div>
      </section>

      {/* What we do */}
      <section className="section-padding section-alt">
        <div className="container-wide">
          <h2 className="text-[28px] sm:text-[32px] font-bold tracking-tight text-foreground leading-[1.15] mb-10">What we do</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Users, title: "Reconnect", desc: "Find your people by cohort, chapter, and shared interests.", accent: "text-cobalt", bg: "bg-cobalt/10" },
              { icon: TrendingUp, title: "Grow", desc: "Mentorship and career support powered by alumni.", accent: "text-teal", bg: "bg-teal/10" },
              { icon: Heart, title: "Give back", desc: "Projects that strengthen learning, facilities, and student opportunity.", accent: "text-coral", bg: "bg-coral/10" },
            ].map((c) => (
              <div key={c.title} className="bg-card border border-border rounded-xl p-7">
                <div className={`w-11 h-11 rounded-xl ${c.bg} flex items-center justify-center mb-5`}>
                  <c.icon className={`w-5 h-5 ${c.accent}`} strokeWidth={2} />
                </div>
                <h3 className="text-[18px] font-semibold text-foreground mb-2">{c.title}</h3>
                <p className="text-[14px] text-muted-foreground leading-[1.65]">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12 py-20 sm:py-24 text-center">
          <h2 className="text-[28px] sm:text-[32px] font-bold tracking-tight text-primary-foreground leading-[1.15] mb-4">Be part of the community</h2>
          <p className="text-[15px] text-primary-foreground/45 leading-[1.7] mb-8 max-w-md mx-auto">
            Whether you want to reconnect, contribute, or stay informed — there is a place for you.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/contact" className="inline-flex items-center h-11 px-6 text-[14px] font-semibold bg-gold text-navy rounded-lg hover:bg-gold-light transition-colors duration-150">
              Join the community
            </Link>
            <Link to="/governance" className="inline-flex items-center gap-2 h-11 px-6 text-[14px] font-medium border border-primary-foreground/20 text-primary-foreground rounded-lg hover:bg-primary-foreground/10 transition-colors duration-150">
              See governance <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
