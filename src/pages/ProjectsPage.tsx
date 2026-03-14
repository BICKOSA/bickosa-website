import Layout from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { Link } from "react-router-dom";
import { ArrowRight, Heart, School, Users, Target } from "lucide-react";

const projects = [
  { title: "School Infrastructure Support", status: "Ongoing", description: "Projects that contribute to the learning environment and growth of BCK SSS.", impact: "This initiative reflects the power of alumni working together around a shared purpose.", icon: School, accent: "text-cobalt", bgAccent: "bg-cobalt/10" },
  { title: "Community Support Drives", status: "Active", description: "Activities and drives that reflect the association's spirit of service to the Bbiina/Luzira community.", impact: "Turning goodwill into visible, measurable contribution.", icon: Heart, accent: "text-coral", bgAccent: "bg-coral/10" },
  { title: "Student-Focused Initiatives", status: "Ongoing", description: "Providing financial support and resources for students to continue their education at BCK SSS.", impact: "Supporting students who would otherwise miss out on quality education.", icon: Users, accent: "text-teal", bgAccent: "bg-teal/10" },
];

const waysToSupport = [
  { title: "Partner with BICKOSA", description: "Collaborate on initiatives, events, or community projects.", accent: "bg-cobalt" },
  { title: "Support a School Initiative", description: "Contribute toward projects that directly strengthen the BCK experience.", accent: "bg-gold" },
  { title: "Sponsor an Event", description: "Help power meaningful gatherings and community activities.", accent: "bg-coral" },
  { title: "Reach Out to Contribute", description: "Get in touch to explore how you can support.", accent: "bg-teal" },
];

const ProjectsPage = () => {
  return (
    <Layout>
      <PageHero
        eyebrow="Collective Impact"
        title="Projects & Giving Back"
        description="BICKOSA exists not only to keep alumni connected, but to create meaningful ways for the community to give back."
      />

      <section className="section max-w-2xl">
        <h2 className="text-[30px] sm:text-[34px] font-bold tracking-tight text-foreground leading-[1.15] mb-6">Why Giving Back Matters</h2>
          <p className="text-[16px] text-muted-foreground leading-[1.75]">
            A strong alumni association does more than preserve memory — it helps build the future. Through projects, campaigns, and collective support, alumni contribute toward initiatives that strengthen the school and reflect BCK values.
        </p>
      </section>

      <section className="section">
        <p className="section-eyebrow">Initiatives</p>
        <h2 className="section-heading">Featured Projects</h2>
        <div className="grid md:grid-cols-3 gap-5">
          {projects.map((p) => (
            <div key={p.title} className="bg-card border border-border rounded-bento-2xl p-7 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5">
              <div className={`w-10 h-10 rounded-bento-lg ${p.bgAccent} flex items-center justify-center mb-5`}>
                  <p.icon className={`w-5 h-5 ${p.accent}`} />
                </div>
                <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-gold/10 mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-gold">{p.status}</span>
                </div>
                <h3 className="text-[16px] font-semibold text-foreground mb-2">{p.title}</h3>
                <p className="text-[14px] text-muted-foreground leading-[1.7] mb-2">{p.description}</p>
                <p className="text-[13px] text-muted-foreground/60">{p.impact}</p>
              </div>
            ))}
        </div>
      </section>

      <section className="section">
        <h2 className="text-[30px] sm:text-[34px] font-bold tracking-tight text-foreground leading-[1.15] mb-10">Ways to Support</h2>
        <div className="grid sm:grid-cols-2 gap-5 mb-10">
          {waysToSupport.map((w) => (
            <div key={w.title} className="flex items-start gap-4 bg-card border border-border rounded-bento-2xl p-6 hover:shadow-sm transition-shadow">
                <div className={`w-2 h-2 rounded-full ${w.accent} flex-shrink-0 mt-2`} />
                <div>
                  <h3 className="text-[15px] font-semibold text-foreground mb-1.5">{w.title}</h3>
                  <p className="text-[14px] text-muted-foreground leading-relaxed">{w.description}</p>
                </div>
              </div>
            ))}
        </div>
        <Link to="/contact" className="inline-flex items-center gap-2 h-11 px-6 text-[14px] font-semibold bg-navy text-primary-foreground rounded-bento-xl hover:bg-navy-light transition-colors" style={{ background: "var(--navy-900)" }}>
          Contact us to contribute <ArrowRight className="w-4 h-4" />
        </Link>
      </section>

      <section className="rounded-bento-2xl overflow-hidden mt-10" style={{ background: "var(--navy-900)" }}>
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-20 sm:py-24 text-center">
          <Target className="w-6 h-6 text-gold mx-auto mb-4" />
          <h2 className="text-[28px] font-bold tracking-tight text-primary-foreground mb-4">Built on Trust and Accountability</h2>
          <p className="text-[15px] text-primary-foreground/50 leading-[1.75] max-w-md mx-auto">
            Impact grows where trust is strong. BICKOSA approaches projects and contributions with clarity, responsibility, and a commitment to stewardship.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectsPage;
