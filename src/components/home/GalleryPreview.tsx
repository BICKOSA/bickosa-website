import { Link } from "react-router-dom";
import heroImg from "@/assets/hero-school.jpg";

const GalleryPreview = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="text-center mb-12">
          <span className="text-secondary text-sm font-semibold tracking-widest uppercase">Memories</span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mt-3">
            Gallery
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
            <Link
              key={i}
              to="/gallery"
              className={`relative rounded-2xl overflow-hidden group ${
                i === 0 ? "col-span-2 row-span-2" : ""
              }`}
            >
              <div className={`${i === 0 ? "aspect-square" : "aspect-[4/3]"} bg-muted`}>
                <img
                  src={heroImg}
                  alt="Gallery"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  style={{ filter: `hue-rotate(${i * 30}deg) saturate(${0.6 + i * 0.1})` }}
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors" />
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/gallery" className="text-secondary text-sm font-medium hover:underline">
            View Full Gallery →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;
