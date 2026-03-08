import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { BookOpen, Star } from "lucide-react";

const timeline = [
  { year: "1999", title: "School Founded", description: "Bishop Cipriano Kihangire Senior Secondary School begins operations on 9 February 1999 with 120 students, founded by Fr. John Scalabrini in memory of Bishop Cipriano Biyehima Kihangire." },
  { year: "1999", title: "Official Commissioning", description: "The school is officially commissioned on 15 August 1999 by Emmanuel Cardinal Wamala, marking its formal recognition as a Catholic educational institution." },
  { year: "Early 2000s", title: "Growth & Expansion", description: "The school expands its student body, facilities, and academic programs, establishing a reputation for discipline, academic rigour, and Catholic values." },
  { year: "2010s", title: "Institutional Maturity", description: "BCK SSS grows into a large-scale institution with boarding facilities, expanded O-Level and A-Level programs, and a thriving co-curricular life including sports, arts, and leadership programs." },
  { year: "2020", title: "BICKOSA COVID-19 Relief Drive", description: "The alumni association organises a COVID-19 Relief Drive at BCK SSS staff quarters, including tree planting and urban backyard farming demonstrations — demonstrating alumni service in action." },
  { year: "2022", title: "Post-COVID Reopening at Scale", description: "The school reopens after 83 weeks of COVID closure. Fondazione Italia Uganda reports 2,754 secondary students and 3,952 total learners across the BCK schools ecosystem." },
  { year: "2023", title: "BICKOSA League Launched", description: "The Old Students Association launches the BICKOSA League — a structured alumni football competition with 13 teams. Basketball is later added, with plans for volleyball, netball, and indoor sports." },
  { year: "2024", title: "Silver Jubilee", description: "BCK SSS celebrates 25 years since its founding. The Silver Jubilee includes fundraising toward a new academic block and milestone celebrations bringing alumni and the school community together." },
];

const HistoryPage = () => {
  return (
    <Layout>
      <section className="gradient-hero py-20 sm:py-28">
        <div className="container-wide px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "hsl(var(--gold))" }}>Our Story</p>
            <h1 className="text-4xl sm:text-5xl font-heading font-bold mb-6" style={{ color: "hsl(var(--primary-foreground))" }}>
              History & Legacy
            </h1>
            <p className="text-lg" style={{ color: "hsl(var(--primary-foreground) / 0.8)" }}>
              The story of BICKOSA is inseparable from the story of Bishop Cipriano Kihangire Senior Secondary School — a journey of growth, identity, community, and the enduring values that continue to shape generations.
            </p>
          </div>
        </div>
      </section>

      {/* Intro Narrative */}
      <section className="section-padding bg-background">
        <div className="container-wide max-w-3xl">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-6">A Story Worth Remembering</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            Every institution is built not only through time, but through the people who pass through it. The legacy of BCK lives in classrooms, friendships, school traditions, moments of discipline and growth, and the many lives shaped by the school's values.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            BICKOSA exists to help preserve that story — not as nostalgia alone, but as a living inheritance.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-card">
        <div className="container-wide max-w-4xl">
          <div className="text-center mb-16">
            <span className="text-secondary text-sm font-semibold tracking-widest uppercase">Through the Years</span>
            <h2 className="text-3xl font-heading font-bold text-foreground mt-3">Key Milestones</h2>
          </div>
          <div className="relative">
            <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-px bg-border sm:-translate-x-px" />
            <div className="space-y-12">
              {timeline.map((item, i) => (
                <div key={i} className={`relative flex items-start gap-6 sm:gap-12 ${i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"}`}>
                  <div className={`flex-1 ${i % 2 === 0 ? "sm:text-right" : "sm:text-left"} hidden sm:block`}>
                    {i % 2 === 0 && (
                      <div className="bento-card inline-block">
                        <span className="text-accent font-heading text-2xl font-bold">{item.year}</span>
                        <h3 className="font-heading text-lg font-semibold text-foreground mt-1">{item.title}</h3>
                        <p className="text-muted-foreground text-sm mt-2">{item.description}</p>
                      </div>
                    )}
                  </div>
                  <div className="absolute left-6 sm:left-1/2 w-4 h-4 rounded-full bg-secondary border-4 border-card -translate-x-1/2 mt-2 z-10" />
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

      {/* The Name and Legacy */}
      <section className="section-padding bg-background">
        <div className="container-wide max-w-3xl">
          <span className="text-secondary text-sm font-semibold tracking-widest uppercase">Heritage</span>
          <h2 className="text-3xl font-heading font-bold text-foreground mt-3 mb-6">The Meaning Behind the Name</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The school is named in honour of <strong className="text-foreground">Bishop Cipriano Biyehima Kihangire</strong> (1918–1990), a Ugandan Catholic bishop whose ecclesiastical service included major roles in Gulu and Hoima. His life embodied the values of faith, service, and dedication to community that continue to define the school's identity.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            The school was built by <strong className="text-foreground">Fr. John Scalabrini</strong>, a Catholic missionary who established schools and social services across the Luzira/Nakawa area of Kampala, as part of a broader mission to provide education and community development rooted in Catholic values. The school stands as part of the Emmaus/Fondazione ecosystem that continues Fr. Scalabrini's vision.
          </p>
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
            This motto captures something deeply familiar to many who have passed through BCK — the belief that growth requires discipline, resilience, and perseverance. For students and alumni alike, it speaks to the journey of becoming: through challenge, toward purpose.
          </p>
        </div>
      </section>

      {/* Memory Wall */}
      <section className="section-padding bg-card">
        <div className="container-wide text-center max-w-2xl">
          <BookOpen className="w-10 h-10 text-secondary mx-auto mb-6" />
          <h2 className="text-3xl font-heading font-bold text-foreground mb-4">Memory, Identity, and Belonging</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            What people remember most about school is rarely only academic. It is the friendships, routines, values, experiences, moments of laughter, moments of correction, and the feeling of belonging to something bigger than oneself.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            This page exists to help preserve that shared memory for generations to come.
          </p>
          <p className="text-sm text-muted-foreground italic">
            Have a memory to share? <Link to="/contact" className="text-secondary hover:underline">Contact us</Link> to contribute.
          </p>
        </div>
      </section>

      {/* Visual Archive */}
      <section className="section-padding bg-background">
        <div className="container-wide max-w-3xl">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-6">The Visual Archive</h2>
          <p className="text-muted-foreground leading-relaxed">
            Historic photographs, event moments, old publications, school celebrations, and alumni memories help keep the BCK story visible. Over time, this archive can grow into a rich record of the school's journey and the people who shaped it.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default HistoryPage;
