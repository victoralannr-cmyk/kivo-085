'use client';

import { cn } from '@/lib/utils';
import { useEffect, useRef, useState, type ReactNode, type HTMLAttributes } from 'react';
import { Slot } from '@radix-ui/react-slot';

interface AnimateOnScrollProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  animationClassName?: string;
  delay?: number;
  threshold?: number;
  triggerOnce?: boolean;
  asChild?: boolean;
}

const AnimateOnScroll = ({
  children,
  className,
  animationClassName = 'animate-fade-in-left',
  delay = 0,
  threshold = 0.1,
  triggerOnce = true,
  asChild = false,
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

  const Comp = asChild ? Slot : 'div';

  return (
    <Comp
      ref={ref}
      className={cn(
        className,
        'opacity-0', // Start invisible
        isVisible && animationClassName
      )}
      style={{ animationDelay: `${delay}ms`, ...props.style }}
      {...props}
    >
      {children}
    </Comp>
  );
};

export default AnimateOnScroll;
