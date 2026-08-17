"use client";

import { useEffect, useState } from "react";
import WebinarSection from "@/components/sections/WebinarSection";
import PageLoader from "@/components/common/PageLoader";

export default function WebinarPage() {
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
      {/* LOADER */}
      <PageLoader visible={showLoader} />

      {/* PAGE CONTENT */}
      <div className="min-h-screen text-white flex flex-col">
        <main className="flex-1 pt-14 pb-10">
          <WebinarSection />
        </main>
      </div>
    </>
  );
}