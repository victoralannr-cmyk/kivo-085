
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, DollarSign, Code2, CheckCircle, ArrowDown } from "lucide-react";

const CustomClapperboardIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="40" 
    height="40" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="hsl(var(--primary))" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className="h-10 w-10 text-primary"
  >
    <g className="animate-clapper-board origin-bottom-left">
      <path d="M20.2 6 3.8 6" />
      <path d="M6.8 12 3.8 6" />
    </g>
    <path d="m20.2 6-3 10.7L3.8 6" />
    <path d="M20.2 6h-3.4"/>
    <path d="m16.8 16.7 3.4-10.7" />
    <path d="m6.8 12 10 4.7" />
  </svg>
);


const services = [
  {
    icon: <Users className="h-10 w-10 text-primary animate-float" />,
    title: "Social Media",
    description: "Construímos uma presença digital forte e profissional para sua marca. Estratégia, conteúdo e imagem que geram autoridade e desejo.",
  },
  {
    icon: <DollarSign className="h-10 w-10 text-primary animate-spin-3d" />,
    title: "Tráfego Pago",
    description: "Impulsionamos campanhas estratégicas. Levamos o cliente ideal para a sua vitrine. Google e Meta Ads.",
  },
  {
    icon: <Code2 className="h-10 w-10 text-primary animate-code-pulse" />,
    title: "Criação de Sites",
    description: "Damos vida à sua marca com sites que combinam estética, movimento e funcionalidade. Uma vitrine digital única, feita para impressionar e converter.",
  },
  {
    icon: <CustomClapperboardIcon />,
    title: "Setor Criativo",
    description: "Conteúdos criativos que realmente vendem vídeos, designs e textos feitos para aumentar o desempenho e destacar sua marca.",
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
          <div className="mt-8 flex justify-center">
            <ArrowDown width={59.21} height={120} className="text-white animate-bounce" />
          </div>
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
