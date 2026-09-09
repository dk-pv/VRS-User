"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import PageLoader from "@/components/common/PageLoader";

// Message posted by the same-origin /contact/thank-you bridge page after the
// Calzol CRM form redirects to it on a successful submission.
const SUBMISSION_MESSAGE_TYPE = "vrs:contact-submitted";

export default function ContactPage() {
  const lineRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  // ✅ loader states
  const [loading, setLoading] = useState(true);
  const [showLoader, setShowLoader] = useState(true);

  // ✅ CRM submission state — set only via the validated bridge message below
  const [submitted, setSubmitted] = useState(false);
  const submittedRef = useRef(false);

  // ================= HEADER LINE =================
  useEffect(() => {
    setMounted(true);

    const el = lineRef.current;
    if (!el) return;

    el.style.width = "0px";

    const timer = setTimeout(() => {
      el.style.transition = "width 0.9s cubic-bezier(0.22, 1, 0.36, 1)";
      el.style.width = "60px";
    }, 120);

    return () => clearTimeout(timer);
  }, []);

  // ================= SCROLL ANIMATION =================
  useEffect(() => {
    const el = formRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.25 },
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  // ================= LOADER EXIT =================
  useEffect(() => {
    if (!loading) {
      const t1 = setTimeout(() => setShowLoader(false), 400);
      return () => clearTimeout(t1);
    }
  }, [loading]);

  // ✅ fallback (never stuck)
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
      setShowLoader(false);
    }, 6000);

    return () => clearTimeout(timeout);
  }, []);

  // ================= CRM SUBMISSION BRIDGE =================
  // The CRM form is a cross-origin iframe, so success cannot be observed
  // directly. On successful submission the CRM redirects the iframe to our
  // same-origin /contact/thank-you bridge, which posts a message to this
  // page. Origin and message type are strictly validated; anything else is
  // ignored, and the handler can only ever fire once.
  useEffect(() => {
    const onMessage = (event: MessageEvent) => {
      if (event.origin !== window.location.origin) return;

      const data = event.data as { type?: unknown } | null;
      if (!data || data.type !== SUBMISSION_MESSAGE_TYPE) return;

      if (submittedRef.current) return;
      submittedRef.current = true;

      setSubmitted(true);

      // Deliberately a bare event: no parameters, no form data, no PII.
      window.gtag?.("event", "generate_lead");
    };

    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  return (
    <>
      {/* ✅ Loader */}
      <PageLoader visible={showLoader} />

      <main className="pt-6  text-white min-h-screen relative overflow-hidden">
        {/* BACKGROUND */}
        <div className="absolute inset-0 pointer-events-none">
          {/* GOLD GLOW */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(231,200,156,0.08),transparent_60%)]" />

          {/* GRID (optional) */}
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />
        </div>

        <section className="relative py-16">
          {/* HEADER */}
          <div className="text-center mb-14 px-6">
            <div
              ref={lineRef}
              className="h-[1px] bg-gradient-to-r from-transparent via-[var(--primary-gold)] to-transparent mx-auto mb-6"
              style={{ width: 0 }}
            />

            <p className="text-[10px] tracking-[0.4em] uppercase text-[var(--primary-gold)]/70 mb-3 font-light">
              Premium Property Investment
            </p>

            <h1 className="text-3xl md:text-5xl font-light tracking-[0.12em] mb-4">
              Get In Touch
            </h1>

            <p className="text-gray-500 text-xs tracking-[0.25em] uppercase">
              Let's begin the conversation
            </p>
          </div>

          {/* FORM */}
          {/* Width tracks the CRM form's own ~480px layout (set in Calzol) so the
              embed reads as one centred component instead of a small form adrift
              in a much wider VRS container. */}
          <div className="max-w-xl mx-auto px-4">
            <div
              ref={formRef}
              className={`relative group transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                visible
                  ? "opacity-100 translate-y-0 scale-100 blur-0"
                  : "opacity-0 translate-y-16 scale-[0.96] blur-sm"
              }`}
            >
              {/* VRS frame — rendered only around the thank-you card. The CRM
                  form supplies its own card (background + border), so framing the
                  iframe as well produced a second, larger box around a smaller
                  form, with dead space on all four sides. */}
              {submitted && (
                <>
                  {/* CORNERS */}
                  {[
                    "top-0 left-0 border-t border-l",
                    "top-0 right-0 border-t border-r",
                    "bottom-0 left-0 border-b border-l",
                    "bottom-0 right-0 border-b border-r",
                  ].map((pos) => (
                    <div
                      key={pos}
                      className={`absolute ${pos} w-6 h-6 border-[var(--primary-gold)]/40 transition duration-500 ${
                        visible ? "opacity-100 scale-100" : "opacity-0 scale-75"
                      }`}
                    />
                  ))}

                  {/* GLOW */}
                  <div
                    className={`absolute -inset-2 rounded-2xl bg-[var(--primary-gold)]/10 blur-2xl transition-all duration-1000 ${
                      visible ? "opacity-60" : "opacity-0"
                    }`}
                  />
                </>
              )}

              {/* CARD (thank-you only) / bare embed area (form) */}
              <div
                className={
                  submitted
                    ? "rounded-2xl overflow-hidden relative border border-[var(--card-border)]"
                    : "relative w-full max-w-full overflow-hidden"
                }
              >
                {submitted ? (
                  /* ============ VRS THANK-YOU (after confirmed submission) ============ */
                  <div className="bg-[var(--card-bg)] px-6 py-16 md:py-20 text-center">
                    <CheckCircle
                      size={44}
                      strokeWidth={1.5}
                      className="mx-auto text-[var(--primary-gold)]"
                    />

                    <h2 className="mt-6 text-2xl md:text-3xl font-medium text-white tracking-[-0.01em]">
                      Thank You
                    </h2>

                    <p className="mt-4 text-gray-400 text-sm md:text-base max-w-md mx-auto leading-relaxed tracking-wide">
                      Your enquiry has been received. Our team will review it
                      and be in touch with you shortly.
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
                ) : (
                  mounted && (
                    <iframe
                      src="https://heart.calzolconnect.com/form/contact-enquiry"
                      // The CRM exposes no auto-resize/height postMessage, so
                      // these are fixed heights measured from the rendered
                      // form. Narrow screens wrap labels and validation lines
                      // onto extra rows, so they get progressively more room
                      // rather than clipping the last fields. `block w-full`
                      // removes the inline-frame baseline gap and keeps the
                      // embed inside the column on every breakpoint. Retune
                      // here if fields change in Calzol.
                      className="block w-full max-w-full h-[660px] sm:h-[580px] md:h-[500px]"
                      style={{ border: "none" }}
                      title="Enquiry Form"
                      loading="lazy"
                      onLoad={() => setLoading(false)} // ✅ KEY
                    />
                  )
                )}
              </div>
            </div>

            {/* FOOT */}
            <div className="mt-8 text-center">
              <p className="text-gray-500 text-[11px] tracking-[0.25em] uppercase">
                Your enquiry is handled with complete discretion
              </p>
              <div className="mt-2 w-16 h-[1px] mx-auto bg-[var(--primary-gold)]/30" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
