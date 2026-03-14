const stats = [
  { value: "1999", label: "Year Founded", accent: "gold" },
  { value: "2,750+", label: "Alumni Network", accent: "gold" },
  { value: "25+", label: "Years of Excellence", accent: "gold" },
  { value: "Active", label: "Community", accent: "gold" },
];

const TrustStrip = () => {
  return (
    <section
      className="border-b py-10 sm:py-12"
      style={{ borderColor: "var(--border)", background: "var(--white)" }}
    >
      <div className="bento">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="col-3 flex items-start gap-4"
            style={{ padding: "0 6px" }}
          >
            <div
              className="w-1 h-10 rounded-full flex-shrink-0 mt-0.5"
              style={{ background: "var(--gold-500)", opacity: 0.7 }}
            />
            <div>
              <p
                className="text-2xl sm:text-[28px] font-bold tracking-tight"
                style={{ fontFamily: "var(--font-display)", color: "var(--navy-900)" }}
              >
                {stat.value}
              </p>
              <p className="text-[13px] mt-0.5" style={{ color: "var(--text-muted)" }}>
                {stat.label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustStrip;
