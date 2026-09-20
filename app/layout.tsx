import type { Metadata } from "next";
import "./globals.css";
import SiteHeader from "@/components/layout/SiteHeader";

export const metadata: Metadata = {
  metadataBase: new URL("https://xrp262.com"),
  title: {
    default: "XRP262 | Stellar-Native Asset Infrastructure",
    template: "%s | XRP262",
  },
  description:
    "XRP262 is a Stellar-native asset infrastructure protocol powered by the LEXORA controller, with explicit on-chain supply controls and verifiable mainnet state.",
  applicationName: "XRP262",
  keywords: [
    "XRP262",
    "Stellar",
    "Soroban",
    "LEXORA",
    "asset infrastructure",
    "Stellar-native asset",
  ],
  alternates: { canonical: "/" },
  icons: {
    icon: [{ url: "/logo.png", type: "image/png" }],
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "XRP262 | Stellar-Native Asset Infrastructure",
    description:
      "A verifiable Stellar-native asset infrastructure layer powered by LEXORA.",
    type: "website",
    siteName: "XRP262",
    url: "/",
    images: [{ url: "/logo.png", alt: "XRP262 logo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "XRP262 | Stellar-Native Asset Infrastructure",
    description:
      "Stellar-native asset infrastructure powered by LEXORA.",
    images: ["/logo.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body><SiteHeader />{children}</body>
    </html>
  );
}
