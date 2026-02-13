"use client";

import { useEffect, useRef } from "react";
import { MapPin, CheckCircle } from "lucide-react";

const securedProperties = [
  {
    title: "Grand Mansion Estate",
    location: "Brisbane, QLD",
    image:
      "https://cdn.home-designing.com/wp-content/uploads/2023/04/modern-houses.jpg",
  },
  {
    title: "Contemporary Residence",
    location: "Adelaide, SA",
    image:
      "https://cdn.home-designing.com/wp-content/uploads/2023/04/big-modern-houses.jpg",
  },
  {
    title: "Luxury Beach Villa",
    location: "Gold Coast, QLD",
    image:
      "https://cdn.home-designing.com/wp-content/uploads/2023/04/modern-beach-houses.webp",
  },
  {
    title: "Modern Hillside Retreat",
    location: "Melbourne, VIC",
    image:
      "https://cdn.home-designing.com/wp-content/uploads/2023/04/cool-modern-houses.jpg",
  },
  {
    title: "Hillside House",
    location: "Jakarta, ID",
    image:
      "https://cdn.home-designing.com/wp-content/uploads/2023/04/Hillside-House-In-Indonesia.jpg",
  },
  {
    title: "Vietnam Luxury Villa",
    location: "Hanoi, VN",
    image:
      "https://cdn.home-designing.com/wp-content/uploads/2023/04/Luxury-Vietnamese-Vill.jpg",
  },
  {
    title: "Rammed Earth Residence",
    location: "Perth, WA",
    image:
      "https://cdn.home-designing.com/wp-content/uploads/2023/04/rammed-earth-house.jpg",
  },
  {
    title: "Geometric House",
    location: "Sydney, NSW",
    image:
      "https://cdn.home-designing.com/wp-content/uploads/2023/04/Geometric-House-1.jpg",
  },
];

export default function SecuredProperties() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const pauseTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isPausedRef = useRef(false);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const speed = 0.5;

    const animate = () => {
      if (!isPausedRef.current) {
        container.scrollLeft += speed;

        if (
          container.scrollLeft + container.clientWidth >=
          container.scrollWidth
        ) {
          container.scrollLeft = 0;
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    const pauseScroll = () => {
      isPausedRef.current = true;

      // ✅ FIX: safe clear
      if (pauseTimeoutRef.current) {
        clearTimeout(pauseTimeoutRef.current);
      }

      pauseTimeoutRef.current = setTimeout(() => {
        isPausedRef.current = false;
      }, 2000);
    };

    container.addEventListener("wheel", pauseScroll);
    container.addEventListener("touchstart", pauseScroll);
    container.addEventListener("mousedown", pauseScroll);

    return () => {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }

      if (pauseTimeoutRef.current) {
        clearTimeout(pauseTimeoutRef.current);
      }

      container.removeEventListener("wheel", pauseScroll);
      container.removeEventListener("touchstart", pauseScroll);
      container.removeEventListener("mousedown", pauseScroll);
    };
  }, []);

  return (
    <section className="bg-black py-24">
      <div className="w-full px-10">
        <div className="text-center mb-16">
          <div className="w-16 h-[3px] bg-white mx-auto mb-4"></div>
          <h2 className="text-4xl md:text-5xl font-semibold text-white">
            Secured Properties
          </h2>
          <p className="text-gray-400 mt-3">
            Successfully secured for our valued clients
          </p>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-10 overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing"
        >
          {securedProperties.map((property, index) => (
            <div
              key={index}
              className="relative min-w-[500px] h-[500px] rounded-3xl overflow-hidden group flex-shrink-0"
            >
              <div
                className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition duration-700"
                style={{ backgroundImage: `url(${property.image})` }}
              ></div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

              <div className="absolute top-6 right-6 bg-white text-black px-5 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                <CheckCircle size={16} />
                Secured
              </div>

              <div className="absolute bottom-8 left-8 text-white">
                <h3 className="text-2xl font-semibold">
                  {property.title}
                </h3>
                <div className="flex items-center gap-2 mt-2 text-gray-300">
                  <MapPin size={16} />
                  {property.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
