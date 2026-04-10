"use client";

import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { useRouter } from "next/navigation";

interface ImageItem {
  _id: string;
  url: string;
  public_id: string;
}

interface HeroData {
  type?: "image" | "video";
  video?: {
    url: string;
    public_id: string;
  };
  images?: ImageItem[];
}

export default function HeroSection({ onLoaded }: { onLoaded?: () => void }) {
  const [hero, setHero] = useState<HeroData | null>(null);
  const [current, setCurrent] = useState(0);
  const [mediaReady, setMediaReady] = useState(false);
  const router = useRouter();

  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

  // ================= FETCH =================
  useEffect(() => {
    const fetchHero = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/api/hero`);
        const data = await res.json();
        setHero(data);
      } catch (err) {
        console.error("Hero fetch error", err);
        onLoaded && onLoaded(); // ✅ prevent stuck loader
      }
    };

    if (API_BASE_URL) {
      fetchHero();
    } else {
      console.warn("API_BASE_URL missing");
      onLoaded && onLoaded(); // ✅ fallback
    }
  }, [API_BASE_URL]);

  // ================= IMAGE SLIDER =================
  useEffect(() => {
    if (hero?.type === "image" && hero.images?.length) {
      const interval = setInterval(() => {
        setCurrent((prev) => (prev + 1) % hero.images!.length);
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [hero]);

  // ================= MEDIA READY =================
  useEffect(() => {
    if (mediaReady) {
      onLoaded && onLoaded(); // ✅ triggers loader exit
    }
  }, [mediaReady]);

  const hasImages = hero?.type === "image" && hero.images?.length;
  const hasVideo = hero?.type === "video" && hero.video?.url;

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-[var(--background)]">
      {/* ================= IMAGES ================= */}
      {hasImages &&
        hero!.images!.map((img, index) => (
          <img
            key={img._id}
            src={img.url}
            alt="hero"
            onLoad={() => setMediaReady(true)} // ✅ critical
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-[2000ms] ${
              index === current
                ? "opacity-100 scale-105 blur-0"
                : "opacity-0 scale-100 blur-sm"
            }`}
          />
        ))}

      {/* ================= VIDEO ================= */}
      {hasVideo && (
        <video
          src={hero!.video!.url}
          autoPlay
          muted
          loop
          playsInline
          onLoadedData={() => setMediaReady(true)} // ✅ critical
          className={`absolute inset-0 w-full h-full object-cover scale-110 transition-all duration-1000 ${
            mediaReady ? "opacity-100 blur-0" : "opacity-0 blur-xl"
          }`}
        />
      )}

      {/* ================= OVERLAY ================= */}
      <div className="absolute inset-0 bg-black/70" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(231,200,156,0.15),transparent_70%)]" />

      {/* ================= CONTENT ================= */}
      <div
        className={`relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6 transition-all duration-1000 ${
          mediaReady ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-5xl mx-auto">
          <div className="w-16 h-[2px] bg-[#E7C89C] mb-10 mx-auto" />

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight text-gold-gradient">
            Buy Investment Property in Australia with the Right Strategy
          </h1>

          <p className="mt-6 text-[#E7C89C] text-base md:text-lg font-semibold tracking-wide">
            Create real freedom through smart property investing.
          </p>

          <p className="mt-5 text-gray-300 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            We help busy professionals buy high-growth investment properties in
            Australia with strategy, clarity, and confidence
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12 flex gap-5 flex-wrap justify-center">
          <button
            onClick={() => router.push("/webinar")}
            className="px-8 py-3 text-sm font-semibold rounded-md border border-[#E7C89C] text-[#E7C89C] 
            hover:bg-[#E7C89C] hover:text-[#221F1F] 
            transition-all duration-300"
          >
            Free Webinar
          </button>

          <a
            href="https://learn.vrsrealinvest.com.au/web/lite/events/68b9e85ce4cad97bc9d8d657"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className="px-8 py-3 text-sm font-semibold rounded-md border border-[#E7C89C]/40 text-[#E7C89C] 
              hover:border-[#E7C89C] hover:bg-[#E7C89C] hover:text-[#221F1F] 
              transition-all duration-300"
            >
              Consultation
            </button>
          </a>
        </div>

        {/* SCROLL */}
        <div className="absolute bottom-10 flex flex-col items-center gap-2 text-[#E7C89C]/70">
          <span className="text-[10px] tracking-widest uppercase">Scroll</span>
          <div className="w-[1px] h-8 scroll-glow" />
          <ChevronDown size={18} />
        </div>
      </div>
    </section>
  );
}
