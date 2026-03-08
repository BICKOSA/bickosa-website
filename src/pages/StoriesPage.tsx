import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const featured = {
  name: "Teopista Nabakiibi",
  cohort: "O-Level & A-Level at BCK SSS",
  role: "Law Student & Social Initiative Founder",
  story: "Teopista Nabakiibi attended Bishop Cipriano Kihangire SSS, Biina Luzira, for both O-Level and A-Level. With scholarship support tied to Fr. Scalabrini's educational initiatives, she went on to pursue law and founded a social initiative aimed at empowering young people in her community. Her journey from BCK to national recognition reflects the school's commitment to producing leaders who serve.",
};

const stories = [
  { name: "James Ssenyonga", cohort: "Class of 2003", role: "Entrepreneur & Community Leader", excerpt: "BCK friendships shaped my business journey. BICKOSA keeps those bonds alive.", tag: "Entrepreneurship" },
  { name: "Grace Namutebi", cohort: "Class of 2010", role: "Educator & Mentor", excerpt: "I returned to teach because BCK gave me everything.", tag: "Education" },
  { name: "Peter Lubega", cohort: "Class of 1998", role: "Public Health Advisor", excerpt: "The values of integrity and service from BCK guide my work in national health policy.", tag: "Public Service" },
  { name: "Agnes Namuli", cohort: "Class of 2005", role: "Creative Arts Director", excerpt: "BCK nurtured my creativity. Today I lead arts programs across East Africa.", tag: "Creative Arts" },
  { name: "David Kateregga", cohort: "Class of 2001", role: "Sports Coach & Youth Mentor", excerpt: "The sports culture at BCK set me on a path to coaching the next generation.", tag: "Sports" },
  { name: "Florence Aber", cohort: "Class of 2008", role: "NGO Director", excerpt: "Community impact was a value I learned at BCK. BICKOSA reminds me of that mission.", tag: "Community Impact" },
];

const StoriesPage = () => {
  return (
    <Layout>
      <section className="page-hero">
        <div className="container-wide px-6 sm:px-8 lg:px-12">
          <div className="max-w-xl">
            <p className="text-[12px] font-medium uppercase tracking-[0.15em] mb-5" style={{ color: "hsl(var(--gold))" }}>Our People</p>
            <h1 className="text-[40px] sm:text-[48px] font-bold tracking-tight leading-[1.08] mb-5" style={{ color: "hsl(var(--primary-foreground))" }}>Alumni Stories</h1>
            <p className="text-[16px] leading-[1.65]" style={{ color: "hsl(var(--primary-foreground) / 0.55)" }}>
              The BICKOSA community is made up of many journeys — shaped by different callings, experiences, and paths, but connected by one shared foundation.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide max-w-2xl">
          <h2 className="text-[28px] sm:text-[32px] font-bold tracking-tight text-foreground leading-[1.15] mb-6">Every Story Carries the Legacy Forward</h2>
          <p className="text-[16px] text-muted-foreground leading-[1.7]">
            Alumni stories do more than celebrate achievement. They preserve memory, build pride, inspire younger generations, and remind the community of the many ways a BCK foundation can shape a life.
          </p>
        </div>
      </section>

      <section className="section-padding bg-muted">
        <div className="container-wide">
          <p className="text-[11px] font-medium uppercase tracking-[0.12em] mb-6" style={{ color: "hsl(var(--gold))" }}>Featured Story</p>
          <div className="grid md:grid-cols-[280px_1fr] gap-10 items-start">
            <div>
              <div className="w-20 h-20 rounded-full bg-border flex items-center justify-center mb-5">
                <span className="text-2xl font-bold text-muted-foreground">{featured.name[0]}</span>
              </div>
              <h3 className="text-[18px] font-bold text-foreground">{featured.name}</h3>
              <p className="text-[13px] text-muted-foreground mt-1">{featured.role}</p>
              <p className="text-[12px] text-muted-foreground/60 mt-0.5">{featured.cohort}</p>
            </div>
            <div>
              <p className="text-[16px] text-muted-foreground leading-[1.75]">{featured.story}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide">
          <h2 className="text-[28px] sm:text-[32px] font-bold tracking-tight text-foreground leading-[1.15] mb-10">More Stories from the Community</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-lg overflow-hidden">
            {stories.map((s) => (
              <div key={s.name} className="bg-card p-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] mb-5" style={{ color: "hsl(var(--gold))" }}>{s.tag}</p>
                <p className="text-[14px] text-muted-foreground leading-[1.7] italic mb-6">"{s.excerpt}"</p>
                <div>
                  <p className="text-[14px] font-semibold text-foreground">{s.name}</p>
                  <p className="text-[13px] text-muted-foreground mt-0.5">{s.role}</p>
                  <p className="text-[12px] text-muted-foreground/60 mt-0.5">{s.cohort}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted">
        <div className="container-wide text-center max-w-lg">
          <h2 className="text-[28px] sm:text-[32px] font-bold tracking-tight text-foreground leading-[1.15] mb-4">Have a Story to Share?</h2>
          <p className="text-[15px] text-muted-foreground leading-[1.7] mb-8">
            If you would like to share your story, reflection, or experience, we would love to hear from you.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 text-[14px] font-medium text-primary-foreground bg-primary h-10 px-5 rounded-md hover:opacity-90 transition-opacity">
            Contact BICKOSA <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default StoriesPage;
