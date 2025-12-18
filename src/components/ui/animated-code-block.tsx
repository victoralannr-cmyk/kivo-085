'use client';

import { cn } from '@/lib/utils';
import { useEffect, useRef, useState } from 'react';

const AnimatedCodeBlock = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

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
        'relative h-20 w-20 rounded-lg bg-primary/5 overflow-hidden border border-primary/10 flex flex-col justify-center items-start p-3'
      )}
    >
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
  );
};

export default AnimatedCodeBlock;
