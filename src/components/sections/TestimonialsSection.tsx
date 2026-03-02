"use client";

import { useEffect, useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

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
  youtubeLink: string;
}

export default function TestimonialsSection() {
  const API = process.env.NEXT_PUBLIC_API_BASE_URL;

  const [reviews, setReviews] = useState<TextReview[]>([]);
  const [videos, setVideos] = useState<VideoReview[]>([]);
  const [index, setIndex] = useState(0);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const getYoutubeId = (url: string): string | null => {
    const regExp =
      /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&?/]+)/;
    const match = url.match(regExp);
    return match ? match[1] : null;
  };

  useEffect(() => {
    if (!API) return;
    const fetchText = async () => {
      const res = await fetch(`${API}/api/text-testimonials`);
      const data = await res.json();
      setReviews(data);
    };
    fetchText();
  }, [API]);

  useEffect(() => {
    if (!API) return;
    const fetchVideos = async () => {
      const res = await fetch(`${API}/api/video-testimonials`);
      const data = await res.json();
      setVideos(data);
    };
    fetchVideos();
  }, [API]);

  useEffect(() => {
    if (reviews.length === 0) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [reviews]);

  useEffect(() => {
    if (activeVideo) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveVideo(null);
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [activeVideo]);

  const prevSlide = () =>
    setIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));

  const nextSlide = () =>
    setIndex((prev) => (prev + 1) % reviews.length);

  return (
    <section className="relative bg-gradient-to-b from-black via-[#071224] to-black py-14 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.04),transparent_70%)]"></div>

      <div className="relative max-w-6xl mx-auto px-6">
        {/* TEXT TESTIMONIALS */}
        <div className="text-center mb-10">
          <div className="w-10 h-[2px] bg-yellow-500 mx-auto mb-3"></div>
          <h2 className="text-2xl md:text-3xl font-medium text-white">
            Client Testimonials
          </h2>
          <p className="text-gray-400 mt-1 text-xs md:text-sm">
            What our satisfied clients say about us
          </p>
        </div>

        {reviews.length > 0 && (
          <div className="relative overflow-hidden max-w-2xl mx-auto mb-16">
            <div
              className="flex transition-transform duration-700"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {reviews.map((review) => (
                <div key={review._id} className="min-w-full px-3">
                  <div className="relative bg-gradient-to-br from-[#0e1626] to-[#0b1320] border border-white/10 rounded-xl p-6 text-center">
                    <Quote
                      className="absolute top-4 right-4 text-yellow-500 opacity-10"
                      size={40}
                    />

                    <div className="flex justify-center gap-1 mb-3">
                      {[...Array(review.rating || 5)].map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className="text-yellow-500 fill-yellow-500"
                        />
                      ))}
                    </div>

                    <p className="text-gray-300 mb-4 text-sm md:text-base">
                      "{review.text}"
                    </p>

                    <h4 className="text-white font-medium text-sm md:text-base">
                      {review.name}
                    </h4>
                    <p className="text-gray-500 text-xs">
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
              <ChevronLeft className="text-yellow-500" size={18} />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/5 hover:bg-yellow-500/20 p-2 rounded-full transition"
            >
              <ChevronRight className="text-yellow-500" size={18} />
            </button>
          </div>
        )}

        {/* VIDEO TESTIMONIALS */}
        <div className="text-center mb-10">
          <div className="w-10 h-[2px] bg-yellow-500 mx-auto mb-3"></div>
          <h2 className="text-2xl md:text-3xl font-medium text-white">
            Video Testimonials
          </h2>
        </div>

        {videos.length > 0 && (
          <div className="flex gap-5 overflow-x-auto pb-4">
            {videos.map((video) => {
              const videoId = getYoutubeId(video.youtubeLink);
              if (!videoId) return null;

              return (
                <div
                  key={video._id}
                  onClick={() => setActiveVideo(videoId)}
                  className="relative min-w-[320px] md:min-w-[340px] h-[360px] md:h-[380px] rounded-xl overflow-hidden border border-white/10 group flex-shrink-0 cursor-pointer"
                >
                  <iframe
                    id={`preview-${video._id}`}
                    className="absolute inset-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${videoId}?enablejsapi=1&controls=0&rel=0&modestbranding=1&mute=1`}
                    allow="autoplay; encrypted-media"
                  />

                  <div
                    className="absolute inset-0 z-20"
                    onMouseEnter={() => {
                      const iframe = document.getElementById(
                        `preview-${video._id}`
                      ) as HTMLIFrameElement;

                      iframe?.contentWindow?.postMessage(
                        '{"event":"command","func":"playVideo","args":""}',
                        "*"
                      );
                    }}
                    onMouseLeave={() => {
                      const iframe = document.getElementById(
                        `preview-${video._id}`
                      ) as HTMLIFrameElement;

                      iframe?.contentWindow?.postMessage(
                        '{"event":"command","func":"pauseVideo","args":""}',
                        "*"
                      );
                    }}
                  />

                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition"></div>

                  <div className="absolute bottom-5 left-5 text-white z-10">
                    <h4 className="font-medium text-base">{video.name}</h4>
                    <p className="text-gray-300 text-xs">{video.role}</p>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* MODAL */}
        {activeVideo && (
          <div
            className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-50"
            onClick={() => setActiveVideo(null)}
          >
            <div
              className="w-[90%] md:w-[75%] h-[65vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                className="w-full h-full rounded-xl shadow-2xl"
                src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1&controls=1&rel=0`}
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}