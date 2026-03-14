import { useState } from "react";
import Layout from "@/components/Layout";
import schoolCourtyard from "@/assets/school-courtyard.png";
import schoolGreenRoofs from "@/assets/school-green-roofs.png";
import schoolNoticeTerm from "@/assets/school-notice-term.png";
import schoolNoticeVisitation from "@/assets/school-notice-visitation.png";

const galleryImages = [
  { src: schoolCourtyard, alt: "BCK SSS campus courtyard" },
  { src: schoolGreenRoofs, alt: "BCK SSS campus buildings" },
  { src: schoolNoticeTerm, alt: "School notice" },
  { src: schoolNoticeVisitation, alt: "Visitation day at BCK SSS" },
];

const categories = ["All", "School Life", "Alumni Events", "Sports", "Reunions", "Historic Moments", "Community", "Celebrations"];

const GalleryPage = () => {
  const [active, setActive] = useState("All");

  return (
    <Layout>
      <section className="page-hero">
        <div className="container-wide px-6 sm:px-8 lg:px-12">
          <div className="max-w-xl">
            <div className="gold-accent-bar" />
            <p className="text-[12px] font-semibold uppercase tracking-[0.15em] mb-5 text-gold">Visual Archive</p>
            <h1 className="text-[42px] sm:text-[52px] font-extrabold tracking-tight leading-[1.06] mb-5 text-primary-foreground">Gallery</h1>
            <p className="text-[16px] leading-[1.7] text-primary-foreground/55">
              A curated visual archive of school memories, alumni moments, events, and the shared experiences that define BICKOSA.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-4 py-2 text-[13px] font-medium rounded-md transition-all ${
                  active === cat
                    ? "bg-navy text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:text-foreground hover:bg-border"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3">
            {Array.from({ length: 12 }).map((_, i) => {
              const img = galleryImages[i % galleryImages.length];
              return (
                <div
                  key={i}
                  className={`group cursor-pointer rounded-lg overflow-hidden ${i === 0 ? "col-span-2 row-span-2" : ""}`}
                >
                  <div className={`${i === 0 ? "aspect-square" : "aspect-[4/3]"} relative`}>
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/30 transition-colors duration-300" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default GalleryPage;
