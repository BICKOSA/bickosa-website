import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const featured = {
  name: "Dr. Sarah Nakamya",
  cohort: "Class of 1995",
  role: "Medical Practitioner & Community Health Advocate",
  story: "From the classrooms of BCK to the wards of Mulago Hospital, Dr. Nakamya's journey embodies the school's motto. After graduating, she pursued medicine at Makerere University, driven by the discipline and compassion instilled at BCK. Today, she leads a community health initiative serving thousands in rural Uganda.",
};

const stories = [
  { name: "James Ssenyonga", cohort: "Class of 2003", role: "Entrepreneur & Community Leader", excerpt: "BCK friendships shaped my business journey. BICKOSA keeps those bonds alive.", tag: "Entrepreneurship" },
  { name: "Grace Namutebi", cohort: "Class of 2010", role: "Educator & Mentor", excerpt: "I returned to teach because BCK gave me everything.", tag: "Education" },
  { name: "Peter Lubega", cohort: "Class of 1998", role: "Public Health Advisor", excerpt: "The values of integrity and service from BCK guide my work in national health policy.", tag: "Public Service" },
  { name: "Agnes Namuli", cohort: "Class of 2005", role: "Creative Arts Director", excerpt: "BCK nurtured my creativity. Today I lead arts programs across East Africa.", tag: "Creative Arts" },
  { name: "David Kateregga", cohort: "Class of 2001", role: "Sports Coach & Youth Mentor", excerpt: "The sports culture at BCK set me on a path to coaching the next generation.", tag: "Sports" },
  { name: "Florence Aber", cohort: "Class of 2008", role: "NGO Director", excerpt: "Community impact was a value I learned at BCK. BICKOSA reminds me of that mission.", tag: "Community Impact" },
];

const tags = ["Leadership", "Entrepreneurship", "Education", "Public Service", "Creative Arts", "Sports", "Community Impact"];

const StoriesPage = () => {
  return (
    <Layout>
      <section className="gradient-hero py-20 sm:py-28">
        <div className="container-wide px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "hsl(var(--gold))" }}>Our People</p>
            <h1 className="text-4xl sm:text-5xl font-heading font-bold mb-6" style={{ color: "hsl(var(--primary-foreground))" }}>Alumni Stories</h1>
            <p className="text-lg" style={{ color: "hsl(var(--primary-foreground) / 0.8)" }}>
              The BICKOSA community is made up of many journeys — shaped by different callings, experiences, and paths, but connected by one shared foundation.
            </p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="section-padding bg-background">
        <div className="container-wide max-w-3xl">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-6">Every Story Carries the Legacy Forward</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Alumni stories do more than celebrate achievement. They preserve memory, build pride, inspire younger generations, and remind the community of the many ways a BCK foundation can shape a life.
          </p>
        </div>
      </section>

      {/* Featured */}
      <section className="section-padding bg-card">
        <div className="container-wide">
          <div className="bento-card grid md:grid-cols-3 gap-8 p-8 sm:p-12">
            <div className="md:col-span-1">
              <div className="w-32 h-32 rounded-2xl bg-muted flex items-center justify-center mb-4">
                <span className="text-4xl font-heading font-bold text-muted-foreground">{featured.name[0]}</span>
              </div>
              <h3 className="font-heading text-2xl font-bold text-foreground">{featured.name}</h3>
              <p className="text-secondary text-sm font-medium mt-1">{featured.role}</p>
              <p className="text-muted-foreground text-xs mt-1">{featured.cohort}</p>
            </div>
            <div className="md:col-span-2">
              <span className="text-accent text-xs font-semibold tracking-widest uppercase">Featured Story</span>
              <p className="text-muted-foreground text-lg leading-relaxed mt-4">{featured.story}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Grid */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-3">More Stories from the Community</h2>
          <p className="text-muted-foreground mb-6">Explore journeys across leadership, entrepreneurship, education, public service, sports, community impact, and more.</p>
          <div className="flex flex-wrap gap-2 mb-10">
            {tags.map((tag) => (
              <span key={tag} className="px-3 py-1 rounded-full text-xs font-medium bg-muted text-muted-foreground">{tag}</span>
            ))}
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stories.map((s) => (
              <div key={s.name} className="bento-card group">
                <span className="text-xs font-semibold tracking-wider uppercase text-accent">{s.tag}</span>
                <div className="flex items-center gap-3 mt-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                    <span className="text-lg font-heading font-bold text-muted-foreground">{s.name[0]}</span>
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground">{s.name}</h3>
                    <p className="text-xs text-muted-foreground">{s.cohort}</p>
                  </div>
                </div>
                <p className="text-secondary text-sm font-medium mb-2">{s.role}</p>
                <p className="text-muted-foreground text-sm italic">"{s.excerpt}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why stories matter */}
      <section className="section-padding bg-card">
        <div className="container-wide text-center max-w-2xl">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-4">Have a Story to Share?</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            BICKOSA is built by the many journeys of its people. If you would like to share your story, reflection, or experience, we would love to hear from you.
          </p>
          <Button asChild variant="default">
            <Link to="/contact">Contact BICKOSA <ArrowRight className="ml-2 w-4 h-4" /></Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default StoriesPage;
