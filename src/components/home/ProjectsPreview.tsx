import { Link } from "react-router-dom";
import { ArrowRight, Heart, School, Users } from "lucide-react";

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
    title: "Fundraising & Development",
    description: "Collective efforts to mobilize alumni support for meaningful causes and student welfare.",
    icon: Users,
    accent: "text-teal",
    bgAccent: "bg-teal/10",
  },
];

const ProjectsPreview = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-16 items-start">
          <div>
            <div className="gold-accent-bar" />
            <p className="text-[12px] font-semibold uppercase tracking-[0.15em] text-gold mb-4">Collective Impact</p>
            <h2 className="text-[32px] sm:text-[38px] font-bold tracking-tight text-foreground leading-[1.12] mb-6">
              Giving Back Together
            </h2>
            <p className="text-[16px] text-muted-foreground leading-[1.75] mb-6">
              BICKOSA is not only about remembering where we came from — it is about shaping what comes next. Through projects, support, and collective action, alumni create lasting impact.
            </p>

            <div className="bg-muted rounded-xl p-6 mb-8">
              <p className="serif-heading text-[16px] text-foreground/75 leading-[1.6] mb-3">
                "The Silver Jubilee in 2024 included fundraising toward a new academic block — a testament to what alumni can achieve when united."
              </p>
              <p className="text-[12px] text-muted-foreground">BCK SSS Silver Jubilee, 2024</p>
            </div>

            <Link to="/projects" className="inline-flex items-center gap-2 text-[14px] font-semibold text-cobalt hover:text-cobalt/80 transition-colors">
              Explore projects & giving <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="space-y-4">
            {projects.map((project) => (
              <div key={project.title} className="bg-card border border-border rounded-xl p-6 hover:shadow-sm transition-shadow group">
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-lg ${project.bgAccent} flex items-center justify-center flex-shrink-0`}>
                    <project.icon className={`w-5 h-5 ${project.accent}`} />
                  </div>
                  <div>
                    <h3 className="text-[15px] font-semibold text-foreground mb-1.5 group-hover:text-cobalt transition-colors">{project.title}</h3>
                    <p className="text-[14px] text-muted-foreground leading-relaxed">{project.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsPreview;
