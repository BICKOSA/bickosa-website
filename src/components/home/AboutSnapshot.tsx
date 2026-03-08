import { Link } from "react-router-dom";
import { ArrowRight, Users, TrendingUp, Heart } from "lucide-react";

const cards = [
  {
    icon: Users,
    title: "Reconnect",
    description: "Find your people by cohort, chapter, and shared interests.",
    accent: "text-cobalt",
    bgAccent: "bg-cobalt/10",
  },
  {
    icon: TrendingUp,
    title: "Grow",
    description: "Mentorship and career support powered by alumni.",
    accent: "text-teal",
    bgAccent: "bg-teal/10",
  },
  {
    icon: Heart,
    title: "Give back",
    description: "Projects that strengthen learning, facilities, and student opportunity.",
    accent: "text-coral",
    bgAccent: "bg-coral/10",
  },
];

const AboutSnapshot = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="max-w-xl mb-14">
          <p className="overline text-cobalt mb-4">What we do</p>
          <h2 className="text-[32px] sm:text-[40px] font-bold tracking-tight text-foreground leading-[1.15] mb-5">
            A community built on shared roots
          </h2>
          <p className="text-[16px] sm:text-[18px] text-muted-foreground leading-[1.65]">
            BICKOSA brings together former students under one shared home — a space for connection, collaboration, and contribution.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-card border border-border rounded-xl p-8 hover:shadow-md hover:border-border/80 transition-all duration-200"
            >
              <div className={`w-11 h-11 rounded-xl ${card.bgAccent} flex items-center justify-center mb-5`}>
                <card.icon className={`w-5 h-5 ${card.accent}`} strokeWidth={2} />
              </div>
              <h3 className="text-[20px] font-semibold text-foreground mb-2">{card.title}</h3>
              <p className="text-[15px] text-muted-foreground leading-[1.65]">{card.description}</p>
            </div>
          ))}
        </div>

        <Link to="/about" className="inline-flex items-center gap-2 text-[14px] font-semibold text-cobalt hover:text-cobalt-light transition-colors duration-150">
          Learn more about BICKOSA <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
};

export default AboutSnapshot;
