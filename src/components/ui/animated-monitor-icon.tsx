'use client';

import { cn } from '@/lib/utils';
import { useEffect, useRef, useState } from 'react';

const AnimatedMonitorIcon = ({ className }: { className?: string }) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        'relative h-[88px] w-[100px] bg-[#1e1e1e] rounded-lg border border-border/20 shadow-lg flex flex-col items-center justify-center p-2 overflow-hidden',
        className
      )}
    >
      {/* Screen content */}
      <div className="w-full h-full relative">
        <span
          className={cn(
            'absolute top-1/2 -translate-y-1/2 block h-1.5 w-10 rounded-full bg-primary/70',
            isIntersecting ? 'animate-code-line' : 'opacity-0'
          )}
        ></span>
        <span className="absolute top-1/2 right-4 -translate-y-1/2 h-4 w-1 bg-primary/70 animate-blink"></span>
      </div>

      {/* Monitor base */}
      <div className="w-1/3 h-2 bg-border/20 rounded-b-sm"></div>
    </div>
  );
};

export default AnimatedMonitorIcon;
