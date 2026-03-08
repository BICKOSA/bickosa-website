import { Link } from "react-router-dom";
import logo from "@/assets/bickosa-logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-wide section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="BICKOSA" className="h-12 w-auto brightness-200" />
              <span className="text-xl font-heading font-bold">BICKOSA</span>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              BICKOSA — Bishop Cipriano Kihangire Old Students Association. A home for legacy, connection, and collective impact.
            </p>
            <p className="text-primary-foreground/50 text-xs mt-4">
              Rooted in the heritage of Bishop Cipriano Kihangire S.S.S., Bbiina/Luzira, Kampala.
            </p>
            <p className="text-primary-foreground/40 text-xs mt-2 italic font-heading">
              "Per Aspera Ad Astra"
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Explore</h4>
            <ul className="space-y-2">
              {[
                { label: "About BICKOSA", path: "/about" },
                { label: "About the School", path: "/school" },
                { label: "History & Legacy", path: "/history" },
                { label: "Alumni Stories", path: "/stories" },
                { label: "Events", path: "/events" },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Get Involved</h4>
            <ul className="space-y-2">
              {[
                { label: "Projects & Giving", path: "/projects" },
                { label: "News & Updates", path: "/news" },
                { label: "Gallery", path: "/gallery" },
                { label: "Governance", path: "/governance" },
                { label: "FAQs", path: "/faq" },
                { label: "Archive", path: "/archive" },
                { label: "Contact Us", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/60">
              <li>Bbiina/Luzira, Kampala</li>
              <li>P.O. Box 27477, Kampala</li>
              <li>info@bickosa.org</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} BICKOSA. All rights reserved.
          </p>
          <p className="text-xs text-primary-foreground/40">
            Bishop Cipriano Kihangire Senior Secondary School Alumni
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
