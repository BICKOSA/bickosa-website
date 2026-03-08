import Layout from "@/components/Layout";
import { CalendarDays, MapPin } from "lucide-react";

const upcoming = [
  { title: "BICKOSA Annual General Meeting 2026", date: "April 15, 2026", location: "BCK SSS Main Hall, Luzira", description: "Join fellow alumni for the annual gathering to review progress, elect leaders, and chart the way forward.", type: "AGM", featured: true },
  { title: "Class of 2005 Reunion", date: "May 22, 2026", location: "Kampala Serena Hotel", description: "A special reunion celebrating over 20 years since graduation.", type: "Reunion" },
  { title: "BICKOSA League Season 3", date: "June 8, 2026", location: "BCK Sports Ground", description: "The alumni football and basketball tournament returns, building on the success of 13 teams in Season 2.", type: "Sports" },
  { title: "School Founder's Day Celebration", date: "July 20, 2026", location: "BCK SSS Campus", description: "Celebrating the legacy of Bishop Cipriano Biyehima Kihangire and the vision of Fr. John Scalabrini.", type: "Milestone" },
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
            <p className="text-[12px] font-medium uppercase tracking-[0.15em] mb-5" style={{ color: "hsl(var(--gold))" }}>Gatherings & Community Life</p>
            <h1 className="text-[40px] sm:text-[48px] font-bold tracking-tight leading-[1.08] mb-5" style={{ color: "hsl(var(--primary-foreground))" }}>Events</h1>
            <p className="text-[16px] leading-[1.65]" style={{ color: "hsl(var(--primary-foreground) / 0.55)" }}>
              BICKOSA events bring the alumni community to life — from reunions and meetings to sports, celebrations, and shared moments.
            </p>
          </div>
        </div>
      </section>

      {featured && (
        <section className="section-padding bg-background">
          <div className="container-wide">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-4">Featured Event</p>
            <div className="rounded-lg p-8 sm:p-12" style={{ background: "hsl(var(--navy))" }}>
              <p className="text-[11px] font-medium uppercase tracking-[0.12em] mb-4" style={{ color: "hsl(var(--gold))" }}>{featured.type}</p>
              <h2 className="text-[24px] sm:text-[28px] font-bold tracking-tight leading-[1.15] mb-4" style={{ color: "hsl(var(--primary-foreground))" }}>{featured.title}</h2>
              <p className="text-[15px] leading-[1.7] mb-5 max-w-lg" style={{ color: "hsl(var(--primary-foreground) / 0.6)" }}>{featured.description}</p>
              <div className="flex flex-wrap gap-5 text-[13px]" style={{ color: "hsl(var(--primary-foreground) / 0.4)" }}>
                <span className="flex items-center gap-1.5"><CalendarDays className="w-3.5 h-3.5" /> {featured.date}</span>
                <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> {featured.location}</span>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="section-padding bg-muted">
        <div className="container-wide">
          <h2 className="text-[28px] sm:text-[32px] font-bold tracking-tight text-foreground leading-[1.15] mb-10">Upcoming Events</h2>
          <div className="border-t border-border">
            {others.map((e) => (
              <div key={e.title} className="py-7 border-b border-border">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.12em] mb-2" style={{ color: "hsl(var(--gold))" }}>{e.type}</p>
                    <h3 className="text-[16px] font-semibold text-foreground mb-2">{e.title}</h3>
                    <p className="text-[14px] text-muted-foreground leading-relaxed mb-3">{e.description}</p>
                    <div className="flex flex-wrap gap-4 text-[12px] text-muted-foreground">
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
          <h2 className="text-[28px] sm:text-[32px] font-bold tracking-tight text-foreground leading-[1.15] mb-10">Past Events</h2>
          <div className="border-t border-border">
            {past.map((e) => (
              <div key={e.title} className="grid grid-cols-[1fr] sm:grid-cols-[100px_1fr] gap-4 sm:gap-8 py-7 border-b border-border">
                <div>
                  <p className="text-[13px] font-medium text-muted-foreground">{e.date}</p>
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
