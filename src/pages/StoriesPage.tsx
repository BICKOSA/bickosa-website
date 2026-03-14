import Layout from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { Link } from "react-router-dom";
import { ArrowRight, Quote } from "lucide-react";
import schoolCourtyard from "@/assets/school-courtyard.png";

const featured = {
  name: "Teopista Nabakiibi",
  cohort: "O-Level & A-Level at BCK SSS",
  role: "Law Student & Social Initiative Founder",
  story: "Teopista Nabakiibi attended Bishop Cipriano Kihangire SSS, Biina Luzira, for both O-Level and A-Level. With scholarship support tied to Fr. Scalabrini's educational initiatives, she went on to pursue law and founded a social initiative aimed at empowering young people in her community. Her journey from BCK to national recognition reflects the school's commitment to producing leaders who serve.",
};

const stories = [
  { name: "James Ssenyonga", cohort: "Class of 2003", role: "Entrepreneur & Community Leader", excerpt: "BCK friendships shaped my business journey. BICKOSA keeps those bonds alive.", tag: "Business", accent: "bg-cobalt" },
  { name: "Grace Namutebi", cohort: "Class of 2010", role: "Educator & Mentor", excerpt: "I returned to teach because BCK gave me everything.", tag: "Education", accent: "bg-teal" },
  { name: "Peter Lubega", cohort: "Class of 1998", role: "Public Health Advisor", excerpt: "The values of integrity and service from BCK guide my work in national health policy.", tag: "Public Service", accent: "bg-coral" },
  { name: "Agnes Namuli", cohort: "Class of 2005", role: "Creative Arts Director", excerpt: "BCK nurtured my creativity. Today I lead arts programs across East Africa.", tag: "Creative Arts", accent: "bg-gold" },
  { name: "David Kateregga", cohort: "Class of 2001", role: "Sports Coach & Youth Mentor", excerpt: "The sports culture at BCK set me on a path to coaching the next generation.", tag: "Sports", accent: "bg-cobalt" },
  { name: "Florence Aber", cohort: "Class of 2008", role: "NGO Director", excerpt: "Community impact was a value I learned at BCK. BICKOSA reminds me of that mission.", tag: "Community", accent: "bg-teal" },
];

const StoriesPage = () => {
  return (
    <Layout>
      <PageHero
        eyebrow="Our People"
        title="Alumni Stories"
        description="The BICKOSA community is made up of many journeys — shaped by different callings but connected by one shared foundation."
        image={schoolCourtyard}
      />

      <section className="section max-w-2xl">
        <h2 className="text-[30px] sm:text-[34px] font-bold tracking-tight text-foreground leading-[1.15] mb-6">Every Story Carries the Legacy Forward</h2>
          <p className="text-[16px] text-muted-foreground leading-[1.75]">
            Alumni stories preserve memory, build pride, inspire younger generations, and remind the community of the many ways a BCK foundation can shape a life.
        </p>
      </section>

      {/* Featured story */}
      <section className="section">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold/10 border border-gold/20 mb-8">
            <span className="w-2 h-2 rounded-full bg-gold" />
            <span className="text-[11px] font-semibold uppercase tracking-wider text-gold">Featured Story</span>
          </div>
          <div className="grid md:grid-cols-[280px_1fr] gap-10 items-start">
            <div>
              <div className="w-20 h-20 rounded-full bg-navy flex items-center justify-center mb-5">
                <span className="text-2xl font-bold text-gold">{featured.name[0]}</span>
              </div>
              <h3 className="text-[18px] font-bold text-foreground">{featured.name}</h3>
              <p className="text-[13px] text-cobalt font-medium mt-1">{featured.role}</p>
              <p className="text-[12px] text-muted-foreground mt-0.5">{featured.cohort}</p>
            </div>
            <div>
              <Quote className="w-6 h-6 text-gold/30 mb-4" />
              <p className="text-[16px] text-foreground/80 leading-[1.8]">{featured.story}</p>
            </div>
          </div>
      </section>

      {/* More stories */}
      <section className="section">
        <h2 className="text-[30px] sm:text-[34px] font-bold tracking-tight text-foreground leading-[1.15] mb-10">More Stories from the Community</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {stories.map((s) => (
            <div key={s.name} className="bg-card border border-border rounded-bento-2xl p-7 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 group">
                <div className="flex items-center gap-2 mb-5">
                  <div className={`w-2 h-2 rounded-full ${s.accent}`} />
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">{s.tag}</span>
                </div>
                <p className="text-[14px] text-foreground/75 leading-[1.75] mb-6 serif-heading">"{s.excerpt}"</p>
                <div className="pt-4 border-t border-border flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-navy flex items-center justify-center flex-shrink-0">
                    <span className="text-[12px] font-bold text-gold">{s.name[0]}</span>
                  </div>
                  <div>
                    <p className="text-[13px] font-semibold text-foreground">{s.name}</p>
                    <p className="text-[11px] text-muted-foreground">{s.role} · {s.cohort}</p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>

      <section className="rounded-bento-2xl overflow-hidden mt-10" style={{ background: "var(--navy-900)" }}>
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-20 sm:py-24 text-center">
          <h2 className="text-[30px] sm:text-[34px] font-bold tracking-tight text-primary-foreground leading-[1.15] mb-4">Have a Story to Share?</h2>
          <p className="text-[15px] text-primary-foreground/50 leading-[1.75] mb-8 max-w-md mx-auto">
            If you would like to share your story, reflection, or experience, we would love to hear from you.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 h-11 px-6 text-[14px] font-semibold bg-gold text-navy rounded-bento-xl hover:bg-gold-light transition-colors">
            Contact BICKOSA <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default StoriesPage;
