'use client';

import { cn } from '@/lib/utils';
import { Database, MessageSquare, Users } from 'lucide-react';

const FirebaseAnimatedCard = () => {
  return (
    <div
      className={cn(
        'relative w-full max-w-lg h-auto bg-[#0f172a]/50 backdrop-blur-sm rounded-2xl shadow-lg p-6 flex flex-col justify-center items-center gap-4 overflow-hidden border border-slate-700/50',
      )}
    >
      <div className="z-20 flex flex-col justify-center h-full w-full space-y-4">
        <div className="flex items-center bg-slate-800/50 p-3 rounded-lg text-slate-200 transition-all duration-300 hover:bg-slate-800/80 hover:translate-x-1">
          <div className="mr-3 p-2 border border-[#2196f3] rounded-full">
            <Users className="w-5 h-5 text-[#2196f3]" />
          </div>
          <span className="text-sm font-medium">Cliente / Usuário</span>
        </div>

        <div className="flex items-center bg-slate-800/50 p-3 rounded-lg text-slate-200 transition-all duration-300 hover:bg-slate-800/80 hover:translate-x-1">
          <div className="mr-3 p-2 border border-[#2196f3] rounded-full">
            <Database className="w-5 h-5 text-[#2196f3]" />
          </div>
          <span className="text-sm font-medium">Dados do Produto</span>
        </div>

        <div className="flex items-center bg-slate-800/50 p-3 rounded-lg text-slate-200 transition-all duration-300 hover:bg-slate-800/80 hover:translate-x-1">
          <div className="mr-3 p-2 border border-[#2196f3] rounded-full">
            <MessageSquare className="w-5 h-5 text-[#2196f3]" />
          </div>
          <span className="text-sm font-medium">Feedback & Analytics</span>
        </div>
      </div>
    </div>
  );
};

export default FirebaseAnimatedCard;
