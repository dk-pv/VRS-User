import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Client Reviews",
  description:
    "Read what VRS Real Invest clients say about their property investment experience with our Australian buyer's agency.",
  alternates: {
    canonical: "/review",
  },
  openGraph: {
    title: "Client Reviews | VRS Real Invest",
    description:
      "Read what VRS Real Invest clients say about their property investment experience with our Australian buyer's agency.",
    url: "https://vrsrealinvest.com.au/review",
    siteName: "VRS Real Invest",
    locale: "en_AU",
    type: "website",
  },
};

export default function ReviewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
