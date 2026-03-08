import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/bickosa-logo.png";

const navLinks = [
  { label: "About", path: "/about" },
  { label: "History", path: "/history" },
  { label: "Events", path: "/events" },
  { label: "News", path: "/news" },
  { label: "Projects", path: "/projects" },
  { label: "Stories", path: "/stories" },
  { label: "Gallery", path: "/gallery" },
];

const moreLinks = [
  { label: "School", path: "/school" },
  { label: "Governance", path: "/governance" },
  { label: "FAQs", path: "/faq" },
  { label: "Archive", path: "/archive" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const headerBg = scrolled || !isHome
    ? "bg-card/95 backdrop-blur-md border-b border-border"
    : "bg-transparent border-b border-transparent";

  const textColor = scrolled || !isHome ? "text-foreground" : "text-primary-foreground";
  const mutedTextColor = scrolled || !isHome ? "text-muted-foreground" : "text-primary-foreground/60";
  const activeTextColor = scrolled || !isHome ? "text-foreground bg-muted" : "text-primary-foreground bg-primary-foreground/10";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${headerBg}`}>
      <div className="max-w-[1200px] mx-auto flex items-center justify-between h-16 px-6 sm:px-8 lg:px-12">
        <Link to="/" className="flex items-center gap-2.5">
          <img src={logo} alt="BICKOSA" className="h-8 w-auto" />
          <span className={`text-[15px] font-bold tracking-tight ${textColor}`}>BICKOSA</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-0.5">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-3 py-1.5 text-[13px] font-medium transition-colors duration-150 rounded-md ${
                isActive(link.path) ? activeTextColor : `${mutedTextColor} hover:${textColor}`
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="relative group">
            <button className={`px-3 py-1.5 text-[13px] font-medium transition-colors duration-150 rounded-md ${mutedTextColor}`}>
              More
            </button>
            <div className="absolute right-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150">
              <div className="bg-card border border-border rounded-xl shadow-lg py-1.5 min-w-[180px]">
                {moreLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="block px-4 py-2.5 text-[13px] text-muted-foreground hover:text-foreground hover:bg-muted transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link
            to="/contact"
            className={`text-[13px] font-medium transition-colors duration-150 ${mutedTextColor}`}
          >
            Contact
          </Link>
          <Link
            to="/about"
            className="text-[13px] font-semibold text-navy bg-gold px-4 py-2 rounded-lg hover:bg-gold-light transition-colors duration-150"
          >
            Join BICKOSA
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`lg:hidden p-1.5 rounded-md transition-colors duration-150 ${textColor}`}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-card border-t border-border">
          <nav className="max-w-[1200px] mx-auto px-6 py-4 flex flex-col">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground/60 px-3 mb-2">Community</p>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`px-3 py-2.5 text-[14px] font-medium transition-colors duration-150 rounded-md ${
                  isActive(link.path) ? "text-foreground bg-muted" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="h-px bg-border my-3" />
            <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground/60 px-3 mb-2">More</p>
            {moreLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`px-3 py-2.5 text-[14px] font-medium transition-colors duration-150 rounded-md ${
                  isActive(link.path) ? "text-foreground bg-muted" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-4 pt-3 border-t border-border flex gap-3">
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="flex-1 inline-flex items-center justify-center h-11 text-[14px] font-medium text-foreground border border-border rounded-lg"
              >
                Contact
              </Link>
              <Link
                to="/about"
                onClick={() => setIsOpen(false)}
                className="flex-1 inline-flex items-center justify-center h-11 text-[14px] font-semibold text-navy bg-gold rounded-lg"
              >
                Join BICKOSA
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
