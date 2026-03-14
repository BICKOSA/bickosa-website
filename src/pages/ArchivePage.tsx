import Layout from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { Archive, BookOpen, Calendar, FileText, Trophy, Users } from "lucide-react";
import heroCampus2 from "@/assets/hero-campus-2.png";

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
      <PageHero
        eyebrow="Institutional Memory"
        title="Archive"
        description="A space for preserving the documents, publications, stories, and materials that tell the long-term story of BCK and BICKOSA."
        image={heroCampus2}
      />

      <section className="section max-w-2xl">
        <h2 className="text-[30px] sm:text-[34px] font-bold tracking-tight text-foreground leading-[1.15] mb-6">Keeping the Record Alive</h2>
          <p className="text-[16px] text-muted-foreground leading-[1.75]">
            Archives matter because they protect memory from being lost. Over time, this section can become a valuable record of school history, alumni activity, milestones, and notable moments that deserve to remain accessible for future generations.
        </p>
      </section>

      <section className="section">
        <p className="section-eyebrow">Categories</p>
        <h2 className="section-heading">Archive Categories</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {archiveCategories.map((cat) => (
            <div key={cat.name} className="bg-card border border-border rounded-bento-2xl p-7 hover:shadow-sm transition-shadow">
              <div className={`w-10 h-10 rounded-bento-lg ${cat.bgAccent} flex items-center justify-center mb-5`}>
                  <cat.icon className={`w-5 h-5 ${cat.accent}`} />
                </div>
                <p className="text-[15px] font-semibold text-foreground mb-1">{cat.name}</p>
                <p className="text-[13px] text-muted-foreground">Content coming soon.</p>
              </div>
            ))}
        </div>
      </section>
    </Layout>
  );
};

export default ArchivePage;
