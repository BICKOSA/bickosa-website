import { Link } from "react-router-dom";
import { ArrowRight, School, Heart, Users } from "lucide-react";

const projects = [
  {
    title: "School Infrastructure Support",
    description: "Contributing to the learning environment, facilities, and long-term growth of BCK SSS.",
    icon: School,
    accent: "text-cobalt",
    bgAccent: "bg-cobalt/10",
  },
  {
    title: "Community Outreach",
    description: "Activities and drives reflecting the association's spirit of service to the Bbiina/Luzira community.",
    icon: Heart,
    accent: "text-coral",
    bgAccent: "bg-coral/10",
  },
  {
    title: "Student-Focused Initiatives",
    description: "Resources and support for students to continue their education at BCK SSS.",
    icon: Users,
    accent: "text-teal",
    bgAccent: "bg-teal/10",
  },
];

const ProjectsPreview = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="max-w-xl mb-14">
          <p className="overline text-cobalt mb-4">Projects & Giving</p>
          <h2 className="text-[32px] sm:text-[40px] font-bold tracking-tight text-foreground leading-[1.15] mb-5">
            What we're building together
          </h2>
          <p className="text-[16px] sm:text-[18px] text-muted-foreground leading-[1.65]">
            Through collective support, alumni contribute toward initiatives that strengthen the school and reflect BCK values.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {projects.map((project) => (
            <div key={project.title} className="bg-card border border-border rounded-xl p-7 hover:shadow-md hover:border-border/80 transition-all duration-200 group">
              <div className={`w-11 h-11 rounded-xl ${project.bgAccent} flex items-center justify-center mb-5`}>
                <project.icon className={`w-5 h-5 ${project.accent}`} strokeWidth={2} />
              </div>
              <h3 className="text-[17px] font-semibold text-foreground mb-2 group-hover:text-cobalt transition-colors duration-150">{project.title}</h3>
              <p className="text-[14px] text-muted-foreground leading-[1.65]">{project.description}</p>
            </div>
          ))}
        </div>

        <Link to="/projects" className="inline-flex items-center gap-2 text-[14px] font-semibold text-cobalt hover:text-cobalt-light transition-colors duration-150">
          View all projects <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
};

export default ProjectsPreview;
