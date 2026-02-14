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
// } from "lucide-react";

// export default function AboutSection() {
//   return (
//     <section className="relative py-24 bg-gradient-to-b from-black via-[#050b1a] to-[#0a1428] overflow-hidden">

//       {/* Background Pattern Glow */}
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,60,255,0.08),transparent_60%)]"></div>

//       <div className="relative max-w-6xl mx-auto px-6 text-center">

//         {/* ===================== */}
//         {/* WHO WE ARE (UNCHANGED) */}
//         {/* ===================== */}
//         <div className="mb-12">
//           <div className="w-14 h-[3px] bg-white mx-auto mb-3"></div>
//           <h2 className="text-4xl md:text-5xl font-semibold text-white">
//             Who We Are
//           </h2>
//           <p className="text-gray-400 mt-3 max-w-3xl mx-auto text-sm md:text-base">
//             VRS Real Invest is your trusted partner in real estate investment
//             across Australia. With over 15 years of experience, we specialize
//             in identifying premium investment opportunities that deliver
//             exceptional returns.
//           </p>
//         </div>

//         {/* Mission Card */}
//         <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-left mb-10">
//           <h3 className="text-white font-semibold mb-2 text-lg">
//             Our Mission
//           </h3>
//           <p className="text-gray-400 text-sm md:text-base">
//             To empower investors with access to Australia’s most prestigious
//             properties, providing expert guidance, transparent processes, and
//             unparalleled service throughout every transaction.
//           </p>
//         </div>

//         {/* Stats Grid */}
//         <div className="grid md:grid-cols-2 gap-6">

//           <div className="bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-2xl p-8 flex flex-col items-center text-center">
//             <div className="bg-white/10 p-3 rounded-full mb-3">
//               <Building2 size={22} className="text-white" />
//             </div>
//             <h4 className="text-2xl font-bold text-white">500+</h4>
//             <p className="text-gray-400 mt-1 text-sm">Properties Sold</p>
//           </div>

//           <div className="bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-2xl p-8 flex flex-col items-center text-center">
//             <div className="bg-white/10 p-3 rounded-full mb-3">
//               <Users size={22} className="text-white" />
//             </div>
//             <h4 className="text-2xl font-bold text-white">1000+</h4>
//             <p className="text-gray-400 mt-1 text-sm">Happy Clients</p>
//           </div>

//           <div className="bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-2xl p-8 flex flex-col items-center text-center">
//             <div className="bg-white/10 p-3 rounded-full mb-3">
//               <TrendingUp size={22} className="text-white" />
//             </div>
//             <h4 className="text-2xl font-bold text-white">$2B+</h4>
//             <p className="text-gray-400 mt-1 text-sm">Total Sales</p>
//           </div>

//           <div className="bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-2xl p-8 flex flex-col items-center text-center">
//             <div className="bg-white/10 p-3 rounded-full mb-3">
//               <Award size={22} className="text-white" />
//             </div>
//             <h4 className="text-2xl font-bold text-white">15+</h4>
//             <p className="text-gray-400 mt-1 text-sm">Years Experience</p>
//           </div>

//         </div>

//         <div className="mt-10 mb-20">
//           <span className="inline-block px-5 py-2 bg-white/10 border border-white/10 rounded-full text-sm text-gray-300 backdrop-blur-md">
//             AU Serving Clients Nationwide Across Australia
//           </span>
//         </div>

//         {/* ===================== */}
//         {/* WHY CHOOSE US (NEW) */}
//         {/* ===================== */}

//         <div className="mb-14">
//           <div className="w-14 h-[3px] bg-white mx-auto mb-3"></div>
//           <h2 className="text-4xl md:text-5xl font-semibold text-white">
//             Why Choose Us
//           </h2>
//           <p className="text-gray-400 mt-3 text-sm md:text-base">
//             Your success is our priority
//           </p>
//         </div>

//         <div className="grid md:grid-cols-3 gap-6">

//           <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-left">
//             <div className="bg-white/10 p-3 rounded-xl w-fit mb-4">
//               <Shield size={22} className="text-white" />
//             </div>
//             <h3 className="text-white font-semibold mb-2">
//               Trusted & Verified
//             </h3>
//             <p className="text-gray-400 text-sm">
//               All properties are thoroughly vetted and legally verified
//             </p>
//           </div>

//           <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-left">
//             <div className="bg-white/10 p-3 rounded-xl w-fit mb-4">
//               <Target size={22} className="text-white" />
//             </div>
//             <h3 className="text-white font-semibold mb-2">
//               Premium Locations
//             </h3>
//             <p className="text-gray-400 text-sm">
//               Access to Australia’s most sought-after investment areas
//             </p>
//           </div>

