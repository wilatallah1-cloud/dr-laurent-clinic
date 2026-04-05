"use client";

import { ServicePageLayout } from "@/components/service-page-layout";
import { Heart, Users, Baby, ShieldCheck } from "lucide-react";
import { useLocale } from "@/lib/locale";

const content = {
  en: {
    heroTitle: "Comprehensive Family",
    heroHighlight: "Medicine",
    heroDescription:
      "Primary care for patients of all ages — from newborns to seniors — delivered in an inclusive environment that warmly welcomes every member of your family, including transgender and gender-diverse individuals.",
    heroBadges: ["All ages welcome", "Inclusive care", "Annual exams"],
    heroImage: "https://drlaurentmedecineprivee.ca/assets/hero-medical-consultation-DPuVY465.jpg",
    whyTitle: "Why Choose Dr. Laurent",
    whySubtitle:
      "A family doctor who knows your history, understands your needs, and is available when you need care.",
    features: [
      {
        icon: Heart,
        title: "Compassionate Approach",
        desc: "Genuine care built on trust, empathy, and a deep commitment to your family's long-term health and well-being.",
      },
      {
        icon: Users,
        title: "Care for All Ages",
        desc: "From pediatric check-ups to senior wellness — one trusted physician for every member of your family.",
      },
      {
        icon: Baby,
        title: "Pediatric Expertise",
        desc: "Specialized knowledge in children's health, including developmental milestones, vaccinations, and common childhood conditions.",
      },
      {
        icon: ShieldCheck,
        title: "Inclusive & Safe",
        desc: "A proudly inclusive clinic providing respectful, affirming care for the LGBTQIA2S+ community and gender-diverse individuals.",
      },
    ],
    proceduresTitle: "Our Family Medicine Services",
    proceduresSubtitle:
      "Comprehensive primary care services designed to keep your entire family healthy.",
    procedures: [
      {
        title: "Adult Intake & Annual Exams",
        desc: "Thorough annual physical examinations including health risk assessments, blood work, and preventive screenings for adults.",
      },
      {
        title: "Pediatric Care",
        desc: "Well-child visits, vaccinations, growth monitoring, and treatment for common childhood illnesses and conditions.",
      },
      {
        title: "Chronic Disease Management",
        desc: "Ongoing management of diabetes, hypertension, asthma, thyroid disorders, and other chronic conditions with regular monitoring.",
      },
      {
        title: "Women's Health",
        desc: "PAP tests, IUD insertion and removal, contraception counseling, and reproductive health consultations.",
      },
      {
        title: "Medical Procedures",
        desc: "In-office procedures including cyst removal, stitches, joint injections, ear cleaning, and minor surgical interventions.",
      },
      {
        title: "Documents & Certificates",
        desc: "Work leave certificates, SAAQ documents, parking permits, prescription renewals, and medical document completion.",
      },
    ],
    steps: [
      { step: 1, title: "New Patient Intake", desc: "A comprehensive 45-minute appointment to review your complete health history and establish your care plan." },
      { step: 2, title: "Personalized Care Plan", desc: "Based on your health profile, we develop a tailored approach to preventive care and any active concerns." },
      { step: 3, title: "Ongoing Follow-Ups", desc: "Regular follow-up appointments to monitor your health, adjust treatments, and address new concerns as they arise." },
      { step: 4, title: "Coordinated Care", desc: "Referrals to specialists when needed, with full coordination to ensure seamless continuity of care." },
    ],
    testimonials: [
      {
        name: "Catherine B.",
        initial: "C",
        treatment: "Family Medicine",
        text: "Finally found a family doctor who truly cares. Dr. Laurent sees both me and my children, and the level of attention we receive is remarkable. No more waiting months for an appointment.",
        rating: 5,
      },
      {
        name: "François D.",
        initial: "F",
        treatment: "Annual Exam",
        text: "My annual exam was the most thorough I've ever had. Dr. Laurent caught an issue that had been overlooked for years. I'm grateful for his diligence and expertise.",
        rating: 5,
      },
      {
        name: "Amélie G.",
        initial: "A",
        treatment: "Pediatric Care",
        text: "Dr. Laurent is wonderful with my kids. He's patient, kind, and explains everything in a way that puts both parents and children at ease. We feel so lucky to have found this clinic.",
        rating: 5,
      },
    ],
    faqs: [
      {
        q: "What ages do you treat?",
        a: "We provide care for patients of all ages, from newborns to seniors. Whether you need pediatric care for your children or health management for elderly family members, we are here for your entire family.",
      },
      {
        q: "How much does a family medicine appointment cost?",
        a: "Adult intake appointments (45 min) are $350. Follow-ups (20 min, 2 reasons) are $200. Pediatric intake (30 min) is $300, and pediatric follow-ups (20 min) are $150. Annual exams (45 min) are $350. A $40 file opening fee applies for new patients.",
      },
      {
        q: "Can Dr. Laurent be my family doctor?",
        a: "Yes. Dr. Laurent accepts new patients as their primary care physician. As a private clinic, there are no waitlists — you can begin receiving care right away with prompt appointment availability.",
      },
      {
        q: "Do you provide vaccinations?",
        a: "Yes, we provide standard vaccinations for both children and adults, including routine immunizations, travel vaccines, and flu shots. Contact us to confirm specific vaccine availability.",
      },
      {
        q: "Can you handle medical procedures in-office?",
        a: "Yes. We perform cyst removal ($350), stitches ($200), joint injections ($300), IUD insertion ($250) and removal ($150), PAP tests ($150), ear cleaning ($80), and other minor procedures.",
      },
      {
        q: "Is the clinic LGBTQIA2S+ friendly?",
        a: "Absolutely. Our clinic proudly provides safe, respectful, and fully inclusive care for all members of the LGBTQIA2S+ community, including transgender and gender-diverse individuals.",
      },
    ],
    formTitle: "Book Your Appointment",
    formOptions: [
      "Adult Intake",
      "Pediatric Visit",
      "Annual Exam",
      "Follow-Up Appointment",
      "Medical Procedure",
      "Other / Not Sure",
    ],
  },
  fr: {
    heroTitle: "Médecine familiale",
    heroHighlight: "complète",
    heroDescription:
      "Soins primaires pour les patients de tous âges — des nouveau-nés aux aînés — dans un environnement inclusif qui accueille chaleureusement chaque membre de votre famille, y compris les personnes transgenres et de genres diversifiés.",
    heroBadges: ["Tous les âges bienvenus", "Soins inclusifs", "Examens annuels"],
    heroImage: "https://drlaurentmedecineprivee.ca/assets/hero-medical-consultation-DPuVY465.jpg",
    whyTitle: "Pourquoi choisir Dr Laurent",
    whySubtitle:
      "Un médecin de famille qui connaît votre historique, comprend vos besoins et est disponible quand vous avez besoin de soins.",
    features: [
      {
        icon: Heart,
        title: "Approche compatissante",
        desc: "Des soins authentiques fondés sur la confiance, l'empathie et un engagement profond envers la santé et le bien-être à long terme de votre famille.",
      },
      {
        icon: Users,
        title: "Soins pour tous les âges",
        desc: "Des bilans pédiatriques au bien-être des aînés — un seul médecin de confiance pour chaque membre de votre famille.",
      },
      {
        icon: Baby,
        title: "Expertise pédiatrique",
        desc: "Connaissances spécialisées en santé infantile, incluant les étapes de développement, les vaccinations et les conditions courantes de l'enfance.",
      },
      {
        icon: ShieldCheck,
        title: "Inclusif et sécuritaire",
        desc: "Une clinique fièrement inclusive offrant des soins respectueux et affirmatifs pour la communauté LGBTQIA2S+ et les personnes de genres diversifiés.",
      },
    ],
    proceduresTitle: "Nos services de médecine familiale",
    proceduresSubtitle:
      "Des services de soins primaires complets conçus pour garder toute votre famille en santé.",
    procedures: [
      {
        title: "Prise en charge adulte et examens annuels",
        desc: "Examens physiques annuels approfondis incluant l'évaluation des risques de santé, les bilans sanguins et les dépistages préventifs pour adultes.",
      },
      {
        title: "Soins pédiatriques",
        desc: "Visites de bien-être infantile, vaccinations, suivi de croissance et traitement des maladies et conditions courantes de l'enfance.",
      },
      {
        title: "Gestion des maladies chroniques",
        desc: "Gestion continue du diabète, de l'hypertension, de l'asthme, des troubles thyroïdiens et d'autres conditions chroniques avec suivi régulier.",
      },
      {
        title: "Santé des femmes",
        desc: "Tests PAP, insertion et retrait de stérilet, counseling en contraception et consultations en santé reproductive.",
      },
      {
        title: "Procédures médicales",
        desc: "Procédures en cabinet incluant l'excision de kystes, les points de suture, les injections articulaires, le nettoyage d'oreilles et les interventions chirurgicales mineures.",
      },
      {
        title: "Documents et certificats",
        desc: "Certificats d'arrêt de travail, documents SAAQ, permis de stationnement, renouvellements d'ordonnances et complétion de documents médicaux.",
      },
    ],
    steps: [
      { step: 1, title: "Prise en charge initiale", desc: "Un rendez-vous complet de 45 minutes pour examiner votre historique de santé complet et établir votre plan de soins." },
      { step: 2, title: "Plan de soins personnalisé", desc: "En fonction de votre profil de santé, nous développons une approche sur mesure pour les soins préventifs et toute préoccupation active." },
      { step: 3, title: "Suivis réguliers", desc: "Des rendez-vous de suivi réguliers pour surveiller votre santé, ajuster les traitements et aborder les nouvelles préoccupations." },
      { step: 4, title: "Soins coordonnés", desc: "Références vers des spécialistes au besoin, avec une coordination complète pour assurer une continuité des soins sans faille." },
    ],
    testimonials: [
      {
        name: "Catherine B.",
        initial: "C",
        treatment: "Médecine familiale",
        text: "J'ai enfin trouvé un médecin de famille qui se soucie vraiment. Dr Laurent me suit, moi et mes enfants, et le niveau d'attention que nous recevons est remarquable. Plus besoin d'attendre des mois pour un rendez-vous.",
        rating: 5,
      },
      {
        name: "François D.",
        initial: "F",
        treatment: "Examen annuel",
        text: "Mon examen annuel a été le plus approfondi que j'aie jamais eu. Dr Laurent a détecté un problème qui avait été négligé pendant des années. Je suis reconnaissant de sa diligence et de son expertise.",
        rating: 5,
      },
      {
        name: "Amélie G.",
        initial: "A",
        treatment: "Soins pédiatriques",
        text: "Dr Laurent est merveilleux avec mes enfants. Il est patient, gentil et explique tout d'une manière qui met à l'aise tant les parents que les enfants. Nous nous sentons très chanceux d'avoir trouvé cette clinique.",
        rating: 5,
      },
    ],
    faqs: [
      {
        q: "Quels âges traitez-vous?",
        a: "Nous offrons des soins aux patients de tous âges, des nouveau-nés aux aînés. Que vous ayez besoin de soins pédiatriques pour vos enfants ou de gestion de santé pour les membres âgés de votre famille, nous sommes là pour toute votre famille.",
      },
      {
        q: "Combien coûte un rendez-vous en médecine familiale?",
        a: "Les rendez-vous de prise en charge adulte (45 min) sont à 350 $. Les suivis (20 min, 2 raisons) sont à 200 $. La prise en charge pédiatrique (30 min) est à 300 $, et les suivis pédiatriques (20 min) sont à 150 $. Les examens annuels (45 min) sont à 350 $. Des frais d'ouverture de dossier de 40 $ s'appliquent pour les nouveaux patients.",
      },
      {
        q: "Dr Laurent peut-il être mon médecin de famille?",
        a: "Oui. Dr Laurent accepte de nouveaux patients comme médecin de soins primaires. En tant que clinique privée, il n'y a pas de liste d'attente — vous pouvez commencer à recevoir des soins immédiatement avec une disponibilité rapide de rendez-vous.",
      },
      {
        q: "Offrez-vous des vaccinations?",
        a: "Oui, nous offrons les vaccinations standards pour les enfants et les adultes, incluant les immunisations de routine, les vaccins de voyage et les vaccins antigrippaux. Contactez-nous pour confirmer la disponibilité de vaccins spécifiques.",
      },
      {
        q: "Pouvez-vous effectuer des procédures médicales en cabinet?",
        a: "Oui. Nous effectuons l'excision de kystes (350 $), les points de suture (200 $), les injections articulaires (300 $), l'insertion de stérilet (250 $) et le retrait (150 $), les tests PAP (150 $), le nettoyage d'oreilles (80 $) et d'autres procédures mineures.",
      },
      {
        q: "La clinique est-elle accueillante pour la communauté LGBTQIA2S+?",
        a: "Absolument. Notre clinique offre fièrement des soins sécuritaires, respectueux et entièrement inclusifs pour tous les membres de la communauté LGBTQIA2S+, y compris les personnes transgenres et de genres diversifiés.",
      },
    ],
    formTitle: "Prendre rendez-vous",
    formOptions: [
      "Prise en charge adulte",
      "Visite pédiatrique",
      "Examen annuel",
      "Rendez-vous de suivi",
      "Procédure médicale",
      "Autre / Pas certain",
    ],
  },
};

export function FamilyMedicineContent() {
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
