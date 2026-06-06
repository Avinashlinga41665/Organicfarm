import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://organicfarm-five.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Organic Farm",
    template: "%s | Organic Farm",
  },

  description:
    "Discover fresh organic vegetables, fruits, and farm products grown naturally. Visit our farm, explore products, and place bulk orders.",

  keywords: [
    "organic farm",
    "organic vegetables",
    "organic fruits",
    "fresh vegetables",
    "fresh fruits",
    "farm products",
    "natural farming",
    "organic produce",
    "healthy food",
    "farm fresh",
  ],

  authors: [
    {
      name: "Organic Farm",
    },
  ],

  creator: "Organic Farm",
  publisher: "Organic Farm",

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: siteUrl,
  },

  openGraph: {
    title: "Organic Farm",
    description:
      "Fresh organic vegetables, fruits, and farm products grown naturally.",
    url: siteUrl,
    siteName: "Organic Farm",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${siteUrl}/farm-banner.jpg`,
        width: 1200,
        height: 630,
        alt: "Organic Farm",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Organic Farm",
    description:
      "Fresh organic vegetables, fruits, and farm products grown naturally.",
    images: [`${siteUrl}/farm-banner.jpg`],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  category: "Agriculture",
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Farm",
  name: "Organic Farm",
  url: siteUrl,
  image: `${siteUrl}/farm-banner.jpg`,
  description:
    "Fresh organic vegetables, fruits and farm products grown naturally.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <meta name="theme-color" content="#4CAF50" />
      </head>

      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />

        {children}
      </body>
    </html>
  );
}