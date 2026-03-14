import { Link } from "react-router-dom";
import { BentoCard } from "@/components/bento";
import { Heart, School, Users } from "lucide-react";

const projects = [
  {
    title: "School Infrastructure Support",
    description:
      "Contributing to the learning environment, facilities, and long-term growth of BCK SSS.",
    icon: School,
  },
  {
    title: "Community Outreach",
    description:
      "Activities and drives reflecting the association's spirit of service to the Bbiina/Luzira community.",
    icon: Heart,
  },
  {
    title: "Fundraising & Development",
    description:
      "Collective efforts to mobilize alumni support for meaningful causes and student welfare.",
    icon: Users,
  },
];

const ProjectsPreview = () => {
  return (
    <section className="section">
      <p className="section-eyebrow">Collective Impact</p>
      <h2 className="section-heading">Giving Back Together</h2>
      <p className="section-sub">
        BICKOSA is not only about remembering where we came from — it is about shaping what comes
        next. Through projects, support, and collective action, alumni create lasting impact.
      </p>

      <div className="bento">
        <BentoCard variant="navy-tint" col={6} minHeight={260}>
          <div className="bc-border-left-gold" aria-hidden />
          <div style={{ paddingLeft: 16 }}>
            <div className="bc-eyebrow">Impact</div>
            <p className="bc-quote" style={{ marginBottom: 12 }}>
              &ldquo;The Silver Jubilee in 2024 included fundraising toward a new academic block —
              a testament to what alumni can achieve when united.&rdquo;
            </p>
            <p className="bc-quote-attr">BCK SSS Silver Jubilee, 2024</p>
          </div>
          <div className="bc-footer" style={{ paddingLeft: 16 }}>
            <Link to="/projects" className="bc-btn bc-btn-navy">
              Explore projects & giving
            </Link>
            <span className="bc-arrow bc-arrow-light">→</span>
          </div>
        </BentoCard>

        {projects.map((project) => (
          <BentoCard key={project.title} variant="white" col={6} minHeight={160}>
            <div className="bc-accent-bar-navy" aria-hidden />
            <div className="flex items-start gap-4">
              <div
                className="w-10 h-10 rounded-bento-lg flex items-center justify-center flex-shrink-0"
                style={{ background: "var(--navy-50)", color: "var(--navy-700)" }}
              >
                <project.icon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="bc-title" style={{ fontSize: "1rem" }}>
                  {project.title}
                </h3>
                <p className="bc-text sm">{project.description}</p>
              </div>
            </div>
          </BentoCard>
        ))}
      </div>
    </section>
  );
};

export default ProjectsPreview;
