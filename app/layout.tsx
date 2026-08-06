import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CoreCV — Become a Founding User",
  description:
    "CoreCV is your AI-powered career intelligence platform. Build your master vault, craft standout career artifacts, and make smarter career decisions. Become a founding user for early access.",
  keywords: [
    "CoreCV",
    "career platform",
    "AI resume builder",
    "career intelligence",
    "job search",
    "founding user",
    "early access",
  ],
  openGraph: {
    title: "CoreCV — Become a Founding User",
    description:
      "Your AI-powered career operating system. Join 140+ professionals building smarter careers.",
    url: "https://corecv.app",
    siteName: "CoreCV",
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "CoreCV Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CoreCV — Become a Founding User",
    description:
      "Your AI-powered career operating system. Join 140+ professionals building smarter careers.",
    images: ["/opengraph-image.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={outfit.variable}>
      <body className={`${outfit.className} antialiased`} style={{ background: "#0D1117" }}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
