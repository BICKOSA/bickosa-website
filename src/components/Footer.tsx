import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <div className="col-span-2 md:col-span-1">
            <span className="text-[15px] font-semibold tracking-tight">BICKOSA</span>
            <p className="text-sm text-background/50 mt-3 leading-relaxed max-w-[260px]">
              Bishop Cipriano Kihangire Old Students Association. A home for legacy, connection, and collective impact.
            </p>
            <p className="text-xs text-background/30 mt-4 italic">
              Per Aspera Ad Astra
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-background/40 mb-4">Explore</p>
            <ul className="space-y-2.5">
              {[
                { label: "About BICKOSA", path: "/about" },
                { label: "About the School", path: "/school" },
                { label: "History & Legacy", path: "/history" },
                { label: "Alumni Stories", path: "/stories" },
                { label: "Events", path: "/events" },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-background/50 hover:text-background transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-background/40 mb-4">Engage</p>
            <ul className="space-y-2.5">
              {[
                { label: "Projects & Giving", path: "/projects" },
                { label: "News & Updates", path: "/news" },
                { label: "Gallery", path: "/gallery" },
                { label: "Governance", path: "/governance" },
                { label: "FAQs", path: "/faq" },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-background/50 hover:text-background transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-background/40 mb-4">Contact</p>
            <ul className="space-y-2.5 text-sm text-background/50">
              <li>Bbiina/Luzira, Kampala</li>
              <li>P.O. Box 27477</li>
              <li>info@bickosa.org</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 mt-14 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-background/30">
            © {new Date().getFullYear()} BICKOSA. All rights reserved.
          </p>
          <p className="text-xs text-background/30">
            Bishop Cipriano Kihangire Senior Secondary School Alumni
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
