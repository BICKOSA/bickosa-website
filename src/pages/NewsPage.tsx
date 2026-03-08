import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

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
      <section className="page-hero">
        <div className="container-wide px-6 sm:px-8 lg:px-12">
          <div className="max-w-xl">
            <div className="gold-accent-bar" />
            <p className="text-[12px] font-semibold uppercase tracking-[0.15em] mb-5 text-gold">Stay Informed</p>
            <h1 className="text-[42px] sm:text-[52px] font-extrabold tracking-tight leading-[1.06] mb-5 text-primary-foreground">News & Updates</h1>
            <p className="text-[16px] leading-[1.7] text-primary-foreground/55">
              Follow the latest from BICKOSA and the wider BCK community.
            </p>
          </div>
        </div>
      </section>

      {featured && (
        <section className="section-padding bg-background">
          <div className="container-wide">
            <div className="relative bg-navy rounded-xl p-8 sm:p-12 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold via-gold-light to-gold/0" />
              <div className="flex items-center gap-2 mb-5">
                <div className="w-2 h-2 rounded-full bg-gold" />
                <span className="text-[11px] font-semibold uppercase tracking-wider text-gold/70">{featured.category}</span>
              </div>
              <h2 className="text-[26px] sm:text-[32px] font-bold tracking-tight leading-[1.12] mb-4 text-primary-foreground">{featured.title}</h2>
              <p className="text-[15px] leading-[1.75] mb-4 max-w-xl text-primary-foreground/55">{featured.excerpt}</p>
              <p className="text-[12px] text-primary-foreground/30">{featured.date}</p>
            </div>
          </div>
        </section>
      )}

      <section className="section-padding bg-muted">
        <div className="container-wide">
          <div className="space-y-4">
            {others.map((a) => (
              <article key={a.title} className="bg-card border border-border rounded-xl p-7 hover:shadow-sm transition-shadow group">
                <div className="grid grid-cols-[1fr] sm:grid-cols-[100px_1fr] gap-4 sm:gap-8">
                  <div>
                    <p className="text-[12px] font-medium text-muted-foreground">{a.date}</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className={`w-2 h-2 rounded-full ${a.accent}`} />
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">{a.category}</span>
                    </div>
                    <h3 className="text-[16px] font-semibold text-foreground leading-snug mb-2 group-hover:text-cobalt transition-colors">{a.title}</h3>
                    <p className="text-[14px] text-muted-foreground leading-[1.65]">{a.excerpt}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide text-center max-w-lg">
          <h2 className="text-[28px] font-bold tracking-tight text-foreground mb-4">Looking for Older Updates?</h2>
          <p className="text-[15px] text-muted-foreground leading-[1.75] mb-8">Browse previous announcements, milestones, and archived community updates.</p>
          <Link to="/archive" className="inline-flex items-center gap-2 h-11 px-6 text-[14px] font-medium text-foreground border border-border rounded-md hover:bg-muted transition-colors">
            Browse Archive <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default NewsPage;
