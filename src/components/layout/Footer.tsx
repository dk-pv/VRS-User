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
import Image from "next/image";
import logo from "@/app/logo/4.png";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-black via-[#050b1a] to-black text-gray-400 pt-12 pb-6 overflow-hidden">
      {/* Gold Top Border */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        {/* Column 1 - Brand */}
        <div>
          {/* Logo */}
          <div className="mb-4">
            <Image
              src={logo}
              alt="VRS RealInvest Logo"
              width={140}
              height={50}
              className="object-contain"
            />
          </div>

          <p className="text-sm leading-relaxed text-gray-400 max-w-sm">
            Trusted real estate investment partner across Australia, delivering
            premium opportunities with clarity, confidence, and a proven
            process.
          </p>

          {/* Social Links */}
          <div className="flex gap-3 mt-6">
            <a
              href="https://www.facebook.com/VRSrealinvest"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-yellow-500 hover:text-black transition duration-300"
            >
              <Facebook size={16} />
            </a>

            <a
              href="https://www.instagram.com/vrsrealinvest/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-yellow-500 hover:text-black transition duration-300"
            >
              <Instagram size={16} />
            </a>

            <a
              href="https://www.linkedin.com/in/sudhesh-k-valappil/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-yellow-500 hover:text-black transition duration-300"
            >
              <Linkedin size={16} />
            </a>
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
              <Link
                href="/properties"
                className="hover:text-yellow-500 transition"
              >
                Properties
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-yellow-500 transition">
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-yellow-500 transition"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3 - Contact */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-base">Contact</h3>

          <a
            href="tel:+61412864050"
            className="flex items-center gap-3 mb-3 text-sm hover:text-yellow-500 transition"
          >
            <Phone size={16} />
            <span>+61 412 864 050</span>
          </a>

          <a
            href="mailto:sudhesh@vrsrealinvest.com.au"
            className="flex items-center gap-3 mb-3 text-sm hover:text-yellow-500 transition"
          >
            <Mail size={16} />
            <span>sudhesh@vrsrealinvest.com.au</span>
          </a>

          <div className="flex items-start gap-3 text-sm hover:text-yellow-500 transition">
            <MapPin size={16} />
            <span>Serving clients across Australia</span>
          </div>
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="border-t border-white/10 mt-8 pt-5 max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm">
        <p className="text-gray-500">
          © {new Date().getFullYear()} VRS realinvest. All rights reserved.
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
