import Layout from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { BentoCard } from "@/components/bento";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import heroCampus2 from "@/assets/hero-campus-2.png";

const articles = [
  { category: "Association News", title: "BICKOSA Executive Committee Announces 2026 Agenda", excerpt: "Key priorities include school infrastructure support, alumni engagement expansion, and the launch of a digital alumni platform.", date: "March 1, 2026", featured: true, accent: "bg-cobalt" },
  { category: "School Updates", title: "BCK SSS Records Outstanding UNEB Results", excerpt: "The school continues its tradition of academic excellence with impressive performance in the 2025 national examinations.", date: "February 18, 2026", accent: "bg-teal" },
  { category: "Alumni Achievements", title: "BCK Alumnus Appointed to National Health Advisory Board", excerpt: "Dr. Peter Lubega, Class of 1998, has been appointed to serve on the national health policy advisory committee.", date: "February 5, 2026", accent: "bg-coral" },
  { category: "Event Recaps", title: "BICKOSA Annual Reunion Draws Record Attendance", excerpt: "Over 500 alumni gathered for the 2025 end-of-year reunion, celebrating community and shared heritage.", date: "January 15, 2026", accent: "bg-gold" },
  { category: "Tributes", title: "Remembering Mr. Joseph Kato — Teacher, Mentor, Legend", excerpt: "The BCK community mourns the passing of a beloved teacher who shaped generations of students.", date: "January 3, 2026", accent: "bg-cobalt" },
  { category: "Announcements", title: "BICKOSA Website Launch & Digital Expansion", excerpt: "The association launches its official website as part of a broader digital engagement strategy.", date: "December 20, 2025", accent: "bg-teal" },
];

const NewsPage = () => {
  const featured = articles.find((a) => a.featured);
  const others = articles.filter((a) => !a.featured);

  return (
    <Layout>
      <PageHero
        eyebrow="Stay Informed"
        title="News & Updates"
        description="Follow the latest from BICKOSA and the wider BCK community."
        image={heroCampus2}
      />

      {featured && (
        <section className="section">
          <div className="bento">
            <BentoCard variant="grad-navy" col={12} minHeight={200} className="min-h-0 relative">
              <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-[var(--radius-2xl)]" style={{ background: "linear-gradient(90deg, var(--gold-500), var(--gold-300))" }} aria-hidden />
              <div className="bc-eyebrow" style={{ color: "var(--gold-400)" }}>{featured.category}</div>
              <h2 className="bc-title xl on-dark mb-4">{featured.title}</h2>
              <p className="bc-text on-dark mb-4 max-w-xl">{featured.excerpt}</p>
              <p className="text-[12px]" style={{ color: "var(--navy-300)" }}>{featured.date}</p>
            </BentoCard>
          </div>
        </section>
      )}

      <section className="section">
        <p className="section-eyebrow">Latest</p>
        <h2 className="section-heading">News & Announcements</h2>
        <div className="bento">
          {others.map((a) => (
            <BentoCard key={a.title} variant="white" col={6} minHeight={160} className="min-h-0">
              <div className="grid grid-cols-[1fr] sm:grid-cols-[100px_1fr] gap-4 sm:gap-8">
                <div>
                  <p className="text-[12px] font-medium" style={{ color: "var(--text-muted)" }}>{a.date}</p>
                </div>
                <div>
                  <div className="bc-eyebrow">{a.category}</div>
                  <h3 className="bc-title mb-2" style={{ fontSize: "1rem" }}>{a.title}</h3>
                  <p className="bc-text sm">{a.excerpt}</p>
                </div>
              </div>
            </BentoCard>
          ))}
        </div>
      </section>

      <section className="section text-center max-w-lg mx-auto">
        <p className="section-eyebrow">Archive</p>
        <h2 className="section-heading">Looking for Older Updates?</h2>
        <p className="section-sub mb-8">Browse previous announcements, milestones, and archived community updates.</p>
        <Link to="/archive" className="bc-btn bc-btn-outline inline-flex items-center gap-2">
          Browse Archive <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </Layout>
  );
};

export default NewsPage;
