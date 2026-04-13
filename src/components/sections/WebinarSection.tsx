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
    <section className="relative py-16 overflow-hidden">
      {/* subtle glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(231,200,156,0.06),transparent_60%)] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        {/* HEADER */}
        <div className="mb-10">
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[var(--primary-gold)] to-transparent mx-auto mb-5 opacity-80"></div>

          <h2 className="font-heading text-xl md:text-3xl font-medium text-white tracking-[-0.01em]">
            Exclusive Investment Webinars
          </h2>

          <p className="font-body text-gray-400 mt-3 text-[11px] tracking-[0.18em] uppercase">
            Premium real estate insights across Australia
          </p>
        </div>

        {/* CARDS */}
        <div className="space-y-6">
          {webinars.map((webinar) => {
            return (
              <div
                key={webinar._id}
                className="rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.6)] p-7 md:p-8 transition hover:border-[var(--primary-gold)]/40 hover:shadow-[0_20px_60px_rgba(0,0,0,0.7)]"
              >
                {/* TITLE */}
                <h3 className="font-heading text-lg md:text-xl text-white font-medium tracking-tight mb-4">
                  {webinar.title}
                </h3>

                <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-[var(--primary-gold)] to-transparent mx-auto my-4 opacity-70"></div>
                <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-[var(--primary-gold)] to-transparent mx-auto my-4 opacity-70"></div>

                {/* DAY */}
                <div className="flex items-center justify-center gap-2.5 mb-3 text-gray-300 text-sm">
                  <Calendar size={14} className="text-[var(--primary-gold)]" />

                  <span className="font-body text-white text-[11px] tracking-[0.18em] uppercase">
                    {webinar.day}
                  </span>
                </div>

                {/* TIME */}
                <div className="flex items-center justify-center gap-2.5 mb-4 text-gray-300 text-sm">
                  <Clock size={14} className="text-[var(--primary-gold)]" />
                  <span className="font-body text-white text-[11px] tracking-[0.18em] uppercase">
                    {formatTime(webinar.time)}{" "}
                    <span className="text-[var(--primary-gold)]">
                      {webinar.australiaTimeZone}
                    </span>
                  </span>
                </div>

                {/* PLATFORM */}
                <div className="flex items-center justify-center gap-2.5 text-gray-400 text-xs mb-4">
                  <Video size={14} className="text-[var(--primary-gold)]" />
                  <span className="font-body text-gray-400 text-[10px] tracking-[0.15em] uppercase">
                    FREE Live Webinar
                  </span>
                </div>

                {/* DESCRIPTION */}
                <p className="font-body text-gray-400 max-w-md mx-auto mb-6 text-sm leading-relaxed tracking-wide">
                  {webinar.description}
                </p>

                {/* BUTTON */}
                <a
                  href={webinar.meetLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[var(--primary-gold)] text-[#221F1F] px-7 py-2.5 rounded-lg text-[11px] font-body font-medium tracking-[0.18em] uppercase transition hover:opacity-90 hover:scale-[1.03] hover:scale-[1.03]"
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
