'use client';

import Image from 'next/image';
import { useMemo } from 'react';

type FloatingLogosProps = {
  count?: number;
}

const FloatingLogos = ({ count = 30 }: FloatingLogosProps) => {
  const logos = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => {
      // Determine if the logo should be on the left or right side, avoiding the center
      const isLeftSide = Math.random() > 0.5;
      const horizontalPosition = isLeftSide 
        ? Math.random() * 30 // 0% to 30% from the left
        : 70 + Math.random() * 30; // 70% to 100% from the left

      // Keep vertical position somewhat random but concentrated in the upper-mid part of the screen
      const verticalPosition = 15 + Math.random() * 70; // 15% to 85% from the top

      return {
        id: i,
        src: 'https://i.postimg.cc/T1HKtvtD/Captura-de-tela-2025-11-27-221300-removebg-preview.png',
        top: `${verticalPosition}%`,
        left: `${horizontalPosition}%`,
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
            transform: 'translate(-50%, -50%)', // Center the image on its coordinates
          }}
        />
      ))}
    </div>
  );
};

export default FloatingLogos;
