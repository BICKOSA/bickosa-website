import Layout from "@/components/Layout";
import { Link } from "react-router-dom";

const timeline = [
  { year: "1999", title: "School Founded", description: "Bishop Cipriano Kihangire Senior Secondary School begins operations on 9 February 1999 with 120 students, founded by Fr. John Scalabrini in memory of Bishop Cipriano Biyehima Kihangire." },
  { year: "1999", title: "Official Commissioning", description: "The school is officially commissioned on 15 August 1999 by Emmanuel Cardinal Wamala, marking its formal recognition as a Catholic educational institution." },
  { year: "Early 2000s", title: "Growth & Expansion", description: "The school expands its student body, facilities, and academic programs, establishing a reputation for discipline, academic rigour, and Catholic values." },
  { year: "2010s", title: "Institutional Maturity", description: "BCK SSS grows into a large-scale institution with boarding facilities, expanded O-Level and A-Level programs, and a thriving co-curricular life." },
  { year: "2020", title: "BICKOSA COVID-19 Relief Drive", description: "The alumni association organises a COVID-19 Relief Drive at BCK SSS staff quarters, including tree planting and urban backyard farming demonstrations." },
  { year: "2022", title: "Post-COVID Reopening at Scale", description: "The school reopens after 83 weeks of COVID closure. Fondazione Italia Uganda reports 2,754 secondary students and 3,952 total learners." },
  { year: "2023", title: "BICKOSA League Launched", description: "The Old Students Association launches the BICKOSA League — a structured alumni football competition with 13 teams." },
  { year: "2024", title: "Silver Jubilee", description: "BCK SSS celebrates 25 years since its founding. The Silver Jubilee includes fundraising toward a new academic block and milestone celebrations." },
];

const HistoryPage = () => {
  return (
    <Layout>
      <section className="page-hero">
        <div className="container-wide px-6 sm:px-8 lg:px-12">
          <div className="max-w-xl">
            <p className="text-[12px] font-medium uppercase tracking-[0.15em] mb-5" style={{ color: "hsl(var(--gold))" }}>Our Story</p>
            <h1 className="text-[40px] sm:text-[48px] font-bold tracking-tight leading-[1.08] mb-5" style={{ color: "hsl(var(--primary-foreground))" }}>
              History & Legacy
            </h1>
            <p className="text-[16px] leading-[1.65]" style={{ color: "hsl(var(--primary-foreground) / 0.55)" }}>
              The story of BICKOSA is inseparable from the story of Bishop Cipriano Kihangire Senior Secondary School — a journey of growth, identity, community, and enduring values.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide max-w-2xl">
          <h2 className="text-[28px] sm:text-[32px] font-bold tracking-tight text-foreground leading-[1.15] mb-6">A Story Worth Remembering</h2>
          <p className="text-[16px] text-muted-foreground leading-[1.7] mb-4">
            Every institution is built not only through time, but through the people who pass through it. The legacy of BCK lives in classrooms, friendships, school traditions, moments of discipline and growth, and the many lives shaped by the school's values.
          </p>
          <p className="text-[15px] text-muted-foreground leading-[1.7]">
            BICKOSA exists to help preserve that story — not as nostalgia alone, but as a living inheritance.
          </p>
        </div>
      </section>

      <section className="section-padding bg-muted">
        <div className="container-wide max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-4">Through the Years</p>
          <h2 className="text-[28px] sm:text-[32px] font-bold tracking-tight text-foreground leading-[1.15] mb-12">Key Milestones</h2>
          <div className="border-t border-border">
            {timeline.map((item, i) => (
              <div key={i} className="grid grid-cols-[80px_1fr] sm:grid-cols-[120px_1fr] gap-6 py-8 border-b border-border">
                <div>
                  <p className="text-[14px] font-semibold text-foreground">{item.year}</p>
                </div>
                <div>
                  <h3 className="text-[15px] font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-[14px] text-muted-foreground leading-[1.7]">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-4">Heritage</p>
          <h2 className="text-[28px] sm:text-[32px] font-bold tracking-tight text-foreground leading-[1.15] mb-6">The Meaning Behind the Name</h2>
          <p className="text-[15px] text-muted-foreground leading-[1.7] mb-4">
            The school is named in honour of <strong className="text-foreground font-medium">Bishop Cipriano Biyehima Kihangire</strong> (1918–1990), a Ugandan Catholic bishop whose ecclesiastical service included major roles in Gulu and Hoima.
          </p>
          <p className="text-[15px] text-muted-foreground leading-[1.7]">
            The school was built by <strong className="text-foreground font-medium">Fr. John Scalabrini</strong>, a Catholic missionary who established schools and social services across the Luzira/Nakawa area of Kampala, as part of a broader mission to provide education rooted in Catholic values.
          </p>
        </div>
      </section>

      <section className="section-padding bg-muted">
        <div className="container-wide text-center max-w-lg">
          <p className="serif-accent text-[28px] sm:text-[32px] text-foreground leading-[1.3] mb-4">
            "Per Aspera Ad Astra"
          </p>
          <p className="text-[15px] text-muted-foreground">Through Hardship to the Stars</p>
          <p className="text-[14px] text-muted-foreground leading-[1.7] mt-6 max-w-md mx-auto">
            This motto captures something deeply familiar to many who have passed through BCK — the belief that growth requires discipline, resilience, and perseverance.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide text-center max-w-lg">
          <h2 className="text-[28px] sm:text-[32px] font-bold tracking-tight text-foreground leading-[1.15] mb-4">Memory, Identity, and Belonging</h2>
          <p className="text-[15px] text-muted-foreground leading-[1.7] mb-6">
            What people remember most about school is rarely only academic. It is the friendships, routines, values, and the feeling of belonging to something bigger than oneself.
          </p>
          <p className="text-[13px] text-muted-foreground">
            Have a memory to share? <Link to="/contact" className="text-foreground font-medium hover:opacity-70 transition-opacity">Contact us</Link> to contribute.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default HistoryPage;
