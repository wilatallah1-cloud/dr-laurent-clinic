"use client";

import { ServicePageLayout } from "@/components/service-page-layout";
import { Scale, Award, Heart, Activity } from "lucide-react";
import { useLocale } from "@/lib/locale";

const content = {
  en: {
    heroTitle: "Medical Weight",
    heroHighlight: "Management",
    heroDescription:
      "Evidence-based, physician-led weight management programs combining medical expertise, nutrition guidance, and ongoing support. Certified by Obesity Canada for excellence in weight management.",
    heroBadges: ["Obesity Canada certified", "Personalized programs", "Medication options"],
    heroImage: "https://drlaurentmedecineprivee.ca/assets/hero-medical-consultation-DPuVY465.jpg",
    whyTitle: "Why Choose Dr. Laurent",
    whySubtitle:
      "A medically supervised approach to weight management. No fad diets, just science-backed results.",
    features: [
      {
        icon: Scale,
        title: "Evidence-Based Approach",
        desc: "Programs grounded in current obesity medicine research, combining lifestyle modification with medical interventions when appropriate.",
      },
      {
        icon: Award,
        title: "Obesity Canada Certified",
        desc: "Dr. Laurent holds certification from Obesity Canada, demonstrating specialized expertise in weight management excellence.",
      },
      {
        icon: Heart,
        title: "Compassionate Support",
        desc: "A judgment-free approach that focuses on health outcomes. Not numbers on a scale. Your well-being is always the priority.",
      },
      {
        icon: Activity,
        title: "Ongoing Monitoring",
        desc: "Regular follow-ups to track progress, adjust your plan, and address challenges with continuous medical support.",
      },
    ],
    proceduresTitle: "Our Weight Management Services",
    proceduresSubtitle:
      "Comprehensive medical weight management tailored to your body, health, and lifestyle goals.",
    procedures: [
      {
        title: "Medical Assessment",
        desc: "Thorough evaluation including metabolic health, blood work, hormonal factors, and lifestyle analysis to identify the root causes of weight gain.",
      },
      {
        title: "Prescription Medications",
        desc: "When appropriate, FDA-approved weight management medications such as GLP-1 agonists to support your journey alongside lifestyle changes.",
      },
      {
        title: "Nutritional Guidance",
        desc: "Personalized nutritional strategies based on your metabolism, preferences, and health conditions. Sustainable changes, not crash diets.",
      },
      {
        title: "Hormonal Optimization",
        desc: "Addressing hormonal imbalances (thyroid, cortisol, insulin resistance) that may be contributing to weight gain or resistance to loss.",
      },
      {
        title: "Combined Hormone & Weight Program",
        desc: "An integrated approach for patients who would benefit from simultaneous hormonal therapy and weight management. Available as a combined consultation.",
      },
      {
        title: "Lipolysis Treatments",
        desc: "Non-surgical fat reduction treatments for targeted areas that may complement your overall weight management program.",
      },
    ],
    steps: [
      { step: 1, title: "Initial Consultation", desc: "A comprehensive 45-minute assessment of your health, metabolic profile, lifestyle, and weight management goals." },
      { step: 2, title: "Personalized Plan", desc: "A tailored program combining nutritional guidance, physical activity recommendations, and medical interventions as appropriate." },
      { step: 3, title: "Active Treatment", desc: "Implementation of your plan with prescription support if needed, regular check-ins, and adjustments based on your progress." },
      { step: 4, title: "Maintenance & Support", desc: "Ongoing follow-ups to maintain results, prevent regain, and ensure long-term success and health." },
    ],
    testimonials: [
      {
        name: "Nathalie C.",
        initial: "N",
        treatment: "Weight Management",
        text: "After years of failed diets, Dr. Laurent finally helped me understand the medical factors behind my weight. The personalized program has been life-changing. I've lost 30 lbs and kept it off.",
        rating: 5,
      },
      {
        name: "Robert F.",
        initial: "R",
        treatment: "Medical Weight Loss",
        text: "The difference between this and every other weight loss program I've tried is that it's actually medical. Dr. Laurent identified insulin resistance I didn't know I had. The results speak for themselves.",
        rating: 5,
      },
      {
        name: "Samira H.",
        initial: "S",
        treatment: "Weight Management",
        text: "No judgment, no shame. Just real medical support. Dr. Laurent treated me with dignity and created a plan that fits my life. I've never felt this healthy or this supported.",
        rating: 5,
      },
    ],
    faqs: [
      {
        q: "What makes medical weight management different from a regular diet?",
        a: "Medical weight management addresses the underlying causes of weight gain. Metabolic, hormonal, psychological, and genetic factors. Rather than restrictive dieting, Dr. Laurent creates an evidence-based plan that may include medication, hormonal optimization, and sustainable lifestyle changes.",
      },
      {
        q: "How much does the weight management program cost?",
        a: "The initial weight management consultation (45 min) is $350. Follow-up appointments (20 min) are $250. A combined hormone + weight loss initial consultation is $600, with combined follow-ups at $350. A $40 file opening fee applies for new patients.",
      },
      {
        q: "Do you prescribe weight loss medications?",
        a: "Yes, when medically appropriate. Dr. Laurent may prescribe FDA-approved medications such as GLP-1 receptor agonists (e.g., semaglutide, liraglutide) as part of a comprehensive weight management plan. Suitability is determined during your consultation.",
      },
      {
        q: "How often will I need follow-up appointments?",
        a: "Follow-up frequency is typically every 2-4 weeks during the active phase, then monthly as you reach your goals. The schedule is adjusted based on your progress and specific treatment plan.",
      },
      {
        q: "Is this program suitable for people with diabetes or other conditions?",
        a: "Yes. Dr. Laurent has experience managing weight in patients with diabetes, hypertension, thyroid disorders, PCOS, and other conditions. In fact, medical supervision is especially important when weight management intersects with other health conditions.",
      },
      {
        q: "What results can I expect and how quickly?",
        a: "Results vary by individual, but most patients on a comprehensive medical weight management program can expect to see meaningful progress within the first 4-8 weeks. Dr. Laurent sets realistic expectations during your initial consultation and adjusts your plan as needed.",
      },
    ],
    formTitle: "Book Your Consultation",
    formOptions: [
      "Initial Weight Assessment",
      "Medication Options",
      "Nutritional Guidance",
      "Combined Hormone & Weight",
      "Follow-Up Appointment",
      "Other / Not Sure",
    ],
  },
  fr: {
    heroTitle: "Gestion médicale",
    heroHighlight: "du poids",
    heroDescription:
      "Programmes de gestion du poids fondés sur les données probantes et dirigés par un médecin, combinant expertise médicale, conseils nutritionnels et soutien continu. Certifié par Obésité Canada pour l'excellence en gestion du poids.",
    heroBadges: ["Certifié Obésité Canada", "Programmes personnalisés", "Options de médication"],
    heroImage: "https://drlaurentmedecineprivee.ca/assets/hero-medical-consultation-DPuVY465.jpg",
    whyTitle: "Pourquoi choisir Dr Laurent",
    whySubtitle:
      "Une approche médicalement supervisée de la gestion du poids. Pas de régimes à la mode, juste des résultats appuyés par la science.",
    features: [
      {
        icon: Scale,
        title: "Approche fondée sur les données probantes",
        desc: "Des programmes ancrés dans la recherche actuelle en médecine de l'obésité, combinant modification du mode de vie et interventions médicales lorsque approprié.",
      },
      {
        icon: Award,
        title: "Certifié Obésité Canada",
        desc: "Dr Laurent détient la certification d'Obésité Canada, démontrant une expertise spécialisée en excellence de la gestion du poids.",
      },
      {
        icon: Heart,
        title: "Soutien compatissant",
        desc: "Une approche sans jugement axée sur les résultats de santé. Pas les chiffres sur la balance. Votre bien-être est toujours la priorité.",
      },
      {
        icon: Activity,
        title: "Suivi continu",
        desc: "Des suivis réguliers pour mesurer les progrès, ajuster votre plan et relever les défis avec un soutien médical continu.",
      },
    ],
    proceduresTitle: "Nos services de gestion du poids",
    proceduresSubtitle:
      "Une gestion médicale complète du poids adaptée à votre corps, votre santé et vos objectifs de vie.",
    procedures: [
      {
        title: "Évaluation médicale",
        desc: "Évaluation approfondie incluant la santé métabolique, les bilans sanguins, les facteurs hormonaux et l'analyse du mode de vie pour identifier les causes profondes de la prise de poids.",
      },
      {
        title: "Médicaments sur ordonnance",
        desc: "Lorsque approprié, des médicaments de gestion du poids approuvés tels que les agonistes du GLP-1 pour soutenir votre parcours en parallèle des changements de mode de vie.",
      },
      {
        title: "Conseils nutritionnels",
        desc: "Stratégies nutritionnelles personnalisées basées sur votre métabolisme, vos préférences et vos conditions de santé. Des changements durables, pas des régimes draconiens.",
      },
      {
        title: "Optimisation hormonale",
        desc: "Prise en charge des déséquilibres hormonaux (thyroïde, cortisol, résistance à l'insuline) qui peuvent contribuer à la prise de poids ou à la résistance à la perte.",
      },
      {
        title: "Programme combiné hormones et poids",
        desc: "Une approche intégrée pour les patients qui bénéficieraient d'une hormonothérapie simultanée et d'une gestion du poids. Disponible en consultation combinée.",
      },
      {
        title: "Traitements de lipolyse",
        desc: "Traitements non chirurgicaux de réduction des graisses pour les zones ciblées qui peuvent compléter votre programme global de gestion du poids.",
      },
    ],
    steps: [
      { step: 1, title: "Consultation initiale", desc: "Une évaluation complète de 45 minutes de votre santé, profil métabolique, mode de vie et objectifs de gestion du poids." },
      { step: 2, title: "Plan personnalisé", desc: "Un programme sur mesure combinant conseils nutritionnels, recommandations d'activité physique et interventions médicales selon le besoin." },
      { step: 3, title: "Traitement actif", desc: "Mise en œuvre de votre plan avec soutien médicamenteux si nécessaire, suivis réguliers et ajustements selon vos progrès." },
      { step: 4, title: "Maintien et soutien", desc: "Suivis continus pour maintenir les résultats, prévenir la reprise de poids et assurer le succès et la santé à long terme." },
    ],
    testimonials: [
      {
        name: "Nathalie C.",
        initial: "N",
        treatment: "Gestion du poids",
        text: "Après des années de régimes échoués, Dr Laurent m'a enfin aidée à comprendre les facteurs médicaux derrière mon poids. Le programme personnalisé a changé ma vie. J'ai perdu 30 livres et maintenu le résultat.",
        rating: 5,
      },
      {
        name: "Robert F.",
        initial: "R",
        treatment: "Perte de poids médicale",
        text: "La différence entre ceci et tous les autres programmes de perte de poids que j'ai essayés, c'est que celui-ci est véritablement médical. Dr Laurent a identifié une résistance à l'insuline que j'ignorais. Les résultats parlent d'eux-mêmes.",
        rating: 5,
      },
      {
        name: "Samira H.",
        initial: "S",
        treatment: "Gestion du poids",
        text: "Pas de jugement, pas de honte. Juste un vrai soutien médical. Dr Laurent m'a traitée avec dignité et a créé un plan qui convient à ma vie. Je ne me suis jamais sentie aussi en santé ni aussi soutenue.",
        rating: 5,
      },
    ],
    faqs: [
      {
        q: "Qu'est-ce qui distingue la gestion médicale du poids d'un régime ordinaire?",
        a: "La gestion médicale du poids aborde les causes sous-jacentes de la prise de poids. Facteurs métaboliques, hormonaux, psychologiques et génétiques. Plutôt que des régimes restrictifs, Dr Laurent crée un plan fondé sur les données probantes pouvant inclure la médication, l'optimisation hormonale et des changements de mode de vie durables.",
      },
      {
        q: "Combien coûte le programme de gestion du poids?",
        a: "La consultation initiale de gestion du poids (45 min) est à 350 $. Les rendez-vous de suivi (20 min) sont à 250 $. Une consultation initiale combinée hormones + perte de poids est à 600 $, avec des suivis combinés à 350 $. Des frais d'ouverture de dossier de 40 $ s'appliquent pour les nouveaux patients.",
      },
      {
        q: "Prescrivez-vous des médicaments pour la perte de poids?",
        a: "Oui, lorsque médicalement approprié. Dr Laurent peut prescrire des médicaments approuvés tels que les agonistes du récepteur GLP-1 (p. Ex., sémaglutide, liraglutide) dans le cadre d'un plan complet de gestion du poids. L'admissibilité est déterminée lors de votre consultation.",
      },
      {
        q: "À quelle fréquence aurai-je besoin de rendez-vous de suivi?",
        a: "La fréquence des suivis est généralement de toutes les 2 à 4 semaines pendant la phase active, puis mensuellement à mesure que vous atteignez vos objectifs. Le calendrier est ajusté selon vos progrès et votre plan de traitement spécifique.",
      },
      {
        q: "Ce programme convient-il aux personnes diabétiques ou ayant d'autres conditions?",
        a: "Oui. Dr Laurent a de l'expérience dans la gestion du poids chez les patients atteints de diabète, d'hypertension, de troubles thyroïdiens, du SOPK et d'autres conditions. En fait, la supervision médicale est particulièrement importante lorsque la gestion du poids croise d'autres conditions de santé.",
      },
      {
        q: "Quels résultats puis-je espérer et en combien de temps?",
        a: "Les résultats varient selon les individus, mais la plupart des patients suivant un programme médical complet de gestion du poids peuvent s'attendre à des progrès significatifs dans les 4 à 8 premières semaines. Dr Laurent fixe des attentes réalistes lors de votre consultation initiale et ajuste votre plan au besoin.",
      },
    ],
    formTitle: "Réservez votre consultation",
    formOptions: [
      "Évaluation initiale du poids",
      "Options de médication",
      "Conseils nutritionnels",
      "Programme combiné hormones et poids",
      "Rendez-vous de suivi",
      "Autre / Pas certain",
    ],
  },
};

export function WeightManagementContent() {
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
