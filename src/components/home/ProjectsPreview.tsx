import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, School, Users, Heart } from "lucide-react";

const projects = [
  { icon: School, title: "School Support Initiatives", description: "Projects that contribute to the learning environment and growth of the school." },
  { icon: Users, title: "Community Outreach", description: "Activities and drives that reflect the association's spirit of service." },
  { icon: Heart, title: "Fundraising & Development", description: "Collective efforts to mobilize alumni support for meaningful causes." },
];

const ProjectsPreview = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="text-center mb-12">
          <span className="text-secondary text-sm font-semibold tracking-widest uppercase">Making a Difference</span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mt-3">
            Giving Back Together
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            BICKOSA is not only about remembering where we came from — it is also about shaping what comes next. Through collective support, alumni can contribute to initiatives that strengthen the school, support the wider community, and preserve the legacy we share.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.title} className="bento-card text-center group">
              <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-secondary/20 transition-colors">
                <project.icon className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">{project.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Button asChild>
            <Link to="/projects">Explore Projects & Giving <ArrowRight className="ml-2 w-4 h-4" /></Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsPreview;
