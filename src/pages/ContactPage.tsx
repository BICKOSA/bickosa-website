import { useState } from "react";
import Layout from "@/components/Layout";
import { Send } from "lucide-react";

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for reaching out! We'll get back to you soon.");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <Layout>
      <section className="page-hero">
        <div className="container-wide px-6 sm:px-8 lg:px-12">
          <div className="max-w-xl">
            <div className="gold-accent-bar" />
            <p className="text-[12px] font-semibold uppercase tracking-[0.15em] mb-5 text-gold">Get in Touch</p>
            <h1 className="text-[42px] sm:text-[52px] font-extrabold tracking-tight leading-[1.06] mb-5 text-primary-foreground">Contact BICKOSA</h1>
            <p className="text-[16px] leading-[1.7] text-primary-foreground/55">
              For inquiries, partnerships, stories, event collaboration, or any other questions.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-[1fr_360px] gap-16">
            <div>
              <h2 className="text-[28px] font-bold tracking-tight text-foreground mb-8">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[13px] font-medium text-foreground mb-2">Full Name</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full h-11 px-4 text-[14px] rounded-lg bg-background border border-border text-foreground focus:ring-2 focus:ring-gold/30 focus:border-gold outline-none transition-all"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-[13px] font-medium text-foreground mb-2">Email Address</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full h-11 px-4 text-[14px] rounded-lg bg-background border border-border text-foreground focus:ring-2 focus:ring-gold/30 focus:border-gold outline-none transition-all"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[13px] font-medium text-foreground mb-2">Subject</label>
                  <input
                    type="text"
                    required
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="w-full h-11 px-4 text-[14px] rounded-lg bg-background border border-border text-foreground focus:ring-2 focus:ring-gold/30 focus:border-gold outline-none transition-all"
                    placeholder="What is this about?"
                  />
                </div>
                <div>
                  <label className="block text-[13px] font-medium text-foreground mb-2">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 text-[14px] rounded-lg bg-background border border-border text-foreground focus:ring-2 focus:ring-gold/30 focus:border-gold outline-none transition-all resize-none"
                    placeholder="Your message..."
                  />
                </div>
                <button type="submit" className="inline-flex items-center gap-2 h-11 px-6 text-[14px] font-semibold text-primary-foreground bg-navy rounded-lg hover:bg-navy-light transition-colors">
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </form>
            </div>

            <div className="lg:pt-16">
              <div className="bg-muted rounded-xl p-7 space-y-7">
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
                  <p className="text-[13px] font-semibold text-foreground mb-2">Social Media</p>
                  <div className="flex flex-wrap gap-2">
                    {["Facebook", "Instagram", "X / Twitter", "LinkedIn"].map((s) => (
                      <span key={s} className="inline-flex items-center px-3 py-1.5 text-[12px] font-medium rounded-md bg-background border border-border text-muted-foreground hover:text-foreground cursor-pointer transition-colors">{s}</span>
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
