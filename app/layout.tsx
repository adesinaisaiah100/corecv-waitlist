import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/next";
import { Nunito, Plus_Jakarta_Sans, Outfit, Space_Grotesk, Bricolage_Grotesque } from "next/font/google";
import { LenisProvider } from "@/components/lenis-provider";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-nunito",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-outfit",
  display: "swap",
});

const space = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space",
  display: "swap",
});

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-bricolage",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://waitlist.corecv.app"),
  title: "CoreCV — Become a Founding User",
  description:
    "CoreCV is your professional record, built on what you've actually done. Build your Master Vault, verify projects with real evidence, and let your work speak to recruiters. Join as a founding user for early access.",
  keywords: [
    "CoreCV",
    "Master Career Vault",
    "professional record",
    "verified work evidence",
    "founding user",
    "early access",
    "career vault",
    "technical portfolio",
    "recruiter proof",
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
      "Your professional record, built on what you've actually done. Build your Master Vault and join founding professionals getting early access.",
    url: "https://waitlist.corecv.app",
    siteName: "CoreCV",
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "CoreCV — Professional Career Vault",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CoreCV — Become a Founding User",
    description:
      "Your professional record, built on what you've actually done. Join professionals building their Master Vault.",
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
    "CoreCV is a professional record platform. Build a Master Vault of your career history once with verifiable evidence, architecture diagrams, and measurable metrics.",
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
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta property="og:image" content="https://waitlist.corecv.app/opengraph-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:image" content="https://waitlist.corecv.app/opengraph-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`antialiased font-sans ${nunito.variable} ${jakarta.variable} ${outfit.variable} ${space.variable} ${bricolage.variable} ${nunito.className}`}
        style={{ background: "#0D1117" }}
      >
        <Analytics />
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
