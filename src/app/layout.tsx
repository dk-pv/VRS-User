import "./globals.css";
import type { Metadata, Viewport } from "next";

// ✅ Import fonts
import { Playfair_Display, Montserrat } from "next/font/google";

// ✅ Configure fonts
const playfair = Playfair_Display({
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
  title: "Real Invest",
  description: "Premium real estate investment portfolio website",
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
    <html
      lang="en"
      className={`${playfair.variable} ${montserrat.variable}`}
    >
      {/* ✅ Apply Montserrat properly */}
      <body className={montserrat.className}>
        {children}
      </body>
    </html>
  );
}