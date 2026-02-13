"use client";

import { Building2, Users, TrendingUp, Award } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="relative py-32 bg-gradient-to-b from-black via-[#050b1a] to-[#0a1428] overflow-hidden">
      
      {/* Background Pattern Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,60,255,0.08),transparent_60%)]"></div>

      <div className="relative max-w-6xl mx-auto px-6 text-center">
        
        {/* Heading */}
        <div className="mb-16">
          <div className="w-16 h-[3px] bg-white mx-auto mb-4"></div>
          <h2 className="text-4xl md:text-5xl font-semibold text-white">
            Who We Are
          </h2>
          <p className="text-gray-400 mt-4 max-w-3xl mx-auto text-sm md:text-base">
            VRS Real Invest is your trusted partner in real estate investment
            across Australia. With over 15 years of experience, we specialize
            in identifying premium investment opportunities that deliver
            exceptional returns.
          </p>
        </div>

        {/* Mission Card */}
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 text-left mb-12">
          <h3 className="text-white font-semibold mb-3 text-lg">
            Our Mission
          </h3>
          <p className="text-gray-400 text-sm md:text-base">
            To empower investors with access to Australia’s most prestigious
            properties, providing expert guidance, transparent processes, and
            unparalleled service throughout every transaction.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Card 1 */}
          <div className="bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-2xl p-10 flex flex-col items-center text-center">
            <div className="bg-white/10 p-4 rounded-full mb-4">
              <Building2 size={24} className="text-white" />
            </div>
            <h4 className="text-3xl font-bold text-white">500+</h4>
            <p className="text-gray-400 mt-2 text-sm">Properties Sold</p>
          </div>

          {/* Card 2 */}
          <div className="bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-2xl p-10 flex flex-col items-center text-center">
            <div className="bg-white/10 p-4 rounded-full mb-4">
              <Users size={24} className="text-white" />
            </div>
            <h4 className="text-3xl font-bold text-white">1000+</h4>
            <p className="text-gray-400 mt-2 text-sm">Happy Clients</p>
          </div>

          {/* Card 3 */}
          <div className="bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-2xl p-10 flex flex-col items-center text-center">
            <div className="bg-white/10 p-4 rounded-full mb-4">
              <TrendingUp size={24} className="text-white" />
            </div>
            <h4 className="text-3xl font-bold text-white">$2B+</h4>
            <p className="text-gray-400 mt-2 text-sm">Total Sales</p>
          </div>

          {/* Card 4 */}
          <div className="bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-2xl p-10 flex flex-col items-center text-center">
            <div className="bg-white/10 p-4 rounded-full mb-4">
              <Award size={24} className="text-white" />
            </div>
            <h4 className="text-3xl font-bold text-white">15+</h4>
            <p className="text-gray-400 mt-2 text-sm">Years Experience</p>
          </div>

        </div>

        {/* Bottom Badge */}
        <div className="mt-12">
          <span className="inline-block px-6 py-3 bg-white/10 border border-white/10 rounded-full text-sm text-gray-300 backdrop-blur-md">
            AU Serving Clients Nationwide Across Australia
          </span>
        </div>
      </div>
    </section>
  );
}
