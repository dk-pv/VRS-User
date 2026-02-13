"use client";

import { Calendar, MessageCircle } from "lucide-react";

export default function FloatingIcons() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-[999]">
      
      {/* Calendar */}
      <button className="w-14 h-14 bg-yellow-500 rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition">
        <Calendar className="text-black" size={22} />
      </button>

      {/* WhatsApp */}
      <a
        href="https://wa.me/917012832207"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition"
      >
        <MessageCircle className="text-white" size={22} />
      </a>

    </div>
  );
}
