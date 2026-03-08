import { useState } from "react";
import Layout from "@/components/Layout";
import { Send } from "lucide-react";

const inquiryTypes = ["General inquiry", "Data correction request", "Partnership / sponsorship", "Media takedown request"];

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", email: "", type: inquiryTypes[0], message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for reaching out! We'll get back to you soon.");
    setForm({ name: "", email: "", type: inquiryTypes[0], message: "" });
  };

  return (
    <Layout>
      <section className="page-hero">
        <div className="container-wide px-6 sm:px-8 lg:px-12">
          <div className="max-w-2xl">
            <p className="overline text-gold mb-5">Get in Touch</p>
            <h1 className="text-[40px] sm:text-[52px] lg:text-[56px] font-bold tracking-tight leading-[1.1] mb-6 text-primary-foreground">
              Contact
            </h1>
            <p className="text-[17px] sm:text-[18px] leading-[1.65] text-primary-foreground/50">
              Questions, corrections, partnerships, or chapter support — we're here.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-[1fr_360px] gap-16">
            <div>
              <h2 className="text-[24px] font-bold tracking-tight text-foreground mb-8">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[13px] font-medium text-foreground mb-2">Full Name</label>
                    <input
                      type="text" required value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full h-11 px-4 text-[14px] rounded-lg bg-background border border-border text-foreground focus:ring-2 focus:ring-cobalt/30 focus:border-cobalt outline-none transition-all duration-150"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-[13px] font-medium text-foreground mb-2">Email</label>
                    <input
                      type="email" required value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full h-11 px-4 text-[14px] rounded-lg bg-background border border-border text-foreground focus:ring-2 focus:ring-cobalt/30 focus:border-cobalt outline-none transition-all duration-150"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[13px] font-medium text-foreground mb-2">Inquiry Type</label>
                  <select
                    value={form.type}
                    onChange={(e) => setForm({ ...form, type: e.target.value })}
                    className="w-full h-11 px-4 text-[14px] rounded-lg bg-background border border-border text-foreground focus:ring-2 focus:ring-cobalt/30 focus:border-cobalt outline-none transition-all duration-150"
                  >
                    {inquiryTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-[13px] font-medium text-foreground mb-2">Message</label>
                  <textarea
                    required rows={5} value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 text-[14px] rounded-lg bg-background border border-border text-foreground focus:ring-2 focus:ring-cobalt/30 focus:border-cobalt outline-none transition-all duration-150 resize-none"
                    placeholder="Your message..."
                  />
                </div>
                <button type="submit" className="inline-flex items-center gap-2 h-11 px-6 text-[14px] font-semibold text-primary-foreground bg-navy rounded-lg hover:bg-navy-light transition-colors duration-150">
                  <Send className="w-4 h-4" /> Send Message
                </button>
              </form>
            </div>

            <div className="lg:pt-16">
              <div className="bg-muted rounded-xl p-7 space-y-6">
                <div>
                  <p className="text-[13px] font-semibold text-foreground mb-1.5">Email</p>
                  <p className="text-[14px] text-cobalt">info@bickosa.org</p>
                </div>
                <div>
                  <p className="text-[13px] font-semibold text-foreground mb-1.5">Phone</p>
                  <p className="text-[14px] text-muted-foreground">+256 700 000 000</p>
                </div>
                <div>
                  <p className="text-[13px] font-semibold text-foreground mb-1.5">Location</p>
                  <p className="text-[14px] text-muted-foreground">Bbiina/Luzira, Kampala, Uganda</p>
                  <p className="text-[13px] text-muted-foreground mt-0.5">P.O. Box 27477, Kampala</p>
                </div>
                <div>
                  <p className="text-[13px] font-semibold text-foreground mb-2">Social</p>
                  <div className="flex flex-wrap gap-2">
                    {["Facebook", "Instagram", "X / Twitter", "LinkedIn"].map((s) => (
                      <span key={s} className="inline-flex items-center px-3 py-1.5 text-[12px] font-medium rounded-lg bg-background border border-border text-muted-foreground hover:text-foreground cursor-pointer transition-colors duration-150">{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
