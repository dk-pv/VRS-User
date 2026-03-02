import SecuredProperties from "@/components/sections/SecuredProperties";
import PropertyShowcase from "@/components/sections/WebinarSection";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function PropertiesPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      
      <Navbar />

      {/* Content Area */}
      <main className="flex-1 pt-24">
        <SecuredProperties />
        <PropertyShowcase />
      </main>

      <Footer />
    </div>
  );
}