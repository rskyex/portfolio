import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'Risa Koyanagi — Cambridge Future Scholar & Researcher',
  description: 'Portfolio of Risa Koyanagi — Cambridge Future Scholar and researcher working across international security, space governance, nuclear governance, cyber governance, and emerging technology governance.',
  metadataBase: new URL('https://risakoyanagi.com'),
  openGraph: {
    title: 'Risa Koyanagi — Cambridge Future Scholar & Researcher',
    description: 'Portfolio of Risa Koyanagi — Cambridge Future Scholar and researcher working across international security, space governance, nuclear governance, cyber governance, and emerging technology governance.',
    url: 'https://risakoyanagi.com',
    siteName: 'Risa Koyanagi',
    images: [
      {
        url: '/images/risa%20koyanagi%20og.png',
        width: 1200,
        height: 630,
        alt: 'Risa Koyanagi',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Risa Koyanagi — Cambridge Future Scholar & Researcher',
    description: 'Portfolio of Risa Koyanagi — Cambridge Future Scholar and researcher working across international security, space governance, nuclear governance, cyber governance, and emerging technology governance.',
    images: ['/images/risa%20koyanagi%20og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Kaisei+Decol:wght@400;700&family=Noto+Sans+JP:wght@300;400;500;700&family=Noto+Serif+JP:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-noto-sans antialiased bg-kuro text-shiro">
        <Navbar />
        <main className="pt-14 min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
