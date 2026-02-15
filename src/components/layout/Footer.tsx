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
    <footer className="relative bg-gradient-to-b from-black via-[#050b1a] to-black text-gray-400 pt-10 pb-6 overflow-hidden">

  {/* Gold Top Border */}
  <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>

  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">

    {/* Column 1 */}
    <div>
      <h2 className="text-white text-xl font-semibold mb-3 tracking-wide">
        VRS Real Invest
      </h2>

      <p className="text-sm leading-relaxed text-gray-400">
        Trusted real estate investment partner across Australia.
      </p>

      <div className="flex gap-3 mt-4">
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

    {/* Column 2 */}
    <div>
      <h3 className="text-white font-semibold mb-3 text-base">
        Quick Links
      </h3>
      <ul className="space-y-2 text-sm">
        <li><Link href="/" className="hover:text-yellow-500 transition">Home</Link></li>
        <li><Link href="/properties" className="hover:text-yellow-500 transition">Properties</Link></li>
        <li><Link href="/blog" className="hover:text-yellow-500 transition">Blog</Link></li>
        <li><Link href="#" className="hover:text-yellow-500 transition">Contact</Link></li>
      </ul>
    </div>

    {/* Column 3 */}
    <div>
      <h3 className="text-white font-semibold mb-3 text-base">
        Services
      </h3>
      <ul className="space-y-2 text-sm">
        <li className="hover:text-yellow-500 transition cursor-pointer">Investment</li>
        <li className="hover:text-yellow-500 transition cursor-pointer">Market Analysis</li>
        <li className="hover:text-yellow-500 transition cursor-pointer">Portfolio</li>
        <li className="hover:text-yellow-500 transition cursor-pointer">Consultation</li>
      </ul>
    </div>

    {/* Column 4 */}
    <div>
      <h3 className="text-white font-semibold mb-3 text-base">
        Contact
      </h3>

      <div className="flex items-center gap-2 mb-2 text-sm hover:text-yellow-500 transition">
        <Phone size={16} />
        <span>+91 7012832207</span>
      </div>

      <div className="flex items-center gap-2 mb-2 text-sm hover:text-yellow-500 transition">
        <Mail size={16} />
        <span>info@drawaymedia.com</span>
      </div>

      <div className="flex items-start gap-2 text-sm hover:text-yellow-500 transition">
        <MapPin size={16} />
        <span>Australia</span>
      </div>
    </div>
  </div>

  {/* Bottom Divider */}
  <div className="border-t border-white/10 mt-6 pt-4 max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm">
    <p className="text-gray-500">
      © 2026 VRS Real Invest.
    </p>

    <div className="flex gap-5 mt-2 md:mt-0">
      <Link href="#" className="hover:text-yellow-500 transition">
        Privacy
      </Link>
      <Link href="#" className="hover:text-yellow-500 transition">
        Terms
      </Link>
    </div>
  </div>
</footer>
  );
}
