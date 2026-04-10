"use client";

import { useEffect, useState } from "react";
import AboutSection from "@/components/sections/AboutSection";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import TeamSection from "@/components/sections/TeamSection";
import PageLoader from "@/components/common/PageLoader";

export default function AboutPage() {
  const [loading, setLoading] = useState(true);
  const [showLoader, setShowLoader] = useState(true);

  // ✅ simulate page ready (since no API/media hook here)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800); // small delay for premium feel

    return () => clearTimeout(timer);
  }, []);

  // ✅ smooth fade out
  useEffect(() => {
    if (!loading) {
      const t = setTimeout(() => {
        setShowLoader(false);
      }, 500); // match loader animation

      return () => clearTimeout(t);
    }
  }, [loading]);

  return (
    <>
      {/* ✅ Loader */}
      <PageLoader visible={showLoader} />

      {!loading && (
        <div className="bg-[var(--background)] text-white min-h-screen flex flex-col">
          <Navbar />

          {/* ================= ABOUT ================= */}
          <main className="flex-1 pt-10">
            <AboutSection />
            <TeamSection />
          </main>

          <Footer />
        </div>
      )}
    </>
  );
}
