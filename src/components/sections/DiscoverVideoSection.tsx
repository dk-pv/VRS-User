"use client";

import { PlayCircle } from "lucide-react";

export default function DiscoverVideoSection() {
  return (
    <div className="relative pt-16 border-t border-white/10">
      <div className="text-center mb-10">
        <div className="w-12 h-[2px] bg-yellow-500 mx-auto mb-4"></div>
        <h2 className="text-3xl md:text-4xl font-medium text-white">
          Discover VRS Real Invest
        </h2>
        <p className="text-gray-400 mt-2 text-sm">
          Watch our story and mission
        </p>
      </div>

      {/* Clickable Video Thumbnail */}
      <a
        href="https://www.youtube.com/watch?v=YOUR_VIDEO_ID"
        target="_blank"
        rel="noopener noreferrer"
        className="relative block max-w-4xl mx-auto rounded-3xl overflow-hidden border border-white/10 group"
      >
        <div
          className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition duration-700"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1600585154340-be6161a56a0c)",
          }}
        ></div>

        <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition"></div>

        <div className="relative h-[400px] flex items-center justify-center">
          <PlayCircle
            size={70}
            className="text-white opacity-80 group-hover:text-yellow-500 transition"
          />
        </div>
      </a>

      <p className="text-gray-400 mt-8 max-w-3xl mx-auto text-sm md:text-base text-center">
        Learn about our commitment to excellence, our proven track record,
        and how we help investors achieve their real estate investment goals
        across Australia.
      </p>
    </div>
  );
}
