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
    <div ref={ref} className={cn("relative h-[88px] w-[100px] group", className)} style={{ perspective: '800px' }}>
      <div className="relative w-full h-full transition-transform duration-500 group-hover:rotate-y-0" style={{ transformStyle: 'preserve-3d', transform: 'rotateY(-25deg) rotateX(10deg)' }}>
        {/* Monitor Face */}
        <div
          className={cn(
            'absolute w-full h-full bg-[#1e1e1e] rounded-lg border border-border/20 shadow-lg flex flex-col items-center justify-center p-2 overflow-hidden'
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
        </div>
        {/* Monitor Side */}
        <div className="absolute w-[8px] h-full top-0 left-0 bg-[#111] rounded-l-lg" style={{ transform: 'rotateY(-90deg) translateZ(4px)' }}></div>
        
        {/* Monitor base */}
        <div className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-1/2 h-3 bg-border/20 rounded-b-sm" style={{transform: 'translateZ(-1px)'}}></div>
      </div>
    </div>
  );
};

export default AnimatedMonitorIcon;
