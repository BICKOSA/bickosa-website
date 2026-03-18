import Layout from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { BentoCard } from "@/components/bento";
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
  { name: "Peter Lubega", cohort: "Class of 1999", role: "Public Health Advisor", excerpt: "The values of integrity and service from BCK guide my work in national health policy.", tag: "Public Service", accent: "bg-coral" },
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
        <p className="section-eyebrow">Voices of BCK</p>
        <h2 className="section-heading">Every Story Carries the Legacy Forward</h2>
        <p className="section-sub">
          Alumni stories preserve memory, build pride, inspire younger generations, and remind the community of the many ways a BCK foundation can shape a life.
        </p>
      </section>

      {/* Featured story */}
      <section className="section">
        <div className="bento">
          <BentoCard variant="white" col={12} minHeight={200} className="min-h-0">
            <div className="flex items-center gap-2 mb-6">
              <span className="bc-tag bc-tag-gold">Featured Story</span>
            </div>
            <div className="grid md:grid-cols-[280px_1fr] gap-10 items-start">
              <div>
                <div className="w-20 h-20 rounded-full flex items-center justify-center mb-5" style={{ background: "var(--navy-900)" }}>
                  <span className="text-2xl font-bold" style={{ color: "var(--gold-500)", fontFamily: "var(--font-display)" }}>{featured.name[0]}</span>
                </div>
                <h3 className="text-[18px] font-bold mb-1" style={{ color: "var(--navy-900)" }}>{featured.name}</h3>
                <p className="text-[13px] font-medium mt-1" style={{ color: "hsl(var(--cobalt))" }}>{featured.role}</p>
                <p className="text-[12px] mt-0.5" style={{ color: "var(--text-secondary)" }}>{featured.cohort}</p>
              </div>
              <div>
                <Quote className="w-6 h-6 mb-4" style={{ color: "var(--gold-400)" }} />
                <p className="text-[16px] leading-[1.8]" style={{ color: "var(--navy-700)" }}>{featured.story}</p>
              </div>
            </div>
          </BentoCard>
        </div>
      </section>

      {/* More stories */}
      <section className="section">
        <p className="section-eyebrow">Community</p>
        <h2 className="section-heading">More Stories from the Community</h2>
        <div className="bento">
          {stories.map((s) => (
            <BentoCard key={s.name} variant="white" col={4} minHeight={260}>
              <div className="bc-eyebrow">{s.tag}</div>
              <p className="bc-quote" style={{ fontSize: "0.875rem", marginBottom: 16 }}>&ldquo;{s.excerpt}&rdquo;</p>
              <div className="bc-divider" />
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "var(--navy-900)", color: "var(--gold-400)", fontFamily: "var(--font-display)", fontSize: "12px", fontWeight: 700 }}>
                  {s.name[0]}
                </div>
                <div>
                  <p className="text-[13px] font-semibold" style={{ color: "var(--navy-900)" }}>{s.name}</p>
                  <p className="bc-text sm" style={{ marginTop: 0 }}>{s.role} · {s.cohort}</p>
                </div>
              </div>
            </BentoCard>
          ))}
        </div>
      </section>

      <section className="rounded-bento-2xl overflow-hidden mt-10" style={{ background: "var(--navy-900)" }}>
        <div className="max-w-[1280px] mx-auto px-6 sm:px-8 py-20 sm:py-24 text-center">
          <h2 className="text-[30px] sm:text-[34px] font-bold tracking-tight leading-[1.15] mb-4" style={{ fontFamily: "var(--font-display)", color: "var(--white)" }}>Have a Story to Share?</h2>
          <p className="text-[15px] leading-[1.75] mb-8 max-w-md mx-auto" style={{ color: "var(--navy-200)" }}>
            If you would like to share your story, reflection, or experience, we would love to hear from you.
          </p>
          <Link to="/contact" className="bc-btn bc-btn-gold inline-flex items-center gap-2">
            Contact BICKOSA <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default StoriesPage;
