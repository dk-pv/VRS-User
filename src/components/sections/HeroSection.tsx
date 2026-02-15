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
    }, 4000); // slower = luxury

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[100vh] overflow-hidden">
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1500 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}

      {/* Softer Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <div className="w-12 h-[2px] bg-yellow-500 mb-6"></div>

        <h1 className="text-3xl md:text-5xl lg:text-6xl font-light leading-tight max-w-4xl tracking-wide">
          Your Trusted Partner in <br />
          <span className="text-yellow-500 font-medium">
            Luxury Real Estate Investment
          </span>
        </h1>

        <p className="mt-6 text-base md:text-lg text-gray-300 max-w-xl">
          Discover premium investment opportunities across Australia's most
          sought-after locations.
        </p>

        <div className="mt-8 flex gap-4 flex-wrap justify-center">
          <button className="bg-yellow-500 text-black px-6 py-2.5 text-sm rounded-sm font-medium hover:bg-yellow-400 transition">
            Explore Properties
          </button>

          <button className="border border-yellow-500 text-yellow-500 px-6 py-2.5 text-sm rounded-sm font-medium hover:bg-yellow-500 hover:text-black transition">
            Free Consultation
          </button>
        </div>

        <div className="absolute bottom-10 animate-bounce">
          <ChevronDown size={22} />
        </div>
      </div>
    </section>
  );
}
