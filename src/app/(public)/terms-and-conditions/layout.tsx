import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Review the terms and conditions governing the use of the VRS Real Invest website and services.",
  alternates: {
    canonical: "/terms-and-conditions",
  },
  openGraph: {
    title: "Terms & Conditions | VRS Real Invest",
    description:
      "Review the terms and conditions governing the use of the VRS Real Invest website and services.",
    url: "https://vrsrealinvest.com.au/terms-and-conditions",
    siteName: "VRS Real Invest",
    locale: "en_AU",
    type: "website",
  },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
