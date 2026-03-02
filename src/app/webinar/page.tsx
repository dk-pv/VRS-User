import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WebinarSection from "@/components/sections/WebinarSection";

export default function WebinarPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      
      <Navbar />

      <main className="flex-1 pt-24">
        <WebinarSection />
      </main>

      <Footer />

    </div>
  );
}