import { Inter } from 'next/font/google';
import './globals.css';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SessionTimer from '@/components/SessionTimer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Digital Health',
  description: 'Connect with expert doctors worldwide for second medical opinions and consultations.',
  icons: {
    // icon: '/website-icon.jpg', 
    icon: '/website-icon.png', 

  },
  keywords: [
    'Digital Health',
    'Online Doctor Consultation',
    'Second Opinion',
    'Healthcare',
    'Telemedicine',
  ],
  author: 'Shubham Nevare', // Replace with your name or organization
  openGraph: {
    title: 'Digital Health',
    description: 'Connect with expert doctors worldwide for second medical opinions and consultations.',
    url: 'https://yourdomain.com',
    siteName: 'Digital Health',
    images: [
      {
        url: '/og-image.png', // Optional: Add an OG image for link previews
        width: 1200,
        height: 630,
        alt: 'Digital Health',
      },
    ],
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-gray-900 text-white min-h-screen flex flex-col`}>
        <Navbar />
        <SessionTimer />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
} 