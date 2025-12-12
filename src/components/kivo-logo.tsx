import { cn } from '@/lib/utils';
import Image from 'next/image';

const KivoLogo = ({ className }: { className?: string }) => {
  return (
    <Image
      src="https://i.postimg.cc/K8MgDrs5/Captura-de-tela-2025-11-27-221300-removebg-preview.png"
      alt="Kivo Logo"
      width={168}
      height={48}
      className={cn('h-12 w-auto', className)}
      priority
    />
  );
};

export default KivoLogo;
