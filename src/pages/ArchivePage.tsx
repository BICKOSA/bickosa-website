import Layout from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { BentoCard } from "@/components/bento";
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
        <p className="section-eyebrow">Institutional Memory</p>
        <h2 className="section-heading">Keeping the Record Alive</h2>
        <p className="section-sub">
          Archives matter because they protect memory from being lost. Over time, this section can become a valuable record of school history, alumni activity, milestones, and notable moments that deserve to remain accessible for future generations.
        </p>
      </section>

      <section className="section">
        <p className="section-eyebrow">Categories</p>
        <h2 className="section-heading">Archive Categories</h2>
        <div className="bento">
          {archiveCategories.map((cat) => {
            const Icon = cat.icon;
            return (
            <BentoCard key={cat.name} variant="white" col={4} minHeight={160}>
              <div className={`w-10 h-10 rounded-bento-lg ${cat.bgAccent} flex items-center justify-center mb-5`}>
                <Icon className={`w-5 h-5 ${cat.accent}`} />
              </div>
              <p className="bc-title mb-1" style={{ fontSize: "0.9375rem" }}>{cat.name}</p>
              <p className="bc-text sm" style={{ marginBottom: 0 }}>Content coming soon.</p>
            </BentoCard>
            );
          })}
        </div>
      </section>
    </Layout>
  );
};

export default ArchivePage;
