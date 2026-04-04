"use client";

import { Navbar } from "@/components/navbar";
import { FooterSection } from "@/components/sections/footer";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/motion";
import {
  Heart,
  Shield,
  Users,
  Award,
  Calendar,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";

const values = [
  {
    icon: Heart,
    title: "Patient-Centered",
    desc: "Personalized care for every family member.",
  },
  {
    icon: Users,
    title: "Compassionate",
    desc: "Understanding & supportive approach.",
  },
  {
    icon: Shield,
    title: "All Ages",
    desc: "From newborns to seniors.",
  },
  {
    icon: Award,
    title: "Excellence",
    desc: "Highest medical standards.",
  },
];

const certifications = [
  {
    name: "Obesity Canada",
    desc: "Certified in weight management excellence.",
  },
  {
    name: "Calibre",
    desc: "Recognized for quality healthcare standards.",
  },
  {
    name: "Worldlink Medical",
    desc: "Trusted global medical network partner.",
  },
];

export function AboutContent() {
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
                About Our Clinic
              </p>
              <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-semibold text-white leading-tight mb-6">
                Excellence in <span className="text-gold">Medicine</span>
              </h1>
              <p className="text-white/60 text-lg leading-relaxed max-w-2xl mx-auto">
                Dr. Laurent&apos;s private medical clinic combines comprehensive
                family medicine with advanced medico-aesthetic treatments,
                offering personalized and compassionate care for patients of all
                ages.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* About Dr. Laurent */}
        <section className="py-24 bg-cream">
          <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div className="relative">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-navy/10">
                  <img
                    src="https://drlaurentmedecineprivee.ca/assets/dr-laurent-new-D1TM1Y8l.jpg"
                    alt="Dr. Jean-Baptiste Laurent"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-gold/10 rounded-2xl w-32 h-32 -z-10" />
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div>
                <p className="text-gold text-sm font-medium tracking-wider uppercase mb-3">
                  Family Medicine Specialist
                </p>
                <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-navy mb-6">
                  Dr. Jean-Baptiste Laurent
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Dr. Laurent is a board-certified physician specializing in
                    both comprehensive family medicine and advanced
                    medico-aesthetic treatments. His unique practice unites two
                    specialties under one roof, delivering distinct services with
                    the same precision, safety, and personalized excellence.
                  </p>
                  <p>
                    Known for his compassionate approach and meticulous attention
                    to detail, Dr. Laurent creates a safe, judgment-free
                    environment where patients feel comfortable discussing their
                    health concerns. His commitment to patient privacy and
                    satisfaction has made him a trusted name in private
                    healthcare.
                  </p>
                  <p>
                    From primary healthcare to aesthetic enhancements, Dr.
                    Laurent is committed to the highest medical standards and a
                    patient-centered approach, ensuring you receive the attention
                    and expertise you deserve.
                  </p>
                </div>
                <div className="flex items-center gap-6 mt-8">
                  <div className="text-center">
                    <div className="font-heading text-2xl font-bold text-gold">
                      500+
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Patients Treated
                    </div>
                  </div>
                  <div className="w-px h-10 bg-border" />
                  <div className="text-center">
                    <div className="font-heading text-2xl font-bold text-gold">
                      Board
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Certified Physician
                    </div>
                  </div>
                  <div className="w-px h-10 bg-border" />
                  <div className="text-center">
                    <div className="font-heading text-2xl font-bold text-gold">
                      5.0
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Patient Rating
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 bg-white noise-overlay">
          <div className="relative z-10 max-w-6xl mx-auto px-6">
            <FadeIn className="text-center mb-16">
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-semibold text-navy mb-4">
                Our Values
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Medical care and medico-aesthetic treatments designed with your
                privacy, comfort, and well-being at the heart of everything we
                do.
              </p>
            </FadeIn>
            <StaggerChildren
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
              staggerDelay={0.08}
            >
              {values.map((v) => (
                <StaggerItem key={v.title}>
                  <div className="group p-6 rounded-2xl bg-cream/50 border border-border/50 hover:border-gold/30 hover:shadow-md transition-all duration-500 h-full text-center">
                    <div className="p-3 rounded-xl bg-gold/10 w-fit mx-auto mb-4 group-hover:bg-gold/20 transition-colors">
                      <v.icon className="w-6 h-6 text-gold" />
                    </div>
                    <h3 className="font-heading text-lg font-semibold text-navy mb-2">
                      {v.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {v.desc}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>

            {/* Inclusive banner */}
            <FadeIn delay={0.2} className="mt-12">
              <div className="p-6 rounded-2xl bg-gold/5 border border-gold/20 text-center">
                <h3 className="font-heading text-xl font-semibold text-navy mb-2">
                  Inclusive Care
                </h3>
                <p className="text-muted-foreground text-sm max-w-2xl mx-auto">
                  This clinic proudly provides safe, respectful, and fully
                  inclusive care for all members of the LGBTQIA2S+ community.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-24 bg-cream">
          <div className="max-w-4xl mx-auto px-6">
            <FadeIn className="text-center mb-16">
              <p className="text-gold text-sm font-medium tracking-wider uppercase mb-3">
                Trusted & Certified
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-semibold text-navy mb-4">
                Recognized by Leading Medical Organizations
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Dr. Laurent&apos;s unwavering commitment to excellence is validated
                by prestigious healthcare institutions worldwide.
              </p>
            </FadeIn>
            <StaggerChildren
              className="grid sm:grid-cols-3 gap-6"
              staggerDelay={0.08}
            >
              {certifications.map((cert) => (
                <StaggerItem key={cert.name}>
                  <div className="p-6 rounded-2xl bg-white border border-border/50 text-center hover:border-gold/30 hover:shadow-md transition-all duration-500 h-full">
                    <div className="p-3 rounded-xl bg-gold/10 w-fit mx-auto mb-4">
                      <CheckCircle className="w-6 h-6 text-gold" />
                    </div>
                    <h3 className="font-heading text-lg font-semibold text-navy mb-2">
                      {cert.name}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {cert.desc}
                    </p>
                    <span className="inline-block mt-3 text-xs font-medium text-gold bg-gold/10 px-3 py-1 rounded-full">
                      Certified
                    </span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-navy text-center">
          <div className="max-w-2xl mx-auto px-6">
            <FadeIn>
              <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-white mb-4">
                Ready to Start Your{" "}
                <span className="text-gold">Wellness Journey?</span>
              </h2>
              <p className="text-white/50 mb-8">
                Book your appointment today and experience personalized care
                that puts you first.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-navy px-10 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-gold/20"
              >
                <Calendar className="w-5 h-5" />
                Book Your Appointment
              </Link>
            </FadeIn>
          </div>
        </section>
      </main>
      <FooterSection />
    </>
  );
}
