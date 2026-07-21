import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Secured Properties",
  description:
    "Explore premium properties VRS Real Invest has successfully secured for clients — real results from strategic Australian property investment.",
  alternates: {
    canonical: "/properties",
  },
  openGraph: {
    title: "Secured Properties | VRS Real Invest",
    description:
      "Explore premium properties VRS Real Invest has successfully secured for clients — real results from strategic Australian property investment.",
    url: "https://vrsrealinvest.com.au/properties",
    siteName: "VRS Real Invest",
    locale: "en_AU",
    type: "website",
  },
};

export default function PropertiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
