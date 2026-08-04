import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './components/ui/Navbar';
import Footer from './components/ui/Footer';
import BackToTop from './components/ui/BackToTop';
import ChatBot from './components/ui/ChatBot';
import { Toaster } from 'sonner';
import { Analytics } from "@vercel/analytics/next"

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
  title: 'David Akanang | Full-Stack Software Engineer & AI Specialist',
  description: 'Portfolio of David Akanang (DevDave). Python Software Engineer, Backend & Full-Stack Developer specializing in AI Systems, Django, React, and Scalable Architecture based in Abuja, Nigeria.',
  keywords: ['David Akanang', 'Software Engineer', 'Backend Developer', 'Full-Stack Developer', 'Python', 'Django', 'React', 'AI Systems', 'Next.js', 'Nigeria'],
  authors: [{ name: 'David Akanang' }],
  creator: 'David Akanang',
  openGraph: {
    type: 'website',
    locale: 'en_NG',
    url: 'https://devdave-portfolio.vercel.app/',
    title: 'David Akanang | Full-Stack Software Engineer',
    description: 'Portfolio of David Akanang, a Python Software Engineer specializing in scalable backend systems and AI applications.',
    siteName: 'DevDave Portfolio',
  }
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
        <Toaster position="top-center" />
        <Footer />
        <BackToTop />
        <ChatBot />
        <Analytics />
      </body>
    </html>
  );
}