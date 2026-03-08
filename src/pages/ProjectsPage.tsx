import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { School, Users, Heart, Shield, ArrowRight } from "lucide-react";

const projects = [
  { icon: School, title: "Classroom Renovation Project", status: "Ongoing", description: "Renovating and equipping classrooms at BCK SSS to provide a better learning environment for current students.", impact: "Supporting over 800 students with improved learning facilities." },
  { icon: Users, title: "Community Outreach Program", status: "Active", description: "Alumni-driven outreach programs serving the Bbiina/Luzira community through health camps, mentorship, and resource distribution.", impact: "Reaching hundreds of community members annually." },
  { icon: Heart, title: "Student Scholarship Fund", status: "Ongoing", description: "Providing financial support to brilliant but financially challenged students to continue their education at BCK SSS.", impact: "Supporting students who would otherwise miss out on quality education." },
];

const waysToSupport = [
  "Partner with BICKOSA on community initiatives",
  "Sponsor an alumni event or school celebration",
  "Contribute to a school infrastructure project",
  "Contact the association to discuss giving opportunities",
];

const ProjectsPage = () => {
  return (
    <Layout>
      <section className="gradient-hero py-20 sm:py-28">
        <div className="container-wide px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-heading font-bold mb-6" style={{ color: "hsl(var(--primary-foreground))" }}>Projects & Giving Back</h1>
          <p className="text-lg max-w-2xl" style={{ color: "hsl(var(--primary-foreground) / 0.8)" }}>
            Through collective alumni contribution, BICKOSA supports projects that strengthen the school and serve the wider community.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide max-w-3xl">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-6">Why Giving Matters</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            BICKOSA exists not just to remember, but also to contribute. The school gave us a foundation — and through giving back, we ensure that foundation remains strong for generations to come. Every contribution, big or small, helps build the future of BCK.
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
        <div className="container-wide max-w-3xl">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-8">Ways to Support</h2>
          <div className="space-y-3 mb-10">
            {waysToSupport.map((w) => (
              <div key={w} className="flex items-start gap-3 p-4 bg-card rounded-xl">
                <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                <p className="text-foreground">{w}</p>
              </div>
            ))}
          </div>
          <Button asChild><Link to="/contact">Contact Us to Contribute <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
        </div>
      </section>

      <section className="section-padding bg-card">
        <div className="container-wide text-center max-w-2xl">
          <Shield className="w-10 h-10 text-secondary mx-auto mb-4" />
          <h2 className="text-3xl font-heading font-bold text-foreground mb-4">Transparency & Accountability</h2>
          <p className="text-muted-foreground leading-relaxed">
            BICKOSA is committed to operating with trust, clarity, and structured impact. All projects are managed with accountability to the alumni community, and progress updates are shared regularly through our communications channels.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectsPage;
