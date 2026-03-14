import Layout from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BentoCard } from "@/components/bento";

const faqs = [
  {
    q: "What is BICKOSA?",
    a: "BICKOSA is the Bishop Cipriano Kihangire Old Students Association, the alumni community of Bishop Cipriano Kihangire Senior Secondary School.",
  },
  {
    q: "Who can engage with BICKOSA?",
    a: "BICKOSA primarily serves former students of the school, while also creating space for partners, supporters, and the wider BCK community to connect where appropriate.",
  },
  {
    q: "How can I stay updated?",
    a: "You can stay updated through the website, official social channels, and public announcements shared by the association.",
  },
  {
    q: "How can I support a project or event?",
    a: "Visit the Projects & Giving page or contact the association directly to express your interest.",
  },
  {
    q: "How can I share my alumni story?",
    a: "Reach out through the Contact page and the team will guide you through the next steps.",
  },
  {
    q: "Will there be a member platform later?",
    a: "Yes. The current phase focuses on the public website. More alumni-specific digital tools may be introduced in later phases.",
  },
];

const FAQPage = () => {
  return (
    <Layout>
      <PageHero
        eyebrow="Common Questions"
        title="FAQs"
        description="Answers to common questions about BICKOSA, engagement, projects, and staying connected."
      />

      <section className="section">
        <p className="section-eyebrow">Help</p>
        <h2 className="section-heading">Frequently Asked Questions</h2>
        <p className="section-sub">
          Quick answers to what we get asked most.
        </p>

        <BentoCard variant="white" col={12} minHeight={0} className="!min-h-0 !p-0">
          <Accordion type="single" collapsible className="divide-y" style={{ borderColor: "var(--border)" }}>
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="px-6 py-4 border-0 border-b last:border-b-0"
                style={{ borderColor: "var(--border)" }}
              >
                <AccordionTrigger
                  className="text-left text-[15px] font-semibold hover:no-underline py-2"
                  style={{ color: "var(--navy-900)", fontFamily: "var(--font-sans)" }}
                >
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent
                  className="text-[14px] leading-[1.75] pb-2"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </BentoCard>
      </section>
    </Layout>
  );
};

export default FAQPage;
