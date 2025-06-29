import { Inter } from 'next/font/google';
import './globals.css';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SessionTimer from '@/components/SessionTimer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'HealthConnectDoctor - Medical Second Opinion Platform',
  description: 'Connect with expert doctors worldwide for second medical opinions and consultations.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-gray-900 text-white min-h-screen flex flex-col`}>
        <Navbar />
        {/* <SessionTimer /> */}
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
} 