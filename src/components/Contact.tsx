'use client';
import { useState } from "react";
import { Send, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {toast} from "sonner";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Formulaire invalide", {
        description: "Merci de compléter tout les champs du formulaire avant de le soumettre."
      })
      setIsSubmitting(false)
      return
    }
    
    // Simulation d'envoi
    try {
     await fetch("/api/contact", {
       method: "POST",
       headers: {
         "content-type": "application/json"
       },
       body: JSON.stringify({...formData})
     })
    } catch (e) {
      return new Response(JSON.stringify({error: e, message: "Une erreur de serveur est survenue."}))
    }
    
    toast.success("Message envoyé !",{
      description: "Je vous répondrai dans les plus brefs délais.",
    });
    
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };
  
  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Travaillons Ensemble
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Vous avez un projet ? Une idée ? N&apos;hésitez pas à me contacter pour en discuter
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulaire de contact */}
          <Card className="shadow-card border-0 animate-fade-in">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Envoyez-moi un message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Votre nom"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="h-12 border-border focus:border-primary focus:ring-primary/20"
                  />
                </div>
                
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Votre email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="h-12 border-border focus:border-primary focus:ring-primary/20"
                  />
                </div>
                
                <div>
                  <Textarea
                    name="message"
                    placeholder="Décrivez votre projet..."
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="border-border focus:border-primary focus:ring-primary/20 resize-none"
                  />
                </div>
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/20"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Envoyer le message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
          
          {/* Informations de contact */}
          <div className="space-y-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Mes coordonnées
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Je suis disponible pour discuter de vos projets et répondre à toutes vos questions.
                N&apos;hésitez pas à me contacter par le moyen qui vous convient le mieux.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4 p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Email</p>
                  <a
                    href="mailto:brandonricci4@gmail.com"
                    className="text-primary hover:underline"
                  >
                    brandonricci4@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Téléphone</p>
                  <a
                    href="tel:+33777486426"
                    className="text-primary hover:underline"
                  >
                    +33 7 77 48 64 26
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Localisation</p>
                  <p className="text-muted-foreground">Moselle, France</p>
                </div>
              </div>
            </div>
            
            <div className="pt-6">
              <p className="text-sm text-muted-foreground">
                Temps de réponse habituel : <span className="text-primary font-medium">24h</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;