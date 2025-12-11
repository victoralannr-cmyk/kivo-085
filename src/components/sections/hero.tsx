import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import Link from "next/link";
import { WhatsAppIcon } from "@/components/ui/icons";

const HeroSection = () => {
  return (
    <section id="home" className="relative py-24 sm:py-32 lg:py-40">
      <div className="absolute inset-0 -z-10 h-full w-full grid-bg"></div>
      <div className="absolute inset-0 -z-10 h-full w-full bg-gradient-to-b from-background via-transparent to-background"></div>
      <div className="container text-center">
        <h1 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
          <span className="animate-gradient-flow bg-gradient-to-r from-blue-900 via-blue-700 to-blue-900 bg-[length:200%_auto] bg-clip-text text-transparent">
            Impulsionamos
          </span>{' '}
          sua empresa{' '}
          <span className="animate-gradient-flow bg-gradient-to-r from-blue-900 via-blue-700 to-blue-900 bg-[length:200%_auto] bg-clip-text text-transparent">
            para
          </span>{' '}
          o topo com modelos{' '}
          <span className="animate-gradient-flow bg-gradient-to-r from-blue-900 via-blue-700 to-blue-900 bg-[length:200%_auto] bg-clip-text text-transparent">
            preditivos de conversão
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-foreground/80">
          e mantemos você dominante, relevante e sempre{' '}
          <span className="animate-gradient-flow bg-gradient-to-r from-blue-900 via-blue-700 to-blue-900 bg-[length:200%_auto] bg-clip-text font-semibold text-transparent">
            acima da concorrência.
          </span>
        </p>
        <div className="mt-10">
          <Button size="lg" className="rounded-full bg-gradient-to-r from-blue-900 via-blue-700 to-blue-900 text-white animate-[pulse-slow_20s_ease-in-out_infinite] hover:brightness-110 transition-all duration-300">
            Agendar uma Demonstração
          </Button>
          <div className="mt-10">
            <h2 className="font-headline text-3xl font-bold sm:text-4xl">Vamos conversar?</h2>
            <p className="mt-4 max-w-xl mx-auto text-lg text-muted-foreground">
              Entre em contato para agendar uma demonstração.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-6">
                <ArrowDown width={59.21} height={120} className="text-white animate-bounce" />
                <Link href="https://wa.me/" target="_blank">
                  <Button size="lg" className="rounded-full text-white px-10 py-6 text-lg" style={{backgroundColor: '#0a5c0a'}}>
                    <WhatsAppIcon className="mr-2 h-6 w-6" />
                    Whatsapp
                  </Button>
                </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
