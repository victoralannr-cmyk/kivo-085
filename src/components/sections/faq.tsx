import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const faqItems = [
  {
    question: "Quais serviços a Kivo oferece?",
    answer:
      "A Kivo oferece soluções completas para o crescimento digital de marcas e pessoas. Nossos serviços incluem criação de identidade visual, estratégias de tráfego pago, gestão de redes sociais, criação de sites personalizados, automação de marketing, e campanhas de branding. Trabalhamos com empresas que buscam resultados reais, inovação e um posicionamento digital sólido.",
  },
  {
    question: "Como a Kivo ajuda minha empresa a crescer digitalmente?",
    answer:
      "A Kivo orquestra o crescimento digital da sua marca por meio da integração de design, tecnologia e performance. Criamos estratégias personalizadas que posicionam sua marca de forma única e eficaz, utilizando campanhas de tráfego pago, automação e otimização contínua para gerar resultados reais e mensuráveis.",
  },
  {
    question: "A Kivo faz um plano personalizado para minha empresa?",
    answer:
      "Sim, na Kivo entendemos que cada negócio é único. Por isso, criamos estratégias e planos personalizados baseados nas necessidades e objetivos específicos de cada cliente. Seja para aumentar a visibilidade online, melhorar as vendas ou construir uma presença digital de longo prazo, temos a solução ideal para você.",
  },
  {
    question: "Como posso saber qual é o plano ideal para minha empresa?",
    answer:
      "Nossa equipe está disponível para realizar uma consultoria personalizada e entender as necessidades da sua empresa. A partir daí, sugerimos o plano mais adequado — seja para crescimento rápido, posicionamento estratégico ou desenvolvimento digital contínuo.",
  },
  {
    question: "Como faço para começar a trabalhar com a Kivo?",
    answer:
      "É simples! Basta entrar em contato conosco para agendar uma conversa. Vamos entender sua necessidade e criar um plano estratégico alinhado aos seus objetivos. A Kivo está pronta para orquestrar o crescimento da sua marca no digital.",
  },
];

const FaqSection = () => {
  return (
    <section id="faq" className="py-24 sm:py-32">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-16">
            <div className="mb-8">
                <Button size="lg">Fale com um especialista</Button>
            </div>
          <h2 className="font-headline text-3xl font-bold sm:text-4xl">Perguntas Frequentes</h2>
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
