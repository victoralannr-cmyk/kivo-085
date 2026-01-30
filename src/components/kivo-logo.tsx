import { cn } from '@/lib/utils';
import Image from 'next/image';

const KivoLogo = ({ className }: { className?: string }) => {
  return (
    <Image 
      src="https://i.postimg.cc/rmswKrtH/Logo-Kivo-4-Sem-Fundo.png"
      alt="Kivo Logo"
      width={40}
      height={40}
      className={cn('w-auto', className)}
      priority
    />
  );
};

export default KivoLogo;
