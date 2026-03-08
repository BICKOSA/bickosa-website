import Layout from "@/components/Layout";
import { CalendarDays, MapPin } from "lucide-react";

const upcoming = [
  { title: "BICKOSA Annual General Meeting 2026", date: "April 15, 2026", location: "BCK SSS Main Hall, Luzira", description: "Join fellow alumni for the annual gathering to review progress, elect leaders, and chart the way forward.", type: "AGM", featured: true },
  { title: "Class of 2000 Reunion", date: "May 22, 2026", location: "Kampala Serena Hotel", description: "A special reunion celebrating 26 years since graduation.", type: "Reunion" },
  { title: "BICKOSA Community Football League", date: "June 8, 2026", location: "BCK Sports Ground", description: "Annual alumni football tournament.", type: "Sports" },
  { title: "School Founder's Day Celebration", date: "July 20, 2026", location: "BCK SSS Campus", description: "Celebrating the legacy of Bishop Cipriano Kihangire.", type: "Milestone" },
];

const past = [
  { title: "2025 End-of-Year Alumni Reunion", date: "December 14, 2025", location: "BCK SSS", description: "Over 500 alumni gathered for celebration and fellowship." },
  { title: "BICKOSA Charity Run 2025", date: "October 5, 2025", location: "Kampala", description: "Alumni raised funds for school infrastructure through a 10km charity run." },
];

const eventTypes = [
  "Reunions", "Annual Meetings", "Sports Activities", "Fundraising Gatherings", "Milestone Celebrations", "School-Focused Activities", "Community Outreach"
];

const EventsPage = () => {
  const featured = upcoming.find((e) => e.featured);
  const others = upcoming.filter((e) => !e.featured);

  return (
    <Layout>
      <section className="gradient-hero py-20 sm:py-28">
        <div className="container-wide px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "hsl(var(--gold))" }}>Gatherings & Community Life</p>
            <h1 className="text-4xl sm:text-5xl font-heading font-bold mb-6" style={{ color: "hsl(var(--primary-foreground))" }}>Events</h1>
            <p className="text-lg" style={{ color: "hsl(var(--primary-foreground) / 0.8)" }}>
              BICKOSA events bring the alumni community to life — from reunions and meetings to sports, celebrations, outreach, and shared moments that keep the association active.
            </p>
          </div>
        </div>
      </section>

      {featured && (
        <section className="section-padding bg-background">
          <div className="container-wide">
            <span className="text-secondary text-sm font-semibold tracking-widest uppercase">Featured Event</span>
            <div className="bento-card gradient-hero mt-4 p-8 sm:p-12 min-h-[280px] flex flex-col justify-end" style={{ color: "hsl(var(--primary-foreground))" }}>
              <span className="text-xs font-semibold tracking-wider uppercase mb-2" style={{ color: "hsl(var(--gold))" }}>{featured.type}</span>
              <h2 className="font-heading text-3xl font-bold mb-4">{featured.title}</h2>
              <p className="opacity-80 mb-4 max-w-xl">{featured.description}</p>
              <div className="flex flex-wrap gap-4 text-sm opacity-70">
                <span className="flex items-center gap-1"><CalendarDays className="w-4 h-4" /> {featured.date}</span>
                <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {featured.location}</span>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="section-padding bg-card">
        <div className="container-wide">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-3">Upcoming Events</h2>
          <p className="text-muted-foreground mb-8">Explore what is coming up and take part in the next chapter of the BICKOSA community.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {others.map((e) => (
              <div key={e.title} className="bento-card">
                <span className="text-xs font-semibold tracking-wider uppercase text-accent">{e.type}</span>
                <h3 className="font-heading text-lg font-semibold text-foreground mt-2 mb-3">{e.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{e.description}</p>
                <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><CalendarDays className="w-3 h-3" /> {e.date}</span>
                  <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {e.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="section-padding bg-background">
        <div className="container-wide max-w-3xl">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-4">The Kinds of Moments That Bring Us Together</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            BICKOSA events may include reunions, annual meetings, sports activities, fundraising gatherings, milestone celebrations, school-focused activities, and community outreach efforts.
          </p>
          <div className="flex flex-wrap gap-2">
            {eventTypes.map((t) => (
              <span key={t} className="px-4 py-2 rounded-full text-sm font-medium bg-muted text-muted-foreground">{t}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-card">
        <div className="container-wide">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-3">Past Events & Highlights</h2>
          <p className="text-muted-foreground mb-8">
            Every event becomes part of the BICKOSA story. Explore recaps, highlights, and photo moments from gatherings that have strengthened the community over time.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {past.map((e) => (
              <div key={e.title} className="bento-card">
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{e.title}</h3>
                <p className="text-muted-foreground text-sm mb-3">{e.description}</p>
                <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><CalendarDays className="w-3 h-3" /> {e.date}</span>
                  <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {e.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default EventsPage;
