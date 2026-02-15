import AboutSection from "@/components/sections/AboutSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import Navbar from "@/components/layout/Navbar";
export default function AboutPage() {       
    return (
        <main className=" bg-black text-white min-h-screen">
            <Navbar />
          <AboutSection />
          <TestimonialsSection />
        </main>
      );
}