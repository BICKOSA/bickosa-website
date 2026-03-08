import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { School, Users, Heart, Shield, ArrowRight, Handshake, Star, Mail } from "lucide-react";

const projects = [
  { icon: School, title: "School Infrastructure Support", status: "Ongoing", description: "Projects that contribute to the learning environment and growth of the school.", impact: "This initiative reflects the power of alumni working together around a shared purpose." },
  { icon: Users, title: "Community Support Drives", status: "Active", description: "Activities and drives that reflect the association's spirit of service to the Bbiina/Luzira community.", impact: "By supporting clearly defined projects, BICKOSA can turn goodwill into visible, measurable contribution." },
  { icon: Heart, title: "Student-Focused Initiatives", status: "Ongoing", description: "Providing financial support and resources for students to continue their education at BCK SSS.", impact: "Supporting students who would otherwise miss out on quality education." },
];

const waysToSupport = [
  { icon: Handshake, title: "Partner with BICKOSA", description: "Collaborate with the association on initiatives, events, or community projects." },
  { icon: School, title: "Support a School Initiative", description: "Contribute toward projects that directly strengthen the BCK experience." },
  { icon: Star, title: "Sponsor an Event", description: "Help power meaningful gatherings and community activities." },
  { icon: Mail, title: "Reach Out to Contribute", description: "Get in touch to explore how you or your organization can support." },
];

const ProjectsPage = () => {
  return (
    <Layout>
      <section className="gradient-hero py-20 sm:py-28">
        <div className="container-wide px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "hsl(var(--gold))" }}>Collective Impact</p>
            <h1 className="text-4xl sm:text-5xl font-heading font-bold mb-6" style={{ color: "hsl(var(--primary-foreground))" }}>Projects & Giving Back</h1>
            <p className="text-lg" style={{ color: "hsl(var(--primary-foreground) / 0.8)" }}>
              BICKOSA exists not only to keep alumni connected, but also to create meaningful ways for the community to give back through support, partnership, and shared action.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide max-w-3xl">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-6">Why Giving Back Matters</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            A strong alumni association does more than preserve memory — it helps build the future. Through projects, campaigns, and collective support, alumni can contribute toward initiatives that strengthen the school experience, support the community, and reflect the values that continue to define BCK.
          </p>
        </div>
      </section>

      <section className="section-padding bg-card">
        <div className="container-wide">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-10">Featured Projects</h2>
          <div className="space-y-8">
            {projects.map((p) => (
              <div key={p.title} className="bento-card grid md:grid-cols-4 gap-6 items-start">
                <div className="md:col-span-1">
                  <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center mb-3">
                    <p.icon className="w-7 h-7 text-secondary" />
                  </div>
                  <span className="text-xs font-semibold tracking-wider uppercase text-accent">{p.status}</span>
                </div>
                <div className="md:col-span-3">
                  <h3 className="font-heading text-xl font-bold text-foreground mb-3">{p.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-3">{p.description}</p>
                  <p className="text-sm text-secondary font-medium">{p.impact}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-8">Ways to Support</h2>
          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            {waysToSupport.map((w) => (
              <div key={w.title} className="bento-card flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <w.icon className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-1">{w.title}</h3>
                  <p className="text-muted-foreground text-sm">{w.description}</p>
                </div>
              </div>
            ))}
          </div>
          <Button asChild><Link to="/contact">Contact Us to Contribute <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
        </div>
      </section>

      <section className="section-padding bg-card">
        <div className="container-wide text-center max-w-2xl">
          <Shield className="w-10 h-10 text-secondary mx-auto mb-4" />
          <h2 className="text-3xl font-heading font-bold text-foreground mb-4">Built on Trust and Accountability</h2>
          <p className="text-muted-foreground leading-relaxed">
            Impact grows where trust is strong. BICKOSA aims to approach projects and contributions with clarity, responsibility, and a commitment to stewardship — ensuring that support is tied to purpose and communicated with transparency.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectsPage;
