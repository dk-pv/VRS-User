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
    <footer className="relative bg-gradient-to-b from-black via-[#050b1a] to-black text-gray-400 pt-24 pb-12 overflow-hidden">
      {/* Gold Top Border */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-14">
        {/* Column 1 */}
        <div>
          <h2 className="text-white text-2xl font-semibold mb-5 tracking-wide">
            VRS Real Invest
          </h2>

          <p className="text-sm leading-relaxed text-gray-400">
            Your trusted partner in real estate investment across Australia.
            Building long-term wealth through premium property opportunities.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-8">
            {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
              <div
                key={i}
                className="w-11 h-11 bg-white/5 border border-white/10 rounded-full flex items-center justify-center 
                hover:bg-yellow-500 hover:text-black hover:scale-110 transition duration-300 cursor-pointer backdrop-blur-md"
              >
                <Icon size={18} />
              </div>
            ))}
          </div>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-white font-semibold mb-6 tracking-wide">
            Quick Links
          </h3>
          <ul className="space-y-4 text-sm">
            <li>
              <Link href="/" className="hover:text-yellow-500 transition">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/properties"
                className="hover:text-yellow-500 transition"
              >
                Properties
              </Link>
            </li>
            <li>
              <a href="#about" className="hover:text-yellow-500 transition">
                About Us
              </a>
            </li>
            <li>
              <Link href="/blog" className="hover:text-yellow-500 transition">
                Blog
              </Link>
            </li>
            <li>
              <a href="#contact" className="hover:text-yellow-500 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-white font-semibold mb-6 tracking-wide">
            Services
          </h3>
          <ul className="space-y-4 text-sm">
            <li className="hover:text-yellow-500 transition cursor-pointer">
              Property Investment
            </li>
            <li className="hover:text-yellow-500 transition cursor-pointer">
              Market Analysis
            </li>
            <li className="hover:text-yellow-500 transition cursor-pointer">
              Portfolio Management
            </li>
            <li className="hover:text-yellow-500 transition cursor-pointer">
              Legal Assistance
            </li>
            <li className="hover:text-yellow-500 transition cursor-pointer">
              Free Consultation
            </li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="text-white font-semibold mb-6 tracking-wide">
            Contact Us
          </h3>

          <div className="flex items-center gap-3 mb-5 text-sm hover:text-yellow-500 transition">
            <Phone size={18} />
            <span>+91 7012832207</span>
          </div>

          <div className="flex items-center gap-3 mb-5 text-sm hover:text-yellow-500 transition">
            <Mail size={18} />
            <span>info@drawaymedia.com</span>
          </div>

          <div className="flex items-start gap-3 text-sm hover:text-yellow-500 transition">
            <MapPin size={18} />
            <span>Serving clients nationwide across Australia</span>
          </div>
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="border-t border-white/10 mt-16 pt-8 max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm">
        <p className="text-gray-500">
          © 2026 VRS Real Invest. All rights reserved.
        </p>

        <div className="flex gap-8 mt-4 md:mt-0">
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
