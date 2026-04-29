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
import Link from "@/components/locale-link";
import { useLocale } from "@/lib/locale";

const content = {
  en: {
    heroBadge: "Frequently Asked Questions",
    heroTitle: "Penile Enhancement",
    heroHighlight: "FAQ",
    heroDescription:
      "Get answers to the most common questions about penile enhancement procedures, safety, results, and what to expect.",
    badges: ["15+ Years Experience", "100% Confidential", "Evidence-Based Care"],
    bookConsultation: "Book Free Consultation",
    callLabel: "Call (514) 500-3422",
    stillHaveQuestionsTitle: "Still Have Questions?",
    stillHaveQuestionsDesc:
      "We understand that choosing penile enhancement is a personal decision. Our team is here to answer all your questions in a confidential, judgment-free environment.",
    scheduleConsultation: "Schedule Free Consultation",
    callUsNow: "Call Us Now",
    checkmarks: [
      "Free consultation with no obligation",
      "100% confidential and discreet",
      "Over 15 years of medical expertise",
    ],
    exploreTitle: "Explore Our Services",
    exploreSubtitle:
      "Learn more about our comprehensive men's health and enhancement services",
    learnMore: "Learn More",
    ctaTitle: "Ready to Take the",
    ctaHighlight: "Next Step?",
    ctaDesc:
      "Book your free, confidential consultation today and discover how we can help you achieve your goals.",
    ctaButton: "Book Free Consultation",
    ctaCallLabel: "Or call us directly:",
    faqCategories: [
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
    ],
    relatedServices: [
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
    ],
  },
  fr: {
    heroBadge: "Foire aux questions",
    heroTitle: "Augmentation pénienne",
    heroHighlight: "FAQ",
    heroDescription:
      "Obtenez des réponses aux questions les plus courantes sur les procédures d'augmentation pénienne, la sécurité, les résultats et à quoi vous attendre.",
    badges: ["Plus de 15 ans d'expérience", "100 % confidentiel", "Soins fondés sur des données probantes"],
    bookConsultation: "Réservez une consultation gratuite",
    callLabel: "Appelez le (514) 500-3422",
    stillHaveQuestionsTitle: "Vous avez encore des questions ?",
    stillHaveQuestionsDesc:
      "Nous comprenons que choisir l'augmentation pénienne est une décision personnelle. Notre équipe est là pour répondre à toutes vos questions dans un environnement confidentiel et sans jugement.",
    scheduleConsultation: "Planifier une consultation gratuite",
    callUsNow: "Appelez-nous maintenant",
    checkmarks: [
      "Consultation gratuite sans obligation",
      "100 % confidentiel et discret",
      "Plus de 15 ans d'expertise médicale",
    ],
    exploreTitle: "Explorez nos services",
    exploreSubtitle:
      "En savoir plus sur nos services complets de santé masculine et d'augmentation",
    learnMore: "En savoir plus",
    ctaTitle: "Prêt à franchir la",
    ctaHighlight: "prochaine étape ?",
    ctaDesc:
      "Réservez votre consultation gratuite et confidentielle dès aujourd'hui et découvrez comment nous pouvons vous aider à atteindre vos objectifs.",
    ctaButton: "Réservez une consultation gratuite",
    ctaCallLabel: "Ou appelez-nous directement :",
    faqCategories: [
      {
        label: "Informations générales",
        faqs: [
          {
            q: "Qu'est-ce que l'augmentation pénienne ?",
            a: "L'augmentation pénienne est une procédure non chirurgicale qui utilise des agents de comblement dermiques à base d'acide hyaluronique approuvés par la FDA pour augmenter la circonférence pénienne. La procédure est réalisée par un médecin certifié dans un environnement médical stérile.",
          },
          {
            q: "Suis-je un bon candidat pour l'augmentation pénienne ?",
            a: "La plupart des hommes adultes en bonne santé sont candidats à cette procédure. Lors de votre consultation confidentielle, Dr Laurent évaluera votre anatomie, discutera de vos objectifs et déterminera la meilleure approche pour vos besoins spécifiques.",
          },
          {
            q: "Quels types de procédures d'augmentation pénienne sont disponibles ?",
            a: "Nous offrons plusieurs forfaits : Retouche (6 ml, 3 000 $), Argent (12 ml, 6 000 $), Or (18 ml, 9 000 $) et Platine (24 ml, 12 000 $). Chaque forfait est conçu pour atteindre différents niveaux d'augmentation.",
          },
          {
            q: "Comment savoir quelle procédure me convient ?",
            a: "Lors de votre consultation gratuite, Dr Laurent évaluera votre anatomie, discutera de vos objectifs et recommandera le forfait le plus approprié. La consultation est entièrement confidentielle et sans obligation.",
          },
        ],
      },
      {
        label: "Sécurité et résultats",
        faqs: [
          {
            q: "Les procédures d'augmentation pénienne sont-elles sécuritaires ?",
            a: "Oui. Nous utilisons uniquement des agents de comblement à base d'acide hyaluronique approuvés par la FDA, le même type utilisé dans des millions de procédures esthétiques à travers le monde. La procédure est réalisée dans un environnement médical stérile par un médecin certifié avec une vaste expérience.",
          },
          {
            q: "Quels résultats puis-je attendre ?",
            a: "Les patients constatent généralement une augmentation immédiate de la circonférence avec des résultats complets visibles dans les 2 à 4 semaines une fois le gonflement initial résorbé. Les résultats ont une apparence et une sensation naturelles.",
          },
          {
            q: "Combien de temps durent les résultats ?",
            a: "Les résultats durent généralement de 12 à 18 mois selon le type et la quantité d'agent de comblement utilisé. Des séances d'entretien optionnelles peuvent prolonger et améliorer vos résultats au fil du temps.",
          },
          {
            q: "La procédure aura-t-elle un aspect naturel ?",
            a: "Absolument. Les agents de comblement à base d'acide hyaluronique utilisés sont souples et malléables, et la technique d'injection spécialisée de Dr Laurent assure une répartition uniforme pour des résultats lisses et d'apparence naturelle.",
          },
        ],
      },
      {
        label: "Détails de la procédure",
        faqs: [
          {
            q: "Combien de temps dure la procédure ?",
            a: "La procédure dure généralement de 30 à 45 minutes selon le forfait sélectionné.",
          },
          {
            q: "La procédure est-elle douloureuse ?",
            a: "Une anesthésie locale est appliquée pour assurer votre confort tout au long de la procédure. La plupart des patients rapportent un inconfort minimal.",
          },
          {
            q: "Quel est le temps de récupération ?",
            a: "La plupart des patients reprennent leurs activités quotidiennes normales dans les 24 à 48 heures. Les activités intimes doivent être évitées pendant environ 2 semaines.",
          },
          {
            q: "Quand puis-je reprendre l'activité sexuelle ?",
            a: "Nous recommandons d'attendre environ 2 semaines après la procédure avant de reprendre l'activité sexuelle afin de permettre une guérison et des résultats optimaux.",
          },
        ],
      },
      {
        label: "Coûts et consultation",
        faqs: [
          {
            q: "Combien coûte l'augmentation pénienne ?",
            a: "Nos forfaits vont de 3 000 $ (Retouche, 6 ml) à 12 000 $ (Platine, 24 ml). Le meilleur forfait pour vous sera déterminé lors de votre consultation gratuite.",
          },
          {
            q: "L'augmentation pénienne est-elle couverte par l'assurance ?",
            a: "L'augmentation pénienne est considérée comme une procédure esthétique élective et n'est généralement pas couverte par l'assurance.",
          },
          {
            q: "Offrez-vous des plans de paiement ?",
            a: "Veuillez contacter notre clinique pour discuter des options de paiement disponibles. Nous nous efforçons de rendre nos traitements accessibles.",
          },
          {
            q: "Que se passe-t-il lors de la consultation ?",
            a: "Lors de votre consultation gratuite et confidentielle, Dr Laurent discutera de vos objectifs, évaluera votre anatomie, expliquera la procédure en détail, répondra à toutes vos questions et recommandera le plan de traitement le plus approprié.",
          },
        ],
      },
      {
        label: "Confidentialité et soutien",
        faqs: [
          {
            q: "Ma consultation est-elle confidentielle ?",
            a: "Absolument. Toutes les consultations et tous les traitements sont 100 % confidentiels. Votre vie privée est notre priorité absolue.",
          },
          {
            q: "Que faire si je ne suis pas satisfait des résultats ?",
            a: "La satisfaction du patient est notre priorité. Les agents de comblement à base d'acide hyaluronique peuvent être ajustés ou dissous si nécessaire. Dr Laurent travaillera avec vous pour s'assurer que vous êtes satisfait de vos résultats.",
          },
          {
            q: "Offrez-vous des soins de suivi ?",
            a: "Oui. Des rendez-vous de suivi sont inclus pour surveiller vos résultats et assurer des résultats optimaux. Nous sommes engagés envers votre satisfaction tout au long de votre parcours.",
          },
          {
            q: "Puis-je parler avec d'anciens patients ?",
            a: "En raison de la nature confidentielle de ce traitement, nous ne pouvons pas partager les informations des patients. Cependant, nous pouvons partager des résultats anonymisés avant/après lors de votre consultation.",
          },
        ],
      },
    ],
    relatedServices: [
      {
        title: "Comblement pénien",
        desc: "Augmentation non chirurgicale de la circonférence à l'aide d'agents de comblement dermiques de qualité supérieure pour des résultats naturels.",
        href: "/sexual-health/penis-fillers",
      },
      {
        title: "Scrotox et Grotox",
        desc: "Traitements d'amélioration esthétique pour une apparence et un confort améliorés.",
        href: "/sexual-health/scrotox-grotox",
      },
      {
        title: "Bien-être sexuel",
        desc: "Services complets de santé sexuelle pour une performance et une satisfaction optimales.",
        href: "/sexual-health/penis-enhancement-benefits",
      },
    ],
  },
};

