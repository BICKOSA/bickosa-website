import { Cross, BookOpen, Award, Star, Landmark } from "lucide-react";

const legacyCards = [
  { icon: Cross, title: "Catholic Identity", description: "Rooted in faith, moral formation, and service to the community." },
  { icon: Award, title: "Academic Excellence", description: "A tradition of high academic standards and discipline." },
  { icon: Star, title: "Unity & Moral Uprightness", description: "Building character through shared values and integrity." },
  { icon: BookOpen, title: "Per Aspera Ad Astra", description: "Through hardship to the stars — our guiding motto." },
  { icon: Landmark, title: "Decades of Growth", description: "From humble beginnings to a beacon of education in Kampala." },
];

const LegacySection = () => {
  return (
    <section className="section-padding" style={{ background: "hsl(var(--ivory))" }}>
      <div className="container-wide">
        <div className="text-center mb-12">
          <span className="text-secondary text-sm font-semibold tracking-widest uppercase">Our Foundation</span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mt-3">
            Legacy of the School
          </h2>
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
      </div>
    </section>
  );
};

export default LegacySection;
