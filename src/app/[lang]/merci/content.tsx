"use client";

import Image from "next/image";
import { FadeIn } from "@/components/motion";
import Link from "@/components/locale-link";
import { useLocale } from "@/lib/locale";
import { CheckCircle, Phone, MessageCircle, Clock } from "lucide-react";

const copy = {
  fr: {
    badge: "Demande reçue",
    title: "Merci!",
    highlight: "Votre demande est bien reçue.",
    desc: "Un membre de l'équipe du Dr. Laurent vous contactera sous 24 heures pour discuter des prochaines étapes.",
    stepsTitle: "Prochaines étapes",
    steps: [
      {
        icon: Clock,
        title: "Sous 24 heures",
        desc: "Nous vous appelons ou vous écrivons pour confirmer vos préférences et proposer un créneau.",
      },
      {
        icon: MessageCircle,
        title: "Questions en attendant?",
        desc: "Clavardez avec notre assistant virtuel en bas à droite, ou appelez-nous directement.",
      },
      {
        icon: CheckCircle,
        title: "Consultation initiale",
        desc: "Évaluation personnalisée avec Dr. Laurent. Aucun engagement, aucune pression.",
      },
    ],
    urgent:
      "Besoin de joindre quelqu'un maintenant? Appelez la clinique au (514) 500-3422.",
    afterHours:
      "Pour une complication après une procédure esthétique, composez le 514-968-7125.",
    callBtn: "Appeler la clinique",
    homeBtn: "Retour à l'accueil",
  },
  en: {
    badge: "Request received",
    title: "Thank you!",
    highlight: "Your request is in good hands.",
    desc: "A member of Dr. Laurent's team will reach out within 24 hours to discuss next steps.",
    stepsTitle: "What happens next",
    steps: [
      {
        icon: Clock,
        title: "Within 24 hours",
        desc: "We'll call or message to confirm your preferences and offer a time that works.",
      },
      {
        icon: MessageCircle,
        title: "Questions in the meantime?",
        desc: "Chat with our virtual assistant bottom-right, or call us directly.",
      },
      {
        icon: CheckCircle,
        title: "Initial consultation",
        desc: "Personalized evaluation with Dr. Laurent. No commitment, no pressure.",
      },
    ],
    urgent:
      "Need to reach someone now? Call the clinic at (514) 500-3422.",
    afterHours:
      "For an aesthetic procedure complication, call 514-968-7125.",
    callBtn: "Call the clinic",
    homeBtn: "Back to home",
  },
};

export function MerciContent() {
  const locale = useLocale();
  const c = copy[locale];
  const switchHref = locale === "fr" ? "/en/merci" : "/fr/merci";

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
          </div>
        </div>
      </header>

      <main className="min-h-screen flex flex-col">
        {/* Hero */}
        <section className="relative flex-1 flex items-center overflow-hidden pt-28 pb-20">
          <div className="absolute inset-0 bg-navy">
            <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/90 to-navy" />
            <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
            <FadeIn>
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gold/15 mb-6">
                <CheckCircle className="w-10 h-10 text-gold" />
              </div>
              <p className="text-gold text-sm font-medium tracking-wider uppercase mb-4">
                {c.badge}
              </p>
              <h1 className="font-heading text-5xl md:text-7xl font-semibold text-white leading-tight mb-6">
                {c.title}
              </h1>
              <p className="text-white/80 text-xl mb-4">{c.highlight}</p>
              <p className="text-white/60 text-base max-w-xl mx-auto leading-relaxed">
                {c.desc}
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Steps */}
        <section className="py-16 bg-cream">
          <div className="max-w-4xl mx-auto px-6">
            <FadeIn className="text-center mb-10">
              <h2 className="font-heading text-3xl font-semibold text-navy">
                {c.stepsTitle}
              </h2>
            </FadeIn>
            <div className="grid md:grid-cols-3 gap-5">
              {c.steps.map((s, i) => (
                <FadeIn key={s.title} delay={i * 0.08}>
                  <div className="p-6 rounded-2xl bg-white border border-border/50 h-full text-center">
                    <div className="mx-auto p-3 rounded-xl bg-gold/10 w-fit mb-4">
                      <s.icon className="w-5 h-5 text-gold" />
                    </div>
                    <h3 className="font-heading text-lg font-semibold text-navy mb-2">
                      {s.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Urgent + CTA */}
        <section className="py-16 bg-navy text-center">
          <div className="max-w-2xl mx-auto px-6">
            <FadeIn>
              <p className="text-white/80 mb-2">{c.urgent}</p>
              <p className="text-white/50 text-sm mb-8">{c.afterHours}</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="tel:+15145003422"
                  className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-light text-navy px-8 py-3.5 rounded-full font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-gold/20"
                >
                  <Phone className="w-4 h-4" />
                  {c.callBtn}
                </a>
                <Link
                  href="/"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 border border-white/20 text-white px-8 py-3.5 rounded-full font-semibold transition-all duration-300"
                >
                  {c.homeBtn}
                </Link>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>

      <footer className="bg-navy border-t border-white/10 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center text-white/50 text-xs">
          <p>© 2026 Dr. Laurent Médecine Privée</p>
        </div>
      </footer>
    </>
  );
}
