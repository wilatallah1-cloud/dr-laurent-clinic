"use client";

import { ServicePageLayout } from "@/components/service-page-layout";
import { useLocale } from "@/lib/locale";
import { Award, Shield, Sparkles, Zap } from "lucide-react";

const content = {
  en: {
    heroTitle: "Advanced Laser",
    heroHighlight: "Treatments",
    heroDescription:
      "State-of-the-art laser technology for skin rejuvenation, hair removal, tattoo removal, and pigmentation correction. Precision treatments for transformative results.",
    heroBadges: ["Multiple laser platforms", "All skin types", "Proven results"],
    whyTitle: "Why Choose Dr. Laurent",
    whySubtitle:
      "A comprehensive suite of medical-grade lasers operated by experienced professionals.",
    featurePlatforms: "Multiple Platforms",
    featurePlatformsDesc:
      "Clarity, Potenza, PicoSure Pro, CO2 Tetra, Ultra, and Cynoglow — the right laser for every concern.",
    featureSafety: "Medical-Grade Safety",
    featureSafetyDesc:
      "All treatments performed under physician supervision with FDA-cleared devices and strict safety protocols.",
    featureResults: "Transformative Results",
    featureResultsDesc:
      "Treat pigmentation, scars, wrinkles, unwanted hair, tattoos, and more with precision laser energy.",
    featureTech: "Advanced Technology",
    featureTechDesc:
      "Latest-generation laser systems for faster treatments, greater comfort, and superior outcomes.",
    proceduresTitle: "Our Laser Treatments",
    proceduresSubtitle:
      "Comprehensive laser solutions for skin rejuvenation, hair removal, and more.",
    proc1Title: "Laser Hair Removal (Clarity)",
    proc1Desc:
      "Permanent hair reduction for all skin types. Treat face, body, and intimate areas. Starting at $60 per zone.",
    proc2Title: "Potenza RF Microneedling",
    proc2Desc:
      "Radiofrequency microneedling for acne scars, fine lines, and skin texture. Full face from $750.",
    proc3Title: "PicoSure Pro",
    proc3Desc:
      "Ultra-fast picosecond laser for pigmentation, melasma, acne scars, and skin revitalization. Full face from $800.",
    proc4Title: "CO2 Ablative Resurfacing",
    proc4Desc:
      "Fractional CO2 laser for deep wrinkles, scars, and comprehensive skin renewal. Full face from $1,800.",
    proc5Title: "Cool Peel (CO2 Tetra Pro)",
    proc5Desc:
      "Gentle fractional CO2 treatment with minimal downtime for skin texture and tone improvement. Full face from $800.",
    proc6Title: "Tattoo Removal (PicoSure Pro)",
    proc6Desc:
      "Advanced picosecond technology for effective removal of all ink colors. Starting at $99 per session.",
    step1: "Skin Consultation",
    step1Desc:
      "Assessment of your skin type, concerns, and goals to select the optimal laser platform.",
    step2: "Treatment Planning",
    step2Desc:
      "Customized protocol with appropriate settings, number of sessions, and expected outcomes.",
    step3: "Laser Treatment",
    step3Desc:
      "Precise laser application with cooling and comfort measures for an optimal experience.",
    step4: "Post-Care & Follow-Up",
    step4Desc:
      "Detailed aftercare instructions and follow-up appointments to monitor your results.",
    testimonial1Treatment: "PicoSure Pro",
    testimonial1Text:
      "My sun spots and melasma have dramatically improved after just two PicoSure sessions. My skin looks so much more even and radiant. Incredible technology!",
    testimonial2Treatment: "Laser Hair Removal",
    testimonial2Text:
      "After years of waxing, laser hair removal was a game-changer. The Clarity laser worked perfectly on my skin tone. Smooth skin with lasting results!",
    testimonial3Treatment: "CO2 Resurfacing",
    testimonial3Text:
      "The CO2 treatment took years off my face. Yes, there's some downtime, but the results are absolutely worth it. My skin texture is completely transformed.",
    faq1Q: "Which laser treatment is right for me?",
    faq1A:
      "The best laser depends on your specific concern, skin type, and goals. During your consultation, Dr. Laurent will assess your skin and recommend the most appropriate laser platform and treatment plan.",
    faq2Q: "How many laser sessions are needed?",
    faq2A:
      "It varies by treatment. Laser hair removal typically requires 6-8 sessions. PicoSure for pigmentation may need 2-4 sessions. CO2 resurfacing often delivers dramatic results in a single session. A personalized plan is created during your consultation.",
    faq3Q: "Is laser treatment painful?",
    faq3A:
      "Comfort levels vary by treatment type. Hair removal feels like a light snap. RF microneedling uses topical numbing for comfort. CO2 treatments involve numbing cream and post-treatment care. We prioritize your comfort throughout every procedure.",
    faq4Q: "What is the downtime for laser treatments?",
    faq4A:
      "It depends on the treatment intensity. Hair removal has no downtime. PicoSure may cause mild redness for 24 hours. CO2 ablative treatments require 5-10 days of healing. Dr. Laurent will explain the recovery for your specific treatment.",
    faq5Q: "Are laser treatments safe for darker skin tones?",
    faq5A:
      "Yes. Our Clarity laser is specifically designed to safely treat all skin types, including darker skin tones. During your consultation, we select the appropriate laser and settings for your skin type to ensure safe, effective treatment.",
    faq6Q: "How much do laser treatments cost?",
    faq6A:
      "Prices vary by treatment and area. Laser hair removal starts at $60 per zone. PicoSure starts at $800 for full face. CO2 resurfacing starts at $800 for Cool Peel. Contact us for a personalized quote based on your treatment plan.",
    formTitle: "Book Your Consultation",
    formOptions: [
      "Laser Hair Removal",
      "PicoSure Pro (Pigmentation / Scars)",
      "Potenza RF Microneedling",
      "CO2 Resurfacing",
      "Tattoo Removal",
      "Other / Not Sure",
    ],
  },
  fr: {
    heroTitle: "Traitements",
    heroHighlight: "Laser",
    heroDescription:
      "Technologie laser à la fine pointe pour le rajeunissement cutané, l'épilation, le retrait de tatouage et la correction de la pigmentation. Des traitements de précision pour des résultats transformateurs.",
    heroBadges: ["Plusieurs plateformes laser", "Tous types de peau", "Résultats prouvés"],
    whyTitle: "Pourquoi choisir Dr Laurent",
    whySubtitle:
      "Une gamme complète de lasers de grade médical opérés par des professionnels expérimentés.",
    featurePlatforms: "Plateformes multiples",
    featurePlatformsDesc:
      "Clarity, Potenza, PicoSure Pro, CO2 Tetra, Ultra et Cynoglow — le bon laser pour chaque préoccupation.",
    featureSafety: "Sécurité de grade médical",
    featureSafetyDesc:
      "Tous les traitements effectués sous supervision médicale avec des appareils approuvés et des protocoles de sécurité stricts.",
    featureResults: "Résultats transformateurs",
    featureResultsDesc:
      "Traitez la pigmentation, les cicatrices, les rides, les poils indésirables, les tatouages et plus encore avec l'énergie laser de précision.",
    featureTech: "Technologie avancée",
    featureTechDesc:
      "Systèmes laser de dernière génération pour des traitements plus rapides, un plus grand confort et des résultats supérieurs.",
    proceduresTitle: "Nos traitements laser",
    proceduresSubtitle:
      "Solutions laser complètes pour le rajeunissement cutané, l'épilation et plus encore.",
    proc1Title: "Épilation laser (Clarity)",
    proc1Desc:
      "Réduction permanente des poils pour tous les types de peau. Traitez le visage, le corps et les zones intimes. À partir de 60 $ par zone.",
    proc2Title: "Potenza RF Microneedling",
    proc2Desc:
      "Micro-aiguilles à radiofréquence pour les cicatrices d'acné, les rides fines et la texture de la peau. Visage complet à partir de 750 $.",
    proc3Title: "PicoSure Pro",
    proc3Desc:
      "Laser picoseconde ultra-rapide pour la pigmentation, le mélasma, les cicatrices d'acné et la revitalisation cutanée. Visage complet à partir de 800 $.",
    proc4Title: "Resurfaçage ablatif CO2",
    proc4Desc:
      "Laser CO2 fractionné pour les rides profondes, les cicatrices et le renouvellement cutané complet. Visage complet à partir de 1 800 $.",
    proc5Title: "Cool Peel (CO2 Tetra Pro)",
    proc5Desc:
      "Traitement CO2 fractionné doux avec un temps d'arrêt minimal pour l'amélioration de la texture et du teint. Visage complet à partir de 800 $.",
    proc6Title: "Retrait de tatouage (PicoSure Pro)",
    proc6Desc:
      "Technologie picoseconde avancée pour le retrait efficace de toutes les couleurs d'encre. À partir de 99 $ par séance.",
    step1: "Consultation cutanée",
    step1Desc:
      "Évaluation de votre type de peau, de vos préoccupations et de vos objectifs pour sélectionner la plateforme laser optimale.",
    step2: "Planification du traitement",
    step2Desc:
      "Protocole personnalisé avec les paramètres appropriés, le nombre de séances et les résultats attendus.",
    step3: "Traitement laser",
    step3Desc:
      "Application laser précise avec refroidissement et mesures de confort pour une expérience optimale.",
    step4: "Soins post-traitement et suivi",
    step4Desc:
      "Instructions détaillées de soins post-traitement et rendez-vous de suivi pour surveiller vos résultats.",
    testimonial1Treatment: "PicoSure Pro",
    testimonial1Text:
      "Mes taches solaires et mon mélasma se sont considérablement améliorés après seulement deux séances de PicoSure. Ma peau a l'air tellement plus uniforme et lumineuse. Technologie incroyable!",
    testimonial2Treatment: "Épilation laser",
    testimonial2Text:
      "Après des années d'épilation à la cire, l'épilation laser a tout changé. Le laser Clarity a parfaitement fonctionné sur mon teint. Une peau lisse avec des résultats durables!",
    testimonial3Treatment: "Resurfaçage CO2",
    testimonial3Text:
      "Le traitement CO2 a enlevé des années à mon visage. Oui, il y a un temps de récupération, mais les résultats en valent absolument la peine. La texture de ma peau est complètement transformée.",
    faq1Q: "Quel traitement laser me convient?",
    faq1A:
      "Le meilleur laser dépend de votre préoccupation spécifique, de votre type de peau et de vos objectifs. Lors de votre consultation, Dr Laurent évaluera votre peau et recommandera la plateforme laser et le plan de traitement les plus appropriés.",
    faq2Q: "Combien de séances laser sont nécessaires?",
    faq2A:
      "Cela varie selon le traitement. L'épilation laser nécessite généralement 6 à 8 séances. Le PicoSure pour la pigmentation peut nécessiter 2 à 4 séances. Le resurfaçage CO2 offre souvent des résultats spectaculaires en une seule séance. Un plan personnalisé est créé lors de votre consultation.",
    faq3Q: "Le traitement laser est-il douloureux?",
    faq3A:
      "Le niveau de confort varie selon le type de traitement. L'épilation ressemble à un léger claquement. Le microneedling RF utilise un anesthésiant topique pour le confort. Les traitements CO2 impliquent une crème anesthésiante et des soins post-traitement. Nous priorisons votre confort tout au long de chaque procédure.",
    faq4Q: "Quel est le temps d'arrêt pour les traitements laser?",
    faq4A:
      "Cela dépend de l'intensité du traitement. L'épilation n'a aucun temps d'arrêt. Le PicoSure peut causer une légère rougeur pendant 24 heures. Les traitements CO2 ablatifs nécessitent 5 à 10 jours de guérison. Dr Laurent vous expliquera la récupération pour votre traitement spécifique.",
    faq5Q: "Les traitements laser sont-ils sécuritaires pour les peaux foncées?",
    faq5A:
      "Oui. Notre laser Clarity est spécifiquement conçu pour traiter en toute sécurité tous les types de peau, y compris les peaux foncées. Lors de votre consultation, nous sélectionnons le laser et les paramètres appropriés pour votre type de peau afin d'assurer un traitement sûr et efficace.",
    faq6Q: "Combien coûtent les traitements laser?",
    faq6A:
      "Les prix varient selon le traitement et la zone. L'épilation laser commence à 60 $ par zone. Le PicoSure commence à 800 $ pour le visage complet. Le resurfaçage CO2 commence à 800 $ pour le Cool Peel. Contactez-nous pour un devis personnalisé basé sur votre plan de traitement.",
    formTitle: "Réservez votre consultation",
    formOptions: [
      "Épilation laser",
      "PicoSure Pro (Pigmentation / Cicatrices)",
      "Potenza RF Microneedling",
      "Resurfaçage CO2",
      "Retrait de tatouage",
      "Autre / Pas certain(e)",
    ],
  },
};

export function LasersContent() {
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
        { icon: Award, title: c.featurePlatforms, desc: c.featurePlatformsDesc },
        { icon: Shield, title: c.featureSafety, desc: c.featureSafetyDesc },
        { icon: Sparkles, title: c.featureResults, desc: c.featureResultsDesc },
        { icon: Zap, title: c.featureTech, desc: c.featureTechDesc },
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
          name: "Amelie B.",
          initial: "A",
          treatment: c.testimonial1Treatment,
          text: c.testimonial1Text,
          rating: 5,
        },
        {
          name: "Laurent G.",
          initial: "L",
          treatment: c.testimonial2Treatment,
          text: c.testimonial2Text,
          rating: 5,
        },
        {
          name: "Stephanie K.",
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
