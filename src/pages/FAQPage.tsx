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
      <section className="gradient-hero py-20 sm:py-28">
        <div className="container-wide px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "hsl(var(--gold))" }}>Frequently Asked Questions</p>
            <h1 className="text-4xl sm:text-5xl font-heading font-bold mb-6" style={{ color: "hsl(var(--primary-foreground))" }}>FAQs</h1>
            <p className="text-lg" style={{ color: "hsl(var(--primary-foreground) / 0.8)" }}>
              Answers to common questions about BICKOSA, the website, engagement, projects, and staying connected.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide max-w-3xl">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bento-card border-border">
                <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:no-underline px-2">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed px-2 pb-2">
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
