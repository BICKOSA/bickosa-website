import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import heroImg from "@/assets/hero-school.jpg";

const SchoolPage = () => {
  return (
    <Layout>
      <section className="page-hero">
        <div className="container-wide px-6 sm:px-8 lg:px-12">
          <div className="max-w-xl">
            <p className="text-[12px] font-medium uppercase tracking-[0.15em] mb-5" style={{ color: "hsl(var(--gold))" }}>Our Foundation</p>
            <h1 className="text-[40px] sm:text-[48px] font-bold tracking-tight leading-[1.08] mb-5" style={{ color: "hsl(var(--primary-foreground))" }}>
              About Bishop Cipriano Kihangire S.S.S.
            </h1>
            <p className="text-[16px] leading-[1.65]" style={{ color: "hsl(var(--primary-foreground) / 0.55)" }}>
              The school at the heart of the BICKOSA story — shaping generations through faith, discipline, excellence, and community.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-4">The School</p>
              <h2 className="text-[28px] sm:text-[32px] font-bold tracking-tight text-foreground leading-[1.15] mb-6">A School with Identity and Purpose</h2>
              <p className="text-[15px] text-muted-foreground leading-[1.7] mb-4">
                Bishop Cipriano Kihangire Senior Secondary School, located in Bbiina/Luzira, Kampala, is a private Catholic secondary school offering both O-Level and A-Level education as a mixed day and boarding institution. Founded by Fr. John Scalabrini in 1999, the school began operations on 9 February 1999 with 120 students and was officially commissioned on 15 August 1999 by Emmanuel Cardinal Wamala.
              </p>
              <p className="text-[15px] text-muted-foreground leading-[1.7] mb-4">
                Named in honour of Bishop Cipriano Biyehima Kihangire (1918–1990), the school is part of the Emmaus/Fondazione ecosystem. As of 2022, the school serves over 2,750 secondary students, with 2,310 in boarding.
              </p>
              <p className="text-[13px] text-muted-foreground mt-6">Bbiina/Luzira, Kampala, Uganda · P.O. Box 27477</p>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img src={heroImg} alt="BCK SSS Campus" className="w-full aspect-[4/3] object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted">
        <div className="container-wide max-w-2xl">
          <h2 className="text-[28px] sm:text-[32px] font-bold tracking-tight text-foreground leading-[1.15] mb-6">Grounded in Heritage</h2>
          <p className="text-[15px] text-muted-foreground leading-[1.7] mb-4">
            The story of BCK is tied to the broader Catholic educational and community tradition shaped by Fr. John Scalabrini, who built the school in memory of Bishop Cipriano Biyehima Kihangire. The school's identity reflects a commitment not only to learning, but also to character, service, and spiritual formation.
          </p>
          <p className="text-[15px] text-muted-foreground leading-[1.7]">
            It is this foundation — supported by the Fondazione Italia Uganda and the Emmaus Foundation Trust — that continues to make the school meaningful to both current students and old students.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid sm:grid-cols-3 gap-px bg-border rounded-lg overflow-hidden">
            <div className="bg-card p-8 sm:p-10 text-center">
              <p className="text-[14px] font-semibold text-foreground mb-2">Vision</p>
              <p className="text-[13px] text-muted-foreground leading-relaxed">For Unity, Academic Excellence, and Moral Uprightness.</p>
            </div>
            <div className="p-8 sm:p-10 text-center" style={{ background: "hsl(var(--navy))" }}>
              <p className="text-[14px] font-semibold mb-2" style={{ color: "hsl(var(--primary-foreground))" }}>Motto</p>
              <p className="text-[13px] leading-relaxed" style={{ color: "hsl(var(--primary-foreground) / 0.6)" }}>Per Aspera Ad Astra — Through hardship to the stars.</p>
            </div>
            <div className="bg-card p-8 sm:p-10 text-center">
              <p className="text-[14px] font-semibold text-foreground mb-2">Ethos</p>
              <p className="text-[13px] text-muted-foreground leading-relaxed">A culture of discipline, faith, growth, leadership, and service.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted">
        <div className="container-wide max-w-2xl">
          <h2 className="text-[28px] sm:text-[32px] font-bold tracking-tight text-foreground leading-[1.15] mb-6">More Than the Classroom</h2>
          <p className="text-[15px] text-muted-foreground leading-[1.7] mb-4">
            Life at BCK has always been shaped by more than academics alone. The school experience includes discipline, co-curricular participation, school identity, mentorship, sports, leadership, and the day-to-day relationships that leave a lasting impression.
          </p>
          <p className="text-[15px] text-muted-foreground leading-[1.7]">
            The school maintains strong sports programming — including a football academy, upgraded sports equipment, and PE training supported by Fondazione Milan — alongside arts, choral traditions, gender equity programming, and structured student leadership development.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide max-w-2xl">
          <h2 className="text-[28px] sm:text-[32px] font-bold tracking-tight text-foreground leading-[1.15] mb-6">A Legacy That Continues</h2>
          <p className="text-[15px] text-muted-foreground leading-[1.7] mb-8">
            From 120 students in 1999 to over 2,750 secondary learners in 2022, the story of the school is carried not only in buildings and classrooms, but also in the people it has shaped.
          </p>
          <Link to="/about" className="inline-flex items-center h-10 px-5 text-[14px] font-medium text-primary-foreground bg-primary rounded-md hover:opacity-90 transition-opacity">
            Learn about BICKOSA
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default SchoolPage;
