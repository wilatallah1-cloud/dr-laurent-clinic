"use client";

import { useMemo, useState } from "react";
import Script from "next/script";
import { Navbar } from "@/components/navbar";
import { FooterSection } from "@/components/sections/footer";
import { FadeIn } from "@/components/motion";
import { useLocale } from "@/lib/locale";
import { Phone, ShieldCheck, Clock, Calendar } from "lucide-react";

const GHL_BOOKING_URL =
  "https://api.leadconnectorhq.com/widget/booking/OoJgu9VZv5oTuYa2fwCT";

// Service options match the GHL custom field "Service Interest" picklist.
const SERVICES = [
  "Lipolyse",
  "Esthetique Visage",
  "Esthetique Corps",
  "Sante sexuelle masculine",
  "Penile enhancement",
  "Medecine generale",
  "Autre",
] as const;

type ServiceValue = (typeof SERVICES)[number] | "";

const SERVICE_LABELS: Record<
  ServiceValue,
  { fr: string; en: string }
> = {
  "": { fr: "Sélectionnez un service", en: "Select a service" },
  "Lipolyse": { fr: "Lipolyse", en: "Lipolysis" },
  "Esthetique Visage": {
    fr: "Esthétique du visage (Botox, comblement, lasers...)",
    en: "Facial aesthetics (Botox, fillers, lasers...)",
  },
  "Esthetique Corps": {
    fr: "Esthétique du corps (Liquid BBL, RF, contour...)",
    en: "Body aesthetics (Liquid BBL, RF, contouring...)",
  },
  "Sante sexuelle masculine": {
    fr: "Santé sexuelle masculine",
    en: "Male sexual health",
  },
  "Penile enhancement": {
    fr: "Penile enhancement",
    en: "Penile enhancement",
  },
  "Medecine generale": {
    fr: "Médecine générale / consultation privée",
    en: "General medicine / private consultation",
  },
  "Autre": { fr: "Autre / Je ne suis pas sûr(e)", en: "Other / Not sure" },
};

const copy = {
  fr: {
    badge: "Prise de rendez-vous",
    heroTitle: "Réservez votre",
    heroHighlight: "consultation",
    heroDesc:
      "Choisissez directement la date et l'heure qui vous conviennent. Disponibilités en temps réel.",
    pickerLabel: "Quel type de consultation ?",
    pickerHelp:
      "Cela aide notre équipe à préparer votre visite. Vous pouvez toujours en discuter plus en détail sur place.",
    perks: [
      {
        icon: Clock,
        title: "Disponibilité temps réel",
        desc: "Les créneaux affichés sont à jour à la seconde.",
      },
      {
        icon: ShieldCheck,
        title: "Confirmation immédiate",
        desc: "Vous recevez un courriel et SMS de confirmation dès la réservation.",
      },
      {
        icon: Calendar,
        title: "Annulation simple",
        desc: "Annulez ou reportez en un clic jusqu'à 48h avant le rendez-vous.",
      },
    ],
    phoneCta: "Préférez-vous réserver par téléphone?",
    phoneBtn: "Appeler (514) 500-3422",
    policyNote:
      "Politique d'annulation : 48 heures de préavis requis. Des frais de 100 $ s'appliquent pour une annulation tardive ou une absence.",
  },
  en: {
    badge: "Book your appointment",
    heroTitle: "Book your",
    heroHighlight: "consultation",
    heroDesc: "Pick a date and time that works for you. Real-time availability.",
    pickerLabel: "What type of consultation?",
    pickerHelp:
      "This helps our team prepare for your visit. You can always discuss further in person.",
    perks: [
      {
        icon: Clock,
        title: "Live availability",
        desc: "Time slots shown are current to the second.",
      },
      {
        icon: ShieldCheck,
        title: "Instant confirmation",
        desc: "You get an email and SMS confirmation the moment you book.",
      },
      {
        icon: Calendar,
        title: "Easy rescheduling",
        desc: "Cancel or reschedule in one click up to 48h before the appointment.",
      },
    ],
    phoneCta: "Prefer to book by phone?",
    phoneBtn: "Call (514) 500-3422",
    policyNote:
      "Cancellation policy: 48 hours notice required. A $100 fee applies for late cancellations or missed appointments.",
  },
};

