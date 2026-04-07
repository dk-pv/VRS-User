"use client";

import Image from "next/image";
import { CheckCircle, Shield, Target, TrendingUp } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="bg-[var(--background)] text-white">

      {/* ================= HERO / FOUNDER ================= */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">

        <div className="w-full">
          <Image
            src="https://tagmango.com/staticassets/-jpg-68-e1d436dafac6deeea15fa1a751be9c62.webp"
            alt="Sudhesh K Valappil - Founder of VRS realinvest"
            width={700}
            height={900}
            className="w-full h-auto rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.6)] object-contain"
            priority
          />
        </div>

        <div className="max-w-xl">
          <div className="w-12 h-[2px] bg-[var(--primary-gold)] mb-5" />

          <h2 className="text-4xl md:text-5xl font-medium mb-6 leading-tight">
            Create Real Freedom with Smart Property Investing
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            At{" "}
            <span className="text-[var(--primary-gold)] font-medium">
              VRS RealInvest
            </span>
            , we help busy professionals build wealth through strategic
            Australian real estate investing.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            We’re a Buyer’s Agent and Real Estate Coaching team focused on one
            thing: helping you purchase the right investment property with
            clarity, confidence, and a low-risk approach — without wasting
            months researching or making costly mistakes.
          </p>

          <p className="text-gray-400 leading-relaxed">
            Led by{" "}
            <span className="text-white font-medium">
              Sudhesh K Valappil
            </span>
            , we represent you — the buyer — and guide you from strategy to
            settlement.
          </p>
        </div>
      </div>

      {/* ================= STATS ================= */}
      <div className="bg-[var(--card-bg)] py-14 border-y border-[var(--card-border)]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: "70+", label: "Sold Properties" },
            { number: "50+", label: "Happy Clients" },
            { number: "250+", label: "5-Star Google Reviews" },
            { number: "100+", label: "Free Webinars Conducted" },
          ].map((stat, i) => (
            <div key={i}>
              <h3 className="text-4xl font-medium text-[var(--primary-gold)]">
                {stat.number}
              </h3>
              <p className="text-gray-400 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ================= WHO WE HELP ================= */}
      <SectionWrapper title="Who We Help">
        <List items={[
          "Busy professionals (medical, IT, engineering, business owners)",
          "First-time investors who want guidance",
          "Home owners building a long-term portfolio",
          "Families seeking passive income and better lifestyle",
        ]} />
      </SectionWrapper>

      {/* ================= WHAT WE DO ================= */}
      <SectionWrapper title="What We Do">
        <List items={[
          "Strategy session based on your goals & borrowing capacity",
          "Suburb & property research using data and fundamentals",
          "Shortlisting only suitable opportunities",
          "Risk checks, rental demand & growth drivers analysis",
          "Negotiation & contract support",
          "Ongoing guidance for smarter future decisions",
        ]} />
      </SectionWrapper>

      {/* ================= OUR APPROACH ================= */}
      <SectionWrapper title="Our Approach (Simple, Practical, Low-Risk)">
        <List items={[
          "Low-risk suburbs with strong owner-occupier demand",
          "Strong rental fundamentals & tight vacancy rates",
          "Growth backed by infrastructure & supply-demand data",
          "Strategy-matched properties — not hype-driven picks",
          "Every recommendation explained in plain English",
        ]} />
      </SectionWrapper>

      {/* ================= PROMISE ================= */}
      <SectionWrapper title="Our Promise: Trust, Transparency & No Pressure">
        <List items={[
          "Honest advice (even if that means telling you to wait)",
          "Clear communication & regular updates",
          "Professional documented processes",
          "Your goals always come first",
        ]} />
      </SectionWrapper>

      {/* ================= WHO WE ARE ================= */}
      <SectionWrapper title="Who We Are">
        <p className="text-gray-300 leading-relaxed">
          VRS RealInvest is an Australian buyer’s agency and real estate
          coaching business led by Sudhesh K Valappil...
        </p>

        <p className="text-gray-300 mt-4 leading-relaxed">
          We’re not selling properties — we represent you, the buyer...
        </p>
      </SectionWrapper>

      {/* ================= MISSION ================= */}
      <SectionWrapper title="Our Mission">
        <p className="text-gray-300 text-lg leading-relaxed text-center">
          To help{" "}
          <span className="text-[var(--primary-gold)] font-semibold">
            10,000 busy professionals
          </span>{" "}
          grow long-term wealth...
        </p>
      </SectionWrapper>

      {/* ================= WHY CHOOSE US ================= */}
      <SectionWrapper title="Why Choose Us">
        <div className="grid md:grid-cols-2 gap-6">
          <Feature icon={<Shield />} title="Trusted & Verified">
            Transparent, compliant, and buyer-focused process.
          </Feature>
          <Feature icon={<Target />} title="Personalised Strategy">
            Tailored to your age, goals, and financial position.
          </Feature>
          <Feature icon={<TrendingUp />} title="High ROI Focus">
            Secure investment-grade assets with long-term performance.
          </Feature>
          <Feature icon={<CheckCircle />} title="10+ Years Experience">
            Proven negotiation skills & market expertise.
          </Feature>
        </div>
      </SectionWrapper>

      {/* ================= CORE VALUES ================= */}
      <SectionWrapper title="Our Core Values">
        <List items={[
          "Excellence – High standards in research & service",
          "Integrity – Doing what’s right always",
          "Growth-Focused – Building long-term wealth",
          "Professionalism – Clear process & communication",
        ]} />
      </SectionWrapper>

      {/* ================= PROCESS ================= */}
      <SectionWrapper title="Our Investment Approach">
        <div className="space-y-6">
          {[
            "Understanding Your Requirements",
            "Formalising the Agreement",
            "Budget Confirmation & Loan Pre-Approval",
            "Research & Due Diligence",
            "Suburb Presentation",
            "Property Sourcing",
            "Negotiation & Contract Review",
            "Building & Pest Inspection",
            "Contingency Management",
            "Settlement & Property Handover",
          ].map((step, i) => (
            <div key={i} className="flex items-start gap-4">
              <div className="bg-[var(--primary-gold)] text-[#221F1F] font-semibold w-8 h-8 flex items-center justify-center rounded-full">
                {i + 1}
              </div>
              <p className="text-gray-300">{step}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* ================= CTA ================= */}
      <section className="py-14 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl p-8 md:p-12 text-center shadow-xl">

            <h3 className="text-xl md:text-3xl font-medium text-white mb-4">
              Ready to Start Your Investment Journey?
            </h3>

            <p className="text-gray-400 mb-6 text-sm md:text-base max-w-xl mx-auto">
              Partner with VRS Real Invest and secure premium real estate opportunities today.
            </p>

            <a
              href="https://learn.vrsrealinvest.com.au/web/lite/events/68b9e85ce4cad97bc9d8d657"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[var(--primary-gold)] text-[#221F1F] px-7 py-2.5 rounded-lg text-sm font-medium hover:opacity-90 transition"
            >
              Get Free Consultation
            </a>
          </div>
        </div>
      </section>
    </section>
  );
}

/* ================= HELPERS ================= */

function SectionWrapper({ title, children }: any) {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
      <div className="mb-12 max-w-3xl">
        <h3 className="text-3xl md:text-4xl font-medium">{title}</h3>
        <div className="w-20 h-[2px] bg-[var(--primary-gold)] mt-4 rounded-full" />
      </div>
      {children}
    </section>
  );
}

function List({ items }: any) {
  return (
    <ul className="space-y-4 max-w-3xl mx-auto">
      {items.map((item: string, i: number) => (
        <li key={i} className="flex items-start gap-3 text-gray-300">
          <CheckCircle className="text-[var(--primary-gold)] mt-1" size={18} />
          {item}
        </li>
      ))}
    </ul>
  );
}

function Feature({ icon, title, children }: any) {
  return (
    <div className="bg-[var(--card-bg)] p-6 rounded-2xl border border-[var(--card-border)] hover:border-[var(--primary-gold)]/40 transition">
      <div className="text-[var(--primary-gold)] mb-4">{icon}</div>
      <h4 className="text-lg font-medium mb-2">{title}</h4>
      <p className="text-gray-400">{children}</p>
    </div>
  );
}