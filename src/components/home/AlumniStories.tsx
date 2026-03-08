import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
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
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-12">
          <div>
            <span className="text-secondary text-sm font-semibold tracking-widest uppercase">Voices of BCK</span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mt-3">
              Featured Alumni Stories
            </h2>
          </div>
          <Button asChild variant="outline">
            <Link to="/stories">View All Stories <ArrowRight className="ml-2 w-4 h-4" /></Link>
          </Button>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {stories.map((story) => (
            <div key={story.name} className="bento-card group cursor-pointer">
              <div className="w-16 h-16 rounded-full bg-muted mb-4 flex items-center justify-center">
                <span className="text-2xl font-heading font-bold text-muted-foreground">{story.name[0]}</span>
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-1">{story.name}</h3>
              <p className="text-secondary text-sm font-medium mb-1">{story.role}</p>
              <p className="text-muted-foreground text-xs mb-3">{story.cohort}</p>
              <p className="text-muted-foreground text-sm leading-relaxed italic">"{story.excerpt}"</p>
              <Link to="/stories" className="inline-flex items-center text-secondary text-sm font-medium mt-4 group-hover:underline">
                Read Story <ArrowRight className="ml-1 w-3 h-3" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AlumniStories;
