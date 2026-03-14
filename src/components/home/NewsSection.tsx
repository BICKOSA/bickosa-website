import { Link } from "react-router-dom";
import { BentoCard } from "@/components/bento";

const articles = [
  {
    category: "Association Update",
    title: "BICKOSA Executive Committee Announces 2026 Agenda",
    excerpt:
      "Key priorities include school infrastructure support, alumni engagement expansion, and the launch of a digital alumni platform.",
    date: "March 1, 2026",
  },
  {
    category: "School Milestone",
    title: "BCK SSS Records Outstanding UNEB Results",
    excerpt:
      "The school continues its tradition of academic excellence with impressive performance in the 2025 national examinations.",
    date: "February 18, 2026",
  },
  {
    category: "Alumni Achievement",
    title: "BCK Alumnus Appointed to National Health Advisory Board",
    excerpt:
      "Dr. Peter Lubega, Class of 1998, has been appointed to serve on the national health policy advisory committee.",
    date: "February 5, 2026",
  },
];

const NewsSection = () => {
  return (
    <section className="section">
      <p className="section-eyebrow">Latest Updates</p>
      <h2 className="section-heading">News & Announcements</h2>
      <p className="section-sub">
        Association updates, school milestones, and alumni achievements.
      </p>

      <div className="bento">
        <BentoCard variant="grad-navy" col={5} row2 minHeight={320} className="min-h-[320px]">
          <div className="bc-dots-dark" aria-hidden />
          <span className="bc-tag bc-tag-on-dark">{articles[0].category}</span>
          <div style={{ marginTop: 16, flex: 1 }}>
            <h3 className="bc-title lg on-dark">{articles[0].title}</h3>
            <p className="bc-text on-dark" style={{ marginTop: 12 }}>
              {articles[0].excerpt}
            </p>
          </div>
          <div className="bc-footer">
            <span className="bc-text on-dark sm" style={{ color: "var(--navy-300)" }}>
              {articles[0].date}
            </span>
            <Link to="/news" className="bc-btn bc-btn-ghost-dark">
              Read more
            </Link>
          </div>
        </BentoCard>

        {articles.slice(1).map((article) => (
          <BentoCard key={article.title} variant="white" col={6} minHeight={200}>
            <div className="bc-eyebrow">{article.category}</div>
            <h3 className="bc-title" style={{ fontSize: "1.1rem" }}>
              {article.title}
            </h3>
            <p className="bc-text sm">{article.excerpt}</p>
            <div className="bc-footer">
              <span className="bc-text sm" style={{ color: "var(--text-muted)" }}>
                {article.date}
              </span>
              <Link to="/news" className="bc-btn bc-btn-outline">
                Read
              </Link>
            </div>
          </BentoCard>
        ))}
      </div>
    </section>
  );
};

export default NewsSection;
