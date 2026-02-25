"use client";

import { useEffect, useState } from "react";
import { Calendar, Clock, Video } from "lucide-react";

const API = process.env.NEXT_PUBLIC_API_BASE_URL;

export default function WebinarSection() {
  const [webinars, setWebinars] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWebinars = async () => {
      try {
        // ✅ Updated endpoint
        const res = await fetch(`${API}/api/webinars`);
        if (!res.ok) {
          setLoading(false);
          return;
        }

        const data = await res.json();
        setWebinars(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    if (API) fetchWebinars();
  }, []);

  if (loading || webinars.length === 0) return null;

  return (
    <section className="relative bg-black py-24 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black to-transparent"></div>

      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="mb-16">
          <div className="w-12 h-[2px] bg-yellow-500 mx-auto mb-4"></div>
          <h2 className="text-3xl md:text-4xl font-medium text-white tracking-wide">
            Exclusive Investment Webinars
          </h2>
          <p className="text-gray-400 mt-2 text-sm">
            Join our live sessions and discover premium real estate
            opportunities
          </p>
        </div>

        <div className="space-y-12">
          {webinars.map((webinar) => (
            <div
              key={webinar._id}
              className="relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-[#0b1320] to-[#050b1a] shadow-[0_20px_60px_rgba(0,0,0,0.6)] p-12"
            >
              <h3 className="text-2xl md:text-3xl text-white font-semibold mb-6">
                {webinar.title}
              </h3>

              <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-gray-300 mb-10">

                {/* Day */}
                <div className="flex items-center gap-2">
                  <Calendar size={18} className="text-yellow-500" />
                  <span className="font-medium text-white">
                    {webinar.day}
                  </span>
                </div>

                {/* Time */}
                <div className="flex items-center gap-2">
                  <Clock size={18} className="text-yellow-500" />
                  <span>{webinar.time}</span>
                </div>

                {/* Platform */}
                <div className="flex items-center gap-2">
                  <Video size={18} className="text-yellow-500" />
                  <span>Google Meet</span>
                </div>
              </div>

              <p className="text-gray-400 max-w-2xl mx-auto mb-10 text-sm md:text-base">
                {webinar.description}
              </p>

              {/* Join Button */}
              <a
                href={webinar.meetLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-yellow-500 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-all duration-300 shadow-lg hover:shadow-yellow-500/40"
              >
                Join Webinar
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
}