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
        const res = await fetch(`${API}/api/webinars`);
        if (!res.ok) return;
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

  // FORMAT TIME
  const formatTime = (time: string) => {
    const [hour, minute] = time.split(":");
    const h = parseInt(hour);
    const ampm = h >= 12 ? "PM" : "AM";
    const formattedHour = h % 12 || 12;

    return `${formattedHour}:${minute} ${ampm}`;
  };

  if (loading || webinars.length === 0) return null;

  return (
    <section className="relative bg-[var(--background)] py-16 overflow-hidden">

      {/* subtle glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(231,200,156,0.06),transparent_60%)] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-6 text-center">

        {/* HEADER */}
        <div className="mb-10">
          <div className="w-10 h-[2px] bg-[var(--primary-gold)] mx-auto mb-3"></div>

          <h2 className="text-xl md:text-3xl font-medium text-white tracking-wide">
            Exclusive Investment Webinars
          </h2>

          <p className="text-gray-400 mt-2 text-sm">
            Premium real estate insights across Australia
          </p>
        </div>

        {/* CARDS */}
        <div className="space-y-6">
          {webinars.map((webinar) => {
            return (
              <div
                key={webinar._id}
                className="rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.6)] p-6 md:p-7 transition hover:border-[var(--primary-gold)]/40"
              >
                {/* TITLE */}
                <h3 className="text-lg md:text-xl text-white font-medium mb-4">
                  {webinar.title}
                </h3>

                {/* DAY */}
                <div className="flex items-center justify-center gap-2 mb-3 text-gray-300 text-sm">
                  <Calendar size={14} className="text-[var(--primary-gold)]" />
                  <span className="font-medium text-white">
                    {webinar.day}
                  </span>
                </div>

                {/* TIME */}
                <div className="flex items-center justify-center gap-2 mb-4 text-gray-300 text-sm">
                  <Clock size={14} className="text-[var(--primary-gold)]" />
                  <span className="text-white font-medium">
                    {formatTime(webinar.time)}{" "}
                    <span className="text-[var(--primary-gold)]">
                      {webinar.australiaTimeZone}
                    </span>
                  </span>
                </div>

                {/* PLATFORM */}
                <div className="flex items-center justify-center gap-2 text-gray-400 text-xs mb-4">
                  <Video size={14} className="text-[var(--primary-gold)]" />
                  <span>FREE Live Webinar</span>
                </div>

                {/* DESCRIPTION */}
                <p className="text-gray-400 max-w-lg mx-auto mb-5 text-sm leading-relaxed">
                  {webinar.description}
                </p>

                {/* BUTTON */}
                <a
                  href={webinar.meetLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[var(--primary-gold)] text-[#221F1F] px-6 py-2.5 rounded-lg text-sm font-medium transition hover:opacity-90"
                >
                  Register Now
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}