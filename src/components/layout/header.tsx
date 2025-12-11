'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#contato', label: 'Contato' },
  { href: '#faq', label: 'FAQ' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const normalLogo = "https://i.postimg.cc/MpwpmLSX/Captura-de-tela-2025-12-10-175124-removebg-preview.png";
  const scrolledLogo = "https://i.postimg.cc/QxKrKJ9z/Captura-de-tela-2025-11-30-224857-removebg-preview.png";

  const showScrolledLogo = isMobile && isScrolled;

  return (
    <header
      className={cn(
        'fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ease-in-out w-full max-w-6xl',
      )}
    >
      <div className={cn("container relative flex h-20 items-center justify-center md:justify-between rounded-full transition-all duration-300 border",
        isScrolled 
          ? 'bg-background/80 backdrop-blur-xl shadow-lg border-white/10' 
          : 'bg-transparent backdrop-blur-lg border-white/5'
      )}>
        <Link href="#home" className="flex items-center justify-center flex-1 md:flex-none">
          <div className="relative h-10 transition-all duration-300 ease-in-out" style={{ width: showScrolledLogo ? 40 : 100 }}>
            <Image 
              src={normalLogo}
              alt="Kivo Logo"
              fill
              sizes="100px"
              className={cn("object-contain transition-opacity duration-300 ease-in-out", showScrolledLogo ? 'opacity-0' : 'opacity-100')}
            />
            <Image 
              src={scrolledLogo}
              alt="Kivo Logo Scrolled"
              fill
              sizes="40px"
              className={cn("object-contain transition-opacity duration-300 ease-in-out", showScrolledLogo ? 'opacity-100' : 'opacity-0')}
            />
          </div>
        </Link>
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-primary text-foreground/80"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="absolute right-4 md:static flex items-center space-x-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            className="md:hidden"
          >
            {isMenuOpen ? <X /> : <Menu />}
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl mt-2 rounded-lg border border-white/10">
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
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
