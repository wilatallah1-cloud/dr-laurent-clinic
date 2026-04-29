"use client";

import { Navbar } from "@/components/navbar";
import { FooterSection } from "@/components/sections/footer";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/motion";
import {
  Heart,
  Shield,
  Users,
  Award,
  Calendar,
  CheckCircle,
} from "lucide-react";
import Link from "@/components/locale-link";
import { useLocale } from "@/lib/locale";
import { getTranslations } from "@/lib/translations";

const content = {
  en: {
    badge: "About Our Clinic",
    heroTitle: "Excellence in",
    heroHighlight: "Medicine",
    heroDesc:
      "Dr. Laurent\u2019s private medical clinic combines comprehensive family medicine with advanced medico-aesthetic treatments, offering personalized and compassionate care for patients of all ages.",
    specialist: "Family Medicine Specialist",
    bio1: "Dr. Laurent is a board-certified physician specializing in both comprehensive family medicine and advanced medico-aesthetic treatments. His unique practice unites two specialties under one roof, delivering distinct services with the same precision, safety, and personalized excellence.",
    bio2: "Known for his compassionate approach and meticulous attention to detail, Dr. Laurent creates a safe, judgment-free environment where patients feel comfortable discussing their health concerns. His commitment to patient privacy and satisfaction has made him a trusted name in private healthcare.",
    bio3: "From primary healthcare to aesthetic enhancements, Dr. Laurent is committed to the highest medical standards and a patient-centered approach, ensuring you receive the attention and expertise you deserve.",
    statPatients: "Patients Treated",
    statCertified: "Certified Physician",
    statRating: "Patient Rating",
    valuesTitle: "Our Values",
    valuesSubtitle:
      "Medical care and medico-aesthetic treatments designed with your privacy, comfort, and well-being at the heart of everything we do.",
    valuePatientCentered: "Patient-Centered",
    valuePatientCenteredDesc: "Personalized care for every family member.",
    valueCompassionate: "Compassionate",
    valueCompassionateDesc: "Understanding & supportive approach.",
    valueAllAges: "All Ages",
    valueAllAgesDesc: "From newborns to seniors.",
    valueExcellence: "Excellence",
    valueExcellenceDesc: "Highest medical standards.",
    inclusiveTitle: "Inclusive Care",
    inclusiveDesc:
      "This clinic proudly provides safe, respectful, and fully inclusive care for all members of the LGBTQIA2S+ community.",
    certBadge: "Trusted & Certified",
    certTitle: "Recognized by Leading Medical Organizations",
    certSubtitle:
      "Dr. Laurent\u2019s unwavering commitment to excellence is validated by prestigious healthcare institutions worldwide.",
    certObesityCanada: "Certified in weight management excellence.",
    certCalibre: "Recognized for quality healthcare standards.",
    certWorldlink: "Trusted global medical network partner.",
    certLabel: "Certified",
    ctaTitle: "Ready to Start Your",
    ctaHighlight: "Wellness Journey?",
    ctaDesc:
      "Book your appointment today and experience personalized care that puts you first.",
    ctaButton: "Book Your Appointment",
  },
  fr: {
    badge: "\u00C0 propos de notre clinique",
    heroTitle: "L\u2019excellence en",
    heroHighlight: "M\u00E9decine",
    heroDesc:
      "La clinique priv\u00E9e du Dr\u00A0Laurent combine la m\u00E9decine familiale compl\u00E8te et les traitements m\u00E9dico-esth\u00E9tiques avanc\u00E9s, offrant des soins personnalis\u00E9s et empreints de compassion pour les patients de tous \u00E2ges.",
    specialist: "Sp\u00E9cialiste en m\u00E9decine familiale",
    bio1: "Le Dr\u00A0Laurent est un m\u00E9decin certifi\u00E9 sp\u00E9cialis\u00E9 en m\u00E9decine familiale compl\u00E8te et en traitements m\u00E9dico-esth\u00E9tiques avanc\u00E9s. Sa pratique unique r\u00E9unit deux sp\u00E9cialit\u00E9s sous un m\u00EAme toit, offrant des services distincts avec la m\u00EAme pr\u00E9cision, s\u00E9curit\u00E9 et excellence personnalis\u00E9e.",
    bio2: "Reconnu pour son approche bienveillante et son attention m\u00E9ticuleuse aux d\u00E9tails, le Dr\u00A0Laurent cr\u00E9e un environnement s\u00E9curitaire et sans jugement o\u00F9 les patients se sentent \u00E0 l\u2019aise de discuter de leurs pr\u00E9occupations de sant\u00E9. Son engagement envers la confidentialit\u00E9 et la satisfaction des patients en fait un nom de confiance en soins de sant\u00E9 priv\u00E9s.",
    bio3: "Des soins de sant\u00E9 primaires aux am\u00E9liorations esth\u00E9tiques, le Dr\u00A0Laurent s\u2019engage aux plus hautes normes m\u00E9dicales et \u00E0 une approche centr\u00E9e sur le patient, vous assurant l\u2019attention et l\u2019expertise que vous m\u00E9ritez.",
    statPatients: "Patients trait\u00E9s",
    statCertified: "M\u00E9decin certifi\u00E9",
    statRating: "\u00C9valuation des patients",
    valuesTitle: "Nos valeurs",
    valuesSubtitle:
      "Soins m\u00E9dicaux et traitements m\u00E9dico-esth\u00E9tiques con\u00E7us avec votre vie priv\u00E9e, votre confort et votre bien-\u00EAtre au c\u0153ur de tout ce que nous faisons.",
    valuePatientCentered: "Centr\u00E9 sur le patient",
    valuePatientCenteredDesc:
      "Soins personnalis\u00E9s pour chaque membre de la famille.",
    valueCompassionate: "Bienveillant",
    valueCompassionateDesc: "Approche compr\u00E9hensive et soutenante.",
    valueAllAges: "Tous les \u00E2ges",
    valueAllAgesDesc: "Des nouveau-n\u00E9s aux a\u00EEn\u00E9s.",
    valueExcellence: "Excellence",
    valueExcellenceDesc: "Les plus hautes normes m\u00E9dicales.",
    inclusiveTitle: "Soins inclusifs",
    inclusiveDesc:
      "Cette clinique offre fi\u00E8rement des soins s\u00E9curitaires, respectueux et pleinement inclusifs pour tous les membres de la communaut\u00E9 LGBTQIA2S+.",
    certBadge: "Certifi\u00E9 et reconnu",
    certTitle: "Reconnu par les principales organisations m\u00E9dicales",
    certSubtitle:
      "L\u2019engagement in\u00E9branlable du Dr\u00A0Laurent envers l\u2019excellence est valid\u00E9 par des institutions de sant\u00E9 prestigieuses \u00E0 travers le monde.",
    certObesityCanada:
      "Certifi\u00E9 en excellence de la gestion du poids.",
    certCalibre:
      "Reconnu pour la qualit\u00E9 des normes de soins de sant\u00E9.",
    certWorldlink:
      "Partenaire de confiance du r\u00E9seau m\u00E9dical mondial.",
    certLabel: "Certifi\u00E9",
    ctaTitle: "Pr\u00EAt \u00E0 commencer votre",
    ctaHighlight: "parcours bien-\u00EAtre\u00A0?",
    ctaDesc:
      "R\u00E9servez votre rendez-vous d\u00E8s aujourd\u2019hui et d\u00E9couvrez des soins personnalis\u00E9s qui vous placent au premier plan.",
    ctaButton: "R\u00E9server votre rendez-vous",
  },
};

