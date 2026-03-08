import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, Quote } from "lucide-react";

const featured = {
  name: "Teopista Nabakiibi",
  cohort: "O-Level & A-Level at BCK SSS",
  role: "Law Student & Social Initiative Founder",
  story: "Teopista Nabakiibi attended Bishop Cipriano Kihangire SSS for both O-Level and A-Level. With scholarship support tied to Fr. Scalabrini's educational initiatives, she went on to pursue law and founded a social initiative aimed at empowering young people in her community.",
};

const stories = [
  { name: "James Ssenyonga", cohort: "Class of 2003", role: "Entrepreneur", excerpt: "BCK friendships shaped my business journey. BICKOSA keeps those bonds alive.", tag: "Business", accent: "bg-cobalt" },
  { name: "Grace Namutebi", cohort: "Class of 2010", role: "Educator & Mentor", excerpt: "I returned to teach because BCK gave me everything.", tag: "Education", accent: "bg-teal" },
  { name: "Peter Lubega", cohort: "Class of 1998", role: "Public Health Advisor", excerpt: "The values of integrity and service from BCK guide my work in national health policy.", tag: "Public Service", accent: "bg-coral" },
  { name: "Agnes Namuli", cohort: "Class of 2005", role: "Creative Arts Director", excerpt: "BCK nurtured my creativity. Today I lead arts programs across East Africa.", tag: "Creative Arts", accent: "bg-gold" },
  { name: "David Kateregga", cohort: "Class of 2001", role: "Sports Coach", excerpt: "The sports culture at BCK set me on a path to coaching the next generation.", tag: "Sports", accent: "bg-cobalt" },
  { name: "Florence Aber", cohort: "Class of 2008", role: "NGO Director", excerpt: "Community impact was a value I learned at BCK.", tag: "Community", accent: "bg-teal" },
];

const StoriesPage = () => {
  return (
    <Layout>
      <section className="page-hero">
        <div className="container-wide px-6 sm:px-8 lg:px-12">
          <div className="max-w-2xl">
            <p className="overline text-gold mb-5">Alumni Spotlight</p>
            <h1 className="text-[40px] sm:text-[52px] lg:text-[56px] font-bold tracking-tight leading-[1.1] mb-6 text-primary-foreground">
              Alumni Stories
            </h1>
            <p className="text-[17px] sm:text-[18px] leading-[1.65] text-primary-foreground/50">
              The BICKOSA community is made up of many journeys — connected by one shared foundation.
            </p>
          </div>
        </div>
      </section>

      {/* Featured story */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gold/10 border border-gold/20 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-gold" />
            <span className="text-[12px] font-semibold uppercase tracking-wider text-gold">Featured Story</span>
          </div>
          <div className="grid md:grid-cols-[280px_1fr] gap-10 items-start">
            <div>
              <div className="w-20 h-20 rounded-full bg-navy flex items-center justify-center mb-5">
                <span className="text-2xl font-bold text-gold">{featured.name[0]}</span>
              </div>
              <h3 className="text-[20px] font-bold text-foreground">{featured.name}</h3>
              <p className="text-[14px] text-cobalt font-medium mt-1">{featured.role}</p>
              <p className="text-[13px] text-muted-foreground mt-0.5">{featured.cohort}</p>
            </div>
            <div>
              <Quote className="w-5 h-5 text-gold/30 mb-4" />
              <p className="text-[16px] text-foreground/75 leading-[1.75]">{featured.story}</p>
              <Link to="/contact" className="inline-flex items-center gap-2 text-[14px] font-semibold text-cobalt hover:text-cobalt-light transition-colors duration-150 mt-6">
                Read full story <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* More stories */}
      <section className="section-padding section-alt">
        <div className="container-wide">
          <h2 className="text-[28px] sm:text-[32px] font-bold tracking-tight text-foreground leading-[1.15] mb-10">More stories</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stories.map((s) => (
              <div key={s.name} className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-md hover:border-border/80 transition-all duration-200 group">
                <div className={`h-1 ${s.accent}`} />
                <div className="p-7">
                  <span className="text-[12px] font-medium text-muted-foreground bg-muted px-2.5 py-1 rounded-md">{s.tag}</span>
                  <p className="text-[15px] text-foreground/75 leading-[1.7] mt-4 mb-5 serif-heading">"{s.excerpt}"</p>
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Submit CTA */}
      <section className="bg-navy">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12 py-20 sm:py-24 text-center">
          <h2 className="text-[28px] sm:text-[32px] font-bold tracking-tight text-primary-foreground leading-[1.15] mb-4">Have a story to share?</h2>
          <p className="text-[15px] text-primary-foreground/45 leading-[1.7] mb-8 max-w-md mx-auto">
            We'd love to hear from you. Share your journey, reflection, or experience.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 h-11 px-6 text-[14px] font-semibold bg-gold text-navy rounded-lg hover:bg-gold-light transition-colors duration-150">
            Submit a story <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default StoriesPage;
