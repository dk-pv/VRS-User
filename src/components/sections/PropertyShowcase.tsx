"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function PropertyShowcase() {
  const API = process.env.NEXT_PUBLIC_API_BASE_URL;

  const [images, setImages] = useState<string[]>([]);
  const [current, setCurrent] = useState(0);

  // Fetch Images
  useEffect(() => {
    const fetchImages = async () => {
      const res = await fetch(`${API}/api/property-showcase`);
      const data = await res.json();
      setImages(data.images || []);
    };

    if (API) fetchImages();
  }, [API]);

  // Auto slide
  useEffect(() => {
    if (images.length === 0) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images]);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);

  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  if (images.length === 0) return null;

  return (
    <section className="relative bg-black py-24 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black to-transparent"></div>

      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="mb-16">
          <div className="w-12 h-[2px] bg-yellow-500 mx-auto mb-4"></div>
          <h2 className="text-3xl md:text-4xl font-medium text-white tracking-wide">
            Property Showcase
          </h2>
          <p className="text-gray-400 mt-2 text-sm">
            Explore our exclusive property gallery
          </p>
        </div>

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

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/40"></div>

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

          <div className="h-[420px] md:h-[520px]"></div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
}
