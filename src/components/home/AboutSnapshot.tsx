import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const AboutSnapshot = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-4">Who We Are</p>
            <h2 className="text-3xl sm:text-[36px] font-bold tracking-tight text-foreground leading-[1.15] mb-6">
              About BICKOSA
            </h2>
            <p className="text-[16px] text-muted-foreground leading-[1.7] mb-4">
              BICKOSA, the Bishop Cipriano Kihangire Old Students Association, exists to bring together former students of Bishop Cipriano Kihangire Senior Secondary School under one shared home. It is a space for connection, memory, collaboration, and contribution — helping alumni remain linked to one another and to the school that shaped them.
            </p>
            <p className="text-[15px] text-muted-foreground leading-[1.7] mb-8">
              Through events, storytelling, community engagement, and support for school-focused initiatives, BICKOSA helps preserve the spirit of BCK while creating room for future impact.
            </p>
            <Link to="/about" className="inline-flex items-center gap-2 text-[14px] font-medium text-foreground hover:opacity-70 transition-opacity">
              Learn more about BICKOSA <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-px bg-border rounded-lg overflow-hidden">
            {[
              { title: "Unity", desc: "Bound by shared experience and values" },
              { title: "Service", desc: "Giving back to school and community" },
              { title: "Legacy", desc: "Preserving heritage across generations" },
              { title: "Pride", desc: "Proudly BCK, proudly BICKOSA" },
            ].map((item) => (
              <div key={item.title} className="bg-card p-6 sm:p-8">
                <h3 className="text-[15px] font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-[13px] text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSnapshot;
