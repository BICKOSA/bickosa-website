import Layout from "@/components/Layout";
import { PageHero } from "@/components/PageHero";

const sections = [
  {
    title: "Information We Collect",
    content:
      "BICKOSA may collect information you choose to provide when you contact the association, submit an alumni story, register interest in an event, join a mailing list, or use connected alumni services. This may include your name, contact details, class year, affiliation with the school, message content, and any other information you provide voluntarily.",
  },
  {
    title: "How We Use Information",
    content:
      "We use information to respond to inquiries, share association updates, support events and projects, maintain alumni records, improve the website, and protect the integrity of BICKOSA communications and services.",
  },
  {
    title: "Sharing Information",
    content:
      "We do not sell personal information. We may share limited information with trusted association representatives, service providers, or partners when needed to operate BICKOSA activities, comply with legal obligations, or protect the association and its community.",
  },
  {
    title: "Cookies and Website Data",
    content:
      "The website may use basic technical data, cookies, analytics, or similar tools to understand site usage, improve performance, and maintain security. You can manage cookie preferences through your browser settings.",
  },
  {
    title: "Data Care and Retention",
    content:
      "We aim to keep personal information accurate, relevant, and protected. Information is retained only for as long as reasonably needed for association purposes, record keeping, legal requirements, or community engagement.",
  },
  {
    title: "Your Choices",
    content:
      "You may contact BICKOSA to request updates, corrections, or removal of personal information where appropriate. Some records may be retained where necessary for legitimate association, legal, or administrative reasons.",
  },
];

const PrivacyPolicyPage = () => {
  return (
    <Layout>
      <PageHero
        eyebrow="Privacy"
        title="Privacy Policy"
        description="How BICKOSA handles information shared through the website, association communications, events, and alumni engagement."
      />

      <section className="section max-w-3xl">
        <p className="section-eyebrow">Last updated</p>
        <h2 className="section-heading">April 18, 2026</h2>
        <p className="section-sub">
          This Privacy Policy explains how Bishop Cipriano Kihangire Old Students Association
          ("BICKOSA", "we", "our", or "us") collects, uses, and protects information connected
          to its public website and association activities.
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
        <h2 className="section-heading">Privacy Questions</h2>
        <p className="text-[15px] leading-[1.75]" style={{ color: "var(--text-secondary)" }}>
          For questions about this policy or how BICKOSA handles personal information, contact us at{" "}
          <a href="mailto:info@updates.bickosa.com" className="font-semibold transition-colors hover:opacity-90" style={{ color: "hsl(var(--cobalt))" }}>
            info@updates.bickosa.com
          </a>
          .
        </p>
      </section>
    </Layout>
  );
};

export default PrivacyPolicyPage;
