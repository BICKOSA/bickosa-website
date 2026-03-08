import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CalendarDays, MapPin, ArrowRight } from "lucide-react";

const events = [
  {
    title: "BICKOSA Annual General Meeting 2026",
    date: "April 15, 2026",
    location: "BCK SSS Main Hall, Luzira",
    description: "Join fellow alumni for the annual gathering to review progress, elect leaders, and chart the way forward.",
    featured: true,
  },
  {
    title: "Class of 2000 Reunion",
    date: "May 22, 2026",
    location: "Kampala Serena Hotel",
    description: "A special reunion celebrating 26 years since graduation.",
  },
  {
    title: "BICKOSA Community Football League",
    date: "June 8, 2026",
    location: "BCK Sports Ground",
    description: "Annual alumni football tournament bringing together teams across graduating classes.",
  },
];

const EventsSection = () => {
  const featured = events.find((e) => e.featured);
  const others = events.filter((e) => !e.featured);

  return (
    <section className="section-padding bg-card">
      <div className="container-wide">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-12">
          <div>
            <span className="text-secondary text-sm font-semibold tracking-widest uppercase">Stay Connected</span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mt-3">
              Upcoming Events
            </h2>
            <p className="text-muted-foreground mt-3 max-w-2xl">
              BICKOSA stays alive through gatherings, celebrations, sports, meetings, and moments of reconnection. Explore what is coming up and be part of the next chapter.
            </p>
          </div>
          <Button asChild variant="outline">
            <Link to="/events">See All Events <ArrowRight className="ml-2 w-4 h-4" /></Link>
          </Button>
        </div>

        <div className="grid lg:grid-cols-5 gap-6">
          {featured && (
            <div className="lg:col-span-3 rounded-2xl overflow-hidden gradient-hero p-8 sm:p-10 flex flex-col justify-end min-h-[320px]" style={{ color: "hsl(var(--primary-foreground))" }}>
              <span className="text-xs font-semibold tracking-wider uppercase mb-3" style={{ color: "hsl(var(--gold))" }}>Featured Event</span>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold mb-4">{featured.title}</h3>
              <p className="opacity-80 text-sm mb-4 max-w-lg">{featured.description}</p>
              <div className="flex flex-wrap gap-4 text-sm opacity-70">
                <span className="flex items-center gap-1"><CalendarDays className="w-4 h-4" /> {featured.date}</span>
                <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {featured.location}</span>
              </div>
            </div>
          )}

          <div className="lg:col-span-2 flex flex-col gap-4">
            {others.map((event) => (
              <div key={event.title} className="bento-card flex-1">
                <h4 className="font-heading text-lg font-semibold text-foreground mb-2">{event.title}</h4>
                <p className="text-muted-foreground text-sm mb-3">{event.description}</p>
                <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><CalendarDays className="w-3 h-3" /> {event.date}</span>
                  <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {event.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
