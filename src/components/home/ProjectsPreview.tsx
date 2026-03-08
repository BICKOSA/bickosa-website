import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const projects = [
  { title: "School Support Initiatives", description: "Projects that contribute to the learning environment and growth of the school." },
  { title: "Community Outreach", description: "Activities and drives that reflect the association's spirit of service." },
  { title: "Fundraising & Development", description: "Collective efforts to mobilize alumni support for meaningful causes." },
];

const ProjectsPreview = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="max-w-xl mb-14">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-4">Making a Difference</p>
          <h2 className="text-3xl sm:text-[36px] font-bold tracking-tight text-foreground leading-[1.15] mb-5">
            Giving Back Together
          </h2>
          <p className="text-[15px] text-muted-foreground leading-[1.7]">
            BICKOSA is not only about remembering where we came from — it is also about shaping what comes next.
          </p>
        </div>
        <div className="border-t border-border">
          {projects.map((project, i) => (
            <div key={project.title} className="flex items-start gap-6 py-7 border-b border-border group">
              <span className="text-[13px] font-medium text-muted-foreground w-6 flex-shrink-0 pt-0.5">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex-1">
                <h3 className="text-[15px] font-semibold text-foreground mb-1">{project.title}</h3>
                <p className="text-[14px] text-muted-foreground leading-relaxed">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <Link to="/projects" className="inline-flex items-center gap-2 text-[14px] font-medium text-foreground hover:opacity-70 transition-opacity">
            Explore projects & giving <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsPreview;
