import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import Link from "next/link";
import { WhatsAppIcon } from "@/components/ui/icons";
import FloatingLogos from "@/components/ui/floating-logos";

const HeroSection = () => {
  return (
    <section id="home" className="relative pt-64 pb-24 sm:pt-72 sm:pb-32 lg:pt-80 lg:pb-40 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1/2 -z-10 bg-[radial-gradient(ellipse_50%_50%_at_50%_-20%,rgba(38,80,186,0.2),rgba(255,255,255,0))]"></div>
      <FloatingLogos />
      <div className="absolute inset-0 -z-10 h-full w-full grid-bg"></div>
      <div className="absolute inset-0 -z-10 h-full w-full bg-gradient-to-b from-background via-transparent to-background"></div>
      <div className="container text-center">
        <h1 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
          <span className="text-wavy-gradient">
            Impulsionamos
          </span>{' '}
          sua empresa{' '}
          <span className="text-wavy-gradient">
            para
          </span>{' '}
          o topo com modelos{' '}
          <span className="text-wavy-gradient">
            preditivos de conversão
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-foreground/80">
          e mantemos você dominante, relevante e sempre{' '}
          <span className="text-wavy-gradient font-semibold">
            acima da concorrência.
          </span>
        </p>
        <div className="mt-10">
          <Button size="lg" className="rounded-full bg-gradient-to-r from-blue-900 via-blue-700 to-blue-900 bg-[length:200%_auto] text-white transition-all duration-300 hover:brightness-110">
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
                  <Button size="lg" className="rounded-full text-white px-10 py-6 text-lg animate-gradient-flow" style={{backgroundColor: '#0a5c0a'}}>
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
