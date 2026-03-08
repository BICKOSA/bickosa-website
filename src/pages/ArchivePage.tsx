import Layout from "@/components/Layout";

const archiveCategories = [
  "Publications",
  "Historic Notices",
  "Anniversary Materials",
  "Event Records",
  "Reports & Documents",
  "Legacy Stories",
];

const ArchivePage = () => {
  return (
    <Layout>
      <section className="gradient-hero py-20 sm:py-28">
        <div className="container-wide px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "hsl(var(--gold))" }}>Preserving Institutional Memory</p>
            <h1 className="text-4xl sm:text-5xl font-heading font-bold mb-6" style={{ color: "hsl(var(--primary-foreground))" }}>Archive</h1>
            <p className="text-lg" style={{ color: "hsl(var(--primary-foreground) / 0.8)" }}>
              A space for preserving the documents, publications, stories, notices, and materials that help tell the long-term story of BCK and BICKOSA.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide max-w-3xl">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-6">Keeping the Record Alive</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Archives matter because they protect memory from being lost. Over time, this section can become a valuable record of school history, alumni activity, milestones, publications, and notable moments that deserve to remain accessible for future generations.
          </p>
        </div>
      </section>

      <section className="section-padding bg-card">
        <div className="container-wide">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-8 text-center">Archive Categories</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {archiveCategories.map((cat) => (
              <div key={cat} className="bento-card text-center">
                <h3 className="font-heading font-semibold text-foreground">{cat}</h3>
                <p className="text-muted-foreground text-sm mt-2">Content coming soon.</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ArchivePage;
