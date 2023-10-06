import './globals.css';

import { Analytics } from '@vercel/analytics/react';
import { Suspense } from 'react';
import Nav from './nav';

export const metadata = {
  title: 'PaperPlainer - Understand arXiv Research Papers Using ChatGPT',
  description:
    "Unlock the complexities of arXiv research papers with PaperPlainer! Dive deep into academic insights using ChatGPT's intuitive explanations. Turn jargon into understanding today"
};

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full bg-white">
      <body className="h-screen min-w-[320px] max-w-full w-full">
        <Suspense>
          {/* Navbar */}
          <Nav />
        </Suspense>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
