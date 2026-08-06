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
  metadataBase: new URL("https://waitlist.corecv.app"),
  title: "CoreCV — Become a Founding User",
  description:
    "CoreCV is your AI-powered career operating system. Build a Master Vault, generate tailored resumes, practise mock interviews, and publish career content — all in one place. Join as a founding user for early access.",
  keywords: [
    "CoreCV",
    "AI career platform",
    "AI resume builder",
    "career intelligence",
    "founding user",
    "early access",
    "career vault",
    "job search AI",
    "mock interviews",
  ],
  authors: [{ name: "CoreCV", url: "https://corecv.app" }],
  creator: "CoreCV",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1 },
  },
  icons: {
    icon: [
      { url: "/opengraph-image.png", type: "image/png" },
    ],
    apple: [{ url: "/opengraph-image.png", type: "image/png" }],
    shortcut: "/opengraph-image.png",
  },
  openGraph: {
    title: "CoreCV — Become a Founding User",
    description:
      "Your AI-powered career operating system. Build your Master Vault, craft standout career artifacts, and make smarter career decisions. Join 140+ professionals getting early access.",
    url: "https://waitlist.corecv.app",
    siteName: "CoreCV",
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "CoreCV — AI Career Intelligence Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CoreCV — Become a Founding User",
    description:
      "Your AI-powered career operating system. Join 140+ professionals building smarter careers.",
    images: ["/opengraph-image.png"],
    creator: "@corecvapp",
  },
  alternates: {
    canonical: "https://waitlist.corecv.app",
  },
};

// JSON-LD structured data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "CoreCV",
  url: "https://corecv.app",
  description:
    "CoreCV is an AI-powered career intelligence platform. Build a Master Vault of your career history once, then generate tailored resumes, run personalised AI mock interviews, and publish professional career content.",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    description: "Free early access for founding users",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={outfit.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${outfit.className} antialiased`} style={{ background: "#0D1117" }}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
