"use client";

import { Navbar } from "@/components/navbar";
import { FooterSection } from "@/components/sections/footer";
import { FadeIn } from "@/components/motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Calendar,
  CheckCircle,
  Shield,
} from "lucide-react";
import Link from "next/link";

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    detail: "4072 Boul. le Corbusier, Laval, QC H7L 5R2",
    href: "https://maps.google.com/?q=4072+Boul.+le+Corbusier+Laval+QC+H7L+5R2",
  },
  {
    icon: Phone,
    title: "Phone",
    detail: "(514) 500-3422",
    href: "tel:+15145003422",
  },
  {
    icon: Mail,
    title: "Email",
    detail: "info@drlaurentmedecineetesthetique.com",
    href: "mailto:info@drlaurentmedecineetesthetique.com",
  },
  {
    icon: Clock,
    title: "Hours",
    detail: "Mon-Fri: 9AM - 6PM",
    href: undefined,
  },
];

export function ContactContent() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative bg-navy pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy/95 to-navy/90" />
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <FadeIn>
              <p className="text-gold text-sm font-medium tracking-wider uppercase mb-4">
                Get in Touch
              </p>
              <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-semibold text-white leading-tight mb-6">
                Contact <span className="text-gold">Us</span>
              </h1>
              <p className="text-white/60 text-lg leading-relaxed max-w-2xl mx-auto">
                Have questions or need to schedule an appointment? We&apos;re
                here to help you on your health journey.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Contact Form + Info */}
        <section className="py-24 bg-cream">
          <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <FadeIn>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-border/50">
                <h2 className="font-heading text-2xl font-semibold text-navy mb-2">
                  Send Us a Message
                </h2>
                <p className="text-muted-foreground text-sm mb-6">
                  Fill out the form below and we&apos;ll get back to you as soon
                  as possible.
                </p>
                <form className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-navy block mb-1.5">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-border bg-cream/50 text-sm focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-navy block mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-border bg-cream/50 text-sm focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-navy block mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-cream/50 text-sm focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-navy block mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-cream/50 text-sm focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-navy block mb-1.5">
                      Message
                    </label>
                    <textarea
                      rows={5}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-border bg-cream/50 text-sm focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gold hover:bg-gold-light text-navy py-3.5 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg"
                  >
                    Send Message
                  </button>
                  <p className="text-xs text-center text-muted-foreground">
                    <Shield className="w-3 h-3 inline mr-1" />
                    Your information is 100% confidential and secure
                  </p>
                </form>
              </div>
            </FadeIn>

            {/* Info */}
            <FadeIn delay={0.1}>
              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <div
                    key={info.title}
                    className="p-5 rounded-2xl bg-white border border-border/50 flex items-start gap-4"
                  >
                    <div className="p-3 rounded-xl bg-gold/10 shrink-0">
                      <info.icon className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-heading text-base font-semibold text-navy mb-1">
                        {info.title}
                      </h3>
                      {info.href ? (
                        <a
                          href={info.href}
                          target={info.href.startsWith("http") ? "_blank" : undefined}
                          rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="text-sm text-muted-foreground hover:text-gold transition-colors"
                        >
                          {info.detail}
                        </a>
                      ) : (
                        <p className="text-sm text-muted-foreground">
                          {info.detail}
                        </p>
                      )}
                    </div>
                  </div>
                ))}

                {/* Book appointment card */}
                <div className="p-6 rounded-2xl bg-navy text-white">
                  <h3 className="font-heading text-xl font-semibold mb-2">
                    Book an Appointment
                  </h3>
                  <p className="text-white/60 text-sm mb-4">
                    Ready to schedule? Click below to book your consultation
                    directly.
                  </p>
                  <Link
                    href="tel:+15145003422"
                    className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-navy px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300"
                  >
                    <Calendar className="w-4 h-4" />
                    Book Now
                  </Link>
                </div>

                {/* What to expect */}
                <div className="p-6 rounded-2xl bg-gold/5 border border-gold/20">
                  <h3 className="font-heading text-lg font-semibold text-navy mb-3">
                    What to Expect
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    We&apos;ll review your message and contact you within 24
                    hours to discuss next steps.
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Quick response time",
                      "Personalized consultation",
                      "Confidential service",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <CheckCircle className="w-4 h-4 text-gold shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Map */}
        <section className="h-80 bg-navy/5">
          <iframe
            title="Dr. Laurent Clinic Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2793.2!2d-73.75!3d45.58!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s4072+Boul.+le+Corbusier%2C+Laval%2C+QC+H7L+5R2!5e0!3m2!1sen!2sca!4v1"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
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
                Book your consultation today
              </p>
              <Link
                href="tel:+15145003422"
                className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-navy px-10 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-gold/20"
              >
                <Calendar className="w-5 h-5" />
                Book Now
              </Link>
            </FadeIn>
          </div>
        </section>
      </main>
      <FooterSection />
    </>
  );
}
