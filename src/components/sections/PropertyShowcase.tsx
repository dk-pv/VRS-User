// "use client";

// import { useState } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// const images = [
//   "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
//   "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
//   "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde",
//   "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3",
//   "https://images.unsplash.com/photo-1600607688969-a5bfcd646154",
// ];

// export default function PropertyShowcase() {
//   const [current, setCurrent] = useState(0);

//   const nextSlide = () => {
//     setCurrent((prev) => (prev + 1) % images.length);
//   };

//   const prevSlide = () => {
//     setCurrent((prev) =>
//       prev === 0 ? images.length - 1 : prev - 1
//     );
//   };

//   return (
//     <section className="bg-black py-28">
//       <div className="max-w-6xl mx-auto px-6 text-center">
        
//         {/* Header */}
//         <div className="mb-16">
//           <div className="w-16 h-[3px] bg-white mx-auto mb-4"></div>
//           <h2 className="text-4xl md:text-5xl font-semibold text-white">
//             Property Showcase
//           </h2>
//           <p className="text-gray-400 mt-3">
//             Explore our exclusive property gallery
//           </p>
//         </div>

//         {/* Slider */}
//         <div className="relative rounded-3xl overflow-hidden group">
          
//           {/* Images */}
//           {images.map((img, index) => (
//             <div
//               key={index}
//               className={`absolute inset-0 transition-opacity duration-700 ${
//                 index === current ? "opacity-100" : "opacity-0"
//               }`}
//               style={{
//                 backgroundImage: `url(${img})`,
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//               }}
//             />
//           ))}

//           {/* Overlay */}
//           <div className="absolute inset-0 bg-black/30"></div>

//           {/* Navigation Buttons */}
//           <button
//             onClick={prevSlide}
//             className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-md p-3 rounded-full transition"
//           >
//             <ChevronLeft size={24} className="text-white" />
//           </button>

//           <button
//             onClick={nextSlide}
//             className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-md p-3 rounded-full transition"
//           >
//             <ChevronRight size={24} className="text-white" />
//           </button>

//           {/* Bottom Dots */}
//           <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
//             {images.map((_, index) => (
//               <div
//                 key={index}
//                 onClick={() => setCurrent(index)}
//                 className={`w-3 h-3 rounded-full cursor-pointer ${
//                   index === current
//                     ? "bg-white"
//                     : "bg-white/40"
//                 }`}
//               />
//             ))}
//           </div>

//           {/* Height */}
//           <div className="h-[450px] md:h-[550px]"></div>
//         </div>
//       </div>
//     </section>
//   );
// }



"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
  "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde",
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3",
  "https://images.unsplash.com/photo-1600607688969-a5bfcd646154",
];

export default function PropertyShowcase() {
  const [current, setCurrent] = useState(0);

  // 🔥 Auto Slide Every 3 Seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000); // 3 seconds

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <section className="bg-black py-28">
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        {/* Header */}
        <div className="mb-16">
          <div className="w-16 h-[3px] bg-white mx-auto mb-4"></div>
          <h2 className="text-4xl md:text-5xl font-semibold text-white">
            Property Showcase
          </h2>
          <p className="text-gray-400 mt-3">
            Explore our exclusive property gallery
          </p>
        </div>

        {/* Slider */}
        <div className="relative rounded-3xl overflow-hidden">
          
          {/* Images */}
          {images.map((img, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-700 ${
                index === current ? "opacity-100" : "opacity-0"
              }`}
              style={{
                backgroundImage: `url(${img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          ))}

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/30"></div>

          {/* Left Button */}
          <button
            onClick={prevSlide}
            className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-md p-3 rounded-full transition"
          >
            <ChevronLeft size={24} className="text-white" />
          </button>

          {/* Right Button */}
          <button
            onClick={nextSlide}
            className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-md p-3 rounded-full transition"
          >
            <ChevronRight size={24} className="text-white" />
          </button>

          {/* Bottom Dots */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
            {images.map((_, index) => (
              <div
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full cursor-pointer ${
                  index === current
                    ? "bg-white"
                    : "bg-white/40"
                }`}
              />
            ))}
          </div>

          {/* Height Spacer */}
          <div className="h-[450px] md:h-[550px]"></div>
        </div>
      </div>
    </section>
  );
}
