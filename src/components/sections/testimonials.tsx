"use client";

import { FadeIn, StaggerChildren, StaggerItem } from "@/components/motion";
import { Star, Quote, MessageCircle } from "lucide-react";

const testimonials = [
  {
    name: "Marie-Claire D.",
    treatment: "Dermal Fillers",
    rating: 5,
    text: "Dr. Laurent took the time to understand exactly what I wanted. The results are so natural—my friends just think I look well-rested. Absolutely impeccable service.",
  },
  {
    name: "Jean-Pierre T.",
    treatment: "Weight Management",
    rating: 5,
    text: "After years of struggling, Dr. Laurent's personalized program finally worked. Down 30 lbs and feeling incredible. The follow-up care is outstanding.",
  },
  {
    name: "Sophie L.",
    treatment: "Family Medicine",
    rating: 5,
    text: "Finally found a family doctor who truly listens. The clinic is beautiful, wait times are minimal, and the care is exceptional. My whole family goes here now.",
  },
  {
    name: "Alexandre M.",
    treatment: "Botox",
    rating: 5,
    text: "I was nervous about my first treatment, but Dr. Laurent explained everything clearly. Minimal discomfort, incredible results. The clinic feels like a luxury spa.",
  },
  {
    name: "Nathalie B.",
    treatment: "Laser Treatment",
    rating: 5,
    text: "The laser treatment completely transformed my skin. Dr. Laurent's expertise and the state-of-the-art equipment made all the difference. Highly recommended.",
  },
  {
    name: "David R.",
    treatment: "Body Contouring",
    rating: 5,
    text: "Professional, discreet, and incredibly effective. Dr. Laurent's approach to body contouring is artistic—natural results that boosted my confidence enormously.",
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative py-24 sm:py-32 bg-navy overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gold/3 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/10 mb-6">
            <MessageCircle className="w-4 h-4 text-gold" />
            <span className="text-sm text-gold font-medium tracking-wide">
              Patient Stories
            </span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-4">
            What Our <span className="gold-shimmer">Patients</span> Say
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            Real experiences from real patients who trust Dr. Laurent with their
            health and aesthetic goals
          </p>
        </FadeIn>

        <StaggerChildren
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          staggerDelay={0.08}
        >
          {testimonials.map((t) => (
            <StaggerItem key={t.name}>
              <div className="relative p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/8 hover:border-gold/20 transition-all duration-500 h-full flex flex-col">
                <Quote className="w-8 h-8 text-gold/30 mb-4" />

                <div className="flex gap-1 mb-3">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-gold text-gold"
                    />
                  ))}
                </div>

                <p className="text-white/70 text-sm leading-relaxed flex-1 mb-5">
                  &ldquo;{t.text}&rdquo;
                </p>

                <div className="pt-4 border-t border-white/10">
                  <div className="font-semibold text-white text-sm">
                    {t.name}
                  </div>
                  <div className="text-gold/70 text-xs uppercase tracking-wider mt-0.5">
                    {t.treatment}
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
