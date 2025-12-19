import { cn } from '@/lib/utils';
import Image from 'next/image';

const KivoLogo = ({ className }: { className?: string }) => {
  return (
    <Image
      src="https://i.imgur.com/NWwb87f.png"
      alt="Kivo Logo"
      width={168}
      height={48}
      className={cn('w-auto', className)}
      priority
    />
  );
};

export default KivoLogo;
