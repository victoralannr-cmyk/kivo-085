import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="py-24 sm:py-32 lg:py-40">
      <div className="container text-center">
        <h1 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
          <span className="animate-gradient-flow bg-gradient-to-r from-[#101729] via-[#19233A] to-[#101729] bg-[length:200%_auto] bg-clip-text text-transparent">
            Impulsionamos
          </span>{' '}
          sua empresa{' '}
          <span className="animate-gradient-flow bg-gradient-to-r from-[#101729] via-[#19233A] to-[#101729] bg-[length:200%_auto] bg-clip-text text-transparent">
            para
          </span>{' '}
          o topo com modelos{' '}
          <span className="animate-gradient-flow bg-gradient-to-r from-[#101729] via-[#19233A] to-[#101729] bg-[length:200%_auto] bg-clip-text text-transparent">
            preditivos de conversão
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-foreground/80">
          e mantemos você dominante, relevante e sempre{' '}
          <span className="animate-gradient-flow bg-gradient-to-r from-[#101729] via-[#19233A] to-[#101729] bg-[length:200%_auto] bg-clip-text font-semibold text-transparent">
            acima da concorrência.
          </span>
        </p>
        <div className="mt-10">
          <Button size="lg" className="w-[293px] h-[43px] bg-gradient-to-r from-[#101729] via-[#19233A] to-[#101729] bg-[length:200%_auto] text-primary-foreground transition-transform duration-300 animate-pulse-glow hover:scale-105">
            WhatsApp
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
