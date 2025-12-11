import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import Link from "next/link";

const ContactSection = () => {
  return (
    <section id="contato" className="py-12 sm:py-16 bg-black">
      <div className="container text-center">
        <h2 className="font-headline text-3xl font-bold sm:text-4xl">Vamos conversar?</h2>
        <p className="mt-4 max-w-xl mx-auto text-lg text-muted-foreground">
          Entre em contato para agendar uma demonstração.
        </p>
        <div className="flex justify-center my-8">
          <ArrowDown width={59.21} height={120} className="text-white animate-bounce" />
        </div>
        <div className="mt-10">
          <Button asChild size="lg" className="rounded-full bg-gradient-to-r from-blue-900 via-blue-700 to-blue-900 bg-[length:200%_auto] text-white transition-all duration-300 hover:brightness-110 btn-shine animate-gradient-flow" style={{animation: 'pulse-light 3s infinite'}}>
            <Link href="#">Fale com um especialista</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
