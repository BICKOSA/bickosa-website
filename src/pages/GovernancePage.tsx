import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { Shield, Eye, Users, ArrowRight } from "lucide-react";

const principles = [
  { title: "Service", description: "Leadership exists to serve the community.", icon: Users, accent: "text-cobalt", bgAccent: "bg-cobalt/10" },
  { title: "Transparency", description: "Trust grows through openness and clarity.", icon: Eye, accent: "text-teal", bgAccent: "bg-teal/10" },
  { title: "Accountability", description: "Responsibility is central to stewardship.", icon: Shield, accent: "text-coral", bgAccent: "bg-coral/10" },
  { title: "Continuity", description: "The association should remain strong across generations.", icon: ArrowRight, accent: "text-gold", bgAccent: "bg-gold/10" },
];

const GovernancePage = () => {
  return (
    <Layout>
      <section className="page-hero">
        <div className="container-wide px-6 sm:px-8 lg:px-12">
          <div className="max-w-xl">
            <div className="gold-accent-bar" />
            <p className="text-[12px] font-semibold uppercase tracking-[0.15em] mb-5 text-gold">Leadership & Structure</p>
            <h1 className="text-[42px] sm:text-[52px] font-extrabold tracking-tight leading-[1.06] mb-5 text-primary-foreground">Governance</h1>
            <p className="text-[16px] leading-[1.7] text-primary-foreground/55">
              Strong alumni communities are built on trust, clarity, service, and responsible leadership.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide max-w-2xl">
          <h2 className="text-[30px] sm:text-[34px] font-bold tracking-tight text-foreground leading-[1.15] mb-6">Serving the Community with Responsibility</h2>
          <p className="text-[16px] text-muted-foreground leading-[1.75]">
            BICKOSA's leadership exists to serve the alumni community and steward the association with integrity, transparency, and purpose. Clear governance helps ensure continuity, accountability, and trust.
          </p>
        </div>
      </section>

      <section className="section-padding bg-muted">
        <div className="container-wide max-w-2xl">
          <h2 className="text-[30px] sm:text-[34px] font-bold tracking-tight text-foreground leading-[1.15] mb-6">Leadership Structure</h2>
          <p className="text-[15px] text-muted-foreground leading-[1.75]">
            The association is led through a defined structure that includes executive roles, committee responsibilities, and working teams supporting engagement, events, communication, finance, and other key functions.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="gold-accent-bar" />
          <h2 className="text-[30px] sm:text-[34px] font-bold tracking-tight text-foreground leading-[1.15] mb-10">Governance Principles</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {principles.map((p) => (
              <div key={p.title} className="bg-card border border-border rounded-xl p-7 hover:shadow-sm transition-shadow">
                <div className={`w-10 h-10 rounded-lg ${p.bgAccent} flex items-center justify-center mb-5`}>
                  <p.icon className={`w-5 h-5 ${p.accent}`} />
                </div>
                <p className="text-[15px] font-semibold text-foreground mb-2">{p.title}</p>
                <p className="text-[13px] text-muted-foreground leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-16 text-center">
          <Link to="/contact" className="inline-flex items-center h-11 px-6 text-[14px] font-semibold bg-gold text-navy rounded-md hover:bg-gold-light transition-colors">
            View Contact Information
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default GovernancePage;
