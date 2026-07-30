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

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://vrsrealinvest.com.au/#organization",
      "name": "VRS RealInvest",
      "url": "https://vrsrealinvest.com.au",
      "logo": "https://vrsrealinvest.com.au/logo.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+61-412-864-050",
        "contactType": "customer service",
        "email": "sudhesh@vrsrealinvest.com.au",
        "areaServed": "AU",
        "availableLanguage": "en"
      }
    },
    {
      "@type": "RealEstateAgent",
      "@id": "https://vrsrealinvest.com.au/#realestateagent",
      "name": "VRS RealInvest",
      "url": "https://vrsrealinvest.com.au",
      "logo": "https://vrsrealinvest.com.au/logo.png",
      "telephone": "+61-412-864-050",
      "email": "sudhesh@vrsrealinvest.com.au",
      "description": "Premium buyer's agency and real estate coaching business. We represent buyers and help busy professionals build wealth through strategic Australian real estate investing, providing end-to-end guidance from strategy to settlement.",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "AU",
        "addressRegion": "NSW"
      },
      "areaServed": {
        "@type": "Country",
        "name": "Australia"
      }
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://vrsrealinvest.com.au/#localbusiness",
      "name": "VRS RealInvest",
      "url": "https://vrsrealinvest.com.au",
      "logo": "https://vrsrealinvest.com.au/logo.png",
      "telephone": "+61-412-864-050",
      "email": "sudhesh@vrsrealinvest.com.au",
      "description": "VRS RealInvest is an Australian buyer's agency and real estate coaching business helping busy professionals purchase the right investment property with clarity and confidence.",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "AU",
        "addressRegion": "NSW"
      },
      "areaServed": {
        "@type": "Country",
        "name": "Australia"
      }
    }
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${montserrat.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={montserrat.className}>
        <ScrollToTop />
        {children}
      </body>
    </html>
  );
}
