import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/Contact";
import OfferSection from "@/components/OfferSection";
import WhoIAm from "@/components/WhoIAm";

export default function Home() {
  return (
   <div className="min-h-screen bg-background">
    <main>
      <div className="accueil">
        <HeroSection />
      </div>
      <WhoIAm />
      <ProjectsSection />
      <OfferSection />
      <ContactSection />
    </main>
   </div>
  );
}