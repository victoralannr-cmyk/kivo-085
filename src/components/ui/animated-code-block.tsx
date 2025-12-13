'use client';

import { cn } from '@/lib/utils';
import { useEffect, useRef, useState } from 'react';

const AnimatedCodeBlock = () => {
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
        'relative h-10 w-10 rounded-sm bg-primary/10 overflow-hidden border border-primary/20 flex flex-col justify-center items-start p-1.5'
      )}
    >
      <div className="w-full space-y-1">
        <span
          className={cn(
            'block h-1 w-8 rounded-full bg-accent/70',
            isIntersecting ? 'animate-code-line' : 'opacity-0'
          )}
          style={{ animationDelay: '0.2s' }}
        ></span>
        <span
          className={cn(
            'block h-1 w-10 rounded-full bg-accent/70',
            isIntersecting ? 'animate-code-line' : 'opacity-0'
          )}
          style={{ animationDelay: '0.4s' }}
        ></span>
        <span
          className={cn(
            'block h-1 w-6 rounded-full bg-accent/70',
            isIntersecting ? 'animate-code-line' : 'opacity-0'
          )}
          style={{ animationDelay: '0.6s' }}
        ></span>
      </div>
    </div>
  );
};

export default AnimatedCodeBlock;
