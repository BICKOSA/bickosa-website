import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-navy text-primary-foreground">
      <div className="h-px bg-gradient-to-r from-gold/0 via-gold/30 to-gold/0" />

      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          {/* About */}
          <div className="col-span-2 md:col-span-1">
            <span className="text-[15px] font-bold tracking-tight">BICKOSA</span>
            <p className="text-[13px] text-primary-foreground/40 mt-3 leading-relaxed max-w-[260px]">
              Bishop Cipriano Kihangire Old Students Association — uniting alumni through community, heritage, and shared purpose.
            </p>
            <div className="mt-5 flex items-center gap-2">
              <div className="w-6 h-px bg-gold/50" />
              <p className="text-[12px] text-gold/60 serif-heading">Per Aspera Ad Astra</p>
            </div>
          </div>

          {/* Explore */}
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-widest text-primary-foreground/25 mb-4">Explore</p>
            <ul className="space-y-2.5">
              {[
                { label: "About", path: "/about" },
                { label: "History", path: "/history" },
                { label: "News", path: "/news" },
                { label: "Events", path: "/events" },
                { label: "Gallery", path: "/gallery" },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-[13px] text-primary-foreground/40 hover:text-gold transition-colors duration-150">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-widest text-primary-foreground/25 mb-4">Get Involved</p>
            <ul className="space-y-2.5">
              {[
                { label: "Join BICKOSA", path: "/about" },
                { label: "Projects & Giving", path: "/projects" },
                { label: "Alumni Stories", path: "/stories" },
                { label: "Contact Us", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-[13px] text-primary-foreground/40 hover:text-gold transition-colors duration-150">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies */}
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-widest text-primary-foreground/25 mb-4">Policies</p>
            <ul className="space-y-2.5">
              {[
                { label: "Governance", path: "/governance" },
                { label: "FAQs", path: "/faq" },
                { label: "Archive", path: "/archive" },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-[13px] text-primary-foreground/40 hover:text-gold transition-colors duration-150">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li><span className="text-[13px] text-primary-foreground/25 cursor-default">Privacy Policy</span></li>
              <li><span className="text-[13px] text-primary-foreground/25 cursor-default">Terms of Use</span></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-widest text-primary-foreground/25 mb-4">Contact</p>
            <ul className="space-y-2.5 text-[13px] text-primary-foreground/40">
              <li>Bbiina/Luzira, Kampala</li>
              <li>P.O. Box 27477</li>
              <li className="text-gold/60 hover:text-gold transition-colors duration-150 cursor-pointer">info@bickosa.org</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/8 mt-14 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-[11px] text-primary-foreground/20">
            © {new Date().getFullYear()} BICKOSA. All rights reserved.
          </p>
          <p className="text-[11px] text-primary-foreground/20">
            Bishop Cipriano Kihangire Senior Secondary School Alumni
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
