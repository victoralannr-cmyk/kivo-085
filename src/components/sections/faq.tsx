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
      "Utilizamos modelos preditivos e estratégias personalizadas para aumentar sua visibilidade, atrair clientes qualificados e posicionar sua marca como líder de mercado.",
  },
  {
    question: "A Kivo faz um plano personalizado para minha empresa?",
    answer:
      "Sim, cada plano é cuidadosamente elaborado para atender às necessidades e objetivos específicos do seu negócio. Analisamos seu mercado e público para criar a estratégia perfeita.",
  },
  {
    question: "Como posso saber qual é o plano ideal para minha empresa?",
    answer:
      "Agende uma demonstração gratuita! Nossos especialistas irão avaliar seu negócio e recomendar o plano que trará os melhores resultados para você.",
  },
  {
    question: "Como faço para começar a trabalhar com a Kivo?",
    answer:
      "É simples! Clique no botão 'Fale com um especialista' ou entre em contato pelo WhatsApp. Estamos prontos para iniciar essa parceria de sucesso.",
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
