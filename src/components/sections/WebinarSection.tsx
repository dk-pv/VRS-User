"use client";

import { useEffect, useState } from "react";
import { Calendar, Clock, Video } from "lucide-react";

const API = process.env.NEXT_PUBLIC_API_BASE_URL;

export default function WebinarSection() {
  const [webinar, setWebinar] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWebinar = async () => {
      try {
        const res = await fetch(`${API}/api/webinars/active`);
        if (!res.ok) {
          setLoading(false);
          return;
        }

        const data = await res.json();
        setWebinar(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    if (API) fetchWebinar();
  }, []);

  if (loading) return null;
  if (!webinar) return null;

  const formattedDate = new Date(webinar.date).toLocaleDateString();
  const formattedTime = new Date(webinar.date).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const statusColor =
    webinar.status === "live"
      ? "bg-red-600 animate-pulse"
      : webinar.status === "upcoming"
      ? "bg-yellow-500 text-black"
      : "bg-gray-600";

  return (
    <section className="relative bg-black py-24 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black to-transparent"></div>

      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="mb-16">
          <div className="w-12 h-[2px] bg-yellow-500 mx-auto mb-4"></div>
          <h2 className="text-3xl md:text-4xl font-medium text-white tracking-wide">
            Exclusive Investment Webinar
          </h2>
          <p className="text-gray-400 mt-2 text-sm">
            Join our live session and discover premium real estate opportunities
          </p>
        </div>

        <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-[#0b1320] to-[#050b1a] shadow-[0_20px_60px_rgba(0,0,0,0.6)] p-12">

          {/* Dynamic Status Badge */}
          <div className={`absolute top-6 right-6 text-xs px-4 py-1 rounded-full text-white ${statusColor}`}>
            {webinar.status.toUpperCase()}
          </div>

          <h3 className="text-2xl md:text-3xl text-white font-semibold mb-6">
            {webinar.title}
          </h3>

          <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-gray-300 mb-10">
            <div className="flex items-center gap-2">
              <Calendar size={18} className="text-yellow-500" />
              <span>{formattedDate}</span>
            </div>

            <div className="flex items-center gap-2">
              <Clock size={18} className="text-yellow-500" />
              <span>{formattedTime}</span>
            </div>

            <div className="flex items-center gap-2">
              <Video size={18} className="text-yellow-500" />
              <span>Google Meet</span>
            </div>
          </div>

          <p className="text-gray-400 max-w-2xl mx-auto mb-10 text-sm md:text-base">
            {webinar.description}
          </p>

          {/* Dynamic Button */}
          {webinar.status !== "ended" && (
            <a
              href={webinar.meetLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-yellow-500 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-all duration-300 shadow-lg hover:shadow-yellow-500/40"
            >
              {webinar.status === "live"
                ? "Join Webinar Now"
                : "Register / Join"}
            </a>
          )}

          {webinar.status === "ended" && webinar.recordingLink && (
            <a
              href={webinar.recordingLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-300"
            >
              Watch Recording
            </a>
          )}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
}