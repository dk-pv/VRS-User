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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000); // slower = luxury feel
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  return (
    <section className="relative bg-black py-24 overflow-hidden">

      {/* Soft fade from previous section */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black to-transparent"></div>

      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Heading */}
        <div className="mb-16">
          <div className="w-12 h-[2px] bg-yellow-500 mx-auto mb-4"></div>
          <h2 className="text-3xl md:text-4xl font-medium text-white tracking-wide">
            Property Showcase
          </h2>
          <p className="text-gray-400 mt-2 text-sm">
            Explore our exclusive property gallery
          </p>
        </div>

        {/* Slider */}
        <div className="relative rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.6)]">

          {images.map((img, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-[2000ms] ${
                index === current
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-105"
              }`}
              style={{
                backgroundImage: `url(${img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          ))}

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/40"></div>

          {/* Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md border border-white/10 p-3 rounded-full hover:bg-yellow-500 hover:text-black transition-all duration-300"
          >
            <ChevronLeft size={20} className="text-white" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md border border-white/10 p-3 rounded-full hover:bg-yellow-500 hover:text-black transition-all duration-300"
          >
            <ChevronRight size={20} className="text-white" />
          </button>

          {/* Height */}
          <div className="h-[420px] md:h-[520px]"></div>
        </div>

      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
}
