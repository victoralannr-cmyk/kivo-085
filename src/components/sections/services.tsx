import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, DollarSign, Code, Video } from "lucide-react";

const MetallicIcon = ({ children, id }: { children: React.ReactNode; id: string }) => (
  <span className="relative h-10 w-10">
    <svg width="0" height="0" className="absolute">
      <defs>
        <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: 'hsl(210, 14%, 89%)', stopOpacity: 1 }} />
          <stop offset="50%" style={{ stopColor: 'hsl(215, 14%, 50%)', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: 'hsl(210, 14%, 83%)', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
    </svg>
    <div className="h-10 w-10" style={{ stroke: `url(#${id})` }}>
      {children}
    </div>
  </span>
);

const services = [
  {
    icon: (
      <MetallicIcon id="social-icon-gradient">
        <Users className="h-10 w-10 animate-float" style={{ animationDelay: '0s' }} />
      </MetallicIcon>
    ),
    title: "Social Media",
    description: "Construímos uma presença digital forte e profissional para sua marca. Estratégia, conteúdo e imagem que geram autoridade e desejo.",
  },
  {
    icon: (
      <MetallicIcon id="traffic-icon-gradient">
        <DollarSign className="h-10 w-10 animate-spin-3d" style={{ animationDelay: '0.2s' }} />
      </MetallicIcon>
    ),
    title: "Tráfego Pago",
    description: "Impulsionamos campanhas estratégicas. Levamos o cliente ideal para a sua vitrine. Google e Meta Ads.",
  },
  {
    icon: (
      <MetallicIcon id="sites-icon-gradient">
        <Code className="h-10 w-10 animate-float" style={{ animationDelay: '0.4s' }} />
      </MetallicIcon>
    ),
    title: "Criação de Sites",
    description: "Damos vida à sua marca com sites que combinam estética, movimento e funcionalidade. Uma vitrine digital única, feita para impressionar e converter.",
  },
  {
    icon: (
      <MetallicIcon id="creative-icon-gradient">
        <Video className="h-10 w-10 animate-camera-flash" style={{ animationDelay: '0.6s' }} />
      </MetallicIcon>
    ),
    title: "Setor Criativo",
    description: "Conteúdos criativos que realmente vendem vídeos, designs e textos feitos para aumentar o desempenho e destacar sua marca.",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-24 sm:py-32">
      <div className="container">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold sm:text-4xl">Nossos Serviços</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Entenda como iremos impulsionar sua empresa através da internet
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Card key={service.title} className="flex flex-col bg-card/20 border-border/10 hover:border-primary/50 hover:bg-card/30 transition-all duration-300 transform hover:-translate-y-1 rounded-2xl">
              <CardHeader className="items-center text-center">
                {service.icon}
                <CardTitle className="mt-4">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col text-center">
                <p className="text-muted-foreground flex-grow">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
