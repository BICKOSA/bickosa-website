import { useState } from "react";
import Layout from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { Send } from "lucide-react";
import { BentoCard } from "@/components/bento";

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for reaching out! We'll get back to you soon.");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <Layout>
      <PageHero
        eyebrow="Get in Touch"
        title="Contact BICKOSA"
        description="For inquiries, partnerships, stories, event collaboration, or any other questions."
      />

      <section className="section">
        <p className="section-eyebrow">Reach Us</p>
        <h2 className="section-heading">Send Us a Message</h2>
        <p className="section-sub">
          We&apos;ll get back to you as soon as we can.
        </p>

        <div className="bento">
          <BentoCard variant="white" col={8} minHeight={400}>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label
                    className="block text-[13px] font-medium mb-2"
                    style={{ color: "var(--navy-900)" }}
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full h-11 px-4 text-[14px] rounded-lg border outline-none transition-all focus:ring-2 focus:ring-[var(--gold-300)] focus:border-[var(--gold-500)]"
                    style={{
                      background: "var(--surface)",
                      borderColor: "var(--border)",
                      color: "var(--text-primary)",
                    }}
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label
                    className="block text-[13px] font-medium mb-2"
                    style={{ color: "var(--navy-900)" }}
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full h-11 px-4 text-[14px] rounded-lg border outline-none transition-all focus:ring-2 focus:ring-[var(--gold-300)] focus:border-[var(--gold-500)]"
                    style={{
                      background: "var(--surface)",
                      borderColor: "var(--border)",
                      color: "var(--text-primary)",
                    }}
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              <div>
                <label
                  className="block text-[13px] font-medium mb-2"
                  style={{ color: "var(--navy-900)" }}
                >
                  Subject
                </label>
                <input
                  type="text"
                  required
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className="w-full h-11 px-4 text-[14px] rounded-lg border outline-none transition-all focus:ring-2 focus:ring-[var(--gold-300)] focus:border-[var(--gold-500)]"
                  style={{
                    background: "var(--surface)",
                    borderColor: "var(--border)",
                    color: "var(--text-primary)",
                  }}
                  placeholder="What is this about?"
                />
              </div>
              <div>
                <label
                  className="block text-[13px] font-medium mb-2"
                  style={{ color: "var(--navy-900)" }}
                >
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 text-[14px] rounded-lg border outline-none transition-all resize-none focus:ring-2 focus:ring-[var(--gold-300)] focus:border-[var(--gold-500)]"
                  style={{
                    background: "var(--surface)",
                    borderColor: "var(--border)",
                    color: "var(--text-primary)",
                  }}
                  placeholder="Your message..."
                />
              </div>
              <button type="submit" className="bc-btn bc-btn-navy">
                <Send className="w-4 h-4" />
                Send Message
              </button>
            </form>
          </BentoCard>

          <BentoCard variant="surface" col={4} minHeight={400}>
            <div className="bc-eyebrow">Contact Info</div>
            <div className="space-y-6">
              <div>
                <p className="text-[13px] font-semibold mb-1.5" style={{ color: "var(--navy-900)" }}>
                  Email
                </p>
                <a href="mailto:info@bickosa.org" className="text-[14px]" style={{ color: "var(--navy-600)" }}>
                  info@bickosa.org
                </a>
              </div>
              <div>
                <p className="text-[13px] font-semibold mb-1.5" style={{ color: "var(--navy-900)" }}>
                  Phone
                </p>
                <p className="text-[14px]" style={{ color: "var(--text-secondary)" }}>
                  +256 700 000 000
                </p>
              </div>
              <div>
                <p className="text-[13px] font-semibold mb-1.5" style={{ color: "var(--navy-900)" }}>
                  Location
                </p>
                <p className="text-[14px]" style={{ color: "var(--text-secondary)" }}>
                  Bbiina/Luzira, Kampala, Uganda
                </p>
                <p className="text-[13px] mt-0.5" style={{ color: "var(--text-muted)" }}>
                  P.O. Box 27477, Kampala
                </p>
              </div>
              <div>
                <p className="text-[13px] font-semibold mb-2" style={{ color: "var(--navy-900)" }}>
                  Social Media
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Facebook", "Instagram", "X / Twitter", "LinkedIn"].map((s) => (
                    <span
                      key={s}
                      className="bc-tag bc-tag-navy cursor-pointer"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </BentoCard>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
