import { Link } from "react-router-dom";
import { ArrowRight, Quote } from "lucide-react";

const stories = [
  {
    name: "Teopista Nabakiibi",
    cohort: "O-Level & A-Level at BCK",
    role: "Law Student & Social Initiative Founder",
    excerpt: "With scholarship support tied to Fr. Scalabrini's educational initiatives, she went on to pursue law and founded a social initiative empowering young people.",
    tag: "Leadership",
    accent: "bg-cobalt",
  },
  {
    name: "James Ssenyonga",
    cohort: "Class of 2003",
    role: "Entrepreneur & Community Leader",
    excerpt: "The friendships I made at BCK shaped my path in business. BICKOSA keeps those bonds alive.",
    tag: "Business",
    accent: "bg-teal",
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
            <p className="overline text-teal mb-4">Alumni Spotlight</p>
            <h2 className="text-[32px] sm:text-[40px] font-bold tracking-tight text-foreground leading-[1.15]">
              Faces of the community
            </h2>
          </div>
          <Link to="/stories" className="inline-flex items-center gap-2 text-[14px] font-semibold text-cobalt hover:text-cobalt-light transition-colors duration-150 flex-shrink-0">
            All stories <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {stories.map((story) => (
            <div key={story.name} className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-md hover:border-border/80 transition-all duration-200">
              {/* Top accent bar */}
              <div className={`h-1 ${story.accent}`} />
              <div className="p-7">
                <div className="flex items-center gap-2 mb-5">
                  <span className="text-[12px] font-medium text-muted-foreground bg-muted px-2.5 py-1 rounded-md">{story.tag}</span>
                </div>

                <div className="mb-5">
                  <Quote className="w-4 h-4 text-gold/40 mb-2" />
                  <p className="text-[15px] text-foreground/75 leading-[1.7]">{story.excerpt}</p>
                </div>

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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AlumniStories;
