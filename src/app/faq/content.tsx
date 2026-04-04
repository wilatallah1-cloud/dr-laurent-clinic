"use client";

import { Navbar } from "@/components/navbar";
import { FooterSection } from "@/components/sections/footer";
import { FadeIn } from "@/components/motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Calendar, Phone } from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    q: "What services does Dr. Laurent's clinic offer?",
    a: "Our clinic offers two main categories of services: Private Healthcare (family medicine, consultations, minor emergencies, hormone therapy, weight management, mental health) and Medical Aesthetic (injectables, fillers, laser treatments, body contouring, penile enhancement, and more). Visit our Medical Aesthetic and Medical Services pages for full details.",
  },
  {
    q: "How do I book an appointment?",
    a: "You can book an appointment by calling us at (514) 500-3422, emailing info@drlaurentmedecineetesthetique.com, or using the contact form on our website. We'll get back to you within 24 hours to confirm your appointment.",
  },
  {
    q: "Are consultations confidential?",
    a: "Absolutely. All consultations and treatments at our clinic are 100% confidential. We maintain the highest standards of patient privacy in compliance with Quebec healthcare regulations.",
  },
  {
    q: "What should I expect during my first visit?",
    a: "During your first visit, you'll complete a brief medical history form. Dr. Laurent will then conduct a thorough assessment, discuss your concerns and goals, and develop a personalized treatment plan. The consultation is a safe, judgment-free environment.",
  },
  {
    q: "How experienced is Dr. Laurent?",
    a: "Dr. Laurent is a board-certified family medicine specialist with extensive training in medical aesthetics. He is certified by Obesity Canada, Calibre, and Worldlink Medical, and has treated over 500 patients with consistently high satisfaction ratings.",
  },
  {
    q: "Do you offer payment plans for treatments?",
    a: "Please contact our clinic directly to discuss payment options. We strive to make our treatments as accessible as possible and will work with you to find a suitable arrangement.",
  },
  {
    q: "What are your clinic hours and location?",
    a: "Our clinic is located at 4072 Boul. le Corbusier, Laval, QC H7L 5R2. We are open Monday through Friday from 9:00 AM to 5:00 PM. Saturday and Sunday we are closed.",
  },
  {
    q: "Are aesthetic procedures safe?",
    a: "Yes. All aesthetic procedures at our clinic are performed by Dr. Laurent using FDA-approved products in a sterile medical environment. Safety is our top priority, and we follow strict medical protocols for every treatment.",
  },
  {
    q: "How long do aesthetic results last?",
    a: "Results vary depending on the treatment. Botox typically lasts 3-6 months, dermal fillers 6-18 months, and laser treatments can provide long-lasting results. Dr. Laurent will discuss expected duration during your consultation.",
  },
  {
    q: "Do you offer virtual consultations?",
    a: "Please contact us to inquire about virtual consultation availability. Some initial assessments can be conducted remotely, though most treatments require an in-person visit.",
  },
];

export function FaqContent() {
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
                Frequently Asked Questions
              </p>
              <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-semibold text-white leading-tight mb-6">
                Your Questions <span className="text-gold">Answered</span>
              </h1>
              <p className="text-white/60 text-lg leading-relaxed max-w-2xl mx-auto">
                Find answers to common questions about our services, treatments,
                and what to expect at our clinic.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 bg-cream">
          <div className="max-w-3xl mx-auto px-6">
            <FadeIn>
              <Accordion className="space-y-3">
                {faqs.map((faq, i) => (
                  <AccordionItem
                    key={i}
                    className="bg-white border border-border/50 rounded-xl px-6 data-open:border-gold/30 data-open:shadow-sm transition-all duration-300"
                  >
                    <AccordionTrigger className="text-left font-medium text-navy hover:text-gold text-sm sm:text-base py-5 hover:no-underline data-open:text-gold">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </FadeIn>
          </div>
        </section>

        {/* Still Have Questions */}
        <section className="py-20 bg-white noise-overlay">
          <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
            <FadeIn>
              <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-navy mb-4">
                Still Have Questions?
              </h2>
              <p className="text-muted-foreground mb-8">
                We&apos;re here to help! Contact us for personalized answers to
                your specific questions about our services and treatments.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-light text-navy px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-gold/20"
                >
                  <Calendar className="w-5 h-5" />
                  Contact Us
                </Link>
                <Link
                  href="tel:+15145003422"
                  className="inline-flex items-center justify-center gap-2 bg-navy text-white px-6 py-4 rounded-full text-sm transition-all duration-300 hover:bg-navy/90"
                >
                  <Phone className="w-4 h-4" />
                  Call (514) 500-3422
                </Link>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-navy text-center">
          <div className="max-w-2xl mx-auto px-6">
            <FadeIn>
              <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-white mb-4">
                Ready to Start Your{" "}
                <span className="text-gold">Journey?</span>
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
