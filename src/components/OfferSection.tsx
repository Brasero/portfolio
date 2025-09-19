import {Card} from "@/components/ui/card";
import {Pointer} from "lucide-react";

const OfferSection = () => {
  const offer = [
    {
      title: "Pack Vitrine",
      description: "Un site clair et professionnel pour présenter votre activité, vos services et vos coordonnées.",
      advantage: "Idéal pour être trouvé facilement et inspirer confiance.",
      pricing: "👉 À partir de 800 €"
    },
    {
      title: "Pack Dynamique",
      description: "Un site vitrine + la possibilité de gérer vous-même vos contenus (blog, catalogue, actualités).",
      advantage: "Idéal pour rester actif en ligne et améliorer votre référencement.",
      pricing: "👉 À partir de 1 200 €"
    },
    {
      title: "Sur-Mesure",
      description: "Développement d’applications web adaptées à vos besoins spécifiques (gestion de rendez-vous, espace client, boutique en ligne...).",
      advantage: "Idéal pour aller plus loin et gagner du temps dans votre activité.",
      pricing: "👉 Sur devis."
    }
    
  ]
  
  return (
    <div id="offer" className="min-h-screen py-20 px-6 bg-gradient-to-b from-primary/20 via-primary-glow/20 to-primary-glow/5">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Mon offre
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-5">
            J’accompagne les artisans, commerçants et petites entreprises à développer leur visibilité en ligne grâce à des sites modernes, rapides et adaptés au mobile.<br/>
            Mon objectif : vous livrer une solution clé en main qui vous aide à attirer de nouveaux clients.
          </p>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">Mes solutions</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offer.map((o, i) => {
            return (
              <Card
                key={i}
                className="group overflow-hidden border-0 shadow-card py-2 px-4"
                style={{animationDelay: `${i * 0.1}s`}}
              >
                <h4 className="text-lg md:text-xl lg:text-2xl font-bold text-foreground flex items-end mb-1"><Pointer style={{rotate:"90deg", scale:0.7}} className={"text-primary mr-2"} />{o.title}</h4>
                <p className="text-sm text-muted-foreground">{o.description}</p>
                <p className="text-sm text-muted-foreground font-bold">{o.advantage}</p>
                <p className="text-lg text-primary font-bold mb-2">{o.pricing}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default OfferSection