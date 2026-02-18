import AboutSection from "@/components/sections/AboutSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
export default function AboutPage() {       
    return (
        <main className=" bg-black text-white min-h-screen">
            <Navbar />
          <AboutSection />
          <TestimonialsSection />
          <Footer/>
        </main>
      );
}