import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
export default function ReviewPage() {
  return (
    <main className=" bg-black text-white min-h-screen">
      <Navbar />
      <TestimonialsSection/>
      <Footer />
    </main>
  );
}
