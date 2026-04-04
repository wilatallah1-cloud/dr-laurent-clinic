"use client";

import { Navbar } from "@/components/navbar";
import { FooterSection } from "@/components/sections/footer";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/motion";
import { Calendar, Tag, Clock } from "lucide-react";
import Link from "next/link";

const lipolysisPromos = [
  { area: "Chin", original: "$600", promo: "$510" },
  { area: "Arms (both)", original: "$700", promo: "$595" },
  { area: "Saddlebags", original: "$800", promo: "$680" },
  { area: "Thighs (both)", original: "$900", promo: "$765" },
  { area: "Full abdomen", original: "$900", promo: "$765" },
  { area: "Half abdomen", original: "$600", promo: "$510" },
  { area: "Love handles", original: "$500", promo: "$425" },
  { area: "Calf or knee", original: "$700", promo: "$595" },
  { area: "Back fat", original: "$700", promo: "$595" },
];

export function PromotionsContent() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative bg-navy py-28 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy/95 to-navy/90" />
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <FadeIn>
              <p className="text-gold text-sm font-medium tracking-wider uppercase mb-4">
                Limited time offers
              </p>
              <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-semibold text-white leading-tight mb-6">
                Current <span className="text-gold">Promotions</span>
              </h1>
              <p className="text-white/60 text-lg leading-relaxed max-w-2xl mx-auto">
                Take advantage of our exclusive offers on premium aesthetic
                treatments. Quality care at exceptional prices.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Lipolysis Promo */}
        <section className="py-24 bg-cream">
          <div className="max-w-4xl mx-auto px-6">
            <FadeIn className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-gold/10">
                  <Tag className="w-5 h-5 text-gold" />
                </div>
                <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-navy">
                  Lipolysis
                </h2>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4 text-gold" />
                Valid until Easter 2026
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="bg-white rounded-2xl border border-border/50 overflow-hidden shadow-sm">
                <div className="grid grid-cols-3 px-5 py-3 bg-navy text-white text-sm font-medium">
                  <span>Treatment Area</span>
                  <span className="text-center">Regular Price</span>
                  <span className="text-right">Promo Price</span>
                </div>
                {lipolysisPromos.map((item, i) => (
                  <div
                    key={item.area}
                    className={`grid grid-cols-3 px-5 py-4 items-center ${
                      i !== lipolysisPromos.length - 1
                        ? "border-b border-border/30"
                        : ""
                    } hover:bg-cream/50 transition-colors`}
                  >
                    <span className="text-sm text-navy font-medium">
                      {item.area}
                    </span>
                    <span className="text-sm text-muted-foreground line-through text-center">
                      {item.original}
                    </span>
                    <span className="text-sm font-bold text-gold text-right">
                      {item.promo}
                    </span>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.2} className="mt-8">
              <Link
                href="/medical-aesthetic"
                className="text-gold text-sm font-medium hover:underline"
              >
                Learn more about lipolysis treatments &rarr;
              </Link>
            </FadeIn>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-navy text-center">
          <div className="max-w-2xl mx-auto px-6">
            <FadeIn>
              <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-white mb-4">
                Ready to <span className="text-gold">Book?</span>
              </h2>
              <p className="text-white/50 mb-8">
                Contact us today to take advantage of these limited-time offers.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-light text-navy px-10 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-gold/20"
                >
                  <Calendar className="w-5 h-5" />
                  Book Now
                </Link>
                <Link
                  href="/pricing"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white px-6 py-4 rounded-full text-sm transition-all duration-300 hover:bg-white/15"
                >
                  View All Prices
                </Link>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
      <FooterSection />
    </>
  );
}
