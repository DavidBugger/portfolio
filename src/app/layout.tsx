import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './components/ui/Navbar';
import Footer from './components/ui/Footer';

const inter = Inter({ subsets: ['latin'] });

// Viewport configuration
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#ffffff',
  // Add any other viewport settings here
};

// Metadata configuration
export const metadata: Metadata = {
  title: 'Dev Dave - Portfolio',
  description: 'Personal portfolio showcasing my projects and skills',
  // Remove viewport and themeColor from here
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