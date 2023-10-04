import './globals.css';

import { Analytics } from '@vercel/analytics/react';
import Nav from './nav';
import Toast from './toast';
import { Suspense } from 'react';
import { SessionProvider } from "next-auth/react"

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
      <body className="h-full h-screen">
        <Suspense>
          <Nav />
        </Suspense>
        {children}
        <Analytics />
	  </body>
	
    </html>
  );
}
