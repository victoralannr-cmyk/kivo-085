'use client';

import { cn } from '@/lib/utils';

const PcMonitorIcon = () => {
  return (
    <div className={cn('relative h-20 w-24 flex items-center justify-center')}>
      {/* Screen */}
      <div className="h-16 w-full rounded-lg bg-primary/5 border-2 border-primary/20 shadow-lg relative overflow-hidden">
        <div className="absolute top-2 left-2 w-3 h-0.5 rounded-full bg-primary/30"></div>
        <div className="absolute top-2 right-2 flex space-x-1">
            <div className="w-1.5 h-1.5 rounded-full bg-primary/30"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-primary/30"></div>
        </div>

        {/* Animated Code Line */}
        <span className="absolute top-1/2 left-0 h-1.5 w-10 rounded-full bg-accent/70 animate-code-line"></span>

        {/* Glowing line */}
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-accent/50 animate-pulse-light opacity-50" style={{ animationDuration: '3s' }}></div>
      </div>
      {/* Stand */}
      <div className="absolute bottom-0 w-8 h-4 bg-primary/20 rounded-t-sm" style={{ clipPath: 'polygon(20% 0, 80% 0, 100% 100%, 0% 100%)'}}></div>
       {/* Base */}
       <div className="absolute -bottom-1 w-12 h-1.5 bg-primary/30 rounded-full"></div>
    </div>
  );
};

export default PcMonitorIcon;