//           <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-left">
//             <div className="bg-white/10 p-3 rounded-xl w-fit mb-4">
//               <HeartHandshake size={22} className="text-white" />
//             </div>
//             <h3 className="text-white font-semibold mb-2">
//               Personalized Service
//             </h3>
//             <p className="text-gray-400 text-sm">
//               One-to-one consultation tailored to your goals
//             </p>
//           </div>

//           <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-left">
//             <div className="bg-white/10 p-3 rounded-xl w-fit mb-4">
//               <TrendingUp size={22} className="text-white" />
//             </div>
//             <h3 className="text-white font-semibold mb-2">
//               High ROI
//             </h3>
//             <p className="text-gray-400 text-sm">
//               Properties selected for maximum return on investment
//             </p>
//           </div>

//           <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-left">
//             <div className="bg-white/10 p-3 rounded-xl w-fit mb-4">
//               <Award size={22} className="text-white" />
//             </div>
//             <h3 className="text-white font-semibold mb-2">
//               15+ Years Experience
//             </h3>
//             <p className="text-gray-400 text-sm">
//               Industry expertise you can rely on
//             </p>
//           </div>

//           <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-left">
//             <div className="bg-white/10 p-3 rounded-xl w-fit mb-4">
//               <Clock size={22} className="text-white" />
//             </div>
//             <h3 className="text-white font-semibold mb-2">
//               Fast Process
//             </h3>
//             <p className="text-gray-400 text-sm">
//               Streamlined procedures for quick transactions
//             </p>
//           </div>

//         </div>

//       </div>
//     </section>
//   );
// }

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
} from "lucide-react";

