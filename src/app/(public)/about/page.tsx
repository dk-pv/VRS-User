"use client";
import { useEffect, useState } from "react";
import AboutSection from "@/components/sections/AboutSection";
import TeamSection from "@/components/sections/TeamSection";
import PageLoader from "@/components/common/PageLoader";

export default function AboutPage() {
  const [loading, setLoading] = useState(true);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading) {
      const t = setTimeout(() => {
        setShowLoader(false);
      }, 500);

      return () => clearTimeout(t);
    }
  }, [loading]);

  return (
    <>
      <PageLoader visible={showLoader} />

      {!loading && (
        <>
          <main className="flex-1 pt-10 text-white">
            <AboutSection />
            <TeamSection />
          </main>
        </>
      )}
    </>
  );
}
