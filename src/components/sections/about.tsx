"use client";

import { FadeIn, StaggerChildren, StaggerItem } from "@/components/motion";
import { Heart, CheckCircle, Users, Award, Shield } from "lucide-react";

const values = [
  {
    icon: CheckCircle,
    title: "Patient-Centered",
    desc: "Personalized care for every family member",
  },
  {
    icon: Heart,
    title: "Compassionate",
    desc: "Understanding & supportive approach",
  },
  {
    icon: Users,
    title: "All Ages",
    desc: "From newborns to seniors",
  },
  {
    icon: Award,
    title: "Excellence",
    desc: "Highest medical standards",
  },
  {
    icon: Shield,
    title: "Inclusive",
    desc: "Safe, respectful care for all members of the LGBTQIA2S+ community",
    wide: true,
  },
];

export function AboutSection() {
  return (
    <section id="about" className="relative py-24 sm:py-32 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/5 mb-8">
            <Heart className="w-4 h-4 text-gold" />
            <span className="text-sm text-gold font-medium tracking-wide">
              About Our Clinic
            </span>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <FadeIn delay={0.1}>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-semibold text-navy leading-tight mb-6">
                Clinique Dr.Laurent :{" "}
                <span className="text-gold">Your Trusted</span> Partner in
                Private & Medico-Aesthetic
              </h2>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Dr. Laurent&apos;s private medical clinic combines comprehensive
                family medicine with advanced medico-aesthetic treatments,
                offering personalized and compassionate care for patients of all
                ages.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="text-muted-foreground leading-relaxed">
                From primary healthcare to aesthetic enhancements, we are
                committed to the highest medical standards and a
                patient-centered approach, ensuring you receive the attention and
                expertise you deserve.
              </p>
            </FadeIn>
          </div>

          <StaggerChildren className="grid grid-cols-2 gap-4" staggerDelay={0.08}>
            {values.map((v) => (
              <StaggerItem
                key={v.title}
                className={v.wide ? "col-span-2" : ""}
              >
                <div className="flex items-start gap-4 p-5 rounded-xl bg-white border border-border/50 hover:border-gold/30 hover:shadow-sm transition-all duration-300 group">
                  <div className="mt-0.5 p-2 rounded-lg bg-gold/10 text-gold group-hover:bg-gold group-hover:text-navy transition-colors duration-300">
                    <v.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy text-sm mb-1">
                      {v.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {v.desc}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </div>
    </section>
  );
}
