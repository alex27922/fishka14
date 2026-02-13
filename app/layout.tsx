import type { Metadata } from 'next';
import { Great_Vibes, Cormorant_Garamond } from 'next/font/google';
import './globals.css';

const greatVibes = Great_Vibes({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-great-vibes',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  weight: ['400', '500', '600'],
  subsets: ['latin', 'cyrillic'],
  variable: '--font-cormorant',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'З тобою ❤️',
  description: 'A romantic Valentine\'s Day gift',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk" className={`${greatVibes.variable} ${cormorant.variable}`}>
      <body className="antialiased bg-deep-plum text-white min-h-screen">
        {children}
      </body>
    </html>
  );
}
