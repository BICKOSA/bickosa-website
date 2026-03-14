import { Link } from "react-router-dom";
import { ArrowRight, Quote } from "lucide-react";

const stories = [
  {
    name: "Dr. Sarah Nakamya",
    cohort: "Class of 1995",
    role: "Medical Practitioner",
    excerpt: "BCK taught me resilience and compassion — values I carry into my medical practice every day.",
    tag: "Healthcare",
    accent: "bg-teal",
  },
  {
    name: "James Ssenyonga",
    cohort: "Class of 2003",
    role: "Entrepreneur & Community Leader",
    excerpt: "The friendships I made at BCK shaped my path in business. BICKOSA keeps those bonds alive.",
    tag: "Business",
    accent: "bg-cobalt",
  },
  {
    name: "Grace Namutebi",
    cohort: "Class of 2010",
    role: "Educator & Mentor",
    excerpt: "I returned to teach because BCK gave me everything. Through BICKOSA, I give back to the next generation.",
    tag: "Education",
    accent: "bg-coral",
  },
];

const AlumniStories = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-14">
          <div className="max-w-xl">
            <div className="gold-accent-bar" />
            <p className="text-[12px] font-semibold uppercase tracking-[0.15em] text-gold mb-4">Voices of BCK</p>
            <h2 className="text-[32px] sm:text-[38px] font-bold tracking-tight text-foreground leading-[1.12]">
              Stories from the Alumni Community
            </h2>
          </div>
          <Link to="/stories" className="inline-flex items-center gap-2 text-[14px] font-semibold text-cobalt hover:text-cobalt/80 transition-colors flex-shrink-0">
            All stories <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {stories.map((story) => (
            <div key={story.name} className="group bg-card border border-border rounded-xl p-8 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5">
              {/* Tag with accent color */}
              <div className="flex items-center gap-2 mb-6">
                <div className={`w-2 h-2 rounded-full ${story.accent}`} />
                <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">{story.tag}</span>
              </div>

              {/* Quote */}
              <div className="relative mb-6">
                <Quote className="w-5 h-5 text-gold/40 mb-2" />
                <p className="text-[15px] text-foreground/80 leading-[1.7]">{story.excerpt}</p>
              </div>

              {/* Author */}
              <div className="pt-5 border-t border-border">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center flex-shrink-0">
                    <span className="text-[13px] font-bold text-gold">{story.name[0]}</span>
                  </div>
                  <div>
                    <p className="text-[14px] font-semibold text-foreground">{story.name}</p>
                    <p className="text-[12px] text-muted-foreground">{story.role} · {story.cohort}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AlumniStories;
