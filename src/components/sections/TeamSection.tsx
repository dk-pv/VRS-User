"use client";

import { useEffect, useState } from "react";

interface TeamMember {
  _id: string;
  name: string;
  role: string;
  image: string;
}

export default function TeamSection() {
  const API = process.env.NEXT_PUBLIC_API_BASE_URL;
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);

  useEffect(() => {
    const fetchTeam = async () => {
      const res = await fetch(`${API}/api/team`);
      const data = await res.json();
      setTeamMembers(data);
    };

    if (API) fetchTeam();
  }, [API]);

  if (teamMembers.length === 0) return null;

  const isScrollable = teamMembers.length > 4;

  return (
    <section className="py-20 md:py-24">
      <div className="px-6 md:px-10 lg:px-20">
        {/* HEADER */}
        <div className="text-center mb-12">
          <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-[var(--primary-gold)] to-transparent mx-auto mb-6 opacity-80"></div>

          <h2 className="font-heading text-3xl md:text-4xl font-medium text-white tracking-[-0.01em]">
            Meet Our Team
          </h2>

          <p className="font-body text-gray-400 mt-4 text-[11px] md:text-sm tracking-[0.18em] uppercase">
            Experienced professionals dedicated to helping you create real
            freedom
          </p>
        </div>
        {/* SCROLL / GRID */}
        {isScrollable ? (
          <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide">
            {teamMembers.map((member) => (
              <div
                key={member._id}
                className="min-w-[260px] md:min-w-[300px] snap-start 
                relative group rounded-2xl overflow-hidden
                border border-[var(--card-border)]
                bg-[var(--card-bg)]
                transition-all duration-500
                hover:border-[var(--primary-gold)]/40 hover:shadow-[0_20px_50px_rgba(0,0,0,0.7)]"
              >
                {/* IMAGE */}
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-[340px] md:h-[360px] object-cover
                  group-hover:scale-105 transition duration-700"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                {/* CONTENT */}
                <div className="absolute bottom-0 w-full p-5 text-center">
                  <h4 className="font-heading text-white text-lg font-medium tracking-tight">
                    {member.name}
                  </h4>

                  <p className="font-body text-gray-400 mt-2 text-[11px] tracking-[0.15em] uppercase">
                    {member.role}
                  </p>

                  <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-[var(--primary-gold)] to-transparent mx-auto mt-4 opacity-80"></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <div
                key={member._id}
                className="relative group rounded-2xl overflow-hidden
                border border-[var(--card-border)]
                bg-[var(--card-bg)]
                transition-all duration-500
                hover:border-[var(--primary-gold)]/40"
              >
                {/* IMAGE */}
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-[340px] md:h-[360px] object-cover
                  group-hover:scale-105 transition duration-700"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                {/* CONTENT */}
                <div className="absolute bottom-0 w-full p-5 text-center">
                  <h4 className="text-white text-lg font-medium">
                    {member.name}
                  </h4>

                  <p className="text-gray-400 mt-1 text-sm">{member.role}</p>

                  <div className="w-10 h-[2px] bg-[var(--primary-gold)] mx-auto mt-3"></div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
