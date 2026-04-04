"use client";

import { Navbar } from "@/components/navbar";
import { FooterSection } from "@/components/sections/footer";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Phone,
  Calendar,
  CheckCircle,
  Shield,
  Clock,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const faqCategories = [
  {
    label: "General Information",
    faqs: [
      {
        q: "What is penile enhancement?",
        a: "Penile enhancement is a non-surgical procedure that uses FDA-approved hyaluronic acid dermal fillers to increase penile girth. The procedure is performed by a board-certified physician in a sterile medical environment.",
      },
      {
        q: "Am I a good candidate for penile enhancement?",
        a: "Most healthy adult men are candidates for this procedure. During your confidential consultation, Dr. Laurent will assess your anatomy, discuss your goals, and determine the best approach for your specific needs.",
      },
      {
        q: "What types of penile enhancement procedures are available?",
        a: "We offer several packages: Touchup (6ml, $3,000), Silver (12ml, $6,000), Gold (18ml, $9,000), and Platinum (24ml, $12,000). Each package is designed to achieve different levels of enhancement.",
      },
      {
        q: "How do I know which procedure is right for me?",
        a: "During your free consultation, Dr. Laurent will evaluate your anatomy, discuss your goals, and recommend the most appropriate package. The consultation is completely confidential and obligation-free.",
      },
    ],
  },
  {
    label: "Safety & Results",
    faqs: [
      {
        q: "Are penile enhancement procedures safe?",
        a: "Yes. We use only FDA-approved hyaluronic acid fillers, the same type used in millions of cosmetic procedures worldwide. The procedure is performed in a sterile medical environment by a board-certified physician with extensive experience.",
      },
      {
        q: "What results can I expect?",
        a: "Patients typically see an immediate increase in girth with full results visible within 2-4 weeks as any initial swelling subsides. Results look and feel natural.",
      },
      {
        q: "How long do results last?",
        a: "Results typically last 12-18 months depending on the type and amount of filler used. Optional maintenance sessions can extend and enhance your results over time.",
      },
      {
        q: "Will the procedure look natural?",
        a: "Absolutely. The hyaluronic acid fillers used are soft and pliable, and Dr. Laurent's specialized injection technique ensures even distribution for smooth, natural-looking results.",
      },
    ],
  },
  {
    label: "Procedure Details",
    faqs: [
      {
        q: "How long does the procedure take?",
        a: "The procedure typically takes 30-45 minutes depending on the package selected.",
      },
      {
        q: "Is the procedure painful?",
        a: "A local anesthetic is applied to ensure your comfort throughout the procedure. Most patients report minimal discomfort.",
      },
      {
        q: "What is the recovery time?",
        a: "Most patients return to normal daily activities within 24-48 hours. Intimate activities should be avoided for approximately 2 weeks.",
      },
      {
        q: "When can I resume sexual activity?",
        a: "We recommend waiting approximately 2 weeks after the procedure before resuming sexual activity to allow for optimal healing and results.",
      },
    ],
  },
  {
    label: "Cost & Consultation",
    faqs: [
      {
        q: "How much does penile enhancement cost?",
        a: "Our packages range from $3,000 (Touchup, 6ml) to $12,000 (Platinum, 24ml). The best package for you will be determined during your free consultation.",
      },
      {
        q: "Is penile enhancement covered by insurance?",
        a: "Penile enhancement is considered an elective cosmetic procedure and is not typically covered by insurance.",
      },
      {
        q: "Do you offer payment plans?",
        a: "Please contact our clinic to discuss available payment options. We strive to make our treatments accessible.",
      },
      {
        q: "What happens during the consultation?",
        a: "During your free, confidential consultation, Dr. Laurent will discuss your goals, evaluate your anatomy, explain the procedure in detail, answer all your questions, and recommend the most appropriate treatment plan.",
      },
    ],
  },
  {
    label: "Privacy & Support",
    faqs: [
      {
        q: "Is my consultation confidential?",
        a: "Absolutely. All consultations and treatments are 100% confidential. Your privacy is our top priority.",
      },
      {
        q: "What if I'm not satisfied with the results?",
        a: "Patient satisfaction is our priority. Hyaluronic acid fillers can be adjusted or dissolved if needed. Dr. Laurent will work with you to ensure you are happy with your results.",
      },
      {
        q: "Do you provide follow-up care?",
        a: "Yes. Follow-up appointments are included to monitor your results and ensure optimal outcomes. We are committed to your satisfaction throughout your journey.",
      },
      {
        q: "Can I speak with previous patients?",
        a: "Due to the confidential nature of this treatment, we cannot share patient information. However, we can share anonymized before/after results during your consultation.",
      },
    ],
  },
];

