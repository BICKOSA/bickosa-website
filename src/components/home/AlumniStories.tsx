import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const stories = [
  {
    name: "Dr. Sarah Nakamya",
    cohort: "Class of 1995",
    role: "Medical Practitioner",
    excerpt: "BCK taught me resilience and compassion — values I carry into my medical practice every day.",
  },
  {
    name: "James Ssenyonga",
    cohort: "Class of 2003",
    role: "Entrepreneur & Community Leader",
    excerpt: "The friendships I made at BCK shaped my path in business. BICKOSA keeps those bonds alive.",
  },
  {
    name: "Grace Namutebi",
    cohort: "Class of 2010",
    role: "Educator & Mentor",
    excerpt: "I returned to teach because BCK gave me everything. Through BICKOSA, I give back to the next generation.",
  },
];

const AlumniStories = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-14">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-4">Voices of BCK</p>
            <h2 className="text-3xl sm:text-[36px] font-bold tracking-tight text-foreground leading-[1.15]">
              Stories from the Alumni Community
            </h2>
          </div>
          <Link to="/stories" className="inline-flex items-center gap-2 text-[14px] font-medium text-foreground hover:opacity-70 transition-opacity flex-shrink-0">
            All stories <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-px bg-border rounded-lg overflow-hidden">
          {stories.map((story) => (
            <div key={story.name} className="bg-card p-8 sm:p-10">
              <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center mb-6">
                <span className="text-sm font-semibold text-muted-foreground">{story.name[0]}</span>
              </div>
              <p className="text-[14px] text-muted-foreground leading-[1.7] italic mb-6">"{story.excerpt}"</p>
              <div>
                <p className="text-[14px] font-semibold text-foreground">{story.name}</p>
                <p className="text-[13px] text-muted-foreground mt-0.5">{story.role}</p>
                <p className="text-[12px] text-muted-foreground/60 mt-0.5">{story.cohort}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AlumniStories;
