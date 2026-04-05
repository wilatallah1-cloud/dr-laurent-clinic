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
import Link from "@/components/locale-link";
import { useLocale } from "@/lib/locale";
import { getTranslations } from "@/lib/translations";

const faqContent = {
  en: {
    badge: "Frequently Asked Questions",
    heroTitle: "Your Questions",
    heroHighlight: "Answered",
    heroDesc:
      "Find answers to common questions about our services, treatments, and what to expect at our clinic.",
    stillTitle: "Still Have Questions?",
    stillDesc:
      "We\u2019re here to help! Contact us for personalized answers to your specific questions about our services and treatments.",
    contactUs: "Contact Us",
    callLabel: "Call (514) 500-3422",
    ctaTitle: "Ready to Start Your",
    ctaHighlight: "Journey?",
    ctaDesc:
      "Book your appointment today and experience personalized care that puts you first.",
    ctaButton: "Book Your Appointment",
    faqs: [
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
    ],
  },
  fr: {
    badge: "Foire aux questions",
    heroTitle: "Vos questions",
    heroHighlight: "r\u00E9pondues",
    heroDesc:
      "Trouvez les r\u00E9ponses aux questions fr\u00E9quentes sur nos services, traitements et ce \u00E0 quoi vous attendre dans notre clinique.",
    stillTitle: "D\u2019autres questions\u00A0?",
    stillDesc:
      "Nous sommes l\u00E0 pour vous aider\u00A0! Contactez-nous pour des r\u00E9ponses personnalis\u00E9es \u00E0 vos questions sp\u00E9cifiques sur nos services et traitements.",
    contactUs: "Contactez-nous",
    callLabel: "Appeler (514) 500-3422",
    ctaTitle: "Pr\u00EAt \u00E0 commencer votre",
    ctaHighlight: "parcours\u00A0?",
    ctaDesc:
      "R\u00E9servez votre rendez-vous d\u00E8s aujourd\u2019hui et d\u00E9couvrez des soins personnalis\u00E9s qui vous placent au premier plan.",
    ctaButton: "R\u00E9server votre rendez-vous",
    faqs: [
      {
        q: "Quels services offre la clinique du Dr\u00A0Laurent\u00A0?",
        a: "Notre clinique offre deux grandes cat\u00E9gories de services\u00A0: Soins de sant\u00E9 priv\u00E9s (m\u00E9decine familiale, consultations, urgences mineures, hormonoth\u00E9rapie, gestion du poids, sant\u00E9 mentale) et Esth\u00E9tique m\u00E9dicale (injectables, comblement, traitements laser, remodelage corporel, augmentation p\u00E9nienne et plus). Consultez nos pages Esth\u00E9tique m\u00E9dicale et Services m\u00E9dicaux pour tous les d\u00E9tails.",
      },
      {
        q: "Comment puis-je prendre rendez-vous\u00A0?",
        a: "Vous pouvez prendre rendez-vous en nous appelant au (514) 500-3422, en envoyant un courriel \u00E0 info@drlaurentmedecineetesthetique.com ou en utilisant le formulaire de contact sur notre site web. Nous vous r\u00E9pondrons dans les 24 heures pour confirmer votre rendez-vous.",
      },
      {
        q: "Les consultations sont-elles confidentielles\u00A0?",
        a: "Absolument. Toutes les consultations et tous les traitements dans notre clinique sont 100\u00A0% confidentiels. Nous maintenons les plus hautes normes de confidentialit\u00E9 des patients, conform\u00E9ment \u00E0 la r\u00E9glementation qu\u00E9b\u00E9coise en mati\u00E8re de sant\u00E9.",
      },
      {
        q: "\u00C0 quoi dois-je m\u2019attendre lors de ma premi\u00E8re visite\u00A0?",
        a: "Lors de votre premi\u00E8re visite, vous remplirez un bref formulaire d\u2019antec\u00E9dents m\u00E9dicaux. Le Dr\u00A0Laurent effectuera ensuite une \u00E9valuation approfondie, discutera de vos pr\u00E9occupations et de vos objectifs, et \u00E9laborera un plan de traitement personnalis\u00E9. La consultation se d\u00E9roule dans un environnement s\u00E9curitaire et sans jugement.",
      },
      {
        q: "Quelle est l\u2019exp\u00E9rience du Dr\u00A0Laurent\u00A0?",
        a: "Le Dr\u00A0Laurent est un sp\u00E9cialiste certifi\u00E9 en m\u00E9decine familiale avec une formation approfondie en esth\u00E9tique m\u00E9dicale. Il est certifi\u00E9 par Obesity Canada, Calibre et Worldlink Medical, et a trait\u00E9 plus de 500 patients avec des taux de satisfaction constamment \u00E9lev\u00E9s.",
      },
      {
        q: "Offrez-vous des plans de paiement pour les traitements\u00A0?",
        a: "Veuillez communiquer directement avec notre clinique pour discuter des options de paiement. Nous nous effor\u00E7ons de rendre nos traitements aussi accessibles que possible et travaillerons avec vous pour trouver une entente adapt\u00E9e.",
      },
      {
        q: "Quelles sont les heures d\u2019ouverture et l\u2019emplacement de la clinique\u00A0?",
        a: "Notre clinique est situ\u00E9e au 4072, boul. Le Corbusier, Laval, QC H7L 5R2. Nous sommes ouverts du lundi au vendredi de 9\u00A0h \u00E0 17\u00A0h. Samedi et dimanche, nous sommes ferm\u00E9s.",
      },
      {
        q: "Les proc\u00E9dures esth\u00E9tiques sont-elles s\u00E9curitaires\u00A0?",
        a: "Oui. Toutes les proc\u00E9dures esth\u00E9tiques de notre clinique sont r\u00E9alis\u00E9es par le Dr\u00A0Laurent avec des produits approuv\u00E9s par la FDA dans un environnement m\u00E9dical st\u00E9rile. La s\u00E9curit\u00E9 est notre priorit\u00E9 absolue et nous suivons des protocoles m\u00E9dicaux stricts pour chaque traitement.",
      },
      {
        q: "Combien de temps durent les r\u00E9sultats esth\u00E9tiques\u00A0?",
        a: "Les r\u00E9sultats varient selon le traitement. Le Botox dure g\u00E9n\u00E9ralement de 3 \u00E0 6 mois, le comblement dermique de 6 \u00E0 18 mois, et les traitements laser peuvent offrir des r\u00E9sultats durables. Le Dr\u00A0Laurent discutera de la dur\u00E9e pr\u00E9vue lors de votre consultation.",
      },
      {
        q: "Offrez-vous des consultations virtuelles\u00A0?",
        a: "Veuillez nous contacter pour vous renseigner sur la disponibilit\u00E9 des consultations virtuelles. Certaines \u00E9valuations initiales peuvent \u00EAtre effectu\u00E9es \u00E0 distance, bien que la plupart des traitements n\u00E9cessitent une visite en personne.",
      },
    ],
  },
};

