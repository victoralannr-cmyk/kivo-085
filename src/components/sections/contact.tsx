import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contato" className="py-24 sm:py-32 bg-card/50 border-y border-border/40">
      <div className="container text-center">
        <h2 className="font-headline text-3xl font-bold sm:text-4xl">Vamos conversar?</h2>
        <p className="mt-4 max-w-xl mx-auto text-lg text-muted-foreground">
          Entre em contato para agendar uma demonstração e descobrir como podemos transformar seu negócio.
        </p>
        <div className="mt-10">
          <Button
            size="lg"
            className="h-14 px-8 text-lg font-bold bg-gradient-to-r from-cyan-500 to-green-500 text-white hover:from-cyan-600 hover:to-green-600 transition-all duration-300 transform hover:scale-105"
          >
            WhatsApp
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
