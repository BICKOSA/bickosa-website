import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, BookOpen, Cross, Award, Users } from "lucide-react";
import heroImg from "@/assets/hero-school.jpg";

const SchoolPage = () => {
  return (
    <Layout>
      <section className="gradient-hero py-20 sm:py-28">
        <div className="container-wide px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-heading font-bold mb-6" style={{ color: "hsl(var(--primary-foreground))" }}>
              About Bishop Cipriano Kihangire S.S.S.
            </h1>
            <p className="text-lg" style={{ color: "hsl(var(--primary-foreground) / 0.8)" }}>
              A Catholic secondary school of academic excellence, moral formation, and enduring legacy in Bbiina/Luzira, Kampala.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-secondary text-sm font-semibold tracking-widest uppercase">The School</span>
              <h2 className="text-3xl font-heading font-bold text-foreground mt-3 mb-6">School Overview</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>Bishop Cipriano Kihangire Senior Secondary School (BCK SSS) is a Catholic secondary institution located in Bbiina/Luzira, Kampala, Uganda. The school offers both O-Level and A-Level education.</p>
                <p>Founded on the principles of Catholic faith, academic rigor, and moral uprightness, BCK SSS has shaped generations of students into leaders, professionals, and community builders.</p>
              </div>
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

      <section className="section-padding bg-card">
        <div className="container-wide">
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="bento-card text-center">
              <BookOpen className="w-8 h-8 text-accent mx-auto mb-3" />
              <h3 className="font-heading text-xl font-bold text-foreground mb-2">Per Aspera Ad Astra</h3>
              <p className="text-sm text-muted-foreground">Through hardship to the stars — the school's guiding motto</p>
            </div>
            <div className="bento-card text-center bg-primary text-primary-foreground">
              <Cross className="w-8 h-8 mx-auto mb-3 opacity-80" />
              <h3 className="font-heading text-xl font-bold mb-2">Catholic Foundation</h3>
              <p className="text-sm opacity-80">Rooted in faith, values, and service to others</p>
            </div>
            <div className="bento-card text-center">
              <Award className="w-8 h-8 text-secondary mx-auto mb-3" />
              <h3 className="font-heading text-xl font-bold text-foreground mb-2">Academic Excellence</h3>
              <p className="text-sm text-muted-foreground">Consistent high standards in national examinations</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide max-w-3xl">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-6">Academic & Student Life</h2>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>BCK SSS maintains a strong tradition of academic excellence, with students consistently performing well in the Uganda National Examinations Board (UNEB) assessments at both O-Level and A-Level.</p>
            <p>Beyond academics, the school nurtures well-rounded individuals through co-curricular activities including sports, arts, debate, and spiritual formation. The Catholic identity of the school ensures that students are grounded in values of integrity, compassion, and service.</p>
            <p>Discipline and moral formation remain central to the BCK experience, producing graduates who carry these values into their professional and personal lives.</p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-card">
        <div className="container-wide max-w-3xl">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-6">The School & BICKOSA</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            The relationship between BCK SSS and BICKOSA is one of mutual support and shared purpose. The alumni association continues the school's spirit through engagement, support, and development initiatives — ensuring that the school's legacy grows stronger with each graduating class.
          </p>
          <Button asChild><Link to="/about">Learn About BICKOSA</Link></Button>
        </div>
      </section>
    </Layout>
  );
};

export default SchoolPage;
