import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const AboutSnapshot = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="text-secondary text-sm font-semibold tracking-widest uppercase">Who We Are</span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mt-3 mb-6">
              About BICKOSA
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              BICKOSA is the alumni association of Bishop Cipriano Kihangire Senior Secondary School. It exists to bring together former students, preserve the school's heritage, strengthen alumni bonds, and support meaningful initiatives.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Through community, mentorship, events, and development efforts, BICKOSA creates opportunities for alumni to give back and stay connected to the school they call home.
            </p>
            <Button asChild variant="default">
              <Link to="/about">
                Learn More <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bento-card bg-primary text-primary-foreground p-6">
              <h3 className="font-heading text-2xl font-bold mb-2">Unity</h3>
              <p className="text-sm opacity-80">Bound by shared experience and values</p>
            </div>
            <div className="bento-card p-6 mt-8">
              <h3 className="font-heading text-2xl font-bold text-foreground mb-2">Service</h3>
              <p className="text-sm text-muted-foreground">Giving back to school and community</p>
            </div>
            <div className="bento-card p-6">
              <h3 className="font-heading text-2xl font-bold text-foreground mb-2">Legacy</h3>
              <p className="text-sm text-muted-foreground">Preserving heritage across generations</p>
            </div>
            <div className="bento-card bg-secondary text-secondary-foreground p-6 mt-8">
              <h3 className="font-heading text-2xl font-bold mb-2">Pride</h3>
              <p className="text-sm opacity-80">Proudly BCK, proudly BICKOSA</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSnapshot;
