import { Metadata } from "next";

// This segment deliberately lives OUTSIDE the (public) route group so the
// bridge renders without Navbar/Footer chrome inside the CRM iframe, and so
// the root title template ("%s | VRS Real Invest") applies again (the
// /contact segment's plain-string title would otherwise reset it).
export const metadata: Metadata = {
  title: "Thank You",
  description:
    "Your enquiry has been received by VRS Real Invest. Our team will be in touch with you shortly.",

  // Post-submission bridge/confirmation page — never index it. No canonical
  // is emitted here (the root layout defines none to inherit).
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
