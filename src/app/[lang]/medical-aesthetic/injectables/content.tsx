"use client";

import { ServicePageLayout } from "@/components/service-page-layout";
import { useLocale } from "@/lib/locale";
import { Award, Shield, Sparkles, Syringe } from "lucide-react";

const content = {
  en: {
    heroTitle: "Injectables &",
    heroHighlight: "Fillers",
    heroDescription:
      "Botox, dermal fillers, and advanced injectable treatments designed to enhance your natural beauty with subtle, elegant results.",
    heroBadges: ["FDA-approved products", "Precision techniques", "Natural results"],
    whyTitle: "Why Choose Dr. Laurent",
    whySubtitle:
      "Medical expertise combined with an artistic eye for naturally beautiful results.",
    featureExpertise: "Medical Expertise",
    featureExpertiseDesc:
      "Board-certified physician with advanced training in injectable techniques and facial anatomy.",
    featureProducts: "Premium Products",
    featureProductsDesc:
      "Only FDA-approved neuromodulators (Dysport, Xeomin, Letybo) and premium hyaluronic acid fillers.",
    featureNatural: "Natural Results",
    featureNaturalDesc:
      "Subtle, refined enhancements that preserve your natural expressions and facial harmony.",
    featurePrecision: "Precision Techniques",
    featurePrecisionDesc:
      "Advanced injection methods for optimal comfort, minimal bruising, and beautiful outcomes.",
    proceduresTitle: "Our Injectable Treatments",
    proceduresSubtitle:
      "Comprehensive solutions for facial rejuvenation and enhancement.",
    proc1Title: "Neuromodulators (Botox)",
    proc1Desc:
      "Dysport, Xeomin, and Letybo to smooth dynamic wrinkles on the forehead, crow's feet, and frown lines. Starting at $10/unit.",
    proc2Title: "Hyaluronic Acid Fillers",
    proc2Desc:
      "Restore volume, define contours, and smooth lines in the lips, cheeks, jawline, and under-eyes. From $525 per half syringe.",
    proc3Title: "Sculptra",
    proc3Desc:
      "Biostimulatory collagen-boosting injections for gradual, long-lasting facial volume restoration. $800 per session.",
    proc4Title: "Radiesse",
    proc4Desc:
      "Calcium-based filler for deep volume restoration and collagen stimulation in cheeks and hands. $850 per session.",
    proc5Title: "VAMP Treatment",
    proc5Desc:
      "Innovative micro-injection technique to improve skin quality, hydration, and radiance. $350 per syringe.",
    proc6Title: "Facial Transformation",
    proc6Desc:
      "Comprehensive multi-syringe treatment plans to reshape and rejuvenate the entire face. Starting from $2,000.",
    step1: "Consultation & Assessment",
    step1Desc:
      "Detailed facial analysis and personalized treatment plan based on your goals and anatomy.",
    step2: "Treatment Preparation",
    step2Desc:
      "Topical numbing is applied for comfort. Treatment areas are mapped with precision.",
    step3: "Expert Injection",
    step3Desc:
      "Products are carefully administered using advanced techniques for natural, balanced results.",
    step4: "Follow-Up & Maintenance",
    step4Desc:
      "Review appointment to assess results and plan future maintenance treatments.",
    testimonial1Treatment: "Dermal Fillers",
    testimonial1Text:
      "Dr. Laurent has an incredible eye for detail. My fillers look so natural that friends just say I look 'refreshed.' Exactly what I wanted!",
    testimonial2Treatment: "Botox",
    testimonial2Text:
      "I was afraid of looking frozen, but Dr. Laurent's technique is so precise. I can still express myself fully while looking years younger.",
    testimonial3Treatment: "Full Face Rejuvenation",
    testimonial3Text:
      "The facial transformation package was worth every penny. Dr. Laurent created a comprehensive plan that addressed all my concerns. I feel like myself again!",
    faq1Q: "What is the difference between Botox and fillers?",
    faq1A:
      "Neuromodulators (Botox/Dysport/Xeomin) relax muscles to smooth dynamic wrinkles like forehead lines and crow's feet. Dermal fillers add volume to areas like cheeks, lips, and nasolabial folds. Many patients benefit from a combination of both for comprehensive rejuvenation.",
    faq2Q: "How long do injectable results last?",
    faq2A:
      "Neuromodulators typically last 3-4 months. Hyaluronic acid fillers last 6-18 months depending on the product and treatment area. Sculptra results can last up to 2 years as it stimulates your own collagen production.",
    faq3Q: "Is the treatment painful?",
    faq3A:
      "Most patients report only mild discomfort. We apply topical numbing cream before treatment, and many fillers contain lidocaine for added comfort. The procedure is very well tolerated.",
    faq4Q: "What is the recovery time?",
    faq4A:
      "Most patients return to normal activities immediately. Minor swelling or bruising may occur and typically resolves within a few days. We recommend avoiding strenuous exercise for 24 hours.",
    faq5Q: "How much do injectables cost?",
    faq5A:
      "Neuromodulators start at $10-12 per unit. Hyaluronic acid fillers start at $525 for a half syringe and $750 for a full syringe. A personalized quote is provided during your consultation based on your treatment plan.",
    faq6Q: "Can injectables be reversed?",
    faq6A:
      "Hyaluronic acid fillers can be dissolved with hyaluronidase if needed. Neuromodulators naturally wear off over 3-4 months. Dr. Laurent always takes a conservative approach to ensure you're happy with your results.",
    formTitle: "Book Your Consultation",
    formOptions: [
      "Botox / Neuromodulators",
      "Dermal Fillers",
      "Sculptra",
      "Radiesse",
      "Full Face Rejuvenation",
      "Other / Not Sure",
    ],
  },
  fr: {
    heroTitle: "Injectables et",
    heroHighlight: "Comblement",
    heroDescription:
      "Botox, comblement dermique et traitements injectables avancés conçus pour rehausser votre beauté naturelle avec des résultats subtils et élégants.",
    heroBadges: ["Produits approuvés", "Techniques de précision", "Résultats naturels"],
    whyTitle: "Pourquoi choisir Dr Laurent",
    whySubtitle:
      "Expertise médicale combinée à un oeil artistique pour des résultats naturellement beaux.",
    featureExpertise: "Expertise médicale",
    featureExpertiseDesc:
      "Médecin certifié avec formation avancée en techniques d'injection et anatomie faciale.",
    featureProducts: "Produits haut de gamme",
    featureProductsDesc:
      "Uniquement des neuromodulateurs approuvés (Dysport, Xeomin, Letybo) et des agents de comblement à base d'acide hyaluronique de qualité supérieure.",
    featureNatural: "Résultats naturels",
    featureNaturalDesc:
      "Des améliorations subtiles et raffinées qui préservent vos expressions naturelles et l'harmonie de votre visage.",
    featurePrecision: "Techniques de précision",
    featurePrecisionDesc:
      "Méthodes d'injection avancées pour un confort optimal, un minimum d'ecchymoses et de beaux résultats.",
    proceduresTitle: "Nos traitements injectables",
    proceduresSubtitle:
      "Solutions complètes pour le rajeunissement et l'amélioration du visage.",
    proc1Title: "Neuromodulateurs (Botox)",
    proc1Desc:
      "Dysport, Xeomin et Letybo pour lisser les rides dynamiques du front, les pattes d'oie et les rides du lion. À partir de 10 $/unité.",
    proc2Title: "Comblement à l'acide hyaluronique",
    proc2Desc:
      "Restaurer le volume, définir les contours et lisser les lignes des lèvres, joues, mâchoire et cernes. À partir de 525 $ par demi-seringue.",
    proc3Title: "Sculptra",
    proc3Desc:
      "Injections biostimulantes pour une restauration graduelle et durable du volume facial. 800 $ par séance.",
    proc4Title: "Radiesse",
    proc4Desc:
      "Agent de comblement à base de calcium pour la restauration de volume profond et la stimulation du collagène dans les joues et les mains. 850 $ par séance.",
    proc5Title: "Traitement VAMP",
    proc5Desc:
      "Technique innovante de micro-injections pour améliorer la qualité, l'hydratation et l'éclat de la peau. 350 $ par seringue.",
    proc6Title: "Transformation faciale",
    proc6Desc:
      "Plans de traitement complets multi-seringues pour remodeler et rajeunir l'ensemble du visage. À partir de 2 000 $.",
    step1: "Consultation et évaluation",
    step1Desc:
      "Analyse faciale détaillée et plan de traitement personnalisé basé sur vos objectifs et votre anatomie.",
    step2: "Préparation du traitement",
    step2Desc:
      "Un anesthésiant topique est appliqué pour le confort. Les zones de traitement sont cartographiées avec précision.",
    step3: "Injection experte",
    step3Desc:
      "Les produits sont administrés avec soin en utilisant des techniques avancées pour des résultats naturels et équilibrés.",
    step4: "Suivi et entretien",
    step4Desc:
      "Rendez-vous de suivi pour évaluer les résultats et planifier les traitements d'entretien futurs.",
    testimonial1Treatment: "Comblement dermique",
    testimonial1Text:
      "Dr Laurent a un oeil incroyable pour le détail. Mon comblement a l'air tellement naturel que mes amies disent simplement que j'ai l'air « reposée ». Exactement ce que je voulais!",
    testimonial2Treatment: "Botox",
    testimonial2Text:
      "J'avais peur d'avoir l'air figée, mais la technique de Dr Laurent est tellement précise. Je peux encore m'exprimer pleinement tout en paraissant des années plus jeune.",
    testimonial3Treatment: "Rajeunissement complet du visage",
    testimonial3Text:
      "Le forfait de transformation faciale valait chaque dollar. Dr Laurent a créé un plan complet qui répondait à toutes mes préoccupations. Je me sens redevenue moi-même!",
    faq1Q: "Quelle est la différence entre le Botox et le comblement?",
    faq1A:
      "Les neuromodulateurs (Botox/Dysport/Xeomin) détendent les muscles pour lisser les rides dynamiques comme les lignes du front et les pattes d'oie. Les agents de comblement ajoutent du volume aux zones comme les joues, les lèvres et les sillons nasogéniens. De nombreux patients bénéficient d'une combinaison des deux pour un rajeunissement complet.",
    faq2Q: "Combien de temps durent les résultats des injectables?",
    faq2A:
      "Les neuromodulateurs durent généralement 3 à 4 mois. Les agents de comblement à l'acide hyaluronique durent de 6 à 18 mois selon le produit et la zone traitée. Les résultats du Sculptra peuvent durer jusqu'à 2 ans car il stimule votre propre production de collagène.",
    faq3Q: "Le traitement est-il douloureux?",
    faq3A:
      "La plupart des patients ne ressentent qu'un léger inconfort. Nous appliquons une crème anesthésiante topique avant le traitement, et plusieurs agents de comblement contiennent de la lidocaïne pour un confort accru. La procédure est très bien tolérée.",
    faq4Q: "Quel est le temps de récupération?",
    faq4A:
      "La plupart des patients reprennent leurs activités normales immédiatement. Un léger gonflement ou des ecchymoses peuvent survenir et se résorbent généralement en quelques jours. Nous recommandons d'éviter l'exercice intense pendant 24 heures.",
    faq5Q: "Combien coûtent les injectables?",
    faq5A:
      "Les neuromodulateurs commencent à 10-12 $ par unité. Les agents de comblement à l'acide hyaluronique commencent à 525 $ pour une demi-seringue et 750 $ pour une seringue complète. Un devis personnalisé est fourni lors de votre consultation selon votre plan de traitement.",
    faq6Q: "Les injectables peuvent-ils être inversés?",
    faq6A:
      "Les agents de comblement à l'acide hyaluronique peuvent être dissous avec de la hyaluronidase au besoin. Les neuromodulateurs s'estompent naturellement en 3 à 4 mois. Dr Laurent adopte toujours une approche conservatrice pour s'assurer que vous êtes satisfait(e) de vos résultats.",
    formTitle: "Réservez votre consultation",
    formOptions: [
      "Botox / Neuromodulateurs",
      "Comblement dermique",
      "Sculptra",
      "Radiesse",
      "Rajeunissement complet du visage",
      "Autre / Pas certain(e)",
    ],
  },
};

