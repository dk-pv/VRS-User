"use client";

import { useState } from "react";
import HeroSection from "@/components/sections/HeroSection";
import SecuredProperties from "@/components/sections/SecuredProperties";
import PropertyShowcase from "@/components/sections/WebinarSection";
import AboutSection from "@/components/sections/AboutSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import DiscoverVideoSection from "@/components/sections/DiscoverVideoSection";
import TeamSection from "@/components/sections/TeamSection";
import NationwideCoverage from "@/components/sections/NationwideCoverage";

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
          <NationwideCoverage />
          <TeamSection />
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
          <TeamSection />
          <TestimonialsSection />
        </>
      )}
    </>
  );
}
