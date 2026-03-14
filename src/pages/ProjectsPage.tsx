import Layout from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { BentoCard } from "@/components/bento";
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
        <p className="section-eyebrow">Impact</p>
        <h2 className="section-heading">Why Giving Back Matters</h2>
        <p className="section-sub">
          A strong alumni association does more than preserve memory — it helps build the future. Through projects, campaigns, and collective support, alumni contribute toward initiatives that strengthen the school and reflect BCK values.
        </p>
      </section>

      <section className="section">
        <p className="section-eyebrow">Initiatives</p>
        <h2 className="section-heading">Featured Projects</h2>
        <div className="bento">
          {projects.map((p) => (
            <BentoCard key={p.title} variant="white" col={4} minHeight={260}>
              <div className={`w-10 h-10 rounded-bento-lg ${p.bgAccent} flex items-center justify-center mb-5`}>
                <p.icon className={`w-5 h-5 ${p.accent}`} />
              </div>
              <span className="bc-tag bc-tag-gold mb-3">{p.status}</span>
              <h3 className="bc-title mb-2" style={{ fontSize: "1rem" }}>{p.title}</h3>
              <p className="bc-text sm mb-2">{p.description}</p>
              <p className="bc-text sm" style={{ color: "var(--text-muted)" }}>{p.impact}</p>
            </BentoCard>
          ))}
        </div>
      </section>

      <section className="section">
        <p className="section-eyebrow">Get Involved</p>
        <h2 className="section-heading">Ways to Support</h2>
        <div className="bento mb-10">
          {waysToSupport.map((w) => (
            <BentoCard key={w.title} variant="surface" col={6} minHeight={140} className="min-h-0">
              <div className="flex items-start gap-4">
                <div className={`w-2 h-2 rounded-full ${w.accent} flex-shrink-0 mt-2`} />
                <div>
                  <h3 className="bc-title mb-1.5" style={{ fontSize: "0.9375rem" }}>{w.title}</h3>
                  <p className="bc-text sm" style={{ marginBottom: 0 }}>{w.description}</p>
                </div>
              </div>
            </BentoCard>
          ))}
        </div>
        <Link to="/contact" className="bc-btn bc-btn-navy inline-flex items-center gap-2">
          Contact us to contribute <ArrowRight className="w-4 h-4" />
        </Link>
      </section>

      <section className="rounded-bento-2xl overflow-hidden mt-10" style={{ background: "var(--navy-900)" }}>
        <div className="max-w-[1280px] mx-auto px-6 sm:px-8 py-20 sm:py-24 text-center">
          <Target className="w-6 h-6 mx-auto mb-4" style={{ color: "var(--gold-500)" }} />
          <h2 className="text-[28px] font-bold tracking-tight mb-4" style={{ fontFamily: "var(--font-display)", color: "var(--white)" }}>Built on Trust and Accountability</h2>
          <p className="text-[15px] leading-[1.75] max-w-md mx-auto" style={{ color: "var(--navy-200)" }}>
            Impact grows where trust is strong. BICKOSA approaches projects and contributions with clarity, responsibility, and a commitment to stewardship.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectsPage;
