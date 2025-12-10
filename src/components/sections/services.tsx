import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Megaphone, MousePointerClick, Code2, Clapperboard, CheckCircle } from "lucide-react";

const services = [
  {
    icon: <Megaphone className="h-10 w-10 text-primary" />,
    title: "Social Media",
    description: "Criamos uma presença digital forte, construindo autoridade e conectando sua marca com o público certo.",
  },
  {
    icon: <MousePointerClick className="h-10 w-10 text-primary" />,
    title: "Tráfego Pago",
    description: "Desenvolvemos campanhas estratégicas no Google e Meta Ads para atrair clientes qualificados e gerar resultados imediatos.",
  },
  {
    icon: <Code2 className="h-10 w-10 text-primary" />,
    title: "Criação de Sites",
    description: "Construímos sites que combinam estética, movimento e funcionalidade para proporcionar uma experiência de usuário impecável.",
  },
  {
    icon: <Clapperboard className="h-10 w-10 text-primary" />,
    title: "Setor Criativo",
    description: "Produzimos vídeos, designs e textos que vendem, transformando ideias em conteúdo criativo e de alto impacto.",
    details: [
        { item: "Planejamento" },
        { item: "Roteirização" },
        { item: "Produção" },
    ],
    highlight: "Desenvolvemos posicionamento e vitrines digitais que geram crescimento orgânico, mesmo sem depender de investimento em anúncios."
  },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-24 sm:py-32">
      <div className="container">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold sm:text-4xl">Estratégias de Vendas</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Entenda como iremos impulsionar sua empresa através da internet
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Card key={service.title} className="flex flex-col bg-card/80 border-border/60 hover:border-primary/50 hover:bg-card transition-all duration-300 transform hover:-translate-y-1">
              <CardHeader className="items-center text-center">
                {service.icon}
                <CardTitle className="mt-4">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col text-center">
                <p className="text-muted-foreground flex-grow">{service.description}</p>
                {service.details && (
                    <div className="mt-4 text-left">
                        <ul className="space-y-2">
                          {service.details.map(detail => (
                            <li key={detail.item} className="flex items-center text-sm text-muted-foreground">
                              <CheckCircle className="h-4 w-4 mr-2 text-accent" />
                              {detail.item}
                            </li>
                          ))}
                        </ul>
                        <p className="mt-4 text-sm font-medium text-accent/90">{service.highlight}</p>
                    </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
