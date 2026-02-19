// "use client";

// import { useEffect, useState } from "react";
// import { Star, ChevronLeft, ChevronRight, Quote, Play } from "lucide-react";

// const reviews = [
//   {
//     name: "Sarah Mitchell",
//     location: "Sydney, NSW",
//     text: "VRS Real Invest helped me find the perfect investment property. Their expertise and professionalism are unmatched. Highly recommended.",
//   },
//   {
//     name: "James Chen",
//     location: "Melbourne, VIC",
//     text: "Exceptional service from start to finish. The team guided me through every step of the investment process seamlessly.",
//   },
//   {
//     name: "Olivia Brown",
//     location: "Brisbane, QLD",
//     text: "Professional, transparent, and extremely knowledgeable. I felt confident throughout my entire property purchase.",
//   },
// ];

// const videoTestimonials = [
//   {
//     name: "Robert James",
//     role: "Property Investor",
//     image: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg",
//     link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
//   },
//   {
//     name: "Michelle Roberts",
//     role: "First-time Investor",
//     image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
//     link: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
//   },
//   {
//     name: "Thomas Lee",
//     role: "International Buyer",
//     image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
//     link: "https://www.youtube.com/watch?v=jNQXAC9IVRw",
//   },
// ];

// export default function TestimonialsSection() {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % reviews.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   const prevSlide = () =>
//     setIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));

//   const nextSlide = () => setIndex((prev) => (prev + 1) % reviews.length);

//   return (
//     <section className="relative bg-gradient-to-b from-black via-[#071224] to-black py-20 overflow-hidden">
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.04),transparent_70%)]"></div>

//       <div className="relative max-w-7xl mx-auto px-6">
//         {/* ================= TEXT TESTIMONIAL ================= */}
//         <div className="text-center mb-16">
//           <div className="w-12 h-[2px] bg-yellow-500 mx-auto mb-4"></div>
//           <h2 className="text-3xl md:text-4xl font-medium text-white">
//             Client Testimonials
//           </h2>
//           <p className="text-gray-400 mt-2 text-sm">
//             What our satisfied clients say about us
//           </p>
//         </div>

//         <div className="relative overflow-hidden max-w-3xl mx-auto mb-24">
//           <div
//             className="flex transition-transform duration-700"
//             style={{ transform: `translateX(-${index * 100}%)` }}
//           >
//             {reviews.map((review, i) => (
//               <div key={i} className="min-w-full px-4">
//                 <div className="relative bg-gradient-to-br from-[#0e1626] to-[#0b1320] border border-white/10 rounded-2xl p-10 text-center">
//                   <Quote
//                     className="absolute top-6 right-6 text-yellow-500 opacity-10"
//                     size={60}
//                   />

//                   <div className="flex justify-center gap-1 mb-5">
//                     {[...Array(5)].map((_, i) => (
//                       <Star
//                         key={i}
//                         size={16}
//                         className="text-yellow-500 fill-yellow-500"
//                       />
//                     ))}
//                   </div>

//                   <p className="text-gray-300 text-base leading-relaxed mb-6">
//                     "{review.text}"
//                   </p>

//                   <h4 className="text-white font-medium">{review.name}</h4>
//                   <p className="text-gray-500 text-sm">{review.location}</p>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <button
//             onClick={prevSlide}
//             className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/5 hover:bg-yellow-500/20 p-2 rounded-full transition"
//           >
//             <ChevronLeft className="text-yellow-500" size={20} />
//           </button>

//           <button
//             onClick={nextSlide}
//             className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/5 hover:bg-yellow-500/20 p-2 rounded-full transition"
//           >
//             <ChevronRight className="text-yellow-500" size={20} />
//           </button>
//         </div>

//         {/* ================= VIDEO TESTIMONIALS ================= */}
//         <div className="text-center mb-14">
//           <div className="w-12 h-[2px] bg-yellow-500 mx-auto mb-4"></div>
//           <h2 className="text-3xl md:text-4xl font-medium text-white">
//             Video Testimonials
//           </h2>
//           <p className="text-gray-400 mt-2 text-sm">
//             Hear directly from our happy clients
//           </p>
//         </div>

//         <div className="grid md:grid-cols-3 gap-6">
//           {videoTestimonials.map((video, i) => (
//             <a
//               key={i}
//               href={video.link}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="relative group rounded-2xl overflow-hidden border border-white/10"
//             >
//               <img
//                 src={video.image}
//                 className="w-full h-[280px] object-cover group-hover:scale-105 transition duration-700"
//               />

//               <div className="absolute inset-0 bg-black/50"></div>

//               <div className="absolute inset-0 flex items-center justify-center">
//                 <div className="bg-white/90 p-3 rounded-full group-hover:scale-110 transition">
//                   <Play size={22} className="text-black" />
//                 </div>
//               </div>

//               <div className="absolute bottom-5 left-5 text-white">
//                 <h4 className="font-medium">{video.name}</h4>
//                 <p className="text-gray-300 text-sm">{video.role}</p>
//               </div>
//             </a>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }






