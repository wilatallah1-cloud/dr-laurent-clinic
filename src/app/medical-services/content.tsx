"use client";

import { Navbar } from "@/components/navbar";
import { FooterSection } from "@/components/sections/footer";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/motion";
import {
  Stethoscope,
  Heart,
  Brain,
  Scale,
  ShieldPlus,
  Calendar,
  ArrowRight,
  Users,
} from "lucide-react";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";

interface ServiceCard {
  icon: LucideIcon;
  title: string;
  desc: string;
  href: string;
}

const services: ServiceCard[] = [
  {
    icon: Stethoscope,
    title: "Medical Consultation",
    desc: "Private medical consultations for personalized, confidential healthcare assessments.",
    href: "/medical-services/consultation",
  },
  {
    icon: Users,
    title: "Family Medicine",
    desc: "Primary care for patients of all ages — from newborns to seniors — in an inclusive environment.",
    href: "/medical-services/family-medicine",
  },
  {
    icon: ShieldPlus,
    title: "Minor Emergency",
    desc: "Prompt care for minor emergencies with quick assessment and treatment.",
    href: "/medical-services/minor-emergency",
  },
  {
    icon: Brain,
    title: "Mental Health",
    desc: "Compassionate mental health consultations and follow-up care in a supportive environment.",
    href: "/medical-services/mental-health",
  },
  {
    icon: Heart,
    title: "Hormone Therapy",
    desc: "Personalized hormone therapy consultations and management for optimal health and wellness.",
    href: "/medical-services/hormonotherapy",
  },
  {
    icon: Scale,
    title: "Weight Management",
    desc: "Personalized programs combining medical expertise, nutrition guidance, and ongoing support.",
    href: "/medical-services/weight-management",
  },
];

export function MedicalServicesContent() {
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
                Private Healthcare
              </p>
              <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-semibold text-white leading-tight mb-6">
                Medical <span className="text-gold">Services</span>
              </h1>
              <p className="text-white/60 text-lg leading-relaxed max-w-2xl mx-auto">
                Comprehensive private healthcare delivered with precision,
                compassion, and a patient-centered approach for patients of all
                ages.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24 bg-cream">
          <div className="max-w-6xl mx-auto px-6">
            <FadeIn className="text-center mb-16">
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-semibold text-navy mb-4">
                Private Healthcare Excellence
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Medical care designed with your privacy, comfort, and well-being
                at the heart of everything we do.
              </p>
            </FadeIn>

            <StaggerChildren
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
              staggerDelay={0.08}
            >
              {services.map((svc) => (
                <StaggerItem key={svc.title}>
                  <Link
                    href={svc.href}
                    className="group p-6 rounded-2xl bg-white border border-border/50 hover:border-gold/30 hover:shadow-md transition-all duration-500 h-full flex flex-col block"
                  >
                    <div className="p-3 rounded-xl bg-gold/10 w-fit mb-4 group-hover:bg-gold/20 transition-colors">
                      <svc.icon className="w-6 h-6 text-gold" />
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-navy mb-3">
                      {svc.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-4">
                      {svc.desc}
                    </p>
                    <span className="flex items-center gap-2 text-gold text-sm font-medium group-hover:gap-3 transition-all">
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </section>

        {/* Inclusive care banner */}
        <section className="py-16 bg-white noise-overlay">
          <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
            <FadeIn>
              <div className="p-8 rounded-2xl bg-gold/5 border border-gold/20">
                <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-navy mb-4">
                  Inclusive Care for All
                </h2>
                <p className="text-muted-foreground mb-2">
                  Our clinic proudly provides safe, respectful, and fully
                  inclusive care for all members of the LGBTQIA2S+ community.
                  Primary care is delivered in an inclusive environment that
                  warmly welcomes transgender and gender-diverse individuals.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-navy text-center">
          <div className="max-w-2xl mx-auto px-6">
            <FadeIn>
              <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-white mb-4">
                Ready to Take Charge of Your{" "}
                <span className="text-gold">Health?</span>
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
