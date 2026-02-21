"use client";

import {
  Building2,
  Users,
  TrendingUp,
  Award,
  Shield,
  Target,
  HeartHandshake,
  Clock,
  Gem,
  LineChart,
  Briefcase,
  Handshake,
} from "lucide-react";

export default function AboutSection() {
  return (
    <section className="relative bg-gradient-to-b from-black via-[#050b1a] to-black py-20 overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.05),transparent_70%)]"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* ===================== */}
        {/* WHO WE ARE */}
        {/* ===================== */}
        <div className="text-center mb-16">
          <div className="w-12 h-[2px] bg-yellow-500 mx-auto mb-4"></div>
          <h2 className="text-3xl md:text-4xl font-medium text-white">
            Who We Are
          </h2>
          <p className="text-gray-400 mt-4 max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
            VRS Real Invest is your trusted partner in real estate investment
            across Australia. With over 15 years of experience, we specialize in
            identifying premium investment opportunities that deliver
            exceptional returns.
          </p>
        </div>

        {/* Mission */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 mb-16 backdrop-blur-sm">
          <h3 className="text-white text-lg font-medium mb-3">Our Mission</h3>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            To empower investors with access to Australia’s most prestigious
            properties, providing expert guidance, transparent processes, and
            unparalleled service throughout every transaction.
          </p>
        </div>

        {/* ===================== */}
        {/* STATS */}
        {/* ===================== */}
        <div className="grid md:grid-cols-4 gap-6 mb-20">
          {[
            { icon: <Building2 size={20} />, value: "500+", label: "Properties Sold" },
            { icon: <Users size={20} />, value: "1000+", label: "Happy Clients" },
            { icon: <TrendingUp size={20} />, value: "$2B+", label: "Total Sales" },
            { icon: <Award size={20} />, value: "15+", label: "Years Experience" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition"
            >
              <div className="bg-white/10 p-2 rounded-full w-fit mx-auto mb-3 text-yellow-500">
                {item.icon}
              </div>
              <h4 className="text-xl font-semibold text-white">{item.value}</h4>
              <p className="text-gray-400 text-sm mt-1">{item.label}</p>
            </div>
          ))}
        </div>

        {/* ===================== */}
        {/* WHY CHOOSE US */}
        {/* ===================== */}
        <div className="text-center mb-14">
          <div className="w-12 h-[2px] bg-yellow-500 mx-auto mb-4"></div>
          <h2 className="text-3xl md:text-4xl font-medium text-white">
            Why Choose Us
          </h2>
          <p className="text-gray-400 mt-2 text-sm">
            Your success is our priority
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-24">
          {[
            { icon: <Shield size={20} />, title: "Trusted & Verified" },
            { icon: <Target size={20} />, title: "Premium Locations" },
            { icon: <HeartHandshake size={20} />, title: "Personalized Service" },
            { icon: <TrendingUp size={20} />, title: "High ROI" },
            { icon: <Award size={20} />, title: "15+ Years Experience" },
            { icon: <Clock size={20} />, title: "Fast Process" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-gradient-to-br from-[#0c1220] to-[#0f1b2e] border border-white/10 rounded-2xl p-6 text-left hover:border-yellow-500/40 transition"
            >
              <div className="bg-white/10 p-2 rounded-lg w-fit mb-4 text-yellow-500">
                {item.icon}
              </div>
              <h3 className="text-white font-medium">{item.title}</h3>
            </div>
          ))}
        </div>

        {/* ===================== */}
        {/* OUR CORE VALUES */}
        {/* ===================== */}
        <div className="text-center mb-14">
          <div className="w-12 h-[2px] bg-yellow-500 mx-auto mb-4"></div>
          <h2 className="text-3xl md:text-4xl font-medium text-white">
            Our Core Values
          </h2>
          <p className="text-gray-400 mt-2 text-sm">
            Principles that guide every investment decision
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-24">
          {[
            { icon: <Gem size={20} />, title: "Excellence" },
            { icon: <Handshake size={20} />, title: "Integrity" },
            { icon: <LineChart size={20} />, title: "Growth Focused" },
            { icon: <Briefcase size={20} />, title: "Professionalism" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition"
            >
              <div className="text-yellow-500 mb-3 flex justify-center">
                {item.icon}
              </div>
              <h4 className="text-white font-medium">{item.title}</h4>
            </div>
          ))}
        </div>

        {/* ===================== */}
        {/* INVESTMENT APPROACH */}
        {/* ===================== */}
        <div className="text-center mb-14">
          <div className="w-12 h-[2px] bg-yellow-500 mx-auto mb-4"></div>
          <h2 className="text-3xl md:text-4xl font-medium text-white">
            Our Investment Approach
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-24">
          {[
            "Market Research & Analysis",
            "Premium Property Selection",
            "Risk Assessment & Strategy",
            "Legal & Compliance Review",
            "Acquisition & Negotiation",
            "Ongoing Portfolio Support",
          ].map((step, i) => (
            <div
              key={i}
              className="bg-gradient-to-br from-[#0c1220] to-[#0f1b2e] border border-white/10 rounded-2xl p-6 text-center hover:border-yellow-500/40 transition"
            >
              <div className="text-yellow-500 font-semibold mb-2">
                Step {i + 1}
              </div>
              <p className="text-gray-300 text-sm">{step}</p>
            </div>
          ))}
        </div>

        {/* ===================== */}
        {/* PREMIUM CTA */}
        {/* ===================== */}
        <div className="bg-gradient-to-r from-[#0f1b2e] to-[#050b1a] border border-yellow-500/20 rounded-3xl p-10 text-center">
          <h3 className="text-2xl md:text-3xl text-white font-medium mb-4">
            Ready to Start Your Investment Journey?
          </h3>
          <p className="text-gray-400 mb-8 text-sm md:text-base">
            Partner with VRS Real Invest and secure premium real estate
            opportunities today.
          </p>

          <button className="bg-yellow-500 text-black px-8 py-3 rounded-lg font-medium hover:bg-yellow-400 transition">
            Get Free Consultation
          </button>
        </div>

      </div>
    </section>
  );
}