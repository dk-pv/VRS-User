import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VRS Real Invest",
  description: "Premium real estate investment portfolio website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
