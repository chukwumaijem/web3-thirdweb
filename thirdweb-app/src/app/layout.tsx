import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThirdwebProvider } from 'thirdweb/react';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Web3 App with thirdweb',
  description: 'Exploring the world of web3 with thirdweb and Next.js',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThirdwebProvider>{children}</ThirdwebProvider>
      </body>
    </html>
  );
}