// "use client";

// const states = [
//   { name: "Western Australia", short: "WA", left: "23%", top: "63%" },
//   { name: "Northern Territory", short: "NT", left: "54%", top: "38%" },
//   { name: "South Australia", short: "SA", left: "50%", top: "72%" },
//   { name: "Queensland", short: "QLD", left: "84%", top: "45%" },
//   { name: "New South Wales", short: "NSW", left: "78%", top: "60%" },
//   { name: "Victoria", short: "VIC", left: "65%", top: "80%" },
//   { name: "Tasmania", short: "TAS", left: "68%", top: "92%" },
//   { name: "Australian Capital Territory", short: "ACT", left: "76%", top: "66%" },
// ];

// export default function NationwideCoverage() {
//   return (
//     <section className="relative bg-black py-24 overflow-hidden">

//       {/* Top Fade */}
//       <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black to-transparent"></div>

//       <div className="max-w-6xl mx-auto px-6">

//         {/* Heading */}
//         <div className="text-center mb-14">
//           <div className="w-12 h-[2px] bg-yellow-500 mx-auto mb-4"></div>
//           <h2 className="text-3xl md:text-4xl font-medium text-white">
//             Nationwide Coverage
//           </h2>
//           <p className="text-gray-400 mt-3 text-sm">
//             Our presence across major Australian cities
//           </p>
//         </div>

//         {/* Map Container */}
//         <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.6)]">

//           {/* Map Background */}
//           <div
//             className="absolute inset-0 bg-cover bg-center"
//             style={{
//               backgroundImage:
//                 "url(https://images.pexels.com/photos/35884953/pexels-photo-35884953.jpeg)",
//             }}
//           ></div>

//           {/* Dark Overlay */}
//           <div className="absolute inset-0 bg-black/40"></div>

//           {/* Pins */}
//           <div className="relative h-[420px]">
//             {states.map((state, index) => (
//               <div
//                 key={index}
//                 className="absolute -translate-x-1/2 -translate-y-1/2"
//                 style={{ left: state.left, top: state.top }}
//               >
//                 <div className="relative flex flex-col items-center">

//                   {/* Pulse Ring */}
//                   <span className="absolute h-6 w-6 rounded-full bg-yellow-500/30 animate-ping"></span>

//                   {/* Dot */}
//                   <span className="relative h-4 w-4 rounded-full bg-yellow-500 shadow-lg shadow-yellow-500/60 border border-white/40"></span>

//                   {/* Label */}
//                   <div className="mt-2 px-3 py-1 text-xs bg-black/85 text-white rounded-full border border-white/10 backdrop-blur-md whitespace-nowrap shadow-lg">
//                     {state.name}
//                   </div>

//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//       </div>

//       {/* Bottom Fade */}
//       <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent"></div>
//     </section>
//   );
// }


"use client";

import Image from "next/image";

const states = [
  { name: "Western Australia", short: "WA", left: "23%", top: "63%" },
  { name: "Northern Territory", short: "NT", left: "54%", top: "38%" },
  { name: "South Australia", short: "SA", left: "50%", top: "72%" },
  { name: "Queensland", short: "QLD", left: "84%", top: "45%" },
  { name: "New South Wales", short: "NSW", left: "78%", top: "60%" },
  { name: "Victoria", short: "VIC", left: "65%", top: "80%" },
  { name: "Tasmania", short: "TAS", left: "68%", top: "92%" },
  { name: "Australian Capital Territory", short: "ACT", left: "76%", top: "66%" },
];

export default function NationwideCoverage() {
  return (
    <section className="relative bg-black py-20 md:py-24 overflow-hidden">
      {/* Top Fade */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black to-transparent" />

      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Heading */}
        <div className="text-center mb-10 md:mb-14">
          <div className="w-12 h-[2px] bg-yellow-500 mx-auto mb-4" />
          <h2 className="text-2xl md:text-4xl font-medium text-white">
            Nationwide Coverage
          </h2>
          <p className="text-gray-400 mt-3 text-xs md:text-sm">
            Our presence across major Australian cities
          </p>
        </div>

        {/* Map Wrapper */}
        <div className="relative w-full max-w-5xl mx-auto rounded-3xl overflow-hidden border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.6)]">

          {/* 🔥 Fixed Aspect Ratio for Proper Scaling */}
          <div className="relative w-full aspect-[16/10]">

            {/* Map Image */}
            <Image
              src="https://images.pexels.com/photos/35884953/pexels-photo-35884953.jpeg"
              alt="Australia Map"
              fill
              className="object-cover"
              priority
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40" />

            {/* Pins */}
            {states.map((state, index) => (
              <div
                key={index}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: state.left, top: state.top }}
              >
                <div className="relative flex flex-col items-center group">

                  {/* Pulse (Desktop Only) */}
                  <span className="hidden md:block absolute h-6 w-6 rounded-full bg-yellow-500/30 animate-ping" />

                  {/* Dot */}
                  <span className="relative h-3 w-3 md:h-4 md:w-4 rounded-full bg-yellow-500 shadow-lg shadow-yellow-500/60 border border-white/40" />

                  {/* Label */}
                  <div className="mt-2 px-2 md:px-3 py-1 text-[10px] md:text-xs bg-black/85 text-white rounded-full border border-white/10 backdrop-blur-md whitespace-nowrap shadow-lg">
                    <span className="md:hidden">{state.short}</span>
                    <span className="hidden md:inline">{state.name}</span>
                  </div>

                </div>
              </div>
            ))}

          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}