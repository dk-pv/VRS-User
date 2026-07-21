import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read the VRS Real Invest privacy policy to understand how we collect, use, and protect your personal information.",
  alternates: {
    canonical: "/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | VRS Real Invest",
    description:
      "Read the VRS Real Invest privacy policy to understand how we collect, use, and protect your personal information.",
    url: "https://vrsrealinvest.com.au/privacy-policy",
    siteName: "VRS Real Invest",
    locale: "en_AU",
    type: "website",
  },
};

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
