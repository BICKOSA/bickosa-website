import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const values = [
  { title: "Catholic Foundation", description: "A school grounded in faith, character formation, and service." },
  { title: "Academic Excellence", description: "A longstanding commitment to learning, discipline, and growth." },
  { title: "Moral Uprightness", description: "A culture that values integrity, responsibility, and leadership." },
  { title: "Unity in Diversity", description: "A community that has brought together students from different backgrounds under one identity." },
  { title: "Per Aspera Ad Astra", description: "Through hardship to the stars — a motto that continues to inspire generations." },
];

const LegacySection = () => {
  return (
    <section className="section-padding bg-muted">
      <div className="container-wide">
        <div className="max-w-2xl mb-14">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-4">Our Foundation</p>
          <h2 className="text-3xl sm:text-[36px] font-bold tracking-tight text-foreground leading-[1.15] mb-5">
            A Legacy Worth Preserving
          </h2>
          <p className="text-[15px] text-muted-foreground leading-[1.7]">
            The story of BICKOSA begins with the story of Bishop Cipriano Kihangire Senior Secondary School — a school shaped by faith, discipline, excellence, and the values that continue to live on through its students and alumni.
          </p>
        </div>
        <div className="space-y-0 border-t border-border">
          {values.map((item, i) => (
            <div key={item.title} className="flex items-start gap-6 py-6 border-b border-border">
              <span className="text-[13px] font-medium text-muted-foreground w-6 flex-shrink-0 pt-0.5">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-[15px] font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-[14px] text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <Link to="/school" className="inline-flex items-center gap-2 text-[14px] font-medium text-foreground hover:opacity-70 transition-opacity">
            Discover the school's story <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LegacySection;
