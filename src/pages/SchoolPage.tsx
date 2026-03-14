import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import heroImg from "@/assets/hero-school.jpg";

const SchoolPage = () => {
  return (
    <Layout>
      <section className="page-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={heroImg} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative container-wide px-6 sm:px-8 lg:px-12">
          <div className="max-w-xl">
            <div className="gold-accent-bar" />
            <p className="text-[12px] font-semibold uppercase tracking-[0.15em] mb-5 text-gold">Our Foundation</p>
            <h1 className="text-[42px] sm:text-[52px] font-extrabold tracking-tight leading-[1.06] mb-5 text-primary-foreground">
              Bishop Cipriano Kihangire S.S.S.
            </h1>
            <p className="text-[16px] leading-[1.7] text-primary-foreground/55">
              The school at the heart of the BICKOSA story — shaping generations through faith, discipline, excellence, and community.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <div>
              <div className="gold-accent-bar" />
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
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img src={heroImg} alt="BCK SSS Campus" className="w-full aspect-[4/3] object-cover" />
              </div>
              <div className="absolute -bottom-5 -right-4 bg-navy rounded-lg p-5 shadow-xl">
                <p className="text-[24px] font-bold text-gold tracking-tight">2,750+</p>
                <p className="text-[11px] text-primary-foreground/50">Students enrolled</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted">
        <div className="container-wide max-w-2xl">
          <h2 className="text-[30px] sm:text-[34px] font-bold tracking-tight text-foreground leading-[1.15] mb-6">Grounded in Heritage</h2>
          <p className="text-[15px] text-muted-foreground leading-[1.75] mb-4">
            The story of BCK is tied to the broader Catholic educational tradition shaped by Fr. John Scalabrini, who built the school in memory of Bishop Cipriano Biyehima Kihangire. The school's identity reflects a commitment to learning, character, service, and spiritual formation.
          </p>
          <p className="text-[15px] text-muted-foreground leading-[1.75]">
            It is this foundation — supported by the Fondazione Italia Uganda and the Emmaus Foundation Trust — that continues to make the school meaningful to both current and old students.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid sm:grid-cols-3 gap-5">
            <div className="bg-card border border-border rounded-xl p-8 text-center">
              <div className="w-10 h-10 rounded-lg bg-cobalt/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-cobalt font-bold">✦</span>
              </div>
              <p className="text-[15px] font-semibold text-foreground mb-2">Vision</p>
              <p className="text-[13px] text-muted-foreground leading-relaxed">For Unity, Academic Excellence, and Moral Uprightness.</p>
            </div>
            <div className="bg-navy rounded-xl p-8 text-center">
              <div className="w-10 h-10 rounded-lg bg-gold/15 flex items-center justify-center mx-auto mb-4">
                <span className="text-gold font-bold">★</span>
              </div>
              <p className="text-[15px] font-semibold text-primary-foreground mb-2">Motto</p>
              <p className="text-[13px] text-primary-foreground/55 leading-relaxed">Per Aspera Ad Astra — Through hardship to the stars.</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-8 text-center">
              <div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-teal font-bold">◆</span>
              </div>
              <p className="text-[15px] font-semibold text-foreground mb-2">Ethos</p>
              <p className="text-[13px] text-muted-foreground leading-relaxed">Discipline, faith, growth, leadership, and service.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted">
        <div className="container-wide max-w-2xl">
          <h2 className="text-[30px] sm:text-[34px] font-bold tracking-tight text-foreground leading-[1.15] mb-6">More Than the Classroom</h2>
          <p className="text-[15px] text-muted-foreground leading-[1.75] mb-4">
            Life at BCK has always been shaped by more than academics alone. The school experience includes discipline, co-curricular participation, mentorship, sports, leadership, and the day-to-day relationships that leave a lasting impression.
          </p>
          <p className="text-[15px] text-muted-foreground leading-[1.75]">
            The school maintains strong sports programming — including a football academy, upgraded sports equipment, and PE training — alongside arts, choral traditions, and structured student leadership development.
          </p>
        </div>
      </section>

      <section className="bg-navy">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-20 sm:py-24 text-center">
          <h2 className="text-[30px] sm:text-[34px] font-bold tracking-tight text-primary-foreground leading-[1.15] mb-6">A Legacy That Continues</h2>
          <p className="text-[15px] text-primary-foreground/50 leading-[1.75] mb-8 max-w-md mx-auto">
            From 120 students in 1999 to over 2,750 in 2022, the story of the school lives in the people it has shaped.
          </p>
          <Link to="/about" className="inline-flex items-center h-11 px-6 text-[14px] font-semibold bg-gold text-navy rounded-md hover:bg-gold-light transition-colors">
            Learn about BICKOSA
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default SchoolPage;
