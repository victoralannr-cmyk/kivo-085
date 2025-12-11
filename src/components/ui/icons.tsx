import { cn } from '@/lib/utils';

export const WhatsAppIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={cn("h-6 w-6", className)}
    >
      <path d="M16.6 14c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.6.7-.8.9-.1.1-.3.2-.5.1-.2-.1-1-.4-1.9-1.2-.7-.6-1.2-1.4-1.3-1.6s0-.3.1-.4c.1-.1.2-.2.4-.4.1-.1.2-.2.3-.4.1-.2 0-.4-.1-.5-.1-.1-.6-1.5-.8-2-.2-.5-.4-.4-.5-.4h-.5c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 1.9s.8 2.2 1 2.4c.1.1 1.5 2.3 3.7 3.2.5.2.9.3 1.2.4.5.1 1 .1 1.3-.1.4-.2.6-.7.8-.9s.2-.4.1-.5-.2-.2-.4-.3z" />
      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zM12.04 20.15c-1.55 0-3.05-.4-4.36-1.18l-.31-.18-3.23.85.87-3.15-.2-.33c-.85-1.4-1.29-3-1.29-4.66 0-4.54 3.69-8.23 8.23-8.23 4.54 0 8.23 3.69 8.23 8.23s-3.69 8.23-8.23 8.23z" />
    </svg>
  );
};

export const OldCameraIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("h-10 w-10", className)}
    >
      <path d="M19.5 3.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" />
      <path d="M4.5 3.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" />
      <path d="M7 6.5h10" />
      <path d="M3 11.5h2.5" />
      <path d="M18.5 11.5H21" />
      <path d="M12 11.5a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" />
      <path d="M8 11.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
      <path d="M12.5 16.5h-1a2 2 0 0 1-2-2v-1h5v1a2 2 0 0 1-2 2Z" />
      <path d="M10 21.5h4" />
      <path d="m12 16.5 2-3h-4l2 3Z" />
      <path d="M14.5 2.5 12 6h-1L8.5 2.5" />
    </svg>
  );
};
