import Layout from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { Link } from "react-router-dom";
import schoolCampus from "@/assets/school-courtyard.png";
import schoolBuilding from "@/assets/school-green-roofs.png";

const SchoolPage = () => {
  return (
    <Layout>
      <PageHero
        eyebrow="Our Foundation"
        title="Bishop Cipriano Kihangire S.S.S."
        description="The school at the heart of the BICKOSA story — shaping generations through faith, discipline, excellence, and community."
        image={schoolBuilding}
      />

      <section className="section">
        <div className="grid lg:grid-cols-2 gap-14 items-start">
            <div>
              <p className="section-eyebrow">Identity</p>
              <h2 className="text-[30px] sm:text-[34px] font-bold tracking-tight text-foreground leading-[1.15] mb-6">A School with Identity and Purpose</h2>
              <p className="text-[15px] text-muted-foreground leading-[1.75] mb-4">
                Bishop Cipriano Kihangire Senior Secondary School, located in Bbiina/Luzira, Kampala, is a private Catholic secondary school offering both O-Level and A-Level education as a mixed day and boarding institution. Founded by Fr. John Scalabrini in 1999, the school began operations on 9 February 1999 with 120 students.
              </p>
              <p className="text-[15px] text-muted-foreground leading-[1.75] mb-4">
                Named in honour of Bishop Cipriano Biyehima Kihangire (1918–1990), the school is part of the Emmaus/Fondazione ecosystem. As of 2022, it serves over 2,750 secondary students.
              </p>
              <div className="flex items-center gap-3 mt-6 text-[13px] text-muted-foreground">
                <span className="w-2 h-2 rounded-full bg-teal" />
                Bbiina/Luzira, Kampala · P.O. Box 27477
              </div>
            </div>
            <div className="relative">
              <div className="rounded-bento-2xl overflow-hidden shadow-lg">
                <img src={schoolCampus} alt="BCK SSS Campus" className="w-full aspect-[4/3] object-cover" />
              </div>
              <div className="absolute -bottom-5 -right-4 bg-navy rounded-bento-xl p-5 shadow-xl" style={{ background: "var(--navy-900)" }}>
                <p className="text-[24px] font-bold text-gold tracking-tight">2,750+</p>
                <p className="text-[11px] text-primary-foreground/50">Students enrolled</p>
              </div>
            </div>
        </div>
      </section>

      <section className="section max-w-2xl">
        <h2 className="text-[30px] sm:text-[34px] font-bold tracking-tight text-foreground leading-[1.15] mb-6">Grounded in Heritage</h2>
        <p className="text-[15px] text-muted-foreground leading-[1.75] mb-4">
          The story of BCK is tied to the broader Catholic educational tradition shaped by Fr. John Scalabrini, who built the school in memory of Bishop Cipriano Biyehima Kihangire. The school's identity reflects a commitment to learning, character, service, and spiritual formation.
        </p>
        <p className="text-[15px] text-muted-foreground leading-[1.75]">
          It is this foundation — supported by the Fondazione Italia Uganda and the Emmaus Foundation Trust — that continues to make the school meaningful to both current and old students.
        </p>
      </section>

      <section className="section">
        <div className="grid sm:grid-cols-3 gap-5">
          <div className="bg-card border border-border rounded-bento-2xl p-8 text-center">
              <div className="w-10 h-10 rounded-bento-lg bg-cobalt/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-cobalt font-bold">✦</span>
              </div>
              <p className="text-[15px] font-semibold text-foreground mb-2">Vision</p>
              <p className="text-[13px] text-muted-foreground leading-relaxed">For Unity, Academic Excellence, and Moral Uprightness.</p>
            </div>
            <div className="rounded-bento-2xl p-8 text-center" style={{ background: "var(--navy-900)", color: "var(--white)" }}>
              <div className="w-10 h-10 rounded-bento-lg bg-gold/15 flex items-center justify-center mx-auto mb-4">
                <span className="text-gold font-bold">★</span>
              </div>
              <p className="text-[15px] font-semibold text-primary-foreground mb-2">Motto</p>
              <p className="text-[13px] text-primary-foreground/55 leading-relaxed">Per Aspera Ad Astra — Through hardship to the stars.</p>
            </div>
            <div className="bg-card border border-border rounded-bento-2xl p-8 text-center">
              <div className="w-10 h-10 rounded-bento-lg bg-teal/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-teal font-bold">◆</span>
              </div>
              <p className="text-[15px] font-semibold text-foreground mb-2">Ethos</p>
              <p className="text-[13px] text-muted-foreground leading-relaxed">Discipline, faith, growth, leadership, and service.</p>
          </div>
        </div>
      </section>

      <section className="section max-w-2xl">
        <p className="section-eyebrow">Experience</p>
        <h2 className="section-heading">More Than the Classroom</h2>
          <p className="text-[15px] text-muted-foreground leading-[1.75] mb-4">
            Life at BCK has always been shaped by more than academics alone. The school experience includes discipline, co-curricular participation, mentorship, sports, leadership, and the day-to-day relationships that leave a lasting impression.
          </p>
        <p className="text-[15px] text-muted-foreground leading-[1.75]">
          The school maintains strong sports programming — including a football academy, upgraded sports equipment, and PE training — alongside arts, choral traditions, and structured student leadership development.
        </p>
      </section>

      <section className="rounded-bento-2xl overflow-hidden mt-10" style={{ background: "var(--navy-900)" }}>
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-20 sm:py-24 text-center">
          <h2 className="text-[30px] sm:text-[34px] font-bold tracking-tight text-primary-foreground leading-[1.15] mb-6">A Legacy That Continues</h2>
          <p className="text-[15px] text-primary-foreground/50 leading-[1.75] mb-8 max-w-md mx-auto">
            From 120 students in 1999 to over 2,750 in 2022, the story of the school lives in the people it has shaped.
          </p>
          <Link to="/about" className="inline-flex items-center h-11 px-6 text-[14px] font-semibold bg-gold text-navy rounded-bento-xl hover:bg-gold-light transition-colors">
            Learn about BICKOSA
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default SchoolPage;
