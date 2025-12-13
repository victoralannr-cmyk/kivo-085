'use client';

import { cn } from '@/lib/utils';
import { useEffect, useRef, useState } from 'react';

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
        'relative w-full max-w-xl h-auto sm:h-80 bg-[#252741] rounded-2xl shadow-lg p-6 sm:p-10 flex flex-col sm:flex-row justify-between items-center overflow-hidden',
        !isVisible && '[&_path]:!stroke-dashoffset-[600]' // Reset animation
      )}
    >
      <svg className="absolute top-0 left-0 w-full h-full pointer-events-none z-10" viewBox="0 0 600 350" xmlns="http://www.w3.org/2000/svg">
        <path className="connection-line line-top" d="M 200 175 C 300 175, 350 60, 450 60" />
        <path className="connection-line line-mid" d="M 200 175 C 320 175, 350 175, 450 175" />
        <path className="connection-line line-bottom" d="M 200 175 C 300 175, 350 290, 450 290" />
      </svg>

      <div className="z-20 flex-shrink-0 mb-6 sm:mb-0 sm:mr-10">
        <div className="bg-gradient-to-br from-[#FFCA28] to-[#FF6F00] w-40 h-40 rounded-xl flex flex-col justify-center items-center text-white font-bold shadow-[0_10px_20px_rgba(255,111,0,0.3)] transition-transform duration-300 hover:scale-105">
          <div className="text-5xl mb-2">🔥</div>
          <span>Firebase Core</span>
        </div>
      </div>

      <div className="z-20 flex flex-col justify-center h-full w-full sm:w-auto space-y-4">
        <div className="flex items-center bg-white/10 p-4 rounded-lg text-gray-200 transition-all duration-300 backdrop-blur-sm hover:bg-white/20 hover:translate-x-1">
          <svg className="w-6 h-6 mr-4" stroke="#FFCA28" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <rect width="18" height="18" x="3" y="3" rx="2" />
          </svg>
          <span className="text-sm font-medium">Cliente / Usuário</span>
        </div>

        <div className="flex items-center bg-white/10 p-4 rounded-lg text-gray-200 transition-all duration-300 backdrop-blur-sm hover:bg-white/20 hover:translate-x-1">
          <svg className="w-6 h-6 mr-4 fill-[#FFCA28]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 6h-4V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-8-2h4v2h-4V4zm0 14h-4v-2h4v2zm0-4h-4v-2h4v2zm6 4h-4v-2h4v2zm0-4h-4v-2h4v2z"/></svg>
          <span className="text-sm font-medium">Dados do Produto</span>
        </div>

        <div className="flex items-center bg-white/10 p-4 rounded-lg text-gray-200 transition-all duration-300 backdrop-blur-sm hover:bg-white/20 hover:translate-x-1">
           <svg className="w-6 h-6 mr-4 fill-[#FFCA28]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 12h-2v-2h2v2zm0-4h-2V7h2v3z"/></svg>
            <span className="text-sm font-medium">Feedback & Analytics</span>
        </div>
      </div>
    </div>
  );
};

export default FirebaseAnimatedCard;
