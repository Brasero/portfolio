import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/Contact";

export default function Home() {
  return (
   <div className="min-h-screen bg-background">
    <main>
      <div className="accueil">
        <HeroSection />
      </div>
      <ProjectsSection />
      <ContactSection />
    </main>
   </div>
  );
}