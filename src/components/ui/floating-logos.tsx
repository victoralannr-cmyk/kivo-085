'use client';

import Image from 'next/image';
import { useMemo } from 'react';

const FloatingLogos = () => {
  const logos = useMemo(() => {
    return Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      src: 'https://i.postimg.cc/T1HKtvtD/Captura-de-tela-2025-11-27-221300-removebg-preview.png',
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      animationDuration: `${Math.random() * 5 + 5}s`, // 5s to 10s
      animationDelay: `${Math.random() * 5}s`,
    }));
  }, []);

  return (
    <div className="absolute inset-0 -z-20 h-full w-full overflow-hidden">
      {logos.map((logo) => (
        <Image
          key={logo.id}
          src={logo.src}
          alt="Floating logo"
          width={60}
          height={60}
          className="animate-float absolute opacity-5"
          style={{
            top: logo.top,
            left: logo.left,
            animationDuration: logo.animationDuration,
            animationDelay: logo.animationDelay,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingLogos;
