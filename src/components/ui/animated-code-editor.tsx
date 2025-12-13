'use client';

import { cn } from '@/lib/utils';
import { useEffect, useState, useRef } from 'react';

const codeLines = [
  {
    text: '.hero-title {',
    color: 'text-yellow-400',
  },
  {
    text: '  font-size: 3rem;',
    color: 'text-cyan-400',
  },
  {
    text: "  animation: 'gradient-flow' 3s infinite;",
    color: 'text-purple-400',
  },
  {
    text: '}',
    color: 'text-yellow-400',
  },
];

const typingSpeed = 100;
const deletingSpeed = 50;
const delayBetweenLines = 1000;

const AnimatedCodeEditor = () => {
  const [currentText, setCurrentText] = useState('');
  const [lineIndex, setLineIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        if (!entry.isIntersecting) {
            // Reset animation when not visible
            setCurrentText('');
            setLineIndex(0);
            setIsDeleting(false);
            setLoopNum(prev => prev + 1); // Force re-trigger
        }
      },
      { threshold: 0.5 }
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

  useEffect(() => {
    if (!isVisible) return;

    let ticker: NodeJS.Timeout;

    const handleTyping = () => {
      const fullText = codeLines.map(l => l.text).join('\n');
      if (isDeleting) {
        if (currentText.length > 0) {
          setCurrentText(prev => prev.substring(0, prev.length - 1));
          ticker = setTimeout(handleTyping, deletingSpeed);
        } else {
          setIsDeleting(false);
          setLoopNum(prev => prev + 1);
        }
      } else {
        if (currentText.length < fullText.length) {
          setCurrentText(prev => fullText.substring(0, prev.length + 1));
          ticker = setTimeout(handleTyping, typingSpeed);
        } else {
          setTimeout(() => setIsDeleting(true), delayBetweenLines * 2);
        }
      }
    };

    ticker = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(ticker);
  }, [currentText, isDeleting, isVisible, loopNum]);
  
  const getHighlightedCode = () => {
    let remainingText = currentText;
    let lineStartIndex = 0;

    return codeLines.map((line, index) => {
      const lineEndIndex = lineStartIndex + line.text.length + (index < codeLines.length - 1 ? 1 : 0);
      const visiblePartOfLine = currentText.substring(lineStartIndex, Math.min(lineEndIndex, currentText.length));
      
      let lineContent = visiblePartOfLine.replace(line.text, '').trimEnd();
      if(currentText.length > lineStartIndex){
          lineContent = currentText.substring(lineStartIndex, Math.min(lineStartIndex + line.text.length, currentText.length))
      } else {
          lineContent = ''
      }

      lineStartIndex = lineEndIndex;
      
      return (
        <div key={index}>
            <span className={line.color}>{lineContent}</span>
        </div>
      );
    });
  };

  return (
    <div
      ref={ref}
      className="h-[88px] w-full max-w-[200px] bg-[#1e1e1e] rounded-lg border border-border/20 shadow-lg p-3 flex flex-col font-mono text-xs"
    >
      <div className="flex items-center gap-1.5 mb-2">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
      </div>
      <div className="flex-grow overflow-hidden">
        <pre className="text-left">
          <code>
            {getHighlightedCode()}
            <span className="animate-blink">|</span>
          </code>
        </pre>
      </div>
    </div>
  );
};

export default AnimatedCodeEditor;