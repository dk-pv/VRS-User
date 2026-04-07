// "use client";

// import { useEffect, useState } from "react";
// import { ChevronDown } from "lucide-react";
// import { useRouter } from "next/navigation";

// interface HeroData {
//   type?: "image" | "video";
//   videoUrl?: string;
//   images?: string[];
// }

// export default function HeroSection() {
//   const [hero, setHero] = useState<HeroData | null>(null);
//   const [current, setCurrent] = useState(0);
//   const router = useRouter();

//   const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

//   // Fetch Hero Data
//   useEffect(() => {
//     const fetchHero = async () => {
//       try {
//         const res = await fetch(`${API_BASE_URL}/api/hero`);
//         const data = await res.json();
//         setHero(data);
//       } catch (error) {
//         console.log("Hero fetch error", error);
//       }
//     };

//     fetchHero();
//   }, [API_BASE_URL]);

//   // Image Slider
//   useEffect(() => {
//     if (hero?.type === "image" && hero.images && hero.images.length > 0) {
//       const interval = setInterval(() => {
//         setCurrent((prev) => (prev + 1) % hero.images!.length);
//       }, 4000);

//       return () => clearInterval(interval);
//     }
//   }, [hero]);

//   const hasImages =
//     hero?.type === "image" && hero.images && hero.images.length > 0;

//   const hasVideo =
//     hero?.type === "video" && hero.videoUrl && hero.videoUrl !== "";

//   return (
//     <section className="relative w-full min-h-[100vh] overflow-hidden bg-black">
//       {/* IMAGE MODE */}
//       {hasImages &&
//         hero!.images!.map((img, index) => (
//           <img
//             key={index}
//             src={img}
//             className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1500 ${
//               index === current ? "opacity-100" : "opacity-0"
//             }`}
//             alt="hero"
//           />
//         ))}

//       {/* VIDEO MODE */}
//       {hasVideo && (
//         <div className="absolute inset-0">
//           <iframe
//             className="w-full h-full object-cover"
//             src={`https://www.youtube.com/embed/${getYoutubeId(
//               hero!.videoUrl!,
//             )}?autoplay=1&mute=1&controls=0&loop=1&playlist=${getYoutubeId(
//               hero!.videoUrl!,
//             )}`}
//             title="Hero Video"
//             frameBorder="0"
//             allow="autoplay; fullscreen"
//           ></iframe>
//         </div>
//       )}

//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/50"></div>

//       {/* Content */}
//       <div className="relative z-10 flex flex-col items-center justify-center min-h-[90vh] text-center px-6">
//         <div className="w-10 h-[2px] bg-yellow-500 mb-4"></div>

//         <h1 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight max-w-3xl tracking-wide">
//           Find the Right Investment Property <br />
//           <span className="text-yellow-500 font-medium">
//             in the Right Location for the Right Price
//           </span>
//         </h1>
//         <p className="mt-5 text-gray-200 text-sm md:text-base max-w-2xl leading-relaxed">
//           We help busy professionals buy investment properties with strategy,
//           clarity, and confidence.
//         </p>

//         <div className="mt-6 flex gap-3 flex-wrap justify-center">
//           <button
//             onClick={() => router.push("/webinar")}
//             className="border border-yellow-500 text-yellow-500 px-5 py-2 text-xs rounded-sm font-medium hover:bg-yellow-500 hover:text-black transition"
//           >
//             Free Webinar
//           </button>

//           <button
//             onClick={() => router.push("/properties")}
//             className="bg-yellow-500 text-black px-5 py-2 text-xs rounded-sm font-medium hover:bg-yellow-400 transition"
//           >
//             Explore Secured Properties
//           </button>

//           <a
//             href="https://learn.vrsrealinvest.com.au/web/lite/events/68b9e85ce4cad97bc9d8d657"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <button className="border border-yellow-500 text-yellow-500 px-5 py-2 text-xs rounded-sm font-medium hover:bg-yellow-500 hover:text-black transition">
//               Free Consultation
//             </button>
//           </a>
//         </div>

//         <div className="absolute bottom-6 animate-bounce">
//           <ChevronDown size={20} />
//         </div>
//       </div>
//     </section>
//   );
// }

// /**
//  * Extract YouTube Video ID
//  */

// function getYoutubeId(url: string) {
//   const regExp = /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&]+)/;
//   const match = url.match(regExp);
//   return match ? match[1] : "";
// }





"use client";

