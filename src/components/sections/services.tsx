import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, DollarSign, Code2, Video, ArrowDown } from "lucide-react";

const services = [
  {
    icon: <Users className="h-10 w-10 text-primary animate-float" style={{ animationDelay: '0s' }} />,
    title: "Social Media",
    description: "Construímos uma presença digital forte e profissional para sua marca. Estratégia, conteúdo e imagem que geram autoridade e desejo.",
  },
  {
    icon: <DollarSign className="h-10 w-10 text-primary animate-float" style={{ animationDelay: '0.2s' }} />,
    title: "Tráfego Pago",
    description: "Impulsionamos campanhas estratégicas. Levamos o cliente ideal para a sua vitrine. Google e Meta Ads.",
  },
  {
    icon: <Code2 className="h-10 w-10 text-primary animate-float" style={{ animationDelay: '0.4s' }} />,
    title: "Criação de Sites",
    description: "Damos vida à sua marca com sites que combinam estética, movimento e funcionalidade. Uma vitrine digital única, feita para impressionar e converter.",
  },
  {
    icon: <Video className="h-10 w-10 text-primary animate-float" style={{ animationDelay: '0.6s' }} />,
    title: "Setor Criativo",
    description: "Conteúdos criativos que realmente vendem vídeos, designs e textos feitos para aumentar o desempenho e destacar sua marca.",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-24 sm:py-32 bg-black">
      <div className="container">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold sm:text-4xl">Estratégias de Vendas</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Entenda como iremos impulsionar sua empresa através da internet
          </p>
          <div className="flex justify-center mt-8 mb-12">
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
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
