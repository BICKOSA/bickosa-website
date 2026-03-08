import Layout from "@/components/Layout";
import { CalendarDays, MapPin } from "lucide-react";

const upcoming = [
  { title: "BICKOSA Annual General Meeting 2026", date: "April 15, 2026", location: "BCK SSS Main Hall, Luzira", description: "Join fellow alumni for the annual gathering to review progress, elect leaders, and chart the way forward.", type: "AGM", featured: true, accent: "bg-gold" },
  { title: "Class of 2005 Reunion", date: "May 22, 2026", location: "Kampala Serena Hotel", description: "A special reunion celebrating over 20 years since graduation.", type: "Reunion", accent: "bg-coral" },
  { title: "BICKOSA League Season 3", date: "June 8, 2026", location: "BCK Sports Ground", description: "The alumni football and basketball tournament returns, building on the success of 13 teams in Season 2.", type: "Sports", accent: "bg-teal" },
  { title: "School Founder's Day Celebration", date: "July 20, 2026", location: "BCK SSS Campus", description: "Celebrating the legacy of Bishop Cipriano Biyehima Kihangire and the vision of Fr. John Scalabrini.", type: "Milestone", accent: "bg-cobalt" },
];

const past = [
  { title: "BCK SSS Silver Jubilee (25 Years)", date: "2024", location: "BCK SSS Campus", description: "A landmark celebration marking 25 years since the school's founding in 1999, including fundraising toward a new academic block." },
  { title: "BICKOSA League Season 2", date: "2024", location: "BCK Sports Ground", description: "13 teams competed in the structured alumni football competition." },
  { title: "BICKOSA League Launch", date: "2023", location: "BCK Sports Ground", description: "The Old Students Association launched its first structured alumni football competition." },
  { title: "BICKOSA COVID-19 Relief Drive", date: "August 22, 2020", location: "BCK SSS Staff Quarters", description: "Alumni organized a relief drive including tree planting and urban backyard farming demonstration." },
];

const EventsPage = () => {
  const featured = upcoming.find((e) => e.featured);
  const others = upcoming.filter((e) => !e.featured);

  return (
    <Layout>
      <section className="page-hero">
        <div className="container-wide px-6 sm:px-8 lg:px-12">
          <div className="max-w-xl">
            <div className="gold-accent-bar" />
            <p className="text-[12px] font-semibold uppercase tracking-[0.15em] mb-5 text-gold">Gatherings & Community Life</p>
            <h1 className="text-[42px] sm:text-[52px] font-extrabold tracking-tight leading-[1.06] mb-5 text-primary-foreground">Events</h1>
            <p className="text-[16px] leading-[1.7] text-primary-foreground/55">
              BICKOSA events bring the alumni community to life — from reunions and meetings to sports, celebrations, and shared moments.
            </p>
          </div>
        </div>
      </section>

      {featured && (
        <section className="section-padding bg-background">
          <div className="container-wide">
            <div className="relative bg-navy rounded-xl p-8 sm:p-12 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold via-gold-light to-gold/0" />
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold/10 border border-gold/20 mb-6">
                <span className="w-2 h-2 rounded-full bg-gold" />
                <span className="text-[11px] font-semibold uppercase tracking-wider text-gold">Featured · {featured.type}</span>
              </div>
              <h2 className="text-[26px] sm:text-[32px] font-bold tracking-tight leading-[1.12] mb-4 text-primary-foreground">{featured.title}</h2>
              <p className="text-[15px] leading-[1.75] mb-6 max-w-lg text-primary-foreground/55">{featured.description}</p>
              <div className="flex flex-wrap gap-5 text-[13px] text-primary-foreground/40">
                <span className="flex items-center gap-1.5"><CalendarDays className="w-3.5 h-3.5" /> {featured.date}</span>
                <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> {featured.location}</span>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="section-padding bg-muted">
        <div className="container-wide">
          <h2 className="text-[30px] sm:text-[34px] font-bold tracking-tight text-foreground leading-[1.15] mb-10">Upcoming Events</h2>
          <div className="space-y-4">
            {others.map((e) => (
              <div key={e.title} className="bg-card border border-border rounded-xl p-7 hover:shadow-sm transition-shadow group">
                <div className="flex items-start gap-4">
                  <div className={`w-2 h-full min-h-[60px] rounded-full ${e.accent} flex-shrink-0 mt-1`} />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">{e.type}</span>
                    </div>
                    <h3 className="text-[16px] font-semibold text-foreground mb-2 group-hover:text-cobalt transition-colors">{e.title}</h3>
                    <p className="text-[14px] text-muted-foreground leading-relaxed mb-3">{e.description}</p>
                    <div className="flex flex-wrap gap-4 text-[12px] text-muted-foreground/70">
                      <span className="flex items-center gap-1"><CalendarDays className="w-3 h-3" /> {e.date}</span>
                      <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {e.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide">
          <h2 className="text-[30px] sm:text-[34px] font-bold tracking-tight text-foreground leading-[1.15] mb-10">Past Events</h2>
          <div className="space-y-0 border-t border-border">
            {past.map((e) => (
              <div key={e.title} className="grid grid-cols-[1fr] sm:grid-cols-[100px_1fr] gap-4 sm:gap-8 py-7 border-b border-border">
                <div>
                  <p className="text-[13px] font-bold text-gold">{e.date}</p>
                </div>
                <div>
                  <h3 className="text-[15px] font-semibold text-foreground mb-2">{e.title}</h3>
                  <p className="text-[14px] text-muted-foreground leading-relaxed mb-2">{e.description}</p>
                  <p className="text-[12px] text-muted-foreground/60 flex items-center gap-1"><MapPin className="w-3 h-3" /> {e.location}</p>
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
