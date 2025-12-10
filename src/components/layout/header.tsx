'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import KivoLogo from '@/components/kivo-logo';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#faq', label: 'FAQ' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out',
        'bg-background/80 backdrop-blur-lg supports-[backdrop-filter]:bg-background/60',
        isScrolled ? 'border-b border-white/10 shadow-lg' : ''
      )}
    >
      <div
        className={cn(
          'container flex h-16 items-center transition-all duration-300 ease-in-out'
        )}
      >
        <div className="mr-4 flex items-center">
          <Link href="#home" className="mr-6 flex items-center space-x-2">
            <KivoLogo />
            <span
              className={cn(
                'font-bold sm:inline-block font-headline'
              )}
            >
              Kivo
            </span>
          </Link>
        </div>
        <nav
          className={cn(
            'hidden md:flex items-center space-x-6 text-sm font-medium'
          )}
        >
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition-colors hover:text-foreground/80 text-foreground/60">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <Button
            className={cn(
              'hidden md:inline-flex'
            )}
          >
            Agendar
          </Button>
          <Button variant="ghost" size="icon" onClick={toggleMenu} className="md:hidden">
            {isMenuOpen ? <X /> : <Menu />}
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="container flex flex-col items-start space-y-4 py-4 pt-0">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="w-full rounded-md p-2 text-sm font-medium hover:bg-muted"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button className="w-full">Agendar</Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
