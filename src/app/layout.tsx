import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
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
  metadataBase: new URL("https://productpartner.net"),
  title: {
    default: "Product Partner",
    template: "%s | Product Partner",
  },
  description:
    "Product Partner helps teams design, build, and ship software products people love.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    siteName: "Product Partner",
    title: "Product Partner",
    description:
      "Product Partner helps teams design, build, and ship software products people love.",
    url: "https://productpartner.net/",
    images: [
      {
        url: "/og/share-icon.png",
        width: 512,
        height: 512,
        alt: "Product Partner",
      },
      {
        url: "/og/default.png",
        width: 1200,
        height: 630,
        alt: "Product Partner",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Product Partner",
    description:
      "Product Partner helps teams design, build, and ship software products people love.",
    images: ["/og/share-icon.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-[#111111] text-white">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
