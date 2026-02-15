"use client";

import { Calendar, MessageCircle } from "lucide-react";

export default function FloatingIcons() {
  return (
    <div className="fixed bottom-8 right-8 flex flex-col gap-5 z-[999]">

      {/* Calendar */}
      <button
        className="
        relative w-14 h-14 rounded-full 
        bg-gradient-to-br from-yellow-400 to-yellow-600 
        flex items-center justify-center
        shadow-[0_10px_30px_rgba(255,215,0,0.35)]
        hover:scale-110 hover:-translate-y-1
        transition-all duration-300
        animate-float
        "
      >
        {/* Glow Ring */}
        <span className="absolute inset-0 rounded-full bg-yellow-500/30 blur-xl animate-pulse"></span>

        <Calendar className="relative text-black" size={22} />
      </button>

      {/* WhatsApp */}
      <a
        href="https://wa.me/917012832207"
        target="_blank"
        rel="noopener noreferrer"
        className="
        relative w-14 h-14 rounded-full 
        bg-gradient-to-br from-green-400 to-green-600
        flex items-center justify-center
        shadow-[0_10px_30px_rgba(34,197,94,0.35)]
        hover:scale-110 hover:-translate-y-1
        transition-all duration-300
        animate-float
        "
      >
        {/* Glow Ring */}
        <span className="absolute inset-0 rounded-full bg-green-500/30 blur-xl animate-pulse"></span>

        <MessageCircle className="relative text-white" size={22} />
      </a>

    </div>
  );
}
