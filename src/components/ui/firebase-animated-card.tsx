'use client';

import { cn } from '@/lib/utils';
import { Database, MessageSquare, Users } from 'lucide-react';

const FirebaseAnimatedCard = () => {
  return (
    <div
      className={cn(
        'relative w-full max-w-sm bg-[#0f172a]/50 backdrop-blur-sm rounded-2xl shadow-lg p-6 flex items-center justify-around gap-8 overflow-hidden border border-slate-700/50',
      )}
    >
      <svg
        className="absolute inset-0 h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 350 200"
        preserveAspectRatio="none"
      >
        <path
          className="connection-line animate-draw-line line-top"
          d="M 90 100 C 140 100, 150 50, 190 50"
        />
        <path
          className="connection-line animate-draw-line line-mid"
          d="M 90 100 C 140 100, 140 100, 190 100"
        />
        <path
          className="connection-line animate-draw-line line-bottom"
          d="M 90 100 C 140 100, 150 150, 190 150"
        />
      </svg>
      
      <div className="relative flex h-24 w-24 items-center justify-center">
        <div className="absolute h-full w-full rounded-full border-2 border-dashed border-white/50"></div>
        <div className="relative h-12 w-12" style={{ transformStyle: 'preserve-3d', transform: 'rotateY(0deg)' }}>
          <div className="absolute h-full w-full border border-white/20 bg-white/10 animate-spin-3d" style={{ animationDuration: '15s', transformStyle: 'preserve-3d' }}>
            <div className="absolute h-full w-full border border-white/20 bg-white/10" style={{ transform: 'rotateY(0deg) translateZ(24px)' }}></div>
            <div className="absolute h-full w-full border border-white/20 bg-white/10" style={{ transform: 'rotateY(90deg) translateZ(24px)' }}></div>
            <div className="absolute h-full w-full border border-white/20 bg-white/10" style={{ transform: 'rotateY(180deg) translateZ(24px)' }}></div>
            <div className="absolute h-full w-full border border-white/20 bg-white/10" style={{ transform: 'rotateY(-90deg) translateZ(24px)' }}></div>
            <div className="absolute h-full w-full border border-white/20 bg-white/10" style={{ transform: 'rotateX(90deg) translateZ(24px)' }}></div>
            <div className="absolute h-full w-full border border-white/20 bg-white/10" style={{ transform: 'rotateX(-90deg) translateZ(24px)' }}></div>
          </div>
        </div>
      </div>

      {/* Right side items */}
      <div className="flex flex-col justify-center h-full w-auto space-y-4">
        <div className="flex items-center bg-slate-800/50 p-3 rounded-lg text-slate-200 transition-all duration-300 hover:bg-slate-800/80 hover:translate-x-1">
          <div className="mr-3 p-2 border border-primary/50 rounded-full">
            <Users className="w-5 h-5 text-primary" />
          </div>
        </div>

        <div className="flex items-center bg-slate-800/50 p-3 rounded-lg text-slate-200 transition-all duration-300 hover:bg-slate-800/80 hover:translate-x-1">
          <div className="mr-3 p-2 border border-primary/50 rounded-full">
            <Database className="w-5 h-5 text-primary" />
          </div>
        </div>

        <div className="flex items-center bg-slate-800/50 p-3 rounded-lg text-slate-200 transition-all duration-300 hover:bg-slate-800/80 hover:translate-x-1">
          <div className="mr-3 p-2 border border-primary/50 rounded-full">
            <MessageSquare className="w-5 h-5 text-primary" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirebaseAnimatedCard;
