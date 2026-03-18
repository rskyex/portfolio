import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { EditProvider } from '@/lib/editContext';
import './globals.css';

export const metadata: Metadata = {
  title: 'Risa Koyanagi — Researcher & Platform Builder',
  description: 'Portfolio of Risa Koyanagi — researcher and platform builder working across international security, space governance, nuclear governance, cyber governance, and emerging technology governance.',
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
      <body className="font-noto-sans antialiased bg-indigo-950">
        <EditProvider>
          <Navbar />
          <main className="pt-16 min-h-screen">
            {children}
          </main>
          <Footer />
        </EditProvider>
      </body>
    </html>
  );
}
