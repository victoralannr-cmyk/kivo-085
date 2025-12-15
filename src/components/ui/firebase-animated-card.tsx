'use client';

import { cn } from '@/lib/utils';
import { useEffect, useRef, useState } from 'react';
import { Database, MessageSquare, Users } from 'lucide-react';
import AnimatedCodeEditor from './animated-code-editor';

const FirebaseAnimatedCard = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const isInViewport = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        isInViewport.current = entry.isIntersecting;
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
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
    const handleVisibilityChange = () => {
      if (document.hidden) {
        // Tab is hidden, reset animation if needed when it comes back
        if(isInViewport.current) {
          setIsVisible(false);
        }
      } else {
        // Tab is visible, re-trigger animation if in viewport
        if (isInViewport.current) {
          // A quick toggle to restart the CSS animation
          setIsVisible(false);
          setTimeout(() => {
            setIsVisible(true);
          }, 50);
        }
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);
  
  return (
    <div
      ref={ref}
      className={cn(
        'relative w-full max-w-xl lg:max-w-2xl h-auto bg-[#0f172a]/50 backdrop-blur-sm rounded-2xl shadow-lg p-6 flex flex-col md:flex-row justify-between items-center gap-4 overflow-hidden border border-slate-700/50',
      )}
    >
        <svg className="absolute top-0 left-0 w-full h-full pointer-events-none z-10 hidden md:block" viewBox="0 0 550 300" preserveAspectRatio="xMidYMid meet">
            <path className={cn('connection-line line-top', isVisible ? 'animate-draw-line' : '')} d="M 210 150 C 280 150, 300 70, 370 70" />
            <path className={cn('connection-line line-mid', isVisible ? 'animate-draw-line' : '')} d="M 210 150 C 280 150, 300 150, 370 150" />
            <path className={cn('connection-line line-bottom', isVisible ? 'animate-draw-line' : '')} d="M 210 150 C 280 150, 300 230, 370 230" />
        </svg>

        <div className="z-20 flex-shrink-0 flex justify-center items-center h-[88px] w-[200px]">
            <AnimatedCodeEditor />
        </div>

      <div className="z-20 flex flex-col justify-center h-full w-full md:w-auto space-y-4">
        
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
