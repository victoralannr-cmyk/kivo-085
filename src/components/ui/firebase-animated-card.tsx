'use client';

import { cn } from '@/lib/utils';
import { useEffect, useRef, useState } from 'react';
import { Database, MessageSquare, Users } from 'lucide-react';
import AnimatedCodeBlock from './animated-code-block';

const FirebaseAnimatedCard = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
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
  
  return (
    <div
      ref={ref}
      className={cn(
        'relative w-full max-w-xl lg:max-w-3xl h-auto bg-[#0f172a]/50 backdrop-blur-sm rounded-2xl shadow-lg p-6 sm:p-10 flex flex-col md:flex-row justify-between items-center gap-8 overflow-hidden border border-slate-700/50',
        !isVisible && '[&_path]:!stroke-dashoffset-[600]' // Reset animation
      )}
    >
        <svg className="absolute top-0 left-0 w-full h-full pointer-events-none z-10 hidden md:block" viewBox="0 0 600 350" preserveAspectRatio="xMidYMid meet">
            <path className="connection-line line-top" d="M 210 175 C 280 175, 330 70, 420 70" />
            <path className="connection-line line-mid" d="M 210 175 C 300 175, 340 175, 420 175" />
            <path className="connection-line line-bottom" d="M 210 175 C 280 175, 330 280, 420 280" />
        </svg>

        <div className="z-20 flex-shrink-0 flex justify-center items-center h-[88px] w-[88px]">
            <AnimatedCodeBlock />
        </div>

      <div className="z-20 flex flex-col justify-center h-full w-full md:w-auto space-y-4">
        
        <div className="flex items-center bg-slate-800/50 p-4 rounded-lg text-slate-200 transition-all duration-300 hover:bg-slate-800/80 hover:translate-x-1">
            <div className="mr-4 p-2 border border-[#2196f3] rounded-full">
                <Users className="w-6 h-6 text-[#2196f3]" />
            </div>
            <span className="text-sm font-medium">Cliente / Usuário</span>
        </div>

        <div className="flex items-center bg-slate-800/50 p-4 rounded-lg text-slate-200 transition-all duration-300 hover:bg-slate-800/80 hover:translate-x-1">
            <div className="mr-4 p-2 border border-[#2196f3] rounded-full">
                <Database className="w-6 h-6 text-[#2196f3]" />
            </div>
            <span className="text-sm font-medium">Dados do Produto</span>
        </div>

        <div className="flex items-center bg-slate-800/50 p-4 rounded-lg text-slate-200 transition-all duration-300 hover:bg-slate-800/80 hover:translate-x-1">
           <div className="mr-4 p-2 border border-[#2196f3] rounded-full">
                <MessageSquare className="w-6 h-6 text-[#2196f3]" />
           </div>
            <span className="text-sm font-medium">Feedback & Analytics</span>
        </div>
      </div>
    </div>
  );
};

export default FirebaseAnimatedCard;
