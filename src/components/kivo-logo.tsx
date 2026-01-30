import { cn } from '@/lib/utils';
import Image from 'next/image';

const KivoLogo = ({ className }: { className?: string }) => {
  return (
    <Image
      src="https://i.postimg.cc/fRKNhRrM/Captura-de-tela-2025-11-27-221300-removebg-preview.png"
      alt="Kivo Logo"
      width={120}
      height={34}
      className={cn('w-auto', className)}
      priority
    />
  );
};

export default KivoLogo;
