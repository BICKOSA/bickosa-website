import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      className="text-white"
      style={{ background: "var(--navy-900)" }}
    >
      <div
        className="h-[3px] w-full"
        style={{
          background: "linear-gradient(90deg, var(--gold-500), var(--gold-300))",
        }}
      />
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <div className="col-span-2 md:col-span-1">
            <span
              className="text-[16px] font-bold tracking-[0.04em]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              BICKOSA
            </span>
            <p
              className="text-[13px] mt-3 leading-relaxed max-w-[260px]"
              style={{ color: "var(--navy-200)" }}
            >
              Bishop Cipriano Kihangire Old Students Association — a home for legacy,
              connection, and collective impact.
            </p>
            <div className="mt-5 flex items-center gap-2">
              <div
                className="w-6 h-px"
                style={{ background: "var(--gold-400)" }}
              />
              <p
                className="text-[12px] serif-heading"
                style={{ color: "var(--gold-400)" }}
              >
                Per Aspera Ad Astra
              </p>
            </div>
          </div>

          <div>
            <p
              className="text-[11px] font-semibold uppercase tracking-[0.2em] mb-4"
              style={{ color: "var(--navy-300)" }}
            >
              Explore
            </p>
            <ul className="space-y-2.5">
              {[
                { label: "About BICKOSA", path: "/about" },
                { label: "About the School", path: "/school" },
                { label: "History & Legacy", path: "/history" },
                { label: "Alumni Stories", path: "/stories" },
                { label: "Events", path: "/events" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-[13px] transition-colors hover:opacity-90"
                    style={{ color: "var(--navy-200)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p
              className="text-[11px] font-semibold uppercase tracking-[0.2em] mb-4"
              style={{ color: "var(--navy-300)" }}
            >
              Engage
            </p>
            <ul className="space-y-2.5">
              {[
                { label: "Projects & Giving", path: "/projects" },
                { label: "News & Updates", path: "/news" },
                { label: "Gallery", path: "/gallery" },
                { label: "Governance", path: "/governance" },
                { label: "FAQs", path: "/faq" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-[13px] transition-colors hover:opacity-90"
                    style={{ color: "var(--navy-200)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p
              className="text-[11px] font-semibold uppercase tracking-[0.2em] mb-4"
              style={{ color: "var(--navy-300)" }}
            >
              Contact
            </p>
            <ul className="space-y-2.5 text-[13px]" style={{ color: "var(--navy-200)" }}>
              <li>Bbiina/Luzira, Kampala</li>
              <li>P.O. Box 27477</li>
              <li>
                <a
                  href="mailto:info@bickosa.org"
                  className="transition-colors hover:opacity-90"
                  style={{ color: "var(--gold-400)" }}
                >
                  info@bickosa.org
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="border-t mt-14 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3"
          style={{ borderColor: "rgba(255,255,255,0.08)" }}
        >
          <p className="text-[11px]" style={{ color: "var(--navy-400)" }}>
            © {new Date().getFullYear()} BICKOSA. All rights reserved.
          </p>
          <p className="text-[11px]" style={{ color: "var(--navy-400)" }}>
            Bishop Cipriano Kihangire Senior Secondary School Alumni
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
