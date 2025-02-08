import './globals.css';
import type { Metadata } from 'next';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import Script from 'next/script';

export const metadata: Metadata = {
  metadataBase: new URL('https://risesmiles.com'),
  title: {
    default: "Modern Holistic Dentist in Cedar Park & Austin | Rise Dental",
    template: "%s | Rise Dental"
  },
  description: "Experience modern holistic dental care at Rise Dental in Cedar Park, serving Austin & Brushy Creek. We combine advanced technology with natural healing approaches for optimal wellness.",
  keywords: "cedar park dentist, austin holistic dentist, brushy creek dentist, modern dental office, holistic dentist, wellness dentistry, sustainable dentistry, biological dentistry",
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://risesmiles.com',
    siteName: 'Rise Dental',
    title: 'Modern Holistic Dentist in Cedar Park & Austin | Rise Dental',
    description: 'Experience modern holistic dental care at Rise Dental. Advanced technology meets natural healing for optimal wellness in Cedar Park, Austin & Brushy Creek.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Rise Dental - Modern Holistic Dentistry in Cedar Park',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Modern Holistic Dentist in Cedar Park & Austin | Rise Dental',
    description: 'Experience modern holistic dental care at Rise Dental. Advanced technology meets natural healing for optimal wellness in Cedar Park, Austin & Brushy Creek.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://risesmiles.com',
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' }
    ],
    apple: [
      { url: '/apple-touch-icon.png' }
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#272018'
      }
    ]
  },
  manifest: '/site.webmanifest'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-GE11SFJM0J"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-GE11SFJM0J');
          `}
        </Script>
      </head>
      <body>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}