export function AboutContent() {
  const locale = useLocale();
  const t = getTranslations(locale);
  const c = content[locale];

  const values = [
    {
      icon: Heart,
      title: c.valuePatientCentered,
      desc: c.valuePatientCenteredDesc,
    },
    {
      icon: Users,
      title: c.valueCompassionate,
      desc: c.valueCompassionateDesc,
    },
    {
      icon: Shield,
      title: c.valueAllAges,
      desc: c.valueAllAgesDesc,
    },
    {
      icon: Award,
      title: c.valueExcellence,
      desc: c.valueExcellenceDesc,
    },
  ];

  const certifications = [
    {
      name: "Obesity Canada",
      desc: c.certObesityCanada,
    },
    {
      name: "Calibre",
      desc: c.certCalibre,
    },
    {
      name: "Worldlink Medical",
      desc: c.certWorldlink,
    },
  ];

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

        {/* About Dr. Laurent */}
        <section className="py-24 bg-cream">
          <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div className="relative">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-navy/10">
                  <img
                    src="https://drlaurentmedecineprivee.ca/assets/dr-laurent-new-D1TM1Y8l.jpg"
                    alt="Dr. Jean-Baptiste Laurent"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-gold/10 rounded-2xl w-32 h-32 -z-10" />
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div>
                <p className="text-gold text-sm font-medium tracking-wider uppercase mb-3">
                  {c.specialist}
                </p>
                <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-navy mb-6">
                  Dr. Jean-Baptiste Laurent
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>{c.bio1}</p>
                  <p>{c.bio2}</p>
                  <p>{c.bio3}</p>
                </div>
                <div className="flex items-center gap-6 mt-8">
                  <div className="text-center">
                    <div className="font-heading text-2xl font-bold text-gold">
                      500+
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {c.statPatients}
                    </div>
                  </div>
                  <div className="w-px h-10 bg-border" />
                  <div className="text-center">
                    <div className="font-heading text-2xl font-bold text-gold">
                      Board
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {c.statCertified}
                    </div>
                  </div>
                  <div className="w-px h-10 bg-border" />
                  <div className="text-center">
                    <div className="font-heading text-2xl font-bold text-gold">
                      5.0
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {c.statRating}
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 bg-white noise-overlay">
          <div className="relative z-10 max-w-6xl mx-auto px-6">
            <FadeIn className="text-center mb-16">
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-semibold text-navy mb-4">
                {c.valuesTitle}
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {c.valuesSubtitle}
              </p>
            </FadeIn>
            <StaggerChildren
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
              staggerDelay={0.08}
            >
              {values.map((v) => (
                <StaggerItem key={v.title}>
                  <div className="group p-6 rounded-2xl bg-cream/50 border border-border/50 hover:border-gold/30 hover:shadow-md transition-all duration-500 h-full text-center">
                    <div className="p-3 rounded-xl bg-gold/10 w-fit mx-auto mb-4 group-hover:bg-gold/20 transition-colors">
                      <v.icon className="w-6 h-6 text-gold" />
                    </div>
                    <h3 className="font-heading text-lg font-semibold text-navy mb-2">
                      {v.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {v.desc}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>

            {/* Inclusive banner */}
            <FadeIn delay={0.2} className="mt-12">
              <div className="p-6 rounded-2xl bg-gold/5 border border-gold/20 text-center">
                <h3 className="font-heading text-xl font-semibold text-navy mb-2">
                  {c.inclusiveTitle}
                </h3>
                <p className="text-muted-foreground text-sm max-w-2xl mx-auto">
                  {c.inclusiveDesc}
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-24 bg-cream">
          <div className="max-w-4xl mx-auto px-6">
            <FadeIn className="text-center mb-16">
              <p className="text-gold text-sm font-medium tracking-wider uppercase mb-3">
                {c.certBadge}
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-semibold text-navy mb-4">
                {c.certTitle}
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {c.certSubtitle}
              </p>
            </FadeIn>
            <StaggerChildren
              className="grid sm:grid-cols-3 gap-6"
              staggerDelay={0.08}
            >
              {certifications.map((cert) => (
                <StaggerItem key={cert.name}>
                  <div className="p-6 rounded-2xl bg-white border border-border/50 text-center hover:border-gold/30 hover:shadow-md transition-all duration-500 h-full">
                    <div className="p-3 rounded-xl bg-gold/10 w-fit mx-auto mb-4">
                      <CheckCircle className="w-6 h-6 text-gold" />
                    </div>
                    <h3 className="font-heading text-lg font-semibold text-navy mb-2">
                      {cert.name}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {cert.desc}
                    </p>
                    <span className="inline-block mt-3 text-xs font-medium text-gold bg-gold/10 px-3 py-1 rounded-full">
                      {c.certLabel}
                    </span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>
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
                href="/booking"
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
