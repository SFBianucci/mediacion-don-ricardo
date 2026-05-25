import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Mediación con Don Ricardo',
  description:
    'Simulación interactiva de una audiencia de mediación prejudicial — método de negociación de Harvard. Material académico — UADE, Resolución de Controversias.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="bg-bg-primary text-text-primary antialiased min-h-screen font-sans">
        {children}
      </body>
    </html>
  );
}
