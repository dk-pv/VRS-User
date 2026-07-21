import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Property Investment Webinar",
  description:
    "Join the VRS Real Invest webinar to learn proven strategies for building wealth through Australian property investment.",
  alternates: {
    canonical: "/webinar",
  },
  openGraph: {
    title: "Property Investment Webinar | VRS Real Invest",
    description:
      "Join the VRS Real Invest webinar to learn proven strategies for building wealth through Australian property investment.",
    url: "https://vrsrealinvest.com.au/webinar",
    siteName: "VRS Real Invest",
    locale: "en_AU",
    type: "website",
  },
};

export default function WebinarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
