import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import heroImg from "@/assets/school-courtyard.png";

const AboutSnapshot = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <div>
            <div className="gold-accent-bar" />
            <p className="text-[12px] font-semibold uppercase tracking-[0.15em] text-gold mb-4">Who We Are</p>
            <h2 className="text-[32px] sm:text-[38px] font-bold tracking-tight text-foreground leading-[1.12] mb-6">
              A Community Built on Shared Roots
            </h2>
            <p className="text-[16px] text-muted-foreground leading-[1.75] mb-4">
              BICKOSA brings together former students of Bishop Cipriano Kihangire Senior Secondary School under one shared home — a space for connection, memory, collaboration, and contribution.
            </p>
            <p className="text-[15px] text-muted-foreground leading-[1.75] mb-8">
              Through events, storytelling, community engagement, and support for school-focused initiatives, BICKOSA helps preserve the spirit of BCK while creating room for future impact.
            </p>

            {/* Pull quote */}
            <div className="border-l-2 border-gold pl-5 mb-8">
              <p className="serif-heading text-[17px] text-foreground/80 leading-[1.6]">
                "What makes us strong is not where we are today, but where we come from — and the bond that holds us together."
              </p>
            </div>

            <Link to="/about" className="inline-flex items-center gap-2 text-[14px] font-semibold text-cobalt hover:text-cobalt/80 transition-colors">
              Learn more about BICKOSA <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img src={heroImg} alt="BCK SSS Community" className="w-full aspect-[4/3] object-cover" />
            </div>
            {/* Overlaid stat card */}
            <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-navy rounded-lg p-5 shadow-xl">
              <p className="text-[28px] font-bold text-gold tracking-tight">25+</p>
              <p className="text-[12px] text-primary-foreground/60 mt-0.5">Years of<br />alumni community</p>
            </div>
          </div>
        </div>

        {/* Values grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-20 pt-16 border-t border-border">
          {[
            { title: "Unity", desc: "Bound by shared experience", icon: "🤝" },
            { title: "Service", desc: "Giving back to school & community", icon: "💛" },
            { title: "Legacy", desc: "Preserving heritage across generations", icon: "🏫" },
            { title: "Pride", desc: "Proudly BCK, proudly BICKOSA", icon: "⭐" },
          ].map((item) => (
            <div key={item.title} className="group">
              <span className="text-2xl mb-3 block">{item.icon}</span>
              <h3 className="text-[15px] font-semibold text-foreground mb-1.5">{item.title}</h3>
              <p className="text-[13px] text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSnapshot;
