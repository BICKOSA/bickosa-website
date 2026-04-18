import Layout from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
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
      <PageHero
        eyebrow="Our Story"
        title="History & Legacy"
        description="A journey of growth, identity, community, and enduring values — from 1999 to today."
        image={heroImg}
      />

      <section className="section">
        <div className="grid lg:grid-cols-[1fr_380px] gap-16 items-start">
            <div>
              <p className="section-eyebrow">Our Story</p>
              <h2 className="section-heading">A Story Worth Remembering</h2>
              <p className="section-sub">
                Every institution is built not only through time, but through the people who pass through it. The legacy of BCK lives in classrooms, friendships, traditions, and the many lives shaped by the school's values.
              </p>
              <p className="text-[15px] leading-[1.75]" style={{ color: "var(--text-secondary)" }}>
                BICKOSA exists to help preserve that story — not as nostalgia alone, but as a living inheritance.
              </p>
            </div>
            <div className="rounded-bento-2xl overflow-hidden shadow-lg">
              <img src={heritageImg} alt="BCK SSS Heritage" className="w-full aspect-[3/4] object-cover" />
            </div>
        </div>
      </section>

      <section className="section max-w-3xl">
          <p className="section-eyebrow">Timeline</p>
          <h2 className="section-heading mb-12">Key Milestones</h2>

          <div className="relative">
            <div className="absolute left-[15px] top-0 bottom-0 w-px" style={{ background: "var(--border)" }} />

            <div className="space-y-0">
              {timeline.map((item, i) => (
                <div key={i} className="relative flex gap-8 pb-10 last:pb-0">
                  <div className="relative flex-shrink-0">
                    <div className={`w-[31px] h-[31px] rounded-full border-[3px] flex items-center justify-center z-10 relative ${item.accent}`} style={{ borderColor: "var(--surface)" }}>
                      <div className="w-2 h-2 rounded-full" style={{ background: "var(--surface)" }} />
                    </div>
                  </div>

                  <div className="flex-1 pb-8 border-b last:border-b-0" style={{ borderColor: "var(--border)" }}>
                    <p className="text-[13px] font-bold mb-1" style={{ color: "var(--gold-600)" }}>{item.year}</p>
                    <h3 className="text-[16px] font-semibold mb-2" style={{ color: "var(--navy-900)" }}>{item.title}</h3>
                    <p className="text-[14px] leading-[1.75]" style={{ color: "var(--text-secondary)" }}>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
      </section>

      <section className="section max-w-2xl">
          <p className="section-eyebrow">Impact</p>
          <h2 className="section-heading">The Meaning Behind the Name</h2>
          <p className="text-[15px] leading-[1.75] mb-4" style={{ color: "var(--text-secondary)" }}>
            The school is named in honour of <strong className="font-medium" style={{ color: "var(--navy-900)" }}>Bishop Cipriano Biyehima Kihangire</strong>, whose legacy has been part of the school's identity since its founding in 1999.
          </p>
          <p className="text-[15px] leading-[1.75]" style={{ color: "var(--text-secondary)" }}>
            The school was built by <strong className="font-medium" style={{ color: "var(--navy-900)" }}>Fr. John Scalabrini</strong>, a Catholic missionary who established schools and social services across the Luzira/Nakawa area of Kampala.
          </p>
      </section>

      <section className="rounded-bento-2xl overflow-hidden mt-10" style={{ background: "var(--navy-900)" }}>
        <div className="max-w-[1280px] mx-auto px-6 sm:px-8 py-20 sm:py-28 text-center">
          <p className="serif-heading text-[30px] sm:text-[36px] leading-[1.3] mb-4" style={{ color: "var(--gold-500)" }}>
            &ldquo;Per Aspera Ad Astra&rdquo;
          </p>
          <p className="text-[15px] mb-2" style={{ color: "var(--navy-200)" }}>Through Hardship to the Stars</p>
          <p className="text-[14px] leading-[1.7] mt-6 max-w-md mx-auto" style={{ color: "var(--navy-300)" }}>
            This motto captures something deeply familiar to many who have passed through BCK — the belief that growth requires discipline, resilience, and perseverance.
          </p>
        </div>
      </section>

      <section className="section text-center max-w-lg mx-auto">
        <p className="section-eyebrow">Community</p>
        <h2 className="section-heading">Memory, Identity, and Belonging</h2>
        <p className="text-[15px] leading-[1.75] mb-6" style={{ color: "var(--text-secondary)" }}>
          What people remember most about school is rarely only academic. It is the friendships, routines, values, and the feeling of belonging to something bigger.
        </p>
        <p className="text-[13px]" style={{ color: "var(--text-secondary)" }}>
          Have a memory to share? <Link to="/contact" className="font-semibold transition-colors hover:opacity-90" style={{ color: "hsl(var(--cobalt))" }}>Contact us</Link> to contribute.
        </p>
      </section>
    </Layout>
  );
};

export default HistoryPage;
