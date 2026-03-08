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
          <div className="max-w-2xl">
            <p className="overline text-gold mb-5">Leadership & Structure</p>
            <h1 className="text-[40px] sm:text-[52px] lg:text-[56px] font-bold tracking-tight leading-[1.1] mb-6 text-primary-foreground">
              Governance
            </h1>
            <p className="text-[17px] sm:text-[18px] leading-[1.65] text-primary-foreground/50">
              Transparency is how we build trust.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide max-w-readable">
          <h2 className="text-[28px] sm:text-[32px] font-bold tracking-tight text-foreground leading-[1.15] mb-6">Serving the community with responsibility</h2>
          <p className="text-[16px] text-muted-foreground leading-[1.7]">
            BICKOSA's leadership exists to serve the alumni community and steward the association with integrity, transparency, and purpose.
          </p>
        </div>
      </section>

      <section className="section-padding section-alt">
        <div className="container-wide max-w-readable">
          <h2 className="text-[28px] sm:text-[32px] font-bold tracking-tight text-foreground leading-[1.15] mb-6">Leadership</h2>
          <p className="text-[15px] text-muted-foreground leading-[1.7] mb-6">
            The association is led through a defined structure that includes executive roles, committee responsibilities, and working teams.
          </p>
          <div className="bg-card border border-border rounded-xl p-6">
            <p className="text-[14px] text-muted-foreground">Leadership details and names will be published once confirmed by the executive committee.</p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide">
          <h2 className="text-[28px] sm:text-[32px] font-bold tracking-tight text-foreground leading-[1.15] mb-10">Principles</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((p) => (
              <div key={p.title} className="bg-card border border-border rounded-xl p-7 hover:shadow-sm hover:border-border/80 transition-all duration-200">
                <div className={`w-11 h-11 rounded-xl ${p.bgAccent} flex items-center justify-center mb-5`}>
                  <p.icon className={`w-5 h-5 ${p.accent}`} strokeWidth={2} />
                </div>
                <p className="text-[16px] font-semibold text-foreground mb-2">{p.title}</p>
                <p className="text-[14px] text-muted-foreground leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documents */}
      <section className="section-padding section-alt">
        <div className="container-wide max-w-readable">
          <h2 className="text-[28px] sm:text-[32px] font-bold tracking-tight text-foreground leading-[1.15] mb-6">Documents & Policies</h2>
          <div className="space-y-3">
            {["Constitution (PDF)", "Privacy Policy", "Cookie Policy", "Refund Policy", "Terms of Use"].map((doc) => (
              <div key={doc} className="flex items-center justify-between bg-card border border-border rounded-xl px-6 py-4">
                <span className="text-[14px] font-medium text-foreground">{doc}</span>
                <span className="text-[12px] text-muted-foreground">Coming soon</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12 py-16 text-center">
          <Link to="/contact" className="inline-flex items-center h-11 px-6 text-[14px] font-semibold bg-gold text-navy rounded-lg hover:bg-gold-light transition-colors duration-150">
            Contact the committee
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default GovernancePage;
