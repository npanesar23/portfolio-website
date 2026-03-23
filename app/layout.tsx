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

const siteUrl = 'https://nitishpanesar.com';
const siteUrlBase = new URL(siteUrl);

export const metadata: Metadata = {
  title: 'Nitish Panesar',
  description:
    'Nitish Panesar is a Geospatial Data Science student at the University of Waterloo, with experience in Growth & Go-to-Market at Tinybox Systems and leadership as Founder of Meridian Advertising Group.',
  metadataBase: siteUrlBase,
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'Nitish Panesar',
    title: 'Nitish Panesar',
    description:
      'Nitish Panesar is a Geospatial Data Science student at the University of Waterloo, with experience in Growth & Go-to-Market at Tinybox Systems and leadership as Founder of Meridian Advertising Group.',
    images: [
      {
        url: '/favicon.svg',
        width: 32,
        height: 32,
        alt: 'Nitish Panesar',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Nitish Panesar',
    description:
      'Nitish Panesar is a Geospatial Data Science student at the University of Waterloo, with experience in Growth & Go-to-Market at Tinybox Systems and leadership as Founder of Meridian Advertising Group.',
    images: ['/favicon.svg'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
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
      <body className={`bg-background text-foreground min-h-screen antialiased`}>
        <ClientProviders>
          {children}
        </ClientProviders>
      </body>
    </html>
  );
}
