import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-navy text-primary-foreground">
      {/* Top accent bar */}
      <div className="h-px bg-gradient-to-r from-gold/0 via-gold/40 to-gold/0" />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <div className="col-span-2 md:col-span-1">
            <span className="text-[16px] font-bold tracking-tight">BICKOSA</span>
            <p className="text-[13px] text-primary-foreground/45 mt-3 leading-relaxed max-w-[260px]">
              Bishop Cipriano Kihangire Old Students Association — a home for legacy, connection, and collective impact.
            </p>
            <div className="mt-5 flex items-center gap-2">
              <div className="w-6 h-px bg-gold/60" />
              <p className="text-[12px] text-gold/70 serif-heading">Per Aspera Ad Astra</p>
            </div>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-widest text-primary-foreground/30 mb-4">Explore</p>
            <ul className="space-y-2.5">
              {[
                { label: "About BICKOSA", path: "/about" },
                { label: "About the School", path: "/school" },
                { label: "History & Legacy", path: "/history" },
                { label: "Alumni Stories", path: "/stories" },
                { label: "Events", path: "/events" },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-[13px] text-primary-foreground/45 hover:text-gold transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-widest text-primary-foreground/30 mb-4">Engage</p>
            <ul className="space-y-2.5">
              {[
                { label: "Projects & Giving", path: "/projects" },
                { label: "News & Updates", path: "/news" },
                { label: "Gallery", path: "/gallery" },
                { label: "Governance", path: "/governance" },
                { label: "FAQs", path: "/faq" },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-[13px] text-primary-foreground/45 hover:text-gold transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-widest text-primary-foreground/30 mb-4">Contact</p>
            <ul className="space-y-2.5 text-[13px] text-primary-foreground/45">
              <li>Bbiina/Luzira, Kampala</li>
              <li>P.O. Box 27477</li>
              <li className="text-gold/70 hover:text-gold transition-colors cursor-pointer">info@bickosa.org</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/8 mt-14 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-[11px] text-primary-foreground/25">
            © {new Date().getFullYear()} BICKOSA. All rights reserved.
          </p>
          <p className="text-[11px] text-primary-foreground/25">
            Bishop Cipriano Kihangire Senior Secondary School Alumni
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
