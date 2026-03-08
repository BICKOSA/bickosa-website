import { GraduationCap, Users, Calendar, Heart } from "lucide-react";

const stats = [
  { icon: GraduationCap, label: "Founded in 1999", description: "Over 25 years of academic excellence since 9 February 1999." },
  { icon: Users, label: "2,750+ Students", description: "A thriving community of learners across O-Level and A-Level." },
  { icon: Calendar, label: "Active Engagement", description: "From the BICKOSA League to reunions, AGMs, and community drives." },
  { icon: Heart, label: "Giving Back", description: "Mobilizing alumni to support meaningful projects and opportunities." },
];

const TrustStrip = () => {
  return (
    <section className="section-padding-sm bg-card border-b border-border">
      <div className="container-wide">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="flex items-start gap-4 p-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                <stat.icon className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-foreground text-sm sm:text-base">{stat.label}</h3>
                <p className="text-muted-foreground text-xs sm:text-sm">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;
