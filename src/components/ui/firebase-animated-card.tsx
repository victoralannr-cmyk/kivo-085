'use client';

import { cn } from '@/lib/utils';
import { useEffect, useRef, useState } from 'react';
import { Database, MessageSquare, Users } from 'lucide-react';

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
        'relative w-full max-w-xl lg:max-w-2xl h-auto bg-[#0f172a]/50 backdrop-blur-sm rounded-2xl shadow-lg p-6 sm:p-10 flex flex-col lg:flex-row justify-between items-center overflow-hidden border border-slate-700/50',
        !isVisible && '[&_path]:!stroke-dashoffset-[600]' // Reset animation
      )}
    >
      <svg className="absolute top-0 left-0 w-full h-full pointer-events-none z-10" viewBox="0 0 600 350" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
        <path className="connection-line line-top" d="M 180 175 C 280 175, 280 80, 380 80" />
        <path className="connection-line line-mid" d="M 180 175 C 280 175, 280 175, 380 175" />
        <path className="connection-line line-bottom" d="M 180 175 C 280 175, 280 270, 380 270" />
      </svg>

      <div className="z-20 flex-shrink-0 mb-8 lg:mb-0 lg:mr-10">
        <div className="bg-gradient-to-br from-[#FFCA28] to-[#FF6F00] w-40 h-40 rounded-xl flex flex-col justify-center items-center text-white font-bold shadow-[0_10px_20px_rgba(255,111,0,0.3)] transition-transform duration-300 hover:scale-105">
          <div className="text-5xl mb-2">🔥</div>
          <span>Firebase Core</span>
        </div>
      </div>

      <div className="z-20 flex flex-col justify-center h-full w-full lg:w-auto space-y-4">
        
        <div className="flex items-center bg-slate-800/50 p-4 rounded-lg text-slate-200 transition-all duration-300 hover:bg-slate-800/80 hover:translate-x-1">
            <span className="text-sm font-medium">Cliente / Usuário</span>
        </div>

        <div className="flex items-center bg-slate-800/50 p-4 rounded-lg text-slate-200 transition-all duration-300 hover:bg-slate-800/80 hover:translate-x-1">
            <div className="mr-4 p-2 border border-[#2196f3] rounded-md">
                <Database className="w-6 h-6 text-[#2196f3]" />
            </div>
            <span className="text-sm font-medium">Dados do Produto</span>
        </div>

        <div className="flex items-center bg-slate-800/50 p-4 rounded-lg text-slate-200 transition-all duration-300 hover:bg-slate-800/80 hover:translate-x-1">
           <div className="mr-4 p-2 border border-[#2196f3] rounded-md">
                <MessageSquare className="w-6 h-6 text-[#2196f3]" />
           </div>
            <span className="text-sm font-medium">Feedback & Analytics</span>
        </div>
      </div>
    </div>
  );
};

export default FirebaseAnimatedCard;
