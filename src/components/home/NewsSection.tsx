import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const articles = [
  {
    category: "Community",
    title: "BICKOSA Executive Committee Announces 2026 Agenda",
    excerpt: "Key priorities include school infrastructure support, alumni engagement expansion, and the launch of a digital alumni platform.",
    date: "March 1, 2026",
    accent: "bg-cobalt",
  },
  {
    category: "School",
    title: "BCK SSS Records Outstanding UNEB Results",
    excerpt: "The school continues its tradition of academic excellence with impressive performance in the 2025 national examinations.",
    date: "February 18, 2026",
    accent: "bg-teal",
  },
  {
    category: "Chapters",
    title: "BCK Alumnus Appointed to National Health Advisory Board",
    excerpt: "Dr. Peter Lubega, Class of 1998, has been appointed to serve on the national health policy advisory committee.",
    date: "February 5, 2026",
    accent: "bg-coral",
  },
];

const NewsSection = () => {
  return (
    <section className="section-padding section-alt">
      <div className="container-wide">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-14">
          <div className="max-w-xl">
            <p className="overline text-cobalt mb-4">Latest News</p>
            <h2 className="text-[32px] sm:text-[40px] font-bold tracking-tight text-foreground leading-[1.15]">
              News & updates
            </h2>
          </div>
          <Link to="/news" className="inline-flex items-center gap-2 text-[14px] font-semibold text-cobalt hover:text-cobalt-light transition-colors duration-150 flex-shrink-0">
            All news <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {articles.map((article) => (
            <article key={article.title} className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-md hover:border-border/80 transition-all duration-200">
              <div className="p-7">
                <div className="flex items-center gap-2 mb-4">
                  <span className={`inline-block w-2 h-2 rounded-full ${article.accent}`} />
                  <span className="text-[12px] font-medium text-muted-foreground">{article.category}</span>
                  <span className="text-border">·</span>
                  <span className="text-[12px] text-muted-foreground/60">{article.date}</span>
                </div>
                <h3 className="text-[17px] font-semibold text-foreground leading-snug mb-3 group-hover:text-cobalt transition-colors duration-150">
                  {article.title}
                </h3>
                <p className="text-[14px] text-muted-foreground leading-[1.65]">{article.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
