'use client';

import Image from 'next/image';
import { useMemo } from 'react';

const FloatingLogos = () => {
  const logos = useMemo(() => {
    const numLogos = 15;
    return Array.from({ length: numLogos }).map((_, i) => {
      // Create a more structured distribution
      const angle = (i / numLogos) * 2 * Math.PI;
      const radius = (Math.random() * 0.4 + 0.1) * 100; // 10% to 50% from center
      
      // Convert polar coordinates to cartesian, centered at (50, 50)
      // and allow them to go slightly off-screen
      const left = 50 + radius * Math.cos(angle) + (Math.random() - 0.5) * 30;
      const top = 50 + radius * Math.sin(angle) * 2 + (Math.random() - 0.5) * 30; // Stretch vertically

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
            transform: 'translate(-50%, -50%)', // Center the image on its coordinates
          }}
        />
      ))}
    </div>
  );
};

export default FloatingLogos;