export function BookingContent() {
  const locale = useLocale();
  const c = copy[locale];
  const [service, setService] = useState<ServiceValue>("");

  const iframeSrc = useMemo(() => {
    if (!service) return GHL_BOOKING_URL;
    const params = new URLSearchParams({
      service_interest: service,
    });
    return `${GHL_BOOKING_URL}?${params.toString()}`;
  }, [service]);

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative bg-navy pt-32 pb-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy/95 to-navy/90" />
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <FadeIn>
              <p className="text-gold text-sm font-medium tracking-wider uppercase mb-4">
                {c.badge}
              </p>
              <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-semibold text-white leading-tight mb-6">
                {c.heroTitle}{" "}
                <span className="text-gold">{c.heroHighlight}</span>
              </h1>
              <p className="text-white/60 text-lg leading-relaxed max-w-2xl mx-auto">
                {c.heroDesc}
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Service picker + calendar */}
        <section className="py-16 bg-cream">
          <div className="max-w-5xl mx-auto px-6">
            <FadeIn>
              <div className="bg-white rounded-2xl shadow-xl border border-border/50 overflow-hidden">
                {/* Picker */}
                <div className="p-6 sm:p-8 border-b border-border/50 bg-white">
                  <label
                    htmlFor="service-picker"
                    className="block text-sm font-medium text-navy mb-2"
                  >
                    {c.pickerLabel}
                  </label>
                  <select
                    id="service-picker"
                    value={service}
                    onChange={(e) => setService(e.target.value as ServiceValue)}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-cream/50 text-sm focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold"
                  >
                    <option value="">{SERVICE_LABELS[""][locale]}</option>
                    {SERVICES.map((s) => (
                      <option key={s} value={s}>
                        {SERVICE_LABELS[s][locale]}
                      </option>
                    ))}
                  </select>
                  <p className="mt-2 text-xs text-muted-foreground">
                    {c.pickerHelp}
                  </p>
                </div>

                {/* Iframe */}
                <iframe
                  key={iframeSrc}
                  src={iframeSrc}
                  style={{
                    width: "100%",
                    border: "none",
                    height: "650px",
                    display: "block",
                  }}
                  scrolling="no"
                  id="dr-laurent-booking-iframe"
                  title="Booking calendar"
                />
              </div>
              <Script
                src="https://link.msgsndr.com/js/form_embed.js"
                strategy="afterInteractive"
              />
            </FadeIn>
          </div>
        </section>

        {/* Perks */}
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-5">
              {c.perks.map((p, i) => (
                <FadeIn key={p.title} delay={i * 0.08}>
                  <div className="p-6 rounded-2xl bg-cream/50 border border-border/30 h-full text-center">
                    <div className="mx-auto p-3 rounded-xl bg-gold/10 w-fit mb-4">
                      <p.icon className="w-5 h-5 text-gold" />
                    </div>
                    <h3 className="font-heading text-lg font-semibold text-navy mb-2">
                      {p.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Phone fallback + policy */}
        <section className="py-16 bg-navy text-center">
          <div className="max-w-2xl mx-auto px-6">
            <FadeIn>
              <p className="text-white/80 mb-4">{c.phoneCta}</p>
              <a
                href="tel:+15145003422"
                className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-navy px-8 py-3.5 rounded-full font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-gold/20 mb-8"
              >
                <Phone className="w-4 h-4" />
                {c.phoneBtn}
              </a>
              <p className="text-white/50 text-xs max-w-lg mx-auto">
                {c.policyNote}
              </p>
            </FadeIn>
          </div>
        </section>
      </main>
      <FooterSection />
    </>
  );
}
