"use client";

import { ServicePageLayout } from "@/components/service-page-layout";
import { Award, Shield, Sparkles, Lock } from "lucide-react";
import { useLocale } from "@/lib/locale";

const content = {
  en: {
    heroTitle: "Enhanced Confidence &",
    heroHighlight: "Satisfaction",
    heroDescription:
      "Advanced, non-surgical penis enhancement using FDA-approved dermal fillers for natural-looking results and increased confidence.",
    heroBadges: ["FDA-approved fillers", "Medical expertise", "Discreet care"],
    whyTitle: "Why Choose Dr. Laurent",
    whySubtitle:
      "Medical excellence combined with discreet, professional care in male enhancement procedures.",
    features: [
      {
        icon: Award,
        title: "Medical Expertise",
        desc: "Board-certified physician with specialized training in male enhancement procedures and medical aesthetic.",
      },
      {
        icon: Shield,
        title: "FDA-Approved Fillers",
        desc: "Using only premium, FDA-approved hyaluronic acid fillers in sterile medical environment.",
      },
      {
        icon: Sparkles,
        title: "Natural Results",
        desc: "Techniques that maintain sensitivity and function while providing natural-looking enhancement.",
      },
      {
        icon: Lock,
        title: "Discreet & Confidential",
        desc: "Complete privacy and confidentiality throughout your entire journey with us.",
      },
    ],
    proceduresTitle: "Our Enhancement Procedures",
    proceduresSubtitle:
      "Comprehensive treatment options designed to enhance your confidence and satisfaction.",
    procedures: [
      {
        title: "Girth Enhancement",
        desc: "Increase penile circumference using FDA-approved hyaluronic acid fillers for natural results.",
      },
      {
        title: "Natural Look & Feel",
        desc: "Maintains sensitivity and function while providing smooth, natural-looking enhancement.",
      },
      {
        title: "Minimal Downtime",
        desc: "Quick 30-45 minute procedure with minimal recovery time—return to normal activities quickly.",
      },
      {
        title: "Confidence Boost",
        desc: "Enhanced size translates to improved self-esteem and confidence in intimate situations.",
      },
      {
        title: "Long-Lasting Results",
        desc: "Results typically last 12-18 months with proper care and optional maintenance sessions.",
      },
      {
        title: "Safe & Proven",
        desc: "FDA-approved fillers in sterile medical environment with board-certified physician.",
      },
    ],
    steps: [
      { step: 1, title: "Initial Consultation", desc: "Confidential assessment of your goals and anatomy" },
      { step: 2, title: "Treatment Planning", desc: "Personalized plan tailored to your specific needs" },
      { step: 3, title: "Treatment Session", desc: "Quick 30-45 minute procedure with local anesthetic" },
      { step: 4, title: "Follow-Up Care", desc: "Monitoring and optional touch-ups for optimal results" },
    ],
    testimonials: [
      {
        name: "Michael P.",
        initial: "M",
        treatment: "Girth Enhancement",
        text: "The procedure was quick, discreet, and professional. Dr. Laurent made me feel completely comfortable throughout. The results exceeded my expectations and my confidence has soared!",
        rating: 5,
      },
      {
        name: "David R.",
        initial: "D",
        treatment: "Enhancement Procedure",
        text: "I was nervous at first, but the entire experience was handled with such professionalism and care. The results look natural and feel amazing. Best decision I've made for myself!",
        rating: 5,
      },
      {
        name: "Andrew S.",
        initial: "A",
        treatment: "Girth Enhancement",
        text: "The privacy and discretion were impeccable. Dr. Laurent's expertise showed in every aspect. Recovery was quick and the enhancement is exactly what I hoped for. Highly recommend!",
        rating: 5,
      },
    ],
    faqs: [
      {
        q: "Am I a good candidate for penis fillers?",
        a: "Most healthy adult men are candidates for this procedure. During your confidential consultation, Dr. Laurent will assess your anatomy, discuss your goals, and determine the best approach for your specific needs.",
      },
      {
        q: "What should I expect during the procedure?",
        a: "The procedure takes approximately 30-45 minutes. Local anesthetic is applied for comfort. FDA-approved hyaluronic acid fillers are carefully injected using specialized techniques for even, natural-looking enhancement.",
      },
      {
        q: "How should I prepare for my appointment?",
        a: "Avoid blood-thinning medications and supplements for one week prior. Come to your appointment well-hydrated. Dr. Laurent will provide detailed preparation instructions during your consultation.",
      },
      {
        q: "What is the recovery time after treatment?",
        a: "Most patients return to normal activities within 24-48 hours. Intimate activities should be avoided for approximately 2 weeks. Mild swelling and sensitivity are normal and resolve quickly.",
      },
      {
        q: "How long do results last?",
        a: "Results typically last 12-18 months depending on the type and amount of filler used. Optional maintenance sessions can extend and enhance your results over time.",
      },
      {
        q: "Will the enhancement feel natural?",
        a: "Yes. The hyaluronic acid fillers used are soft and pliable, providing a natural feel. Dr. Laurent's expertise ensures even distribution for smooth, natural-looking and natural-feeling results.",
      },
    ],
    formTitle: "Book Your Consultation",
    formOptions: ["Girth Enhancement", "General Information", "Initial Consultation", "Other / Not Sure"],
  },
  fr: {
    heroTitle: "Confiance accrue &",
    heroHighlight: "Satisfaction",
    heroDescription:
      "Augmentation pénienne non chirurgicale avancée utilisant des agents de comblement dermiques approuvés par la FDA pour des résultats naturels et une confiance accrue.",
    heroBadges: ["Agents de comblement approuvés FDA", "Expertise médicale", "Soins discrets"],
    whyTitle: "Pourquoi choisir Dr Laurent",
    whySubtitle:
      "Excellence médicale alliée à des soins discrets et professionnels en matière d'augmentation masculine.",
    features: [
      {
        icon: Award,
        title: "Expertise médicale",
        desc: "Médecin certifié avec une formation spécialisée en procédures d'augmentation masculine et en esthétique médicale.",
      },
      {
        icon: Shield,
        title: "Agents de comblement approuvés FDA",
        desc: "Utilisation exclusive d'agents de comblement à base d'acide hyaluronique de qualité supérieure, approuvés par la FDA, dans un environnement médical stérile.",
      },
      {
        icon: Sparkles,
        title: "Résultats naturels",
        desc: "Techniques qui préservent la sensibilité et la fonction tout en offrant une augmentation d'apparence naturelle.",
      },
      {
        icon: Lock,
        title: "Discret et confidentiel",
        desc: "Confidentialité et discrétion complètes tout au long de votre parcours avec nous.",
      },
    ],
    proceduresTitle: "Nos procédures d'augmentation",
    proceduresSubtitle:
      "Options de traitement complètes conçues pour renforcer votre confiance et votre satisfaction.",
    procedures: [
      {
        title: "Augmentation de la circonférence",
        desc: "Augmentation de la circonférence pénienne à l'aide d'agents de comblement à base d'acide hyaluronique approuvés par la FDA pour des résultats naturels.",
      },
      {
        title: "Apparence et sensation naturelles",
        desc: "Préserve la sensibilité et la fonction tout en offrant une augmentation lisse et d'apparence naturelle.",
      },
      {
        title: "Temps d'arrêt minimal",
        desc: "Procédure rapide de 30 à 45 minutes avec un temps de récupération minimal — reprise rapide des activités normales.",
      },
      {
        title: "Regain de confiance",
        desc: "Une taille améliorée se traduit par une meilleure estime de soi et une plus grande confiance dans les situations intimes.",
      },
      {
        title: "Résultats durables",
        desc: "Les résultats durent généralement de 12 à 18 mois avec des soins appropriés et des séances d'entretien optionnelles.",
      },
      {
        title: "Sécuritaire et éprouvé",
        desc: "Agents de comblement approuvés par la FDA dans un environnement médical stérile avec un médecin certifié.",
      },
    ],
    steps: [
      { step: 1, title: "Consultation initiale", desc: "Évaluation confidentielle de vos objectifs et de votre anatomie" },
      { step: 2, title: "Planification du traitement", desc: "Plan personnalisé adapté à vos besoins spécifiques" },
      { step: 3, title: "Séance de traitement", desc: "Procédure rapide de 30 à 45 minutes avec anesthésie locale" },
      { step: 4, title: "Suivi", desc: "Surveillance et retouches optionnelles pour des résultats optimaux" },
    ],
    testimonials: [
      {
        name: "Michael P.",
        initial: "M",
        treatment: "Augmentation de la circonférence",
        text: "La procédure a été rapide, discrète et professionnelle. Dr Laurent m'a mis complètement à l'aise tout au long du processus. Les résultats ont dépassé mes attentes et ma confiance a grimpé en flèche !",
        rating: 5,
      },
      {
        name: "David R.",
        initial: "D",
        treatment: "Procédure d'augmentation",
        text: "J'étais nerveux au début, mais toute l'expérience a été gérée avec un tel professionnalisme et une telle attention. Les résultats sont naturels et incroyables. La meilleure décision que j'ai prise pour moi-même !",
        rating: 5,
      },
      {
        name: "Andrew S.",
        initial: "A",
        treatment: "Augmentation de la circonférence",
        text: "La confidentialité et la discrétion étaient impeccables. L'expertise de Dr Laurent transparaissait dans chaque aspect. La récupération a été rapide et l'augmentation correspond exactement à ce que j'espérais. Je recommande vivement !",
        rating: 5,
      },
    ],
    faqs: [
      {
        q: "Suis-je un bon candidat pour le comblement pénien ?",
        a: "La plupart des hommes adultes en bonne santé sont candidats à cette procédure. Lors de votre consultation confidentielle, Dr Laurent évaluera votre anatomie, discutera de vos objectifs et déterminera la meilleure approche pour vos besoins spécifiques.",
      },
      {
        q: "À quoi dois-je m'attendre pendant la procédure ?",
        a: "La procédure dure environ 30 à 45 minutes. Une anesthésie locale est appliquée pour le confort. Des agents de comblement à base d'acide hyaluronique approuvés par la FDA sont soigneusement injectés à l'aide de techniques spécialisées pour une augmentation uniforme et d'apparence naturelle.",
      },
      {
        q: "Comment dois-je me préparer pour mon rendez-vous ?",
        a: "Évitez les médicaments et suppléments anticoagulants pendant une semaine avant le rendez-vous. Venez bien hydraté. Dr Laurent vous fournira des instructions détaillées de préparation lors de votre consultation.",
      },
      {
        q: "Quel est le temps de récupération après le traitement ?",
        a: "La plupart des patients reprennent leurs activités normales dans les 24 à 48 heures. Les activités intimes doivent être évitées pendant environ 2 semaines. Un léger gonflement et une sensibilité sont normaux et se résorbent rapidement.",
      },
      {
        q: "Combien de temps durent les résultats ?",
        a: "Les résultats durent généralement de 12 à 18 mois selon le type et la quantité d'agent de comblement utilisé. Des séances d'entretien optionnelles peuvent prolonger et améliorer vos résultats au fil du temps.",
      },
      {
        q: "L'augmentation sera-t-elle naturelle au toucher ?",
        a: "Oui. Les agents de comblement à base d'acide hyaluronique utilisés sont souples et malléables, offrant une sensation naturelle. L'expertise de Dr Laurent assure une répartition uniforme pour des résultats d'apparence et de sensation naturelles.",
      },
    ],
    formTitle: "Réservez votre consultation",
    formOptions: ["Augmentation de la circonférence", "Informations générales", "Consultation initiale", "Autre / Pas certain"],
  },
};

export function PenisFiltersContent() {
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
