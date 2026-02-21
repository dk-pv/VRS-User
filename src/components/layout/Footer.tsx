import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-black via-[#050b1a] to-black text-gray-400 pt-12 pb-6 overflow-hidden">

      {/* Gold Top Border */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">

        {/* Column 1 - Brand */}
        <div>
          <h2 className="text-white text-xl font-semibold mb-4 tracking-wide">
            VRS RealInvest
          </h2>

          <p className="text-sm leading-relaxed text-gray-400 max-w-sm">
            Trusted real estate investment partner across Australia,
            delivering premium opportunities with confidence.
          </p>

          <div className="flex gap-3 mt-6">
            {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
              <div
                key={i}
                className="w-9 h-9 bg-white/5 border border-white/10 rounded-full flex items-center justify-center 
                hover:bg-yellow-500 hover:text-black transition duration-300 cursor-pointer"
              >
                <Icon size={16} />
              </div>
            ))}
          </div>
        </div>

        {/* Column 2 - Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-base">
            Quick Links
          </h3>
          <ul className="space-y-3 text-sm">
            <li>
              <Link href="/" className="hover:text-yellow-500 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/properties" className="hover:text-yellow-500 transition">
                Properties
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-yellow-500 transition">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-yellow-500 transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3 - Contact */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-base">
            Contact
          </h3>

          <div className="flex items-center gap-3 mb-3 text-sm hover:text-yellow-500 transition">
            <Phone size={16} />
            <span>+91 7012832207</span>
          </div>

          <div className="flex items-center gap-3 mb-3 text-sm hover:text-yellow-500 transition">
            <Mail size={16} />
            <span>info@drawaymedia.com</span>
          </div>

          <div className="flex items-start gap-3 text-sm hover:text-yellow-500 transition">
            <MapPin size={16} />
            <span>Serving clients across Australia</span>
          </div>
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="border-t border-white/10 mt-8 pt-5 max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm">
        <p className="text-gray-500">
          © 2026 VRS RealInvest. All rights reserved.
        </p>

        <div className="flex gap-6 mt-3 md:mt-0">
          <Link href="#" className="hover:text-yellow-500 transition">
            Privacy Policy
          </Link>
          <Link href="#" className="hover:text-yellow-500 transition">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}