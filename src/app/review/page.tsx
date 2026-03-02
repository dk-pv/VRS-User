import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import TestimonialsSection from "@/components/sections/TestimonialsSection";

export default function ReviewPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      
      <Navbar />

      <main className="flex-1 pt-24">
        <TestimonialsSection />
      </main>

      <Footer />

    </div>
  );
}