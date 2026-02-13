"use client";

import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

const images = [
  "https://cdn.home-designing.com/wp-content/uploads/2023/04/modern-houses.jpg",
  "https://cdn.home-designing.com/wp-content/uploads/2023/04/big-modern-houses.jpg",
  "https://cdn.home-designing.com/wp-content/uploads/2023/04/modern-beach-houses.webp",
  "https://cdn.home-designing.com/wp-content/uploads/2023/04/cool-modern-houses.jpg",
  "https://cdn.home-designing.com/wp-content/uploads/2023/04/Hillside-House-In-Indonesia.jpg",
  "https://cdn.home-designing.com/wp-content/uploads/2023/04/Luxury-Vietnamese-Vill.jpg",
  "https://cdn.home-designing.com/wp-content/uploads/2023/04/rammed-earth-house.jpg",
  "https://cdn.home-designing.com/wp-content/uploads/2023/04/Geometric-House-1.jpg",
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 1000); // 1 second

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      
      {/* Background Images */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        
        {/* Top Line */}
        <div className="w-16 h-[3px] bg-white mb-6"></div>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-light leading-tight max-w-5xl">
          Your Trusted Partner in <br />
          <span className="text-yellow-500 font-semibold">
            Luxury Real Estate Investment
          </span>
        </h1>

        {/* Sub Text */}
        <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl">
          Discover premium investment opportunities across Australia's most sought-after locations
        </p>

        {/* Buttons */}
        <div className="mt-8 flex gap-6 flex-wrap justify-center">
          <button className="bg-yellow-500 text-black px-8 py-3 rounded-md font-semibold hover:bg-yellow-400 transition">
            Explore Properties
          </button>

          <button className="border border-yellow-500 text-yellow-500 px-8 py-3 rounded-md font-semibold hover:bg-yellow-500 hover:text-black transition">
            Free Consultation
          </button>
        </div>

        {/* Bottom Scroll Arrow */}
        <div className="absolute bottom-20 animate-bounce">
          <ChevronDown size={30} />
        </div>

        {/* Dots Indicator */}
        <div className="absolute bottom-8 flex gap-3">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === current
                  ? "bg-yellow-500"
                  : "bg-gray-400/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
