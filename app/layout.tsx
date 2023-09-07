import './globals.css';
import 'index.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from './providers';
import React from 'react';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '闽南师范大学计算机学院官网20230826',
  description: '2023年8月',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    {/*尝试更改主题配色*/}
    <html lang='zh' data-theme='light'>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
