import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import schoolCourtyard from "@/assets/school-courtyard.png";
import schoolGreenRoofs from "@/assets/school-green-roofs.png";
import schoolNoticeTerm from "@/assets/school-notice-term.png";
import schoolNoticeVisitation from "@/assets/school-notice-visitation.png";

const galleryPreviewImages = [
  { src: schoolCourtyard, alt: "School Life", caption: "School Life" },
  { src: schoolGreenRoofs, alt: "Campus", caption: "Campus" },
  { src: schoolNoticeTerm, alt: "School notice", caption: "Community" },
  { src: schoolNoticeVisitation, alt: "Visitation day", caption: "Celebrations" },
];

const GalleryPreview = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-14">
          <div className="max-w-xl">
            <div className="gold-accent-bar" />
            <p className="text-[12px] font-semibold uppercase tracking-[0.15em] text-gold mb-4">Visual Archive</p>
            <h2 className="text-[32px] sm:text-[38px] font-bold tracking-tight text-foreground leading-[1.12]">
              Moments That Matter
            </h2>
            <p className="text-[15px] text-muted-foreground leading-[1.7] mt-4">
              A curated collection of school life, alumni memories, events, and community pride.
            </p>
          </div>
          <Link to="/gallery" className="inline-flex items-center gap-2 text-[14px] font-semibold text-cobalt hover:text-cobalt/80 transition-colors flex-shrink-0">
            Full gallery <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
            const img = galleryPreviewImages[i % galleryPreviewImages.length];
            return (
              <div
                key={i}
                className={`relative group cursor-pointer rounded-lg overflow-hidden ${i === 0 ? "col-span-2 row-span-2" : ""}`}
              >
                <div className={`${i === 0 ? "aspect-square" : "aspect-[4/3]"}`}>
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/40 transition-colors duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-[12px] font-medium text-primary-foreground">{img.caption}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;