export function FaqContent() {
  const locale = useLocale();
  const t = getTranslations(locale);
  const c = faqContent[locale];

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
                {c.badge}
              </p>
              <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-semibold text-white leading-tight mb-6">
                {c.heroTitle} <span className="text-gold">{c.heroHighlight}</span>
              </h1>
              <p className="text-white/60 text-lg leading-relaxed max-w-2xl mx-auto">
                {c.heroDesc}
              </p>
            </FadeIn>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 bg-cream">
          <div className="max-w-3xl mx-auto px-6">
            <FadeIn>
              <Accordion className="space-y-3">
                {c.faqs.map((faq, i) => (
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
                {c.stillTitle}
              </h2>
              <p className="text-muted-foreground mb-8">
                {c.stillDesc}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-light text-navy px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-gold/20"
                >
                  <Calendar className="w-5 h-5" />
                  {c.contactUs}
                </Link>
                <Link
                  href="tel:+15145003422"
                  className="inline-flex items-center justify-center gap-2 bg-navy text-white px-6 py-4 rounded-full text-sm transition-all duration-300 hover:bg-navy/90"
                >
                  <Phone className="w-4 h-4" />
                  {c.callLabel}
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
                {c.ctaTitle}{" "}
                <span className="text-gold">{c.ctaHighlight}</span>
              </h2>
              <p className="text-white/50 mb-8">
                {c.ctaDesc}
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-navy px-10 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-gold/20"
              >
                <Calendar className="w-5 h-5" />
                {c.ctaButton}
              </Link>
            </FadeIn>
          </div>
        </section>
      </main>
      <FooterSection />
    </>
  );
}
