"use client";

import { FadeIn } from "@/components/motion";
import { Calendar } from "lucide-react";
import Link from "next/link";

export function CTASection() {
  return (
    <section className="relative py-24 sm:py-32 bg-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-cream to-white" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <FadeIn>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/5 mb-6">
            <Calendar className="w-4 h-4 text-gold" />
            <span className="text-sm text-gold font-medium tracking-wide">
              Get In Touch
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-semibold text-navy mb-4">
            Ready to Start Your{" "}
            <span className="text-gold">Beauty And Wellness</span> Journey?
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-muted-foreground max-w-lg mx-auto mb-8">
            Book your appointment today and experience personalized care that
            puts you first
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-navy px-10 py-4 rounded-full text-base font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-gold/20"
          >
            <Calendar className="w-5 h-5" />
            Book Your Appointment
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
