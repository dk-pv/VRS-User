"use client";

import { useState } from "react";
import HeroSection from "@/components/sections/HeroSection";
import SecuredProperties from "@/components/sections/SecuredProperties";
import PropertyShowcase from "@/components/sections/PropertyShowcase";
import AboutSection from "@/components/sections/AboutSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import DiscoverVideoSection from "@/components/sections/DiscoverVideoSection";

export default function LandingPage() {
  const [activeSection, setActiveSection] = useState<
    "home" | "properties" | "about"
  >("home");

  return (
    <>
      {/* You will pass setActiveSection to Navbar later */}

      {activeSection === "home" && (
        <>
          <HeroSection />
          <SecuredProperties />
          <PropertyShowcase />
          <DiscoverVideoSection />
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
          <DiscoverVideoSection />
          <AboutSection />
          <TestimonialsSection />
        </>
      )}
    </>
  );
}