import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { useRouter } from "next/navigation";

interface HeroData {
  type?: "image" | "video";
  videoUrl?: string;
  images?: string[];
}

export default function HeroSection() {
  const [hero, setHero] = useState<HeroData | null>(null);
  const [current, setCurrent] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const router = useRouter();

  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

  useEffect(() => {
    const fetchHero = async () => {
      const res = await fetch(`${API_BASE_URL}/api/hero`);
      const data = await res.json();
      setHero(data);
      setLoaded(true);
    };
    fetchHero();
  }, [API_BASE_URL]);

  // slider
  useEffect(() => {
    if (hero?.type === "image" && hero.images?.length) {
      const interval = setInterval(() => {
        setCurrent((prev) => (prev + 1) % hero.images!.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [hero]);

  const hasImages = hero?.type === "image" && hero.images?.length;
  const hasVideo = hero?.type === "video" && hero.videoUrl;

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-[var(--background)]">

      {/* ================= MEDIA ================= */}
      {hasImages &&
        hero!.images!.map((img, index) => (
          <img
            key={index}
            src={img}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-[2000ms] ${
              index === current
                ? "opacity-100 scale-105"
                : "opacity-0 scale-100"
            }`}
            alt="hero"
          />
        ))}

      {hasVideo && (
        <iframe
          className="absolute inset-0 w-full h-full object-cover scale-110"
          src={`https://www.youtube.com/embed/${getYoutubeId(
            hero!.videoUrl!
          )}?autoplay=1&mute=1&controls=0&loop=1&playlist=${getYoutubeId(
            hero!.videoUrl!
          )}`}
          title="Hero Video"
          allow="autoplay; fullscreen"
        />
      )}

      {/* ================= OVERLAYS ================= */}
      {/* dark */}
      <div className="absolute inset-0 bg-black/65" />

      {/* gold glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(231,200,156,0.12),transparent_70%)]" />

      {/* vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,transparent,rgba(0,0,0,0.7))]" />

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[90vh] text-center px-6">

        <div
          className={`transition-all duration-1000 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="w-14 h-[2px] bg-[var(--primary-gold)] mb-6 mx-auto" />

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-light leading-tight max-w-4xl tracking-tight">
            Find the Right Investment Property
            <br />
            <span className="text-[var(--primary-gold)] font-medium">
              in the Right Location for the Right Price
            </span>
          </h1>

          <p className="mt-6 text-gray-300 text-sm md:text-base max-w-2xl leading-relaxed">
            We help busy professionals buy investment properties with strategy,
            clarity, and confidence.
          </p>
        </div>

        {/* ================= CTA ================= */}
        <div
          className={`mt-10 flex gap-4 flex-wrap justify-center transition-all duration-1000 delay-200 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <button
            onClick={() => router.push("/webinar")}
            className="px-6 py-2.5 text-xs font-medium rounded-md border border-[var(--primary-gold)] text-[var(--primary-gold)] hover:bg-[var(--primary-gold)] hover:text-[#221F1F] transition duration-300"
          >
            Free Webinar
          </button>

          <button
            onClick={() => router.push("/properties")}
            className="px-6 py-2.5 text-xs font-medium rounded-md bg-[var(--primary-gold)] text-[#221F1F] shadow-[0_10px_30px_rgba(231,200,156,0.25)] hover:scale-105 transition duration-300"
          >
            Explore Secured Properties
          </button>

          <a
            href="https://learn.vrsrealinvest.com.au/web/lite/events/68b9e85ce4cad97bc9d8d657"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-6 py-2.5 text-xs font-medium rounded-md border border-white/20 text-white hover:border-[var(--primary-gold)] hover:text-[var(--primary-gold)] transition">
              Free Consultation
            </button>
          </a>
        </div>

        {/* ================= SCROLL INDICATOR ================= */}
        <div className="absolute bottom-10 flex flex-col items-center gap-2 text-[var(--primary-gold)]/70">
          <span className="text-[10px] tracking-widest uppercase">
            Scroll
          </span>

          <div className="w-[1px] h-8 bg-gradient-to-b from-[var(--primary-gold)] to-transparent animate-pulse" />

          <ChevronDown size={18} />
        </div>
      </div>
    </section>
  );
}

/* ================= HELPER ================= */

function getYoutubeId(url: string) {
  const regExp = /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&]+)/;
  const match = url.match(regExp);
  return match ? match[1] : "";
}