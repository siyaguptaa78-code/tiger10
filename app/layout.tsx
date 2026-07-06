import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

const inter = Inter({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700', '800', '900'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://tiger365bookie.com'),
  title: 'Tiger 365 ID – Get Your Online Cricket Betting ID | Tiger365',
  description:
    'Tiger365 ID is your trusted online cricket betting ID provider. Get instant access to premium sports betting, live cricket, casino games, and Aviator with 24/7 support. INR accepted.',
  keywords: [
    'Tiger365 ID',
    'Tiger 365 ID',
    'cricket betting ID',
    'online betting ID India',
    'cricket ID provider',
    'Tiger365 WhatsApp',
    'online cricket ID',
    'sports betting India',
    'IPL betting ID',
    'T20 betting',
  ],
  applicationName: 'Tiger365',
  authors: [{ name: 'Tiger365' }],
  creator: 'Tiger365',
  publisher: 'Tiger365',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Tiger 365 ID – Online Cricket Betting ID Provider',
    description: 'Get your Tiger365 ID and start betting on cricket, football, and live casino games. 24/7 support. Instant setup.',
    type: 'website',
    locale: 'en_IN',
    url: 'https://tiger365bookie.com',
    siteName: 'Tiger365',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tiger 365 ID – Online Cricket Betting ID Provider',
    description: 'Get your Tiger365 ID and start betting on cricket, football, and live casino games. 24/7 support. Instant setup.',
  },
  icons: {
    icon: '/favicon.ico',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.className} bg-[#0a0a0a] text-white antialiased`}>
        {children}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-ZQER71ZNPZ" strategy="afterInteractive" />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-ZQER71ZNPZ');
            `
          }}
        />
      </body>
    </html>
  );
}
