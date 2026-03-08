import { Link } from "react-router-dom";
import { ArrowRight, CalendarDays, MapPin } from "lucide-react";

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
    <section className="section-padding bg-muted">
      <div className="container-wide">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-14">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-4">Stay Connected</p>
            <h2 className="text-3xl sm:text-[36px] font-bold tracking-tight text-foreground leading-[1.15]">
              Upcoming Events
            </h2>
          </div>
          <Link to="/events" className="inline-flex items-center gap-2 text-[14px] font-medium text-foreground hover:opacity-70 transition-opacity flex-shrink-0">
            All events <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="space-y-4">
          {featured && (
            <div className="rounded-lg p-8 sm:p-10 lg:p-12" style={{ background: "hsl(var(--navy))" }}>
              <p className="text-[12px] font-medium uppercase tracking-[0.12em] mb-4" style={{ color: "hsl(var(--gold))" }}>Featured Event</p>
              <h3 className="text-2xl sm:text-[28px] font-bold tracking-tight mb-3" style={{ color: "hsl(var(--primary-foreground))" }}>{featured.title}</h3>
              <p className="text-[15px] leading-relaxed mb-5 max-w-lg" style={{ color: "hsl(var(--primary-foreground) / 0.6)" }}>{featured.description}</p>
              <div className="flex flex-wrap gap-5 text-[13px]" style={{ color: "hsl(var(--primary-foreground) / 0.45)" }}>
                <span className="flex items-center gap-1.5"><CalendarDays className="w-3.5 h-3.5" /> {featured.date}</span>
                <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> {featured.location}</span>
              </div>
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-4">
            {others.map((event) => (
              <div key={event.title} className="bg-card border border-border rounded-lg p-6 sm:p-8">
                <h4 className="text-[15px] font-semibold text-foreground mb-2">{event.title}</h4>
                <p className="text-[14px] text-muted-foreground leading-relaxed mb-4">{event.description}</p>
                <div className="flex flex-wrap gap-4 text-[12px] text-muted-foreground">
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
