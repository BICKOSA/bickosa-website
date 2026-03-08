import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const categories = ["All", "Community", "School", "Chapters", "In Memoriam"];

const articles = [
  { category: "Community", title: "BICKOSA Executive Committee Announces 2026 Agenda", excerpt: "Key priorities include school infrastructure support, alumni engagement expansion, and the launch of a digital alumni platform.", date: "March 1, 2026", featured: true, accent: "bg-cobalt" },
  { category: "School", title: "BCK SSS Records Outstanding UNEB Results", excerpt: "The school continues its tradition of academic excellence with impressive performance in the 2025 national examinations.", date: "February 18, 2026", accent: "bg-teal" },
  { category: "Chapters", title: "BCK Alumnus Appointed to National Health Advisory Board", excerpt: "Dr. Peter Lubega, Class of 1998, has been appointed to serve on the national health policy advisory committee.", date: "February 5, 2026", accent: "bg-coral" },
  { category: "Community", title: "BICKOSA Annual Reunion Draws Record Attendance", excerpt: "Over 500 alumni gathered for the 2025 end-of-year reunion, celebrating community and shared heritage.", date: "January 15, 2026", accent: "bg-gold" },
  { category: "In Memoriam", title: "Remembering Mr. Joseph Kato — Teacher, Mentor, Legend", excerpt: "The BCK community mourns the passing of a beloved teacher who shaped generations.", date: "January 3, 2026", accent: "bg-cobalt" },
  { category: "Community", title: "BICKOSA Website Launch & Digital Expansion", excerpt: "The association launches its official website as part of a broader digital engagement strategy.", date: "December 20, 2025", accent: "bg-teal" },
];

const NewsPage = () => {
  const featured = articles.find((a) => a.featured);
  const others = articles.filter((a) => !a.featured);

  return (
    <Layout>
      <section className="page-hero">
        <div className="container-wide px-6 sm:px-8 lg:px-12">
          <div className="max-w-2xl">
            <p className="overline text-gold mb-5">Stay Informed</p>
            <h1 className="text-[40px] sm:text-[52px] lg:text-[56px] font-bold tracking-tight leading-[1.1] mb-6 text-primary-foreground">
              News & updates
            </h1>
            <p className="text-[17px] sm:text-[18px] leading-[1.65] text-primary-foreground/50">
              Stories from chapters, events, projects, and community achievements.
            </p>
          </div>
        </div>
      </section>

      {/* Category filters */}
      <section className="bg-background border-b border-border">
        <div className="container-wide px-6 sm:px-8 lg:px-12 py-5">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <span key={cat} className={`inline-flex items-center px-4 py-2 rounded-lg text-[13px] font-medium cursor-pointer transition-colors duration-150 ${cat === "All" ? "bg-navy text-primary-foreground" : "bg-muted text-muted-foreground hover:text-foreground hover:bg-border"}`}>
                {cat}
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
              <div className="flex items-center gap-2 mb-4">
                <span className="inline-block w-2 h-2 rounded-full bg-gold" />
                <span className="text-[12px] font-medium text-gold/60">{featured.category}</span>
                <span className="text-primary-foreground/15">·</span>
                <span className="text-[12px] text-primary-foreground/30">{featured.date}</span>
              </div>
              <h2 className="text-[24px] sm:text-[28px] font-bold tracking-tight leading-[1.15] mb-4 text-primary-foreground">{featured.title}</h2>
              <p className="text-[15px] leading-[1.7] max-w-xl text-primary-foreground/50">{featured.excerpt}</p>
            </div>
          </div>
        </section>
      )}

      {/* List */}
      <section className="section-padding section-alt">
        <div className="container-wide">
          <div className="space-y-4">
            {others.map((a) => (
              <article key={a.title} className="bg-card border border-border rounded-xl p-6 hover:shadow-sm hover:border-border/80 transition-all duration-200 group">
                <div className="flex items-start gap-6">
                  <div className="hidden sm:block w-[90px] flex-shrink-0">
                    <p className="text-[12px] font-medium text-muted-foreground/60">{a.date}</p>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`inline-block w-2 h-2 rounded-full ${a.accent}`} />
                      <span className="text-[12px] font-medium text-muted-foreground">{a.category}</span>
                      <span className="sm:hidden text-border">·</span>
                      <span className="sm:hidden text-[12px] text-muted-foreground/60">{a.date}</span>
                    </div>
                    <h3 className="text-[16px] font-semibold text-foreground leading-snug mb-2 group-hover:text-cobalt transition-colors duration-150">{a.title}</h3>
                    <p className="text-[14px] text-muted-foreground leading-[1.65]">{a.excerpt}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-background text-center">
        <div className="container-wide max-w-lg">
          <h2 className="text-[24px] font-bold tracking-tight text-foreground mb-4">Looking for older updates?</h2>
          <p className="text-[15px] text-muted-foreground leading-[1.7] mb-6">Browse previous announcements and archived community updates.</p>
          <Link to="/archive" className="inline-flex items-center gap-2 text-[14px] font-semibold text-cobalt hover:text-cobalt-light transition-colors duration-150">
            Browse archive <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default NewsPage;
