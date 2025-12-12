'use client';

import { useEffect, useState, useRef } from 'react';

type AnimatedCounterProps = {
  to: number;
  duration?: number;
};

const AnimatedCounter = ({ to, duration = 2000 }: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  
  const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    
    let animationFrameId: number;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let startTime: number | null = null;
          
          const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / duration, 1);
            const easedPercentage = easeOutCubic(percentage);
            
            setCount(Math.floor(easedPercentage * to));
            
            if (progress < duration) {
              animationFrameId = requestAnimationFrame(animate);
            } else {
              setCount(to);
            }
          };
          
          animationFrameId = requestAnimationFrame(animate);
          observer.unobserve(element);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(element);
    
    return () => {
      cancelAnimationFrame(animationFrameId);
      if(element) {
        observer.unobserve(element);
      }
    };

  }, [to, duration]);

  return <span ref={ref}>{count}</span>;
};

export default AnimatedCounter;
