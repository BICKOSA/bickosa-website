import Layout from "@/components/Layout";
import { BookOpen, Star, Landmark, Calendar } from "lucide-react";

const timeline = [
  { year: "1960s", title: "School Beginnings", description: "Bishop Cipriano Kihangire Senior Secondary School is established in Bbiina/Luzira, Kampala." },
  { year: "1970s", title: "Early Growth", description: "The school expands its student body and builds a reputation for academic discipline and Catholic values." },
  { year: "1980s", title: "Resilience & Growth", description: "Through challenging times, BCK maintains its commitment to education and community formation." },
  { year: "1990s", title: "Expansion Era", description: "New facilities, expanded programs, and growing recognition as a leading secondary school in Kampala." },
  { year: "2000s", title: "BICKOSA Formation", description: "Alumni begin organizing formally, leading to the establishment of the Bishop Cipriano Kihangire Old Students Association." },
  { year: "2010s", title: "Silver Jubilee & Beyond", description: "Major anniversary celebrations, reunions, and the strengthening of alumni bonds across Uganda and the diaspora." },
  { year: "2020s", title: "Digital & Modern Era", description: "BICKOSA embraces digital platforms to connect alumni worldwide and launches community support initiatives." },
];

const HistoryPage = () => {
  return (
    <Layout>
      <section className="gradient-hero py-20 sm:py-28">
        <div className="container-wide px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-heading font-bold mb-6" style={{ color: "hsl(var(--primary-foreground))" }}>
              Our History & Legacy
            </h1>
            <p className="text-lg" style={{ color: "hsl(var(--primary-foreground) / 0.8)" }}>
              A journey through decades of faith, education, community, and the enduring spirit of BCK.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-background">
        <div className="container-wide max-w-4xl">
          <div className="text-center mb-16">
            <span className="text-secondary text-sm font-semibold tracking-widest uppercase">Through the Years</span>
            <h2 className="text-3xl font-heading font-bold text-foreground mt-3">Timeline of Milestones</h2>
          </div>
          <div className="relative">
            <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-px bg-border sm:-translate-x-px" />
            <div className="space-y-12">
              {timeline.map((item, i) => (
                <div key={item.year} className={`relative flex items-start gap-6 sm:gap-12 ${i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"}`}>
                  <div className={`flex-1 ${i % 2 === 0 ? "sm:text-right" : "sm:text-left"} hidden sm:block`}>
                    {i % 2 === 0 && (
                      <div className="bento-card inline-block">
                        <span className="text-accent font-heading text-2xl font-bold">{item.year}</span>
                        <h3 className="font-heading text-lg font-semibold text-foreground mt-1">{item.title}</h3>
                        <p className="text-muted-foreground text-sm mt-2">{item.description}</p>
                      </div>
                    )}
                  </div>
                  <div className="absolute left-6 sm:left-1/2 w-4 h-4 rounded-full bg-secondary border-4 border-background -translate-x-1/2 mt-2 z-10" />
                  <div className={`flex-1 ${i % 2 !== 0 ? "sm:text-right" : "sm:text-left"} pl-14 sm:pl-0`}>
                    {(i % 2 !== 0 || true) && (
                      <div className="bento-card inline-block sm:hidden">
                        <span className="text-accent font-heading text-2xl font-bold">{item.year}</span>
                        <h3 className="font-heading text-lg font-semibold text-foreground mt-1">{item.title}</h3>
                        <p className="text-muted-foreground text-sm mt-2">{item.description}</p>
                      </div>
                    )}
                    {i % 2 !== 0 && (
                      <div className="bento-card hidden sm:inline-block">
                        <span className="text-accent font-heading text-2xl font-bold">{item.year}</span>
                        <h3 className="font-heading text-lg font-semibold text-foreground mt-1">{item.title}</h3>
                        <p className="text-muted-foreground text-sm mt-2">{item.description}</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Founding Story */}
      <section className="section-padding bg-card">
        <div className="container-wide max-w-3xl">
          <span className="text-secondary text-sm font-semibold tracking-widest uppercase">Origins</span>
          <h2 className="text-3xl font-heading font-bold text-foreground mt-3 mb-6">The Founding Story</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>Bishop Cipriano Kihangire Senior Secondary School was established with a vision to provide quality Catholic education to the youth of Kampala and beyond. Named after Bishop Cipriano Kihangire, the school carries forward the values and vision of a leader who championed education, faith, and community development.</p>
            <p>From its earliest days, the school has been a place where young people are formed not only academically but also morally and spiritually, creating a foundation that alumni carry throughout their lives.</p>
          </div>
        </div>
      </section>

      {/* Motto */}
      <section className="section-padding" style={{ background: "hsl(var(--ivory))" }}>
        <div className="container-wide text-center max-w-2xl">
          <Star className="w-10 h-10 text-accent mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4 italic">
            "Per Aspera Ad Astra"
          </h2>
          <p className="text-xl text-muted-foreground font-heading mb-6">Through Hardship to the Stars</p>
          <p className="text-muted-foreground leading-relaxed">
            This motto is more than words — it is the lived experience of every BCK student and alumnus. It speaks to the resilience, determination, and aspiration that define the BCK spirit. Through challenges and triumphs, the BCK community rises together.
          </p>
        </div>
      </section>

      {/* Memory Wall */}
      <section className="section-padding bg-background">
        <div className="container-wide text-center max-w-2xl">
          <BookOpen className="w-10 h-10 text-secondary mx-auto mb-6" />
          <h2 className="text-3xl font-heading font-bold text-foreground mb-4">Memory Wall</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            This space is reserved for alumni recollections, oral histories, and personal memories of life at BCK. As we grow, this section will become a living archive of the BCK experience.
          </p>
          <p className="text-sm text-muted-foreground italic">
            Have a memory to share? <a href="/contact" className="text-secondary hover:underline">Contact us</a> to contribute.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default HistoryPage;
