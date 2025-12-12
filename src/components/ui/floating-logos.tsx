'use client';

import Image from 'next/image';
import { useMemo } from 'react';

type FloatingLogosProps = {
  count?: number;
}

const FloatingLogos = ({ count = 30 }: FloatingLogosProps) => {
  const logos = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => {
      // Create a more structured distribution
      const angle = (i / count) * 2 * Math.PI + Math.random() * 0.5; // Add some randomness to angle
      const radius = (Math.random() * 0.8 + 0.1) * 100; // 10% to 90% from center to spread them more
      
      // Convert polar coordinates to cartesian, centered at (50, 50)
      // and allow them to go slightly off-screen
      const left = 50 + radius * Math.cos(angle);
      // Adjust top position to be lower on the screen, avoiding the header
      const top = 20 + radius * Math.sin(angle) * 0.8; 

      return {
        id: i,
        src: 'https://i.postimg.cc/T1HKtvtD/Captura-de-tela-2025-11-27-221300-removebg-preview.png',
        top: `${top}%`,
        left: `${left}%`,
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
