import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, Video } from "lucide-react";
import AnimatedUsersIcon from "../ui/animated-users-icon";
import { cn } from "@/lib/utils";
import AnimateOnScroll from "../ui/animate-on-scroll";
import AnimatedCodeBlock from "../ui/animated-code-block";

const services = [
  {
    icon: <AnimatedUsersIcon className="h-10 w-10 text-primary/80" />,
    title: "Social Media",
    description: "Construímos uma presença digital forte e profissional para sua marca. Estratégia, conteúdo e imagem que geram autoridade e desejo.",
  },
  {
    icon: (
        <DollarSign className="h-10 w-10 animate-spin-3d text-primary/80" style={{ animationDelay: '0.2s' }} />
    ),
    title: "Tráfego Pago",
    description: "Impulsionamos campanhas estratégicas. Levamos o cliente ideal para a sua vitrine. Google e Meta Ads.",
  },
  {
    icon: <AnimatedCodeBlock />,
    title: "Sites Profissional",
    description: "Damos vida à sua marca com sites que combinam estética, movimento e funcionalidade. Uma vitrine digital única, feita para impressionar e converter.",
  },
  {
    icon: <Video className={cn("h-10 w-10 text-primary/80 relative overflow-hidden btn-shine")} style={{ animationDelay: '0.6s' }} />,
    title: "Criação de conteúdo Criativo",
    description: "Conteúdos criativos que realmente vendem vídeos, designs e textos feitos para aumentar o desempenho e destacar sua marca.",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-24 sm:py-32">
      <div className="container">
        <AnimateOnScroll>
          <div className="text-center">
            <h2 className="font-headline text-3xl font-bold sm:text-4xl">Nossos Serviços</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Entenda como iremos impulsionar sua empresa através da internet
            </p>
          </div>
        </AnimateOnScroll>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <AnimateOnScroll key={service.title} delay={100 + index * 100}>
              <Card className="flex flex-col bg-card/20 border-border/10 hover:border-primary/50 hover:bg-card/30 transition-all duration-300 transform hover:-translate-y-1 rounded-2xl h-full">
                <CardHeader className="items-center text-center">
                  {service.icon && (
                    <div className="flex items-center justify-center h-[88px]">
                      {service.icon}
                    </div>
                  )}
                  <CardTitle className="mt-4">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col text-center">
                  <p className="text-muted-foreground flex-grow">{service.description}</p>
                </CardContent>
              </Card>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
