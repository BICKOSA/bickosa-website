import Header from "./Header";
import Footer from "./Footer";
import { ChevronRight } from "lucide-react";

const PORTAL_COMMITTEES_URL = "https://portal.bickosa.com/committees";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: "var(--surface)" }}>
      <a
        href={PORTAL_COMMITTEES_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed top-0 left-0 right-0 z-[60] flex items-center justify-center gap-1.5 py-2.5 px-4 text-[13px] font-medium transition-colors hover:opacity-95"
        style={{
          background: "var(--navy-900)",
          color: "var(--gold-200)",
        }}
      >
        <span>Nominations are open for The Constitutional Review Committee</span>
        <span className="font-semibold underline decoration-2 underline-offset-2">Nominate Now!</span>
        <ChevronRight className="w-4 h-4 shrink-0" aria-hidden />
      </a>
      <Header />
      <main className="flex-1 pt-24">
        <div className="page">{children}</div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
