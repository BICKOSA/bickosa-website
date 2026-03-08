import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const sections = [
  {
    title: "Membership",
    faqs: [
      { q: "What is BICKOSA?", a: "BICKOSA is the Bishop Cipriano Kihangire Old Students Association, the alumni community of BCK SSS." },
      { q: "Who can engage with BICKOSA?", a: "BICKOSA primarily serves former students, while also creating space for partners, supporters, and the wider BCK community." },
      { q: "How do I join?", a: "Visit the About page or contact the association directly to express your interest in joining." },
    ],
  },
  {
    title: "Events",
    faqs: [
      { q: "How do I stay updated on events?", a: "Through the website, official social channels, and public announcements shared by the association." },
      { q: "How do I RSVP?", a: "Event details pages will include RSVP options as they become available." },
    ],
  },
  {
    title: "Donations & Projects",
    faqs: [
      { q: "How can I support a project?", a: "Visit the Projects & Giving page or contact the association directly." },
      { q: "Are receipts provided?", a: "Receipts and reporting cadence will be published as campaigns are formalized." },
    ],
  },
  {
    title: "Privacy",
    faqs: [
      { q: "How is my data used?", a: "BICKOSA handles personal data in line with Uganda's Data Protection and Privacy Act. See the Privacy Policy for details." },
      { q: "Who can see my profile?", a: "Directory profiles are opt-in only with per-field visibility controls." },
    ],
  },
];

const FAQPage = () => {
  return (
    <Layout>
      <section className="page-hero">
        <div className="container-wide px-6 sm:px-8 lg:px-12">
          <div className="max-w-2xl">
            <p className="overline text-gold mb-5">Common Questions</p>
            <h1 className="text-[40px] sm:text-[52px] lg:text-[56px] font-bold tracking-tight leading-[1.1] mb-6 text-primary-foreground">
              FAQs
            </h1>
            <p className="text-[17px] sm:text-[18px] leading-[1.65] text-primary-foreground/50">
              Answers to common questions about BICKOSA.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide max-w-2xl">
          {sections.map((section) => (
            <div key={section.title} className="mb-12 last:mb-0">
              <h2 className="text-[22px] font-bold tracking-tight text-foreground mb-5">{section.title}</h2>
              <Accordion type="single" collapsible className="space-y-3">
                {section.faqs.map((faq, i) => (
                  <AccordionItem key={i} value={`${section.title}-${i}`} className="bg-card border border-border rounded-xl px-6 overflow-hidden">
                    <AccordionTrigger className="text-left text-[15px] font-semibold text-foreground hover:no-underline py-5">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-[14px] text-muted-foreground leading-[1.7] pb-5">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}

          <div className="mt-12 pt-8 border-t border-border text-center">
            <p className="text-[15px] text-muted-foreground mb-4">Still have questions?</p>
            <Link to="/contact" className="text-[14px] font-semibold text-cobalt hover:text-cobalt-light transition-colors duration-150">
              Contact BICKOSA →
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQPage;