export function InjectablesContent() {
  const locale = useLocale();
  const c = content[locale];

  return (
    <ServicePageLayout
      heroTitle={c.heroTitle}
      heroHighlight={c.heroHighlight}
      heroDescription={c.heroDescription}
      heroBadges={c.heroBadges}
      heroImage="https://drlaurentmedecineprivee.ca/assets/hero-background-injectables-sHrFXrk2.jpg"
      whyTitle={c.whyTitle}
      whySubtitle={c.whySubtitle}
      features={[
        { icon: Award, title: c.featureExpertise, desc: c.featureExpertiseDesc },
        { icon: Shield, title: c.featureProducts, desc: c.featureProductsDesc },
        { icon: Sparkles, title: c.featureNatural, desc: c.featureNaturalDesc },
        { icon: Syringe, title: c.featurePrecision, desc: c.featurePrecisionDesc },
      ]}
      proceduresTitle={c.proceduresTitle}
      proceduresSubtitle={c.proceduresSubtitle}
      procedures={[
        { title: c.proc1Title, desc: c.proc1Desc },
        { title: c.proc2Title, desc: c.proc2Desc },
        { title: c.proc3Title, desc: c.proc3Desc },
        { title: c.proc4Title, desc: c.proc4Desc },
        { title: c.proc5Title, desc: c.proc5Desc },
        { title: c.proc6Title, desc: c.proc6Desc },
      ]}
      steps={[
        { step: 1, title: c.step1, desc: c.step1Desc },
        { step: 2, title: c.step2, desc: c.step2Desc },
        { step: 3, title: c.step3, desc: c.step3Desc },
        { step: 4, title: c.step4, desc: c.step4Desc },
      ]}
      testimonials={[
        {
          name: "Sophie L.",
          initial: "S",
          treatment: c.testimonial1Treatment,
          text: c.testimonial1Text,
          rating: 5,
        },
        {
          name: "Nathalie R.",
          initial: "N",
          treatment: c.testimonial2Treatment,
          text: c.testimonial2Text,
          rating: 5,
        },
        {
          name: "Caroline M.",
          initial: "C",
          treatment: c.testimonial3Treatment,
          text: c.testimonial3Text,
          rating: 5,
        },
      ]}
      faqs={[
        { q: c.faq1Q, a: c.faq1A },
        { q: c.faq2Q, a: c.faq2A },
        { q: c.faq3Q, a: c.faq3A },
        { q: c.faq4Q, a: c.faq4A },
        { q: c.faq5Q, a: c.faq5A },
        { q: c.faq6Q, a: c.faq6A },
      ]}
      formTitle={c.formTitle}
      formOptions={c.formOptions}
    />
  );
}
