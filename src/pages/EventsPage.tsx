import Layout from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { BentoCard } from "@/components/bento";
import { CalendarDays, MapPin } from "lucide-react";

const upcoming = [
  { title: "BICKOSA Annual General Meeting 2026", date: "May 24, 2026", location: "Bishop Cipriano Kihangire SS Day Section — Main Hall", description: "Join fellow alumni for the annual gathering to review progress, elect leaders, and chart the way forward.", type: "AGM", featured: true, accent: "bg-gold" },
];

const past: { title: string; date: string; location: string; description: string }[] = [];

const EventsPage = () => {
  const featured = upcoming.find((e) => e.featured);
  const others = upcoming.filter((e) => !e.featured);

  return (
    <Layout>
      <PageHero
        eyebrow="Gatherings & Community Life"
        title="Events"
        description="BICKOSA events bring the alumni community to life — from reunions and meetings to sports, celebrations, and shared moments."
      />

      {featured && (
        <section className="section">
          <div className="bento">
            <BentoCard variant="grad-navy" col={12} minHeight={200} className="min-h-0 relative">
              <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-[var(--radius-2xl)]" style={{ background: "linear-gradient(90deg, var(--gold-500), var(--gold-300))" }} aria-hidden />
              <span className="bc-tag bc-tag-gold mb-6">Featured · {featured.type}</span>
              <h2 className="bc-title xl on-dark mb-4">{featured.title}</h2>
              <p className="bc-text on-dark mb-6 max-w-lg">{featured.description}</p>
              <div className="flex flex-wrap gap-5 text-[13px]" style={{ color: "var(--navy-300)" }}>
                <span className="flex items-center gap-1.5"><CalendarDays className="w-3.5 h-3.5" /> {featured.date}</span>
                <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> {featured.location}</span>
              </div>
            </BentoCard>
          </div>
        </section>
      )}

      {others.length > 0 && (
      <section className="section">
        <p className="section-eyebrow">Calendar</p>
        <h2 className="section-heading">Upcoming Events</h2>
        <div className="bento">
          {others.map((e) => (
            <BentoCard key={e.title} variant="white" col={6} minHeight={180} className="min-h-0">
              <div className="flex items-start gap-4">
                <div className={`w-2 h-full min-h-[60px] rounded-full ${e.accent} flex-shrink-0 mt-1`} />
                <div className="flex-1">
                  <div className="bc-eyebrow">{e.type}</div>
                  <h3 className="bc-title mb-2" style={{ fontSize: "1rem" }}>{e.title}</h3>
                  <p className="bc-text sm mb-3">{e.description}</p>
                  <div className="flex flex-wrap gap-4 text-[12px]" style={{ color: "var(--text-muted)" }}>
                    <span className="flex items-center gap-1"><CalendarDays className="w-3 h-3" /> {e.date}</span>
                    <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {e.location}</span>
                  </div>
                </div>
              </div>
            </BentoCard>
          ))}
        </div>
      </section>
      )}

      {past.length > 0 && (
      <section className="section">
        <p className="section-eyebrow">History</p>
        <h2 className="section-heading">Past Events</h2>
        <div className="rounded-bento-2xl overflow-hidden border" style={{ borderColor: "var(--border)", background: "var(--white)" }}>
          <div className="divide-y" style={{ borderColor: "var(--border)" }}>
            {past.map((e) => (
              <div key={e.title} className="grid grid-cols-[1fr] sm:grid-cols-[100px_1fr] gap-4 sm:gap-8 py-7 px-6 sm:px-8">
                <div>
                  <p className="text-[13px] font-bold" style={{ color: "var(--gold-600)" }}>{e.date}</p>
                </div>
                <div>
                  <h3 className="text-[15px] font-semibold mb-2" style={{ color: "var(--navy-900)" }}>{e.title}</h3>
                  <p className="text-[14px] leading-relaxed mb-2" style={{ color: "var(--text-secondary)" }}>{e.description}</p>
                  <p className="text-[12px] flex items-center gap-1" style={{ color: "var(--text-muted)" }}><MapPin className="w-3 h-3" /> {e.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      )}
    </Layout>
  );
};

export default EventsPage;
