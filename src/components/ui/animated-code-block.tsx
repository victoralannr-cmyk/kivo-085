'use client';

import { cn } from '@/lib/utils';
import PcMonitorIcon from './pc-monitor-icon';

const AnimatedCodeBlock = () => {
  return (
    <div
      className={cn(
        'relative h-24 w-24 rounded-lg bg-primary/5 border border-primary/10 flex flex-col justify-center items-center p-3'
      )}
    >
      <PcMonitorIcon />
    </div>
  );
};

export default AnimatedCodeBlock;
