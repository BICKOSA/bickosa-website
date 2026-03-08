import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, BookOpen, Cross, Award } from "lucide-react";
import heroImg from "@/assets/hero-school.jpg";

const SchoolPage = () => {
  return (
    <Layout>
      <section className="gradient-hero py-20 sm:py-28">
        <div className="container-wide px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "hsl(var(--gold))" }}>Our Foundation</p>
            <h1 className="text-4xl sm:text-5xl font-heading font-bold mb-6" style={{ color: "hsl(var(--primary-foreground))" }}>
              About Bishop Cipriano Kihangire S.S.S.
            </h1>
            <p className="text-lg" style={{ color: "hsl(var(--primary-foreground) / 0.8)" }}>
              Bishop Cipriano Kihangire Senior Secondary School stands at the heart of the BICKOSA story — a school whose legacy continues to shape generations of students through faith, discipline, excellence, and community.
            </p>
          </div>
        </div>
      </section>

      {/* School Overview */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-secondary text-sm font-semibold tracking-widest uppercase">The School</span>
              <h2 className="text-3xl font-heading font-bold text-foreground mt-3 mb-6">A School with Identity and Purpose</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Bishop Cipriano Kihangire Senior Secondary School, located in Bbiina/Luzira, Kampala, is a Catholic secondary school known for its commitment to academic growth, moral formation, and holistic student development. Over the years, the school has built a strong identity rooted in discipline, shared values, and a culture of belonging.
              </p>
              <div className="flex items-center gap-2 mt-6 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-secondary" />
                Bbiina/Luzira, Kampala, Uganda
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-elevated">
              <img src={heroImg} alt="BCK SSS Campus" className="w-full h-80 object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Heritage & Foundation */}
      <section className="section-padding bg-card">
        <div className="container-wide max-w-3xl">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-6">Grounded in Heritage</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The story of BCK is tied to the broader Catholic educational and community tradition that has shaped many lives in Luzira and beyond. The school's identity reflects a commitment not only to learning, but also to character, service, and spiritual formation.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            It is this foundation that continues to make the school meaningful to both current students and old students.
          </p>
        </div>
      </section>

      {/* Vision, Motto, Ethos */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="bento-card text-center">
              <Award className="w-8 h-8 text-secondary mx-auto mb-3" />
              <h3 className="font-heading text-xl font-bold text-foreground mb-2">Vision</h3>
              <p className="text-sm text-muted-foreground">For unity, academic excellence, and moral uprightness.</p>
            </div>
            <div className="bento-card text-center bg-primary text-primary-foreground">
              <BookOpen className="w-8 h-8 mx-auto mb-3 opacity-80" />
              <h3 className="font-heading text-xl font-bold mb-2">Motto</h3>
              <p className="text-sm opacity-80">Per Aspera Ad Astra — Through hardship to the stars.</p>
            </div>
            <div className="bento-card text-center">
              <Cross className="w-8 h-8 text-accent mx-auto mb-3" />
              <h3 className="font-heading text-xl font-bold text-foreground mb-2">Ethos</h3>
              <p className="text-sm text-muted-foreground">A culture of discipline, faith, growth, leadership, and service.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Student Life */}
      <section className="section-padding bg-card">
        <div className="container-wide max-w-3xl">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-6">More Than the Classroom</h2>
          <p className="text-muted-foreground leading-relaxed">
            Life at BCK has always been shaped by more than academics alone. The school experience includes discipline, co-curricular participation, school identity, mentorship, sports, leadership, and the day-to-day relationships that leave a lasting impression on students long after they leave.
          </p>
        </div>
      </section>

      {/* Legacy */}
      <section className="section-padding bg-background">
        <div className="container-wide max-w-3xl">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-6">A Legacy That Continues Through Its Students</h2>
          <p className="text-muted-foreground leading-relaxed">
            The story of the school is carried not only in buildings and classrooms, but also in the people it has shaped. Each generation of students becomes part of a larger heritage — one that continues through alumni, community, and the values they carry forward into the world.
          </p>
        </div>
      </section>

      {/* Link to BICKOSA */}
      <section className="section-padding bg-card">
        <div className="container-wide max-w-3xl">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-6">Where School Legacy Meets Alumni Community</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            BICKOSA exists because the BCK experience does not end at graduation. The association extends the life of the school beyond its gates by bringing alumni together in ways that preserve memory, strengthen community, and create opportunities to give back.
          </p>
          <Button asChild><Link to="/about">Learn About BICKOSA</Link></Button>
        </div>
      </section>
    </Layout>
  );
};

export default SchoolPage;