export function SexualHealthFaqContent() {
  const locale = useLocale();
  const c = content[locale];

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
                {c.heroBadge}
              </p>
              <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-semibold text-white leading-tight mb-6">
                {c.heroTitle} <span className="text-gold">{c.heroHighlight}</span>
              </h1>
              <p className="text-white/60 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
                {c.heroDescription}
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
                <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 text-white/80 text-sm">
                  <CheckCircle className="w-4 h-4 text-gold" />
                  {c.badges[0]}
                </span>
                <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 text-white/80 text-sm">
                  <Shield className="w-4 h-4 text-gold" />
                  {c.badges[1]}
                </span>
                <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 text-white/80 text-sm">
                  <Clock className="w-4 h-4 text-gold" />
                  {c.badges[2]}
                </span>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/booking"
                  className="flex items-center justify-center gap-2 bg-gold hover:bg-gold-light text-navy px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-gold/20"
                >
                  <Calendar className="w-5 h-5" />
                  {c.bookConsultation}
                </Link>
                <Link
                  href="tel:+15145003422"
                  className="flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white px-6 py-4 rounded-full text-sm transition-all duration-300 hover:bg-white/15"
                >
                  <Phone className="w-4 h-4" />
                  {c.callLabel}
                </Link>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* FAQ Categories */}
        <section className="py-24 bg-cream">
          <div className="max-w-3xl mx-auto px-6">
            {c.faqCategories.map((cat, catIdx) => (
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
                {c.stillHaveQuestionsTitle}
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                {c.stillHaveQuestionsDesc}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
                <Link
                  href="/booking"
                  className="flex items-center justify-center gap-2 bg-gold hover:bg-gold-light text-navy px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-gold/20"
                >
                  <Calendar className="w-5 h-5" />
                  {c.scheduleConsultation}
                </Link>
                <Link
                  href="tel:+15145003422"
                  className="flex items-center justify-center gap-2 bg-navy text-white px-6 py-4 rounded-full text-sm transition-all duration-300 hover:bg-navy/90"
                >
                  <Phone className="w-4 h-4" />
                  {c.callUsNow}
                </Link>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
                {c.checkmarks.map((text, i) => (
                  <span key={i} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-gold" />
                    {text}
                  </span>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-24 bg-cream">
          <div className="max-w-6xl mx-auto px-6">
            <FadeIn className="text-center mb-14">
              <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-navy mb-4">
                {c.exploreTitle}
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {c.exploreSubtitle}
              </p>
            </FadeIn>
            <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.08}>
              {c.relatedServices.map((svc) => (
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
                      {c.learnMore}
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
                {c.ctaTitle} <span className="text-gold">{c.ctaHighlight}</span>
              </h2>
              <p className="text-white/50 mb-6">
                {c.ctaDesc}
              </p>
              <Link
                href="/booking"
                className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-navy px-10 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-gold/20"
              >
                <Calendar className="w-5 h-5" />
                {c.ctaButton}
              </Link>
              <p className="mt-4 text-white/40 text-sm">
                {c.ctaCallLabel}{" "}
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
