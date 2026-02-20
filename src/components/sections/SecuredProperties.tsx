

"use client";

import { useEffect, useRef, useState } from "react";
import { CheckCircle } from "lucide-react";
import axios from "axios";

interface SecuredProperty {
  _id: string;
  title: string;
  image: string;
}

export default function SecuredProperties() {
  const [securedProperties, setSecuredProperties] = useState<SecuredProperty[]>(
    [],
  );

  const scrollRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const pauseTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isPausedRef = useRef(false);

  // ✅ Fetch from backend
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/secured-properties`,
        );
        setSecuredProperties(res.data);
      } catch (error) {
        console.error("Error fetching secured properties:", error);
      }
    };

    fetchProperties();
  }, []);

  // ✅ Auto scroll animation (unchanged)
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const speed = 0.3;

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
  }, [securedProperties]);

  return (
    <section className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-12 h-[2px] bg-yellow-500 mx-auto mb-4"></div>
          <h2 className="text-3xl md:text-4xl font-medium text-white">
            Secured Properties
          </h2>
          <p className="text-gray-400 mt-2 text-sm">
            Successfully secured for our valued clients
          </p>
        </div>

        {/* Scroll Container */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing"
        >
          {securedProperties.map((property) => (
            <div
              key={property._id}
              className="relative min-w-[380px] md:min-w-[420px] h-[380px] rounded-2xl overflow-hidden group flex-shrink-0"
            >
              {/* Image */}
              <div
                className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition duration-700"
                style={{ backgroundImage: `url(${property.image})` }}
              ></div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

              {/* Badge */}
              <div className="absolute top-4 right-4 bg-white text-black px-4 py-1.5 rounded-full text-xs font-medium flex items-center gap-1">
                <CheckCircle size={14} />
                Secured
              </div>

              {/* Bottom Info */}
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-lg font-medium">{property.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
