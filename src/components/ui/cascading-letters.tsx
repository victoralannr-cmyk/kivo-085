'use client';

import { cn } from '@/lib/utils';

type CascadingLettersProps = {
  text: string;
  className?: string;
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
      {words.map((word, wordIndex) => {
        const isHighlighted = highlightedWords.some(
          (hWord) =>
            word.toLowerCase().replace(/[.,]/g, '') === hWord.toLowerCase()
        );

        return (
          <span
            key={wordIndex}
            className={cn('inline-block', isHighlighted && highlightClassName)}
          >
            {word.split('').map((letter) => {
              const currentLetterIndex = letterIndex++;
              return (
                <span
                  key={`${letter}-${currentLetterIndex}`}
                  className={'animate-cascade-in inline-block'}
                  style={{ animationDelay: `${currentLetterIndex * stagger}s` }}
                >
                  {letter}
                </span>
              );
            })}
            {wordIndex < words.length - 1 && '\u00A0'}{' '}
            {/* Adiciona espaço */}
          </span>
        );
      })}
    </span>
  );
};

export default CascadingLetters;
