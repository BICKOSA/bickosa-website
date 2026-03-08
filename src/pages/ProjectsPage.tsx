import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, School, Heart, Users } from "lucide-react";

const projects = [
  { title: "School Infrastructure Support", status: "Ongoing", description: "Contributing to the learning environment and growth of BCK SSS.", icon: School, accent: "text-cobalt", bgAccent: "bg-cobalt/10" },
  { title: "Community Support Drives", status: "Active", description: "Activities reflecting the association's spirit of service to the Bbiina/Luzira community.", icon: Heart, accent: "text-coral", bgAccent: "bg-coral/10" },
  { title: "Student-Focused Initiatives", status: "Ongoing", description: "Financial support and resources for students to continue their education.", icon: Users, accent: "text-teal", bgAccent: "bg-teal/10" },
];

const ProjectsPage = () => {
  return (
    <Layout>
      <section className="page-hero">
        <div className="container-wide px-6 sm:px-8 lg:px-12">
          <div className="max-w-2xl">
            <p className="overline text-gold mb-5">Collective Impact</p>
            <h1 className="text-[40px] sm:text-[52px] lg:text-[56px] font-bold tracking-tight leading-[1.1] mb-6 text-primary-foreground">
              Projects & Giving
            </h1>
            <p className="text-[17px] sm:text-[18px] leading-[1.65] text-primary-foreground/50">
              Support projects that strengthen students, facilities, and opportunity.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide max-w-readable">
          <h2 className="text-[28px] sm:text-[32px] font-bold tracking-tight text-foreground leading-[1.15] mb-6">Why giving back matters</h2>
          <p className="text-[16px] text-muted-foreground leading-[1.7]">
            A strong alumni association does more than preserve memory — it helps build the future. Through projects and collective support, alumni contribute toward initiatives that strengthen the school and reflect BCK values.
          </p>
        </div>
      </section>

      <section className="section-padding section-alt">
        <div className="container-wide">
          <h2 className="text-[28px] sm:text-[32px] font-bold tracking-tight text-foreground leading-[1.15] mb-10">Featured projects</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((p) => (
              <div key={p.title} className="bg-card border border-border rounded-xl p-7 hover:shadow-md hover:border-border/80 transition-all duration-200">
                <div className={`w-11 h-11 rounded-xl ${p.bgAccent} flex items-center justify-center mb-5`}>
                  <p.icon className={`w-5 h-5 ${p.accent}`} strokeWidth={2} />
                </div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-gold/10 mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-gold">{p.status}</span>
                </div>
                <h3 className="text-[17px] font-semibold text-foreground mb-2">{p.title}</h3>
                <p className="text-[14px] text-muted-foreground leading-[1.65]">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transparency */}
      <section className="section-padding bg-background">
        <div className="container-wide max-w-readable">
          <h2 className="text-[28px] sm:text-[32px] font-bold tracking-tight text-foreground leading-[1.15] mb-6">Where your donation goes</h2>
          <p className="text-[15px] text-muted-foreground leading-[1.7] mb-6">
            BICKOSA approaches contributions with clarity, responsibility, and a commitment to stewardship. Budget breakdowns and updates will be published as projects progress.
          </p>
          <div className="bg-muted rounded-xl p-6 border border-border">
            <p className="text-[14px] text-muted-foreground leading-[1.7]">
              Detailed transparency modules — including budget breakdown, updates timeline, and donor acknowledgement — will be added as campaigns are formalized.
            </p>
          </div>
        </div>
      </section>

      {/* Ways to support */}
      <section className="section-padding section-alt">
        <div className="container-wide">
          <h2 className="text-[28px] sm:text-[32px] font-bold tracking-tight text-foreground leading-[1.15] mb-10">Ways to support</h2>
          <div className="grid sm:grid-cols-2 gap-5 mb-10">
            {[
              { title: "Partner with BICKOSA", desc: "Collaborate on initiatives, events, or community projects.", accent: "bg-cobalt" },
              { title: "Support a school initiative", desc: "Contribute toward projects that directly strengthen BCK.", accent: "bg-gold" },
              { title: "Sponsor an event", desc: "Help power meaningful gatherings and community activities.", accent: "bg-coral" },
              { title: "Reach out to contribute", desc: "Get in touch to explore how you can support.", accent: "bg-teal" },
            ].map((w) => (
              <div key={w.title} className="flex items-start gap-4 bg-card border border-border rounded-xl p-6 hover:shadow-sm hover:border-border/80 transition-all duration-200">
                <div className={`w-2 h-2 rounded-full ${w.accent} flex-shrink-0 mt-2`} />
                <div>
                  <h3 className="text-[15px] font-semibold text-foreground mb-1.5">{w.title}</h3>
                  <p className="text-[14px] text-muted-foreground leading-relaxed">{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <Link to="/contact" className="inline-flex items-center gap-2 h-11 px-6 text-[14px] font-semibold bg-navy text-primary-foreground rounded-lg hover:bg-navy-light transition-colors duration-150">
            Contact us to contribute <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectsPage;
