'use client';

import { cn } from '@/lib/utils';

type AnimatedGradientTextProps = {
  text: string;
  className?: string;
};

const AnimatedGradientText = ({ text, className }: AnimatedGradientTextProps) => {
  return (
    <span className={cn('text-wavy-gradient', className)}>
      {text.split('').map((char, index) => (
        <span
          key={`${char}-${index}`}
          className="animate-fade-in-up inline-block"
          style={{ animationDelay: `${index * 0.05}s` }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  );
};

export default AnimatedGradientText;
