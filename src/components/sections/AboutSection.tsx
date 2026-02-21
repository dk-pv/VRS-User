// "use client";

// import {
//   Building2,
//   Users,
//   TrendingUp,
//   Award,
//   Shield,
//   Target,
//   HeartHandshake,
//   Clock,
//   Gem,
//   LineChart,
//   Briefcase,
//   Handshake,
// } from "lucide-react";

// export default function AboutSection() {
//   return (
//     <section className="relative bg-gradient-to-b from-black via-[#050b1a] to-black py-20 overflow-hidden">
//       {/* Subtle Background Glow */}
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.05),transparent_70%)]"></div>

//       <div className="relative max-w-7xl mx-auto px-6">

//         {/* ===================== */}
//         {/* WHO WE ARE */}
//         {/* ===================== */}
//         <div className="text-center mb-16">
//           <div className="w-12 h-[2px] bg-yellow-500 mx-auto mb-4"></div>
//           <h2 className="text-3xl md:text-4xl font-medium text-white">
//             Who We Are
//           </h2>
//           <p className="text-gray-400 mt-4 max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
//             VRS Real Invest is your trusted partner in real estate investment
//             across Australia. With over 15 years of experience, we specialize in
//             identifying premium investment opportunities that deliver
//             exceptional returns.
//           </p>
//         </div>

//         {/* Mission */}
//         <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 mb-16 backdrop-blur-sm">
//           <h3 className="text-white text-lg font-medium mb-3">Our Mission</h3>
//           <p className="text-gray-400 text-sm md:text-base leading-relaxed">
//             To empower investors with access to Australia’s most prestigious
//             properties, providing expert guidance, transparent processes, and
//             unparalleled service throughout every transaction.
//           </p>
//         </div>

//         {/* ===================== */}
//         {/* STATS */}
//         {/* ===================== */}
//         <div className="grid md:grid-cols-4 gap-6 mb-20">
//           {[
//             { icon: <Building2 size={20} />, value: "500+", label: "Properties Sold" },
//             { icon: <Users size={20} />, value: "1000+", label: "Happy Clients" },
//             { icon: <TrendingUp size={20} />, value: "$2B+", label: "Total Sales" },
//             { icon: <Award size={20} />, value: "15+", label: "Years Experience" },
//           ].map((item, i) => (
//             <div
//               key={i}
//               className="bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition"
//             >
//               <div className="bg-white/10 p-2 rounded-full w-fit mx-auto mb-3 text-yellow-500">
//                 {item.icon}
//               </div>
//               <h4 className="text-xl font-semibold text-white">{item.value}</h4>
//               <p className="text-gray-400 text-sm mt-1">{item.label}</p>
//             </div>
//           ))}
//         </div>

//         {/* ===================== */}
//         {/* WHY CHOOSE US */}
//         {/* ===================== */}
//         <div className="text-center mb-14">
//           <div className="w-12 h-[2px] bg-yellow-500 mx-auto mb-4"></div>
//           <h2 className="text-3xl md:text-4xl font-medium text-white">
//             Why Choose Us
//           </h2>
//           <p className="text-gray-400 mt-2 text-sm">
//             Your success is our priority
//           </p>
//         </div>

//         <div className="grid md:grid-cols-3 gap-6 mb-24">
//           {[
//             { icon: <Shield size={20} />, title: "Trusted & Verified" },
//             { icon: <Target size={20} />, title: "Premium Locations" },
//             { icon: <HeartHandshake size={20} />, title: "Personalized Service" },
//             { icon: <TrendingUp size={20} />, title: "High ROI" },
//             { icon: <Award size={20} />, title: "15+ Years Experience" },
//             { icon: <Clock size={20} />, title: "Fast Process" },
//           ].map((item, i) => (
//             <div
//               key={i}
//               className="bg-gradient-to-br from-[#0c1220] to-[#0f1b2e] border border-white/10 rounded-2xl p-6 text-left hover:border-yellow-500/40 transition"
//             >
//               <div className="bg-white/10 p-2 rounded-lg w-fit mb-4 text-yellow-500">
//                 {item.icon}
//               </div>
//               <h3 className="text-white font-medium">{item.title}</h3>
//             </div>
//           ))}
//         </div>

//         {/* ===================== */}
//         {/* OUR CORE VALUES */}
//         {/* ===================== */}
//         <div className="text-center mb-14">
//           <div className="w-12 h-[2px] bg-yellow-500 mx-auto mb-4"></div>
//           <h2 className="text-3xl md:text-4xl font-medium text-white">
//             Our Core Values
//           </h2>
//           <p className="text-gray-400 mt-2 text-sm">
//             Principles that guide every investment decision
//           </p>
//         </div>

//         <div className="grid md:grid-cols-4 gap-6 mb-24">
//           {[
//             { icon: <Gem size={20} />, title: "Excellence" },
//             { icon: <Handshake size={20} />, title: "Integrity" },
//             { icon: <LineChart size={20} />, title: "Growth Focused" },
//             { icon: <Briefcase size={20} />, title: "Professionalism" },
//           ].map((item, i) => (
//             <div
//               key={i}
//               className="bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition"
//             >
//               <div className="text-yellow-500 mb-3 flex justify-center">
//                 {item.icon}
//               </div>
//               <h4 className="text-white font-medium">{item.title}</h4>
//             </div>
//           ))}
//         </div>

