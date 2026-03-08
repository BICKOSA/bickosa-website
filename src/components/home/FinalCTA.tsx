import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="gradient-hero py-20 sm:py-28">
        <div className="container-wide px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-6" style={{ color: "hsl(var(--primary-foreground))" }}>
            Once BCK, Always BCK
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-10" style={{ color: "hsl(var(--primary-foreground) / 0.8)" }}>
            Whether you are reconnecting with classmates, discovering what BICKOSA is building, supporting a project, or simply celebrating the school that shaped you — this community is yours.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild variant="hero" size="lg">
              <Link to="/about">Stay Connected</Link>
            </Button>
            <Button asChild variant="hero-outline" size="lg">
              <Link to="/contact">Contact BICKOSA</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
