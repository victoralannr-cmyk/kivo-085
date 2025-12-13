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
        'relative w-full max-w-xl lg:max-w-sm h-auto bg-[#0f172a]/50 backdrop-blur-sm rounded-2xl shadow-lg p-6 sm:p-10 flex flex-col justify-center items-center overflow-hidden border border-slate-700/50',
        !isVisible && '[&_path]:!stroke-dashoffset-[600]' // Reset animation
      )}
    >
      <div className="z-20 flex flex-col justify-center h-full w-full space-y-4">
        
        <div className="flex items-center bg-slate-800/50 p-4 rounded-lg text-slate-200 transition-all duration-300 hover:bg-slate-800/80 hover:translate-x-1">
            <div className="mr-4 p-2 border border-[#2196f3] rounded-md">
                <Users className="w-6 h-6 text-[#2196f3]" />
            </div>
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
