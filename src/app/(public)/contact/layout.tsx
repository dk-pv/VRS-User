import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with VRS Real Invest to discuss your property investment goals and book a consultation with our buyer's agents.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Us | VRS Real Invest",
    description:
      "Get in touch with VRS Real Invest to discuss your property investment goals and book a consultation with our buyer's agents.",
    url: "https://vrsrealinvest.com.au/contact",
    siteName: "VRS Real Invest",
    locale: "en_AU",
    type: "website",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
