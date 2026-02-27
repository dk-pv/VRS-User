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

 return (
  <section className="bg-gradient-to-b from-black to-[#0f172a] py-28">
    <div className="max-w-7xl mx-auto px-6">

      {/* Header */}
      <div className="text-center mb-20">
        <div className="w-16 h-[3px] bg-yellow-400 mx-auto mb-6"></div>
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Meet Our Team
        </h2>
        <p className="text-gray-400 mt-4 text-lg">
          Experienced professionals dedicated to helping you create real freedom
        </p>
      </div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {teamMembers.map((member) => (
          <div
            key={member._id}
            className="relative group rounded-3xl overflow-hidden border border-white/10 
                       hover:border-yellow-400/60 transition-all duration-500
                       shadow-lg hover:shadow-[0_25px_60px_rgba(0,0,0,0.6)]"
          >
            {/* Image */}
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-[420px] object-cover 
                         group-hover:scale-110 transition duration-700"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t 
                            from-black via-black/70 to-transparent"></div>

            {/* Content */}
            <div className="absolute bottom-0 w-full p-8 text-center">
              <h4 className="text-white text-xl font-semibold tracking-wide">
                {member.name}
              </h4>
              <p className="text-gray-400 text-base mt-2">
                {member.role}
              </p>
              <div className="w-12 h-[2px] bg-yellow-400 mx-auto mt-4"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
}