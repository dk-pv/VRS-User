"use client";
import { useEffect, useState } from "react";
import AboutSection from "@/components/sections/AboutSection";
import TeamSection from "@/components/sections/TeamSection";
import PageLoader from "@/components/common/PageLoader";

export default function AboutPage() {
  // PageLoader is a fixed full-screen overlay, so page content renders (and
  // server-renders) underneath it instead of being gated behind `loading`.
  // 1300ms preserves the previous 800ms + 500ms loader timing exactly.
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowLoader(false), 1300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <PageLoader visible={showLoader} />

      <main className="flex-1 pt-10 text-white">
        <AboutSection />
        <TeamSection />
      </main>
    </>
  );
}
