import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import heroImg from "@/assets/hero-school.jpg";

const SchoolPage = () => {
  return (
    <Layout>
      <section className="page-hero">
        <div className="container-wide px-6 sm:px-8 lg:px-12">
          <div className="max-w-2xl">
            <p className="overline text-gold mb-5">Our Foundation</p>
            <h1 className="text-[40px] sm:text-[52px] lg:text-[56px] font-bold tracking-tight leading-[1.1] mb-6 text-primary-foreground">
              Bishop Cipriano Kihangire S.S.S.
            </h1>
            <p className="text-[17px] sm:text-[18px] leading-[1.65] text-primary-foreground/50">
              The school at the heart of the BICKOSA story — shaping generations through faith, discipline, and community.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <div>
              <h2 className="text-[28px] sm:text-[32px] font-bold tracking-tight text-foreground leading-[1.15] mb-6">A school with identity and purpose</h2>
              <p className="text-[16px] text-muted-foreground leading-[1.7] mb-4">
                Bishop Cipriano Kihangire Senior Secondary School, located in Bbiina/Luzira, Kampala, is a private Catholic school offering both O-Level and A-Level education. Founded by Fr. John Scalabrini in 1999, the school began with 120 students.
              </p>
              <p className="text-[15px] text-muted-foreground leading-[1.7] mb-4">
                Named in honour of Bishop Cipriano Biyehima Kihangire (1918–1990), the school is part of the Emmaus/Fondazione ecosystem. As of 2022, it serves over 2,750 students.
              </p>
              <div className="flex items-center gap-3 mt-6 text-[13px] text-muted-foreground">
                <span className="w-2 h-2 rounded-full bg-teal" />
                Bbiina/Luzira, Kampala · P.O. Box 27477
              </div>
            </div>
            <div className="rounded-xl overflow-hidden">
              <img src={heroImg} alt="BCK SSS Campus" className="w-full aspect-[4/3] object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding section-alt">
        <div className="container-wide">
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="bg-card border border-border rounded-xl p-8 text-center">
              <div className="w-11 h-11 rounded-xl bg-cobalt/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-cobalt font-bold text-[14px]">✦</span>
              </div>
              <p className="text-[16px] font-semibold text-foreground mb-2">Vision</p>
              <p className="text-[14px] text-muted-foreground leading-relaxed">For Unity, Academic Excellence, and Moral Uprightness.</p>
            </div>
            <div className="bg-navy rounded-xl p-8 text-center">
              <div className="w-11 h-11 rounded-xl bg-gold/15 flex items-center justify-center mx-auto mb-4">
                <span className="text-gold font-bold text-[14px]">★</span>
              </div>
              <p className="text-[16px] font-semibold text-primary-foreground mb-2">Motto</p>
              <p className="text-[14px] text-primary-foreground/50 leading-relaxed serif-heading">Per Aspera Ad Astra — Through hardship to the stars.</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-8 text-center">
              <div className="w-11 h-11 rounded-xl bg-teal/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-teal font-bold text-[14px]">◆</span>
              </div>
              <p className="text-[16px] font-semibold text-foreground mb-2">Ethos</p>
              <p className="text-[14px] text-muted-foreground leading-relaxed">Discipline, faith, growth, leadership, and service.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide max-w-readable">
          <h2 className="text-[28px] sm:text-[32px] font-bold tracking-tight text-foreground leading-[1.15] mb-6">More than the classroom</h2>
          <p className="text-[16px] text-muted-foreground leading-[1.7] mb-4">
            Life at BCK includes discipline, co-curricular participation, mentorship, sports, leadership, and the relationships that leave a lasting impression.
          </p>
          <p className="text-[15px] text-muted-foreground leading-[1.7]">
            The school maintains strong sports programming — including a football academy and PE training — alongside arts, choral traditions, and student leadership development.
          </p>
        </div>
      </section>

      <section className="bg-navy">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12 py-20 sm:py-24 text-center">
          <h2 className="text-[28px] sm:text-[32px] font-bold tracking-tight text-primary-foreground leading-[1.15] mb-6">A legacy that continues</h2>
          <p className="text-[15px] text-primary-foreground/45 leading-[1.7] mb-8 max-w-md mx-auto">
            From 120 students in 1999 to over 2,750 in 2022, the story of the school lives in the people it has shaped.
          </p>
          <Link to="/about" className="inline-flex items-center h-11 px-6 text-[14px] font-semibold bg-gold text-navy rounded-lg hover:bg-gold-light transition-colors duration-150">
            Learn about BICKOSA
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default SchoolPage;
