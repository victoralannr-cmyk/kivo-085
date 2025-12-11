import { Button } from "@/components/ui/button";
import Image from "next/image";

const partners = [
    { name: "Partner 1", logo: "https://tailwindui.com/img/logos/158x48/tuple-logo-white.svg" },
    { name: "Partner 2", logo: "https://tailwindui.com/img/logos/158x48/savvycal-logo-white.svg" },
    { name: "Partner 3", logo: "https://tailwindui.com/img/logos/158x48/statamic-logo-white.svg" },
];

const HeroSection = () => {
  return (
    <section id="home" className="py-24 sm:py-32 lg:py-40">
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
        </div>

        <div className="mt-20">
          <p className="text-sm font-semibold text-muted-foreground tracking-wider">
            CONFIADO PELAS PRINCIPAIS MARCAS
          </p>
          <div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-3 items-center">
            {partners.map((partner) => (
              <div key={partner.name} className="col-span-1 flex justify-center">
                <Image
                  className="h-10 opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                  src={partner.logo}
                  alt={partner.name}
                  width={158}
                  height={48}
                  unoptimized
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
