import { Link } from "react-router-dom";
import heroImg from "@/assets/hero-school.jpg";

const GalleryPreview = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="max-w-xl mb-14">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-4">Memories</p>
          <h2 className="text-3xl sm:text-[36px] font-bold tracking-tight text-foreground leading-[1.15] mb-5">
            Moments That Matter
          </h2>
          <p className="text-[15px] text-muted-foreground leading-[1.7]">
            A visual archive of school life, alumni memories, events, celebrations, and community moments.
          </p>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-4 gap-1 rounded-lg overflow-hidden">
          {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
            <div
              key={i}
              className={`relative group cursor-pointer ${i === 0 ? "col-span-2 row-span-2" : ""}`}
            >
              <div className={`${i === 0 ? "aspect-square" : "aspect-[4/3]"}`}>
                <img
                  src={heroImg}
                  alt="Gallery"
                  className="w-full h-full object-cover group-hover:opacity-80 transition-opacity duration-300"
                  style={{ filter: `hue-rotate(${i * 30}deg) saturate(${0.5 + i * 0.08})` }}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Link to="/gallery" className="text-[14px] font-medium text-foreground hover:opacity-70 transition-opacity">
            Explore the gallery →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;
