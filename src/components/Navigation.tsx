"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import logo from "../../public/digicci-logo-dark.svg";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("accueil");
  
  const onSectionChange = (sectionId: string) => {
    if (sectionId === "accueil") {
      window.scrollTo({top: 0, behavior: "smooth"});
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({behavior: "smooth"});
      }
    }
    setActiveSection(sectionId)
  }
  
  const navItems = [
    { id: "accueil", label: "Accueil" },
    { id: "realisations", label: "Mes réalisations" },
    { id: "contact", label: "Contact" },
  ];
  
  const handleSectionClick = (sectionId: string) => {
    onSectionChange(sectionId);
    setIsMenuOpen(false);
  };
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-center">
            <Image src={logo} alt={"Logo DIGICCI"} width={100} height={100} />
            <div
              className="text-2xl font-semibold text-foreground cursor-pointer"
              onClick={() => handleSectionClick("accueil")}
            >
              Portfolio
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleSectionClick(item.id)}
                className={`text-sm font-medium transition-colors duration-300 hover:text-primary ${
                  activeSection === item.id
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleSectionClick(item.id)}
                  className={`text-left text-sm font-medium transition-colors duration-300 hover:text-primary ${
                    activeSection === item.id
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;