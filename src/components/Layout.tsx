import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: "var(--surface)" }}>
      <Header />
      <main className="flex-1 pt-14">
        <div className="page">{children}</div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
