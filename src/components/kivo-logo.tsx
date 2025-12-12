import { cn } from '@/lib/utils';

const KivoLogo = ({ className }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 84 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('h-6 w-auto text-white', className)}
    >
        <path d="M12.6364 23.0545V0.945435" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10"></path>
        <path d="M0.945435 23.0545L12.6363 12L0.945435 0.945435" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10"></path>
        <path d="M34.8455 23.0545V0.945435" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10"></path>
        <path d="M34.8455 12C34.8455 17.5228 30.3683 22 24.8455 22C19.3226 22 14.8455 17.5228 14.8455 12C14.8455 6.47712 19.3226 1.99997 24.8455 1.99997C30.3683 1.99997 34.8455 6.47712 34.8455 12Z" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10"></path>
        <path d="M57.7091 1.01819V23.0545H50.8L38.7455 1.01819H45.8364L54.2546 16.2364L62.6728 1.01819H57.7091Z" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10"></path>
        <path d="M66.6273 23.0545V0.945435H83.0546V7.47271H73.1091V9.85452H81.3637V16.3818H73.1091V18.7636H83.0546V23.0545H66.6273Z" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10"></path>
    </svg>
  );
};

export default KivoLogo;
