import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'CAD / 3D Designer Robot — Lowongan',
  description: 'Bergabung untuk menerjemahkan ide menjadi komponen robot yang siap diprint, diuji, dan diiterasi.',
  metadataBase: new URL('https://cad-3d-designer-robot-deascript.afrizaldea94.chatgpt.site'),
  openGraph: {
    title: 'CAD / 3D Designer Robot — Lowongan',
    description: 'Buat ide jadi robot yang bisa diprint, diuji, lalu diulang.',
    images: [{ url: '/og.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CAD / 3D Designer Robot — Lowongan',
    description: 'Buat ide jadi robot yang bisa diprint, diuji, lalu diulang.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
