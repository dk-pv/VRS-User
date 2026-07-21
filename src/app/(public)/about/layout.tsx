import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about VRS Real Invest — an Australian buyer's agency helping busy professionals build wealth through strategic property investment.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Us | VRS Real Invest",
    description:
      "Learn about VRS Real Invest — an Australian buyer's agency helping busy professionals build wealth through strategic property investment.",
    url: "https://vrsrealinvest.com.au/about",
    siteName: "VRS Real Invest",
    locale: "en_AU",
    type: "website",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
