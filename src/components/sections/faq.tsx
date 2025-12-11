import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import AnimatedCounter from "@/components/ui/animated-counter";
import { ArrowDown } from "lucide-react";

const faqItems = [
  {
    question: "1. Quais serviços a Kivo oferece?",
    answer:
      "A Kivo oferece soluções completas para o crescimento digital de marcas e pessoas. Nossos serviços incluem criação de identidade visual, estratégias de tráfego pago, gestão de redes sociais, criação de sites personalizados, automação de marketing, e campanhas de branding. Trabalhamos com empresas que buscam resultados reais, inovação e um posicionamento digital sólido.",
  },
  {
    question: "2. Como a Kivo ajuda minha empresa a crescer digitalmente?",
    answer:
      "A Kivo orquestra o crescimento digital da sua marca por meio da integração de design, tecnologia e performance. Criamos estratégias personalizadas que posicionam sua marca de forma única e eficaz, utilizando campanhas de tráfego pago, automação e otimização contínua para gerar resultados reais e mensuráveis.",
  },
  {
    question: "3. A Kivo faz um plano personalizado para minha empresa?",
    answer:
      "Sim, na Kivo entendemos que cada negócio é único. Por isso, criamos estratégias e planos personalizados baseados nas necessidades e objetivos específicos de cada cliente. Seja para aumentar a visibilidade online, melhorar as vendas ou construir uma presença digital de longo prazo, temos a solução ideal para você.",
  },
  {
    question: "4. Como posso saber qual é o plano ideal para minha empresa?",
    answer:
      "Nossa equipe está disponível para realizar uma consultoria personalizada e entender as necessidades da sua empresa. A partir daí, sugerimos o plano mais adequado seja para crescimento rápido, posicionamento estratégico ou desenvolvimento digital contínuo.",
  },
  {
    question: "5. Como faço para começar a trabalhar com a Kivo?",
    answer:
      "É simples! Basta entrar em contato conosco para agendar uma conversa. Vamos entender sua necessidade e criar um plano estratégico alinhado aos seus objetivos. A Kivo está pronta para orquestrar o crescimento da sua marca no digital.",
  },
];

const stats = [
    { value: 50, label: 'Projetos Executados', prefix: '+' },
    { value: 200, label: 'Estratégias de Crescimento', prefix: '+' },
    { value: 100, label: 'Marcas Elevadas', prefix: '+' },
];

const FaqSection = () => {
  return (
    <section id="faq" className="py-24 sm:py-32 bg-background">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="mb-16">
            <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-3 md:gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col items-center">
                  <div className="font-headline text-5xl font-bold flex">
                    <span className="text-wavy-gradient">
                      {stat.prefix}
                      <AnimatedCounter to={stat.value} />
                    </span>
                  </div>
                  <p className="mt-2 text-lg text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <p className="mx-auto max-w-3xl font-headline text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl mb-4">
            Tráfego{' '}
            <span className="text-wavy-gradient">
              colocam o seu negócio à frente dos
            </span>{' '}
            olhares certos.{' '}
            O seu posicionamento{' '}
            <span className="text-wavy-gradient">
              é a sua vitrine digital!
            </span>
          </p>

          <div className="flex flex-col items-center gap-4 my-8">
            <ArrowDown className="h-16 w-16 text-white animate-bounce" />
            <div className="bg-card/30 border border-border/20 rounded-lg px-6 py-3">
              <p className="font-semibold text-foreground">Estratégias de Vendas</p>
            </div>
          </div>
          
          <div className="flex flex-col items-center gap-6 mt-12">
            <ArrowDown className="h-16 w-16 animate-bounce text-white" />
            <p className="max-w-3xl text-lg text-muted-foreground">
              Atraímos atenção qualificada, geramos conversões reais e ampliamos suas visualizações. Aqui, sua marca deixa de ser invisível. Estratégias precisas em Google e Facebook Ads para resultados que realmente aparecem.
            </p>
          </div>
          
          <h2 className="font-headline text-3xl font-bold sm:text-4xl mt-16">Perguntas Frequentes</h2>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem value={`item-${index + 1}`} key={index}>
              <AccordionTrigger className="text-left text-lg hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FaqSection;
