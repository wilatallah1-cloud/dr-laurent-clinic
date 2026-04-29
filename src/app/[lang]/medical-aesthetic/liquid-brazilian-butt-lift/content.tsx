"use client";

import { ServicePageLayout } from "@/components/service-page-layout";
import { useLocale } from "@/lib/locale";
import { Award, Shield, Sparkles, Heart } from "lucide-react";

const content = {
  en: {
    heroTitle: "Liquid Brazilian",
    heroHighlight: "Butt Lift",
    heroDescription:
      "Non-surgical buttock enhancement using premium dermal fillers and Radiesse for natural volume, lift, and contouring. Without surgery, general anesthesia, or extended downtime.",
    heroBadges: ["Non-surgical", "Natural-looking results", "Minimal downtime"],
    whyTitle: "Why Choose Dr. Laurent",
    whySubtitle:
      "Expert non-surgical body contouring for natural, beautiful results.",
    featureExpertise: "Specialized Expertise",
    featureExpertiseDesc:
      "Extensive experience in non-surgical buttock augmentation with advanced injection techniques.",
    featureProducts: "Premium Products",
    featureProductsDesc:
      "Using high-quality hyaluronic acid fillers and Radiesse for safe, predictable results.",
    featureContour: "Natural Contour",
    featureContourDesc:
      "Sculpted, proportional enhancement that complements your natural body shape and curves.",
    featureComfort: "Patient Comfort",
    featureComfortDesc:
      "Gentle approach with local anesthesia for a comfortable experience and quick recovery.",
    proceduresTitle: "Our Liquid BBL Options",
    proceduresSubtitle:
      "Customized treatment plans to achieve your ideal shape and volume.",
    proc1Title: "Liquid BBL with Filler",
    proc1Desc:
      "Hyaluronic acid-based augmentation for volume and lift. Natural feel with immediate results. From $4,500.",
    proc2Title: "Liquid BBL with Radiesse",
    proc2Desc:
      "Calcium hydroxylapatite filler for volume plus collagen stimulation. Longer-lasting structural support. From $3,200.",
    proc3Title: "Additional Targeted Zone",
    proc3Desc:
      "Extra volume for specific areas like hip dips or lateral projection. $700 per 10cc of additional product.",
    proc4Title: "Touch-Up Treatment",
    proc4Desc:
      "Minor refinement session within 6 weeks of initial treatment for optimal contour. $800.",
    proc5Title: "Volume Enhancement",
    proc5Desc:
      "Larger volume treatment for more significant augmentation and projection, customized to your goals.",
    proc6Title: "Combination Approach",
    proc6Desc:
      "Strategic use of both fillers and Radiesse for optimal volume, lift, and longevity of results.",
    step1: "Body Consultation",
    step1Desc:
      "Assessment of your anatomy, proportions, and desired outcome. Discussion of product options.",
    step2: "Treatment Design",
    step2Desc:
      "Mapping of injection sites and volume plan to achieve balanced, proportional enhancement.",
    step3: "Injection Procedure",
    step3Desc:
      "Strategic product placement using advanced techniques for smooth, natural contouring.",
    step4: "Follow-Up & Touch-Up",
    step4Desc:
      "Review appointment to assess results. Optional touch-up available within 6 weeks.",
    testimonial1Treatment: "Liquid BBL",
    testimonial1Text:
      "I wanted more curves but didn't want surgery. The liquid BBL gave me the shape I wanted with zero downtime. Dr. Laurent really understood my goals and delivered beautifully.",
    testimonial2Treatment: "Liquid BBL - Radiesse",
    testimonial2Text:
      "The Radiesse option was perfect for me. More structure and longer-lasting results. My shape looks so natural and proportional. Friends think I've just been working out!",
    testimonial3Treatment: "Liquid BBL + Hip Dips",
    testimonial3Text:
      "Dr. Laurent addressed both my hip dips and overall volume in one session. The results are exactly what I showed him in my reference photos. So happy!",
    faq1Q: "What is a liquid BBL?",
    faq1A:
      "A liquid BBL is a non-surgical buttock enhancement that uses injectable fillers (hyaluronic acid or Radiesse) to add volume, lift, and contour to the buttocks. Unlike a surgical BBL, there is no fat transfer, general anesthesia, or extended recovery.",
    faq2Q: "How long do results last?",
    faq2A:
      "Hyaluronic acid filler results typically last 12-18 months. Radiesse results can last 18-24 months due to its collagen-stimulating properties. Maintenance sessions can extend your results over time.",
    faq3Q: "What is the difference between filler and Radiesse options?",
    faq3A:
      "Hyaluronic acid fillers provide immediate volume and a soft, natural feel. Radiesse is a calcium-based filler that provides structural support and stimulates your body's own collagen production for longer-lasting results. Dr. Laurent will recommend the best option based on your goals.",
    faq4Q: "Is the procedure painful?",
    faq4A:
      "Local anesthesia is used to ensure your comfort throughout the procedure. Most patients report only mild pressure during treatment. Any post-treatment discomfort is minimal and manageable.",
    faq5Q: "What is the recovery time?",
    faq5A:
      "Most patients return to normal activities within 24-48 hours. You should avoid sitting directly on the treated area for a few days and avoid strenuous exercise for about one week.",
    faq6Q: "How much product is typically used?",
    faq6A:
      "The amount varies based on your goals and starting anatomy. A typical session uses 20-60cc of product. Dr. Laurent will provide a personalized estimate during your consultation.",
    formTitle: "Book Your Consultation",
    formOptions: [
      "Liquid BBL - Filler",
      "Liquid BBL - Radiesse",
      "Hip Dip Correction",
      "Touch-Up Treatment",
      "Other / Not Sure",
    ],
  },
  fr: {
    heroTitle: "BBL liquide",
    heroHighlight: "(Brazilian Butt Lift)",
    heroDescription:
      "Augmentation fessière non chirurgicale utilisant des agents de comblement dermique haut de gamme et Radiesse pour un volume, un soulèvement et un remodelage naturels. Sans chirurgie, anesthésie générale ni temps d'arrêt prolongé.",
    heroBadges: ["Non chirurgical", "Résultats d'apparence naturelle", "Temps d'arrêt minimal"],
    whyTitle: "Pourquoi choisir Dr Laurent",
    whySubtitle:
      "Expert en remodelage corporel non chirurgical pour des résultats naturels et magnifiques.",
    featureExpertise: "Expertise spécialisée",
    featureExpertiseDesc:
      "Vaste expérience en augmentation fessière non chirurgicale avec des techniques d'injection avancées.",
    featureProducts: "Produits haut de gamme",
    featureProductsDesc:
      "Utilisation d'agents de comblement à l'acide hyaluronique de haute qualité et de Radiesse pour des résultats sûrs et prévisibles.",
    featureContour: "Contours naturels",
    featureContourDesc:
      "Augmentation sculptée et proportionnelle qui complète votre forme corporelle et vos courbes naturelles.",
    featureComfort: "Confort du patient",
    featureComfortDesc:
      "Approche douce avec anesthésie locale pour une expérience confortable et une récupération rapide.",
    proceduresTitle: "Nos options de BBL liquide",
    proceduresSubtitle:
      "Plans de traitement personnalisés pour atteindre votre forme et votre volume idéals.",
    proc1Title: "BBL liquide avec comblement",
    proc1Desc:
      "Augmentation à base d'acide hyaluronique pour le volume et le soulèvement. Sensation naturelle avec résultats immédiats. À partir de 4 500 $.",
    proc2Title: "BBL liquide avec Radiesse",
    proc2Desc:
      "Agent de comblement à base d'hydroxylapatite de calcium pour le volume et la stimulation du collagène. Soutien structurel plus durable. À partir de 3 200 $.",
    proc3Title: "Zone ciblée additionnelle",
    proc3Desc:
      "Volume supplémentaire pour des zones spécifiques comme les creux des hanches ou la projection latérale. 700 $ par 10 cc de produit additionnel.",
    proc4Title: "Traitement de retouche",
    proc4Desc:
      "Séance de raffinement mineur dans les 6 semaines suivant le traitement initial pour un contour optimal. 800 $.",
    proc5Title: "Augmentation de volume",
    proc5Desc:
      "Traitement de volume plus important pour une augmentation et une projection plus significatives, personnalisé selon vos objectifs.",
    proc6Title: "Approche combinée",
    proc6Desc:
      "Utilisation stratégique de comblement et de Radiesse pour un volume, un soulèvement et une longévité optimaux des résultats.",
    step1: "Consultation corporelle",
    step1Desc:
      "Évaluation de votre anatomie, de vos proportions et du résultat souhaité. Discussion des options de produits.",
    step2: "Conception du traitement",
    step2Desc:
      "Cartographie des sites d'injection et plan de volume pour obtenir une augmentation équilibrée et proportionnelle.",
    step3: "Procédure d'injection",
    step3Desc:
      "Placement stratégique du produit utilisant des techniques avancées pour un remodelage lisse et naturel.",
    step4: "Suivi et retouche",
    step4Desc:
      "Rendez-vous de suivi pour évaluer les résultats. Retouche optionnelle disponible dans les 6 semaines.",
    testimonial1Treatment: "BBL liquide",
    testimonial1Text:
      "Je voulais plus de courbes mais sans chirurgie. Le BBL liquide m'a donné la forme que je voulais sans aucun temps d'arrêt. Dr Laurent a vraiment compris mes objectifs et a livré un résultat magnifique.",
    testimonial2Treatment: "BBL liquide - Radiesse",
    testimonial2Text:
      "L'option Radiesse était parfaite pour moi. Plus de structure et des résultats plus durables. Ma silhouette a l'air tellement naturelle et proportionnée. Mes amies pensent que je me suis juste mise à m'entraîner!",
    testimonial3Treatment: "BBL liquide + Creux des hanches",
    testimonial3Text:
      "Dr Laurent a traité à la fois mes creux des hanches et le volume global en une seule séance. Les résultats sont exactement ce que je lui avais montré dans mes photos de référence. Tellement contente!",
    faq1Q: "Qu'est-ce qu'un BBL liquide?",
    faq1A:
      "Un BBL liquide est une augmentation fessière non chirurgicale qui utilise des agents de comblement injectables (acide hyaluronique ou Radiesse) pour ajouter du volume, du soulèvement et des contours aux fessiers. Contrairement au BBL chirurgical, il n'y a pas de transfert de graisse, d'anesthésie générale ni de récupération prolongée.",
    faq2Q: "Combien de temps durent les résultats?",
    faq2A:
      "Les résultats du comblement à l'acide hyaluronique durent généralement 12 à 18 mois. Les résultats du Radiesse peuvent durer 18 à 24 mois grâce à ses propriétés stimulantes du collagène. Des séances d'entretien peuvent prolonger vos résultats au fil du temps.",
    faq3Q: "Quelle est la différence entre les options comblement et Radiesse?",
    faq3A:
      "Les agents de comblement à l'acide hyaluronique offrent un volume immédiat et une sensation douce et naturelle. Le Radiesse est un agent de comblement à base de calcium qui fournit un soutien structurel et stimule la production de collagène de votre propre corps pour des résultats plus durables. Dr Laurent recommandera la meilleure option selon vos objectifs.",
    faq4Q: "La procédure est-elle douloureuse?",
    faq4A:
      "L'anesthésie locale est utilisée pour assurer votre confort tout au long de la procédure. La plupart des patients ne ressentent qu'une légère pression pendant le traitement. Tout inconfort post-traitement est minimal et gérable.",
    faq5Q: "Quel est le temps de récupération?",
    faq5A:
      "La plupart des patients reprennent leurs activités normales dans les 24 à 48 heures. Vous devriez éviter de vous asseoir directement sur la zone traitée pendant quelques jours et éviter l'exercice intense pendant environ une semaine.",
    faq6Q: "Quelle quantité de produit est généralement utilisée?",
    faq6A:
      "La quantité varie selon vos objectifs et votre anatomie de départ. Une séance typique utilise 20 à 60 cc de produit. Dr Laurent vous fournira une estimation personnalisée lors de votre consultation.",
    formTitle: "Réservez votre consultation",
    formOptions: [
      "BBL liquide - Comblement",
      "BBL liquide - Radiesse",
      "Correction des creux des hanches",
      "Traitement de retouche",
      "Autre / Pas certain(e)",
    ],
  },
};

export function LiquidBBLContent() {
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
        { icon: Sparkles, title: c.featureContour, desc: c.featureContourDesc },
        { icon: Heart, title: c.featureComfort, desc: c.featureComfortDesc },
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
          name: "Jessica M.",
          initial: "J",
          treatment: c.testimonial1Treatment,
          text: c.testimonial1Text,
          rating: 5,
        },
        {
          name: "Daniella R.",
          initial: "D",
          treatment: c.testimonial2Treatment,
          text: c.testimonial2Text,
          rating: 5,
        },
        {
          name: "Samantha T.",
          initial: "S",
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
