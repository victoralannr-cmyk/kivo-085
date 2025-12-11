'use client';

import Image from 'next/image';
import { useMemo } from 'react';

const FloatingLogos = () => {
  const logos = useMemo(() => {
    return Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      src: 'https://i.postimg.cc/T1HKtvtD/Captura-de-tela-2025-11-27-221300-removebg-preview.png',
      // Adjust positioning to cover a wider area, even outside the initial viewport
      top: `${Math.random() * 120 - 10}%`, // from -10% to 110%
      left: `${Math.random() * 120 - 10}%`,// from -10% to 110%
      animationDuration: `${Math.random() * 8 + 7}s`, // 7s to 15s for slower, more graceful movement
      animationDelay: `${Math.random() * 8}s`,
      size: Math.random() * 40 + 40, // random size between 40 and 80px
    }));
  }, []);

  return (
    <div className="absolute inset-0 -z-20 h-full w-full overflow-hidden">
      {logos.map((logo) => (
        <Image
          key={logo.id}
          src={logo.src}
          alt="Floating logo"
          width={logo.size}
          height={logo.size}
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
