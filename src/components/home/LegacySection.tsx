import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-school.jpg";

const LegacySection = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="grid lg:grid-cols-2 min-h-[560px]">
        {/* Image side */}
        <div className="relative hidden lg:block">
          <img src={heroImg} alt="BCK SSS Heritage" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-navy/50" />
          <div className="absolute bottom-10 left-10 right-10">
            <div className="bg-navy/80 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/10">
              <p className="serif-heading text-[22px] text-gold leading-[1.4] mb-2">
                "Per Aspera Ad Astra"
              </p>
              <p className="text-[13px] text-primary-foreground/45">Through hardship to the stars — the school motto since 1999</p>
            </div>
          </div>
        </div>

        {/* Content side */}
        <div className="bg-navy px-6 sm:px-10 lg:px-16 py-20 sm:py-24 flex items-center">
          <div className="max-w-lg">
            <p className="overline text-gold/60 mb-5">Our Foundation</p>
            <h2 className="text-[32px] sm:text-[40px] font-bold tracking-tight text-primary-foreground leading-[1.15] mb-6">
              Where we came from
            </h2>
            <p className="text-[16px] text-primary-foreground/50 leading-[1.7] mb-10">
              The story of BICKOSA begins with BCK SSS — a school shaped by faith, discipline, and excellence. The values that defined us as students continue to guide us as alumni.
            </p>

            <div className="space-y-5 mb-10">
              {[
                { title: "Catholic Foundation", desc: "Grounded in faith, character, and service." },
                { title: "Academic Excellence", desc: "A longstanding commitment to learning and growth." },
                { title: "Unity in Diversity", desc: "Students from many backgrounds united under one identity." },
              ].map((item, i) => (
                <div key={item.title} className="flex items-start gap-4">
                  <span className="text-[13px] font-semibold text-gold/40 w-5 flex-shrink-0 pt-0.5 tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-[15px] font-semibold text-primary-foreground mb-0.5">{item.title}</h3>
                    <p className="text-[14px] text-primary-foreground/40 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link to="/school" className="inline-flex items-center gap-2 text-[14px] font-semibold text-gold hover:text-gold-light transition-colors duration-150">
              Discover the school's story <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LegacySection;
