"use client";

import AboutSection from "@/components/sections/AboutSection";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import TeamSection from "@/components/sections/TeamSection";

export default function AboutPage() {
  return (
    <div className="bg-[var(--background)] text-white min-h-screen flex flex-col">
      <Navbar />

      {/* ================= ABOUT ================= */}
      <main className="flex-1 pt-10">
        <AboutSection />
        <TeamSection />
      </main>

      <Footer />
    </div>
  );
}
