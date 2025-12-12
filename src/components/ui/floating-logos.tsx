'use client';

import Image from 'next/image';
import { useMemo } from 'react';

type FloatingLogosProps = {
  count?: number;
}

const FloatingLogos = ({ count = 30 }: FloatingLogosProps) => {
  const logos = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => {
      return {
        id: i,
        src: 'https://i.postimg.cc/T1HKtvtD/Captura-de-tela-2025-11-27-221300-removebg-preview.png',
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        animationDuration: `${Math.random() * 8 + 7}s`,
        animationDelay: `${Math.random() * 8}s`,
        size: Math.random() * 40 + 40,
      };
    });
  }, [count]);

  return (
    <div className="absolute inset-0 -z-10 h-full w-full overflow-hidden">
      {logos.map((logo) => (
        <Image
          key={logo.id}
          src={logo.src}
          alt="Floating logo"
          width={logo.size}
          height={logo.size}
          className="animate-float absolute opacity-[0.15]"
          style={{
            top: logo.top,
            left: logo.left,
            animationDuration: logo.animationDuration,
            animationDelay: logo.animationDelay,
            transform: 'translate(-50%, -50%)',
          }}
        />
      ))}
    </div>
  );
};

export default FloatingLogos;
