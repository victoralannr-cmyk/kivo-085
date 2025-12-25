import { Button } from "@/components/ui/button";
import Link from "next/link";
import AnimateOnScroll from "../ui/animate-on-scroll";

const HeroSection = () => {
  const titleWords = [
    { text: "Impulsionamos", isGradient: true, delay: 100 },
    { text: "sua", isGradient: false, delay: 300 },
    { text: "empresa", isGradient: false, delay: 300 },
    { text: "para", isGradient: true, delay: 400 },
    { text: "o", isGradient: false, delay: 500 },
    { text: "topo", isGradient: false, delay: 500 },
    { text: "com", isGradient: false, delay: 600 },
    { text: "modelos", isGradient: false, delay: 600 },
    { text: "preditivos", isGradient: true, delay: 700 },
    { text: "de", isGradient: true, delay: 800 },
    { text: "conversão", isGradient: true, delay: 900 },
  ];

  return (
    <section id="home" className="relative pt-40 pb-24 sm:pt-48 sm:pb-32 lg:pt-56 lg:pb-40">
      <div className="absolute top-0 left-0 w-full h-full aurora-background -z-10"></div>
      
      <div className="absolute inset-0 -z-20 h-full w-full grid-bg"></div>
      <div className="absolute inset-0 -z-10 h-full w-full bg-gradient-to-b from-transparent via-transparent to-background"></div>
      <div className="container relative z-10 text-center">
        
          <h1 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            {titleWords.map((word, index) => (
              <AnimateOnScroll
                key={index}
                delay={word.delay}
                className="inline-block mr-4"
                animationClassName="animate-fade-in-down"
              >
                <span className={word.isGradient ? "text-wavy-gradient" : ""}>
                  {word.text}
                </span>
              </AnimateOnScroll>
            ))}
          </h1>
        
        <AnimateOnScroll delay={1000} animationClassName="animate-fade-in-down">
          <p className="mx-auto mt-6 max-w-2xl text-lg text-foreground/80">
            e mantemos você dominante, relevante e sempre{' '}
            <span className="text-wavy-gradient font-semibold">
              acima da concorrência.
            </span>
          </p>
        </AnimateOnScroll>
        <AnimateOnScroll delay={1100} animationClassName="animate-fade-in-down">
          <div className="mt-10">
            <Button asChild size="lg" className="rounded-full bg-gradient-to-r from-[#1A237E] via-[#4285F4] to-[#1A237E] bg-[length:200%_auto] text-white transition-all duration-300 hover:brightness-110 animate-pulse-light">
              <Link href="#contato">Agendar uma Demonstração</Link>
            </Button>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default HeroSection;
