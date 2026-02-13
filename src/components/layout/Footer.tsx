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
    <footer className="bg-black text-gray-400 pt-20 pb-10 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
        
        {/* Column 1 */}
        <div>
          <h2 className="text-white text-xl font-bold mb-4">
            VRS Real Invest
          </h2>
          <p className="text-sm leading-relaxed">
            Your trusted partner in real estate investment across Australia.
            Building wealth through premium property opportunities.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
              <div
                key={i}
                className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center hover:bg-yellow-500 hover:text-black transition cursor-pointer"
              >
                <Icon size={18} />
              </div>
            ))}
          </div>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/properties">Properties</Link></li>
            <li><a href="#about">About Us</a></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-white font-semibold mb-4">Services</h3>
          <ul className="space-y-3">
            <li>Property Investment</li>
            <li>Market Analysis</li>
            <li>Portfolio Management</li>
            <li>Legal Assistance</li>
            <li>Free Consultation</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact Us</h3>

          <div className="flex items-center gap-3 mb-4">
            <Phone size={18} />
            <span>+91 7012832207</span>
          </div>

          <div className="flex items-center gap-3 mb-4">
            <Mail size={18} />
            <span>info@drawaymedia.com</span>
          </div>

          <div className="flex items-center gap-3">
            <MapPin size={18} />
            <span>Serving clients nationwide across Australia</span>
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="border-t border-gray-800 mt-16 pt-6 max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm">
        <p>© 2026 VRS Real Invest. All rights reserved.</p>

        <div className="flex gap-6 mt-4 md:mt-0">
          <Link href="#">Privacy Policy</Link>
          <Link href="#">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
