import SecuredProperties from "@/components/sections/SecuredProperties";
import PropertyShowcase from "@/components/sections/PropertyShowcase";
import Navbar from "@/components/layout/Navbar";
export default function PropertiesPage() {
  return (
    <main className=" bg-black text-white min-h-screen">
      <Navbar />
      <SecuredProperties />
      <PropertyShowcase />
    </main>
  );
}
