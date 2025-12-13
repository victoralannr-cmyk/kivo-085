'use client';

import { cn } from '@/lib/utils';
import { useEffect, useRef, useState, type ReactNode, type HTMLAttributes } from 'react';

interface AnimateOnScrollProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  animationClassName?: string;
  delay?: number;
  threshold?: number;
  triggerOnce?: boolean;
}

const AnimateOnScroll = ({
  children,
  className,
  animationClassName = 'animate-fade-in-down',
  delay = 0,
  threshold = 0.1,
  triggerOnce = false,
  ...props
}: AnimateOnScrollProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (triggerOnce && ref.current) {
              observer.unobserve(ref.current);
            }
          } else {
            if (!triggerOnce) {
              setIsVisible(false);
            }
          }
        });
      },
      { threshold }
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
  }, [threshold, triggerOnce]);

  const animationStyle = isVisible ? { animationDelay: `${delay}ms` } : {};

  return (
    <div
      ref={ref}
      className={cn(className, 'transition-opacity duration-500', isVisible ? `${animationClassName} opacity-100` : 'opacity-0')}
      style={{ ...animationStyle, ...props.style }}
      {...props}
    >
      {children}
    </div>
  );
};

export default AnimateOnScroll;
