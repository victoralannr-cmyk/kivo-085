import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';
import ScrollToTopButton from '@/components/ui/scroll-to-top-button';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Kivo Digital Surge',
  description: 'Impulsionamos sua empresa para o topo com modelos preditivos de conversão.',
  icons: {
    shortcut: 'https://i.postimg.cc/K8MgDrs5/Captura-de-tela-2025-11-27-221300-removebg-preview.png',
    apple: 'https://i.postimg.cc/K8MgDrs5/Captura-de-tela-2025-11-27-221300-removebg-preview.png',
    icon: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className={cn('font-body antialiased overflow-x-hidden', poppins.variable)}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
        <Toaster />
        <ScrollToTopButton />
      </body>
    </html>
  );
}