//         {/* ===================== */}
//         {/* INVESTMENT APPROACH */}
//         {/* ===================== */}
//         <div className="text-center mb-14">
//           <div className="w-12 h-[2px] bg-yellow-500 mx-auto mb-4"></div>
//           <h2 className="text-3xl md:text-4xl font-medium text-white">
//             Our Investment Approach
//           </h2>
//         </div>

//         <div className="grid md:grid-cols-3 gap-6 mb-24">
//           {[
//             "Market Research & Analysis",
//             "Premium Property Selection",
//             "Risk Assessment & Strategy",
//             "Legal & Compliance Review",
//             "Acquisition & Negotiation",
//             "Ongoing Portfolio Support",
//           ].map((step, i) => (
//             <div
//               key={i}
//               className="bg-gradient-to-br from-[#0c1220] to-[#0f1b2e] border border-white/10 rounded-2xl p-6 text-center hover:border-yellow-500/40 transition"
//             >
//               <div className="text-yellow-500 font-semibold mb-2">
//                 Step {i + 1}
//               </div>
//               <p className="text-gray-300 text-sm">{step}</p>
//             </div>
//           ))}
//         </div>

//         {/* ===================== */}
//         {/* PREMIUM CTA */}
//         {/* ===================== */}
//         <div className="bg-gradient-to-r from-[#0f1b2e] to-[#050b1a] border border-yellow-500/20 rounded-3xl p-10 text-center">
//           <h3 className="text-2xl md:text-3xl text-white font-medium mb-4">
//             Ready to Start Your Investment Journey?
//           </h3>
//           <p className="text-gray-400 mb-8 text-sm md:text-base">
//             Partner with VRS Real Invest and secure premium real estate
//             opportunities today.
//           </p>

//           <button className="bg-yellow-500 text-black px-8 py-3 rounded-lg font-medium hover:bg-yellow-400 transition">
//             Get Free Consultation
//           </button>
//         </div>

//       </div>
//     </section>
//   );
// }



"use client";

import { Building2, Award, ShieldCheck, TrendingUp } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="bg-black text-white py-28">
      <div className="max-w-6xl mx-auto px-6">

        {/* ===================== */}
        {/* HEADLINE */}
        {/* ===================== */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-light tracking-wide mb-6">
            Redefining Luxury Real Estate
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
            VRS Real Invest delivers premium property investment opportunities 
            across Australia. We combine strategic insight, market expertise, 
            and uncompromising integrity to help our clients build lasting wealth.
          </p>
        </div>

        {/* ===================== */}
        {/* SPLIT SECTION */}
        {/* ===================== */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-28">

          {/* Left Text */}
          <div>
            <h3 className="text-2xl font-medium mb-6">
              Built on Experience. Driven by Results.
            </h3>

            <p className="text-gray-400 leading-relaxed mb-6">
              With over 15 years of experience in the Australian property market, 
              we specialize in identifying high-performing investment opportunities 
              in premium locations.
            </p>

            <p className="text-gray-400 leading-relaxed">
              Our approach is simple — strategic research, transparent advice, 
              and long-term partnership. We don't just sell properties. 
              We build investment portfolios.
            </p>
          </div>

          {/* Right Visual Block */}
          <div className="bg-gradient-to-br from-[#0f172a] to-[#0b1220] 
                          rounded-3xl p-10 border border-white/10">
            <div className="space-y-8">

              <div className="flex items-center gap-4">
                <Building2 className="text-yellow-500" size={26} />
                <div>
                  <h4 className="font-medium">500+ Properties Secured</h4>
                  <p className="text-gray-500 text-sm">
                    Proven transaction success
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <TrendingUp className="text-yellow-500" size={26} />
                <div>
                  <h4 className="font-medium">$2B+ Total Sales</h4>
                  <p className="text-gray-500 text-sm">
                    Strong market performance
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <ShieldCheck className="text-yellow-500" size={26} />
                <div>
                  <h4 className="font-medium">Trusted & Transparent</h4>
                  <p className="text-gray-500 text-sm">
                    Ethical investment guidance
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Award className="text-yellow-500" size={26} />
                <div>
                  <h4 className="font-medium">15+ Years Experience</h4>
                  <p className="text-gray-500 text-sm">
                    Deep industry expertise
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* ===================== */}
        {/* LUXURY CTA */}
        {/* ===================== */}
        <div className="text-center border-t border-white/10 pt-16">
          <h3 className="text-3xl font-light mb-6">
            Invest With Confidence
          </h3>

          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Partner with VRS Real Invest and gain access to Australia's 
            most exclusive property opportunities.
          </p>

          <button className="bg-yellow-500 text-black px-10 py-4 rounded-lg 
                             font-medium tracking-wide hover:bg-yellow-400 
                             transition duration-300">
            Schedule a Private Consultation
          </button>
        </div>

      </div>
    </section>
  );
}