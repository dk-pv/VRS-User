"use client";

import { useEffect, useRef, useState } from "react";
import PageLoader from "@/components/common/PageLoader";

export default function ContactPage() {
  const lineRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  // ✅ loader states
  const [loading, setLoading] = useState(true);
  const [showLoader, setShowLoader] = useState(true);

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

  return (
    <>
      {/* ✅ Loader */}
      <PageLoader visible={showLoader} />

      <main className="pt-6 bg-[var(--background)] text-white min-h-screen relative overflow-hidden">
        {/* BACKGROUND */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(231,200,156,0.08),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent,rgba(0,0,0,0.6))]" />
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
          <div className="max-w-3xl mx-auto px-4">
            <div
              ref={formRef}
              className={`relative group transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                visible
                  ? "opacity-100 translate-y-0 scale-100 blur-0"
                  : "opacity-0 translate-y-16 scale-[0.96] blur-sm"
              }`}
            >
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

              {/* CARD */}
              <div className="rounded-2xl overflow-hidden relative border border-[var(--card-border)]">
                {mounted && (
                  <iframe
                    src="https://login.calzolconnect.com/widget/form/6935360ed20b3"
                    className="w-full h-[520px] md:h-[600px]"
                    style={{ border: "none" }}
                    title="Enquiry Form"
                    onLoad={() => setLoading(false)} // ✅ KEY
                  />
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
