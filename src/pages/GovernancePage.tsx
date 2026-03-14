import Layout from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { BentoCard } from "@/components/bento";
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
        <p className="section-eyebrow">Mission</p>
        <h2 className="section-heading">Serving the Community with Responsibility</h2>
        <p className="section-sub">
          BICKOSA's leadership exists to serve the alumni community and steward the association with integrity, transparency, and purpose. Clear governance helps ensure continuity, accountability, and trust.
        </p>
      </section>

      <section className="section max-w-2xl">
        <p className="section-eyebrow">Structure</p>
        <h2 className="section-heading">Leadership Structure</h2>
        <p className="section-sub">
          The association is led through a defined structure that includes executive roles, committee responsibilities, and working teams supporting engagement, events, communication, finance, and other key functions.
        </p>
      </section>

      <section className="section">
        <p className="section-eyebrow">Principles</p>
        <h2 className="section-heading">Governance Principles</h2>
        <div className="bento">
          {principles.map((p) => (
            <BentoCard key={p.title} variant="white" col={3} minHeight={180}>
              <div className={`w-10 h-10 rounded-bento-lg ${p.bgAccent} flex items-center justify-center mb-5`}>
                <p.icon className={`w-5 h-5 ${p.accent}`} />
              </div>
              <p className="bc-title mb-2" style={{ fontSize: "0.9375rem" }}>{p.title}</p>
              <p className="bc-text sm">{p.description}</p>
            </BentoCard>
          ))}
        </div>
      </section>

      <section className="rounded-bento-2xl overflow-hidden mt-10" style={{ background: "var(--navy-900)" }}>
        <div className="max-w-[1280px] mx-auto px-6 sm:px-8 py-16 text-center">
          <Link to="/contact" className="bc-btn bc-btn-gold">View Contact Information</Link>
        </div>
      </section>
    </Layout>
  );
};

export default GovernancePage;
