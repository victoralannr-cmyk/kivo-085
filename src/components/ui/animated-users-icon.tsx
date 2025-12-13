import { cn } from '@/lib/utils';

const AnimatedUsersIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn(className)}
    >
      <style>
        {`
          .head-1 {
            animation: orbital-wobble 4s ease-in-out infinite;
            transform-origin: center;
          }
          .head-2 {
            animation: orbital-wobble 4s ease-in-out infinite;
            animation-delay: 0.5s;
            transform-origin: center;
          }
        `}
      </style>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" className="head-1" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" className="head-2" />
    </svg>
  );
};

export default AnimatedUsersIcon;
