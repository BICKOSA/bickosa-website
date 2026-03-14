import { useState } from "react";
import Layout from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
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
      <PageHero
        eyebrow="Visual Archive"
        title="Gallery"
        description="A curated visual archive of school memories, alumni moments, events, and the shared experiences that define BICKOSA."
        image={schoolCourtyard}
      />

      <section className="section">
        <p className="section-eyebrow">Visual Archive</p>
        <h2 className="section-heading">Browse by Category</h2>
        <p className="section-sub mb-8">Filter images by theme to explore school life, alumni events, and historic moments.</p>
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              className={`px-4 py-2 text-[13px] font-medium rounded-bento-lg transition-all ${
                active === cat
                  ? "text-white"
                  : "hover:opacity-90"
              }`}
              style={
                active === cat
                  ? { background: "var(--navy-900)", color: "var(--white)" }
                  : { background: "var(--surface-alt)", color: "var(--text-secondary)" }
              }
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
                  className={`group cursor-pointer rounded-bento-2xl overflow-hidden ${i === 0 ? "col-span-2 row-span-2" : ""}`}
                >
                  <div className={`${i === 0 ? "aspect-square" : "aspect-[4/3]"} relative`}>
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: "rgba(13, 27, 62, 0.3)" }} />
                  </div>
                </div>
              );
            })}
        </div>
      </section>
    </Layout>
  );
};

export default GalleryPage;
