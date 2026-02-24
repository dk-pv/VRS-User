"use client";
const cities = [
  { name: "Perth", left: "23%", top: "63%" },
  { name: "Adelaide", left: "50%", top: "72%" },
  { name: "Melbourne", left: "63%", top: "80%" },
  { name: "Hobart", left: "66%", top: "92%" },
  { name: "Canberra", left: "72%", top: "64%" },
  { name: "Sydney", left: "75%", top: "58%" },
  { name: "Gold Coast", left: "82%", top: "47%" },
  { name: "Brisbane", left: "82%", top: "43%" },
];
export default function NationwideCoverage() {
  return (
    <section className="relative bg-black py-24 overflow-hidden">
      
      {/* Top Fade */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black to-transparent"></div>

      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <div className="w-12 h-[2px] bg-yellow-500 mx-auto mb-4"></div>
          <h2 className="text-3xl md:text-4xl font-medium text-white">
            Nationwide Coverage
          </h2>
          <p className="text-gray-400 mt-3 text-sm">
            Our presence across major Australian cities
          </p>
        </div>

        {/* Map Container */}
        <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.6)]">

          {/* Map Background */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url(https://images.pexels.com/photos/35884953/pexels-photo-35884953.jpeg)",
            }}
          ></div>

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Pins */}
          <div className="relative h-[420px]">

            {cities.map((city, index) => (
              <div
                key={index}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: city.left, top: city.top }}
              >
                <div className="relative flex flex-col items-center">

                  {/* Pulse Ring */}
                  <span className="absolute h-6 w-6 rounded-full bg-yellow-500/30 animate-ping"></span>

                  {/* Dot */}
                  <span className="relative h-4 w-4 rounded-full bg-yellow-500 shadow-lg shadow-yellow-500/60 border border-white/40"></span>

                  {/* Label */}
                  <div className="mt-2 px-3 py-1 text-xs bg-black/85 text-white rounded-full border border-white/10 backdrop-blur-md whitespace-nowrap shadow-lg">
                    {city.name}
                  </div>

                </div>
              </div>
            ))}

          </div>
        </div>

      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
}