"use client";

import { useEffect, useState } from "react";
import {
  Star,
  ChevronLeft,
  ChevronRight,
  Quote,
  Play,
} from "lucide-react";

interface TextReview {
  _id: string;
  name: string;
  location: string;
  text: string;
  rating: number;
}

interface VideoReview {
  _id: string;
  name: string;
  role: string;
  thumbnail: string;
  youtubeLink: string;
}

export default function TestimonialsSection() {
  const API = process.env.NEXT_PUBLIC_API_BASE_URL;

  const [reviews, setReviews] = useState<TextReview[]>([]);
  const [videos, setVideos] = useState<VideoReview[]>([]);
  const [index, setIndex] = useState(0);

  // Fetch Text Testimonials
  useEffect(() => {
    const fetchText = async () => {
      const res = await fetch(`${API}/api/text-testimonials`);
      const data = await res.json();
      setReviews(data);
    };

    if (API) fetchText();
  }, [API]);

  // Fetch Video Testimonials
  useEffect(() => {
    const fetchVideos = async () => {
      const res = await fetch(`${API}/api/video-testimonials`);
      const data = await res.json();
      setVideos(data);
    };

    if (API) fetchVideos();
  }, [API]);

  // Auto Slide (only if reviews exist)
  useEffect(() => {
    if (reviews.length === 0) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [reviews]);

  const prevSlide = () =>
    setIndex((prev) =>
      prev === 0 ? reviews.length - 1 : prev - 1
    );

  const nextSlide = () =>
    setIndex((prev) => (prev + 1) % reviews.length);

  return (
    <section className="relative bg-gradient-to-b from-black via-[#071224] to-black py-20 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.04),transparent_70%)]"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* ================= TEXT TESTIMONIAL ================= */}
        <div className="text-center mb-16">
          <div className="w-12 h-[2px] bg-yellow-500 mx-auto mb-4"></div>
          <h2 className="text-3xl md:text-4xl font-medium text-white">
            Client Testimonials
          </h2>
          <p className="text-gray-400 mt-2 text-sm">
            What our satisfied clients say about us
          </p>
        </div>

        {reviews.length > 0 && (
          <div className="relative overflow-hidden max-w-3xl mx-auto mb-24">
            <div
              className="flex transition-transform duration-700"
              style={{
                transform: `translateX(-${index * 100}%)`,
              }}
            >
              {reviews.map((review) => (
                <div
                  key={review._id}
                  className="min-w-full px-4"
                >
                  <div className="relative bg-gradient-to-br from-[#0e1626] to-[#0b1320] border border-white/10 rounded-2xl p-10 text-center">
                    <Quote
                      className="absolute top-6 right-6 text-yellow-500 opacity-10"
                      size={60}
                    />

                    <div className="flex justify-center gap-1 mb-5">
                      {[...Array(review.rating || 5)].map(
                        (_, i) => (
                          <Star
                            key={i}
                            size={16}
                            className="text-yellow-500 fill-yellow-500"
                          />
                        )
                      )}
                    </div>

                    <p className="text-gray-300 text-base leading-relaxed mb-6">
                      "{review.text}"
                    </p>

                    <h4 className="text-white font-medium">
                      {review.name}
                    </h4>
                    <p className="text-gray-500 text-sm">
                      {review.location}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/5 hover:bg-yellow-500/20 p-2 rounded-full transition"
            >
              <ChevronLeft
                className="text-yellow-500"
                size={20}
              />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/5 hover:bg-yellow-500/20 p-2 rounded-full transition"
            >
              <ChevronRight
                className="text-yellow-500"
                size={20}
              />
            </button>
          </div>
        )}

        {/* ================= VIDEO TESTIMONIALS ================= */}
        <div className="text-center mb-14">
          <div className="w-12 h-[2px] bg-yellow-500 mx-auto mb-4"></div>
          <h2 className="text-3xl md:text-4xl font-medium text-white">
            Video Testimonials
          </h2>
          <p className="text-gray-400 mt-2 text-sm">
            Hear directly from our happy clients
          </p>
        </div>

        {videos.length > 0 && (
          <div className="grid md:grid-cols-3 gap-6">
            {videos.map((video) => (
              <a
                key={video._id}
                href={video.youtubeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group rounded-2xl overflow-hidden border border-white/10"
              >
                <img
                  src={video.thumbnail}
                  className="w-full h-[280px] object-cover group-hover:scale-105 transition duration-700"
                />

                <div className="absolute inset-0 bg-black/50"></div>

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/90 p-3 rounded-full group-hover:scale-110 transition">
                    <Play size={22} className="text-black" />
                  </div>
                </div>

                <div className="absolute bottom-5 left-5 text-white">
                  <h4 className="font-medium">
                    {video.name}
                  </h4>
                  <p className="text-gray-300 text-sm">
                    {video.role}
                  </p>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
