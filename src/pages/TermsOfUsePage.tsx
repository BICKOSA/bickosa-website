import Layout from "@/components/Layout";
import { PageHero } from "@/components/PageHero";

const sections = [
  {
    title: "Use of the Website",
    content:
      "You may use this website for lawful, respectful, and non-commercial purposes connected to learning about BICKOSA, the school community, alumni engagement, events, projects, and public association updates.",
  },
  {
    title: "Community Standards",
    content:
      "You agree not to misuse the website, submit false or harmful information, interfere with website operation, attempt unauthorized access, or use BICKOSA channels in a way that harms the association, the school, alumni, students, partners, or the wider community.",
  },
  {
    title: "Content and Intellectual Property",
    content:
      "Website text, images, design, branding, and other materials are owned by BICKOSA or used with permission unless otherwise noted. You may reference public content in a fair and respectful way, but you may not copy, modify, publish, or commercially reuse materials without permission.",
  },
  {
    title: "Submitted Materials",
    content:
      "If you submit stories, photos, messages, or other materials, you confirm that you have the right to share them and that BICKOSA may review, edit, publish, archive, or decline them for association purposes.",
  },
  {
    title: "External Links",
    content:
      "The website may link to external platforms, partner sites, portals, or social channels. BICKOSA is not responsible for the content, availability, privacy practices, or policies of third-party services.",
  },
  {
    title: "Updates to These Terms",
    content:
      "BICKOSA may update these Terms of Use from time to time. Continued use of the website after updates means you accept the revised terms.",
  },
];

const TermsOfUsePage = () => {
  return (
    <Layout>
      <PageHero
        eyebrow="Terms"
        title="Terms of Use"
        description="The basic conditions for using the BICKOSA website and engaging with public association content."
      />

      <section className="section max-w-3xl">
        <p className="section-eyebrow">Last updated</p>
        <h2 className="section-heading">April 18, 2026</h2>
        <p className="section-sub">
          These Terms of Use govern access to and use of the BICKOSA website. By using the site,
          you agree to these terms and to engage with the association's digital spaces respectfully.
        </p>
      </section>

      <section className="section max-w-3xl">
        <div className="space-y-10">
          {sections.map((section) => (
            <article key={section.title} className="border-b pb-8 last:border-b-0" style={{ borderColor: "var(--border)" }}>
              <h2 className="text-[22px] font-bold tracking-tight mb-3" style={{ color: "var(--navy-900)", fontFamily: "var(--font-display)" }}>
                {section.title}
              </h2>
              <p className="text-[15px] leading-[1.75]" style={{ color: "var(--text-secondary)" }}>
                {section.content}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="section max-w-3xl">
        <p className="section-eyebrow">Contact</p>
        <h2 className="section-heading">Questions About These Terms</h2>
        <p className="text-[15px] leading-[1.75]" style={{ color: "var(--text-secondary)" }}>
          For questions about these terms, contact BICKOSA at{" "}
          <a href="mailto:info@updates.bickosa.com" className="font-semibold transition-colors hover:opacity-90" style={{ color: "hsl(var(--cobalt))" }}>
            info@updates.bickosa.com
          </a>
          .
        </p>
      </section>
    </Layout>
  );
};

export default TermsOfUsePage;
