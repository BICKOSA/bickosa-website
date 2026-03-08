import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-school.jpg";

const captions = [
  "Class of 2014 Reunion, Kampala",
  "Sports Day 2023",
  "AGM 2025",
  "School Visit",
  "BICKOSA League",
  "Community Service",
];

const GalleryPreview = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-14">
          <div className="max-w-xl">
            <p className="overline text-gold-warm mb-4">Gallery</p>
            <h2 className="text-[32px] sm:text-[40px] font-bold tracking-tight text-foreground leading-[1.15]">
              Moments that keep the community alive
            </h2>
          </div>
          <Link to="/gallery" className="inline-flex items-center gap-2 text-[14px] font-semibold text-cobalt hover:text-cobalt-light transition-colors duration-150 flex-shrink-0">
            Explore the gallery <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="relative group cursor-pointer rounded-xl overflow-hidden"
            >
              <div className="aspect-[3/2]">
                <img
                  src={heroImg}
                  alt={captions[i]}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  style={{ filter: `hue-rotate(${i * 35}deg) saturate(${0.6 + i * 0.08})` }}
                />
                <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/40 transition-colors duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-[12px] font-medium text-primary-foreground/90">{captions[i]}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;
