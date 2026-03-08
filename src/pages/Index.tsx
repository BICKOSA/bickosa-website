import Layout from "@/components/Layout";
import HeroSection from "@/components/home/HeroSection";
import TrustStrip from "@/components/home/TrustStrip";
import AboutSnapshot from "@/components/home/AboutSnapshot";
import LegacySection from "@/components/home/LegacySection";
import AlumniStories from "@/components/home/AlumniStories";
import EventsSection from "@/components/home/EventsSection";
import ProjectsPreview from "@/components/home/ProjectsPreview";
import NewsSection from "@/components/home/NewsSection";
import GalleryPreview from "@/components/home/GalleryPreview";
import FinalCTA from "@/components/home/FinalCTA";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <TrustStrip />
      <AboutSnapshot />
      <LegacySection />
      <AlumniStories />
      <EventsSection />
      <ProjectsPreview />
      <NewsSection />
      <GalleryPreview />
      <FinalCTA />
    </Layout>
  );
};

export default Index;
