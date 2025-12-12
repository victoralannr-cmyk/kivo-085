'use client';

import { cn } from '@/lib/utils';

type CascadingLettersProps = {
  text: string;
  className?: string;
  letterClassName?: (index: number) => string;
  stagger?: number;
};

const CascadingLetters = ({
  text,
  className,
  letterClassName,
  stagger = 0.05,
}: CascadingLettersProps) => {
  const letters = text.split('');

  return (
    <span className={cn('inline-block', className)}>
      {letters.map((letter, index) => (
        <span
          key={`${letter}-${index}`}
          className={cn('animate-cascade-in', letterClassName?.(index))}
          style={{ animationDelay: `${index * stagger}s` }}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </span>
      ))}
    </span>
  );
};

export default CascadingLetters;
