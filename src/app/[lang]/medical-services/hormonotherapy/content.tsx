"use client";

import { ServicePageLayout } from "@/components/service-page-layout";
import { Activity, ShieldCheck, Heart, Users } from "lucide-react";
import { useLocale } from "@/lib/locale";

const content = {
  en: {
    heroTitle: "Personalized Hormone",
    heroHighlight: "Therapy",
    heroDescription:
      "Comprehensive hormone therapy services including gender-affirming care, hormonal optimization, and ongoing monitoring — delivered in a safe, inclusive, and confidential environment.",
    heroBadges: ["Gender-affirming care", "Personalized protocols", "Ongoing monitoring"],
    heroImage: "https://drlaurentmedecineprivee.ca/assets/hero-medical-consultation-DPuVY465.jpg",
    whyTitle: "Why Choose Dr. Laurent",
    whySubtitle:
      "Expert, affirming hormone therapy guided by evidence-based medicine and genuine compassion.",
    features: [
      {
        icon: Activity,
        title: "Evidence-Based Protocols",
        desc: "Hormone therapy protocols grounded in current medical guidelines, tailored to your unique physiology and health goals.",
      },
      {
        icon: Heart,
        title: "Gender-Affirming Care",
        desc: "Compassionate, knowledgeable support for transgender and gender-diverse individuals seeking hormone therapy.",
      },
      {
        icon: ShieldCheck,
        title: "Safe Monitoring",
        desc: "Regular blood work and health monitoring to ensure your hormone levels are optimized safely and effectively.",
      },
      {
        icon: Users,
        title: "Inclusive & Affirming",
        desc: "A proudly inclusive practice where every patient is treated with dignity, respect, and genuine understanding.",
      },
    ],
    proceduresTitle: "Our Hormone Therapy Services",
    proceduresSubtitle:
      "Tailored hormonal care for a wide range of needs, from gender-affirming treatment to age-related optimization.",
    procedures: [
      {
        title: "Gender-Affirming Hormone Therapy",
        desc: "Feminizing or masculinizing hormone therapy with individualized protocols, regular monitoring, and compassionate guidance throughout your transition.",
      },
      {
        title: "Testosterone Optimization",
        desc: "Assessment and treatment of low testosterone symptoms including fatigue, mood changes, decreased libido, and muscle loss.",
      },
      {
        title: "Thyroid Management",
        desc: "Diagnosis and treatment of hypothyroidism, hyperthyroidism, and other thyroid conditions affecting your hormonal balance.",
      },
      {
        title: "Menopause & Perimenopause",
        desc: "Hormone replacement therapy and symptom management for hot flashes, mood changes, sleep disturbances, and other menopausal concerns.",
      },
      {
        title: "Hormonal Blood Work",
        desc: "Comprehensive hormone panels including testosterone, estrogen, progesterone, thyroid, cortisol, and other key markers.",
      },
      {
        title: "Combined Hormone & Weight Management",
        desc: "Integrated approach addressing hormonal imbalances alongside weight management for optimal results. Available as a combined consultation.",
      },
    ],
    steps: [
      { step: 1, title: "Initial Consultation", desc: "A 45-minute assessment of your hormonal health, medical history, goals, and any symptoms you're experiencing." },
      { step: 2, title: "Testing & Analysis", desc: "Comprehensive blood work to establish baseline hormone levels and identify any imbalances or health considerations." },
      { step: 3, title: "Personalized Protocol", desc: "A tailored hormone therapy plan designed for your specific needs, including dosing, method of delivery, and monitoring schedule." },
      { step: 4, title: "Ongoing Monitoring", desc: "Regular 30-minute follow-ups with blood work to fine-tune your protocol and ensure safe, optimal results." },
    ],
    testimonials: [
      {
        name: "Alex R.",
        initial: "A",
        treatment: "Gender-Affirming HRT",
        text: "Dr. Laurent provided the most affirming, respectful care I've ever experienced. He took the time to answer every question and made me feel safe throughout my transition. This clinic is a gem.",
        rating: 5,
      },
      {
        name: "Daniel M.",
        initial: "D",
        treatment: "Testosterone Therapy",
        text: "After months of fatigue and low energy, Dr. Laurent identified low testosterone and started me on a personalized protocol. Within weeks, I felt like a new person. The monitoring has been excellent.",
        rating: 5,
      },
      {
        name: "Christine V.",
        initial: "C",
        treatment: "Menopause Management",
        text: "Dr. Laurent helped me navigate perimenopause with such care and expertise. My sleep improved, my mood stabilized, and I finally feel like myself again. I wish I'd come sooner.",
        rating: 5,
      },
    ],
    faqs: [
      {
        q: "What does the initial hormone therapy consultation involve?",
        a: "The initial 45-minute consultation includes a thorough review of your medical history, current symptoms, treatment goals, and any previous hormonal treatments. Dr. Laurent will discuss available options, expected timelines, and order any necessary blood work.",
      },
      {
        q: "How much does hormone therapy cost?",
        a: "The initial hormone therapy consultation (45 min) is $350. Follow-up appointments (30 min) are $250. A combined hormone + weight loss initial consultation (45 min) is $600, with combined follow-ups at $350. A $40 file opening fee applies for new patients.",
      },
      {
        q: "Do you provide gender-affirming hormone therapy?",
        a: "Yes. Dr. Laurent is experienced in providing gender-affirming hormone therapy for transgender and gender-diverse individuals. This includes feminizing and masculinizing hormone protocols with careful, ongoing monitoring.",
      },
      {
        q: "How often will I need follow-up appointments?",
        a: "Follow-up frequency depends on your treatment phase. New patients typically have follow-ups every 4-6 weeks initially, then every 3-6 months once stable. Blood work is regularly scheduled to ensure safe hormone levels.",
      },
      {
        q: "Are there risks associated with hormone therapy?",
        a: "All medical treatments carry some risks. Dr. Laurent will discuss potential side effects and risks specific to your protocol during your consultation. Regular monitoring through blood work and follow-ups helps minimize risks and catch any concerns early.",
      },
      {
        q: "Do I need a referral to start hormone therapy?",
        a: "No referral is required. You can book directly with our clinic. During your initial consultation, Dr. Laurent will assess your suitability for hormone therapy and develop a personalized treatment plan.",
      },
    ],
    formTitle: "Book Your Consultation",
    formOptions: [
      "Gender-Affirming HRT",
      "Testosterone Optimization",
      "Thyroid Management",
      "Menopause / Perimenopause",
      "Hormonal Blood Work",
      "Other / Not Sure",
    ],
  },
  fr: {
    heroTitle: "Hormonothérapie",
    heroHighlight: "personnalisée",
    heroDescription:
      "Services complets d'hormonothérapie incluant les soins d'affirmation de genre, l'optimisation hormonale et le suivi continu — dans un environnement sécuritaire, inclusif et confidentiel.",
    heroBadges: ["Soins d'affirmation de genre", "Protocoles personnalisés", "Suivi continu"],
    heroImage: "https://drlaurentmedecineprivee.ca/assets/hero-medical-consultation-DPuVY465.jpg",
    whyTitle: "Pourquoi choisir Dr Laurent",
    whySubtitle:
      "Une hormonothérapie experte et affirmative, guidée par la médecine fondée sur les données probantes et une compassion sincère.",
    features: [
      {
        icon: Activity,
        title: "Protocoles fondés sur les données probantes",
        desc: "Des protocoles d'hormonothérapie ancrés dans les lignes directrices médicales actuelles, adaptés à votre physiologie unique et vos objectifs de santé.",
      },
      {
        icon: Heart,
        title: "Soins d'affirmation de genre",
        desc: "Soutien compatissant et compétent pour les personnes transgenres et de genres diversifiés qui souhaitent une hormonothérapie.",
      },
      {
        icon: ShieldCheck,
        title: "Suivi sécuritaire",
        desc: "Bilans sanguins réguliers et suivi de santé pour assurer que vos niveaux hormonaux sont optimisés de façon sécuritaire et efficace.",
      },
      {
        icon: Users,
        title: "Inclusif et affirmatif",
        desc: "Une pratique fièrement inclusive où chaque patient est traité avec dignité, respect et compréhension sincère.",
      },
    ],
    proceduresTitle: "Nos services d'hormonothérapie",
    proceduresSubtitle:
      "Des soins hormonaux sur mesure pour un large éventail de besoins, de l'affirmation de genre à l'optimisation liée à l'âge.",
    procedures: [
      {
        title: "Hormonothérapie d'affirmation de genre",
        desc: "Hormonothérapie féminisante ou masculinisante avec des protocoles individualisés, un suivi régulier et un accompagnement compatissant tout au long de votre transition.",
      },
      {
        title: "Optimisation de la testostérone",
        desc: "Évaluation et traitement des symptômes de faible testostérone incluant la fatigue, les changements d'humeur, la baisse de libido et la perte musculaire.",
      },
      {
        title: "Gestion thyroïdienne",
        desc: "Diagnostic et traitement de l'hypothyroïdie, de l'hyperthyroïdie et d'autres conditions thyroïdiennes affectant votre équilibre hormonal.",
      },
      {
        title: "Ménopause et périménopause",
        desc: "Hormonothérapie de remplacement et gestion des symptômes pour les bouffées de chaleur, les changements d'humeur, les troubles du sommeil et autres préoccupations liées à la ménopause.",
      },
      {
        title: "Bilans sanguins hormonaux",
        desc: "Panels hormonaux complets incluant la testostérone, l'œstrogène, la progestérone, la thyroïde, le cortisol et d'autres marqueurs clés.",
      },
      {
        title: "Hormonothérapie et gestion du poids combinées",
        desc: "Approche intégrée abordant les déséquilibres hormonaux parallèlement à la gestion du poids pour des résultats optimaux. Disponible en consultation combinée.",
      },
    ],
    steps: [
      { step: 1, title: "Consultation initiale", desc: "Une évaluation de 45 minutes de votre santé hormonale, votre historique médical, vos objectifs et tout symptôme que vous ressentez." },
      { step: 2, title: "Tests et analyse", desc: "Bilans sanguins complets pour établir les niveaux hormonaux de base et identifier tout déséquilibre ou considération de santé." },
      { step: 3, title: "Protocole personnalisé", desc: "Un plan d'hormonothérapie sur mesure conçu pour vos besoins spécifiques, incluant le dosage, le mode d'administration et le calendrier de suivi." },
      { step: 4, title: "Suivi continu", desc: "Des suivis réguliers de 30 minutes avec bilans sanguins pour affiner votre protocole et assurer des résultats sécuritaires et optimaux." },
    ],
    testimonials: [
      {
        name: "Alex R.",
        initial: "A",
        treatment: "HRT d'affirmation de genre",
        text: "Dr Laurent a fourni les soins les plus affirmatifs et respectueux que j'aie jamais reçus. Il a pris le temps de répondre à chaque question et m'a fait sentir en sécurité tout au long de ma transition. Cette clinique est un joyau.",
        rating: 5,
      },
      {
        name: "Daniel M.",
        initial: "D",
        treatment: "Thérapie à la testostérone",
        text: "Après des mois de fatigue et de manque d'énergie, Dr Laurent a identifié un faible taux de testostérone et m'a mis sur un protocole personnalisé. En quelques semaines, je me sentais comme une nouvelle personne. Le suivi a été excellent.",
        rating: 5,
      },
      {
        name: "Christine V.",
        initial: "C",
        treatment: "Gestion de la ménopause",
        text: "Dr Laurent m'a aidée à naviguer la périménopause avec tant de soin et d'expertise. Mon sommeil s'est amélioré, mon humeur s'est stabilisée et je me sens enfin moi-même à nouveau. J'aurais aimé venir plus tôt.",
        rating: 5,
      },
    ],
    faqs: [
      {
        q: "En quoi consiste la consultation initiale en hormonothérapie?",
        a: "La consultation initiale de 45 minutes comprend une révision approfondie de votre historique médical, de vos symptômes actuels, de vos objectifs de traitement et de tout traitement hormonal antérieur. Dr Laurent discutera des options disponibles, des délais prévus et commandera les bilans sanguins nécessaires.",
      },
      {
        q: "Combien coûte l'hormonothérapie?",
        a: "La consultation initiale en hormonothérapie (45 min) est à 350 $. Les rendez-vous de suivi (30 min) sont à 250 $. Une consultation initiale combinée hormones + perte de poids (45 min) est à 600 $, avec des suivis combinés à 350 $. Des frais d'ouverture de dossier de 40 $ s'appliquent pour les nouveaux patients.",
      },
      {
        q: "Offrez-vous l'hormonothérapie d'affirmation de genre?",
        a: "Oui. Dr Laurent possède l'expérience pour offrir l'hormonothérapie d'affirmation de genre pour les personnes transgenres et de genres diversifiés. Cela inclut les protocoles hormonaux féminisants et masculinisants avec un suivi attentif et continu.",
      },
      {
        q: "À quelle fréquence aurai-je besoin de rendez-vous de suivi?",
        a: "La fréquence des suivis dépend de votre phase de traitement. Les nouveaux patients ont généralement des suivis toutes les 4 à 6 semaines initialement, puis tous les 3 à 6 mois une fois stabilisés. Des bilans sanguins sont régulièrement planifiés pour assurer des niveaux hormonaux sécuritaires.",
      },
      {
        q: "Y a-t-il des risques associés à l'hormonothérapie?",
        a: "Tous les traitements médicaux comportent certains risques. Dr Laurent discutera des effets secondaires potentiels et des risques spécifiques à votre protocole lors de votre consultation. Le suivi régulier par bilans sanguins et rendez-vous aide à minimiser les risques et à détecter toute préoccupation tôt.",
      },
      {
        q: "Ai-je besoin d'une référence pour commencer l'hormonothérapie?",
        a: "Aucune référence n'est requise. Vous pouvez prendre rendez-vous directement avec notre clinique. Lors de votre consultation initiale, Dr Laurent évaluera votre admissibilité à l'hormonothérapie et développera un plan de traitement personnalisé.",
      },
    ],
    formTitle: "Réservez votre consultation",
    formOptions: [
      "HRT d'affirmation de genre",
      "Optimisation de la testostérone",
      "Gestion thyroïdienne",
      "Ménopause / Périménopause",
      "Bilans sanguins hormonaux",
      "Autre / Pas certain",
    ],
  },
};

export function HormonotherapyContent() {
  const locale = useLocale();
  const t = content[locale];

  return (
    <ServicePageLayout
      heroTitle={t.heroTitle}
      heroHighlight={t.heroHighlight}
      heroDescription={t.heroDescription}
      heroBadges={t.heroBadges}
      heroImage={t.heroImage}
      whyTitle={t.whyTitle}
      whySubtitle={t.whySubtitle}
      features={t.features}
      proceduresTitle={t.proceduresTitle}
      proceduresSubtitle={t.proceduresSubtitle}
      procedures={t.procedures}
      steps={t.steps}
      testimonials={t.testimonials}
      faqs={t.faqs}
      formTitle={t.formTitle}
      formOptions={t.formOptions}
    />
  );
}
