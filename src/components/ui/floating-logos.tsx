'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

type FloatingLogosProps = {
  count?: number;
};

interface Logo {
  id: number;
  src: string;
  top: string;
  left: string;
  animationDuration: string;
  animationDelay: string;
  size: number;
}

const FloatingLogos = ({ count = 30 }: FloatingLogosProps) => {
  const [logos, setLogos] = useState<Logo[]>([]);

  useEffect(() => {
    const generateLogos = () => {
      return Array.from({ length: count }).map((_, i) => {
        const size = Math.random() * 40 + 20; // 20px to 60px
        const side = Math.random() < 0.5 ? 'left' : 'right';
        return {
          id: i,
          src: 'https://i.postimg.cc/K8MgDrs5/Captura-de-tela-2025-11-27-221300-removebg-preview.png',
          top: `${Math.random() * 100}%`,
          left: side === 'left' ? `${Math.random() * 30}%` : `${70 + Math.random() * 30}%`,
          animationDuration: `${Math.random() * 10 + 10}s`,
          animationDelay: `${Math.random() * 10}s`,
          size: size,
        };
      });
    };
    setLogos(generateLogos());
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
          priority
        />
      ))}
    </div>
  );
};

export default FloatingLogos;
