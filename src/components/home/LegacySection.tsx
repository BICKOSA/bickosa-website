import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-school.jpg";

const values = [
  { title: "Catholic Foundation", description: "A school grounded in faith, character formation, and service to community." },
  { title: "Academic Excellence", description: "A longstanding commitment to learning, discipline, and student growth." },
  { title: "Moral Uprightness", description: "A culture that values integrity, responsibility, and principled leadership." },
  { title: "Unity in Diversity", description: "Bringing together students from different backgrounds under one shared identity." },
];

const LegacySection = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Split layout — image left, content right */}
      <div className="grid lg:grid-cols-2 min-h-[600px]">
        {/* Image side */}
        <div className="relative hidden lg:block">
          <img src={heroImg} alt="BCK SSS Heritage" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-navy/60" />
          <div className="absolute bottom-10 left-10 right-10">
            <div className="bg-navy/80 backdrop-blur-sm rounded-lg p-6">
              <p className="serif-heading text-[24px] text-gold leading-[1.35] mb-2">
                "Per Aspera Ad Astra"
              </p>
              <p className="text-[13px] text-primary-foreground/50">Through Hardship to the Stars — our school motto since 1999</p>
            </div>
          </div>
        </div>

        {/* Content side */}
        <div className="bg-navy px-6 sm:px-10 lg:px-16 py-20 sm:py-24 flex items-center">
          <div className="max-w-lg">
            <div className="w-10 h-1 rounded-full bg-gold mb-6" />
            <p className="text-[12px] font-semibold uppercase tracking-[0.15em] text-gold/70 mb-4">Our Foundation</p>
            <h2 className="text-[32px] sm:text-[38px] font-bold tracking-tight text-primary-foreground leading-[1.12] mb-6">
              A Legacy Worth Preserving
            </h2>
            <p className="text-[15px] text-primary-foreground/55 leading-[1.75] mb-10">
              The story of BICKOSA begins with BCK SSS — a school shaped by faith, discipline, excellence, and the values that live on through its students and alumni.
            </p>

            <div className="space-y-6 mb-10">
              {values.map((item, i) => (
                <div key={item.title} className="flex items-start gap-4">
                  <span className="text-[13px] font-bold text-gold/50 w-5 flex-shrink-0 pt-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-[14px] font-semibold text-primary-foreground mb-1">{item.title}</h3>
                    <p className="text-[13px] text-primary-foreground/45 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link to="/school" className="inline-flex items-center gap-2 text-[14px] font-semibold text-gold hover:text-gold-light transition-colors">
              Discover the school's story <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LegacySection;
