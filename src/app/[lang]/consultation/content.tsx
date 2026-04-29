"use client";

import Image from "next/image";
import { FadeIn } from "@/components/motion";
import { LeadForm } from "@/components/lead-form";
import Link from "@/components/locale-link";
import { useLocale } from "@/lib/locale";
import {
  Phone,
  CheckCircle,
  Clock,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  CreditCard,
} from "lucide-react";

const copy = {
  fr: {
    badge: "Consultation privée",
    heroTitle: "Votre consultation privée avec",
    heroHighlight: "Dr. Laurent",
    heroDesc:
      "Médecine et esthétique au même endroit. Pas de file d'attente. Un médecin qui prend le temps.",
    formTitle: "R\u00E9server votre consultation",
    formSubtitle: "Analyse gratuite, moins d'une minute à remplir.",
    phoneCta: "Appeler (514) 500-3422",
    whyTitle: "Ce qui vous attend",
    whyItems: [
      {
        icon: Stethoscope,
        title: "Évaluation personnalisée",
        desc: "Dr. Laurent prend le temps d'écouter vos objectifs avant toute recommandation.",
      },
      {
        icon: Sparkles,
        title: "Plan de traitement sur mesure",
        desc: "Médecine générale, esthétique ou les deux. Aucune pression, aucun forfait imposé.",
      },
      {
        icon: ShieldCheck,
        title: "Privé, confidentiel, premium",
        desc: "Clinique moderne à Laval, équipement de pointe, confidentialité totale.",
      },
      {
        icon: Clock,
        title: "Rendez-vous rapide",
        desc: "Première disponibilité habituellement en moins de 7 jours.",
      },
      {
        icon: CreditCard,
        title: "Financement Beautifi",
        desc: "0% d'intérêt pendant 6 mois sur les traitements esthétiques admissibles.",
      },
      {
        icon: CheckCircle,
        title: "Sans engagement",
        desc: "La consultation initiale permet d'explorer vos options. Vous décidez ensuite.",
      },
    ],
    servicesTitle: "Services offerts",
    servicesList: [
      "Médecine familiale et urgences mineures",
      "Hormonothérapie et gestion du poids",
      "Santé mentale et TDAH",
      "Botox, comblement et injectables",
      "Lasers et radiofréquence",
      "Lipolyse et remodelage corporel",
      "Santé sexuelle masculine",
      "Soins cutanés et rajeunissement",
    ],
    trustLine:
      "Vos informations sont 100% confidentielles. Aucun spam, aucun partage.",
  },
  en: {
    badge: "Private consultation",
    heroTitle: "Your private consultation with",
    heroHighlight: "Dr. Laurent",
    heroDesc:
      "Medicine and aesthetics under one roof. No wait list. A doctor who takes the time.",
    formTitle: "Book your consultation",
    formSubtitle: "Free assessment, less than a minute to fill out.",
    phoneCta: "Call (514) 500-3422",
    whyTitle: "What to expect",
    whyItems: [
      {
        icon: Stethoscope,
        title: "Personalized evaluation",
        desc: "Dr. Laurent takes the time to listen to your goals before recommending anything.",
      },
      {
        icon: Sparkles,
        title: "Treatment plan built for you",
        desc: "General medicine, aesthetics, or both. No pressure, no packaged offers.",
      },
      {
        icon: ShieldCheck,
        title: "Private, confidential, premium",
        desc: "Modern Laval clinic, advanced equipment, full discretion.",
      },
      {
        icon: Clock,
        title: "Quick appointment",
        desc: "First opening usually within 7 days.",
      },
      {
        icon: CreditCard,
        title: "Beautifi financing",
        desc: "0% interest for 6 months on eligible aesthetic treatments.",
      },
      {
        icon: CheckCircle,
        title: "No commitment",
        desc: "The initial consultation is for exploring your options. You decide next.",
      },
    ],
    servicesTitle: "Services offered",
    servicesList: [
      "Family medicine and minor urgent care",
      "Hormone therapy and weight management",
      "Mental health and ADHD",
      "Botox, fillers and injectables",
      "Lasers and radiofrequency",
      "Lipolysis and body contouring",
      "Male sexual health",
      "Skin care and rejuvenation",
    ],
    trustLine:
      "Your information is 100% confidential. No spam, no sharing.",
  },
};

