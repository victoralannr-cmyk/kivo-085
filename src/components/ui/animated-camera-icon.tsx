'use client';

import { cn } from '@/lib/utils';
import { Camera } from 'lucide-react';

const AnimatedCameraIcon = () => {
  return (
    <div
      className={cn(
        'relative h-24 w-24 flex items-center justify-center bg-primary/5 border-2 border-primary/20 rounded-xl shadow-lg'
      )}
    >
      <Camera
        className={cn('h-12 w-12 text-primary/80 animate-camera-flash')}
        style={{ animationDuration: '4s' }}
      />
    </div>
  );
};

export default AnimatedCameraIcon;