const relatedServices = [
  {
    title: "Penile Fillers",
    desc: "Non-surgical girth enhancement using premium dermal fillers for natural-looking results.",
    href: "/sexual-health/penis-fillers",
  },
  {
    title: "Scrotox & Grotox",
    desc: "Aesthetic enhancement treatments for improved appearance and comfort.",
    href: "/sexual-health/scrotox-grotox",
  },
  {
    title: "Sexual Wellness",
    desc: "Comprehensive sexual health services for optimal performance and satisfaction.",
    href: "/sexual-health/penis-enhancement-benefits",
  },
];

export function SexualHealthFaqContent() {
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
                Penile Enhancement <span className="text-gold">FAQ</span>
              </h1>
              <p className="text-white/60 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
                Get answers to the most common questions about penile enhancement
                procedures, safety, results, and what to expect.
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
                <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 text-white/80 text-sm">
                  <CheckCircle className="w-4 h-4 text-gold" />
                  15+ Years Experience
                </span>
                <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 text-white/80 text-sm">
                  <Shield className="w-4 h-4 text-gold" />
                  100% Confidential
                </span>
                <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 text-white/80 text-sm">
                  <Clock className="w-4 h-4 text-gold" />
                  Evidence-Based Care
                </span>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 bg-gold hover:bg-gold-light text-navy px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-gold/20"
                >
                  <Calendar className="w-5 h-5" />
                  Book Free Consultation
                </Link>
                <Link
                  href="tel:+15145003422"
                  className="flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white px-6 py-4 rounded-full text-sm transition-all duration-300 hover:bg-white/15"
                >
                  <Phone className="w-4 h-4" />
                  Call (514) 500-3422
                </Link>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* FAQ Categories */}
        <section className="py-24 bg-cream">
          <div className="max-w-3xl mx-auto px-6">
            {faqCategories.map((cat, catIdx) => (
              <FadeIn key={cat.label} delay={catIdx * 0.05} className="mb-12 last:mb-0">
                <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-navy mb-6">
                  {cat.label}
                </h2>
                <Accordion className="space-y-3">
                  {cat.faqs.map((faq, i) => (
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
            ))}
          </div>
        </section>

        {/* Still Have Questions */}
        <section className="py-20 bg-white noise-overlay">
          <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
            <FadeIn>
              <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-navy mb-4">
                Still Have Questions?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                We understand that choosing penile enhancement is a personal
                decision. Our team is here to answer all your questions in a
                confidential, judgment-free environment.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 bg-gold hover:bg-gold-light text-navy px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-gold/20"
                >
                  <Calendar className="w-5 h-5" />
                  Schedule Free Consultation
                </Link>
                <Link
                  href="tel:+15145003422"
                  className="flex items-center justify-center gap-2 bg-navy text-white px-6 py-4 rounded-full text-sm transition-all duration-300 hover:bg-navy/90"
                >
                  <Phone className="w-4 h-4" />
                  Call Us Now
                </Link>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-gold" />
                  Free consultation with no obligation
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-gold" />
                  100% confidential and discreet
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-gold" />
                  Over 15 years of medical expertise
                </span>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-24 bg-cream">
          <div className="max-w-6xl mx-auto px-6">
            <FadeIn className="text-center mb-14">
              <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-navy mb-4">
                Explore Our Services
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Learn more about our comprehensive men&apos;s health and enhancement services
              </p>
            </FadeIn>
            <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.08}>
              {relatedServices.map((svc) => (
                <StaggerItem key={svc.title}>
                  <div className="group p-6 rounded-2xl border border-border/50 hover:border-gold/30 hover:shadow-md bg-white transition-all duration-500 h-full flex flex-col">
                    <h3 className="font-heading text-xl font-semibold text-navy mb-3">
                      {svc.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-4">
                      {svc.desc}
                    </p>
                    <Link
                      href={svc.href}
                      className="flex items-center gap-2 text-gold text-sm font-medium hover:gap-3 transition-all"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-20 bg-navy text-center">
          <div className="max-w-2xl mx-auto px-6">
            <FadeIn>
              <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-white mb-4">
                Ready to Take the <span className="text-gold">Next Step?</span>
              </h2>
              <p className="text-white/50 mb-6">
                Book your free, confidential consultation today and discover how
                we can help you achieve your goals.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-navy px-10 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-gold/20"
              >
                <Calendar className="w-5 h-5" />
                Book Free Consultation
              </Link>
              <p className="mt-4 text-white/40 text-sm">
                Or call us directly:{" "}
                <Link href="tel:+15145003422" className="text-gold hover:text-gold-light">
                  (514) 500-3422
                </Link>
              </p>
            </FadeIn>
          </div>
        </section>
      </main>
      <FooterSection />
    </>
  );
}
