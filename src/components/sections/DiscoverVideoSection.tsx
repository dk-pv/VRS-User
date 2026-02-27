// "use client";

// import { useEffect, useState } from "react";
// import { PlayCircle } from "lucide-react";

// export default function DiscoverVideoSection() {
//   const API = process.env.NEXT_PUBLIC_API_BASE_URL;
//   const [data, setData] = useState<any>(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       const res = await fetch(`${API}/api/discover-video`);
//       const json = await res.json();
//       setData(json);
//     };

//     if (API) fetchData();
//   }, [API]);

//   if (!data) return null;

//   return (
//     <div className="relative pt-16 border-t border-white/10">
//       <div className="text-center mb-10">
//         <div className="w-12 h-[2px] bg-yellow-500 mx-auto mb-4"></div>
//         <h2 className="text-3xl md:text-4xl font-medium text-white">
//           Discover vrs realinvest
//         </h2>
//         <p className="text-gray-400 mt-2 text-sm">
//           Watch our story and mission
//         </p>
//       </div>

//       <a
//         href={data.videoUrl}
//         target="_blank"
//         className="relative block max-w-4xl mx-auto rounded-3xl overflow-hidden border border-white/10 group"
//       >
//         <div
//           className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition duration-700"
//           style={{ backgroundImage: `url(${data.thumbnail})` }}
//         ></div>

//         <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition"></div>

//         <div className="relative h-[400px] flex items-center justify-center">
//           <PlayCircle
//             size={70}
//             className="text-white opacity-80 group-hover:text-yellow-500 transition"
//           />
//         </div>
//       </a>

//       <p className="text-gray-400 mt-8 max-w-3xl mx-auto text-sm md:text-base text-center">
//         Learn about our commitment to excellence and our proven track record.
//       </p>
//     </div>
//   );
// }




"use client";

import { useEffect, useState, useRef } from "react";
import { PlayCircle } from "lucide-react";

export default function DiscoverVideoSection() {
  const API = process.env.NEXT_PUBLIC_API_BASE_URL;
  const [data, setData] = useState<any>(null);
  const [hovered, setHovered] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`${API}/api/discover-video`);
      const json = await res.json();
      setData(json);
    };

    if (API) fetchData();
  }, [API]);

  if (!data) return null;

  // Convert YouTube URL to embed format
  const getEmbedUrl = (url: string) => {
    const videoId = url.split("v=")[1]?.split("&")[0];
    return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`;
  };

  return (
    <section className="relative py-16 md:py-20 border-t border-white/10">
      <div className="text-center mb-10">
        <div className="w-12 h-[2px] bg-yellow-500 mx-auto mb-4"></div>
        <h2 className="text-2xl md:text-4xl font-medium text-white">
          Discover VRS RealInvest
        </h2>
        <p className="text-gray-400 mt-2 text-xs md:text-sm">
          Watch our story and mission
        </p>
      </div>

      <div
        className="relative max-w-4xl mx-auto rounded-3xl overflow-hidden border border-white/10 group cursor-pointer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => window.open(data.videoUrl, "_blank")}
      >
        {/* Responsive Aspect Ratio */}
        <div className="relative w-full aspect-video">

          {/* Thumbnail (Default) */}
          {!hovered && (
            <>
              <div
                className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${data.thumbnail})` }}
              ></div>

              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition"></div>

              <div className="absolute inset-0 flex items-center justify-center">
                <PlayCircle
                  size={70}
                  className="text-white opacity-80 group-hover:text-yellow-500 transition"
                />
              </div>
            </>
          )}

          {/* Hover Video Preview */}
          {hovered && (
            <iframe
              ref={iframeRef}
              src={getEmbedUrl(data.videoUrl)}
              className="absolute inset-0 w-full h-full"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          )}
        </div>
      </div>

      <p className="text-gray-400 mt-8 max-w-3xl mx-auto text-xs md:text-base text-center px-4">
        Learn about our commitment to excellence and our proven track record.
      </p>
    </section>
  );
}