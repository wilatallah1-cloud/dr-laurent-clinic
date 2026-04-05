"use client";

import { ServicePageLayout } from "@/components/service-page-layout";
import { Award, Shield, Sparkles, Lock, Heart, TrendingUp } from "lucide-react";
import { useLocale } from "@/lib/locale";

const content = {
  en: {
    heroTitle: "Penis Enhancement",
    heroHighlight: "Benefits",
    heroDescription:
      "Non-surgical penile enhancement offers a safe, effective path to increased confidence, improved aesthetics, and enhanced satisfaction with minimal downtime.",
    heroBadges: ["FDA-approved fillers", "Natural results", "Minimal downtime"],
    whyTitle: "Key Benefits",
    whySubtitle: "Discover how non-surgical penis enhancement can transform your confidence and satisfaction",
    features: [
      {
        icon: TrendingUp,
        title: "Increased Confidence",
        desc: "Enhanced size translates to improved self-esteem and confidence in intimate situations.",
      },
      {
        icon: Sparkles,
        title: "Natural Look & Feel",
        desc: "Premium fillers provide a natural appearance and feel that maintains full sensitivity.",
      },
      {
        icon: Shield,
        title: "Safe & Proven",
        desc: "FDA-approved hyaluronic acid fillers performed in a sterile medical environment.",
      },
      {
        icon: Heart,
        title: "Enhanced Satisfaction",
        desc: "Patients report significantly improved satisfaction and quality of intimate life.",
      },
    ],
    proceduresTitle: "Enhancement Options",
    proceduresSubtitle: "Comprehensive treatment options designed for your unique goals",
    procedures: [
      {
        title: "Girth Enhancement",
        desc: "Increase penile circumference using premium hyaluronic acid fillers for natural, even results.",
      },
      {
        title: "Glans Enhancement",
        desc: "Targeted enhancement of the glans for improved proportion and aesthetics.",
      },
      {
        title: "Touchup Packages",
        desc: "Maintenance sessions starting at 6ml ($3,000) to preserve and optimize your results over time.",
      },
      {
        title: "Silver Package - 12ml",
        desc: "Moderate enhancement for natural-looking improvement at $6,000.",
      },
      {
        title: "Gold Package - 18ml",
        desc: "Significant enhancement for noticeable results at $9,000.",
      },
      {
        title: "Platinum Package - 24ml",
        desc: "Maximum enhancement for dramatic transformation at $12,000.",
      },
    ],
    steps: [
      { step: 1, title: "Free Consultation", desc: "Confidential assessment of your goals, anatomy, and the best approach for your needs." },
      { step: 2, title: "Treatment Planning", desc: "Personalized plan selecting the right package and technique for optimal results." },
      { step: 3, title: "Enhancement Procedure", desc: "Quick 30-45 minute procedure with local anesthetic for maximum comfort." },
      { step: 4, title: "Enjoy Results", desc: "Immediate visible enhancement with full results in 2-4 weeks. Results last 12-18 months." },
    ],
    testimonials: [
      {
        name: "Michael P.",
        initial: "M",
        treatment: "Girth Enhancement",
        text: "The results are incredible and completely natural-looking. My confidence has skyrocketed. Dr. Laurent's expertise made the whole experience comfortable and professional.",
        rating: 5,
      },
      {
        name: "David R.",
        initial: "D",
        treatment: "Gold Package",
        text: "I was nervous at first, but Dr. Laurent put me at ease immediately. The results exceeded my expectations. Best investment I've ever made in myself.",
        rating: 5,
      },
      {
        name: "Andrew S.",
        initial: "A",
        treatment: "Platinum Package",
        text: "Discreet, professional, and life-changing. The enhancement looks and feels completely natural. Recovery was faster than expected.",
        rating: 5,
      },
    ],
    faqs: [
      {
        q: "What are the main benefits of penis enhancement?",
        a: "The primary benefits include increased girth and improved proportions, enhanced confidence and self-esteem, improved satisfaction in intimate relationships, natural look and feel, and minimal downtime compared to surgical options.",
      },
      {
        q: "Is the enhancement noticeable?",
        a: "Yes, the enhancement provides a noticeable increase in girth while maintaining a completely natural appearance and feel. The degree of enhancement depends on the package chosen.",
      },
      {
        q: "Will sensitivity be affected?",
        a: "No. The hyaluronic acid fillers used are carefully placed to enhance size without affecting nerve function or sensitivity. Most patients report no change in sensation.",
      },
      {
        q: "How long do the results last?",
        a: "Results typically last 12-18 months depending on the amount of filler used. Touch-up sessions can extend and optimize your results over time.",
      },
      {
        q: "What is the recovery like?",
        a: "Most patients return to normal activities within 24-48 hours. Intimate activities should be avoided for approximately 2 weeks. Mild swelling is normal and resolves quickly.",
      },
      {
        q: "Are the fillers safe?",
        a: "Yes. We use only FDA-approved hyaluronic acid fillers, the same type used in millions of cosmetic procedures worldwide. The procedure is performed in a sterile medical environment by a board-certified physician.",
      },
    ],
    formTitle: "Book Your Consultation",
    formOptions: ["Girth Enhancement", "Touchup Package", "Silver Package", "Gold Package", "Platinum Package", "General Information"],
  },
  fr: {
    heroTitle: "Augmentation pénienne",
    heroHighlight: "Avantages",
    heroDescription:
      "L'augmentation pénienne non chirurgicale offre une voie sûre et efficace vers une confiance accrue, une esthétique améliorée et une satisfaction renforcée avec un temps d'arrêt minimal.",
    heroBadges: ["Agents de comblement approuvés FDA", "Résultats naturels", "Temps d'arrêt minimal"],
    whyTitle: "Avantages clés",
    whySubtitle: "Découvrez comment l'augmentation pénienne non chirurgicale peut transformer votre confiance et votre satisfaction",
    features: [
      {
        icon: TrendingUp,
        title: "Confiance accrue",
        desc: "Une taille améliorée se traduit par une meilleure estime de soi et une plus grande confiance dans les situations intimes.",
      },
      {
        icon: Sparkles,
        title: "Apparence et sensation naturelles",
        desc: "Les agents de comblement de qualité supérieure offrent une apparence et une sensation naturelles tout en préservant la sensibilité.",
      },
      {
        icon: Shield,
        title: "Sécuritaire et éprouvé",
        desc: "Agents de comblement à base d'acide hyaluronique approuvés par la FDA, réalisés dans un environnement médical stérile.",
      },
      {
        icon: Heart,
        title: "Satisfaction améliorée",
        desc: "Les patients rapportent une satisfaction significativement améliorée et une meilleure qualité de vie intime.",
      },
    ],
    proceduresTitle: "Options d'augmentation",
    proceduresSubtitle: "Options de traitement complètes conçues pour vos objectifs uniques",
    procedures: [
      {
        title: "Augmentation de la circonférence",
        desc: "Augmentation de la circonférence pénienne à l'aide d'agents de comblement à base d'acide hyaluronique de qualité supérieure pour des résultats naturels et uniformes.",
      },
      {
        title: "Augmentation du gland",
        desc: "Augmentation ciblée du gland pour des proportions et une esthétique améliorées.",
      },
      {
        title: "Forfaits retouche",
        desc: "Séances d'entretien à partir de 6 ml (3 000 $) pour préserver et optimiser vos résultats au fil du temps.",
      },
      {
        title: "Forfait Argent - 12 ml",
        desc: "Augmentation modérée pour une amélioration d'apparence naturelle à 6 000 $.",
      },
      {
        title: "Forfait Or - 18 ml",
        desc: "Augmentation significative pour des résultats visibles à 9 000 $.",
      },
      {
        title: "Forfait Platine - 24 ml",
        desc: "Augmentation maximale pour une transformation spectaculaire à 12 000 $.",
      },
    ],
    steps: [
      { step: 1, title: "Consultation gratuite", desc: "Évaluation confidentielle de vos objectifs, de votre anatomie et de la meilleure approche pour vos besoins." },
      { step: 2, title: "Planification du traitement", desc: "Plan personnalisé avec le bon forfait et la bonne technique pour des résultats optimaux." },
      { step: 3, title: "Procédure d'augmentation", desc: "Procédure rapide de 30 à 45 minutes avec anesthésie locale pour un confort maximal." },
      { step: 4, title: "Profitez des résultats", desc: "Augmentation visible immédiate avec résultats complets en 2 à 4 semaines. Les résultats durent 12 à 18 mois." },
    ],
    testimonials: [
      {
        name: "Michael P.",
        initial: "M",
        treatment: "Augmentation de la circonférence",
        text: "Les résultats sont incroyables et complètement naturels. Ma confiance a monté en flèche. L'expertise de Dr Laurent a rendu toute l'expérience confortable et professionnelle.",
        rating: 5,
      },
      {
        name: "David R.",
        initial: "D",
        treatment: "Forfait Or",
        text: "J'étais nerveux au début, mais Dr Laurent m'a immédiatement mis à l'aise. Les résultats ont dépassé mes attentes. Le meilleur investissement que j'ai fait pour moi-même.",
        rating: 5,
      },
      {
        name: "Andrew S.",
        initial: "A",
        treatment: "Forfait Platine",
        text: "Discret, professionnel et transformateur. L'augmentation a une apparence et une sensation complètement naturelles. La récupération a été plus rapide que prévu.",
        rating: 5,
      },
    ],
    faqs: [
      {
        q: "Quels sont les principaux avantages de l'augmentation pénienne ?",
        a: "Les principaux avantages incluent une circonférence accrue et des proportions améliorées, une confiance et une estime de soi renforcées, une satisfaction améliorée dans les relations intimes, une apparence et une sensation naturelles, et un temps d'arrêt minimal par rapport aux options chirurgicales.",
      },
      {
        q: "L'augmentation est-elle visible ?",
        a: "Oui, l'augmentation procure une augmentation visible de la circonférence tout en maintenant une apparence et une sensation complètement naturelles. Le degré d'augmentation dépend du forfait choisi.",
      },
      {
        q: "La sensibilité sera-t-elle affectée ?",
        a: "Non. Les agents de comblement à base d'acide hyaluronique utilisés sont soigneusement placés pour augmenter la taille sans affecter la fonction nerveuse ni la sensibilité. La plupart des patients ne rapportent aucun changement de sensation.",
      },
      {
        q: "Combien de temps durent les résultats ?",
        a: "Les résultats durent généralement de 12 à 18 mois selon la quantité d'agent de comblement utilisé. Les séances de retouche peuvent prolonger et optimiser vos résultats au fil du temps.",
      },
      {
        q: "Comment se passe la récupération ?",
        a: "La plupart des patients reprennent leurs activités normales dans les 24 à 48 heures. Les activités intimes doivent être évitées pendant environ 2 semaines. Un léger gonflement est normal et se résorbe rapidement.",
      },
      {
        q: "Les agents de comblement sont-ils sécuritaires ?",
        a: "Oui. Nous utilisons uniquement des agents de comblement à base d'acide hyaluronique approuvés par la FDA, le même type utilisé dans des millions de procédures esthétiques à travers le monde. La procédure est réalisée dans un environnement médical stérile par un médecin certifié.",
      },
    ],
    formTitle: "Réservez votre consultation",
    formOptions: ["Augmentation de la circonférence", "Forfait retouche", "Forfait Argent", "Forfait Or", "Forfait Platine", "Informations générales"],
  },
};

export function PenisEnhancementBenefitsContent() {
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