export function ConsultationContent() {
  const locale = useLocale();
  const c = copy[locale];
  const switchHref = locale === "fr" ? "/en/consultation" : "/fr/consultation";

  return (
    <>
      {/* Minimal header */}
      <header className="absolute top-0 inset-x-0 z-30 bg-transparent">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo-drlaurent.jpg"
              alt="Dr. Laurent"
              width={48}
              height={48}
              className="rounded-full"
              priority
            />
            <span className="hidden sm:block font-heading text-white text-lg font-semibold">
              Dr. Laurent
            </span>
          </Link>
          <div className="flex items-center gap-3">
            <a
              href={switchHref}
              className="text-white/80 hover:text-gold text-xs font-semibold uppercase tracking-wider transition-colors"
            >
              {locale === "fr" ? "EN" : "FR"}
            </a>
            <a
              href="tel:+15145003422"
              className="hidden sm:inline-flex items-center gap-2 bg-white/10 border border-white/20 hover:bg-white/20 text-white px-4 py-2 rounded-full text-xs font-semibold transition-all"
            >
              <Phone className="w-3.5 h-3.5" />
              (514) 500-3422
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* Hero + Form */}
        <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
          <div className="absolute inset-0 bg-navy">
            <div className="absolute inset-0 bg-gradient-to-b from-navy/50 via-navy/80 to-navy" />
            <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-gold/5 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: copy */}
            <div>
              <FadeIn>
                <p className="text-gold text-sm font-medium tracking-wider uppercase mb-4">
                  {c.badge}
                </p>
                <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-semibold text-white leading-tight mb-6">
                  {c.heroTitle}{" "}
                  <span className="text-gold">{c.heroHighlight}</span>
                </h1>
                <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-lg">
                  {c.heroDesc}
                </p>
              </FadeIn>

              <FadeIn delay={0.15}>
                <a
                  href="tel:+15145003422"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-6 py-3 rounded-full text-sm transition-all duration-300"
                >
                  <Phone className="w-4 h-4" />
                  {c.phoneCta}
                </a>
              </FadeIn>
            </div>

            {/* Right: form */}
            <FadeIn delay={0.2} direction="left">
              <div className="bg-white rounded-2xl p-8 shadow-2xl">
                <h2 className="font-heading text-2xl font-semibold text-navy mb-2">
                  {c.formTitle}
                </h2>
                <p className="text-muted-foreground text-sm mb-6">
                  {c.formSubtitle}
                </p>
                <LeadForm
                  source="website-consultation"
                  showMessage
                  redirectTo="/merci"
                />
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Why */}
        <section className="py-20 bg-cream">
          <div className="max-w-6xl mx-auto px-6">
            <FadeIn className="text-center mb-14">
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-semibold text-navy mb-4">
                {c.whyTitle}
              </h2>
            </FadeIn>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {c.whyItems.map((item, i) => (
                <FadeIn key={item.title} delay={i * 0.05}>
                  <div className="p-6 rounded-2xl bg-white border border-border/50 h-full">
                    <div className="p-3 rounded-xl bg-gold/10 w-fit mb-4">
                      <item.icon className="w-5 h-5 text-gold" />
                    </div>
                    <h3 className="font-heading text-lg font-semibold text-navy mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Services list */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <FadeIn>
              <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-navy mb-8">
                {c.servicesTitle}
              </h2>
            </FadeIn>
            <div className="grid sm:grid-cols-2 gap-3 text-left">
              {c.servicesList.map((s, i) => (
                <FadeIn key={s} delay={i * 0.04}>
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-cream/50 border border-border/30">
                    <CheckCircle className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <span className="text-sm text-navy/80">{s}</span>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Trust + final CTA */}
        <section className="py-20 bg-navy text-center">
          <div className="max-w-2xl mx-auto px-6">
            <FadeIn>
              <p className="text-white/60 text-sm mb-8">{c.trustLine}</p>
              <a
                href="#top"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-navy px-10 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-gold/20"
              >
                {c.formTitle}
              </a>
            </FadeIn>
          </div>
        </section>
      </main>

      {/* Minimal footer */}
      <footer className="bg-navy border-t border-white/10 py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-white/50 text-xs">
          <p>© 2026 Dr. Laurent Médecine Privée</p>
          <div className="flex gap-6">
            <Link href="/" className="hover:text-white/80 transition-colors">
              {locale === "fr" ? "Accueil" : "Home"}
            </Link>
            <Link href="/contact" className="hover:text-white/80 transition-colors">
              Contact
            </Link>
            <a
              href="tel:+15145003422"
              className="hover:text-white/80 transition-colors"
            >
              (514) 500-3422
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
