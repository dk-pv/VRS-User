import "./globals.css";
import type { Metadata, Viewport } from "next";
import ScrollToTop from "@/components/common/ScrollToTop";
import { Cormorant_Garamond, Montserrat } from "next/font/google";

const playfair = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vrsrealinvest.com.au"),

  title: {
    default: "VRS Real Invest",
    template: "%s | VRS Real Invest",
  },

  description: "Premium real estate investment portfolio website in Australia.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "VRS Real Invest",
    description:
      "Premium real estate investment portfolio website in Australia.",
    url: "https://vrsrealinvest.com.au",
    siteName: "VRS Real Invest",
    locale: "en_AU",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${montserrat.variable}`}>
      <body className={montserrat.className}>
        <ScrollToTop />
        {children}
      </body>
    </html>
  );
}
