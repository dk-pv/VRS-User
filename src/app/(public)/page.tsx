// import HeroSection from "@/components/sections/HeroSection";
// import SecuredProperties from "@/components/sections/SecuredProperties";
// import PropertyShowcase from "@/components/sections/PropertyShowcase";
// import AboutSection from "@/components/sections/AboutSection";
// import TestimonialsSection from "@/components/sections/TestimonialsSection";

// export default function LandingPage() {
//   return (
//     <>
//       <HeroSection />
//       <SecuredProperties />
//       <PropertyShowcase />
//       <AboutSection />
//       <TestimonialsSection />
//     </>
//   );
// }



"use client";

import { useState } from "react";
import HeroSection from "@/components/sections/HeroSection";
import SecuredProperties from "@/components/sections/SecuredProperties";
import PropertyShowcase from "@/components/sections/PropertyShowcase";
import AboutSection from "@/components/sections/AboutSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";

export default function LandingPage() {
  const [activeSection, setActiveSection] = useState<"home" | "properties" | "about">("home");

  return (
    <>
      {/* You will pass setActiveSection to Navbar later */}

      {activeSection === "home" && (
        <>
          <HeroSection />
          <SecuredProperties />
          <PropertyShowcase />
          <AboutSection />
          <TestimonialsSection />
        </>
      )}

      {activeSection === "properties" && (
        <>
          <SecuredProperties />
          <PropertyShowcase />
        </>
      )}

      {activeSection === "about" && (
        <>
          <AboutSection />
          <TestimonialsSection />
        </>
      )}
    </>
  );
}
