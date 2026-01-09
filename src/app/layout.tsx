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
  title: 'Kivo Agency',
  description: 'Impulsionamos sua empresa para o topo com modelos preditivos de conversão.',
  icons: {
    icon: 'https://i.postimg.cc/9Mx4GF0p/favicon-kivo-(1)-(2).png',
    apple: 'https://i.postimg.cc/9Mx4GF0p/favicon-kivo-(1)-(2).png',
    shortcut: 'https://i.postimg.cc/9Mx4GF0p/favicon-kivo-(1)-(2).png',
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
