import { Link } from "react-router-dom";
import { BentoCard } from "@/components/bento";

const stories = [
  {
    name: "Dr. Sarah Nakamya",
    cohort: "Class of 1995",
    role: "Medical Practitioner",
    excerpt:
      "BCK taught me resilience and compassion — values I carry into my medical practice every day.",
    tag: "Healthcare",
  },
  {
    name: "James Ssenyonga",
    cohort: "Class of 2003",
    role: "Entrepreneur & Community Leader",
    excerpt:
      "The friendships I made at BCK shaped my path in business. BICKOSA keeps those bonds alive.",
    tag: "Business",
  },
  {
    name: "Grace Namutebi",
    cohort: "Class of 2010",
    role: "Educator & Mentor",
    excerpt:
      "I returned to teach because BCK gave me everything. Through BICKOSA, I give back to the next generation.",
    tag: "Education",
  },
];

const AlumniStories = () => {
  return (
    <section className="section">
      <p className="section-eyebrow">Voices of BCK</p>
      <h2 className="section-heading">Stories from the Alumni Community</h2>
      <p className="section-sub">
        Alumni across generations share how BCK and BICKOSA have shaped their paths.
      </p>

      <div className="bento">
        {stories.map((story) => (
          <BentoCard key={story.name} variant="white" col={4} minHeight={280}>
            <div className="bc-eyebrow">{story.tag}</div>
            <p className="bc-quote" style={{ fontSize: "1rem", marginBottom: 16 }}>
              &ldquo;{story.excerpt}&rdquo;
            </p>
            <div className="bc-divider" />
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: "var(--navy-900)", color: "var(--gold-400)", fontFamily: "var(--font-display)", fontSize: "13px", fontWeight: 700 }}
              >
                {story.name[0]}
              </div>
              <div>
                <p className="text-[14px] font-semibold" style={{ color: "var(--navy-900)" }}>
                  {story.name}
                </p>
                <p className="bc-text sm" style={{ marginTop: 0 }}>
                  {story.role} · {story.cohort}
                </p>
              </div>
            </div>
            <div className="bc-footer">
              <Link to="/stories" className="bc-btn bc-btn-outline">
                Read more
              </Link>
              <span className="bc-arrow bc-arrow-light">→</span>
            </div>
          </BentoCard>
        ))}
      </div>
    </section>
  );
};

export default AlumniStories;
