'use client';

import { cn } from '@/lib/utils';
import { Database, MessageSquare, Users } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import AnimatedCodeEditor from './animated-code-editor';

const FirebaseAnimatedCard = () => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            setAnimationKey(prev => prev + 1);
          } else {
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.5 }
    );

    const currentRef = cardRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    const handleVisibilityChange = () => {
      if (document.hidden) {
        setIsVisible(false);
      } else {
        // Check if the card is in the viewport when returning to the tab
        if (cardRef.current) {
          const bounding = cardRef.current.getBoundingClientRect();
          if (bounding.top >= 0 && bounding.bottom <= window.innerHeight) {
            setIsVisible(true);
            setAnimationKey(prev => prev + 1);
          }
        }
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={cn(
        'relative w-full max-w-lg h-auto bg-[#0f172a]/50 backdrop-blur-sm rounded-2xl shadow-lg p-6 flex items-center justify-between gap-4 overflow-hidden border border-slate-700/50',
      )}
    >
      <div className="w-1/3 flex justify-center items-center">
        <AnimatedCodeEditor />
      </div>

      <svg
        width="200"
        height="240"
        viewBox="0 0 200 240"
        className="absolute left-[30%] top-1/2 -translate-y-1/2 z-0"
      >
        <path
          key={`line-top-${animationKey}`}
          className={cn('connection-line', { 'animate-draw-line': isVisible })}
          d="M 0 120 C 50 120, 50 50, 100 50"
        />
        <path
          key={`line-mid-${animationKey}`}
          className={cn('connection-line', { 'animate-draw-line': isVisible })}
          d="M 0 120 C 50 120, 50 120, 100 120"
        />
        <path
          key={`line-bottom-${animationKey}`}
          className={cn('connection-line', { 'animate-draw-line': isVisible })}
          d="M 0 120 C 50 120, 50 190, 100 190"
        />
      </svg>
      
      <div className="z-10 flex flex-col justify-center h-full w-2/3 space-y-4 pl-8">
        <div className="flex items-center bg-slate-800/50 p-3 rounded-lg text-slate-200 transition-all duration-300 hover:bg-slate-800/80 hover:translate-x-1">
          <div className="mr-3 p-2 border border-[#2196f3] rounded-full">
            <Users className="w-5 h-5 text-[#2196f3]" />
          </div>
          <span className="text-sm font-medium">Cliente / Usuário</span>
        </div>

        <div className="flex items-center bg-slate-800/50 p-3 rounded-lg text-slate-200 transition-all duration-300 hover:bg-slate-800/80 hover:translate-x-1">
          <div className="mr-3 p-2 border border-[#2196f3] rounded-full">
            <Database className="w-5 h-5 text-[#2196f3]" />
          </div>
          <span className="text-sm font-medium">Dados do Produto</span>
        </div>

        <div className="flex items-center bg-slate-800/50 p-3 rounded-lg text-slate-200 transition-all duration-300 hover:bg-slate-800/80 hover:translate-x-1">
          <div className="mr-3 p-2 border border-[#2196f3] rounded-full">
            <MessageSquare className="w-5 h-5 text-[#2196f3]" />
          </div>
          <span className="text-sm font-medium">Feedback & Analytics</span>
        </div>
      </div>
    </div>
  );
};

export default FirebaseAnimatedCard;
