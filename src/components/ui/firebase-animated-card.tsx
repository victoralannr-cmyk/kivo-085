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
          d="M 125 100 C 160 100, 170 50, 220 50"
        />
        <path
          className="connection-line animate-draw-line line-mid"
          d="M 125 100 C 170 100, 170 100, 220 100"
        />
        <path
          className="connection-line animate-draw-line line-bottom"
          d="M 125 100 C 160 100, 170 150, 220 150"
        />
      </svg>
      
      {/* Left side box */}
      <div className="relative flex h-24 w-24 items-center justify-center">
        {/* Orbiting circle */}
        <div className="absolute h-full w-full rounded-full border border-dashed border-white/50"></div>
        
        {/* 3D Box */}
        <div className="relative h-12 w-12" style={{ transformStyle: 'preserve-3d', transform: 'rotateY(-30deg) rotateX(15deg)' }}>
            <div className="absolute h-full w-full animate-spin-3d" style={{ animationDuration: '15s', transformStyle: 'preserve-3d' }}>
                <div className="absolute flex h-full w-full items-center justify-center border border-white/20 bg-white/10" style={{ transform: 'rotateY(0deg) translateZ(24px)' }}></div>
                <div className="absolute flex h-full w-full items-center justify-center border border-white/20 bg-white/10" style={{ transform: 'rotateY(90deg) translateZ(24px)' }}></div>
                <div className="absolute flex h-full w-full items-center justify-center border border-white/20 bg-white/10" style={{ transform: 'rotateY(180deg) translateZ(24px)' }}></div>
                <div className="absolute flex h-full w-full items-center justify-center border border-white/20 bg-white/10" style={{ transform: 'rotateY(-90deg) translateZ(24px)' }}></div>
                <div className="absolute flex h-full w-full items-center justify-center border border-white/20 bg-white/10" style={{ transform: 'rotateX(90deg) translateZ(24px)' }}></div>
                <div className="absolute flex h-full w-full items-center justify-center border border-white/20 bg-white/10" style={{ transform: 'rotateX(-90deg) translateZ(24px)' }}></div>
            </div>
        </div>
      </div>

      {/* Right side items */}
      <div className="flex flex-col justify-center h-full w-auto space-y-4">
        <div className="flex items-center text-slate-200">
          <div className="p-3 border border-primary/50 rounded-full">
            <Users className="w-8 h-8 text-primary" />
          </div>
        </div>

        <div className="flex items-center text-slate-200">
          <div className="p-3 border border-primary/50 rounded-full">
            <Database className="w-8 h-8 text-primary" />
          </div>
        </div>

        <div className="flex items-center text-slate-200">
          <div className="p-3 border border-primary/50 rounded-full">
            <MessageSquare className="w-8 h-8 text-primary" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirebaseAnimatedCard;
