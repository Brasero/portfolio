import { ArrowRight, Code, Smartphone } from "lucide-react";
import {buttonVariants} from "@/components/ui/button";
import Link from "next/link";



const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-35 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-primary-glow/15"></div>
      
      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <div className="space-y-8 animate-fade-in-up">
          {/* Main heading */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
              Créateur de
              <span className="text-primary block">solutions web</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Je développe des sites web modernes et des applications performantes qui donnent vie à vos idées
            </p>
          </div>
          
          {/* Services */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-8 py-8">
            <div className="flex items-center gap-3 text-muted-foreground">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Code className="w-6 h-6 text-primary" />
              </div>
              <span className="font-medium">Sites web</span>
            </div>
            <div className="hidden sm:block w-px h-12 bg-border"></div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Smartphone className="w-6 h-6 text-primary" />
              </div>
              <span className="font-medium">Applications</span>
            </div>
          </div>
          
          {/* CTA Button */}
          <div className="pt-4">
            <Link
              href={"#contact"}
              
              className={`${buttonVariants({size: "lg"})} bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium rounded-xl shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:scale-105 group`}
            >
              Démarrer un projet
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-1 h-16 bg-gradient-to-b from-primary/20 to-transparent rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;