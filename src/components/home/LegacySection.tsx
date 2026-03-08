import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Cross, BookOpen, Award, Star, Landmark, ArrowRight } from "lucide-react";

const legacyCards = [
  { icon: Cross, title: "Catholic Foundation", description: "A school grounded in faith, character formation, and service." },
  { icon: Award, title: "Academic Excellence", description: "A longstanding commitment to learning, discipline, and growth." },
  { icon: Star, title: "Moral Uprightness", description: "A culture that values integrity, responsibility, and leadership." },
  { icon: Landmark, title: "Unity in Diversity", description: "A community that has brought together students from different backgrounds under one identity." },
  { icon: BookOpen, title: "Per Aspera Ad Astra", description: "Through hardship to the stars — a motto that continues to inspire generations." },
];

const LegacySection = () => {
  return (
    <section className="section-padding" style={{ background: "hsl(var(--ivory))" }}>
      <div className="container-wide">
        <div className="text-center mb-12">
          <span className="text-secondary text-sm font-semibold tracking-widest uppercase">Our Foundation</span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mt-3">
            A Legacy Worth Preserving
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            The story of BICKOSA begins with the story of Bishop Cipriano Kihangire Senior Secondary School — a school shaped by faith, discipline, excellence, and the values that continue to live on through its students and alumni.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {legacyCards.map((card, i) => (
            <div
              key={card.title}
              className={`bento-card group ${i === 0 ? "sm:col-span-2 lg:col-span-1" : ""}`}
            >
              <div className="w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center mb-4 group-hover:bg-accent/25 transition-colors">
                <card.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-2">{card.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Button asChild variant="outline">
            <Link to="/school">Discover the School's Story <ArrowRight className="ml-2 w-4 h-4" /></Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LegacySection;
