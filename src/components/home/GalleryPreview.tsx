import { Link } from "react-router-dom";
import { BentoCard } from "@/components/bento";
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
    <section className="section">
      <p className="section-eyebrow">Visual Archive</p>
      <h2 className="section-heading">Moments That Matter</h2>
      <p className="section-sub">
        A curated collection of school life, alumni memories, events, and community pride.
      </p>

      <div className="bento">
        <BentoCard variant="white" col={6} minHeight={280} className="!p-0 overflow-hidden">
          <Link to="/gallery" className="block relative h-full min-h-[280px] group">
            <img
              src={galleryPreviewImages[0].src}
              alt={galleryPreviewImages[0].alt}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6"
              style={{ background: "linear-gradient(to top, rgba(13,27,62,0.7), transparent)" }}
            >
              <span
                className="text-[14px] font-semibold"
                style={{ color: "var(--white)" }}
              >
                {galleryPreviewImages[0].caption}
              </span>
            </div>
          </Link>
        </BentoCard>

        {galleryPreviewImages.slice(1).map((img) => (
          <BentoCard
            key={img.alt}
            variant="surface"
            col={4}
            minHeight={200}
            className="!p-0 overflow-hidden"
          >
            <Link to="/gallery" className="block relative h-full min-h-[200px] group">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div
                className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: "linear-gradient(to top, rgba(13,27,62,0.6), transparent)" }}
              >
                <span className="text-[12px] font-medium text-white">{img.caption}</span>
              </div>
            </Link>
          </BentoCard>
        ))}

        <BentoCard variant="navy-tint" col={12} row minHeight={0} className="!min-h-0" style={{ padding: "20px 28px" }}>
          <div style={{ flex: 1 }}>
            <p className="bc-eyebrow">Gallery</p>
            <p className="bc-title" style={{ fontSize: "1rem", marginBottom: 0 }}>
              Explore the full visual archive
            </p>
          </div>
          <Link to="/gallery" className="bc-btn bc-btn-navy">
            Full gallery
          </Link>
        </BentoCard>
      </div>
    </section>
  );
};

export default GalleryPreview;
