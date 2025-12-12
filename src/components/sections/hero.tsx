import { Button } from "@/components/ui/button";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section id="home" className="relative pt-64 pb-24 sm:pt-72 sm:pb-32 lg:pt-80 lg:pb-40 overflow-hidden">
      <div className="absolute top-24 left-0 w-full h-full aurora-background -z-10"></div>
      
      <div className="absolute inset-0 -z-20 h-full w-full grid-bg"></div>
      <div className="absolute inset-0 -z-10 h-full w-full bg-gradient-to-b from-transparent via-transparent to-background"></div>
      <div className="container relative z-10 text-center">
        <h1 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
          <span className="text-wavy-gradient">Impulsionamos</span> sua empresa{' '}
          <span className="text-wavy-gradient">para</span> o topo com modelos{' '}
          <span className="text-wavy-gradient">preditivos de conversão</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-foreground/80">
          e mantemos você dominante, relevante e sempre{' '}
          <span className="text-wavy-gradient font-semibold">
            acima da concorrência.
          </span>
        </p>
        <div className="mt-10">
          <Button asChild size="lg" className="rounded-full bg-gradient-to-r from-[#1A237E] via-[#4285F4] to-[#1A237E] bg-[length:200%_auto] text-white transition-all duration-300 hover:brightness-110 animate-pulse-light">
            <Link href="#contato">Agendar uma Demonstração</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
