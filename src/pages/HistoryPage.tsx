import Layout from "@/components/Layout";
import { Link } from "react-router-dom";

const timeline = [
  { year: "1999", title: "School Founded", description: "BCK SSS begins operations on 9 February 1999 with 120 students, founded by Fr. John Scalabrini.", accent: "bg-gold" },
  { year: "1999", title: "Official Commissioning", description: "Commissioned on 15 August 1999 by Emmanuel Cardinal Wamala.", accent: "bg-cobalt" },
  { year: "Early 2000s", title: "Growth & Expansion", description: "The school expands its student body, facilities, and academic programs.", accent: "bg-teal" },
  { year: "2010s", title: "Institutional Maturity", description: "BCK SSS grows into a large-scale institution with boarding facilities and expanded programs.", accent: "bg-coral" },
  { year: "2020", title: "BICKOSA COVID-19 Relief Drive", description: "Alumni organise a relief drive including tree planting and urban backyard farming.", accent: "bg-teal" },
  { year: "2022", title: "Post-COVID Reopening", description: "The school reopens after 83 weeks of closure. Fondazione reports 2,754 secondary students.", accent: "bg-cobalt" },
  { year: "2023", title: "BICKOSA League Launched", description: "The alumni association launches a structured football competition with 13 teams.", accent: "bg-coral" },
  { year: "2024", title: "Silver Jubilee", description: "BCK SSS celebrates 25 years. The Silver Jubilee includes fundraising toward a new academic block.", accent: "bg-gold" },
];

const decades = ["1990s", "2000s", "2010s", "2020s"];

const HistoryPage = () => {
  return (
    <Layout>
      <section className="page-hero">
        <div className="container-wide px-6 sm:px-8 lg:px-12">
          <div className="max-w-2xl">
            <p className="overline text-gold mb-5">Our Story</p>
            <h1 className="text-[40px] sm:text-[52px] lg:text-[56px] font-bold tracking-tight leading-[1.1] mb-6 text-primary-foreground">
              History & legacy
            </h1>
            <p className="text-[17px] sm:text-[18px] leading-[1.65] text-primary-foreground/50">
              A timeline of milestones, memories, and community growth.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide max-w-readable">
          <h2 className="text-[28px] sm:text-[32px] font-bold tracking-tight text-foreground leading-[1.15] mb-6">A story worth remembering</h2>
          <p className="text-[16px] text-muted-foreground leading-[1.7]">
            Every institution is built not only through time, but through the people who pass through it. The legacy of BCK lives in classrooms, friendships, traditions, and the many lives shaped by the school's values.
          </p>
        </div>
      </section>

      {/* Jump to decade */}
      <section className="bg-background border-b border-border">
        <div className="container-wide px-6 sm:px-8 lg:px-12 pb-6">
          <div className="flex flex-wrap gap-2">
            {decades.map((d) => (
              <span key={d} className="inline-flex items-center px-4 py-2 rounded-lg bg-muted text-[13px] font-medium text-muted-foreground hover:text-foreground hover:bg-border cursor-pointer transition-colors duration-150">
                {d}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding section-alt">
        <div className="container-wide max-w-3xl">
          <div className="relative">
            <div className="absolute left-[15px] top-0 bottom-0 w-px bg-border" />
            <div className="space-y-0">
              {timeline.map((item, i) => (
                <div key={i} className="relative flex gap-8 pb-10 last:pb-0">
                  <div className="relative flex-shrink-0">
                    <div className={`w-[31px] h-[31px] rounded-full border-[3px] border-background flex items-center justify-center z-10 relative ${item.accent}`}>
                      <div className="w-2 h-2 rounded-full bg-background" />
                    </div>
                  </div>
                  <div className="flex-1 pb-8 border-b border-border last:border-b-0">
                    <p className="text-[13px] font-bold text-gold mb-1.5">{item.year}</p>
                    <h3 className="text-[17px] font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-[14px] text-muted-foreground leading-[1.7]">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Name meaning */}
      <section className="section-padding bg-background">
        <div className="container-wide max-w-readable">
          <h2 className="text-[28px] sm:text-[32px] font-bold tracking-tight text-foreground leading-[1.15] mb-6">The meaning behind the name</h2>
          <p className="text-[15px] text-muted-foreground leading-[1.7] mb-4">
            The school is named in honour of <strong className="text-foreground font-medium">Bishop Cipriano Biyehima Kihangire</strong> (1918–1990), a Ugandan Catholic bishop whose service included major roles in Gulu and Hoima.
          </p>
          <p className="text-[15px] text-muted-foreground leading-[1.7]">
            The school was built by <strong className="text-foreground font-medium">Fr. John Scalabrini</strong>, who established schools and social services across the Luzira/Nakawa area.
          </p>
        </div>
      </section>

      {/* Motto */}
      <section className="bg-navy">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12 py-20 sm:py-28 text-center">
          <p className="serif-heading text-[28px] sm:text-[36px] text-gold leading-[1.3] mb-4">"Per Aspera Ad Astra"</p>
          <p className="text-[15px] text-primary-foreground/45 mb-2">Through Hardship to the Stars</p>
          <p className="text-[14px] text-primary-foreground/30 leading-[1.7] mt-6 max-w-md mx-auto">
            This motto captures something deeply familiar to many who have passed through BCK — the belief that growth requires discipline, resilience, and perseverance.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide text-center max-w-lg">
          <h2 className="text-[28px] sm:text-[32px] font-bold tracking-tight text-foreground leading-[1.15] mb-4">Share a memory</h2>
          <p className="text-[15px] text-muted-foreground leading-[1.7] mb-6">
            Have a memory, photo, or document to share? Help keep the archive alive.
          </p>
          <Link to="/contact" className="text-[14px] font-semibold text-cobalt hover:text-cobalt-light transition-colors duration-150">
            Contact us to contribute →
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default HistoryPage;
