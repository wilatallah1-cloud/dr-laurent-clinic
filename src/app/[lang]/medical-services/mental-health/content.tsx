"use client";

import { ServicePageLayout } from "@/components/service-page-layout";
import { Brain, Heart, ShieldCheck, Users } from "lucide-react";
import { useLocale } from "@/lib/locale";

const content = {
  en: {
    heroTitle: "Mental Health",
    heroHighlight: "Support",
    heroDescription:
      "Compassionate, judgment-free mental health consultations in a private setting. From ADHD evaluations to anxiety and depression management, Dr. Laurent provides the support you deserve.",
    heroBadges: ["ADHD evaluations", "Medication management", "Confidential care"],
    heroImage: "https://drlaurentmedecineprivee.ca/assets/hero-medical-consultation-DPuVY465.jpg",
    whyTitle: "Why Choose Dr. Laurent",
    whySubtitle:
      "Mental health care delivered with empathy, expertise, and complete confidentiality.",
    features: [
      {
        icon: Brain,
        title: "Expert Assessment",
        desc: "Thorough mental health evaluations using evidence-based approaches to accurately identify conditions and guide treatment.",
      },
      {
        icon: Heart,
        title: "Compassionate Care",
        desc: "A warm, empathetic approach that makes you feel heard, understood, and supported at every stage of your journey.",
      },
      {
        icon: ShieldCheck,
        title: "Complete Confidentiality",
        desc: "Your mental health is deeply personal. We maintain the highest standards of privacy and discretion in every interaction.",
      },
      {
        icon: Users,
        title: "Inclusive Environment",
        desc: "A safe, affirming space for everyone. Including the LGBTQIA2S+ community. Where you can speak openly without fear of judgment.",
      },
    ],
    proceduresTitle: "Our Mental Health Services",
    proceduresSubtitle:
      "Comprehensive mental health support from initial assessment through ongoing management.",
    procedures: [
      {
        title: "ADHD Evaluation",
        desc: "Comprehensive ADHD assessments for patients 12 and older using validated screening tools, clinical interview, and pre-filled evaluation forms.",
      },
      {
        title: "Anxiety & Depression",
        desc: "Assessment and treatment of generalized anxiety, panic disorder, social anxiety, major depression, and related mood disorders.",
      },
      {
        title: "Medication Management",
        desc: "Careful prescription and monitoring of psychiatric medications with regular follow-ups to optimize dosage and minimize side effects.",
      },
      {
        title: "Burnout & Stress",
        desc: "Evaluation and management of work-related burnout, chronic stress, and adjustment disorders with practical treatment strategies.",
      },
      {
        title: "Sleep Disorders",
        desc: "Assessment of insomnia, sleep disturbances, and sleep-related anxiety with evidence-based treatment approaches.",
      },
      {
        title: "Work Leave Documentation",
        desc: "Medical documentation for work leave, disability claims, and workplace accommodations when mental health conditions require time off.",
      },
    ],
    steps: [
      { step: 1, title: "Initial Consultation", desc: "A 45-minute comprehensive assessment of your mental health history, current symptoms, and treatment goals." },
      { step: 2, title: "Diagnosis & Plan", desc: "Clear explanation of findings with a personalized treatment plan that may include medication, lifestyle changes, and referrals." },
      { step: 3, title: "Treatment & Monitoring", desc: "Regular 35-minute follow-up appointments to monitor progress, adjust medications, and refine your care plan." },
      { step: 4, title: "Ongoing Support", desc: "Continued care with accessible follow-ups, prescription management, and coordination with therapists or specialists as needed." },
    ],
    testimonials: [
      {
        name: "Alexandre P.",
        initial: "A",
        treatment: "ADHD Evaluation",
        text: "After years of struggling, I finally got a proper ADHD assessment. Dr. Laurent was thorough, compassionate, and didn't rush me. Getting the right diagnosis changed everything for me.",
        rating: 5,
      },
      {
        name: "Marie-Claude S.",
        initial: "M",
        treatment: "Anxiety Treatment",
        text: "I was hesitant to seek help for my anxiety, but Dr. Laurent made me feel completely at ease. The treatment plan has been transformative. I finally feel like myself again.",
        rating: 5,
      },
      {
        name: "Jonathan L.",
        initial: "J",
        treatment: "Depression Management",
        text: "Dr. Laurent listens with genuine empathy and takes the time to explain every treatment option. I felt respected and supported from day one. I can't recommend this clinic enough.",
        rating: 5,
      },
    ],
    faqs: [
      {
        q: "What does a mental health consultation involve?",
        a: "The initial consultation (45 minutes) includes a comprehensive review of your mental health history, current symptoms, lifestyle factors, and treatment goals. Dr. Laurent may use validated screening tools and will discuss diagnosis and treatment options with you.",
      },
      {
        q: "How much does a mental health consultation cost?",
        a: "Initial mental health consultations (45 min) are $350. Follow-up appointments (35 min) are $250. ADHD evaluations (with pre-filled form) are $750, and ADHD follow-ups (30 min) are $250. A $40 file opening fee applies for new patients.",
      },
      {
        q: "Can Dr. Laurent prescribe psychiatric medication?",
        a: "Yes. As a licensed physician, Dr. Laurent can prescribe and manage psychiatric medications including antidepressants, anxiolytics, ADHD medications, and sleep aids. Regular follow-ups ensure optimal dosing and minimal side effects.",
      },
      {
        q: "How long before I notice improvement?",
        a: "This varies by condition and treatment. Some patients notice improvements within days of starting medication, while others may take 4-6 weeks for full effects. Dr. Laurent will set clear expectations and monitor your progress closely.",
      },
      {
        q: "Do you provide therapy or counseling?",
        a: "Dr. Laurent provides medical mental health care, including diagnosis, medication management, and supportive guidance. For ongoing psychotherapy, he can refer you to trusted psychologists and therapists while continuing to manage your medical treatment.",
      },
      {
        q: "Can I get a work leave certificate for mental health?",
        a: "Yes. When a mental health condition requires time away from work, Dr. Laurent can provide medical documentation including work leave certificates ($75) and other required forms for your employer or insurance provider.",
      },
    ],
    formTitle: "Book Your Consultation",
    formOptions: [
      "ADHD Evaluation",
      "Anxiety / Depression",
      "Medication Management",
      "Burnout / Stress",
      "Sleep Issues",
      "Other / Not Sure",
    ],
  },
  fr: {
    heroTitle: "Soutien en",
    heroHighlight: "santé mentale",
    heroDescription:
      "Des consultations en santé mentale empreintes de compassion et sans jugement, dans un cadre privé. Des évaluations du TDAH à la gestion de l'anxiété et de la dépression, Dr Laurent offre le soutien que vous méritez.",
    heroBadges: ["Évaluations du TDAH", "Gestion de la médication", "Soins confidentiels"],
    heroImage: "https://drlaurentmedecineprivee.ca/assets/hero-medical-consultation-DPuVY465.jpg",
    whyTitle: "Pourquoi choisir Dr Laurent",
    whySubtitle:
      "Des soins en santé mentale offerts avec empathie, expertise et une confidentialité totale.",
    features: [
      {
        icon: Brain,
        title: "Évaluation experte",
        desc: "Évaluations approfondies de la santé mentale utilisant des approches fondées sur les données probantes pour identifier les conditions avec précision et guider le traitement.",
      },
      {
        icon: Heart,
        title: "Soins compatissants",
        desc: "Une approche chaleureuse et empathique qui vous fait sentir écouté, compris et soutenu à chaque étape de votre parcours.",
      },
      {
        icon: ShieldCheck,
        title: "Confidentialité totale",
        desc: "Votre santé mentale est profondément personnelle. Nous maintenons les normes les plus élevées de confidentialité et de discrétion dans chaque interaction.",
      },
      {
        icon: Users,
        title: "Environnement inclusif",
        desc: "Un espace sécuritaire et affirmatif pour tous. Y compris la communauté LGBTQIA2S+. Où vous pouvez vous exprimer librement sans crainte de jugement.",
      },
    ],
    proceduresTitle: "Nos services en santé mentale",
    proceduresSubtitle:
      "Un soutien complet en santé mentale, de l'évaluation initiale à la gestion continue.",
    procedures: [
      {
        title: "Évaluation du TDAH",
        desc: "Évaluations complètes du TDAH pour les patients de 12 ans et plus à l'aide d'outils de dépistage validés, d'entrevues cliniques et de formulaires d'évaluation pré-remplis.",
      },
      {
        title: "Anxiété et dépression",
        desc: "Évaluation et traitement de l'anxiété généralisée, du trouble panique, de l'anxiété sociale, de la dépression majeure et des troubles de l'humeur associés.",
      },
      {
        title: "Gestion de la médication",
        desc: "Prescription et suivi attentifs des médicaments psychiatriques avec des suivis réguliers pour optimiser le dosage et minimiser les effets secondaires.",
      },
      {
        title: "Épuisement professionnel et stress",
        desc: "Évaluation et gestion de l'épuisement professionnel, du stress chronique et des troubles de l'adaptation avec des stratégies de traitement pratiques.",
      },
      {
        title: "Troubles du sommeil",
        desc: "Évaluation de l'insomnie, des perturbations du sommeil et de l'anxiété liée au sommeil avec des approches de traitement fondées sur les données probantes.",
      },
      {
        title: "Documentation pour arrêt de travail",
        desc: "Documentation médicale pour les arrêts de travail, les demandes d'invalidité et les accommodements en milieu de travail lorsque les conditions de santé mentale nécessitent un congé.",
      },
    ],
    steps: [
      { step: 1, title: "Consultation initiale", desc: "Une évaluation complète de 45 minutes de votre historique de santé mentale, de vos symptômes actuels et de vos objectifs de traitement." },
      { step: 2, title: "Diagnostic et plan", desc: "Explication claire des résultats avec un plan de traitement personnalisé pouvant inclure la médication, des changements de mode de vie et des références." },
      { step: 3, title: "Traitement et suivi", desc: "Des rendez-vous de suivi réguliers de 35 minutes pour suivre les progrès, ajuster la médication et affiner votre plan de soins." },
      { step: 4, title: "Soutien continu", desc: "Des soins continus avec des suivis accessibles, la gestion des prescriptions et la coordination avec des thérapeutes ou spécialistes au besoin." },
    ],
    testimonials: [
      {
        name: "Alexandre P.",
        initial: "A",
        treatment: "Évaluation du TDAH",
        text: "Après des années de difficultés, j'ai enfin obtenu une évaluation adéquate du TDAH. Dr Laurent a été rigoureux, compatissant et ne m'a pas pressé. Obtenir le bon diagnostic a tout changé pour moi.",
        rating: 5,
      },
      {
        name: "Marie-Claude S.",
        initial: "M",
        treatment: "Traitement de l'anxiété",
        text: "J'hésitais à chercher de l'aide pour mon anxiété, mais Dr Laurent m'a mise complètement à l'aise. Le plan de traitement a été transformateur. Je me sens enfin moi-même à nouveau.",
        rating: 5,
      },
      {
        name: "Jonathan L.",
        initial: "J",
        treatment: "Gestion de la dépression",
        text: "Dr Laurent écoute avec une empathie sincère et prend le temps d'expliquer chaque option de traitement. Je me suis senti respecté et soutenu dès le premier jour. Je ne peux pas assez recommander cette clinique.",
        rating: 5,
      },
    ],
    faqs: [
      {
        q: "En quoi consiste une consultation en santé mentale?",
        a: "La consultation initiale (45 minutes) comprend une révision complète de votre historique de santé mentale, de vos symptômes actuels, de vos facteurs de mode de vie et de vos objectifs de traitement. Dr Laurent peut utiliser des outils de dépistage validés et discutera du diagnostic et des options de traitement avec vous.",
      },
      {
        q: "Combien coûte une consultation en santé mentale?",
        a: "Les consultations initiales en santé mentale (45 min) sont à 350 $. Les rendez-vous de suivi (35 min) sont à 250 $. Les évaluations du TDAH (avec formulaire pré-rempli) sont à 750 $, et les suivis TDAH (30 min) sont à 250 $. Des frais d'ouverture de dossier de 40 $ s'appliquent pour les nouveaux patients.",
      },
      {
        q: "Dr Laurent peut-il prescrire des médicaments psychiatriques?",
        a: "Oui. En tant que médecin autorisé, Dr Laurent peut prescrire et gérer les médicaments psychiatriques, y compris les antidépresseurs, les anxiolytiques, les médicaments pour le TDAH et les somnifères. Des suivis réguliers assurent un dosage optimal et des effets secondaires minimaux.",
      },
      {
        q: "En combien de temps vais-je remarquer une amélioration?",
        a: "Cela varie selon la condition et le traitement. Certains patients remarquent des améliorations dans les jours suivant le début de la médication, tandis que d'autres peuvent prendre de 4 à 6 semaines pour ressentir les effets complets. Dr Laurent fixera des attentes claires et suivra vos progrès de près.",
      },
      {
        q: "Offrez-vous de la thérapie ou du counseling?",
        a: "Dr Laurent offre des soins médicaux en santé mentale, incluant le diagnostic, la gestion de la médication et le soutien. Pour la psychothérapie continue, il peut vous référer à des psychologues et thérapeutes de confiance tout en continuant à gérer votre traitement médical.",
      },
      {
        q: "Puis-je obtenir un certificat d'arrêt de travail pour la santé mentale?",
        a: "Oui. Lorsqu'une condition de santé mentale nécessite un temps d'absence du travail, Dr Laurent peut fournir la documentation médicale, incluant les certificats d'arrêt de travail (75 $) et les autres formulaires requis pour votre employeur ou assureur.",
      },
    ],
    formTitle: "Réservez votre consultation",
    formOptions: [
      "Évaluation du TDAH",
      "Anxiété / Dépression",
      "Gestion de la médication",
      "Épuisement / Stress",
      "Troubles du sommeil",
      "Autre / Pas certain",
    ],
  },
};

export function MentalHealthContent() {
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
