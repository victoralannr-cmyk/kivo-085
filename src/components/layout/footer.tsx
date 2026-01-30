'use client';

import { useEffect, useState } from 'react';
import KivoLogo from '../kivo-logo';

const Footer = () => {
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="border-t border-border/40 py-6">
      <div className="container flex flex-col items-center justify-center gap-2">
        <KivoLogo className="h-6" />
        {currentYear && (
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Kivo. Todos os direitos reservados.
          </p>
        )}
      </div>
    </footer>
  );
};

export default Footer;
