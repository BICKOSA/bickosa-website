import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for reaching out! We'll get back to you soon.");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <Layout>
      <section className="gradient-hero py-20 sm:py-28">
        <div className="container-wide px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "hsl(var(--gold))" }}>Get in Touch</p>
            <h1 className="text-4xl sm:text-5xl font-heading font-bold mb-6" style={{ color: "hsl(var(--primary-foreground))" }}>Contact BICKOSA</h1>
            <p className="text-lg" style={{ color: "hsl(var(--primary-foreground) / 0.8)" }}>
              For inquiries, partnerships, stories, event collaboration, alumni engagement, or any other questions, we would be glad to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="section-padding bg-background">
        <div className="container-wide max-w-3xl">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-6">Reach the Association</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Whether you are an alumnus, partner, supporter, or friend of the community, this page is the best place to begin a conversation with BICKOSA.
          </p>
        </div>
      </section>

      <section className="section-padding bg-card">
        <div className="container-wide">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="bento-card flex items-start gap-4">
              <Mail className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-heading font-semibold text-foreground mb-1">Email</h3>
                <p className="text-muted-foreground text-sm">[Contact Email]</p>
              </div>
            </div>
            <div className="bento-card flex items-start gap-4">
              <Phone className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-heading font-semibold text-foreground mb-1">Phone</h3>
                <p className="text-muted-foreground text-sm">[Contact Number]</p>
              </div>
            </div>
            <div className="bento-card flex items-start gap-4">
              <MapPin className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-heading font-semibold text-foreground mb-1">Location</h3>
                <p className="text-muted-foreground text-sm">Bbiina/Luzira, Kampala, Uganda</p>
              </div>
            </div>
            <div className="bento-card">
              <h3 className="font-heading font-semibold text-foreground mb-3">Social Media</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>Facebook</li>
                <li>Instagram</li>
                <li>X / Twitter</li>
                <li>LinkedIn</li>
              </ul>
            </div>
          </div>

          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-8 text-center">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Full Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground focus:ring-2 focus:ring-ring focus:border-transparent outline-none transition-shadow"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email Address</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground focus:ring-2 focus:ring-ring focus:border-transparent outline-none transition-shadow"
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Subject</label>
                <input
                  type="text"
                  required
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground focus:ring-2 focus:ring-ring focus:border-transparent outline-none transition-shadow"
                  placeholder="What is this about?"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground focus:ring-2 focus:ring-ring focus:border-transparent outline-none transition-shadow resize-none"
                  placeholder="Your message..."
                />
              </div>
              <Button type="submit" size="lg" className="w-full">Send Message</Button>
              <p className="text-xs text-muted-foreground text-center">We will do our best to respond as soon as possible.</p>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
