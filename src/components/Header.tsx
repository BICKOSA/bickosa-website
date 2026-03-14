import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/bickosa-logo.png";

const navLinks = [
  { label: "About", path: "/about" },
  { label: "School", path: "/school" },
  { label: "History", path: "/history" },
  { label: "Stories", path: "/stories" },
  { label: "News", path: "/news" },
  { label: "Events", path: "/events" },
  { label: "Projects", path: "/projects" },
  { label: "Gallery", path: "/gallery" },
];

const moreLinks = [
  { label: "Governance", path: "/governance" },
  { label: "FAQs", path: "/faq" },
  { label: "Archive", path: "/archive" },
  { label: "Contact", path: "/contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/60">
      <div className="max-w-6xl mx-auto flex items-center justify-between h-[56px] px-6 sm:px-8 lg:px-12">
        <Link to="/" className="flex items-center gap-2.5">
          <img src={logo} alt="BICKOSA" className="h-8 w-auto" />
          <span className="text-[15px] font-bold tracking-tight text-foreground">BICKOSA</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-0.5">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-3 py-1.5 text-[13px] font-medium transition-colors rounded-md ${
                isActive(link.path)
                  ? "text-foreground bg-muted"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="relative group">
            <button className="px-3 py-1.5 text-[13px] font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md">
              More
            </button>
            <div className="absolute right-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150">
              <div className="bg-card border border-border rounded-lg shadow-lg py-1 min-w-[160px]">
                {moreLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="block px-4 py-2 text-[13px] text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </nav>

        <div className="hidden lg:block">
          <Link
            to="/contact"
            className="text-[13px] font-semibold text-primary-foreground bg-navy px-4 py-2 rounded-md hover:bg-navy-light transition-colors"
          >
            Get in Touch
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-1.5 rounded-md text-foreground hover:bg-muted transition-colors"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-background border-t border-border">
          <nav className="max-w-6xl mx-auto px-6 py-4 flex flex-col">
            {[...navLinks, ...moreLinks].map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`px-3 py-2.5 text-[14px] font-medium transition-colors rounded-md ${
                  isActive(link.path)
                    ? "text-foreground bg-muted"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-3 pt-3 border-t border-border">
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center justify-center w-full h-10 text-[14px] font-semibold text-primary-foreground bg-navy rounded-md"
              >
                Get in Touch
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
