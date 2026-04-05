"use client";

import { ServicePageLayout } from "@/components/service-page-layout";
import { useLocale } from "@/lib/locale";
import { Award, Shield, Sparkles, Heart } from "lucide-react";

const content = {
  en: {
    heroTitle: "Hair",
    heroHighlight: "Stimulation",
    heroDescription:
      "Advanced PRP and exosome therapies to combat hair loss and thinning. Stimulate natural hair growth, restore density, and regain your confidence.",
    heroBadges: ["PRP therapy", "Natural regrowth", "Proven results"],
    whyTitle: "Why Choose Dr. Laurent",
    whySubtitle:
      "Evidence-based hair restoration using your body's own healing factors.",
    featureExpertise: "Medical Expertise",
    featureExpertiseDesc:
      "Board-certified physician with training in regenerative medicine and hair restoration protocols.",
    featureEvidence: "Evidence-Based",
    featureEvidenceDesc:
      "Clinically proven PRP therapy harnessing your body's own growth factors to stimulate hair follicles.",
    featureRegrowth: "Natural Regrowth",
    featureRegrowthDesc:
      "Stimulate dormant follicles and strengthen existing hair for thicker, healthier growth.",
    featurePersonalized: "Personalized Protocols",
    featurePersonalizedDesc:
      "Customized treatment plans based on your hair loss pattern, severity, and goals.",
    proceduresTitle: "Our Hair Treatments",
    proceduresSubtitle: "Comprehensive solutions for hair thinning and loss.",
    proc1Title: "Scalp PRP",
    proc1Desc:
      "Platelet-rich plasma injections into the scalp to stimulate hair follicles and promote new growth. $500 per session.",
    proc2Title: "PRP + Microneedling",
    proc2Desc:
      "Combining PRP with microneedling for enhanced absorption and stimulation of the scalp. $800 per session.",
    proc3Title: "Exosome Therapy",
    proc3Desc:
      "Cutting-edge exosome treatment to boost cellular regeneration and hair follicle activity. Add-on $100.",
    proc4Title: "Combination Protocol",
    proc4Desc:
      "Multi-session treatment plan combining PRP, microneedling, and growth factors for maximum results.",
    proc5Title: "Maintenance Program",
    proc5Desc:
      "Scheduled follow-up sessions every 3-6 months to sustain and build on your hair regrowth results.",
    proc6Title: "Early Intervention",
    proc6Desc:
      "Proactive treatment for early-stage thinning to preserve existing hair and prevent further loss.",
    step1: "Hair Assessment",
    step1Desc:
      "Comprehensive evaluation of your hair loss pattern, scalp health, and potential contributing factors.",
    step2: "Blood Draw & Preparation",
    step2Desc:
      "A small blood sample is drawn and processed to concentrate your platelet-rich plasma.",
    step3: "PRP Treatment",
    step3Desc:
      "Growth factor-rich PRP is injected into the scalp at strategic points to stimulate follicle activity.",
    step4: "Progress Monitoring",
    step4Desc:
      "Regular follow-up appointments to track hair growth progress and adjust your treatment protocol.",
    testimonial1Treatment: "Scalp PRP",
    testimonial1Text:
      "After three PRP sessions, I noticed significantly less shedding and new baby hairs growing in. My hair looks noticeably thicker. Dr. Laurent's approach is thorough and professional.",
    testimonial2Treatment: "PRP + Microneedling",
    testimonial2Text:
      "I was skeptical at first, but the combination of PRP and microneedling has given me real, visible results. My thinning crown is filling in. Couldn't be happier!",
    testimonial3Treatment: "Hair Stimulation",
    testimonial3Text:
      "As a woman dealing with thinning hair, finding Dr. Laurent was a relief. He took the time to understand my concerns and created a treatment plan that is truly working.",
    faq1Q: "How does PRP hair stimulation work?",
    faq1A:
      "PRP (Platelet-Rich Plasma) is derived from your own blood. It contains concentrated growth factors that, when injected into the scalp, stimulate dormant hair follicles, improve blood supply, and promote new hair growth.",
    faq2Q: "How many sessions are needed?",
    faq2A:
      "Most patients benefit from an initial series of 3-4 sessions spaced 4-6 weeks apart, followed by maintenance sessions every 3-6 months. Results are progressive and continue to improve with each session.",
    faq3Q: "When will I see results?",
    faq3A:
      "Most patients notice reduced hair shedding within 4-6 weeks. Visible new growth typically becomes apparent after 2-3 months, with continued improvement over 6-12 months.",
    faq4Q: "Is PRP hair treatment painful?",
    faq4A:
      "The scalp is numbed with topical anesthetic before treatment. Most patients describe the sensation as mild pressure or tingling. The procedure is well-tolerated and takes about 45-60 minutes.",
    faq5Q: "Who is a good candidate for hair stimulation?",
    faq5A:
      "PRP works best for individuals with early to moderate hair thinning. It is effective for both men and women experiencing androgenetic alopecia, telogen effluvium, or general hair thinning. A consultation will determine if you're a good candidate.",
    faq6Q: "Are there any side effects?",
    faq6A:
      "Since PRP uses your own blood, allergic reactions are extremely rare. Mild scalp tenderness, redness, or swelling at injection sites may occur for 24-48 hours. There is no significant downtime.",
    formTitle: "Book Your Consultation",
    formOptions: [
      "Scalp PRP",
      "PRP + Microneedling",
      "Exosome Therapy",
      "Hair Loss Assessment",
      "Other / Not Sure",
    ],
  },
  fr: {
    heroTitle: "Stimulation",
    heroHighlight: "Capillaire",
    heroDescription:
      "Thérapies avancées PRP et exosomes pour combattre la perte de cheveux et l'amincissement. Stimulez la repousse naturelle des cheveux, restaurez la densité et retrouvez votre confiance.",
    heroBadges: ["Thérapie PRP", "Repousse naturelle", "Résultats prouvés"],
    whyTitle: "Pourquoi choisir Dr Laurent",
    whySubtitle:
      "Restauration capillaire fondée sur la science utilisant les propres facteurs de guérison de votre corps.",
    featureExpertise: "Expertise médicale",
    featureExpertiseDesc:
      "Médecin certifié avec formation en médecine régénérative et protocoles de restauration capillaire.",
    featureEvidence: "Fondé sur la science",
    featureEvidenceDesc:
      "Thérapie PRP cliniquement prouvée exploitant les facteurs de croissance de votre propre corps pour stimuler les follicules pileux.",
    featureRegrowth: "Repousse naturelle",
    featureRegrowthDesc:
      "Stimulez les follicules dormants et renforcez les cheveux existants pour une croissance plus épaisse et plus saine.",
    featurePersonalized: "Protocoles personnalisés",
    featurePersonalizedDesc:
      "Plans de traitement personnalisés basés sur votre patron de perte de cheveux, la gravité et vos objectifs.",
    proceduresTitle: "Nos traitements capillaires",
    proceduresSubtitle:
      "Solutions complètes pour l'amincissement et la perte de cheveux.",
    proc1Title: "PRP du cuir chevelu",
    proc1Desc:
      "Injections de plasma riche en plaquettes dans le cuir chevelu pour stimuler les follicules pileux et favoriser la repousse. 500 $ par séance.",
    proc2Title: "PRP + Microneedling",
    proc2Desc:
      "Combinaison du PRP avec le microneedling pour une absorption et une stimulation améliorées du cuir chevelu. 800 $ par séance.",
    proc3Title: "Thérapie par exosomes",
    proc3Desc:
      "Traitement de pointe par exosomes pour stimuler la régénération cellulaire et l'activité des follicules pileux. Ajout de 100 $.",
    proc4Title: "Protocole combiné",
    proc4Desc:
      "Plan de traitement multi-séances combinant PRP, microneedling et facteurs de croissance pour des résultats maximaux.",
    proc5Title: "Programme d'entretien",
    proc5Desc:
      "Séances de suivi programmées tous les 3 à 6 mois pour maintenir et consolider vos résultats de repousse capillaire.",
    proc6Title: "Intervention précoce",
    proc6Desc:
      "Traitement proactif pour l'amincissement débutant afin de préserver les cheveux existants et prévenir la perte supplémentaire.",
    step1: "Évaluation capillaire",
    step1Desc:
      "Évaluation complète de votre patron de perte de cheveux, de la santé du cuir chevelu et des facteurs contributifs potentiels.",
    step2: "Prélèvement sanguin et préparation",
    step2Desc:
      "Un petit échantillon de sang est prélevé et traité pour concentrer votre plasma riche en plaquettes.",
    step3: "Traitement PRP",
    step3Desc:
      "Le PRP riche en facteurs de croissance est injecté dans le cuir chevelu à des points stratégiques pour stimuler l'activité folliculaire.",
    step4: "Suivi des progrès",
    step4Desc:
      "Rendez-vous de suivi réguliers pour suivre les progrès de la repousse et ajuster votre protocole de traitement.",
    testimonial1Treatment: "PRP du cuir chevelu",
    testimonial1Text:
      "Après trois séances de PRP, j'ai remarqué beaucoup moins de chute et de nouveaux petits cheveux qui poussent. Mes cheveux paraissent visiblement plus épais. L'approche de Dr Laurent est rigoureuse et professionnelle.",
    testimonial2Treatment: "PRP + Microneedling",
    testimonial2Text:
      "J'étais sceptique au début, mais la combinaison PRP et microneedling m'a donné des résultats réels et visibles. Mon sommet du crâne qui s'amincissait se remplit. Je ne pourrais pas être plus content!",
    testimonial3Treatment: "Stimulation capillaire",
    testimonial3Text:
      "En tant que femme aux prises avec des cheveux qui s'amincissent, trouver Dr Laurent a été un soulagement. Il a pris le temps de comprendre mes préoccupations et a créé un plan de traitement qui fonctionne vraiment.",
    faq1Q: "Comment fonctionne la stimulation capillaire par PRP?",
    faq1A:
      "Le PRP (plasma riche en plaquettes) est dérivé de votre propre sang. Il contient des facteurs de croissance concentrés qui, lorsqu'injectés dans le cuir chevelu, stimulent les follicules pileux dormants, améliorent l'apport sanguin et favorisent la repousse des cheveux.",
    faq2Q: "Combien de séances sont nécessaires?",
    faq2A:
      "La plupart des patients bénéficient d'une série initiale de 3 à 4 séances espacées de 4 à 6 semaines, suivies de séances d'entretien tous les 3 à 6 mois. Les résultats sont progressifs et continuent de s'améliorer à chaque séance.",
    faq3Q: "Quand verrai-je les résultats?",
    faq3A:
      "La plupart des patients remarquent une réduction de la chute de cheveux dans les 4 à 6 semaines. Une repousse visible devient généralement apparente après 2 à 3 mois, avec une amélioration continue sur 6 à 12 mois.",
    faq4Q: "Le traitement PRP capillaire est-il douloureux?",
    faq4A:
      "Le cuir chevelu est engourdi avec un anesthésiant topique avant le traitement. La plupart des patients décrivent la sensation comme une légère pression ou un picotement. La procédure est bien tolérée et dure environ 45 à 60 minutes.",
    faq5Q: "Qui est un bon candidat pour la stimulation capillaire?",
    faq5A:
      "Le PRP fonctionne le mieux pour les personnes ayant un amincissement capillaire léger à modéré. Il est efficace tant pour les hommes que pour les femmes atteints d'alopécie androgénétique, d'effluvium télogène ou d'amincissement capillaire général. Une consultation déterminera si vous êtes un bon candidat.",
    faq6Q: "Y a-t-il des effets secondaires?",
    faq6A:
      "Puisque le PRP utilise votre propre sang, les réactions allergiques sont extrêmement rares. Une légère sensibilité du cuir chevelu, des rougeurs ou un gonflement aux sites d'injection peuvent survenir pendant 24 à 48 heures. Il n'y a pas de temps d'arrêt significatif.",
    formTitle: "Réservez votre consultation",
    formOptions: [
      "PRP du cuir chevelu",
      "PRP + Microneedling",
      "Thérapie par exosomes",
      "Évaluation de la perte de cheveux",
      "Autre / Pas certain(e)",
    ],
  },
};

export function HairStimulationContent() {
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
        { icon: Shield, title: c.featureEvidence, desc: c.featureEvidenceDesc },
        { icon: Sparkles, title: c.featureRegrowth, desc: c.featureRegrowthDesc },
        { icon: Heart, title: c.featurePersonalized, desc: c.featurePersonalizedDesc },
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
          name: "Thomas R.",
          initial: "T",
          treatment: c.testimonial1Treatment,
          text: c.testimonial1Text,
          rating: 5,
        },
        {
          name: "Alexandre P.",
          initial: "A",
          treatment: c.testimonial2Treatment,
          text: c.testimonial2Text,
          rating: 5,
        },
        {
          name: "Nadia S.",
          initial: "N",
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
