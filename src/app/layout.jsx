import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SessionTimer from '@/components/SessionTimer';

export const metadata = {
  title: 'Digital Health',
  description: 'Connect with expert doctors worldwide for second medical opinions and consultations.',
  metadataBase: new URL('https://digital-health-nine.vercel.app'),
  icons: {
    icon: '/website-icon.png', 
  },
  keywords: [
    'Digital Health',
    'Online Doctor Consultation',
    'Second Opinion',
    'Healthcare',
    'Telemedicine',
  ],
  author: 'Shubham Nevare',
  openGraph: {
    title: 'Digital Health',
    description: 'Connect with expert doctors worldwide for second medical opinions and consultations.',
    url: 'https://digital-health-nine.vercel.app',
    siteName: 'Digital Health',
    images: [
      {
        url: '/og-image.png',
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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-gray-900 text-white min-h-screen flex flex-col">
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