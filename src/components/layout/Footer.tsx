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
   <footer className="relative bg-[var(--background)] text-gray-400 pt-4 pb-2 overflow-hidden font-body">
  {/* TOP LINE */}
  <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--primary-gold)]/50 to-transparent"></div>

  <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-3 items-start">
    
    {/* COLUMN 1 */}
    <div className="space-y-1.5">
      <Image
        src={logo}
        alt="VRS RealInvest Logo"
        width={85}
        height={28}
        className="object-contain"
      />

      <p className="text-[11px] leading-relaxed text-gray-400 max-w-xs tracking-wide">
        Trusted real estate investment partner across Australia.
      </p>

      <div className="flex gap-1.5 pt-1">
        {[Facebook, Instagram, Linkedin].map((Icon, i) => (
          <a
            key={i}
            href="#"
            className="w-5 h-5 bg-white/5 border border-[var(--card-border)] rounded-full flex items-center justify-center hover:bg-[var(--primary-gold)] hover:text-[#221F1F] transition"
          >
            <Icon size={11} />
          </a>
        ))}
      </div>
    </div>

    {/* COLUMN 2 */}
    <div className="space-y-1.5">
      <h3 className="text-white font-heading text-xs font-medium tracking-wide">
        Quick Links
      </h3>

      <ul className="space-y-0.5 text-[11px] tracking-wide">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/properties">Properties</Link></li>
        <li><Link href="/blog">Blog</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </div>

    {/* COLUMN 3 */}
    <div className="space-y-1.5">
      <h3 className="text-white font-heading text-xs font-medium tracking-wide">
        Contact
      </h3>

      <a href="tel:+61412864050" className="flex items-center gap-1.5 text-[11px]">
        <Phone size={12} />
        +61 412 864 050
      </a>

      <a href="mailto:sudhesh@vrsrealinvest.com.au" className="flex items-center gap-1.5 text-[11px]">
        <Mail size={12} />
        sudhesh@vrsrealinvest.com.au
      </a>

      <div className="flex items-start gap-1.5 text-[11px]">
        <MapPin size={12} />
        Australia
      </div>
    </div>
  </div>

  {/* BOTTOM */}
  <div className="border-t border-[var(--card-border)] mt-2 pt-1.5 max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-[10px] tracking-wide">
    <p className="text-gray-500">
      © {new Date().getFullYear()} VRS RealInvest
    </p>

    <div className="flex gap-2 mt-1 md:mt-0">
      <Link href="/privacy-policy">Privacy</Link>
      <Link href="/terms-and-conditions">Terms</Link>
    </div>
  </div>
</footer>
  );
}