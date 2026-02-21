import SecuredProperties from "@/components/sections/SecuredProperties";
import PropertyShowcase from "@/components/sections/WebinarSection";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
export default function PropertiesPage() {
  return (
    <main className=" bg-black text-white min-h-screen">
      <Navbar />
      <SecuredProperties />
      <PropertyShowcase />
      <Footer/>
    </main>
  );
}
