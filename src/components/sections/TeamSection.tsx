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
    <section className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <div className="w-12 h-[2px] bg-white mx-auto mb-4"></div>
          <h2 className="text-3xl md:text-4xl font-medium text-white">
            Meet Our Team
          </h2>
          <p className="text-gray-400 mt-2 text-sm">
            Expert professionals dedicated to your success
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {teamMembers.map((member) => (
            <div
              key={member._id}
              className="relative group rounded-2xl overflow-hidden border border-white/10"
            >
              <img
                src={member.image}
                className="w-full h-[300px] object-cover group-hover:scale-105 transition duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>

              <div className="absolute bottom-0 w-full p-5 text-center">
                <h4 className="text-white font-medium">
                  {member.name}
                </h4>
                <p className="text-gray-400 text-sm mb-2">
                  {member.role}
                </p>
                <div className="w-8 h-[2px] bg-white mx-auto"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
