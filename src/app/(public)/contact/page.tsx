// "use client";

// import { Phone, Mail } from "lucide-react";

// export default function ContactPage() {
//   return (
//     <main className="pt-28 bg-black text-white min-h-screen">

//       <section className="py-20">

//         <div className="max-w-4xl mx-auto px-6">

//           {/* Header */}
//           <div className="text-center mb-14">
//             <div className="w-12 h-[2px] bg-yellow-500 mx-auto mb-4"></div>
//             <h1 className="text-3xl md:text-4xl font-medium tracking-wide">
//               Get In Touch
//             </h1>
//             <p className="text-gray-400 mt-3 text-sm">
//               Let’s discuss your next premium property investment.
//             </p>
//           </div>

//           {/* Contact Card */}
//           <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-10 shadow-[0_20px_60px_rgba(0,0,0,0.6)]">

//             {/* Contact Info */}
//             <div className="flex flex-col md:flex-row md:justify-between gap-8 mb-12">

//               <div className="flex items-center gap-4">
//                 <div className="bg-yellow-500/10 p-3 rounded-xl">
//                   <Phone className="text-yellow-500" size={20} />
//                 </div>
//                 <div>
//                   <p className="text-gray-400 text-sm">Phone</p>
//                   <p className="text-white font-medium">
//                     +91 7012832207
//                   </p>
//                 </div>
//               </div>

//               <div className="flex items-center gap-4">
//                 <div className="bg-yellow-500/10 p-3 rounded-xl">
//                   <Mail className="text-yellow-500" size={20} />
//                 </div>
//                 <div>
//                   <p className="text-gray-400 text-sm">Email</p>
//                   <p className="text-white font-medium">
//                     info@drawaymedia.com
//                   </p>
//                 </div>
//               </div>

//             </div>

//             {/* Form */}
//             <form className="space-y-6">

//               <div className="grid md:grid-cols-2 gap-6">
//                 <input
//                   type="text"
//                   placeholder="Full Name"
//                   className="bg-black/40 border border-white/10 rounded-lg px-4 py-3 focus:border-yellow-500 focus:outline-none transition text-sm"
//                 />
//                 <input
//                   type="email"
//                   placeholder="Email Address"
//                   className="bg-black/40 border border-white/10 rounded-lg px-4 py-3 focus:border-yellow-500 focus:outline-none transition text-sm"
//                 />
//               </div>

//               <textarea
//                 rows={5}
//                 placeholder="Your Message"
//                 className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 focus:border-yellow-500 focus:outline-none transition resize-none text-sm"
//               ></textarea>

//               <button
//                 type="submit"
//                 className="w-full bg-yellow-500 text-black py-3 rounded-lg font-medium hover:bg-yellow-400 transition-all duration-300"
//               >
//                 Send Message
//               </button>

//             </form>

//           </div>

//         </div>

//       </section>

//     </main>
//   );
// }




"use client";

import { Phone, Mail } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const API = process.env.NEXT_PUBLIC_API_BASE_URL;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const res = await fetch(`${API}/api/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    });

    if (res.ok) {
      setStatus("Message sent successfully ✅");
      setName("");
      setEmail("");
      setMessage("");
    } else {
      setStatus("Something went wrong ❌");
    }
  };

  return (
    <main className="pt-28 bg-black text-white min-h-screen">
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-14">
            <div className="w-12 h-[2px] bg-yellow-500 mx-auto mb-4"></div>
            <h1 className="text-3xl md:text-4xl font-medium tracking-wide">
              Get In Touch
            </h1>
            <p className="text-gray-400 mt-3 text-sm">
              Let’s discuss your next premium property investment.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-10 shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm"
                />
              </div>

              <textarea
                rows={5}
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-yellow-500 text-black py-3 rounded-lg font-medium"
              >
                Send Message
              </button>

              {status && (
                <p className="text-center text-sm mt-3">
                  {status}
                </p>
              )}
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}