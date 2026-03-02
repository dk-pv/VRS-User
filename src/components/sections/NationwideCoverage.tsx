"use client";

import Image from "next/image";

const states = [
  { name: "Western Australia", short: "WA", left: "18%", top: "60%" },
  { name: "Northern Territory", short: "NT", left: "45%", top: "28%" },
  { name: "South Australia", short: "SA", left: "50%", top: "70%" },
  { name: "Queensland", short: "QLD", left: "82%", top: "45%" },
  { name: "New South Wales", short: "NSW", left: "78%", top: "65%" },
  { name: "Victoria", short: "VIC", left: "72%", top: "82%" },
  { name: "Tasmania", short: "TAS", left: "73%", top: "94%" },
];

export default function NationwideCoverage() {
  return (
    <section className="relative bg-black py-12 md:py-14 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-6">
          <div className="w-8 h-[2px] bg-yellow-500 mx-auto mb-2" />
          <h2 className="text-lg md:text-2xl font-medium text-white">
            Nationwide Coverage
          </h2>
          <p className="text-gray-400 mt-1 text-xs">
            Our presence across major Australian cities
          </p>
        </div>

        {/* Map Wrapper */}
        <div className="relative w-full max-w-3xl mx-auto rounded-xl overflow-hidden border border-white/10 shadow-[0_10px_35px_rgba(0,0,0,0.5)]">
          <div className="relative w-full aspect-[16/10] bg-black">
            <Image
              src="https://images.pexels.com/photos/35884953/pexels-photo-35884953.jpeg"
              alt="Australia Map"
              fill
              className="object-cover"
              priority
            />

            <div className="absolute inset-0 bg-black/35" />

            {states.map((state, index) => (
              <div
                key={index}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: state.left, top: state.top }}
              >
                <div className="relative flex flex-col items-center">
                  <span className="hidden md:block absolute h-4 w-4 rounded-full bg-yellow-500/30 animate-ping" />

                  <span className="relative h-3 w-3 rounded-full bg-yellow-500 shadow-sm border border-white/40" />

                  <div className="mt-1.5 px-2 py-0.5 text-[9px] md:text-[10px] bg-black/85 text-white rounded-full border border-white/10 backdrop-blur-md whitespace-nowrap">
                    <span className="md:hidden">{state.short}</span>
                    <span className="hidden md:inline">{state.name}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}