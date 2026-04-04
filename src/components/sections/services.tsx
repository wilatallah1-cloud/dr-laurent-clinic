"use client";

import { FadeIn, StaggerChildren, StaggerItem } from "@/components/motion";
import {
  Stethoscope,
  Sparkles,
  Scale,
  Zap,
  ShieldCheck,
  Dumbbell,
  Gem,
  ArrowRight,
  Calendar,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Stethoscope,
    title: "Family Medicine",
    desc: "Primary care for patients of all ages—from newborns to seniors—delivered in an inclusive environment that also warmly welcomes transgender and gender-diverse individuals.",
    price: "Consultation",
    color: "from-blue-50 to-blue-100/50",
    iconBg: "bg-blue-100 text-blue-700",
    href: "/medical-services/family-medicine",
  },
  {
    icon: Sparkles,
    title: "Injectables & Fillers",
    desc: "Botox, dermal fillers, and advanced injectable treatments to enhance your natural beauty with subtle, elegant results.",
    price: "Starting at $350",
    color: "from-amber-50 to-yellow-50",
    iconBg: "bg-amber-100 text-amber-700",
    href: "/medical-aesthetic/injectables",
  },
  {
    icon: Scale,
    title: "Weight Management",
    desc: "Personalized programs combining medical expertise, nutrition guidance, and ongoing support for sustainable results.",
    price: "Starting at $200",
    color: "from-green-50 to-emerald-50",
    iconBg: "bg-green-100 text-green-700",
    href: "/medical-services/weight-management",
  },
  {
    icon: Zap,
    title: "Laser Treatments",
    desc: "Advanced laser technology for skin rejuvenation, hair removal, and aesthetic improvements with minimal downtime.",
    price: "Starting at $250",
    color: "from-purple-50 to-violet-50",
    iconBg: "bg-purple-100 text-purple-700",
    href: "/medical-aesthetic/lasers",
  },
  {
    icon: ShieldCheck,
    title: "Preventive Screenings",
    desc: "Early detection and prevention strategies to maintain optimal health and catch issues before they become serious.",
    price: "Consultation",
    color: "from-teal-50 to-cyan-50",
    iconBg: "bg-teal-100 text-teal-700",
    href: "/medical-services/consultation",
  },
  {
    icon: Dumbbell,
    title: "Body Contouring",
    desc: "Non-invasive and minimally invasive treatments to sculpt and enhance your physique with natural-looking results.",
    price: "Starting at $500",
    color: "from-rose-50 to-pink-50",
    iconBg: "bg-rose-100 text-rose-700",
    href: "/medical-aesthetic/lipolysis",
  },
  {
    icon: Gem,
    title: "Penile Enhancement & Liquid BBL",
    desc: "Non-surgical treatments designed to enhance contour and create natural, balanced volume with discretion and expertise.",
    price: "Consultation Required",
    color: "from-slate-50 to-stone-50",
    iconBg: "bg-slate-100 text-slate-700",
    href: "/sexual-health/penis-fillers",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="relative py-24 sm:py-32 bg-white noise-overlay">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/5 mb-6">
            <Sparkles className="w-4 h-4 text-gold" />
            <span className="text-sm text-gold font-medium tracking-wide">
              Our Specialized Services
            </span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-semibold text-navy mb-4">
            Private Healthcare & Medico-
            <br />
            <span className="text-gold">Aesthetic Excellence</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Medical care and medico-aesthetic treatments designed with your
            privacy, comfort, and well-being at the heart of everything we do.
          </p>
        </FadeIn>

        <StaggerChildren
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          staggerDelay={0.08}
        >
          {services.map((service, idx) => (
            <StaggerItem key={service.title} className={idx === services.length - 1 ? "sm:col-span-2 lg:col-span-1 lg:last:col-start-2" : ""}>
              <div className="group relative h-full rounded-2xl border border-border/50 bg-white overflow-hidden hover:border-gold/40 hover:shadow-lg hover:shadow-gold/5 transition-all duration-500">
                {/* Gradient header */}
                <div
                  className={`h-20 bg-gradient-to-br ${service.color} flex items-center px-6`}
                >
                  <div
                    className={`p-2.5 rounded-xl ${service.iconBg} transition-transform duration-300 group-hover:scale-110`}
                  >
                    <service.icon className="w-5 h-5" />
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-heading text-xl font-semibold text-navy mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {service.desc}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-border/50">
                    <span className="text-xs font-semibold text-gold uppercase tracking-wider">
                      {service.price}
                    </span>
                    <Link
                      href={service.href}
                      className="flex items-center gap-1.5 text-sm font-medium text-navy/60 hover:text-gold transition-colors group/link"
                    >
                      Learn More
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>

        <FadeIn delay={0.4} className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Not sure which service is right for you?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-navy hover:bg-navy-light text-white px-8 py-3.5 rounded-full text-sm font-medium transition-all duration-300 hover:shadow-lg"
          >
            <Calendar className="w-4 h-4" />
            Schedule a Consultation
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
