import './globals.css';
import type { Metadata } from 'next';
import {
  Great_Vibes,
  Playfair_Display,
  Poppins,
} from 'next/font/google';

const greatVibes = Great_Vibes({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-great-vibes',
  display: 'swap',
});

const playfair = Playfair_Display({
  weight: ['400', '500', '600'],
  subsets: ['latin', 'cyrillic'],
  variable: '--font-playfair',
  display: 'swap',
});

const poppins = Poppins({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Love you fishka ❤️',
  description: 'A romantic Valentine\'s Day gift',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk" className={`${greatVibes.variable} ${playfair.variable} ${poppins.variable}`}>
      <body className="antialiased bg-romantic-cream text-romantic-charcoal min-h-screen">
        {children}
      </body>
    </html>
  );
}
