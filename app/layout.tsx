import './globals.css';
import type { Metadata } from 'next';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import Script from 'next/script';

export const metadata: Metadata = {
  metadataBase: new URL('https://risesmiles.com'),
  title: {
    default: "Rise Dental | Premier Modern Wellness Dentistry in Austin, Brushy Creek, Cedar Park, Texas",
    template: "%s | Rise Dental | Brushy Creek Dentist"
  },
  description: "Rise Dental is the premier modern dental office of Austin specializing in implants, cosmetic, and integrative dentistry. We offer concierge-style care with wellness-centered treatment that prioritize longevity and sustainability. Serving Brushy Creek, Cedar Park, Texas.",
  keywords: "brushy creek dentist, cedar park dentist, austin dentist, gut health dentist, red light therapy dentist, cold sore dentist, sleep dentist, invisalign dentist, cost dentist, without insurance dentist, no insurance dentist, insurance breakdown dentist, insurance coverage dentist, implant dentistry, cosmetic dentistry, esthetic dentistry, dental bonding dentist, composite bonding dentist, pop on veneers dentist, affordable veneers dentist, dental implants",
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://risesmiles.com',
    siteName: 'Rise Dental',
    title: 'Premier Modern Wellness Dentistry in Austin, Brushy Creek, Cedar Park, Texas',
    description: 'Rise Dental is the premier modern dental office of Austin specializing in implants, cosmetic, and integrative dentistry. We offer concierge-style care with wellness-centered treatment that prioritize longevity and sustainability. Serving Brushy Creek, Cedar Park, Texas.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Rise Dental - Modern Wellness Dentistry in Austin',
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