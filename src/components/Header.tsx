import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/bickosa-logo.png";
import { cn } from "@/lib/utils";

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
    <header
      className="fixed top-10 left-0 right-0 z-50 border-b"
      style={{
        background: "var(--white)",
        borderColor: "var(--border)",
      }}
    >
      <nav className="topnav max-w-[1280px] mx-auto px-6 sm:px-8" style={{ marginBottom: 0 }}>
        <Link to="/" className="topnav-brand flex items-center gap-2.5">
          <img src={logo} alt="BICKOSA" className="h-7 w-auto" />
          BICKOSA<span>.</span>
        </Link>

        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "topnav-link",
                isActive(link.path) && "!text-[var(--navy-900)] font-600"
              )}
            >
              {link.label}
            </Link>
          ))}
          <div className="relative group">
            <button
              type="button"
              className="topnav-link cursor-pointer bg-transparent border-none"
            >
              More
            </button>
            <div className="absolute right-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-10">
              <div
                className="rounded-xl border py-1 min-w-[180px] shadow-lg"
                style={{
                  background: "var(--white)",
                  borderColor: "var(--border)",
                }}
              >
                {moreLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="block px-4 py-2.5 text-[13px] transition-colors hover:bg-[var(--surface-alt)]"
                    style={{
                      color: "var(--text-secondary)",
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="hidden lg:block">
          <a
            href="https://portal.bickosa.com/join"
            target="_blank"
            rel="noopener noreferrer"
            className="topnav-cta"
          >
            Join BICKOSA
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-1.5 rounded-md transition-colors hover:bg-[var(--surface-alt)]"
          style={{ color: "var(--navy-900)" }}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {isOpen && (
        <div
          className="lg:hidden border-t"
          style={{ background: "var(--white)", borderColor: "var(--border)" }}
        >
          <nav className="max-w-[1280px] mx-auto px-6 py-4 flex flex-col gap-0.5">
            {[...navLinks, ...moreLinks].map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "px-3 py-2.5 text-[14px] font-medium transition-colors rounded-md",
                  isActive(link.path)
                    ? "bg-[var(--surface-alt)]"
                    : "hover:bg-[var(--surface-alt)]"
                )}
                style={{
                  color: isActive(link.path) ? "var(--navy-900)" : "var(--text-secondary)",
                }}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-3 pt-3 border-t" style={{ borderColor: "var(--border)" }}>
              <a
                href="https://portal.bickosa.com/join"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="topnav-cta inline-flex justify-center w-full"
              >
                Join BICKOSA
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
