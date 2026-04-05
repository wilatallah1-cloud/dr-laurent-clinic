"use client";

import { ServicePageLayout } from "@/components/service-page-layout";
import { Award, Shield, Sparkles, Lock } from "lucide-react";
import { useLocale } from "@/lib/locale";

const content = {
  en: {
    heroTitle: "Scrotox & Grotox at",
    heroHighlight: "Dr. Laurent Clinic",
    heroDescription:
      "Advanced neuromodulator treatments for enhanced comfort, confidence, and aesthetics in intimate areas. Experience discreet, professional care with lasting results.",
    heroBadges: ["Years of experience", "Expert treatments", "Complete privacy"],
    whyTitle: "Why Choose Dr. Laurent",
    whySubtitle: "Experience the difference of specialized care with proven results",
    features: [
      {
        icon: Award,
        title: "Specialized Expertise",
        desc: "Years of experience in intimate wellness treatments with proven results.",
      },
      {
        icon: Sparkles,
        title: "Precision Techniques",
        desc: "Advanced injection methods for optimal comfort and natural-looking results.",
      },
      {
        icon: Lock,
        title: "Complete Privacy",
        desc: "Confidential consultations in a judgment-free, professional environment.",
      },
      {
        icon: Shield,
        title: "Patient-Centered Care",
        desc: "Personalized treatment plans tailored to your unique needs and goals.",
      },
    ],
    proceduresTitle: "Our Specialized Treatments",
    proceduresSubtitle: "Advanced neuromodulator solutions for intimate wellness",
    procedures: [
      {
        title: "Scrotox",
        desc: "Specialized botulinum toxin treatment for the scrotal area to reduce sweating, minimize wrinkling, and enhance comfort.",
      },
      {
        title: "Grotox",
        desc: "Advanced neuromodulator treatment for the gluteal area to reduce excessive sweating and improve aesthetic appearance.",
      },
      {
        title: "Combination Treatments",
        desc: "Customized treatment plans combining multiple approaches for comprehensive results tailored to your needs.",
      },
    ],
    steps: [
      { step: 1, title: "Private Consultation", desc: "Confidential discussion of your concerns and goals in a judgment-free environment." },
      { step: 2, title: "Personalized Plan", desc: "Customized treatment strategy designed specifically for your unique needs." },
      { step: 3, title: "Expert Treatment", desc: "Precise application performed with the highest standards of care and comfort." },
      { step: 4, title: "Follow-Up Care", desc: "Ongoing support and monitoring to ensure optimal, long-lasting results." },
    ],
    testimonials: [
      {
        name: "M.D.",
        initial: "M",
        treatment: "Scrotox",
        text: "Life-changing results. The treatment was quick, professional, and completely discreet. I wish I had done this sooner.",
        rating: 5,
      },
      {
        name: "J.R.",
        initial: "J",
        treatment: "Grotox",
        text: "Dr. Laurent made me feel completely comfortable throughout the entire process. The results exceeded my expectations.",
        rating: 5,
      },
      {
        name: "A.S.",
        initial: "A",
        treatment: "Scrotox",
        text: "Professional, caring, and incredibly skilled. The improvement in my daily comfort has been remarkable.",
        rating: 5,
      },
    ],
    faqs: [
      {
        q: "Is the treatment painful?",
        a: "Most patients experience minimal discomfort. A topical anesthetic is applied before treatment to ensure your comfort throughout the procedure.",
      },
      {
        q: "How long does the treatment take?",
        a: "The procedure typically takes 15-30 minutes depending on the treatment area and your specific needs.",
      },
      {
        q: "Is the procedure confidential?",
        a: "Absolutely. Complete confidentiality is guaranteed throughout your entire treatment journey with us.",
      },
      {
        q: "Who is a good candidate?",
        a: "Most healthy adults concerned about excessive sweating, discomfort, or aesthetics in intimate areas are good candidates. A consultation will determine the best approach for you.",
      },
      {
        q: "What can I expect after treatment?",
        a: "Mild swelling or redness may occur but typically resolves within a few days. Most patients return to normal activities within 24 hours.",
      },
      {
        q: "When will I see results?",
        a: "Results typically become noticeable within 3-7 days and reach full effect within 2 weeks.",
      },
      {
        q: "Are there any side effects?",
        a: "Side effects are generally mild and temporary, including minor swelling, redness, or bruising at the injection site.",
      },
      {
        q: "How often do I need treatments?",
        a: "Results typically last 3-6 months. Regular maintenance treatments are recommended to maintain optimal results.",
      },
    ],
    formTitle: "Book Your Consultation",
    formOptions: ["Scrotox", "Grotox", "Both Treatments", "Other / Not Sure"],
  },
  fr: {
    heroTitle: "Scrotox et Grotox à la",
    heroHighlight: "Clinique Dr Laurent",
    heroDescription:
      "Traitements avancés par neuromodulateurs pour un confort, une confiance et une esthétique améliorés dans les zones intimes. Profitez de soins discrets et professionnels avec des résultats durables.",
    heroBadges: ["Années d'expérience", "Traitements experts", "Confidentialité totale"],
    whyTitle: "Pourquoi choisir Dr Laurent",
    whySubtitle: "Découvrez la différence de soins spécialisés avec des résultats éprouvés",
    features: [
      {
        icon: Award,
        title: "Expertise spécialisée",
        desc: "Des années d'expérience en traitements de bien-être intime avec des résultats éprouvés.",
      },
      {
        icon: Sparkles,
        title: "Techniques de précision",
        desc: "Méthodes d'injection avancées pour un confort optimal et des résultats d'apparence naturelle.",
      },
      {
        icon: Lock,
        title: "Confidentialité totale",
        desc: "Consultations confidentielles dans un environnement professionnel et sans jugement.",
      },
      {
        icon: Shield,
        title: "Soins centrés sur le patient",
        desc: "Plans de traitement personnalisés adaptés à vos besoins et objectifs uniques.",
      },
    ],
    proceduresTitle: "Nos traitements spécialisés",
    proceduresSubtitle: "Solutions avancées par neuromodulateurs pour le bien-être intime",
    procedures: [
      {
        title: "Scrotox",
        desc: "Traitement spécialisé à la toxine botulique pour la zone scrotale afin de réduire la transpiration, minimiser les rides et améliorer le confort.",
      },
      {
        title: "Grotox",
        desc: "Traitement avancé par neuromodulateurs pour la zone fessière afin de réduire la transpiration excessive et améliorer l'apparence esthétique.",
      },
      {
        title: "Traitements combinés",
        desc: "Plans de traitement personnalisés combinant plusieurs approches pour des résultats complets adaptés à vos besoins.",
      },
    ],
    steps: [
      { step: 1, title: "Consultation privée", desc: "Discussion confidentielle de vos préoccupations et objectifs dans un environnement sans jugement." },
      { step: 2, title: "Plan personnalisé", desc: "Stratégie de traitement sur mesure conçue spécifiquement pour vos besoins uniques." },
      { step: 3, title: "Traitement expert", desc: "Application précise réalisée selon les plus hauts standards de soins et de confort." },
      { step: 4, title: "Suivi", desc: "Soutien continu et surveillance pour assurer des résultats optimaux et durables." },
    ],
    testimonials: [
      {
        name: "M.D.",
        initial: "M",
        treatment: "Scrotox",
        text: "Des résultats qui changent la vie. Le traitement a été rapide, professionnel et complètement discret. J'aurais aimé le faire plus tôt.",
        rating: 5,
      },
      {
        name: "J.R.",
        initial: "J",
        treatment: "Grotox",
        text: "Dr Laurent m'a mis complètement à l'aise tout au long du processus. Les résultats ont dépassé mes attentes.",
        rating: 5,
      },
      {
        name: "A.S.",
        initial: "A",
        treatment: "Scrotox",
        text: "Professionnel, attentionné et incroyablement compétent. L'amélioration de mon confort quotidien a été remarquable.",
        rating: 5,
      },
    ],
    faqs: [
      {
        q: "Le traitement est-il douloureux ?",
        a: "La plupart des patients ressentent un inconfort minimal. Un anesthésique topique est appliqué avant le traitement pour assurer votre confort tout au long de la procédure.",
      },
      {
        q: "Combien de temps dure le traitement ?",
        a: "La procédure dure généralement de 15 à 30 minutes selon la zone traitée et vos besoins spécifiques.",
      },
      {
        q: "La procédure est-elle confidentielle ?",
        a: "Absolument. Une confidentialité totale est garantie tout au long de votre parcours de traitement avec nous.",
      },
      {
        q: "Qui est un bon candidat ?",
        a: "La plupart des adultes en bonne santé préoccupés par la transpiration excessive, l'inconfort ou l'esthétique des zones intimes sont de bons candidats. Une consultation déterminera la meilleure approche pour vous.",
      },
      {
        q: "À quoi puis-je m'attendre après le traitement ?",
        a: "Un léger gonflement ou une rougeur peut survenir, mais se résorbe généralement en quelques jours. La plupart des patients reprennent leurs activités normales dans les 24 heures.",
      },
      {
        q: "Quand verrai-je les résultats ?",
        a: "Les résultats deviennent généralement visibles dans les 3 à 7 jours et atteignent leur plein effet en 2 semaines.",
      },
      {
        q: "Y a-t-il des effets secondaires ?",
        a: "Les effets secondaires sont généralement légers et temporaires, incluant un léger gonflement, une rougeur ou des ecchymoses au site d'injection.",
      },
      {
        q: "À quelle fréquence dois-je recevoir des traitements ?",
        a: "Les résultats durent généralement de 3 à 6 mois. Des traitements d'entretien réguliers sont recommandés pour maintenir des résultats optimaux.",
      },
    ],
    formTitle: "Réservez votre consultation",
    formOptions: ["Scrotox", "Grotox", "Les deux traitements", "Autre / Pas certain"],
  },
};

export function ScrotoxGrotoxContent() {
  const locale = useLocale();
  const c = content[locale];

  return (
    <ServicePageLayout
      heroTitle={c.heroTitle}
      heroHighlight={c.heroHighlight}
      heroDescription={c.heroDescription}
      heroBadges={c.heroBadges}
      heroImage="https://drlaurentmedecineprivee.ca/assets/hero-medical-consultation-DPuVY465.jpg"
      whyTitle={c.whyTitle}
      whySubtitle={c.whySubtitle}
      features={c.features}
      proceduresTitle={c.proceduresTitle}
      proceduresSubtitle={c.proceduresSubtitle}
      procedures={c.procedures}
      steps={c.steps}
      testimonials={c.testimonials}
      faqs={c.faqs}
      formTitle={c.formTitle}
      formOptions={c.formOptions}
    />
  );
}
