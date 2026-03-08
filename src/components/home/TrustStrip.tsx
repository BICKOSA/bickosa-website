import { GraduationCap, Users, Calendar, Heart } from "lucide-react";

const stats = [
  { icon: GraduationCap, label: "Rooted in Legacy", description: "Built on the shared history and values of Bishop Cipriano Kihangire S.S.S." },
  { icon: Users, label: "Community First", description: "Connecting alumni across generations, professions, and geographies." },
  { icon: Calendar, label: "Active Engagement", description: "From reunions and sports to service and school support initiatives." },
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
