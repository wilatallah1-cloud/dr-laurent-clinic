"use client";

import { ServicePageLayout } from "@/components/service-page-layout";
import { Clock, Activity, ShieldCheck, Zap } from "lucide-react";
import { useLocale } from "@/lib/locale";

const content = {
  en: {
    heroTitle: "Minor Emergency",
    heroHighlight: "Care",
    heroDescription:
      "Skip the hours-long ER wait. Get prompt, professional medical attention for urgent but non-life-threatening health concerns in a private, comfortable setting.",
    heroBadges: ["Rapid access", "No long waits", "Professional care"],
    heroImage: "https://drlaurentmedecineprivee.ca/assets/hero-medical-consultation-DPuVY465.jpg",
    whyTitle: "Why Choose Dr. Laurent",
    whySubtitle:
      "Urgent care without the chaos. Fast appointments, thorough assessments, and personalized treatment.",
    features: [
      {
        icon: Clock,
        title: "Rapid Access",
        desc: "Same-day appointments available for urgent concerns. No waiting hours in a crowded emergency room.",
      },
      {
        icon: Activity,
        title: "Comprehensive Assessment",
        desc: "Thorough evaluation of your condition with immediate diagnosis and a clear treatment plan.",
      },
      {
        icon: ShieldCheck,
        title: "Professional Environment",
        desc: "Receive urgent care in a calm, private, and fully equipped medical clinic. Not a hectic ER.",
      },
      {
        icon: Zap,
        title: "Efficient Treatment",
        desc: "Focused 15-30 minute appointments designed to diagnose, treat, and get you back to feeling better fast.",
      },
    ],
    proceduresTitle: "Conditions We Treat",
    proceduresSubtitle:
      "A wide range of urgent, non-life-threatening conditions treated quickly and effectively.",
    procedures: [
      {
        title: "Infections & Fevers",
        desc: "Urinary tract infections, respiratory infections, sinusitis, ear infections, and unexplained fevers requiring prompt attention.",
      },
      {
        title: "Injuries & Wounds",
        desc: "Minor cuts requiring stitches, sprains, strains, minor burns, and other acute injuries that need immediate medical care.",
      },
      {
        title: "Allergic Reactions",
        desc: "Non-severe allergic reactions, skin rashes, hives, and allergic flare-ups requiring assessment and treatment.",
      },
      {
        title: "Digestive Issues",
        desc: "Acute stomach pain, nausea, vomiting, diarrhea, and other sudden gastrointestinal concerns.",
      },
      {
        title: "Skin Conditions",
        desc: "Abscesses, cyst complications, severe acne flare-ups, suspicious lesions, and other urgent dermatological concerns.",
      },
      {
        title: "Pain Management",
        desc: "Acute back pain, severe headaches, joint pain, and other sudden pain conditions requiring prompt medical evaluation.",
      },
    ],
    steps: [
      { step: 1, title: "Contact Us", desc: "Call or book online for a same-day appointment. We prioritize urgent cases for rapid access." },
      { step: 2, title: "Quick Assessment", desc: "Dr. Laurent evaluates your condition thoroughly, orders tests if needed, and provides a clear diagnosis." },
      { step: 3, title: "Immediate Treatment", desc: "Receive treatment on the spot. Prescriptions, procedures, or referrals as your situation requires." },
      { step: 4, title: "Follow-Up Plan", desc: "Clear discharge instructions and follow-up scheduling to ensure complete recovery." },
    ],
    testimonials: [
      {
        name: "Thomas K.",
        initial: "T",
        treatment: "Minor Emergency",
        text: "I had a severe infection and dreaded spending 8 hours in the ER. I called Dr. Laurent's clinic and was seen within the hour. Diagnosed, prescribed, and home in under 90 minutes. Incredible service.",
        rating: 5,
      },
      {
        name: "Julie M.",
        initial: "J",
        treatment: "Urgent Care",
        text: "My son had a deep cut that needed stitches. Instead of the ER, we came here and were treated immediately. Dr. Laurent was so gentle and professional. My son was brave and we were done in no time.",
        rating: 5,
      },
      {
        name: "Patrick H.",
        initial: "P",
        treatment: "Minor Emergency",
        text: "Woke up with severe back pain and couldn't move. Got a same-day appointment, received a thorough assessment, and walked out with a treatment plan. Worth every penny to avoid the ER.",
        rating: 5,
      },
    ],
    faqs: [
      {
        q: "What qualifies as a minor emergency?",
        a: "Minor emergencies include conditions that need prompt attention but are not life-threatening. Infections, minor wounds, allergic reactions, acute pain, digestive issues, and similar concerns. For chest pain, difficulty breathing, severe bleeding, or suspected stroke, call 911.",
      },
      {
        q: "How quickly can I be seen?",
        a: "We strive to offer same-day appointments for minor emergencies. Call us as early as possible for the best availability. In many cases, we can see you within hours of your call.",
      },
      {
        q: "How much does a minor emergency visit cost?",
        a: "A minor emergency consultation (1 reason, 15 min) is $175. Complex emergencies (2 reasons, 30 min) are $225, and complex emergencies (3 reasons max, 30 min) are $275. A $40 file opening fee applies for new patients.",
      },
      {
        q: "Can you do stitches and minor procedures?",
        a: "Yes. We perform stitches ($200), stitch removal ($10/stitch), cyst removal ($350), joint injections ($300), and other minor procedures right in our clinic.",
      },
      {
        q: "Do I need an appointment or can I walk in?",
        a: "We operate by appointment to minimize your wait time. However, we do our best to accommodate urgent walk-ins. We recommend calling ahead so we can prepare for your visit.",
      },
      {
        q: "Will you refer me to the ER if needed?",
        a: "Absolutely. If your condition requires emergency room care, imaging, or specialist intervention beyond what we can provide, Dr. Laurent will coordinate an appropriate referral and provide documentation to expedite your ER visit.",
      },
    ],
    formTitle: "Book Urgent Appointment",
    formOptions: [
      "Infection / Fever",
      "Injury / Wound",
      "Allergic Reaction",
      "Acute Pain",
      "Digestive Issue",
      "Other / Not Sure",
    ],
  },
  fr: {
    heroTitle: "Soins d'urgence",
    heroHighlight: "mineure",
    heroDescription:
      "Évitez les heures d'attente aux urgences. Obtenez des soins médicaux rapides et professionnels pour les préoccupations urgentes mais non mortelles, dans un cadre privé et confortable.",
    heroBadges: ["Accès rapide", "Pas de longue attente", "Soins professionnels"],
    heroImage: "https://drlaurentmedecineprivee.ca/assets/hero-medical-consultation-DPuVY465.jpg",
    whyTitle: "Pourquoi choisir Dr Laurent",
    whySubtitle:
      "Des soins urgents sans le chaos. Rendez-vous rapides, évaluations approfondies et traitement personnalisé.",
    features: [
      {
        icon: Clock,
        title: "Accès rapide",
        desc: "Rendez-vous le jour même disponibles pour les préoccupations urgentes. Plus besoin d'attendre des heures dans une salle d'urgence bondée.",
      },
      {
        icon: Activity,
        title: "Évaluation complète",
        desc: "Évaluation approfondie de votre condition avec un diagnostic immédiat et un plan de traitement clair.",
      },
      {
        icon: ShieldCheck,
        title: "Environnement professionnel",
        desc: "Recevez des soins urgents dans une clinique médicale calme, privée et entièrement équipée. Pas une urgence chaotique.",
      },
      {
        icon: Zap,
        title: "Traitement efficace",
        desc: "Rendez-vous ciblés de 15 à 30 minutes conçus pour diagnostiquer, traiter et vous remettre sur pied rapidement.",
      },
    ],
    proceduresTitle: "Conditions que nous traitons",
    proceduresSubtitle:
      "Un large éventail de conditions urgentes non mortelles traitées rapidement et efficacement.",
    procedures: [
      {
        title: "Infections et fièvres",
        desc: "Infections urinaires, infections respiratoires, sinusite, otites et fièvres inexpliquées nécessitant une attention rapide.",
      },
      {
        title: "Blessures et plaies",
        desc: "Coupures mineures nécessitant des points de suture, entorses, foulures, brûlures mineures et autres blessures aiguës nécessitant des soins médicaux immédiats.",
      },
      {
        title: "Réactions allergiques",
        desc: "Réactions allergiques non sévères, éruptions cutanées, urticaire et poussées allergiques nécessitant une évaluation et un traitement.",
      },
      {
        title: "Problèmes digestifs",
        desc: "Douleurs abdominales aiguës, nausées, vomissements, diarrhée et autres préoccupations gastro-intestinales soudaines.",
      },
      {
        title: "Conditions cutanées",
        desc: "Abcès, complications de kystes, poussées d'acné sévères, lésions suspectes et autres préoccupations dermatologiques urgentes.",
      },
      {
        title: "Gestion de la douleur",
        desc: "Douleur dorsale aiguë, maux de tête sévères, douleurs articulaires et autres conditions douloureuses soudaines nécessitant une évaluation médicale rapide.",
      },
    ],
    steps: [
      { step: 1, title: "Contactez-nous", desc: "Appelez ou réservez en ligne pour un rendez-vous le jour même. Nous priorisons les cas urgents pour un accès rapide." },
      { step: 2, title: "Évaluation rapide", desc: "Dr Laurent évalue votre condition en profondeur, demande des tests si nécessaire et fournit un diagnostic clair." },
      { step: 3, title: "Traitement immédiat", desc: "Recevez un traitement sur place. Prescriptions, procédures ou références selon votre situation." },
      { step: 4, title: "Plan de suivi", desc: "Instructions claires de sortie et planification de suivi pour assurer un rétablissement complet." },
    ],
    testimonials: [
      {
        name: "Thomas K.",
        initial: "T",
        treatment: "Urgence mineure",
        text: "J'avais une infection sévère et je redoutais de passer 8 heures aux urgences. J'ai appelé la clinique de Dr Laurent et j'ai été vu en moins d'une heure. Diagnostiqué, prescrit et à la maison en moins de 90 minutes. Service incroyable.",
        rating: 5,
      },
      {
        name: "Julie M.",
        initial: "J",
        treatment: "Soins urgents",
        text: "Mon fils avait une coupure profonde qui nécessitait des points de suture. Au lieu des urgences, nous sommes venus ici et avons été traités immédiatement. Dr Laurent était si doux et professionnel. Mon fils a été courageux et nous avions terminé en un rien de temps.",
        rating: 5,
      },
      {
        name: "Patrick H.",
        initial: "P",
        treatment: "Urgence mineure",
        text: "Je me suis réveillé avec une douleur dorsale sévère et ne pouvais pas bouger. J'ai obtenu un rendez-vous le jour même, reçu une évaluation approfondie et suis reparti avec un plan de traitement. Chaque dollar en vaut la peine pour éviter les urgences.",
        rating: 5,
      },
    ],
    faqs: [
      {
        q: "Qu'est-ce qui constitue une urgence mineure?",
        a: "Les urgences mineures incluent les conditions qui nécessitent une attention rapide mais qui ne sont pas mortelles. Infections, plaies mineures, réactions allergiques, douleur aiguë, problèmes digestifs et préoccupations similaires. Pour les douleurs thoraciques, les difficultés respiratoires, les saignements sévères ou un AVC suspecté, appelez le 911.",
      },
      {
        q: "En combien de temps puis-je être vu?",
        a: "Nous nous efforçons d'offrir des rendez-vous le jour même pour les urgences mineures. Appelez-nous le plus tôt possible pour la meilleure disponibilité. Dans bien des cas, nous pouvons vous voir dans les heures suivant votre appel.",
      },
      {
        q: "Combien coûte une visite d'urgence mineure?",
        a: "Une consultation d'urgence mineure (1 raison, 15 min) est à 175 $. Les urgences complexes (2 raisons, 30 min) sont à 225 $, et les urgences complexes (3 raisons max, 30 min) sont à 275 $. Des frais d'ouverture de dossier de 40 $ s'appliquent pour les nouveaux patients.",
      },
      {
        q: "Pouvez-vous faire des points de suture et des procédures mineures?",
        a: "Oui. Nous effectuons les points de suture (200 $), le retrait de points (10 $/point), l'excision de kystes (350 $), les injections articulaires (300 $) et d'autres procédures mineures directement dans notre clinique.",
      },
      {
        q: "Ai-je besoin d'un rendez-vous ou puis-je me présenter sans?",
        a: "Nous fonctionnons sur rendez-vous pour minimiser votre temps d'attente. Cependant, nous faisons de notre mieux pour accommoder les visites urgentes sans rendez-vous. Nous recommandons d'appeler à l'avance afin que nous puissions préparer votre visite.",
      },
      {
        q: "Allez-vous me diriger vers les urgences si nécessaire?",
        a: "Absolument. Si votre condition nécessite des soins à l'urgence, de l'imagerie ou une intervention spécialisée au-delà de ce que nous pouvons offrir, Dr Laurent coordonnera une référence appropriée et fournira la documentation pour accélérer votre visite aux urgences.",
      },
    ],
    formTitle: "Prendre un rendez-vous urgent",
    formOptions: [
      "Infection / Fièvre",
      "Blessure / Plaie",
      "Réaction allergique",
      "Douleur aiguë",
      "Problème digestif",
      "Autre / Pas certain",
    ],
  },
};

export function MinorEmergencyContent() {
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
