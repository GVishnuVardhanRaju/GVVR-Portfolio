import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </Layout>
  );
};

export default Index;
