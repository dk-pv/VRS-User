"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "@/app/logo/4.png";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Properties", href: "/properties" },
  { name: "Webinar", href: "/webinar" },
  { name: "About Us", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Client Review", href: "/review" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[var(--background)]/85 backdrop-blur-xl border-b border-[var(--card-border)] shadow-[0_8px_30px_rgba(0,0,0,0.6)]"
          : "bg-transparent"
      }`}
    >
      {/* GOLD GRADIENT LINE */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--primary-gold)]/50 to-transparent opacity-70" />

      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <Image
            src={logo}
            alt="VRS RealInvest"
            className="h-8 w-auto object-contain transition duration-300 hover:opacity-90"
            priority
          />
        </Link>

        {/* DESKTOP */}
        <nav className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative text-[12px] tracking-widest uppercase font-medium transition ${
                  isActive
                    ? "text-[var(--primary-gold)]"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.name}

                {/* PREMIUM UNDERLINE */}
                <span
                  className={`absolute left-0 -bottom-2 h-[2px] bg-gradient-to-r from-[var(--primary-gold)] to-transparent transition-all duration-500 ${
                    isActive
                      ? "w-full opacity-100"
                      : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* MOBILE BUTTON */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white/80 hover:text-[var(--primary-gold)] transition"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden bg-[var(--background)]/95 backdrop-blur-xl border-t border-[var(--card-border)]">
          <div className="flex flex-col px-6 py-5 space-y-5">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-white/80 hover:text-[var(--primary-gold)] text-sm tracking-wide transition"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
