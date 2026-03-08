import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const articles = [
  { category: "Association News", title: "BICKOSA Executive Committee Announces 2026 Agenda", excerpt: "Key priorities include school infrastructure support, alumni engagement expansion, and the launch of a digital alumni platform.", date: "March 1, 2026", featured: true },
  { category: "School Updates", title: "BCK SSS Records Outstanding UNEB Results", excerpt: "The school continues its tradition of academic excellence with impressive performance in the 2025 national examinations.", date: "February 18, 2026" },
  { category: "Alumni Achievements", title: "BCK Alumnus Appointed to National Health Advisory Board", excerpt: "Dr. Peter Lubega, Class of 1998, has been appointed to serve on the national health policy advisory committee.", date: "February 5, 2026" },
  { category: "Event Recaps", title: "BICKOSA Annual Reunion Draws Record Attendance", excerpt: "Over 500 alumni gathered for the 2025 end-of-year reunion, celebrating community and shared heritage.", date: "January 15, 2026" },
  { category: "Tributes", title: "Remembering Mr. Joseph Kato — Teacher, Mentor, Legend", excerpt: "The BCK community mourns the passing of a beloved teacher who shaped generations of students.", date: "January 3, 2026" },
  { category: "Announcements", title: "BICKOSA Website Launch & Digital Expansion", excerpt: "The association launches its official website as part of a broader digital engagement strategy.", date: "December 20, 2025" },
];

const NewsPage = () => {
  const featured = articles.find((a) => a.featured);
  const others = articles.filter((a) => !a.featured);

  return (
    <Layout>
      <section className="page-hero">
        <div className="container-wide px-6 sm:px-8 lg:px-12">
          <div className="max-w-xl">
            <p className="text-[12px] font-medium uppercase tracking-[0.15em] mb-5" style={{ color: "hsl(var(--gold))" }}>Stay Informed</p>
            <h1 className="text-[40px] sm:text-[48px] font-bold tracking-tight leading-[1.08] mb-5" style={{ color: "hsl(var(--primary-foreground))" }}>News & Updates</h1>
            <p className="text-[16px] leading-[1.65]" style={{ color: "hsl(var(--primary-foreground) / 0.55)" }}>
              Follow the latest from BICKOSA and the wider BCK community.
            </p>
          </div>
        </div>
      </section>

      {featured && (
        <section className="section-padding bg-background">
          <div className="container-wide">
            <div className="rounded-lg p-8 sm:p-12" style={{ background: "hsl(var(--navy))" }}>
              <p className="text-[11px] font-medium uppercase tracking-[0.12em] mb-4" style={{ color: "hsl(var(--gold))" }}>{featured.category}</p>
              <h2 className="text-[24px] sm:text-[28px] font-bold tracking-tight leading-[1.15] mb-4" style={{ color: "hsl(var(--primary-foreground))" }}>{featured.title}</h2>
              <p className="text-[15px] leading-[1.7] mb-4 max-w-xl" style={{ color: "hsl(var(--primary-foreground) / 0.6)" }}>{featured.excerpt}</p>
              <p className="text-[12px]" style={{ color: "hsl(var(--primary-foreground) / 0.35)" }}>{featured.date}</p>
            </div>
          </div>
        </section>
      )}

      <section className="section-padding bg-muted">
        <div className="container-wide">
          <div className="border-t border-border">
            {others.map((a) => (
              <article key={a.title} className="grid grid-cols-[1fr] sm:grid-cols-[100px_1fr] gap-4 sm:gap-8 py-8 border-b border-border">
                <div>
                  <p className="text-[12px] text-muted-foreground">{a.date}</p>
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.12em] mb-2" style={{ color: "hsl(var(--gold))" }}>{a.category}</p>
                  <h3 className="text-[16px] font-semibold text-foreground leading-snug mb-2">{a.title}</h3>
                  <p className="text-[14px] text-muted-foreground leading-[1.65]">{a.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide text-center max-w-lg">
          <h2 className="text-[28px] font-bold tracking-tight text-foreground mb-4">Looking for Older Updates?</h2>
          <p className="text-[15px] text-muted-foreground leading-[1.7] mb-8">Browse previous announcements, milestones, and archived community updates.</p>
          <Link to="/archive" className="inline-flex items-center gap-2 text-[14px] font-medium text-foreground border border-border h-10 px-5 rounded-md hover:bg-muted transition-colors">
            Browse Archive <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default NewsPage;
