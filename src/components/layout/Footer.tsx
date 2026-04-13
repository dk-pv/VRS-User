import {
  Facebook,
  Instagram,
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
    <footer className="relative bg-[var(--background)] text-gray-400 pt-7 pb-4 overflow-hidden font-body">
      {/* TOP LINE */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--primary-gold)]/50 to-transparent"></div>

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-5 items-start">
        
        {/* COLUMN 1 */}
        <div className="space-y-3">
          <Image
            src={logo}
            alt="VRS RealInvest Logo"
            width={105}
            height={35}
            className="object-contain"
          />

          <p className="text-sm leading-relaxed text-gray-400 max-w-sm tracking-wide">
            Trusted real estate investment partner across Australia, delivering
            premium opportunities with clarity and confidence.
          </p>

          <div className="flex gap-2 pt-1">
            {[Facebook, Instagram, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-7 h-7 bg-white/5 border border-[var(--card-border)] rounded-full flex items-center justify-center hover:bg-[var(--primary-gold)] hover:text-[#221F1F] transition"
              >
                <Icon size={13} />
              </a>
            ))}
          </div>
        </div>

        {/* COLUMN 2 */}
        <div className="space-y-3">
          <h3 className="text-white font-heading text-base font-medium tracking-wide">
            Quick Links
          </h3>

          <ul className="space-y-1.5 text-sm tracking-wide">
            <li>
              <Link href="/" className="hover:text-[var(--primary-gold)] transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/properties" className="hover:text-[var(--primary-gold)] transition">
                Properties
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-[var(--primary-gold)] transition">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-[var(--primary-gold)] transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* COLUMN 3 */}
        <div className="space-y-3">
          <h3 className="text-white font-heading text-base font-medium tracking-wide">
            Contact
          </h3>

          <a
            href="tel:+61412864050"
            className="flex items-center gap-2 text-sm tracking-wide hover:text-[var(--primary-gold)] transition"
          >
            <Phone size={14} />
            +61 412 864 050
          </a>

          <a
            href="mailto:sudhesh@vrsrealinvest.com.au"
            className="flex items-center gap-2 text-sm tracking-wide hover:text-[var(--primary-gold)] transition"
          >
            <Mail size={14} />
            sudhesh@vrsrealinvest.com.au
          </a>

          <div className="flex items-start gap-2 text-sm tracking-wide">
            <MapPin size={14} />
            Serving clients across Australia
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-[var(--card-border)] mt-4 pt-3 max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-xs font-body tracking-wide">
        <p className="text-gray-500">
          © {new Date().getFullYear()} VRS RealInvest. All rights reserved.
        </p>

        <div className="flex gap-4 mt-2 md:mt-0">
          <Link href="/privacy-policy" className="hover:text-[var(--primary-gold)] transition">
            Privacy Policy
          </Link>
          <Link href="/terms-and-conditions" className="hover:text-[var(--primary-gold)] transition">
            Terms & Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
}