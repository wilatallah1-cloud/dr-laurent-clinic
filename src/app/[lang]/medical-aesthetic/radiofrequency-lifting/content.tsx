"use client";

import { ServicePageLayout } from "@/components/service-page-layout";
import { useLocale } from "@/lib/locale";
import { Award, Shield, Zap, Clock } from "lucide-react";

const content = {
  en: {
    heroTitle: "Radiofrequency",
    heroHighlight: "Lifting",
    heroDescription:
      "Non-surgical skin tightening and lifting using advanced radiofrequency and HIFU technology. Achieve firmer, more youthful skin without surgery or downtime.",
    heroBadges: ["Non-surgical lifting", "Collagen stimulation", "No downtime"],
    whyTitle: "Why Choose Dr. Laurent",
    whySubtitle:
      "State-of-the-art radiofrequency and ultrasound technology for visible, lasting results.",
    featureTech: "Advanced Technology",
    featureTechDesc:
      "TempSure radiofrequency and Ultraformer HIFU — two complementary technologies for comprehensive skin tightening.",
    featureSafe: "Proven & Safe",
    featureSafeDesc:
      "FDA-cleared devices with an excellent safety profile. Treatments are comfortable and well-tolerated.",
    featureCollagen: "Collagen Stimulation",
    featureCollagenDesc:
      "Deeply heats tissue to stimulate new collagen and elastin production for progressive, natural improvement.",
    featureDowntime: "Minimal Downtime",
    featureDowntimeDesc:
      "Return to your daily activities immediately. Results develop gradually over weeks following treatment.",
    proceduresTitle: "Our RF & HIFU Treatments",
    proceduresSubtitle:
      "Customized lifting and tightening solutions for face and body.",
    proc1Title: "TempSure Full Face",
    proc1Desc:
      "Comprehensive radiofrequency treatment to tighten skin, reduce fine lines, and improve facial contour. $650 per session.",
    proc2Title: "TempSure Eye Area",
    proc2Desc:
      "Targeted RF treatment to firm and smooth the delicate skin around the eyes. $250 per session.",
    proc3Title: "Ultraformer HIFU Face",
    proc3Desc:
      "High-intensity focused ultrasound for deep tissue lifting and tightening. Non-surgical facelift alternative. From $3,500.",
    proc4Title: "Ultraformer Face + Neck",
    proc4Desc:
      "Extended HIFU treatment covering face and neck for comprehensive lifting and jawline definition. From $4,500.",
    proc5Title: "Body Cellulite Treatment",
    proc5Desc:
      "Radiofrequency for thighs and buttocks to smooth cellulite and tighten skin. From $450 per session.",
    proc6Title: "Skin Tag Removal",
    proc6Desc:
      "Quick radiofrequency-based removal of skin tags with minimal discomfort. $130 per session.",
    step1: "Skin Assessment",
    step1Desc:
      "Thorough evaluation of skin laxity, texture, and your rejuvenation goals.",
    step2: "Treatment Planning",
    step2Desc:
      "Customized protocol selecting the ideal technology and parameters for your skin.",
    step3: "RF / HIFU Treatment",
    step3Desc:
      "Comfortable in-office session with controlled energy delivery for optimal collagen stimulation.",
    step4: "Progressive Results",
    step4Desc:
      "Collagen remodeling continues for 3-6 months. Follow-up to assess and plan maintenance.",
    testimonial1Treatment: "Ultraformer HIFU",
    testimonial1Text:
      "I wanted a non-surgical option for my sagging jawline and the Ultraformer results are incredible. My face looks lifted and more defined without any surgery.",
    testimonial2Treatment: "TempSure RF",
    testimonial2Text:
      "The TempSure treatment was so relaxing — almost like a warm facial. Over the next few months, I noticed my skin getting progressively tighter. Love it!",
    testimonial3Treatment: "RF Body Treatment",
    testimonial3Text:
      "The cellulite treatment on my thighs has made such a difference. The skin is smoother and firmer. I finally feel confident in shorts again!",
    faq1Q: "What is the difference between radiofrequency and HIFU?",
    faq1A:
      "Radiofrequency (TempSure) heats the superficial and mid-layers of skin to stimulate collagen. HIFU (Ultraformer) delivers focused ultrasound energy to deeper tissue layers, including the SMAS layer targeted in surgical facelifts. Both are effective and can be combined for comprehensive results.",
    faq2Q: "How many sessions do I need?",
    faq2A:
      "For TempSure, 3-4 sessions spaced 4-6 weeks apart are typically recommended. Ultraformer HIFU often delivers significant results in a single session, with optional booster sessions for enhanced effect.",
    faq3Q: "Is the treatment painful?",
    faq3A:
      "TempSure feels like a warm massage and is very comfortable. Ultraformer may cause brief moments of tingling during energy delivery but is well-tolerated by most patients.",
    faq4Q: "When will I see results?",
    faq4A:
      "Some immediate tightening is visible, but the full results develop over 2-6 months as new collagen forms. Results continue to improve for up to a year after Ultraformer treatment.",
    faq5Q: "How long do results last?",
    faq5A:
      "TempSure results last 6-12 months with maintenance sessions. Ultraformer results can last 1-2 years. Results vary based on skin quality, age, and lifestyle factors.",
    faq6Q: "Is there any downtime?",
    faq6A:
      "No downtime is required for either treatment. You may experience mild redness or warmth for a few hours after treatment, but you can return to all normal activities immediately.",
    formTitle: "Book Your Consultation",
    formOptions: [
      "TempSure Radiofrequency",
      "Ultraformer HIFU",
      "Body / Cellulite Treatment",
      "Skin Tag Removal",
      "Other / Not Sure",
    ],
  },
  fr: {
    heroTitle: "Radiofréquence et",
    heroHighlight: "Lifting",
    heroDescription:
      "Raffermissement et lifting cutané non chirurgical grâce à la radiofréquence avancée et la technologie HIFU. Obtenez une peau plus ferme et plus jeune sans chirurgie ni temps d'arrêt.",
    heroBadges: ["Lifting non chirurgical", "Stimulation du collagène", "Aucun temps d'arrêt"],
    whyTitle: "Pourquoi choisir Dr Laurent",
    whySubtitle:
      "Technologie de radiofréquence et d'ultrasons à la fine pointe pour des résultats visibles et durables.",
    featureTech: "Technologie avancée",
    featureTechDesc:
      "Radiofréquence TempSure et HIFU Ultraformer — deux technologies complémentaires pour un raffermissement cutané complet.",
    featureSafe: "Éprouvé et sécuritaire",
    featureSafeDesc:
      "Appareils approuvés avec un excellent profil de sécurité. Les traitements sont confortables et bien tolérés.",
    featureCollagen: "Stimulation du collagène",
    featureCollagenDesc:
      "Chauffe les tissus en profondeur pour stimuler la production de nouveau collagène et d'élastine pour une amélioration progressive et naturelle.",
    featureDowntime: "Temps d'arrêt minimal",
    featureDowntimeDesc:
      "Reprenez vos activités quotidiennes immédiatement. Les résultats se développent graduellement au fil des semaines suivant le traitement.",
    proceduresTitle: "Nos traitements RF et HIFU",
    proceduresSubtitle:
      "Solutions de lifting et de raffermissement personnalisées pour le visage et le corps.",
    proc1Title: "TempSure visage complet",
    proc1Desc:
      "Traitement complet par radiofréquence pour raffermir la peau, réduire les rides fines et améliorer les contours du visage. 650 $ par séance.",
    proc2Title: "TempSure contour des yeux",
    proc2Desc:
      "Traitement RF ciblé pour raffermir et lisser la peau délicate autour des yeux. 250 $ par séance.",
    proc3Title: "Ultraformer HIFU visage",
    proc3Desc:
      "Ultrasons focalisés de haute intensité pour un lifting et un raffermissement des tissus profonds. Alternative non chirurgicale au lifting. À partir de 3 500 $.",
    proc4Title: "Ultraformer visage + cou",
    proc4Desc:
      "Traitement HIFU étendu couvrant le visage et le cou pour un lifting complet et une définition de la mâchoire. À partir de 4 500 $.",
    proc5Title: "Traitement corporel anti-cellulite",
    proc5Desc:
      "Radiofréquence pour les cuisses et les fessiers pour lisser la cellulite et raffermir la peau. À partir de 450 $ par séance.",
    proc6Title: "Retrait d'acrochordons",
    proc6Desc:
      "Retrait rapide des acrochordons par radiofréquence avec un minimum d'inconfort. 130 $ par séance.",
    step1: "Évaluation de la peau",
    step1Desc:
      "Évaluation approfondie du relâchement cutané, de la texture et de vos objectifs de rajeunissement.",
    step2: "Planification du traitement",
    step2Desc:
      "Protocole personnalisé sélectionnant la technologie et les paramètres idéaux pour votre peau.",
    step3: "Traitement RF / HIFU",
    step3Desc:
      "Séance confortable en clinique avec livraison d'énergie contrôlée pour une stimulation optimale du collagène.",
    step4: "Résultats progressifs",
    step4Desc:
      "Le remodelage du collagène se poursuit pendant 3 à 6 mois. Suivi pour évaluer et planifier l'entretien.",
    testimonial1Treatment: "Ultraformer HIFU",
    testimonial1Text:
      "Je voulais une option non chirurgicale pour ma mâchoire relâchée et les résultats de l'Ultraformer sont incroyables. Mon visage a l'air soulevé et plus défini sans aucune chirurgie.",
    testimonial2Treatment: "TempSure RF",
    testimonial2Text:
      "Le traitement TempSure était tellement relaxant — presque comme un soin du visage chaud. Au cours des mois suivants, j'ai remarqué que ma peau devenait progressivement plus ferme. J'adore!",
    testimonial3Treatment: "Traitement corporel RF",
    testimonial3Text:
      "Le traitement anti-cellulite sur mes cuisses a fait une telle différence. La peau est plus lisse et plus ferme. Je me sens enfin en confiance en shorts!",
    faq1Q: "Quelle est la différence entre la radiofréquence et le HIFU?",
    faq1A:
      "La radiofréquence (TempSure) chauffe les couches superficielles et moyennes de la peau pour stimuler le collagène. Le HIFU (Ultraformer) délivre de l'énergie ultrasonore focalisée dans les couches tissulaires plus profondes, incluant la couche SMAS ciblée lors des liftings chirurgicaux. Les deux sont efficaces et peuvent être combinés pour des résultats complets.",
    faq2Q: "Combien de séances sont nécessaires?",
    faq2A:
      "Pour le TempSure, 3 à 4 séances espacées de 4 à 6 semaines sont généralement recommandées. L'Ultraformer HIFU offre souvent des résultats significatifs en une seule séance, avec des séances de rappel optionnelles pour un effet amélioré.",
    faq3Q: "Le traitement est-il douloureux?",
    faq3A:
      "Le TempSure ressemble à un massage chaud et est très confortable. L'Ultraformer peut causer de brefs moments de picotement lors de la livraison d'énergie, mais il est bien toléré par la plupart des patients.",
    faq4Q: "Quand verrai-je les résultats?",
    faq4A:
      "Un certain raffermissement immédiat est visible, mais les résultats complets se développent sur 2 à 6 mois à mesure que le nouveau collagène se forme. Les résultats continuent de s'améliorer jusqu'à un an après le traitement Ultraformer.",
    faq5Q: "Combien de temps durent les résultats?",
    faq5A:
      "Les résultats du TempSure durent de 6 à 12 mois avec des séances d'entretien. Les résultats de l'Ultraformer peuvent durer de 1 à 2 ans. Les résultats varient selon la qualité de la peau, l'âge et le mode de vie.",
    faq6Q: "Y a-t-il un temps d'arrêt?",
    faq6A:
      "Aucun temps d'arrêt n'est requis pour aucun des deux traitements. Vous pourriez ressentir une légère rougeur ou chaleur pendant quelques heures après le traitement, mais vous pouvez reprendre toutes vos activités normales immédiatement.",
    formTitle: "Réservez votre consultation",
    formOptions: [
      "Radiofréquence TempSure",
      "Ultraformer HIFU",
      "Traitement corporel / Cellulite",
      "Retrait d'acrochordons",
      "Autre / Pas certain(e)",
    ],
  },
};

export function RadiofrequencyLiftingContent() {
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
        { icon: Award, title: c.featureTech, desc: c.featureTechDesc },
        { icon: Shield, title: c.featureSafe, desc: c.featureSafeDesc },
        { icon: Zap, title: c.featureCollagen, desc: c.featureCollagenDesc },
        { icon: Clock, title: c.featureDowntime, desc: c.featureDowntimeDesc },
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
          name: "Isabelle T.",
          initial: "I",
          treatment: c.testimonial1Treatment,
          text: c.testimonial1Text,
          rating: 5,
        },
        {
          name: "Marie-Claire D.",
          initial: "M",
          treatment: c.testimonial2Treatment,
          text: c.testimonial2Text,
          rating: 5,
        },
        {
          name: "Joanne P.",
          initial: "J",
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
