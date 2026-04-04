"use client";

import { FadeIn, StaggerChildren, StaggerItem } from "@/components/motion";
import { Sparkles, CheckCircle, Award, Shield } from "lucide-react";

const certifications = [
  {
    name: "Obesity Canada",
    desc: "Certified in weight management excellence",
    icon: Award,
  },
  {
    name: "Calibre",
    desc: "Recognized for quality healthcare standards",
    icon: Shield,
  },
  {
    name: "Worldlink Medical",
    desc: "Trusted global medical network partner",
    icon: Award,
  },
];

const badges = [
  { label: "Certified Excellence", icon: CheckCircle },
  { label: "Trusted Partners", icon: CheckCircle },
  { label: "Quality Assurance", icon: CheckCircle },
];

export function CertificationsSection() {
  return (
    <section
      id="certifications"
      className="relative py-24 sm:py-32 bg-white noise-overlay"
    >
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/5 mb-6">
            <Sparkles className="w-4 h-4 text-gold" />
            <span className="text-sm text-gold font-medium tracking-wide">
              Trusted & Certified
            </span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-semibold text-navy mb-4">
            Recognized by <span className="text-gold">Leading</span>
            <br />
            Medical Organizations
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Dr. Laurent&apos;s unwavering commitment to excellence is validated
            by prestigious healthcare institutions worldwide
          </p>
        </FadeIn>

        <StaggerChildren
          className="grid sm:grid-cols-3 gap-6 mb-10"
          staggerDelay={0.1}
        >
          {certifications.map((cert) => (
            <StaggerItem key={cert.name}>
              <div className="group text-center p-8 rounded-2xl bg-cream border border-border/50 hover:border-gold/30 hover:shadow-md transition-all duration-500">
                <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-gold/20 transition-colors duration-300">
                  <cert.icon className="w-7 h-7 text-gold" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-navy mb-2">
                  {cert.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">{cert.desc}</p>
                <div className="inline-flex items-center gap-1.5 text-gold text-sm font-medium">
                  <CheckCircle className="w-4 h-4" />
                  Certified
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>

        <FadeIn delay={0.3}>
          <div className="flex flex-wrap justify-center gap-6">
            {badges.map((badge) => (
              <div
                key={badge.label}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-cream border border-border/50"
              >
                <badge.icon className="w-4 h-4 text-gold" />
                <span className="text-sm font-medium text-navy">
                  {badge.label}
                </span>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
