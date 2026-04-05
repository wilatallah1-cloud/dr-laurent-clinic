"use client";

import { ServicePageLayout } from "@/components/service-page-layout";
import { Award, Shield, Sparkles, Lock } from "lucide-react";
import { useLocale } from "@/lib/locale";

const content = {
  en: {
    heroTitle: "Holetox at",
    heroHighlight: "Dr. Laurent Clinic",
    heroDescription:
      "Advanced perianal neuromodulator treatment for enhanced comfort, hygiene, and confidence. Experience discreet, professional care with transformative results.",
    heroBadges: ["Years of experience", "Expert treatments", "Total privacy"],
    whyTitle: "Why Choose Dr. Laurent",
    whySubtitle: "Experience the difference of specialized intimate wellness care",
    features: [
      {
        icon: Award,
        title: "Specialized Expertise",
        desc: "Years of experience in intimate wellness treatments with proven, transformative results.",
      },
      {
        icon: Sparkles,
        title: "Advanced Techniques",
        desc: "Precision injection methods for optimal comfort and natural-looking results.",
      },
      {
        icon: Lock,
        title: "Total Privacy",
        desc: "Completely confidential consultations in a safe, judgment-free environment.",
      },
      {
        icon: Shield,
        title: "Patient-Centered Care",
        desc: "Personalized treatment plans tailored to your unique needs and goals.",
      },
    ],
    proceduresTitle: "Our Holetox Treatments",
    proceduresSubtitle: "Specialized solutions for enhanced comfort and confidence",
    procedures: [
      {
        title: "Perianal Holetox",
        desc: "Specialized treatment to reduce excessive sweating, minimize irritation, and enhance aesthetic appearance in the perianal area.",
      },
      {
        title: "Comfort Enhancement",
        desc: "Targeted approach to improve daily comfort by reducing moisture, chafing, and discomfort in intimate areas.",
      },
      {
        title: "Maintenance Programs",
        desc: "Customized follow-up schedules to maintain optimal results with regular treatments every 3-6 months.",
      },
    ],
    steps: [
      { step: 1, title: "Private Consultation", desc: "Confidential discussion of your concerns in a comfortable, judgment-free environment." },
      { step: 2, title: "Personalized Assessment", desc: "Thorough evaluation to create a treatment plan tailored to your specific needs." },
      { step: 3, title: "Expert Treatment", desc: "Precise application with advanced techniques ensuring maximum comfort and results." },
      { step: 4, title: "Ongoing Support", desc: "Follow-up care and monitoring to ensure optimal, long-lasting results." },
    ],
    testimonials: [
      {
        name: "P.M.",
        initial: "P",
        treatment: "Holetox",
        text: "This treatment has genuinely changed my life. The improvement in daily comfort is remarkable, and the entire process was handled with complete professionalism.",
        rating: 5,
      },
      {
        name: "R.T.",
        initial: "R",
        treatment: "Holetox",
        text: "Dr. Laurent made me feel completely at ease. The results exceeded my expectations, and I wish I had done this years ago.",
        rating: 5,
      },
      {
        name: "K.S.",
        initial: "K",
        treatment: "Holetox",
        text: "Discreet, professional, and incredibly effective. The difference in my confidence and comfort has been life-changing.",
        rating: 5,
      },
    ],
    faqs: [
      {
        q: "Is Holetox safe?",
        a: "Yes, Holetox uses the same FDA-approved botulinum toxin used in millions of cosmetic procedures worldwide. When performed by a qualified physician like Dr. Laurent, it is a safe and effective treatment.",
      },
      {
        q: "How long does the treatment take?",
        a: "The procedure typically takes 15-30 minutes, making it a quick and convenient treatment option.",
      },
      {
        q: "Is the procedure painful?",
        a: "Most patients experience minimal discomfort. A topical anesthetic is applied before treatment to ensure your comfort throughout the procedure.",
      },
      {
        q: "Who is a good candidate for Holetox?",
        a: "Adults experiencing excessive sweating, discomfort, or aesthetic concerns in the perianal area may benefit from Holetox. A consultation will determine if the treatment is right for you.",
      },
      {
        q: "What can I expect after treatment?",
        a: "You may experience mild swelling or redness that resolves within a few days. Most patients return to normal activities within 24 hours.",
      },
      {
        q: "When will I see results?",
        a: "Results typically become noticeable within 3-7 days and reach full effect within 2 weeks.",
      },
      {
        q: "How long do results last?",
        a: "Results typically last 3-6 months. Regular maintenance treatments are recommended for sustained results.",
      },
      {
        q: "Are there any side effects?",
        a: "Side effects are generally mild and temporary, including minor swelling, redness, or bruising at the treatment site.",
      },
    ],
    formTitle: "Book Your Consultation",
    formOptions: ["Perianal Holetox", "Comfort Enhancement", "Excessive Sweating", "Aesthetic Improvement", "Other / Not Sure"],
  },
  fr: {
    heroTitle: "Holetox à la",
    heroHighlight: "Clinique Dr Laurent",
    heroDescription:
      "Traitement avancé par neuromodulateurs de la zone périanale pour un confort, une hygiène et une confiance améliorés. Profitez de soins discrets et professionnels avec des résultats transformateurs.",
    heroBadges: ["Années d'expérience", "Traitements experts", "Confidentialité totale"],
    whyTitle: "Pourquoi choisir Dr Laurent",
    whySubtitle: "Découvrez la différence de soins spécialisés en bien-être intime",
    features: [
      {
        icon: Award,
        title: "Expertise spécialisée",
        desc: "Des années d'expérience en traitements de bien-être intime avec des résultats éprouvés et transformateurs.",
      },
      {
        icon: Sparkles,
        title: "Techniques avancées",
        desc: "Méthodes d'injection de précision pour un confort optimal et des résultats d'apparence naturelle.",
      },
      {
        icon: Lock,
        title: "Confidentialité totale",
        desc: "Consultations entièrement confidentielles dans un environnement sécuritaire et sans jugement.",
      },
      {
        icon: Shield,
        title: "Soins centrés sur le patient",
        desc: "Plans de traitement personnalisés adaptés à vos besoins et objectifs uniques.",
      },
    ],
    proceduresTitle: "Nos traitements Holetox",
    proceduresSubtitle: "Solutions spécialisées pour un confort et une confiance améliorés",
    procedures: [
      {
        title: "Holetox périanal",
        desc: "Traitement spécialisé pour réduire la transpiration excessive, minimiser l'irritation et améliorer l'apparence esthétique de la zone périanale.",
      },
      {
        title: "Amélioration du confort",
        desc: "Approche ciblée pour améliorer le confort quotidien en réduisant l'humidité, les frottements et l'inconfort dans les zones intimes.",
      },
      {
        title: "Programmes d'entretien",
        desc: "Calendriers de suivi personnalisés pour maintenir des résultats optimaux avec des traitements réguliers tous les 3 à 6 mois.",
      },
    ],
    steps: [
      { step: 1, title: "Consultation privée", desc: "Discussion confidentielle de vos préoccupations dans un environnement confortable et sans jugement." },
      { step: 2, title: "Évaluation personnalisée", desc: "Évaluation approfondie pour créer un plan de traitement adapté à vos besoins spécifiques." },
      { step: 3, title: "Traitement expert", desc: "Application précise avec des techniques avancées assurant un confort et des résultats maximaux." },
      { step: 4, title: "Soutien continu", desc: "Soins de suivi et surveillance pour assurer des résultats optimaux et durables." },
    ],
    testimonials: [
      {
        name: "P.M.",
        initial: "P",
        treatment: "Holetox",
        text: "Ce traitement a véritablement changé ma vie. L'amélioration du confort quotidien est remarquable, et l'ensemble du processus a été géré avec un professionnalisme total.",
        rating: 5,
      },
      {
        name: "R.T.",
        initial: "R",
        treatment: "Holetox",
        text: "Dr Laurent m'a mis complètement à l'aise. Les résultats ont dépassé mes attentes et j'aurais aimé le faire il y a des années.",
        rating: 5,
      },
      {
        name: "K.S.",
        initial: "K",
        treatment: "Holetox",
        text: "Discret, professionnel et incroyablement efficace. La différence en termes de confiance et de confort a changé ma vie.",
        rating: 5,
      },
    ],
    faqs: [
      {
        q: "Le Holetox est-il sécuritaire ?",
        a: "Oui, le Holetox utilise la même toxine botulique approuvée par la FDA utilisée dans des millions de procédures esthétiques à travers le monde. Lorsqu'il est effectué par un médecin qualifié comme Dr Laurent, c'est un traitement sûr et efficace.",
      },
      {
        q: "Combien de temps dure le traitement ?",
        a: "La procédure dure généralement de 15 à 30 minutes, ce qui en fait une option de traitement rapide et pratique.",
      },
      {
        q: "La procédure est-elle douloureuse ?",
        a: "La plupart des patients ressentent un inconfort minimal. Un anesthésique topique est appliqué avant le traitement pour assurer votre confort tout au long de la procédure.",
      },
      {
        q: "Qui est un bon candidat pour le Holetox ?",
        a: "Les adultes souffrant de transpiration excessive, d'inconfort ou de préoccupations esthétiques dans la zone périanale peuvent bénéficier du Holetox. Une consultation déterminera si le traitement vous convient.",
      },
      {
        q: "À quoi puis-je m'attendre après le traitement ?",
        a: "Vous pourriez ressentir un léger gonflement ou une rougeur qui se résorbe en quelques jours. La plupart des patients reprennent leurs activités normales dans les 24 heures.",
      },
      {
        q: "Quand verrai-je les résultats ?",
        a: "Les résultats deviennent généralement visibles dans les 3 à 7 jours et atteignent leur plein effet en 2 semaines.",
      },
      {
        q: "Combien de temps durent les résultats ?",
        a: "Les résultats durent généralement de 3 à 6 mois. Des traitements d'entretien réguliers sont recommandés pour des résultats durables.",
      },
      {
        q: "Y a-t-il des effets secondaires ?",
        a: "Les effets secondaires sont généralement légers et temporaires, incluant un léger gonflement, une rougeur ou des ecchymoses au site de traitement.",
      },
    ],
    formTitle: "Réservez votre consultation",
    formOptions: ["Holetox périanal", "Amélioration du confort", "Transpiration excessive", "Amélioration esthétique", "Autre / Pas certain"],
  },
};

export function HoletoxContent() {
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
