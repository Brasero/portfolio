import { ExternalLink, Github } from "lucide-react";
import {buttonVariants} from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "Winali",
      description: "Plateforme de vente en ligne sous forme de tickets de lotterie",
      image: "/winali-accueil.png",
      technologies: ["React", "Next.js", "TypeScript", "Stripe", "NeonDB"],
      type: ["Application web", "SaaS"],
      githubUrl: "https://github.com/Brasero/winali.git",
      liveUrl: "https://winali.fr",
      isInProgress: true
    },
    {
      id: 2,
      title: "Money minder",
      description: "Application web de gestion de finances personnelles",
      image: "/money-minder-mobile-mockup.png",
      technologies: ["React", "TypeScript"],
      type: ["Application mobile", "PWA"],
      githubUrl: "https://github.com/Brasero/money-minder.git",
      liveUrl: "https://brasero.github.io/money-minder/",
      isInProgress: true
    }
  ];
  
  return (
    <section id="realisations" className="py-20 px-6 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Mes Réalisations
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Découvrez quelques-uns de mes projets récents, alliant design moderne et fonctionnalités avancées
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className="group overflow-hidden border-0 shadow-card hover:shadow-xl transition-all duration-500 hover:-translate-y-2 bg-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              
              <div className="relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={1900}
                  height={900}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute flex w-full flex-wrap items-center justify-end gap-1 top-2 right-2">
                  {
                    project.type.map(type => <div key={type} className={`${buttonVariants({size: "sm"})}`}>{type}</div>)
                  }
                  {
                    project.isInProgress &&
			             <div className={`${buttonVariants({size: "sm", variant: "secondary"})} py-2 px-2 bg-warning/90 text-white`}>Work in progress</div>
                  }
                </div>
                <div
                  className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <Link
                    href={project.githubUrl}
                    className={`${buttonVariants({size: "sm", variant: "secondary"})} bg-white/20 border-white/30 text-white hover:bg-white/30`}
                  >
                    <Github className="w-4 h-4 mr-2"/>
                    Code
                  </Link>
                  <Link
                    href={project.liveUrl}
                    className={`${buttonVariants({size: "sm"})} bg-primary hover:bg-primary/90`}
                  >
                    <ExternalLink className="w-4 h-4 mr-2"/>
                    Voir
                  </Link>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Vous avez un projet en tête ?{" "}
            <Link href={"#contact"} className={`text-primary hover:underline font-medium`}>
              Parlons-en ensemble
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;