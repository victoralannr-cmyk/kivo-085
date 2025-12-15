import { Button } from "@/components/ui/button";
import Link from "next/link";
import AnimateOnScroll from "../ui/animate-on-scroll";

const HeroSection = () => {
  const titleWords = [
    { text: "Impulsionamos", isGradient: true },
    { text: "sua", isGradient: false },
    { text: "empresa", isGradient: false },
    { text: "para", isGradient: true },
    { text: "o", isGradient: false },
    { text: "topo", isGradient: false },
    { text: "com", isGradient: false },
    { text: "modelos", isGradient: false },
    { text: "preditivos", isGradient: true },
    { text: "de", isGradient: true },
    { text: "conversão", isGradient: true },
  ];

  const animationDelays = titleWords.map((_, index) => index * 100);

  return (
    <section id="home" className="relative pt-80 pb-24 sm:pt-80 sm:pb-32 lg:pt-96 lg:pb-40">
      <div className="absolute top-0 left-0 w-full h-full aurora-background -z-10"></div>
      
      <div className="absolute inset-0 -z-20 h-full w-full grid-bg"></div>
      <div className="absolute inset-0 -z-10 h-full w-full bg-gradient-to-b from-transparent via-transparent to-background"></div>
      <div className="container relative z-10 text-center">
        <h1 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
          {titleWords.map((word, index) => (
            <AnimateOnScroll
              key={index}
              delay={animationDelays[index]}
              className="inline-block"
            >
              <span className={word.isGradient ? "text-wavy-gradient" : ""}>
                {word.text}
              </span>{' '}
            </AnimateOnScroll>
          ))}
        </h1>
        <AnimateOnScroll delay={titleWords.length * 100 + 200}>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-foreground/80">
            e mantemos você dominante, relevante e sempre{' '}
            <span className="text-wavy-gradient font-semibold">
              acima da concorrência.
            </span>
          </p>
        </AnimateOnScroll>
        <AnimateOnScroll delay={titleWords.length * 100 + 400}>
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
