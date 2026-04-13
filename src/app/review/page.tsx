"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import TestimonialsSection from "@/components/sections/TestimonialsSection";

export default function ReviewPage() {
  return (
    <div className="min-h-screen  text-white flex flex-col">
      <Navbar />
      <main className="flex-1 pt-18 pb-10">
        <TestimonialsSection />
      </main>

      <Footer />
    </div>
  );
}
