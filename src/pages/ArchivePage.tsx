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
      <section className="page-hero">
        <div className="container-wide px-6 sm:px-8 lg:px-12">
          <div className="max-w-xl">
            <p className="text-[12px] font-medium uppercase tracking-[0.15em] mb-5" style={{ color: "hsl(var(--gold))" }}>Institutional Memory</p>
            <h1 className="text-[40px] sm:text-[48px] font-bold tracking-tight leading-[1.08] mb-5" style={{ color: "hsl(var(--primary-foreground))" }}>Archive</h1>
            <p className="text-[16px] leading-[1.65]" style={{ color: "hsl(var(--primary-foreground) / 0.55)" }}>
              A space for preserving the documents, publications, stories, and materials that tell the long-term story of BCK and BICKOSA.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide max-w-2xl">
          <h2 className="text-[28px] sm:text-[32px] font-bold tracking-tight text-foreground leading-[1.15] mb-6">Keeping the Record Alive</h2>
          <p className="text-[16px] text-muted-foreground leading-[1.7]">
            Archives matter because they protect memory from being lost. Over time, this section can become a valuable record of school history, alumni activity, milestones, and notable moments that deserve to remain accessible for future generations.
          </p>
        </div>
      </section>

      <section className="section-padding bg-muted">
        <div className="container-wide">
          <h2 className="text-[28px] sm:text-[32px] font-bold tracking-tight text-foreground leading-[1.15] mb-10">Archive Categories</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-lg overflow-hidden">
            {archiveCategories.map((cat) => (
              <div key={cat} className="bg-card p-8">
                <p className="text-[15px] font-semibold text-foreground mb-1">{cat}</p>
                <p className="text-[13px] text-muted-foreground">Content coming soon.</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ArchivePage;
