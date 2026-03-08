import Layout from "@/components/Layout";

const articles = [
  { category: "Association Update", title: "BICKOSA Executive Committee Announces 2026 Agenda", excerpt: "Key priorities include school infrastructure support, alumni engagement expansion, and the launch of a digital alumni platform.", date: "March 1, 2026", featured: true },
  { category: "School Milestone", title: "BCK SSS Records Outstanding UNEB Results", excerpt: "The school continues its tradition of academic excellence with impressive performance in the 2025 national examinations.", date: "February 18, 2026" },
  { category: "Alumni Achievement", title: "BCK Alumnus Appointed to National Health Advisory Board", excerpt: "Dr. Peter Lubega, Class of 1998, has been appointed to serve on the national health policy advisory committee.", date: "February 5, 2026" },
  { category: "Events", title: "BICKOSA Annual Reunion Draws Record Attendance", excerpt: "Over 500 alumni gathered for the 2025 end-of-year reunion, celebrating community and shared heritage.", date: "January 15, 2026" },
  { category: "Tributes", title: "Remembering Mr. Joseph Kato — Teacher, Mentor, Legend", excerpt: "The BCK community mourns the passing of a beloved teacher who shaped generations of students.", date: "January 3, 2026" },
  { category: "Announcements", title: "BICKOSA Website Launch & Digital Expansion", excerpt: "The association launches its official website as part of a broader digital engagement strategy.", date: "December 20, 2025" },
];

const NewsPage = () => {
  const featured = articles.find((a) => a.featured);
  const others = articles.filter((a) => !a.featured);

  return (
    <Layout>
      <section className="gradient-hero py-20 sm:py-28">
        <div className="container-wide px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-heading font-bold mb-6" style={{ color: "hsl(var(--primary-foreground))" }}>News & Updates</h1>
          <p className="text-lg max-w-2xl" style={{ color: "hsl(var(--primary-foreground) / 0.8)" }}>
            Stay informed about BICKOSA activities, school milestones, alumni achievements, and community announcements.
          </p>
        </div>
      </section>

      {featured && (
        <section className="section-padding bg-background">
          <div className="container-wide">
            <div className="bento-card p-8 sm:p-12 bg-primary text-primary-foreground">
              <span className="text-xs font-semibold tracking-wider uppercase opacity-70">{featured.category}</span>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold mt-3 mb-4">{featured.title}</h2>
              <p className="opacity-80 text-lg mb-4 max-w-2xl">{featured.excerpt}</p>
              <span className="text-sm opacity-60">{featured.date}</span>
            </div>
          </div>
        </section>
      )}

      <section className="section-padding bg-card">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {others.map((a) => (
              <article key={a.title} className="bento-card">
                <span className="text-xs font-semibold tracking-wider uppercase text-accent">{a.category}</span>
                <h3 className="font-heading text-lg font-semibold text-foreground mt-2 mb-3">{a.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{a.excerpt}</p>
                <span className="text-xs text-muted-foreground">{a.date}</span>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NewsPage;
