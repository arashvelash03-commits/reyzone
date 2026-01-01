import type { Metadata } from 'next';
import { Vazirmatn } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';
import { cn } from '@/shared/lib/utils';
import SessionGuard from './session-guard';

const vazirmatn = Vazirmatn({ subsets: ['arabic'] });

export const metadata: Metadata = {
  title: 'Reyzone EHR',
  description: 'Electronic Health Record System',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body className={cn('min-h-screen bg-background font-sans antialiased', vazirmatn.className)}>
        <Providers>
          <SessionGuard>{children}</SessionGuard>
        </Providers>
      </body>
    </html>
  );
}
