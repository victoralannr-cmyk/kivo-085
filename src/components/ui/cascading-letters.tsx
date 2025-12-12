'use client';

import { cn } from '@/lib/utils';

type CascadingLettersProps = {
  text: string;
  className?: string;
  stagger?: number;
  highlightedWords?: string[];
  highlightClassName?: string;
  baseDelay?: number;
};

const CascadingLetters = ({
  text,
  className,
  stagger = 0.05,
  highlightedWords = [],
  highlightClassName = '',
  baseDelay = 0,
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

        const wordSpan = (
          <span
            className={cn(
              'inline-block',
              isHighlighted && highlightClassName
            )}
          >
            {word.split('').map((letter) => {
              const currentLetterIndex = letterIndex++;
              return (
                <span
                  key={`${letter}-${currentLetterIndex}`}
                  className={'animate-cascade-in inline-block'}
                  style={{
                    animationDelay: `${baseDelay + currentLetterIndex * stagger}s`,
                  }}
                >
                  {letter}
                </span>
              );
            })}
          </span>
        );

        // Add a space after each word except the last one
        if (wordIndex < words.length - 1) {
          letterIndex++; // Account for the space character in staggering
          return (
            <span key={wordIndex}>
              {wordSpan}
              {'\u00A0'}{' '}
            </span>
          );
        }
        
        return wordSpan;
      })}
    </span>
  );
};

export default CascadingLetters;
