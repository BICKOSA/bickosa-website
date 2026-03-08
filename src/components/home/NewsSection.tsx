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
    <section className="section-padding bg-card">
      <div className="container-wide">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-12">
          <div>
            <span className="text-secondary text-sm font-semibold tracking-widest uppercase">Latest</span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mt-3">
              News & Updates
            </h2>
          </div>
          <Link to="/news" className="text-secondary text-sm font-medium flex items-center gap-1 hover:underline">
            All News <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {articles.map((article) => (
            <article key={article.title} className="bento-card group cursor-pointer">
              <span className="text-xs font-semibold tracking-wider uppercase text-accent">{article.category}</span>
              <h3 className="font-heading text-lg font-semibold text-foreground mt-2 mb-3 group-hover:text-secondary transition-colors">
                {article.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{article.excerpt}</p>
              <span className="text-xs text-muted-foreground">{article.date}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
