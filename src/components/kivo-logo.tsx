import { cn } from '@/lib/utils';

const KivoLogo = ({ className }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('h-8 w-8 text-white', className)}
    >
      <path
        d="M6 4V20M6 12L18 4M12 12L18 20"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default KivoLogo;
