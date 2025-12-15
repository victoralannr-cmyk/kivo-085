'use client';

import { cn } from '@/lib/utils';
import { Database, MessageSquare, Users } from 'lucide-react';

const FirebaseAnimatedCard = () => {
  return (
    <div
      className={cn(
        'relative w-full max-w-lg bg-[#0f172a]/50 backdrop-blur-sm rounded-2xl shadow-lg p-6 flex items-center justify-around gap-8 overflow-hidden border border-slate-700/50',
      )}
    >
      {/* New Icon: Square inside a Circle */}
      <div className="relative flex h-24 w-24 items-center justify-center">
        <div className="absolute h-full w-full rounded-full border-2 border-dashed border-primary/50"></div>
        <div className="h-12 w-12 rounded-lg bg-white"></div>
      </div>

      {/* Right side items */}
      <div className="z-10 flex flex-col justify-center h-full w-full max-w-xs space-y-4">
        <div className="flex items-center bg-slate-800/50 p-3 rounded-lg text-slate-200 transition-all duration-300 hover:bg-slate-800/80 hover:translate-x-1">
          <div className="mr-3 p-2 border border-primary/50 rounded-full">
            <Users className="w-5 h-5 text-primary" />
          </div>
          <span className="text-sm font-medium">Cliente / Usuário</span>
        </div>

        <div className="flex items-center bg-slate-800/50 p-3 rounded-lg text-slate-200 transition-all duration-300 hover:bg-slate-800/80 hover:translate-x-1">
          <div className="mr-3 p-2 border border-primary/50 rounded-full">
            <Database className="w-5 h-5 text-primary" />
          </div>
          <span className="text-sm font-medium">Dados do Produto</span>
        </div>

        <div className="flex items-center bg-slate-800/50 p-3 rounded-lg text-slate-200 transition-all duration-300 hover:bg-slate-800/80 hover:translate-x-1">
          <div className="mr-3 p-2 border border-primary/50 rounded-full">
            <MessageSquare className="w-5 h-5 text-primary" />
          </div>
          <span className="text-sm font-medium">Feedback & Analytics</span>
        </div>
      </div>
    </div>
  );
};

export default FirebaseAnimatedCard;
