
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import ProjectsSection from "@/components/ProjectsSection";
import Benefits from "@/components/Benefits";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <HowItWorks />
      <ProjectsSection />
      <Benefits />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
