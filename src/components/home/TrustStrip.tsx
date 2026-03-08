const stats = [
  { value: "1999", label: "Year Founded", accent: "cobalt" },
  { value: "2,750+", label: "Students Enrolled", accent: "teal" },
  { value: "25+", label: "Years of Excellence", accent: "gold" },
  { value: "Active", label: "Alumni Community", accent: "coral" },
];

const TrustStrip = () => {
  const accentColors: Record<string, string> = {
    cobalt: "bg-cobalt",
    teal: "bg-teal",
    gold: "bg-gold",
    coral: "bg-coral",
  };

  return (
    <section className="border-b border-border bg-card">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-10 sm:py-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat) => (
            <div key={stat.label} className="flex items-start gap-4">
              <div className={`w-1 h-10 rounded-full ${accentColors[stat.accent]} opacity-70 flex-shrink-0 mt-0.5`} />
              <div>
                <p className="text-2xl sm:text-[28px] font-bold tracking-tight text-foreground">{stat.value}</p>
                <p className="text-[13px] text-muted-foreground mt-0.5">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;
