import { Link } from "react-router-dom";
import { ArrowRight, CalendarDays, MapPin } from "lucide-react";

const events = [
  {
    title: "BICKOSA Annual General Meeting 2026",
    date: "April 15, 2026",
    location: "BCK SSS Main Hall, Luzira",
    description: "Join fellow alumni for the annual gathering to review progress, elect leaders, and chart the way forward.",
    featured: true,
    type: "AGM",
  },
  {
    title: "Class of 2000 Reunion",
    date: "May 22, 2026",
    location: "Kampala Serena Hotel",
    description: "A special reunion celebrating 26 years since graduation.",
    type: "Reunion",
    accent: "bg-coral",
  },
  {
    title: "BICKOSA Community Football League",
    date: "June 8, 2026",
    location: "BCK Sports Ground",
    description: "Annual alumni football tournament bringing together teams across graduating classes.",
    type: "Sports",
    accent: "bg-teal",
  },
];

const EventsSection = () => {
  const featured = events.find((e) => e.featured);
  const others = events.filter((e) => !e.featured);

  return (
    <section className="section-padding bg-muted">
      <div className="container-wide">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-14">
          <div className="max-w-xl">
            <div className="gold-accent-bar" />
            <p className="text-[12px] font-semibold uppercase tracking-[0.15em] text-gold mb-4">Community Life</p>
            <h2 className="text-[32px] sm:text-[38px] font-bold tracking-tight text-foreground leading-[1.12]">
              Upcoming Events
            </h2>
          </div>
          <Link to="/events" className="inline-flex items-center gap-2 text-[14px] font-semibold text-cobalt hover:text-cobalt/80 transition-colors flex-shrink-0">
            All events <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="space-y-5">
          {featured && (
            <div className="relative rounded-xl overflow-hidden bg-navy p-8 sm:p-12">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold via-gold-light to-gold/0" />
              <div className="flex items-center gap-2 mb-5">
                <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-gold/15 text-[11px] font-semibold uppercase tracking-wider text-gold">
                  Featured · {featured.type}
                </span>
              </div>
              <h3 className="text-[24px] sm:text-[30px] font-bold tracking-tight text-primary-foreground mb-3 leading-[1.15]">{featured.title}</h3>
              <p className="text-[15px] leading-[1.7] text-primary-foreground/55 mb-6 max-w-lg">{featured.description}</p>
              <div className="flex flex-wrap gap-5 text-[13px] text-primary-foreground/40">
                <span className="flex items-center gap-1.5"><CalendarDays className="w-3.5 h-3.5" /> {featured.date}</span>
                <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> {featured.location}</span>
              </div>
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-5">
            {others.map((event) => (
              <div key={event.title} className="bg-card border border-border rounded-xl p-7 hover:shadow-sm transition-shadow group">
                <div className="flex items-center gap-2 mb-4">
                  <div className={`w-2 h-2 rounded-full ${event.accent}`} />
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">{event.type}</span>
                </div>
                <h4 className="text-[16px] font-semibold text-foreground mb-2 group-hover:text-cobalt transition-colors">{event.title}</h4>
                <p className="text-[14px] text-muted-foreground leading-relaxed mb-4">{event.description}</p>
                <div className="flex flex-wrap gap-4 text-[12px] text-muted-foreground/70">
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
