"use client";

import { ServicePageLayout } from "@/components/service-page-layout";
import { useLocale } from "@/lib/locale";
import { Award, Shield, Sparkles, CheckCircle } from "lucide-react";

const content = {
  en: {
    heroTitle: "Facial",
    heroHighlight: "Contouring",
    heroDescription:
      "Non-surgical facial sculpting using premium fillers, neuromodulators, and advanced technologies to define your jawline, enhance cheekbones, and create harmonious facial proportions.",
    heroBadges: ["Non-surgical sculpting", "Facial harmony", "Immediate results"],
    whyTitle: "Why Choose Dr. Laurent",
    whySubtitle:
      "An artistic approach to facial sculpting grounded in medical expertise and anatomical knowledge.",
    featureVision: "Artistic Vision",
    featureVisionDesc:
      "Combines medical expertise with an aesthetic eye to create balanced, harmonious facial proportions.",
    featureProducts: "Premium Products",
    featureProductsDesc:
      "FDA-approved fillers (HA, Sculptra, Radiesse) and neuromodulators for safe, predictable results.",
    featureResults: "Transformative Results",
    featureResultsDesc:
      "Sculpt the jawline, lift cheekbones, refine the chin, and create a more defined facial profile.",
    featureApproach: "Comprehensive Approach",
    featureApproachDesc:
      "Multi-product strategies combining fillers, Botox, and technology for complete facial transformation.",
    proceduresTitle: "Our Contouring Treatments",
    proceduresSubtitle:
      "Targeted solutions to sculpt and define every area of the face.",
    proc1Title: "Jawline Definition",
    proc1Desc:
      "Strategic filler placement along the jawline for a sharper, more defined lower face. Creates structure and elegance.",
    proc2Title: "Cheekbone Enhancement",
    proc2Desc:
      "Volume and projection to the mid-face for lifted, sculpted cheekbones and improved facial balance.",
    proc3Title: "Chin Augmentation",
    proc3Desc:
      "Non-surgical chin projection and reshaping with fillers to improve profile harmony and facial proportions.",
    proc4Title: "Facial Transformation Package",
    proc4Desc:
      "Comprehensive multi-area treatment plan addressing jawline, cheeks, chin, and temples. Starting from $2,000.",
    proc5Title: "Masseter Slimming (Botox)",
    proc5Desc:
      "Neuromodulator injections to slim a wide or square jaw, creating a softer, more V-shaped facial contour.",
    proc6Title: "Temple & Hollow Restoration",
    proc6Desc:
      "Volume restoration to hollowed temples and under-eye areas for a refreshed, youthful facial frame.",
    step1: "Facial Analysis",
    step1Desc:
      "Comprehensive assessment of your facial proportions, symmetry, and contouring goals.",
    step2: "Treatment Design",
    step2Desc:
      "Artistic mapping of injection points and volume placement to achieve optimal facial harmony.",
    step3: "Sculpting Session",
    step3Desc:
      "Precise product placement using advanced techniques. Immediate results with continued improvement.",
    step4: "Refinement & Maintenance",
    step4Desc:
      "Follow-up to assess results and fine-tune as needed. Maintenance plan for long-term contour.",
    testimonial1Treatment: "Jawline Contouring",
    testimonial1Text:
      "Dr. Laurent sculpted the jawline I always wanted. The results look so natural — like I was born with this bone structure. His artistry is exceptional.",
    testimonial2Treatment: "Full Facial Contouring",
    testimonial2Text:
      "The facial transformation package completely changed my face for the better. Sharper jaw, defined cheekbones, stronger chin. I look like a better version of myself.",
    testimonial3Treatment: "Cheek & Chin Enhancement",
    testimonial3Text:
      "I wanted more definition without looking 'done.' Dr. Laurent's approach was so thoughtful and artistic. My profile is dramatically improved and it all looks natural.",
    faq1Q: "What is non-surgical facial contouring?",
    faq1A:
      "Non-surgical facial contouring uses injectable fillers, neuromodulators, and energy-based devices to sculpt and define facial features — jawline, cheekbones, chin, and more — without surgery. Results are immediate and can be tailored to your aesthetic goals.",
    faq2Q: "How long do facial contouring results last?",
    faq2A:
      "Hyaluronic acid fillers in structural areas like the jawline and cheekbones typically last 12-18 months. Sculptra and Radiesse can last up to 2 years. Maintenance sessions help sustain your defined contour over time.",
    faq3Q: "Is facial contouring suitable for both men and women?",
    faq3A:
      "Absolutely. Dr. Laurent tailors the approach to suit masculine or feminine facial aesthetics. Men often seek stronger jawline definition, while women may prefer softer contours and cheekbone enhancement. Every plan is fully personalized.",
    faq4Q: "What is the recovery time?",
    faq4A:
      "There is virtually no downtime. You may experience mild swelling or bruising for 2-3 days. Most patients return to normal activities immediately and can apply makeup the following day.",
    faq5Q: "How much does facial contouring cost?",
    faq5A:
      "Single-area treatments start at $750 per syringe of filler. Comprehensive facial transformation packages start from $2,000. A detailed quote is provided during your personalized consultation.",
    faq6Q: "Can facial contouring be combined with other treatments?",
    faq6A:
      "Yes. Facial contouring works beautifully with skin tightening (RF or HIFU), Botox for dynamic wrinkles, and skin treatments like PicoSure or chemical peels for a complete facial rejuvenation.",
    formTitle: "Book Your Consultation",
    formOptions: [
      "Jawline Definition",
      "Cheekbone Enhancement",
      "Chin Augmentation",
      "Facial Transformation Package",
      "Masseter Slimming",
      "Other / Not Sure",
    ],
  },
  fr: {
    heroTitle: "Remodelage",
    heroHighlight: "Facial",
    heroDescription:
      "Sculpture faciale non chirurgicale utilisant des agents de comblement haut de gamme, des neuromodulateurs et des technologies avancées pour définir votre mâchoire, rehausser vos pommettes et créer des proportions faciales harmonieuses.",
    heroBadges: ["Sculpture non chirurgicale", "Harmonie faciale", "Résultats immédiats"],
    whyTitle: "Pourquoi choisir Dr Laurent",
    whySubtitle:
      "Une approche artistique de la sculpture faciale fondée sur l'expertise médicale et la connaissance anatomique.",
    featureVision: "Vision artistique",
    featureVisionDesc:
      "Combine l'expertise médicale avec un oeil esthétique pour créer des proportions faciales équilibrées et harmonieuses.",
    featureProducts: "Produits haut de gamme",
    featureProductsDesc:
      "Agents de comblement approuvés (AH, Sculptra, Radiesse) et neuromodulateurs pour des résultats sûrs et prévisibles.",
    featureResults: "Résultats transformateurs",
    featureResultsDesc:
      "Sculptez la mâchoire, soulevez les pommettes, affinez le menton et créez un profil facial plus défini.",
    featureApproach: "Approche complète",
    featureApproachDesc:
      "Stratégies multi-produits combinant comblement, Botox et technologie pour une transformation faciale complète.",
    proceduresTitle: "Nos traitements de remodelage",
    proceduresSubtitle:
      "Solutions ciblées pour sculpter et définir chaque zone du visage.",
    proc1Title: "Définition de la mâchoire",
    proc1Desc:
      "Placement stratégique de comblement le long de la mâchoire pour un bas du visage plus net et plus défini. Crée structure et élégance.",
    proc2Title: "Rehaussement des pommettes",
    proc2Desc:
      "Volume et projection au niveau du milieu du visage pour des pommettes soulevées, sculptées et un meilleur équilibre facial.",
    proc3Title: "Augmentation du menton",
    proc3Desc:
      "Projection et remodelage non chirurgical du menton avec des agents de comblement pour améliorer l'harmonie du profil et les proportions faciales.",
    proc4Title: "Forfait transformation faciale",
    proc4Desc:
      "Plan de traitement multi-zones complet abordant la mâchoire, les joues, le menton et les tempes. À partir de 2 000 $.",
    proc5Title: "Affinement du masséter (Botox)",
    proc5Desc:
      "Injections de neuromodulateurs pour affiner une mâchoire large ou carrée, créant un contour facial plus doux en forme de V.",
    proc6Title: "Restauration des tempes et creux",
    proc6Desc:
      "Restauration de volume des tempes creuses et des zones sous les yeux pour un cadre facial rafraîchi et rajeuni.",
    step1: "Analyse faciale",
    step1Desc:
      "Évaluation complète de vos proportions faciales, de la symétrie et de vos objectifs de remodelage.",
    step2: "Conception du traitement",
    step2Desc:
      "Cartographie artistique des points d'injection et du placement des volumes pour atteindre une harmonie faciale optimale.",
    step3: "Séance de sculpture",
    step3Desc:
      "Placement précis du produit utilisant des techniques avancées. Résultats immédiats avec amélioration continue.",
    step4: "Raffinement et entretien",
    step4Desc:
      "Suivi pour évaluer les résultats et ajuster au besoin. Plan d'entretien pour un contour à long terme.",
    testimonial1Treatment: "Remodelage de la mâchoire",
    testimonial1Text:
      "Dr Laurent a sculpté la mâchoire dont j'ai toujours rêvé. Les résultats ont l'air tellement naturels — comme si j'étais née avec cette structure osseuse. Son art est exceptionnel.",
    testimonial2Treatment: "Remodelage facial complet",
    testimonial2Text:
      "Le forfait de transformation faciale a complètement changé mon visage pour le mieux. Mâchoire plus nette, pommettes définies, menton plus fort. J'ai l'air d'une meilleure version de moi-même.",
    testimonial3Treatment: "Rehaussement des joues et du menton",
    testimonial3Text:
      "Je voulais plus de définition sans avoir l'air « refait ». L'approche de Dr Laurent était tellement réfléchie et artistique. Mon profil est considérablement amélioré et tout a l'air naturel.",
    faq1Q: "Qu'est-ce que le remodelage facial non chirurgical?",
    faq1A:
      "Le remodelage facial non chirurgical utilise des agents de comblement injectables, des neuromodulateurs et des appareils à énergie pour sculpter et définir les traits du visage — mâchoire, pommettes, menton et plus — sans chirurgie. Les résultats sont immédiats et peuvent être adaptés à vos objectifs esthétiques.",
    faq2Q: "Combien de temps durent les résultats du remodelage facial?",
    faq2A:
      "Les agents de comblement à l'acide hyaluronique dans les zones structurelles comme la mâchoire et les pommettes durent généralement 12 à 18 mois. Le Sculptra et le Radiesse peuvent durer jusqu'à 2 ans. Les séances d'entretien aident à maintenir vos contours définis au fil du temps.",
    faq3Q: "Le remodelage facial convient-il aux hommes et aux femmes?",
    faq3A:
      "Absolument. Dr Laurent adapte l'approche pour convenir à l'esthétique faciale masculine ou féminine. Les hommes recherchent souvent une définition plus forte de la mâchoire, tandis que les femmes préfèrent des contours plus doux et un rehaussement des pommettes. Chaque plan est entièrement personnalisé.",
    faq4Q: "Quel est le temps de récupération?",
    faq4A:
      "Il n'y a pratiquement aucun temps d'arrêt. Vous pourriez ressentir un léger gonflement ou des ecchymoses pendant 2 à 3 jours. La plupart des patients reprennent leurs activités normales immédiatement et peuvent appliquer du maquillage le lendemain.",
    faq5Q: "Combien coûte le remodelage facial?",
    faq5A:
      "Les traitements d'une seule zone commencent à 750 $ par seringue de comblement. Les forfaits de transformation faciale complète commencent à partir de 2 000 $. Un devis détaillé est fourni lors de votre consultation personnalisée.",
    faq6Q: "Le remodelage facial peut-il être combiné avec d'autres traitements?",
    faq6A:
      "Oui. Le remodelage facial se combine magnifiquement avec le raffermissement cutané (RF ou HIFU), le Botox pour les rides dynamiques et les traitements cutanés comme le PicoSure ou les peelings chimiques pour un rajeunissement facial complet.",
    formTitle: "Réservez votre consultation",
    formOptions: [
      "Définition de la mâchoire",
      "Rehaussement des pommettes",
      "Augmentation du menton",
      "Forfait transformation faciale",
      "Affinement du masséter",
      "Autre / Pas certain(e)",
    ],
  },
};

export function FacialContouringContent() {
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
        { icon: Award, title: c.featureVision, desc: c.featureVisionDesc },
        { icon: Shield, title: c.featureProducts, desc: c.featureProductsDesc },
        { icon: Sparkles, title: c.featureResults, desc: c.featureResultsDesc },
        { icon: CheckCircle, title: c.featureApproach, desc: c.featureApproachDesc },
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
          name: "Emilie L.",
          initial: "E",
          treatment: c.testimonial1Treatment,
          text: c.testimonial1Text,
          rating: 5,
        },
        {
          name: "Mathieu C.",
          initial: "M",
          treatment: c.testimonial2Treatment,
          text: c.testimonial2Text,
          rating: 5,
        },
        {
          name: "Sarah B.",
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
