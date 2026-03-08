import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const articles = [
  {
    category: "Association Update",
    title: "BICKOSA Executive Committee Announces 2026 Agenda",
    excerpt: "Key priorities include school infrastructure support, alumni engagement expansion, and the launch of a digital alumni platform.",
    date: "March 1, 2026",
  },
  {
    category: "School Milestone",
    title: "BCK SSS Records Outstanding UNEB Results",
    excerpt: "The school continues its tradition of academic excellence with impressive performance in the 2025 national examinations.",
    date: "February 18, 2026",
  },
  {
    category: "Alumni Achievement",
    title: "BCK Alumnus Appointed to National Health Advisory Board",
    excerpt: "Dr. Peter Lubega, Class of 1998, has been appointed to serve on the national health policy advisory committee.",
    date: "February 5, 2026",
  },
];

const NewsSection = () => {
  return (
    <section className="section-padding bg-muted">
      <div className="container-wide">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-14">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-4">Latest</p>
            <h2 className="text-3xl sm:text-[36px] font-bold tracking-tight text-foreground leading-[1.15]">
              News & Updates
            </h2>
          </div>
          <Link to="/news" className="inline-flex items-center gap-2 text-[14px] font-medium text-foreground hover:opacity-70 transition-opacity flex-shrink-0">
            All news <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-px bg-border rounded-lg overflow-hidden">
          {articles.map((article) => (
            <article key={article.title} className="bg-card p-8 sm:p-10 group cursor-pointer">
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] mb-4" style={{ color: "hsl(var(--gold))" }}>{article.category}</p>
              <h3 className="text-[16px] font-semibold text-foreground leading-snug mb-3 group-hover:opacity-70 transition-opacity">
                {article.title}
              </h3>
              <p className="text-[14px] text-muted-foreground leading-[1.65] mb-5">{article.excerpt}</p>
              <span className="text-[12px] text-muted-foreground/60">{article.date}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
