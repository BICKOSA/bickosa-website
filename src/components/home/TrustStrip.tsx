const stats = [
  { value: "1999", label: "Year Founded" },
  { value: "2,750+", label: "Students Enrolled" },
  { value: "25+", label: "Years of Excellence" },
  { value: "Active", label: "Alumni Engagement" },
];

const TrustStrip = () => {
  return (
    <section className="border-b border-border bg-background">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-12 sm:py-14">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">{stat.value}</p>
              <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;
