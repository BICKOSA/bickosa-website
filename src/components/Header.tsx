import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/bickosa-logo.png";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About BICKOSA", path: "/about" },
  { label: "About the School", path: "/school" },
  { label: "History & Legacy", path: "/history" },
  { label: "Alumni Stories", path: "/stories" },
  { label: "News & Updates", path: "/news" },
  { label: "Events", path: "/events" },
  { label: "Projects & Giving", path: "/projects" },
  { label: "Gallery", path: "/gallery" },
  { label: "Contact", path: "/contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      <div className="container-wide flex items-center justify-between h-16 sm:h-20 px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="BICKOSA Logo" className="h-10 sm:h-12 w-auto" />
          <div className="hidden sm:block">
            <span className="text-lg font-heading font-bold text-primary">BICKOSA</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.slice(0, 7).map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                location.pathname === link.path
                  ? "text-secondary bg-primary/5"
                  : "text-foreground/70 hover:text-foreground hover:bg-muted"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="relative group">
            <button className="px-3 py-2 text-sm font-medium text-foreground/70 hover:text-foreground rounded-lg transition-colors">
              More ▾
            </button>
            <div className="absolute right-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
              <div className="bg-card rounded-xl border border-border shadow-elevated p-2 min-w-[180px]">
                {navLinks.slice(7).map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="block px-3 py-2 text-sm rounded-lg text-foreground/70 hover:text-foreground hover:bg-muted transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </nav>

        <div className="hidden lg:block">
          <Button asChild variant="default" size="sm">
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 rounded-lg text-foreground hover:bg-muted"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden bg-card border-t border-border animate-fade-in">
          <nav className="container-wide px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                  location.pathname === link.path
                    ? "text-secondary bg-primary/5"
                    : "text-foreground/70 hover:text-foreground hover:bg-muted"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="mt-2">
              <Link to="/contact" onClick={() => setIsOpen(false)}>Get in Touch</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
