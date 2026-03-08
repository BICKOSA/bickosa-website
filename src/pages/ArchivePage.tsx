import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { BookOpen, FileText, Trophy, Calendar, Archive, Users } from "lucide-react";

const archiveCategories = [
  { name: "Magazines & Newsletters", icon: BookOpen, accent: "text-cobalt", bgAccent: "bg-cobalt/10" },
  { name: "AGM Minutes", icon: FileText, accent: "text-teal", bgAccent: "bg-teal/10" },
  { name: "Project Reports", icon: Trophy, accent: "text-gold", bgAccent: "bg-gold/10" },
  { name: "Press Features", icon: Calendar, accent: "text-coral", bgAccent: "bg-coral/10" },
  { name: "In Memoriam", icon: Users, accent: "text-cobalt", bgAccent: "bg-cobalt/10" },
  { name: "Historical Documents", icon: Archive, accent: "text-teal", bgAccent: "bg-teal/10" },
];

const ArchivePage = () => {
  return (
    <Layout>
      <section className="page-hero">
        <div className="container-wide px-6 sm:px-8 lg:px-12">
          <div className="max-w-2xl">
            <p className="overline text-gold mb-5">Institutional Memory</p>
            <h1 className="text-[40px] sm:text-[52px] lg:text-[56px] font-bold tracking-tight leading-[1.1] mb-6 text-primary-foreground">
              Archives
            </h1>
            <p className="text-[17px] sm:text-[18px] leading-[1.65] text-primary-foreground/50">
              Documents, magazines, minutes, and historical records.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide max-w-readable">
          <h2 className="text-[28px] sm:text-[32px] font-bold tracking-tight text-foreground leading-[1.15] mb-6">Keeping the record alive</h2>
          <p className="text-[16px] text-muted-foreground leading-[1.7]">
            Archives protect memory from being lost. This section will grow into a valuable record of school history, alumni activity, and notable moments.
          </p>
        </div>
      </section>

      <section className="section-padding section-alt">
        <div className="container-wide">
          <h2 className="text-[28px] sm:text-[32px] font-bold tracking-tight text-foreground leading-[1.15] mb-10">Categories</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {archiveCategories.map((cat) => (
              <div key={cat.name} className="bg-card border border-border rounded-xl p-7 hover:shadow-sm hover:border-border/80 transition-all duration-200">
                <div className={`w-11 h-11 rounded-xl ${cat.bgAccent} flex items-center justify-center mb-5`}>
                  <cat.icon className={`w-5 h-5 ${cat.accent}`} strokeWidth={2} />
                </div>
                <p className="text-[16px] font-semibold text-foreground mb-1">{cat.name}</p>
                <p className="text-[13px] text-muted-foreground">Content coming soon.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-background text-center">
        <div className="container-wide max-w-lg">
          <p className="text-[15px] text-muted-foreground mb-4">Have documents, photos, or materials to contribute?</p>
          <Link to="/contact" className="text-[14px] font-semibold text-cobalt hover:text-cobalt-light transition-colors duration-150">
            Contact us →
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default ArchivePage;
