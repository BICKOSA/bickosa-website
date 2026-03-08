import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, Eye, Shield, RefreshCw } from "lucide-react";

const principles = [
  { icon: Heart, title: "Service", description: "Leadership exists to serve the community." },
  { icon: Eye, title: "Transparency", description: "Trust grows through openness and clarity." },
  { icon: Shield, title: "Accountability", description: "Responsibility is central to stewardship." },
  { icon: RefreshCw, title: "Continuity", description: "The association should remain strong across generations." },
];

const GovernancePage = () => {
  return (
    <Layout>
      <section className="gradient-hero py-20 sm:py-28">
        <div className="container-wide px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "hsl(var(--gold))" }}>Leadership & Structure</p>
            <h1 className="text-4xl sm:text-5xl font-heading font-bold mb-6" style={{ color: "hsl(var(--primary-foreground))" }}>Governance</h1>
            <p className="text-lg" style={{ color: "hsl(var(--primary-foreground) / 0.8)" }}>
              Strong alumni communities are built on trust, clarity, service, and responsible leadership. This page provides a view into how BICKOSA is organized and guided.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide max-w-3xl">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-6">Serving the Community with Responsibility</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            BICKOSA's leadership exists to serve the alumni community and steward the association with integrity, transparency, and purpose. Clear governance helps ensure continuity, accountability, and trust in how the association operates and grows.
          </p>
        </div>
      </section>

      <section className="section-padding bg-card">
        <div className="container-wide max-w-3xl">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-6">Leadership Structure</h2>
          <p className="text-muted-foreground leading-relaxed">
            The association is led through a defined structure that may include executive roles, committee responsibilities, and working teams that support engagement, events, communication, finance, and other key functions.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-10 text-center">Governance Principles</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((p) => (
              <div key={p.title} className="bento-card text-center">
                <p.icon className="w-8 h-8 text-secondary mx-auto mb-3" />
                <h3 className="font-heading font-semibold text-foreground mb-2">{p.title}</h3>
                <p className="text-muted-foreground text-sm">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-card">
        <div className="container-wide text-center">
          <Button asChild><Link to="/contact">View Contact Information</Link></Button>
        </div>
      </section>
    </Layout>
  );
};

export default GovernancePage;
