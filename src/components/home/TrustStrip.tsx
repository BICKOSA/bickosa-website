import { GraduationCap, Calendar, Users, Heart } from "lucide-react";

const stats = [
  { icon: GraduationCap, label: "Legacy Since 1960s", description: "Decades of academic excellence" },
  { icon: Users, label: "Proud Alumni Community", description: "Thousands of alumni worldwide" },
  { icon: Calendar, label: "Active Events", description: "Reunions, AGMs & community drives" },
  { icon: Heart, label: "Giving Back", description: "Supporting school & community" },
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
