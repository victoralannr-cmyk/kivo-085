'use client';

import { cn } from '@/lib/utils';

type CascadingLettersProps = {
  text: string;
  className?: string;
  letterClassName?: (index: number) => string;
  stagger?: number;
  highlightedWords?: string[];
  highlightClassName?: string;
};

const CascadingLetters = ({
  text,
  className,
  stagger = 0.05,
  highlightedWords = [],
  highlightClassName = '',
}: CascadingLettersProps) => {
  const words = text.split(' ');

  let letterIndex = 0;

  return (
    <span className={cn('inline-block', className)}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block">
          {word.split('').map((letter, indexInWord) => {
            const currentLetterIndex = letterIndex++;
            const isHighlighted = highlightedWords.some(
              (hWord) =>
                word.toLowerCase().includes(hWord.toLowerCase()) &&
                hWord.toLowerCase().includes(word.toLowerCase())
            );

            return (
              <span
                key={`${letter}-${currentLetterIndex}`}
                className={cn(
                  'animate-cascade-in inline-block',
                  isHighlighted && highlightClassName
                )}
                style={{ animationDelay: `${currentLetterIndex * stagger}s` }}
              >
                {letter}
              </span>
            );
          })}
          {wordIndex < words.length - 1 && '\u00A0'}{' '}
          {/* Adiciona espaço */}
        </span>
      ))}
    </span>
  );
};

export default CascadingLetters;
