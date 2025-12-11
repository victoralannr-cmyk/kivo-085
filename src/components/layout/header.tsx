'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowRight } from 'lucide-react';
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

  const logoSrc = isMobile && isScrolled ? scrolledLogo : normalLogo;

  return (
    <header
      className={cn(
        'fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ease-in-out w-full max-w-6xl',
      )}
    >
      <div className={cn("container flex h-20 items-center justify-between rounded-full transition-all duration-300 border",
        isScrolled 
          ? 'bg-background/80 backdrop-blur-xl shadow-lg border-white/10' 
          : 'bg-background/20 backdrop-blur-lg border-white/5'
      )}>
        <Link href="#home" className="flex items-center space-x-2">
          <Image 
            src={logoSrc}
            alt="Kivo Logo"
            width={isMobile && isScrolled ? 40 : 100}
            height={40}
            className="h-10 w-auto transition-all duration-300"
            key={logoSrc}
          />
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
        <div className="flex items-center space-x-2">
          <Button className="hidden md:inline-flex bg-gradient-to-r from-cyan-500 to-green-500 text-white hover:from-cyan-600 hover:to-green-600 transition-all duration-300 transform hover:scale-105 animate-pulse-glow">
            WhatsApp
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
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
            <Button className="w-full bg-gradient-to-r from-cyan-500 to-green-500 text-white">
              WhatsApp
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
