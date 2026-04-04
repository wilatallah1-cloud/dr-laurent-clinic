"use client";

import { FadeIn } from "@/components/motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, Phone, ArrowRight } from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    q: "What services does Dr. Laurent's clinic offer?",
    a: "We offer comprehensive family medicine for all ages, medical aesthetic treatments including Botox, dermal fillers, laser treatments, body contouring, weight management programs, preventive health screenings, and specialized procedures such as penile enhancement and liquid BBL.",
  },
  {
    q: "How do I book an appointment?",
    a: "You can book an appointment by calling us at (514) 500-3422, using our online booking form, or emailing us at info@drlaurentmedecineetesthetique.com. We strive to accommodate your schedule with convenient appointment times.",
  },
  {
    q: "Are consultations confidential?",
    a: "Absolutely. All consultations and treatments are conducted with the utmost confidentiality and discretion. We adhere to strict privacy protocols and all patient information is protected in compliance with Quebec's privacy laws.",
  },
  {
    q: "What should I expect during my first visit?",
    a: "During your first visit, Dr. Laurent will conduct a thorough assessment of your health or aesthetic goals. You'll have ample time to discuss your concerns, ask questions, and develop a personalized treatment plan together.",
  },
  {
    q: "How experienced is Dr. Laurent?",
    a: "Dr. Laurent is a certified family medicine specialist with over 15 years of experience in both primary care and medical aesthetics. He holds certifications from Obesity Canada, Calibre, and Worldlink Medical, and has treated over 5,000 patients.",
  },
  {
    q: "Do you offer payment plans for treatments?",
    a: "Yes, we understand that some treatments represent a significant investment. We offer flexible payment plans and financing options to make our services accessible. Please discuss payment options during your consultation.",
  },
  {
    q: "What are your clinic hours and location?",
    a: "Our clinic is located at 4072 Le Corbusier, Laval, QC H7L 5R2. We are open Monday through Friday from 9:00 AM to 5:00 PM. We are closed on weekends and statutory holidays.",
  },
  {
    q: "Are aesthetic procedures safe?",
    a: "All aesthetic procedures at our clinic are performed by Dr. Laurent using only Health Canada-approved products and the latest medical-grade equipment. Safety is our top priority, and every treatment follows rigorous medical protocols.",
  },
  {
    q: "How long do aesthetic results last?",
    a: "Results vary by treatment: Botox typically lasts 3-4 months, dermal fillers 6-18 months depending on the product, and laser treatments offer progressive improvement over multiple sessions. Dr. Laurent will discuss expected timelines during your consultation.",
  },
  {
    q: "Do you offer virtual consultations?",
    a: "Yes, we offer virtual consultations for initial assessments and follow-up appointments. This is especially convenient for patients who prefer to discuss their concerns from the comfort of home before committing to an in-person visit.",
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="relative py-24 sm:py-32 bg-cream">
      <div className="max-w-3xl mx-auto px-6">
        <FadeIn className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/5 mb-6">
            <HelpCircle className="w-4 h-4 text-gold" />
            <span className="text-sm text-gold font-medium tracking-wide">
              Frequently Asked Questions
            </span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-semibold text-navy mb-4">
            Your Questions <span className="text-gold">Answered</span>
          </h2>
          <p className="text-muted-foreground">
            Find answers to common questions about our services, treatments, and
            what to expect at our clinic.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <Accordion className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                className="bg-white border border-border/50 rounded-xl px-6 data-open:border-gold/30 data-open:shadow-sm transition-all duration-300"
              >
                <AccordionTrigger className="text-left font-medium text-navy hover:text-gold text-sm sm:text-base py-4 sm:py-5 min-h-[44px] hover:no-underline data-open:text-gold">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeIn>

        <FadeIn delay={0.3} className="mt-12">
          <div className="text-center p-8 rounded-2xl bg-white border border-border/50">
            <h3 className="font-heading text-xl font-semibold text-navy mb-2">
              Still Have Questions?
            </h3>
            <p className="text-muted-foreground text-sm mb-6">
              We&apos;re here to help! Contact us for personalized answers to your
              specific questions about our services and treatments.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="#contact"
                className="flex items-center gap-2 bg-gold hover:bg-gold-light text-navy px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300"
              >
                Contact Us
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="tel:+15145003422"
                className="flex items-center gap-2 bg-navy hover:bg-navy-light text-white px-6 py-3 rounded-full text-sm font-medium transition-all duration-300"
              >
                <Phone className="w-4 h-4" />
                Call (514) 500-3422
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