export default function AboutSection() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-black via-[#050b1a] via-60% to-black overflow-hidden">
      {/* Background Pattern Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,60,255,0.08),transparent_60%)]"></div>

      <div className="relative max-w-6xl mx-auto px-6 text-center">
        {/* ===================== */}
        {/* WHO WE ARE */}
        {/* ===================== */}
        <div className="mb-12">
          <div className="w-14 h-[3px] bg-white mx-auto mb-3"></div>
          <h2 className="text-4xl md:text-5xl font-semibold text-white">
            Who We Are
          </h2>
          <p className="text-gray-400 mt-3 max-w-3xl mx-auto text-sm md:text-base">
            VRS Real Invest is your trusted partner in real estate investment
            across Australia. With over 15 years of experience, we specialize in
            identifying premium investment opportunities that deliver
            exceptional returns.
          </p>
        </div>

        {/* Mission Card */}
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-left mb-10">
          <h3 className="text-white font-semibold mb-2 text-lg">Our Mission</h3>
          <p className="text-gray-400 text-sm md:text-base">
            To empower investors with access to Australia’s most prestigious
            properties, providing expert guidance, transparent processes, and
            unparalleled service throughout every transaction.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-2xl p-8 flex flex-col items-center text-center">
            <div className="bg-white/10 p-3 rounded-full mb-3">
              <Building2 size={22} className="text-white" />
            </div>
            <h4 className="text-2xl font-bold text-white">500+</h4>
            <p className="text-gray-400 mt-1 text-sm">Properties Sold</p>
          </div>

          <div className="bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-2xl p-8 flex flex-col items-center text-center">
            <div className="bg-white/10 p-3 rounded-full mb-3">
              <Users size={22} className="text-white" />
            </div>
            <h4 className="text-2xl font-bold text-white">1000+</h4>
            <p className="text-gray-400 mt-1 text-sm">Happy Clients</p>
          </div>

          <div className="bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-2xl p-8 flex flex-col items-center text-center">
            <div className="bg-white/10 p-3 rounded-full mb-3">
              <TrendingUp size={22} className="text-white" />
            </div>
            <h4 className="text-2xl font-bold text-white">$2B+</h4>
            <p className="text-gray-400 mt-1 text-sm">Total Sales</p>
          </div>

          <div className="bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-2xl p-8 flex flex-col items-center text-center">
            <div className="bg-white/10 p-3 rounded-full mb-3">
              <Award size={22} className="text-white" />
            </div>
            <h4 className="text-2xl font-bold text-white">15+</h4>
            <p className="text-gray-400 mt-1 text-sm">Years Experience</p>
          </div>
        </div>

        <div className="mt-10 mb-20">
          <span className="inline-block px-5 py-2 bg-white/10 border border-white/10 rounded-full text-sm text-gray-300 backdrop-blur-md">
            AU Serving Clients Nationwide Across Australia
          </span>
        </div>

        {/* ===================== */}
        {/* WHY CHOOSE US */}
        {/* ===================== */}

        <div className="mb-14">
          <div className="w-14 h-[3px] bg-white mx-auto mb-3"></div>
          <h2 className="text-4xl md:text-5xl font-semibold text-white">
            Why Choose Us
          </h2>
          <p className="text-gray-400 mt-3 text-sm md:text-base">
            Your success is our priority
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: <Shield size={22} />,
              title: "Trusted & Verified",
              desc: "All properties are thoroughly vetted and legally verified",
            },
            {
              icon: <Target size={22} />,
              title: "Premium Locations",
              desc: "Access to Australia’s most sought-after investment areas",
            },
            {
              icon: <HeartHandshake size={22} />,
              title: "Personalized Service",
              desc: "One-to-one consultation tailored to your goals",
            },
            {
              icon: <TrendingUp size={22} />,
              title: "High ROI",
              desc: "Properties selected for maximum return on investment",
            },
            {
              icon: <Award size={22} />,
              title: "15+ Years Experience",
              desc: "Industry expertise you can rely on",
            },
            {
              icon: <Clock size={22} />,
              title: "Fast Process",
              desc: "Streamlined procedures for quick transactions",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 text-left"
            >
              <div className="bg-white/10 p-3 rounded-xl w-fit mb-4 text-white">
                {item.icon}
              </div>
              <h3 className="text-white font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* ===================== */}
        {/* NATIONWIDE COVERAGE */}
        {/* ===================== */}

        <div className="mt-24">
          <div className="mb-12 text-center">
            <div className="w-14 h-[3px] bg-white mx-auto mb-3"></div>
            <h2 className="text-4xl md:text-5xl font-semibold text-white">
              Nationwide Coverage
            </h2>
            <p className="text-gray-400 mt-3 text-sm md:text-base">
              Our presence across major Australian cities
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto rounded-3xl overflow-hidden border border-white/10">
            {/* Background Map */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(https://images.pexels.com/photos/35884953/pexels-photo-35884953.jpeg)`,
              }}
            ></div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30"></div>
{/* Animated Pins - Balanced Across Full Map */}
<div className="relative h-[420px]">

  {/* WESTERN AUSTRALIA */}
  <div className="absolute left-[15%] top-[70%] animate-[float_3s_ease-in-out_infinite]"><div className="pin"></div></div>
  <div className="absolute left-[20%] top-[60%] animate-[float_4s_ease-in-out_infinite]"><div className="pin"></div></div>

  {/* NORTHERN TERRITORY */}
  <div className="absolute left-[48%] top-[18%] animate-[float_3.5s_ease-in-out_infinite]"><div className="pin"></div></div>
  <div className="absolute left-[55%] top-[45%] animate-[float_3.8s_ease-in-out_infinite]"><div className="pin"></div></div>

  {/* SOUTH AUSTRALIA */}
  <div className="absolute left-[45%] top-[70%] animate-[float_3.2s_ease-in-out_infinite]"><div className="pin"></div></div>

  {/* VICTORIA */}
  <div className="absolute left-[55%] top-[78%] animate-[float_3.6s_ease-in-out_infinite]"><div className="pin"></div></div>
  <div className="absolute left-[50%] top-[75%] animate-[float_4s_ease-in-out_infinite]"><div className="pin"></div></div>

  {/* TASMANIA */}
  <div className="absolute left-[60%] top-[90%] animate-[float_4.2s_ease-in-out_infinite]"><div className="pin"></div></div>

  {/* NEW SOUTH WALES */}
  <div className="absolute left-[72%] top-[65%] animate-[float_3.4s_ease-in-out_infinite]"><div className="pin"></div></div>
  <div className="absolute left-[75%] top-[58%] animate-[float_3.7s_ease-in-out_infinite]"><div className="pin"></div></div>

  {/* QUEENSLAND */}
  <div className="absolute left-[78%] top-[48%] animate-[float_3.1s_ease-in-out_infinite]"><div className="pin"></div></div>
  <div className="absolute left-[82%] top-[35%] animate-[float_3.9s_ease-in-out_infinite]"><div className="pin"></div></div>
  <div className="absolute left-[85%] top-[25%] animate-[float_4.1s_ease-in-out_infinite]"><div className="pin"></div></div>

  {/* CENTRAL AUSTRALIA */}
  <div className="absolute left-[55%] top-[50%] animate-[float_3.3s_ease-in-out_infinite]"><div className="pin"></div></div>
  <div className="absolute left-[60%] top-[40%] animate-[float_3.6s_ease-in-out_infinite]"><div className="pin"></div></div>

</div>

            {/* Animated Pins */}
             </div>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {[
              "Perth",
              "Adelaide",
              "Melbourne",
              "Sydney",
              "Brisbane",
              "Gold Coast",
            ].map((city) => (
              <button
                key={city}
                className="px-6 py-2 rounded-full border border-white/20 bg-white/5 text-white text-sm hover:bg-white/10 transition"
              >
                {city}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
