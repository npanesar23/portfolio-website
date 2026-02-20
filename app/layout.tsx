import type { Metadata } from 'next';
import type React from 'react';
import { JetBrains_Mono } from 'next/font/google';
import './globals.css';

import ClientProviders from '@/components/ClientProviders';

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains-mono',
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: 'nitish panesar',
  description: "hi, i'm nitish! this is my personal website.",
  metadataBase: new URL('https://nicholaschen.me'),
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={jetbrainsMono.variable}>
      <body className={`bg-[#1a1a1a] min-h-screen antialiased`}>
        <ClientProviders>
          {children}
        </ClientProviders>
      </body>
    </html>
  );
}
