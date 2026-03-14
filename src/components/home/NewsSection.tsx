import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const articles = [
  {
    category: "Association Update",
    title: "BICKOSA Executive Committee Announces 2026 Agenda",
    excerpt: "Key priorities include school infrastructure support, alumni engagement expansion, and the launch of a digital alumni platform.",
    date: "March 1, 2026",
    accent: "bg-cobalt",
  },
  {
    category: "School Milestone",
    title: "BCK SSS Records Outstanding UNEB Results",
    excerpt: "The school continues its tradition of academic excellence with impressive performance in the 2025 national examinations.",
    date: "February 18, 2026",
    accent: "bg-teal",
  },
  {
    category: "Alumni Achievement",
    title: "BCK Alumnus Appointed to National Health Advisory Board",
    excerpt: "Dr. Peter Lubega, Class of 1998, has been appointed to serve on the national health policy advisory committee.",
    date: "February 5, 2026",
    accent: "bg-coral",
  },
];

const NewsSection = () => {
  return (
    <section className="section-padding bg-muted">
      <div className="container-wide">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-14">
          <div className="max-w-xl">
            <div className="gold-accent-bar" />
            <p className="text-[12px] font-semibold uppercase tracking-[0.15em] text-gold mb-4">Latest Updates</p>
            <h2 className="text-[32px] sm:text-[38px] font-bold tracking-tight text-foreground leading-[1.12]">
              News & Announcements
            </h2>
          </div>
          <Link to="/news" className="inline-flex items-center gap-2 text-[14px] font-semibold text-cobalt hover:text-cobalt/80 transition-colors flex-shrink-0">
            All news <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {articles.map((article, i) => (
            <article key={article.title} className={`group cursor-pointer rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-0.5 ${i === 0 ? 'bg-navy text-primary-foreground p-8' : 'bg-card border border-border p-8 hover:shadow-md'}`}>
              <div className="flex items-center gap-2 mb-5">
                <div className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-gold' : article.accent}`} />
                <span className={`text-[11px] font-semibold uppercase tracking-wider ${i === 0 ? 'text-gold/70' : 'text-muted-foreground'}`}>{article.category}</span>
              </div>
              <h3 className={`text-[17px] font-semibold leading-snug mb-3 ${i === 0 ? 'text-primary-foreground' : 'text-foreground group-hover:text-cobalt transition-colors'}`}>
                {article.title}
              </h3>
              <p className={`text-[14px] leading-[1.65] mb-5 ${i === 0 ? 'text-primary-foreground/55' : 'text-muted-foreground'}`}>{article.excerpt}</p>
              <span className={`text-[12px] ${i === 0 ? 'text-primary-foreground/35' : 'text-muted-foreground/60'}`}>{article.date}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
