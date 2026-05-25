import { Link } from "react-router-dom";
import { BentoCard } from "@/components/bento";

const featuredEvent = {
  title: "BICKOSA Annual General Meeting 2026",
  date: "May 24, 2026",
  location: "Bishop Cipriano Kihangire SS Day Section — Main Hall",
  description:
    "Old students gather for the AGM to review the year, elect leaders, and chart the way forward for the association.",
  type: "AGM",
};

const EventsSection = () => {
  return (
    <section className="section">
      <p className="section-eyebrow">Community Life</p>
      <h2 className="section-heading">Events & Community</h2>
      <p className="section-sub">
        The flagship moment on the BICKOSA calendar — full schedule lives on the events page.
      </p>

      <div className="bento">
        {/* Featured event — white with gold bar */}
        <BentoCard variant="white" col={8} row2 minHeight={400} className="min-h-[400px]">
          <div className="bc-accent-bar" aria-hidden />
          <div style={{ marginTop: 8 }}>
            <span className="bc-tag bc-tag-gold">Featured · {featuredEvent.type}</span>
            <div className="bc-eyebrow" style={{ marginTop: 14 }}>Annual Gathering</div>
            <h3 className="bc-title lg">{featuredEvent.title}</h3>
            <p className="bc-text" style={{ marginTop: 10, maxWidth: 460 }}>
              {featuredEvent.description}
            </p>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 16,
              marginTop: 24,
              paddingTop: 20,
              borderTop: "1px solid var(--border)",
            }}
          >
            <div>
              <div
                style={{
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--text-muted)",
                  marginBottom: 4,
                }}
              >
                Date
              </div>
              <div style={{ fontSize: "0.9375rem", fontWeight: 600, color: "var(--navy-900)" }}>
                {featuredEvent.date}
              </div>
            </div>
            <div>
              <div
                style={{
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--text-muted)",
                  marginBottom: 4,
                }}
              >
                Location
              </div>
              <div style={{ fontSize: "0.9375rem", fontWeight: 600, color: "var(--navy-900)" }}>
                {featuredEvent.location}
              </div>
            </div>
          </div>
          <div className="bc-footer">
            <Link to="/events" className="bc-btn bc-btn-navy">
              Event details
            </Link>
            <Link to="/events" className="bc-btn bc-btn-outline">
              All events →
            </Link>
          </div>
        </BentoCard>

        {/* Map — surface */}
        <BentoCard variant="surface" col={4} minHeight={195} className="!p-0">
          <div className="bc-map-inner">
            <div className="map-dot" aria-hidden />
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "0.875rem",
                color: "var(--navy-900)",
                fontWeight: 600,
              }}
            >
              Luzira, Kampala
            </div>
            <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>
              0°18′N · 32°37′E
            </div>
          </div>
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              padding: "14px 20px",
              background: "linear-gradient(to top, rgba(240,243,251,1), transparent)",
            }}
          >
            <div style={{ fontSize: "0.75rem", color: "var(--text-secondary)" }}>
              Old Port Bell Road, Plot 45/5
            </div>
          </div>
        </BentoCard>

        {/* Quote / spirit — navy tint */}
        <BentoCard variant="navy-tint" col={4} minHeight={185}>
          <div className="bc-eyebrow">Per Aspera Ad Astra</div>
          <div className="bc-title" style={{ fontSize: "1.15rem" }}>
            Stay connected
          </div>
          <p className="bc-text sm">
            Subscribe to event announcements and member updates through the BICKOSA portal.
          </p>
          <div className="bc-footer">
            <a
              href="https://portal.bickosa.com/join"
              target="_blank"
              rel="noopener noreferrer"
              className="bc-arrow bc-arrow-light"
              aria-label="Join"
            >
              →
            </a>
          </div>
        </BentoCard>
      </div>
    </section>
  );
};

export default EventsSection;
