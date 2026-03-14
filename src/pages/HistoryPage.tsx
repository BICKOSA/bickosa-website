import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import heroImg from "@/assets/school-courtyard.png";
import heritageImg from "@/assets/school-green-roofs.png";

const timeline = [
  { year: "1999", title: "School Founded", description: "BCK SSS begins operations on 9 February 1999 with 120 students, founded by Fr. John Scalabrini in memory of Bishop Cipriano Biyehima Kihangire.", accent: "bg-gold" },
  { year: "1999", title: "Official Commissioning", description: "Officially commissioned on 15 August 1999 by Emmanuel Cardinal Wamala, marking its formal recognition as a Catholic educational institution.", accent: "bg-cobalt" },
  { year: "Early 2000s", title: "Growth & Expansion", description: "The school expands its student body, facilities, and academic programs, establishing a reputation for discipline and academic rigour.", accent: "bg-teal" },
  { year: "2010s", title: "Institutional Maturity", description: "BCK SSS grows into a large-scale institution with boarding facilities, expanded O-Level and A-Level programs, and thriving co-curricular life.", accent: "bg-coral" },
  { year: "2020", title: "BICKOSA COVID-19 Relief Drive", description: "The alumni association organises a COVID-19 Relief Drive at BCK SSS staff quarters, including tree planting and urban backyard farming.", accent: "bg-teal" },
  { year: "2022", title: "Post-COVID Reopening at Scale", description: "The school reopens after 83 weeks of COVID closure. Fondazione Italia Uganda reports 2,754 secondary students and 3,952 total learners.", accent: "bg-cobalt" },
  { year: "2023", title: "BICKOSA League Launched", description: "The Old Students Association launches the BICKOSA League — a structured alumni football competition with 13 teams.", accent: "bg-coral" },
  { year: "2024", title: "Silver Jubilee", description: "BCK SSS celebrates 25 years since its founding. The Silver Jubilee includes fundraising toward a new academic block and milestone celebrations.", accent: "bg-gold" },
];

const HistoryPage = () => {
  return (
    <Layout>
      <section className="page-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={heroImg} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative container-wide px-6 sm:px-8 lg:px-12">
          <div className="max-w-xl">
            <div className="gold-accent-bar" />
            <p className="text-[12px] font-semibold uppercase tracking-[0.15em] mb-5 text-gold">Our Story</p>
            <h1 className="text-[42px] sm:text-[52px] font-extrabold tracking-tight leading-[1.06] mb-5 text-primary-foreground">
              History & Legacy
            </h1>
            <p className="text-[16px] leading-[1.7] text-primary-foreground/55">
              A journey of growth, identity, community, and enduring values — from 1999 to today.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-[1fr_380px] gap-16 items-start">
            <div>
              <h2 className="text-[30px] sm:text-[34px] font-bold tracking-tight text-foreground leading-[1.15] mb-6">A Story Worth Remembering</h2>
              <p className="text-[16px] text-muted-foreground leading-[1.75] mb-4">
                Every institution is built not only through time, but through the people who pass through it. The legacy of BCK lives in classrooms, friendships, traditions, and the many lives shaped by the school's values.
              </p>
              <p className="text-[15px] text-muted-foreground leading-[1.75]">
                BICKOSA exists to help preserve that story — not as nostalgia alone, but as a living inheritance.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img src={heritageImg} alt="BCK SSS Heritage" className="w-full aspect-[3/4] object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted">
        <div className="container-wide max-w-3xl">
          <div className="gold-accent-bar" />
          <p className="text-[12px] font-semibold uppercase tracking-[0.15em] text-gold mb-4">Through the Years</p>
          <h2 className="text-[30px] sm:text-[34px] font-bold tracking-tight text-foreground leading-[1.15] mb-12">Key Milestones</h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-[15px] top-0 bottom-0 w-px bg-border" />

            <div className="space-y-0">
              {timeline.map((item, i) => (
                <div key={i} className="relative flex gap-8 pb-10 last:pb-0">
                  {/* Timeline dot */}
                  <div className="relative flex-shrink-0">
                    <div className={`w-[31px] h-[31px] rounded-full border-[3px] border-background flex items-center justify-center z-10 relative ${item.accent}`}>
                      <div className="w-2 h-2 rounded-full bg-background" />
                    </div>
                  </div>

                  <div className="flex-1 pb-8 border-b border-border last:border-b-0">
                    <p className="text-[13px] font-bold text-gold mb-1">{item.year}</p>
                    <h3 className="text-[16px] font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-[14px] text-muted-foreground leading-[1.75]">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide max-w-2xl">
          <div className="gold-accent-bar" />
          <h2 className="text-[30px] sm:text-[34px] font-bold tracking-tight text-foreground leading-[1.15] mb-6">The Meaning Behind the Name</h2>
          <p className="text-[15px] text-muted-foreground leading-[1.75] mb-4">
            The school is named in honour of <strong className="text-foreground font-medium">Bishop Cipriano Biyehima Kihangire</strong> (1918–1990), a Ugandan Catholic bishop whose ecclesiastical service included major roles in Gulu and Hoima.
          </p>
          <p className="text-[15px] text-muted-foreground leading-[1.75]">
            The school was built by <strong className="text-foreground font-medium">Fr. John Scalabrini</strong>, a Catholic missionary who established schools and social services across the Luzira/Nakawa area of Kampala.
          </p>
        </div>
      </section>

      <section className="bg-navy">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-20 sm:py-28 text-center">
          <p className="serif-heading text-[30px] sm:text-[36px] text-gold leading-[1.3] mb-4">
            "Per Aspera Ad Astra"
          </p>
          <p className="text-[15px] text-primary-foreground/50 mb-2">Through Hardship to the Stars</p>
          <p className="text-[14px] text-primary-foreground/35 leading-[1.7] mt-6 max-w-md mx-auto">
            This motto captures something deeply familiar to many who have passed through BCK — the belief that growth requires discipline, resilience, and perseverance.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide text-center max-w-lg">
          <h2 className="text-[30px] sm:text-[34px] font-bold tracking-tight text-foreground leading-[1.15] mb-4">Memory, Identity, and Belonging</h2>
          <p className="text-[15px] text-muted-foreground leading-[1.75] mb-6">
            What people remember most about school is rarely only academic. It is the friendships, routines, values, and the feeling of belonging to something bigger.
          </p>
          <p className="text-[13px] text-muted-foreground">
            Have a memory to share? <Link to="/contact" className="text-cobalt font-semibold hover:text-cobalt/80 transition-colors">Contact us</Link> to contribute.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default HistoryPage;
