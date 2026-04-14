"use client";

import { useEffect, useState } from "react";
import WebinarSection from "@/components/sections/WebinarSection";
import PageLoader from "@/components/common/PageLoader";

export default function WebinarPage() {
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
      {/* LOADER */}
      <PageLoader visible={showLoader} />

      {/* PAGE CONTENT */}
      {!loading && (
        <div className="min-h-screen text-white flex flex-col">
          <main className="flex-1 pt-14 pb-10">
            <WebinarSection />
          </main>
        </div>
      )}
    </>
  );
}