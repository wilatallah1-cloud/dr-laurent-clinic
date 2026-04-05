"use client";

import { FadeIn } from "@/components/motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, Phone, ArrowRight } from "lucide-react";
import Link from "@/components/locale-link";
import { useLocale } from "@/lib/locale";
import { getTranslations } from "@/lib/translations";
import type { Locale } from "@/lib/locale";

const faqsData: Record<Locale, { q: string; a: string }[]> = {
  en: [
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
  ],
  fr: [
    {
      q: "Quels services offre la clinique du Dr Laurent\u00A0?",
      a: "Nous offrons la m\u00E9decine familiale compl\u00E8te pour tous les \u00E2ges, des traitements d\u2019esth\u00E9tique m\u00E9dicale incluant le Botox, les comblements dermiques, les traitements laser, le remodelage corporel, des programmes de gestion du poids, des d\u00E9pistages pr\u00E9ventifs, ainsi que des proc\u00E9dures sp\u00E9cialis\u00E9es comme l\u2019augmentation p\u00E9nienne et le BBL liquide.",
    },
    {
      q: "Comment puis-je prendre rendez-vous\u00A0?",
      a: "Vous pouvez prendre rendez-vous en nous appelant au (514) 500-3422, en utilisant notre formulaire de r\u00E9servation en ligne ou en nous \u00E9crivant \u00E0 info@drlaurentmedecineetesthetique.com. Nous nous effor\u00E7ons de trouver un horaire qui vous convient.",
    },
    {
      q: "Les consultations sont-elles confidentielles\u00A0?",
      a: "Absolument. Toutes les consultations et tous les traitements sont men\u00E9s dans la plus grande confidentialit\u00E9 et discr\u00E9tion. Nous respectons des protocoles stricts de protection de la vie priv\u00E9e et toutes les informations des patients sont prot\u00E9g\u00E9es conform\u00E9ment aux lois sur la vie priv\u00E9e du Qu\u00E9bec.",
    },
    {
      q: "\u00C0 quoi dois-je m\u2019attendre lors de ma premi\u00E8re visite\u00A0?",
      a: "Lors de votre premi\u00E8re visite, le Dr Laurent proc\u00E9dera \u00E0 une \u00E9valuation approfondie de vos objectifs de sant\u00E9 ou d\u2019esth\u00E9tique. Vous aurez amplement le temps de discuter de vos pr\u00E9occupations, de poser des questions et d\u2019\u00E9laborer ensemble un plan de traitement personnalis\u00E9.",
    },
    {
      q: "Quelle est l\u2019exp\u00E9rience du Dr Laurent\u00A0?",
      a: "Le Dr Laurent est un sp\u00E9cialiste certifi\u00E9 en m\u00E9decine familiale avec plus de 15 ans d\u2019exp\u00E9rience en soins primaires et en esth\u00E9tique m\u00E9dicale. Il d\u00E9tient des certifications d\u2019Obesity Canada, Calibre et Worldlink Medical, et a trait\u00E9 plus de 5\u00A0000 patients.",
    },
    {
      q: "Offrez-vous des plans de paiement pour les traitements\u00A0?",
      a: "Oui, nous comprenons que certains traitements repr\u00E9sentent un investissement important. Nous offrons des plans de paiement flexibles et des options de financement pour rendre nos services accessibles. Veuillez discuter des options de paiement lors de votre consultation.",
    },
    {
      q: "Quels sont vos heures d\u2019ouverture et votre emplacement\u00A0?",
      a: "Notre clinique est situ\u00E9e au 4072 Le Corbusier, Laval, QC H7L 5R2. Nous sommes ouverts du lundi au vendredi de 9\u00A0h\u00A000 \u00E0 17\u00A0h\u00A000. Nous sommes ferm\u00E9s les fins de semaine et les jours f\u00E9ri\u00E9s.",
    },
    {
      q: "Les proc\u00E9dures esth\u00E9tiques sont-elles s\u00E9curitaires\u00A0?",
      a: "Toutes les proc\u00E9dures esth\u00E9tiques de notre clinique sont r\u00E9alis\u00E9es par le Dr Laurent en utilisant uniquement des produits approuv\u00E9s par Sant\u00E9 Canada et les \u00E9quipements m\u00E9dicaux les plus r\u00E9cents. La s\u00E9curit\u00E9 est notre priorit\u00E9 absolue et chaque traitement suit des protocoles m\u00E9dicaux rigoureux.",
    },
    {
      q: "Combien de temps durent les r\u00E9sultats esth\u00E9tiques\u00A0?",
      a: "Les r\u00E9sultats varient selon le traitement\u00A0: le Botox dure g\u00E9n\u00E9ralement 3 \u00E0 4 mois, les comblements dermiques de 6 \u00E0 18 mois selon le produit, et les traitements laser offrent une am\u00E9lioration progressive sur plusieurs s\u00E9ances. Le Dr Laurent discutera des d\u00E9lais pr\u00E9vus lors de votre consultation.",
    },
    {
      q: "Offrez-vous des consultations virtuelles\u00A0?",
      a: "Oui, nous offrons des consultations virtuelles pour les \u00E9valuations initiales et les rendez-vous de suivi. C\u2019est particuli\u00E8rement pratique pour les patients qui pr\u00E9f\u00E8rent discuter de leurs pr\u00E9occupations depuis le confort de leur domicile avant de s\u2019engager dans une visite en personne.",
    },
  ],
};

export function FAQSection() {
  const locale = useLocale();
  const t = getTranslations(locale);
  const faqs = faqsData[locale];
  return (
    <section id="faq" className="relative py-24 sm:py-32 bg-cream">
      <div className="max-w-3xl mx-auto px-6">
        <FadeIn className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/5 mb-6">
            <HelpCircle className="w-4 h-4 text-gold" />
            <span className="text-sm text-gold font-medium tracking-wide">
              {t.faqSection.badge}
            </span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-semibold text-navy mb-4">
            {t.faqSection.title} <span className="text-gold">{t.faqSection.titleHighlight}</span>
          </h2>
          <p className="text-muted-foreground">
            {t.faqSection.subtitle}
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
              {t.faqSection.stillHaveQuestions}
            </h3>
            <p className="text-muted-foreground text-sm mb-6">
              {t.faqSection.stillHaveQuestionsDesc}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="#contact"
                className="flex items-center gap-2 bg-gold hover:bg-gold-light text-navy px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300"
              >
                {t.faqSection.contactUs}
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
