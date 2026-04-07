"use client";

import { useEffect, useState } from "react";
import PageLoader from "@/components/common/PageLoader";

import HeroSection from "@/components/sections/HeroSection";
import SecuredProperties from "@/components/sections/SecuredProperties";
import AboutSection from "@/components/sections/AboutSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import DiscoverVideoSection from "@/components/sections/DiscoverVideoSection";
import TeamSection from "@/components/sections/TeamSection";
import NationwideCoverage from "@/components/sections/NationwideCoverage";

export default function HomePage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200); // adjust delay if needed

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <PageLoader />;

  return (
    <>
      <HeroSection />
      <SecuredProperties />
      <DiscoverVideoSection />
      <NationwideCoverage />
      <TeamSection />
      <TestimonialsSection />
      <section className="py-14 px-6 bg-[var(--background)]">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl p-8 md:p-12 text-center shadow-xl">
            <h3 className="text-xl md:text-3xl text-white font-semibold mb-4">
              Ready to Start Your Investment Journey?
            </h3>

            <p className="text-gray-400 mb-6 text-sm md:text-base max-w-xl mx-auto">
              Partner with VRS Real Invest and secure premium real estate
              opportunities today.
            </p>

            <a
              href="https://learn.vrsrealinvest.com.au/web/lite/events/68b9e85ce4cad97bc9d8d657"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[var(--primary-gold)] text-[#221F1F] px-7 py-2.5 rounded-lg text-sm font-semibold hover:opacity-90 transition duration-300"
            >
              Get Free Consultation
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
