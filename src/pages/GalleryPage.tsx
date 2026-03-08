import { useState } from "react";
import Layout from "@/components/Layout";
import heroImg from "@/assets/hero-school.jpg";

const categories = ["All", "School Life", "Alumni Events", "Sports", "Reunions", "Community"];

const GalleryPage = () => {
  const [active, setActive] = useState("All");

  return (
    <Layout>
      <section className="gradient-hero py-20 sm:py-28">
        <div className="container-wide px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-heading font-bold mb-6" style={{ color: "hsl(var(--primary-foreground))" }}>Gallery</h1>
          <p className="text-lg" style={{ color: "hsl(var(--primary-foreground) / 0.8)" }}>
            Capturing memory, pride, and belonging through the lens of BCK and BICKOSA.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  active === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="break-inside-avoid rounded-2xl overflow-hidden group cursor-pointer"
              >
                <div style={{ aspectRatio: i % 3 === 0 ? "3/4" : i % 3 === 1 ? "4/3" : "1/1" }}>
                  <img
                    src={heroImg}
                    alt={`Gallery image ${i + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    style={{ filter: `hue-rotate(${i * 25}deg) saturate(${0.5 + i * 0.08})` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default GalleryPage;
