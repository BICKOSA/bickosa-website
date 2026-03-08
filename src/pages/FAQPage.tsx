import Layout from "@/components/Layout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "What is BICKOSA?", a: "BICKOSA is the Bishop Cipriano Kihangire Old Students Association, the alumni community of Bishop Cipriano Kihangire Senior Secondary School." },
  { q: "Who can engage with BICKOSA?", a: "BICKOSA primarily serves former students of the school, while also creating space for partners, supporters, and the wider BCK community to connect where appropriate." },
  { q: "How can I stay updated?", a: "You can stay updated through the website, official social channels, and public announcements shared by the association." },
  { q: "How can I support a project or event?", a: "Visit the Projects & Giving page or contact the association directly to express your interest." },
  { q: "How can I share my alumni story?", a: "Reach out through the Contact page and the team will guide you through the next steps." },
  { q: "Will there be a member platform later?", a: "Yes. The current phase focuses on the public website. More alumni-specific digital tools may be introduced in later phases." },
];

const FAQPage = () => {
  return (
    <Layout>
      <section className="page-hero">
        <div className="container-wide px-6 sm:px-8 lg:px-12">
          <div className="max-w-xl">
            <p className="text-[12px] font-medium uppercase tracking-[0.15em] mb-5" style={{ color: "hsl(var(--gold))" }}>Common Questions</p>
            <h1 className="text-[40px] sm:text-[48px] font-bold tracking-tight leading-[1.08] mb-5" style={{ color: "hsl(var(--primary-foreground))" }}>FAQs</h1>
            <p className="text-[16px] leading-[1.65]" style={{ color: "hsl(var(--primary-foreground) / 0.55)" }}>
              Answers to common questions about BICKOSA, engagement, projects, and staying connected.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide max-w-2xl">
          <Accordion type="single" collapsible className="border-t border-border">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border-b border-border py-1">
                <AccordionTrigger className="text-left text-[15px] font-medium text-foreground hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-[14px] text-muted-foreground leading-[1.7] pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </Layout>
  );
};

export default FAQPage;
