import Image from "next/image";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import Link from "next/link";
import {buttonVariants} from "@/components/ui/button";

export default function WhoIAm () {
  return (
    <section id="who" className="py-20 px-6 bg-gradient-to-b max-w-screen from-primary/10 via-transparent to-muted/20">
      <div className="container flex flex-col mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Qui suis-je ?
          </h2>
          <p className="text-sm md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Enchanté, moi c’est Brandon,
            <br/>
            Je suis développeur web freelance, passionné par la <b>création de solutions simples et efficaces</b> qui
            aident les entreprises à <b>être visibles et à gagner en crédibilité en ligne</b>.
          </p>
        </div>
        <div className="flex flex-col-reverse md:flex-row gap-8">
          <div className="flex flex-col md:flex-row flex-wrap gap-8 flex-4">
            <Card className="bg-transparent border-none shadow-none">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-primary">Mon parcours</CardTitle>
              </CardHeader>
              <CardContent>
                J’ai commencé dans le développement web en 2020, en travaillant sur des applications mobile et site web
                vitrine. <br/>
                Avec le temps, j’ai affiné ma méthode : <b>écouter attentivement mes clients, comprendre leur activité
                et proposer une solution technique adaptée à leur réalité</b>, pas juste du “code”.
              </CardContent>
            </Card>
            <Card className="bg-transparent border-none shadow-none">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-primary">Ce qui me distingue</CardTitle>
              </CardHeader>
              <CardContent>
                <ul>
                  <li><b>Écoute et pédagogie</b> : je vulgarise la technique pour que mes clients comprennent ce que je
                    fais.
                  </li>
                  <li><b>Fiabilité</b> : je livre dans les délais, avec un suivi clair.</li>
                  <li><b>Souplesse</b> : chaque projet est unique, je m’adapte à vos besoins.</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-transparent border-none shadow-none">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-primary">Pourquoi travailler avec moi ?</CardTitle>
              </CardHeader>
              <CardContent>
                Parce que je crois qu’un site web ne doit pas être une contrainte technique mais un vrai levier de
                croissance. <br/>
                Mon rôle, c’est de vous accompagner pour transformer vos idées en un site clair, moderne et utile à
                votre activité.
              </CardContent>
            </Card>
            <div className="container flex align-center justify-start">
              <Link href={"#contact"} className={`${buttonVariants({size: "block", variant: "default"})}`}>Discutons
                de votre projet.
              </Link>
            </div>
          </div>
          <div className="relative flex-2 w-max-screen flex self-end">
            <Image className="absolute object-fit  bottom-0 right-0 md:right-6" src={"/me.png"} alt={"Une photo de Brandon Ricci."}
                   width={433} height={577}/>
            <svg className="w-120 h-120" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="#9E6EF2FF"
                    d="M37.1,-46.4C41.2,-33,32.9,-16.5,32.4,-0.6C31.8,15.4,39,30.8,34.9,41.8C30.8,52.7,15.4,59.2,4.1,55.1C-7.2,51,-14.4,36.3,-18.5,25.3C-22.7,14.4,-23.7,7.2,-22.2,1.5C-20.6,-4.1,-16.5,-8.2,-12.4,-21.6C-8.2,-34.9,-4.1,-57.4,6.2,-63.6C16.5,-69.8,33,-59.7,37.1,-46.4Z"
                    transform="translate(100 100)"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}