import Layout from "@/components/Layout";
import { Archive, BookOpen, Calendar, FileText, Trophy, Users } from "lucide-react";

const archiveCategories = [
  { name: "Publications", icon: BookOpen, accent: "text-cobalt", bgAccent: "bg-cobalt/10" },
  { name: "Historic Notices", icon: FileText, accent: "text-teal", bgAccent: "bg-teal/10" },
  { name: "Anniversary Materials", icon: Trophy, accent: "text-gold", bgAccent: "bg-gold/10" },
  { name: "Event Records", icon: Calendar, accent: "text-coral", bgAccent: "bg-coral/10" },
  { name: "Reports & Documents", icon: Archive, accent: "text-cobalt", bgAccent: "bg-cobalt/10" },
  { name: "Legacy Stories", icon: Users, accent: "text-teal", bgAccent: "bg-teal/10" },
];

const ArchivePage = () => {
  return (
    <Layout>
      <section className="page-hero">
        <div className="container-wide px-6 sm:px-8 lg:px-12">
          <div className="max-w-xl">
            <div className="gold-accent-bar" />
            <p className="text-[12px] font-semibold uppercase tracking-[0.15em] mb-5 text-gold">Institutional Memory</p>
            <h1 className="text-[42px] sm:text-[52px] font-extrabold tracking-tight leading-[1.06] mb-5 text-primary-foreground">Archive</h1>
            <p className="text-[16px] leading-[1.7] text-primary-foreground/55">
              A space for preserving the documents, publications, stories, and materials that tell the long-term story of BCK and BICKOSA.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide max-w-2xl">
          <h2 className="text-[30px] sm:text-[34px] font-bold tracking-tight text-foreground leading-[1.15] mb-6">Keeping the Record Alive</h2>
          <p className="text-[16px] text-muted-foreground leading-[1.75]">
            Archives matter because they protect memory from being lost. Over time, this section can become a valuable record of school history, alumni activity, milestones, and notable moments that deserve to remain accessible for future generations.
          </p>
        </div>
      </section>

      <section className="section-padding bg-muted">
        <div className="container-wide">
          <div className="gold-accent-bar" />
          <h2 className="text-[30px] sm:text-[34px] font-bold tracking-tight text-foreground leading-[1.15] mb-10">Archive Categories</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {archiveCategories.map((cat) => (
              <div key={cat.name} className="bg-card border border-border rounded-xl p-7 hover:shadow-sm transition-shadow">
                <div className={`w-10 h-10 rounded-lg ${cat.bgAccent} flex items-center justify-center mb-5`}>
                  <cat.icon className={`w-5 h-5 ${cat.accent}`} />
                </div>
                <p className="text-[15px] font-semibold text-foreground mb-1">{cat.name}</p>
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
