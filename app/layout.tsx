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

export const metadata: Metadata = {
  title: "Organic Farm | Fresh Produce Direct From Farm",
  description:
    "Discover fresh organic vegetables, fruits and farm products grown naturally. Visit our farm, explore products and place bulk orders.",

  openGraph: {
    title: "Organic Farm",
    description:
      "Fresh organic vegetables, fruits and farm products grown naturally.",
    url: "https://organicfarm-five.vercel.app",
    siteName: "Organic Farm",
    images: [
      {
        url: "/farm-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Organic Farm",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Farm",
  name: "Organic Farm",
  url: "https://organicfarm-five.vercel.app",
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