"use client";
import { useEffect, useRef } from "react";

export default function ContactPage() {
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = lineRef.current;
    if (!el) return;
    el.style.width = "0px";
    const timer = setTimeout(() => {
      el.style.transition = "width 0.9s cubic-bezier(0.22, 1, 0.36, 1)";
      el.style.width = "60px";
    }, 120);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="pt-8 bg-[var(--background)] text-white min-h-screen relative overflow-hidden">

      {/* ===== PREMIUM BACKGROUND ===== */}
      <div className="absolute inset-0 pointer-events-none">
        {/* radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(231,200,156,0.08),transparent_60%)]" />
        
        {/* soft vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent,rgba(0,0,0,0.6))]" />

        {/* grid */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <section className="relative py-20">

        {/* ===== HEADER ===== */}
        <div className="text-center mb-20 px-6">

          <div
            ref={lineRef}
            className="h-[1px] bg-gradient-to-r from-transparent via-[var(--primary-gold)] to-transparent mx-auto mb-8"
            style={{ width: 0 }}
          />

          <p className="text-[10px] tracking-[0.4em] uppercase text-[var(--primary-gold)]/70 mb-4 font-light">
            Premium Property Investment
          </p>

          <h1 className="text-4xl md:text-6xl font-light tracking-[0.15em] mb-6">
            Get In Touch
          </h1>

          <div className="flex items-center justify-center gap-4">
            <div className="h-[1px] w-10 bg-white/10" />
            <p className="text-gray-500 text-xs tracking-[0.25em] uppercase">
              Let's begin the conversation
            </p>
            <div className="h-[1px] w-10 bg-white/10" />
          </div>
        </div>

        {/* ===== FORM ===== */}
        <div className="max-w-5xl mx-auto px-4 md:px-6">

          <div className="relative group">

            {/* ===== CORNER ACCENTS ===== */}
            {[
              "top-0 left-0 border-t border-l",
              "top-0 right-0 border-t border-r",
              "bottom-0 left-0 border-b border-l",
              "bottom-0 right-0 border-b border-r",
            ].map((pos, i) => (
              <div
                key={i}
                className={`absolute ${pos} w-8 h-8 border-[var(--primary-gold)]/40 transition group-hover:border-[var(--primary-gold)]`}
              />
            ))}

            {/* ===== SHIMMER EFFECT ===== */}
            <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
              <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(231,200,156,0.15),transparent)] opacity-0 group-hover:opacity-100 animate-[shine_3s_linear_infinite]" />
            </div>

            {/* ===== GLASS CARD ===== */}
            <div
              className="rounded-2xl overflow-hidden relative border border-[var(--card-border)] transition duration-500 group-hover:border-[var(--primary-gold)]/40"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.015) 100%)",
                boxShadow:
                  "0 0 0 1px rgba(231,200,156,0.12), 0 40px 100px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.06)",
                backdropFilter: "blur(14px)",
              }}
            >

              {/* GOLD TOP LINE */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[1px] w-2/3 bg-gradient-to-r from-transparent via-[var(--primary-gold)]/60 to-transparent" />

              <iframe
                src="https://login.calzolconnect.com/widget/form/6935360ed20b3"
                className="w-full h-[750px] md:h-[850px] block"
                style={{ border: "none" }}
                title="Enquiry Form"
              />
            </div>
          </div>

          {/* ===== TRUST NOTE ===== */}
          <div className="mt-10 text-center">
            <p className="text-gray-500 text-[11px] tracking-[0.25em] uppercase">
              Your enquiry is handled with complete discretion
            </p>

            {/* subtle gold underline */}
            <div className="mt-3 w-20 h-[1px] mx-auto bg-[var(--primary-gold)]/30" />
          </div>
        </div>
      </section>

      {/* ===== SHIMMER KEYFRAME ===== */}
      <style jsx>{`
        @keyframes shine {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>

    </main>
  );
}