import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './components/ui/Navbar';
import Footer from './components/ui/Footer';
import ThemeProvider from './components/theme-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Dev Dave - Portfolio',
  description: 'Personal portfolio showcasing my projects and skills',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  themeColor: '#ffffff',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="overflow-x-hidden">
      <body className={`${inter.className} bg-white text-gray-900`}>
        
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}