"use client";

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

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Pins */}
          <div className="relative h-[420px]">

            {/* WA */}
            <div className="absolute left-[18%] top-[65%] animate-[float_3s_ease-in-out_infinite]">
              <div className="pin"></div>
            </div>

            {/* NT */}
            <div className="absolute left-[48%] top-[25%] animate-[float_3.5s_ease-in-out_infinite]">
              <div className="pin"></div>
            </div>

            {/* SA */}
            <div className="absolute left-[45%] top-[70%] animate-[float_3.2s_ease-in-out_infinite]">
              <div className="pin"></div>
            </div>

            {/* VIC */}
            <div className="absolute left-[55%] top-[80%] animate-[float_3.8s_ease-in-out_infinite]">
              <div className="pin"></div>
            </div>

            {/* NSW */}
            <div className="absolute left-[75%] top-[60%] animate-[float_3.4s_ease-in-out_infinite]">
              <div className="pin"></div>
            </div>

            {/* QLD */}
            <div className="absolute left-[82%] top-[35%] animate-[float_3.7s_ease-in-out_infinite]">
              <div className="pin"></div>
            </div>

            {/* TAS */}
            <div className="absolute left-[60%] top-[90%] animate-[float_4s_ease-in-out_infinite]">
              <div className="pin"></div>
            </div>

            {/* Central */}
            <div className="absolute left-[55%] top-[50%] animate-[float_3.3s_ease-in-out_infinite]">
              <div className="pin"></div>
            </div>

          </div>
        </div>

      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent"></div>

    </section>
  );
}