import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-school.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="BCK SSS Campus" className="w-full h-full object-cover" />
        <div className="absolute inset-0 gradient-hero opacity-85" />
      </div>

      <div className="relative container-wide px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <p className="text-sky-light font-body text-sm sm:text-base font-medium tracking-widest uppercase mb-4 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Bishop Cipriano Kihangire Old Students Association
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold leading-[1.1] mb-6 animate-fade-in-up" style={{ animationDelay: "0.2s", color: "hsl(var(--primary-foreground))" }}>
            Preserving Legacy. Building Community. Giving Back.
          </h1>
          <p className="text-lg sm:text-xl leading-relaxed mb-8 animate-fade-in-up" style={{ animationDelay: "0.3s", color: "hsl(var(--primary-foreground) / 0.8)" }}>
            BICKOSA is the home of the Bishop Cipriano Kihangire alumni community — bringing together former students through shared identity, lasting connections, collective pride, and a commitment to support one another and the growth of our school.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <Button asChild variant="hero" size="lg">
              <Link to="/about">Explore Our Story</Link>
            </Button>
            <Button asChild variant="hero-outline" size="lg">
              <Link to="/events">View Events</Link>
            </Button>
          </div>
          <div className="flex flex-wrap gap-4 mt-4 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
            <Button asChild variant="hero-outline" size="default">
              <Link to="/projects">Support a Project</Link>
            </Button>
            <Button asChild variant="hero-outline" size="default">
              <Link to="/contact">Contact BICKOSA</Link>
            </Button>
          </div>
          <p className="text-sm mt-6 animate-fade-in-up" style={{ animationDelay: "0.6s", color: "hsl(var(--primary-foreground) / 0.5)" }}>
            Proudly rooted in the heritage of Bishop Cipriano Kihangire S.S.S., Bbiina/Luzira.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
