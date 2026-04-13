"use client";

import SecuredProperties from "@/components/sections/SecuredProperties";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function PropertiesPage() {
  return (
    <div className="min-h-screen  text-white flex flex-col">
      <Navbar />

      {/* ================= HERO / HEADER ================= */}
      <section className="pt-28 pb-16 px-6 text-center relative overflow-hidden">
        {/* subtle glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(231,200,156,0.08),transparent_60%)] pointer-events-none" />

        <div className="relative max-w-4xl mx-auto">
          <div className="w-12 h-[2px] bg-[var(--primary-gold)] mx-auto mb-4" />

          <h1 className="text-3xl md:text-5xl font-medium tracking-tight">
            Premium Properties
          </h1>

          <p className="text-gray-400 mt-4 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Explore exclusive real estate opportunities secured for our clients
            across Australia. Carefully selected investments designed for
            long-term growth and financial freedom.
          </p>
        </div>
      </section>

      {/* ================= PROPERTIES ================= */}
      <main className="flex-1">
        <SecuredProperties />
      </main>

      {/* ================= CTA ================= */}
      <section className="px-6 py-14">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl p-8 md:p-12 shadow-xl">
            <h3 className="text-xl md:text-2xl font-medium mb-3">
              Looking for the Right Investment?
            </h3>

            <p className="text-gray-400 text-sm md:text-base mb-6 max-w-xl mx-auto">
              Speak with our experts and discover tailored property
              opportunities that match your goals.
            </p>

            <a
              href="https://learn.vrsrealinvest.com.au/web/lite/events/68b9e85ce4cad97bc9d8d657"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[var(--primary-gold)] text-[#221F1F] px-6 py-2.5 rounded-lg text-sm font-medium hover:opacity-90 transition"
            >
              Get Free Consultation
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
