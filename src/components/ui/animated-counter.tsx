'use client';

import { useEffect, useState, useRef } from 'react';

type AnimatedCounterProps = {
  to: number;
  duration?: number;
};

const AnimatedCounter = ({ to, duration = 1500 }: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const element = ref.current;

    const startAnimation = () => {
      let startTime: number | null = null;
      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const percentage = Math.min(progress / duration, 1);
        setCount(Math.floor(percentage * to));
        if (progress < duration) {
          requestAnimationFrame(animate);
        } else {
          setCount(to);
        }
      };
      requestAnimationFrame(animate);
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
            setCount(0);
            startAnimation();
        }
      });
    };

    if (element) {
        observerRef.current = new IntersectionObserver(handleIntersect, { threshold: 0.1 });
        observerRef.current.observe(element);
    }
    
    return () => {
        if (observerRef.current && element) {
            observerRef.current.unobserve(element);
        }
    };

  }, [to, duration]);

  return <span ref={ref}>{count}</span>;
};

export default AnimatedCounter;
