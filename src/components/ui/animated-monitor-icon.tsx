'use client';

import { cn } from '@/lib/utils';
import { useEffect, useRef, useState } from 'react';

const AnimatedMonitorIcon = ({ className }: { className?: string }) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [key, setKey] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          setKey((prev) => prev + 1);
        } else {
          setIsIntersecting(false);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    const handleVisibilityChange = () => {
      if (!document.hidden && isIntersecting) {
        setKey((prev) => prev + 1);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [isIntersecting]);

  return (
    <div ref={ref} className={cn("relative h-[88px] w-full group", className)} style={{ perspective: '800px' }}>
      <div className="relative w-full h-full transition-transform duration-500 group-hover:rotate-y-0" style={{ transformStyle: 'preserve-3d', transform: 'rotateY(-25deg) rotateX(10deg)' }}>
        {/* Monitor Face */}
        <div
          key={key}
          className={cn(
            'absolute w-full h-full bg-[#111] rounded-lg border border-border/20 shadow-lg flex flex-col items-start justify-center p-3 overflow-hidden'
          )}
        >
          {/* Screen content */}
          <div className="w-full space-y-2">
            <span
              className={cn(
                'block h-1.5 w-10 rounded-full bg-accent/70',
                isIntersecting ? 'animate-code-line' : 'opacity-0'
              )}
              style={{ animationDelay: '0.2s' }}
            ></span>
            <span
              className={cn(
                'block h-1.5 w-14 rounded-full bg-primary/70',
                isIntersecting ? 'animate-code-line' : 'opacity-0'
              )}
              style={{ animationDelay: '0.4s' }}
            ></span>
            <span
              className={cn(
                'block h-1.5 w-8 rounded-full bg-green-500/70',
                isIntersecting ? 'animate-code-line' : 'opacity-0'
              )}
              style={{ animationDelay: '0.6s' }}
            ></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedMonitorIcon;
