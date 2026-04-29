"use client";

import { ServicePageLayout } from "@/components/service-page-layout";
import { Stethoscope, Clock, ShieldCheck, Users } from "lucide-react";
import { useLocale } from "@/lib/locale";

const content = {
  en: {
    heroTitle: "Private Medical",
    heroHighlight: "Consultation",
    heroDescription:
      "Comprehensive, personalized medical consultations in a private setting. Dr. Laurent takes the time to listen, assess, and create a care plan tailored to your unique health needs.",
    heroBadges: ["Same-day availability", "Thorough assessment", "Confidential care"],
    heroImage: "https://drlaurentmedecineprivee.ca/assets/hero-medical-consultation-DPuVY465.jpg",
    whyTitle: "Why Choose Dr. Laurent",
    whySubtitle:
      "Experience healthcare the way it should be. Unhurried, thorough, and centered around you.",
    features: [
      {
        icon: Stethoscope,
        title: "Thorough Assessment",
        desc: "Comprehensive evaluations that go beyond surface-level symptoms to identify root causes and create effective treatment plans.",
      },
      {
        icon: Clock,
        title: "Unhurried Appointments",
        desc: "Generous appointment times so you never feel rushed. Your concerns deserve full attention and careful consideration.",
      },
      {
        icon: ShieldCheck,
        title: "Complete Confidentiality",
        desc: "Your health information is handled with the highest standards of privacy and discretion at every step.",
      },
      {
        icon: Users,
        title: "Patient-Centered Care",
        desc: "A welcoming, inclusive environment for patients of all ages and backgrounds, including the LGBTQIA2S+ community.",
      },
    ],
    proceduresTitle: "Our Consultation Services",
    proceduresSubtitle:
      "From urgent concerns to preventive health, we offer consultations tailored to your needs.",
    procedures: [
      {
        title: "General Medical Consultation",
        desc: "Address a wide range of health concerns with a comprehensive assessment, diagnosis, and personalized treatment plan.",
      },
      {
        title: "Preventive Health Screening",
        desc: "Proactive health evaluations including blood work analysis, risk factor assessment, and early detection strategies.",
      },
      {
        title: "Second Opinion",
        desc: "Receive an independent, thorough review of an existing diagnosis or treatment plan for added peace of mind.",
      },
      {
        title: "Referral Coordination",
        desc: "When specialized care is needed, Dr. Laurent coordinates referrals to trusted specialists and ensures continuity of care.",
      },
      {
        title: "Prescription Management",
        desc: "Review, renewal, and optimization of your current medications to ensure safety and effectiveness.",
      },
      {
        title: "Travel Medicine",
        desc: "Pre-travel health consultations including required vaccinations, preventive medications, and destination-specific health advice.",
      },
    ],
    steps: [
      { step: 1, title: "Book Your Appointment", desc: "Schedule online or by phone. Same-day and next-day appointments are often available." },
      { step: 2, title: "Initial Assessment", desc: "A thorough evaluation of your health history, current concerns, and overall wellness goals." },
      { step: 3, title: "Diagnosis & Plan", desc: "Clear explanation of findings with a personalized treatment or management plan." },
      { step: 4, title: "Follow-Up & Support", desc: "Ongoing care coordination, prescription management, and follow-up appointments as needed." },
    ],
    testimonials: [
      {
        name: "Sophie L.",
        initial: "S",
        treatment: "General Consultation",
        text: "Dr. Laurent took the time to truly listen and explain everything clearly. For the first time, I felt like my concerns were taken seriously. The experience was exceptional.",
        rating: 5,
      },
      {
        name: "Marc T.",
        initial: "M",
        treatment: "Preventive Screening",
        text: "The thoroughness of my consultation was impressive. Dr. Laurent identified issues my previous doctor had missed. I finally feel like I have a real healthcare partner.",
        rating: 5,
      },
      {
        name: "Isabelle R.",
        initial: "I",
        treatment: "Medical Consultation",
        text: "Private, professional, and genuinely caring. The clinic is beautiful and the staff made me feel welcome from the moment I walked in. Highly recommended.",
        rating: 5,
      },
    ],
    faqs: [
      {
        q: "What should I bring to my first consultation?",
        a: "Please bring a valid photo ID, your health insurance card (if applicable), a list of current medications, and any recent lab results or medical records relevant to your visit.",
      },
      {
        q: "How long is a typical consultation?",
        a: "Initial consultations are typically 30-45 minutes, allowing ample time for a thorough assessment. Follow-up appointments are usually 15-20 minutes depending on the complexity of your concerns.",
      },
      {
        q: "Do you accept health insurance?",
        a: "As a private clinic, fees are paid at the time of service. We provide detailed receipts that you can submit to your private insurance provider for reimbursement. Many plans cover private medical consultations.",
      },
      {
        q: "Can I book a same-day appointment?",
        a: "Yes, we often have same-day and next-day availability. Contact us by phone for the quickest scheduling, or book online to see available time slots.",
      },
      {
        q: "What is the cost of a consultation?",
        a: "Minor emergency consultations (15 min) start at $175. Complex consultations (30 min) range from $225 to $275 depending on the number of concerns addressed. A $40 file opening fee applies for new patients.",
      },
      {
        q: "Do you offer virtual consultations?",
        a: "Yes, telemedicine appointments are available for follow-ups and certain types of consultations. Contact us to determine if a virtual visit is appropriate for your needs.",
      },
    ],
    formTitle: "Book Your Consultation",
    formOptions: [
      "General Consultation",
      "Preventive Screening",
      "Second Opinion",
      "Prescription Renewal",
      "Other / Not Sure",
    ],
  },
  fr: {
    heroTitle: "Consultation médicale",
    heroHighlight: "privée",
    heroDescription:
      "Consultations médicales complètes et personnalisées en milieu privé. Dr Laurent prend le temps d'écouter, d'évaluer et de créer un plan de soins adapté à vos besoins de santé uniques.",
    heroBadges: ["Disponibilité le jour même", "Évaluation approfondie", "Soins confidentiels"],
    heroImage: "https://drlaurentmedecineprivee.ca/assets/hero-medical-consultation-DPuVY465.jpg",
    whyTitle: "Pourquoi choisir Dr Laurent",
    whySubtitle:
      "Vivez les soins de santé tels qu'ils devraient être. Sans précipitation, approfondis et centrés sur vous.",
    features: [
      {
        icon: Stethoscope,
        title: "Évaluation approfondie",
        desc: "Des évaluations complètes qui vont au-delà des symptômes superficiels pour identifier les causes profondes et créer des plans de traitement efficaces.",
      },
      {
        icon: Clock,
        title: "Rendez-vous sans précipitation",
        desc: "Des durées de rendez-vous généreuses pour que vous ne vous sentiez jamais pressé. Vos préoccupations méritent une attention complète et une considération attentive.",
      },
      {
        icon: ShieldCheck,
        title: "Confidentialité totale",
        desc: "Vos informations de santé sont traitées selon les normes les plus élevées de confidentialité et de discrétion à chaque étape.",
      },
      {
        icon: Users,
        title: "Soins centrés sur le patient",
        desc: "Un environnement accueillant et inclusif pour les patients de tous âges et de tous horizons, y compris la communauté LGBTQIA2S+.",
      },
    ],
    proceduresTitle: "Nos services de consultation",
    proceduresSubtitle:
      "Des préoccupations urgentes à la santé préventive, nous offrons des consultations adaptées à vos besoins.",
    procedures: [
      {
        title: "Consultation médicale générale",
        desc: "Abordez un large éventail de préoccupations de santé avec une évaluation complète, un diagnostic et un plan de traitement personnalisé.",
      },
      {
        title: "Bilan de santé préventif",
        desc: "Évaluations proactives de santé incluant l'analyse des bilans sanguins, l'évaluation des facteurs de risque et les stratégies de détection précoce.",
      },
      {
        title: "Deuxième avis",
        desc: "Recevez une révision indépendante et approfondie d'un diagnostic existant ou d'un plan de traitement pour plus de tranquillité d'esprit.",
      },
      {
        title: "Coordination des références",
        desc: "Lorsque des soins spécialisés sont nécessaires, Dr Laurent coordonne les références vers des spécialistes de confiance et assure la continuité des soins.",
      },
      {
        title: "Gestion des prescriptions",
        desc: "Révision, renouvellement et optimisation de vos médicaments actuels pour assurer leur sécurité et leur efficacité.",
      },
      {
        title: "Médecine de voyage",
        desc: "Consultations de santé pré-voyage incluant les vaccins requis, les médicaments préventifs et les conseils de santé spécifiques à la destination.",
      },
    ],
    steps: [
      { step: 1, title: "Prenez rendez-vous", desc: "Planifiez en ligne ou par téléphone. Des rendez-vous le jour même ou le lendemain sont souvent disponibles." },
      { step: 2, title: "Évaluation initiale", desc: "Une évaluation approfondie de votre historique de santé, de vos préoccupations actuelles et de vos objectifs de bien-être." },
      { step: 3, title: "Diagnostic et plan", desc: "Explication claire des résultats avec un plan de traitement ou de gestion personnalisé." },
      { step: 4, title: "Suivi et soutien", desc: "Coordination continue des soins, gestion des prescriptions et rendez-vous de suivi au besoin." },
    ],
    testimonials: [
      {
        name: "Sophie L.",
        initial: "S",
        treatment: "Consultation générale",
        text: "Dr Laurent a pris le temps de vraiment écouter et de tout expliquer clairement. Pour la première fois, j'ai senti que mes préoccupations étaient prises au sérieux. L'expérience était exceptionnelle.",
        rating: 5,
      },
      {
        name: "Marc T.",
        initial: "M",
        treatment: "Bilan préventif",
        text: "La rigueur de ma consultation était impressionnante. Dr Laurent a identifié des problèmes que mon médecin précédent avait manqués. Je sens enfin que j'ai un vrai partenaire de santé.",
        rating: 5,
      },
      {
        name: "Isabelle R.",
        initial: "I",
        treatment: "Consultation médicale",
        text: "Privé, professionnel et véritablement bienveillant. La clinique est magnifique et le personnel m'a fait sentir bienvenue dès mon arrivée. Hautement recommandé.",
        rating: 5,
      },
    ],
    faqs: [
      {
        q: "Que dois-je apporter à ma première consultation?",
        a: "Veuillez apporter une pièce d'identité avec photo, votre carte d'assurance maladie (le cas échéant), une liste de vos médicaments actuels et tout résultat de laboratoire ou dossier médical récent pertinent à votre visite.",
      },
      {
        q: "Quelle est la durée d'une consultation typique?",
        a: "Les consultations initiales durent généralement de 30 à 45 minutes, permettant amplement de temps pour une évaluation approfondie. Les rendez-vous de suivi durent habituellement de 15 à 20 minutes selon la complexité de vos préoccupations.",
      },
      {
        q: "Acceptez-vous les assurances santé?",
        a: "En tant que clinique privée, les frais sont payés au moment du service. Nous fournissons des reçus détaillés que vous pouvez soumettre à votre assureur privé pour remboursement. De nombreux régimes couvrent les consultations médicales privées.",
      },
      {
        q: "Puis-je prendre un rendez-vous le jour même?",
        a: "Oui, nous avons souvent des disponibilités le jour même et le lendemain. Contactez-nous par téléphone pour la planification la plus rapide, ou réservez en ligne pour voir les créneaux disponibles.",
      },
      {
        q: "Quel est le coût d'une consultation?",
        a: "Les consultations d'urgence mineure (15 min) débutent à 175 $. Les consultations complexes (30 min) varient de 225 $ à 275 $ selon le nombre de préoccupations abordées. Des frais d'ouverture de dossier de 40 $ s'appliquent pour les nouveaux patients.",
      },
      {
        q: "Offrez-vous des consultations virtuelles?",
        a: "Oui, des rendez-vous de télémédecine sont disponibles pour les suivis et certains types de consultations. Contactez-nous pour déterminer si une visite virtuelle est appropriée pour vos besoins.",
      },
    ],
    formTitle: "Réservez votre consultation",
    formOptions: [
      "Consultation générale",
      "Bilan préventif",
      "Deuxième avis",
      "Renouvellement d'ordonnance",
      "Autre / Pas certain",
    ],
  },
};

export function ConsultationContent() {
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
