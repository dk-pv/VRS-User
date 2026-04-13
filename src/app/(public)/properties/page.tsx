import SecuredProperties from "@/components/sections/SecuredProperties";

export default function PropertiesPage() {
  return (
    <>
      {/* ================= PROPERTIES ================= */}
      <main className="pt-10">
        <SecuredProperties />
      </main>

      {/* ================= CTA ================= */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl p-8 md:p-12 shadow-xl">
            <h3 className="text-xl md:text-2xl font-medium text-white mb-3">
              Looking for the Right Investment?
            </h3>

            <p className="text-gray-400 text-sm md:text-base mb-6 max-w-xl mx-auto">
              Speak with our experts and discover tailored property
              opportunities that match your goals.
            </p>

            <a
              href="https://learn.vrsrealinvest.com.au/web/lite/events/68b9e85ce4cad97bc9d8d657"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[var(--primary-gold)] text-[#221F1F] px-6 py-2.5 rounded-lg text-sm font-medium hover:opacity-90 transition"
            >
              Get Free Consultation
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
