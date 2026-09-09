"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

// Must match the type expected by the /contact page listener.
const SUBMISSION_MESSAGE_TYPE = "vrs:contact-submitted";

/**
 * Same-origin bridge for the Calzol CRM contact form.
 *
 * The CRM form (cross-origin iframe on /contact) is configured to redirect
 * here after a successful submission. Because this page shares the VRS
 * origin with the parent, it can reliably notify /contact via postMessage —
 * targeting our exact origin, never "*". The parent then swaps in its own
 * branded thank-you state and hides the iframe.
 *
 * Opened directly (no iframe), it expands to a full branded thank-you page.
 */
export default function ContactThankYouPage() {
  // Embedded-first: the server-rendered, pre-hydration state is the compact
  // confirmation, because inside the CRM iframe this page paints before any
  // JS runs. Only a confirmed top-level visit expands to the full page, so
  // the iframe can never flash a nested copy of the site.
  const [embedded, setEmbedded] = useState(true);

  useEffect(() => {
    if (window.parent !== window) {
      window.parent.postMessage(
        { type: SUBMISSION_MESSAGE_TYPE },
        window.location.origin,
      );
    } else {
      setEmbedded(false);
    }
  }, []);

  if (embedded) {
    // Shown inside the iframe until the parent swaps its UI — and it doubles
    // as the fallback if scripting fails in the parent, so it must read as a
    // complete confirmation on its own.
    return (
      <div className="min-h-screen bg-[var(--card-bg)] text-white flex items-center justify-center px-6 py-10 text-center">
        <div>
          <CheckCircle
            size={36}
            strokeWidth={1.5}
            className="mx-auto text-[var(--primary-gold)]"
          />
          <p className="mt-4 text-lg font-medium tracking-tight">Thank You</p>
          <p className="mt-2 text-gray-400 text-sm leading-relaxed tracking-wide">
            Your enquiry has been received.
          </p>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen vrs-bg text-white flex items-center justify-center px-6 py-28">
      <div className="max-w-xl w-full text-center">
        <div className="rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] px-6 py-16 md:py-20">
          <CheckCircle
            size={44}
            strokeWidth={1.5}
            className="mx-auto text-[var(--primary-gold)]"
          />

          <h1 className="mt-6 text-2xl md:text-3xl font-medium text-white tracking-[-0.01em]">
            Thank You
          </h1>

          <p className="mt-4 text-gray-400 text-sm md:text-base max-w-md mx-auto leading-relaxed tracking-wide">
            Your enquiry has been received. Our team will review it and be in
            touch with you shortly.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link
              href="/"
              className="inline-block bg-[var(--primary-gold)] text-[#221F1F] px-7 py-2.5 rounded-lg text-[11px] font-medium tracking-[0.18em] uppercase transition hover:opacity-90"
            >
              Back to Home
            </Link>
            <Link
              href="/properties"
              className="inline-block border border-[#E7C89C] text-[#E7C89C] px-7 py-2.5 rounded-lg text-[11px] font-medium tracking-[0.18em] uppercase transition hover:bg-[#E7C89C] hover:text-[#221F1F]"
            >
              View Properties
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
