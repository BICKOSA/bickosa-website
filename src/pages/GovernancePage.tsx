import Layout from "@/components/Layout";
import { Link } from "react-router-dom";

const principles = [
  { title: "Service", description: "Leadership exists to serve the community." },
  { title: "Transparency", description: "Trust grows through openness and clarity." },
  { title: "Accountability", description: "Responsibility is central to stewardship." },
  { title: "Continuity", description: "The association should remain strong across generations." },
];

const GovernancePage = () => {
  return (
    <Layout>
      <section className="page-hero">
        <div className="container-wide px-6 sm:px-8 lg:px-12">
          <div className="max-w-xl">
            <p className="text-[12px] font-medium uppercase tracking-[0.15em] mb-5" style={{ color: "hsl(var(--gold))" }}>Leadership & Structure</p>
            <h1 className="text-[40px] sm:text-[48px] font-bold tracking-tight leading-[1.08] mb-5" style={{ color: "hsl(var(--primary-foreground))" }}>Governance</h1>
            <p className="text-[16px] leading-[1.65]" style={{ color: "hsl(var(--primary-foreground) / 0.55)" }}>
              Strong alumni communities are built on trust, clarity, service, and responsible leadership.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide max-w-2xl">
          <h2 className="text-[28px] sm:text-[32px] font-bold tracking-tight text-foreground leading-[1.15] mb-6">Serving the Community with Responsibility</h2>
          <p className="text-[16px] text-muted-foreground leading-[1.7]">
            BICKOSA's leadership exists to serve the alumni community and steward the association with integrity, transparency, and purpose. Clear governance helps ensure continuity, accountability, and trust.
          </p>
        </div>
      </section>

      <section className="section-padding bg-muted">
        <div className="container-wide max-w-2xl">
          <h2 className="text-[28px] sm:text-[32px] font-bold tracking-tight text-foreground leading-[1.15] mb-6">Leadership Structure</h2>
          <p className="text-[15px] text-muted-foreground leading-[1.7]">
            The association is led through a defined structure that may include executive roles, committee responsibilities, and working teams that support engagement, events, communication, finance, and other key functions.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide">
          <h2 className="text-[28px] sm:text-[32px] font-bold tracking-tight text-foreground leading-[1.15] mb-10">Governance Principles</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-lg overflow-hidden">
            {principles.map((p) => (
              <div key={p.title} className="bg-card p-8">
                <p className="text-[15px] font-semibold text-foreground mb-2">{p.title}</p>
                <p className="text-[13px] text-muted-foreground leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted">
        <div className="container-wide text-center">
          <Link to="/contact" className="inline-flex items-center h-10 px-5 text-[14px] font-medium text-primary-foreground bg-primary rounded-md hover:opacity-90 transition-opacity">
            View Contact Information
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default GovernancePage;
