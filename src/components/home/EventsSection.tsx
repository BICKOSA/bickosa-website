import { Link } from "react-router-dom";
import { ArrowRight, CalendarDays, MapPin } from "lucide-react";

const events = [
  {
    title: "BICKOSA Annual General Meeting 2026",
    date: "April 15, 2026",
    day: "15",
    month: "APR",
    location: "BCK SSS Main Hall, Luzira",
    description: "Join fellow alumni for the annual gathering to review progress, elect leaders, and chart the way forward.",
    featured: true,
    type: "AGM",
  },
  {
    title: "Class of 2000 Reunion",
    date: "May 22, 2026",
    day: "22",
    month: "MAY",
    location: "Kampala Serena Hotel",
    description: "A special reunion celebrating 26 years since graduation.",
    type: "Reunion",
  },
  {
    title: "BICKOSA Community Football League",
    date: "June 8, 2026",
    day: "08",
    month: "JUN",
    location: "BCK Sports Ground",
    description: "Annual alumni football tournament bringing together teams across graduating classes.",
    type: "Sports",
  },
];

const EventsSection = () => {
  const featured = events.find((e) => e.featured);
  const others = events.filter((e) => !e.featured);

  return (
    <section className="section-padding section-alt">
      <div className="container-wide">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-14">
          <div className="max-w-xl">
            <p className="overline text-coral mb-4">Events</p>
            <h2 className="text-[32px] sm:text-[40px] font-bold tracking-tight text-foreground leading-[1.15]">
              Next event near you
            </h2>
          </div>
          <Link to="/events" className="inline-flex items-center gap-2 text-[14px] font-semibold text-cobalt hover:text-cobalt-light transition-colors duration-150 flex-shrink-0">
            All events <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="space-y-4">
          {featured && (
            <div className="relative rounded-xl overflow-hidden bg-navy p-8 sm:p-10">
              <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                {/* Date block */}
                <div className="flex-shrink-0 w-20 h-20 rounded-xl bg-coral/15 flex flex-col items-center justify-center">
                  <span className="text-[24px] font-bold text-coral leading-none">{featured.day}</span>
                  <span className="text-[12px] font-semibold text-coral/70 mt-0.5">{featured.month}</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-gold/15 text-[11px] font-semibold uppercase tracking-wider text-gold">
                      Featured · {featured.type}
                    </span>
                  </div>
                  <h3 className="text-[22px] sm:text-[26px] font-bold tracking-tight text-primary-foreground mb-3 leading-[1.15]">{featured.title}</h3>
                  <p className="text-[15px] leading-[1.7] text-primary-foreground/50 mb-5 max-w-lg">{featured.description}</p>
                  <div className="flex flex-wrap gap-5 text-[13px] text-primary-foreground/35">
                    <span className="flex items-center gap-1.5"><CalendarDays className="w-3.5 h-3.5" /> {featured.date}</span>
                    <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> {featured.location}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-4">
            {others.map((event) => (
              <div key={event.title} className="bg-card border border-border rounded-xl p-6 hover:shadow-sm hover:border-border/80 transition-all duration-200 group">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-coral/10 flex flex-col items-center justify-center">
                    <span className="text-[18px] font-bold text-coral leading-none">{event.day}</span>
                    <span className="text-[10px] font-semibold text-coral/60 mt-0.5">{event.month}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">{event.type}</span>
                    <h4 className="text-[15px] font-semibold text-foreground mt-1 mb-1.5 group-hover:text-cobalt transition-colors duration-150">{event.title}</h4>
                    <p className="text-[13px] text-muted-foreground leading-relaxed mb-3">{event.description}</p>
                    <div className="flex flex-wrap gap-3 text-[12px] text-muted-foreground/60">
                      <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {event.location}</span>
                    </div>
                  </div>
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
