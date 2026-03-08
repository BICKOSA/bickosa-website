import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { CalendarDays, MapPin } from "lucide-react";

const filters = ["All", "Reunion", "AGM", "Sports", "Mentorship"];

const upcoming = [
  { title: "BICKOSA Annual General Meeting 2026", date: "April 15, 2026", day: "15", month: "APR", location: "BCK SSS Main Hall, Luzira", description: "Join fellow alumni for the annual gathering to review progress, elect leaders, and chart the way forward.", type: "AGM", featured: true },
  { title: "Class of 2005 Reunion", date: "May 22, 2026", day: "22", month: "MAY", location: "Kampala Serena Hotel", description: "A special reunion celebrating over 20 years since graduation.", type: "Reunion" },
  { title: "BICKOSA League Season 3", date: "June 8, 2026", day: "08", month: "JUN", location: "BCK Sports Ground", description: "The alumni football and basketball tournament returns.", type: "Sports" },
  { title: "School Founder's Day", date: "July 20, 2026", day: "20", month: "JUL", location: "BCK SSS Campus", description: "Celebrating the legacy of Bishop Cipriano Biyehima Kihangire.", type: "Milestone" },
];

const past = [
  { title: "BCK SSS Silver Jubilee (25 Years)", date: "2024", location: "BCK SSS Campus", description: "A landmark celebration marking 25 years." },
  { title: "BICKOSA League Season 2", date: "2024", location: "BCK Sports Ground", description: "13 teams competed in the alumni football competition." },
  { title: "BICKOSA League Launch", date: "2023", location: "BCK Sports Ground", description: "The first structured alumni football competition." },
  { title: "COVID-19 Relief Drive", date: "August 2020", location: "BCK SSS Staff Quarters", description: "Tree planting and urban backyard farming demonstration." },
];

const EventsPage = () => {
  const featured = upcoming.find((e) => e.featured);
  const others = upcoming.filter((e) => !e.featured);

  return (
    <Layout>
      <section className="page-hero">
        <div className="container-wide px-6 sm:px-8 lg:px-12">
          <div className="max-w-2xl">
            <p className="overline text-gold mb-5">Gatherings & Community</p>
            <h1 className="text-[40px] sm:text-[52px] lg:text-[56px] font-bold tracking-tight leading-[1.1] mb-6 text-primary-foreground">
              Events
            </h1>
            <p className="text-[17px] sm:text-[18px] leading-[1.65] text-primary-foreground/50">
              Reunions, AGMs, sports, mentorship sessions, and chapter meetups.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-background border-b border-border">
        <div className="container-wide px-6 sm:px-8 lg:px-12 py-5">
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <span key={f} className={`inline-flex items-center px-4 py-2 rounded-lg text-[13px] font-medium cursor-pointer transition-colors duration-150 ${f === "All" ? "bg-navy text-primary-foreground" : "bg-muted text-muted-foreground hover:text-foreground hover:bg-border"}`}>
                {f}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Featured */}
      {featured && (
        <section className="section-padding bg-background">
          <div className="container-wide">
            <div className="bg-navy rounded-xl p-8 sm:p-10">
              <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                <div className="flex-shrink-0 w-20 h-20 rounded-xl bg-coral/15 flex flex-col items-center justify-center">
                  <span className="text-[24px] font-bold text-coral leading-none">{featured.day}</span>
                  <span className="text-[12px] font-semibold text-coral/70 mt-0.5">{featured.month}</span>
                </div>
                <div className="flex-1">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-gold/15 text-[11px] font-semibold uppercase tracking-wider text-gold mb-3">
                    Featured · {featured.type}
                  </span>
                  <h2 className="text-[22px] sm:text-[26px] font-bold tracking-tight text-primary-foreground mb-3 leading-[1.15]">{featured.title}</h2>
                  <p className="text-[15px] leading-[1.7] text-primary-foreground/50 mb-5 max-w-lg">{featured.description}</p>
                  <div className="flex flex-wrap gap-5 text-[13px] text-primary-foreground/35">
                    <span className="flex items-center gap-1.5"><CalendarDays className="w-3.5 h-3.5" /> {featured.date}</span>
                    <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> {featured.location}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Upcoming */}
      <section className="section-padding section-alt">
        <div className="container-wide">
          <h2 className="text-[28px] sm:text-[32px] font-bold tracking-tight text-foreground leading-[1.15] mb-10">Upcoming events</h2>
          <div className="space-y-4">
            {others.map((e) => (
              <div key={e.title} className="bg-card border border-border rounded-xl p-6 hover:shadow-sm hover:border-border/80 transition-all duration-200 group">
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-coral/10 flex flex-col items-center justify-center">
                    <span className="text-[18px] font-bold text-coral leading-none">{e.day}</span>
                    <span className="text-[10px] font-semibold text-coral/60 mt-0.5">{e.month}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">{e.type}</span>
                    <h3 className="text-[16px] font-semibold text-foreground mt-1 mb-1.5 group-hover:text-cobalt transition-colors duration-150">{e.title}</h3>
                    <p className="text-[14px] text-muted-foreground leading-relaxed mb-2">{e.description}</p>
                    <span className="text-[12px] text-muted-foreground/60 flex items-center gap-1"><MapPin className="w-3 h-3" /> {e.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <h2 className="text-[28px] sm:text-[32px] font-bold tracking-tight text-foreground leading-[1.15] mb-10">Past events</h2>
          <div className="space-y-0 border-t border-border">
            {past.map((e) => (
              <div key={e.title} className="flex items-start gap-6 py-6 border-b border-border">
                <div className="w-[80px] flex-shrink-0">
                  <p className="text-[13px] font-bold text-gold">{e.date}</p>
                </div>
                <div>
                  <h3 className="text-[15px] font-semibold text-foreground mb-1.5">{e.title}</h3>
                  <p className="text-[14px] text-muted-foreground leading-relaxed mb-1">{e.description}</p>
                  <p className="text-[12px] text-muted-foreground/60 flex items-center gap-1"><MapPin className="w-3 h-3" /> {e.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12 py-16 text-center">
          <p className="text-[15px] text-primary-foreground/45 mb-5">Want to host an event with your chapter?</p>
          <Link to="/contact" className="inline-flex items-center h-11 px-6 text-[14px] font-semibold bg-gold text-navy rounded-lg hover:bg-gold-light transition-colors duration-150">
            Get in touch
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default EventsPage;
