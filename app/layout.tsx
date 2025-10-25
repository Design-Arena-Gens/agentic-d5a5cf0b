import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'DREAM FINDS COMPANY — Digital Marketing That Scales',
    template: '%s — DREAM FINDS COMPANY',
  },
  description:
    'DREAM FINDS COMPANY is a full-stack digital marketing studio helping ambitious brands achieve compounding growth through performance creative, SEO, and paid media.',
  metadataBase: new URL('https://agentic-d5a5cf0b.vercel.app'),
  openGraph: {
    title: 'DREAM FINDS COMPANY — Digital Marketing That Scales',
    description:
      'Full-stack digital marketing studio helping ambitious brands grow through performance creative, SEO, and paid media.',
    url: 'https://agentic-d5a5cf0b.vercel.app',
    siteName: 'DREAM FINDS COMPANY',
    images: [
      {
        url: '/og.jpg',
        width: 1200,
        height: 630,
        alt: 'DREAM FINDS COMPANY',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DREAM FINDS COMPANY — Digital Marketing That Scales',
    description:
      'Full-stack digital marketing studio helping ambitious brands grow through performance creative, SEO, and paid media.',
    images: ['/og.jpg'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
