import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const projects = [
  { title: "School Infrastructure Support", status: "Ongoing", description: "Projects that contribute to the learning environment and growth of the school.", impact: "This initiative reflects the power of alumni working together around a shared purpose." },
  { title: "Community Support Drives", status: "Active", description: "Activities and drives that reflect the association's spirit of service to the Bbiina/Luzira community.", impact: "By supporting clearly defined projects, BICKOSA can turn goodwill into visible, measurable contribution." },
  { title: "Student-Focused Initiatives", status: "Ongoing", description: "Providing financial support and resources for students to continue their education at BCK SSS.", impact: "Supporting students who would otherwise miss out on quality education." },
];

const waysToSupport = [
  { title: "Partner with BICKOSA", description: "Collaborate with the association on initiatives, events, or community projects." },
  { title: "Support a School Initiative", description: "Contribute toward projects that directly strengthen the BCK experience." },
  { title: "Sponsor an Event", description: "Help power meaningful gatherings and community activities." },
  { title: "Reach Out to Contribute", description: "Get in touch to explore how you or your organization can support." },
];

const ProjectsPage = () => {
  return (
    <Layout>
      <section className="page-hero">
        <div className="container-wide px-6 sm:px-8 lg:px-12">
          <div className="max-w-xl">
            <p className="text-[12px] font-medium uppercase tracking-[0.15em] mb-5" style={{ color: "hsl(var(--gold))" }}>Collective Impact</p>
            <h1 className="text-[40px] sm:text-[48px] font-bold tracking-tight leading-[1.08] mb-5" style={{ color: "hsl(var(--primary-foreground))" }}>Projects & Giving Back</h1>
            <p className="text-[16px] leading-[1.65]" style={{ color: "hsl(var(--primary-foreground) / 0.55)" }}>
              BICKOSA exists not only to keep alumni connected, but also to create meaningful ways for the community to give back.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide max-w-2xl">
          <h2 className="text-[28px] sm:text-[32px] font-bold tracking-tight text-foreground leading-[1.15] mb-6">Why Giving Back Matters</h2>
          <p className="text-[16px] text-muted-foreground leading-[1.7]">
            A strong alumni association does more than preserve memory — it helps build the future. Through projects, campaigns, and collective support, alumni can contribute toward initiatives that strengthen the school experience and reflect the values that define BCK.
          </p>
        </div>
      </section>

      <section className="section-padding bg-muted">
        <div className="container-wide">
          <h2 className="text-[28px] sm:text-[32px] font-bold tracking-tight text-foreground leading-[1.15] mb-10">Featured Projects</h2>
          <div className="border-t border-border">
            {projects.map((p, i) => (
              <div key={p.title} className="grid grid-cols-[1fr] md:grid-cols-[200px_1fr] gap-4 md:gap-10 py-8 border-b border-border">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.12em] mb-1" style={{ color: "hsl(var(--gold))" }}>{p.status}</p>
                  <p className="text-[13px] text-muted-foreground">{String(i + 1).padStart(2, "0")}</p>
                </div>
                <div>
                  <h3 className="text-[17px] font-semibold text-foreground mb-2">{p.title}</h3>
                  <p className="text-[14px] text-muted-foreground leading-[1.7] mb-2">{p.description}</p>
                  <p className="text-[13px] text-muted-foreground/70">{p.impact}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide">
          <h2 className="text-[28px] sm:text-[32px] font-bold tracking-tight text-foreground leading-[1.15] mb-10">Ways to Support</h2>
          <div className="grid sm:grid-cols-2 gap-px bg-border rounded-lg overflow-hidden mb-10">
            {waysToSupport.map((w) => (
              <div key={w.title} className="bg-card p-8">
                <h3 className="text-[15px] font-semibold text-foreground mb-2">{w.title}</h3>
                <p className="text-[14px] text-muted-foreground leading-relaxed">{w.description}</p>
              </div>
            ))}
          </div>
          <Link to="/contact" className="inline-flex items-center gap-2 text-[14px] font-medium text-primary-foreground bg-primary h-10 px-5 rounded-md hover:opacity-90 transition-opacity">
            Contact us to contribute <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <section className="section-padding bg-muted">
        <div className="container-wide text-center max-w-lg">
          <h2 className="text-[28px] font-bold tracking-tight text-foreground mb-4">Built on Trust and Accountability</h2>
          <p className="text-[15px] text-muted-foreground leading-[1.7]">
            Impact grows where trust is strong. BICKOSA aims to approach projects and contributions with clarity, responsibility, and a commitment to stewardship.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectsPage;
