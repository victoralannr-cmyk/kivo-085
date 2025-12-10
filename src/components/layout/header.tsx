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
        'fixed top-4 left-1/2 z-50 -translate-x-1/2 transition-all duration-300 ease-in-out',
        'bg-background/80 backdrop-blur-lg supports-[backdrop-filter]:bg-background/60',
        'border border-white/10 shadow-lg',
        isScrolled || isMenuOpen
          ? 'w-[95vw] rounded-2xl'
          : 'w-auto rounded-full'
      )}
    >
      <div
        className={cn(
          'flex h-14 items-center transition-all duration-300 ease-in-out',
          isScrolled || isMenuOpen ? 'px-4' : 'px-4'
        )}
      >
        <div className="mr-4 flex items-center">
          <Link href="#home" className="mr-6 flex items-center space-x-2">
            <KivoLogo />
            <span
              className={cn(
                'font-bold sm:inline-block font-headline transition-opacity duration-300',
                isScrolled || isMenuOpen ? 'opacity-100' : 'sm:opacity-0'
              )}
            >
              Kivo
            </span>
          </Link>
        </div>
        <nav
          className={cn(
            'items-center space-x-6 text-sm font-medium transition-all duration-300 ease-in-out md:flex',
            isScrolled || isMenuOpen
              ? 'visible opacity-100'
              : 'invisible w-0 opacity-0'
          )}
        >
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hidden lg:block transition-colors hover:text-foreground/80 text-foreground/60">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <Button
            className={cn(
              'hidden md:inline-flex transition-all duration-300',
              isScrolled || isMenuOpen
                ? 'visible opacity-100'
                : 'invisible w-0 p-0 opacity-0'
            )}
          >
            Agendar
          </Button>
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
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
