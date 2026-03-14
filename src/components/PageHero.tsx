import heroCampus from "@/assets/hero-campus-1.png";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  /** Optional hero background image (defaults to hero-campus-1) */
  image?: string;
};

export const PageHero = ({ eyebrow, title, description, image = heroCampus }: PageHeroProps) => (
  <section className="page-hero relative overflow-hidden">
    <div className="page-hero__bg" aria-hidden>
      <img src={image} alt="" className="w-full h-full object-cover" />
    </div>
    <div className="page-hero__inner">
      <div className="page-hero__content">
        <div
          className="w-10 h-1 rounded-full mb-5"
          style={{ background: "var(--gold-500)" }}
        />
        <p
          className="text-[12px] font-semibold uppercase tracking-[0.2em] mb-5"
          style={{ color: "var(--gold-500)" }}
        >
          {eyebrow}
        </p>
        <h1
          className="text-[42px] sm:text-[52px] font-bold tracking-tight leading-[1.06] mb-5"
          style={{ fontFamily: "var(--font-display)", color: "var(--white)" }}
        >
          {title}
        </h1>
        <p
          className="text-[16px] leading-[1.7]"
          style={{ color: "var(--navy-200)" }}
        >
          {description}
        </p>
      </div>
    </div>
  </section>
);
