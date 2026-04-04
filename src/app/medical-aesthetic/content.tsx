"use client";

import { Navbar } from "@/components/navbar";
import { FooterSection } from "@/components/sections/footer";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/motion";
import {
  Syringe,
  Zap,
  Sparkles,
  Scissors,
  Waves,
  Calendar,
  ArrowRight,
  Heart,
  Scan,
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
    icon: Syringe,
    title: "Injectables & Fillers",
    desc: "Botox, dermal fillers, and advanced injectable treatments to enhance your natural beauty.",
    href: "/medical-aesthetic/injectables",
  },
  {
    icon: Waves,
    title: "Radiofrequency Lifting",
    desc: "Non-invasive skin tightening and rejuvenation using advanced radiofrequency technology.",
    href: "/medical-aesthetic/radiofrequency-lifting",
  },
  {
    icon: Zap,
    title: "Laser Treatments",
    desc: "Advanced laser technology for skin rejuvenation, hair removal, and aesthetic improvements.",
    href: "/medical-aesthetic/lasers",
  },
  {
    icon: Sparkles,
    title: "Lipolysis",
    desc: "Non-invasive fat reduction treatments to sculpt and contour your body.",
    href: "/medical-aesthetic/lipolysis",
  },
  {
    icon: Heart,
    title: "Liquid Brazilian Butt Lift",
    desc: "Non-surgical treatments designed to enhance contour and create natural, balanced volume.",
    href: "/medical-aesthetic/liquid-brazilian-butt-lift",
  },
  {
    icon: Scan,
    title: "Hair Stimulation",
    desc: "Advanced PRP and growth factor treatments to stimulate hair growth and restore volume.",
    href: "/medical-aesthetic/hair-stimulation",
  },
  {
    icon: Scissors,
    title: "Non-Surgical Blepharoplasty",
    desc: "CO2 laser eyelid rejuvenation for a refreshed, youthful appearance without surgery.",
    href: "/medical-aesthetic/non-surgical-blepharoplasty",
  },
  {
    icon: Sparkles,
    title: "Facial Contouring",
    desc: "Comprehensive facial transformation using advanced filler and sculpting techniques.",
    href: "/medical-aesthetic/facial-contouring",
  },
];

export function MedicalAestheticContent() {
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
                Our Services
              </p>
              <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-semibold text-white leading-tight mb-6">
                Medical <span className="text-gold">Aesthetic</span>
              </h1>
              <p className="text-white/60 text-lg leading-relaxed max-w-2xl mx-auto">
                Advanced medico-aesthetic treatments designed with your privacy,
                comfort, and well-being at the heart of everything we do.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24 bg-cream">
          <div className="max-w-6xl mx-auto px-6">
            <FadeIn className="text-center mb-16">
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-semibold text-navy mb-4">
                Aesthetic Excellence
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Medical care and medico-aesthetic treatments delivered with
                precision, safety, and personalized excellence.
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

        {/* Not sure CTA */}
        <section className="py-16 bg-white noise-overlay">
          <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
            <FadeIn>
              <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-navy mb-4">
                Not sure which service is right for you?
              </h2>
              <p className="text-muted-foreground mb-6">
                Schedule a consultation with Dr. Laurent to discuss your goals
                and find the perfect treatment plan.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-navy px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-gold/20"
              >
                <Calendar className="w-5 h-5" />
                Schedule a Consultation
              </Link>
            </FadeIn>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-navy text-center">
          <div className="max-w-2xl mx-auto px-6">
            <FadeIn>
              <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-white mb-4">
                Ready to Start Your{" "}
                <span className="text-gold">Transformation?</span>
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
