"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WebinarSection from "@/components/sections/WebinarSection";

export default function WebinarPage() {
  return (
    <div className="min-h-screen  text-white flex flex-col">
      <Navbar />
      <main className="flex-1 pt-14 pb-10">
        <WebinarSection />
      </main>
      <Footer />
    </div>
  );
}
