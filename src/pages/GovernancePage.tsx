import Layout from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { Link } from "react-router-dom";
import { Shield, Eye, Users, ArrowRight } from "lucide-react";
import heroCampus2 from "@/assets/hero-campus-2.png";

const principles = [
  { title: "Service", description: "Leadership exists to serve the community.", icon: Users, accent: "text-cobalt", bgAccent: "bg-cobalt/10" },
  { title: "Transparency", description: "Trust grows through openness and clarity.", icon: Eye, accent: "text-teal", bgAccent: "bg-teal/10" },
  { title: "Accountability", description: "Responsibility is central to stewardship.", icon: Shield, accent: "text-coral", bgAccent: "bg-coral/10" },
  { title: "Continuity", description: "The association should remain strong across generations.", icon: ArrowRight, accent: "text-gold", bgAccent: "bg-gold/10" },
];

const GovernancePage = () => {
  return (
    <Layout>
      <PageHero
        eyebrow="Leadership & Structure"
        title="Governance"
        description="Strong alumni communities are built on trust, clarity, service, and responsible leadership."
        image={heroCampus2}
      />

      <section className="section max-w-2xl">
        <h2 className="text-[30px] sm:text-[34px] font-bold tracking-tight text-foreground leading-[1.15] mb-6">Serving the Community with Responsibility</h2>
          <p className="text-[16px] text-muted-foreground leading-[1.75]">
            BICKOSA's leadership exists to serve the alumni community and steward the association with integrity, transparency, and purpose. Clear governance helps ensure continuity, accountability, and trust.
        </p>
      </section>

      <section className="section max-w-2xl">
        <h2 className="text-[30px] sm:text-[34px] font-bold tracking-tight text-foreground leading-[1.15] mb-6">Leadership Structure</h2>
        <p className="text-[15px] text-muted-foreground leading-[1.75]">
          The association is led through a defined structure that includes executive roles, committee responsibilities, and working teams supporting engagement, events, communication, finance, and other key functions.
        </p>
      </section>

      <section className="section">
        <p className="section-eyebrow">Principles</p>
        <h2 className="section-heading">Governance Principles</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {principles.map((p) => (
            <div key={p.title} className="bg-card border border-border rounded-bento-2xl p-7 hover:shadow-sm transition-shadow">
              <div className={`w-10 h-10 rounded-bento-lg ${p.bgAccent} flex items-center justify-center mb-5`}>
                  <p.icon className={`w-5 h-5 ${p.accent}`} />
                </div>
                <p className="text-[15px] font-semibold text-foreground mb-2">{p.title}</p>
                <p className="text-[13px] text-muted-foreground leading-relaxed">{p.description}</p>
              </div>
            ))}
        </div>
      </section>

      <section className="rounded-bento-2xl overflow-hidden mt-10" style={{ background: "var(--navy-900)" }}>
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-16 text-center">
          <Link to="/contact" className="inline-flex items-center h-11 px-6 text-[14px] font-semibold bg-gold text-navy rounded-bento-xl hover:bg-gold-light transition-colors">
            View Contact Information
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default GovernancePage;
