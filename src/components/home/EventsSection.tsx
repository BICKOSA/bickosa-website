import { Link } from "react-router-dom";
import { BentoCard } from "@/components/bento";

const featuredEvent = {
  title: "BICKOSA Alumni Reunion 2026",
  date: "December 2026",
  location: "Kampala, Uganda",
  description:
    "An evening of fellowship, recognition, and celebration for BCK old students. Live music, awards, and a night to remember.",
};

const EventsSection = () => {
  return (
    <section className="section">
      <p className="section-eyebrow">Community Life</p>
      <h2 className="section-heading">Events & Community</h2>
      <p className="section-sub">
        White cards for supporting content; a single navy card for the hero event. The gold accent
        bar and gold tag draw the eye without dominating.
      </p>

      <div className="bento">
        {/* Hero event — white with gold bar */}
        <BentoCard variant="white" col={7} row2 minHeight={400} className="min-h-[400px]">
          <div className="bc-accent-bar" aria-hidden />
          <div style={{ marginTop: 8 }}>
            <span className="bc-tag bc-tag-gold">Upcoming</span>
            <div className="bc-eyebrow" style={{ marginTop: 14 }}>Annual Event</div>
            <h3 className="bc-title lg">
              BICKOSA Alumni
              <br />
              Reunion 2026
            </h3>
            <p className="bc-text" style={{ marginTop: 10, maxWidth: 380 }}>
              {featuredEvent.description}
            </p>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
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
                Tickets
              </div>
              <Link
                to="/events"
                style={{ fontSize: "0.9375rem", fontWeight: 600, color: "var(--gold-600)" }}
              >
                On Sale →
              </Link>
            </div>
          </div>
          <div className="bc-footer">
            <Link to="/events" className="bc-btn bc-btn-navy">
              Get Tickets
            </Link>
            <Link to="/events" className="bc-btn bc-btn-outline">
              Learn More
            </Link>
          </div>
        </BentoCard>

        {/* Map — surface */}
        <BentoCard variant="surface" col={5} minHeight={195} className="!p-0">
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

        {/* Sports Day — navy-tint */}
        <BentoCard variant="navy-tint" col={5} minHeight={185}>
          <div className="bc-eyebrow">Sports League</div>
          <div className="bc-title" style={{ fontSize: "1.15rem" }}>
            Sports Day 2026
          </div>
          <p className="bc-text sm">
            Football · Netball · Basketball. Register your class-year team now.
          </p>
          <div className="bc-footer">
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
              <span className="bc-tag bc-tag-navy">Football</span>
              <span className="bc-tag bc-tag-navy">Basketball</span>
            </div>
            <Link to="/events" className="bc-arrow bc-arrow-light" aria-label="View">
              →
            </Link>
          </div>
        </BentoCard>

        {/* Events count */}
        <BentoCard variant="white" col={3} minHeight={155}>
          <div className="bc-accent-bar" aria-hidden />
          <div className="bc-eyebrow" style={{ marginTop: 6 }}>
            This Year
          </div>
          <div className="bc-stat gold" style={{ fontSize: "3.5rem" }}>
            4
          </div>
          <div className="bc-stat-label">Events Planned</div>
        </BentoCard>

        {/* Gala inline row */}
        <BentoCard variant="white" col={9} row minHeight={0} className="!min-h-0" style={{ padding: "20px 24px" }}>
          <div style={{ flex: 1 }}>
            <div className="bc-eyebrow" style={{ marginBottom: 4 }}>
              Members-Only
            </div>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1rem",
                fontWeight: 600,
                color: "var(--navy-900)",
              }}
            >
              Annual Gala Dinner — April 2026 · Kampala
            </div>
          </div>
          <div style={{ display: "flex", gap: 8, alignItems: "center", flexShrink: 0 }}>
            <span className="bc-tag bc-tag-gold">Formal</span>
            <Link to="/events" className="bc-btn bc-btn-navy" style={{ padding: "7px 16px", fontSize: "0.75rem" }}>
              RSVP
            </Link>
          </div>
        </BentoCard>
      </div>
    </section>
  );
};

export default EventsSection;
