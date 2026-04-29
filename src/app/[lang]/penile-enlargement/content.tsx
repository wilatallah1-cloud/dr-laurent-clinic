"use client";

import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { FooterSection } from "@/components/sections/footer";
import { LeadForm } from "@/components/lead-form";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/motion";
import {
  Phone,
  Calendar,
  CheckCircle,
  Star,
  Quote,
  ArrowRight,
  Shield,
  Lock,
  Award,
  Clock,
  Eye,
  EyeOff,
  Sparkles,
  TrendingUp,
  HeartPulse,
  X,
  AlertTriangle,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "@/components/locale-link";
import { useLocale } from "@/lib/locale";

const content = {
  en: {
    eyebrow: "NON-SURGICAL PENILE ENLARGEMENT IN LAVAL",
    heroTitle: "A bigger, thicker,",
    heroHighlight: "more confident you.",
    heroSub:
      "Walk-in, walk-out enhancement program performed by Dr. Laurent. Premium dermal fillers, PRP regenerative therapy, and combined protocols. Results you can see immediately.",
    heroCTAprimary: "Book a Discreet Consultation",
    heroCTAsecondary: "Call (514) 500-3422",
    pricingAnchor: "Programs from $3,000",
    stats: [
      { value: "1,000+", label: "Procedures Performed" },
      { value: "4.9★", label: "Patient Rated" },
      { value: "<60 min", label: "Procedure Time" },
      { value: "Same-day", label: "Consults Available" },
    ],
    badges: [
      "Board-certified physician",
      "FDA-approved fillers",
      "Total privacy",
      "In-person or virtual",
    ],
    formTitle: "Get Your Private Consultation",
    formSub: "30 seconds. Confidential. No commitment.",
    formNameLabel: "Full Name",
    formPhoneLabel: "Phone Number",
    formEmailLabel: "Email (optional)",
    formInterestLabel: "Treatment You're Considering",
    formSubmit: "Book My Private Consultation",
    formDisclaimer: "Your information is encrypted and never shared.",
    interestOptions: [
      "Not sure - I want to discuss",
      "Dermal Filler Enhancement",
      "PRP Regenerative Therapy",
      "Combination Program (Filler + PRP)",
      "Glans Enhancement",
      "Penile Botox",
      "Scrotox / Grotox",
    ],
    benefitsTitle: "Why patients trust Dr. Laurent",
    benefitsSub:
      "Medical excellence, total discretion, and a private clinic built around you.",
    doctorName: "Dr. Jean-Baptiste Laurent",
    doctorRole: "Medical Aesthetic Physician",
    doctorBlurb:
      "Trained in advanced injectable techniques and male enhancement protocols. Every penile filler, PRP session, and Botox add-on is performed personally by Dr. Laurent. Precision of a physician, eye of an aesthetic artist, on one of the most discreet procedures we offer.",
    doctorStats: [
      { value: "15+", label: "Years" },
      { value: "5000+", label: "Procedures" },
      { value: "100%", label: "Discreet" },
    ],
    features: [
      {
        icon: Award,
        title: "Board-Certified Physician",
        desc: "Procedures performed personally by Dr. Laurent, with specialized training in male enhancement and medical aesthetic techniques.",
      },
      {
        icon: Shield,
        title: "Premium FDA-Approved Fillers",
        desc: "Hyaluronic acid and calcium-hydroxylapatite formulations selected for natural feel, longevity, and clinical safety.",
      },
      {
        icon: Lock,
        title: "Total Privacy & Discretion",
        desc: "Private consultation rooms, confidential records, and a small medical team. What happens at the clinic stays at the clinic.",
      },
      {
        icon: Clock,
        title: "Lunchtime Procedure",
        desc: "Most treatments completed in under an hour. Most patients return to work or school the next day.",
      },
    ],
    proceduresTitle: "Three core treatment paths",
    proceduresSub:
      "Dr. Laurent designs a plan based on your anatomy, goals, and lifestyle. Every plan is private and personal.",
    procedures: [
      {
        icon: Sparkles,
        title: "Dermal Filler Enhancement",
        bullet: "Immediate Visible Girth Gain",
        desc: "Premium hyaluronic acid filler injected with a microcannula for a firmer, smoother, more natural result. Lasts 12 to 24 months.",
      },
      {
        icon: HeartPulse,
        title: "PRP Regenerative Therapy",
        bullet: "Stronger Erections + Length Potential",
        desc: "Platelet-rich plasma drawn from your own blood, combined with a 6-week pump program. Promotes nerve and tissue regeneration.",
      },
      {
        icon: TrendingUp,
        title: "Combination Program",
        bullet: "Maximum Result, Inside-Out",
        desc: "PRP + pumping for 6 weeks, followed by dermal filler placement. The most comprehensive option for patients who want everything.",
      },
      {
        icon: Sparkles,
        title: "Glans Enhancement",
        bullet: "Better Proportion + PE Support",
        desc: "Hyaluronic acid into the head of the penis to maintain symmetry. Many patients also report reduced sensitivity and longer intercourse.",
      },
      {
        icon: Shield,
        title: "Penile Botox",
        bullet: "Reduces Flaccid Retraction",
        desc: "For men whose penis retracts when flaccid. Targeted neuromodulator so the resting penis presents larger and more confidently.",
      },
      {
        icon: Sparkles,
        title: "Scrotox / Grotox Add-On",
        bullet: "Smoother, Fuller, More Refined",
        desc: "Botox into the scrotum to smooth wrinkles, improve hang, and reduce sweat. Often added to a primary enlargement program.",
      },
    ],
    pricingTitle: "Transparent program pricing",
    pricingSub:
      "Choose the level that matches your goals. Every program includes Dr. Laurent's complete care, follow-up, and discretion.",
    tiers: [
      {
        name: "Touchup",
        volume: "6 ml",
        price: "$3,000",
        bullets: [
          "Entry-level enhancement",
          "Subtle, natural result",
          "Single session",
        ],
        highlight: false,
      },
      {
        name: "Silver",
        volume: "12 ml",
        price: "$6,000",
        bullets: [
          "Standard enhancement program",
          "Visible result, balanced approach",
          "Most chosen by first-time patients",
        ],
        highlight: false,
      },
      {
        name: "Gold",
        volume: "18 ml",
        price: "$9,000",
        bullets: [
          "Premium enhancement",
          "Strong, defined result",
          "Includes refinement session",
        ],
        highlight: true,
        badge: "Most Popular",
      },
      {
        name: "Platinum",
        volume: "24 ml",
        price: "$12,000",
        bullets: [
          "Maximum enhancement",
          "Comprehensive transformation",
          "Includes full refinement protocol",
        ],
        highlight: false,
      },
    ],
    pricingNote:
      "Combination programs (Filler + PRP), Glans Enhancement, Penile Botox, and Scrotox can be added to any tier. Discussed during your private consultation.",
    beforeAfterTitle: "Real patient results",
    beforeAfterSub:
      "These photos contain explicit medical imagery shared with patient consent. Click any tile to view — you'll be asked to confirm before anything is shown.",
    beforeAfterCTA: "Book Your Consultation",
    galleryConfirmTitle: "Are you sure?",
    galleryConfirmBody:
      "This image contains explicit medical imagery (penile before-and-after). Continue only if you're comfortable viewing it.",
    galleryConfirmYes: "Yes, show me",
    galleryConfirmNo: "Cancel",
    galleryRevealHint: "Tap to reveal",
    galleryItems: [
      { id: 1, label: "Patient 1", caption: "Silver program · 12 ml HA" },
      { id: 2, label: "Patient 2", caption: "Gold program · 18 ml HA" },
      { id: 3, label: "Patient 3", caption: "Combination · PRP + Filler" },
      { id: 4, label: "Patient 4", caption: "Platinum program · 24 ml HA" },
    ],
    processTitle: "How it works",
    steps: [
      {
        n: 1,
        title: "Confidential Consultation",
        desc: "In-person or virtual. Private and judgment-free. Dr. Laurent reviews your goals, anatomy, and medical history.",
      },
      {
        n: 2,
        title: "Personalized Treatment Plan",
        desc: "Recommendation of the optimal path: filler, PRP, or combination. Volume and tier matched to your goals.",
      },
      {
        n: 3,
        title: "Treatment Session",
        desc: "Local anesthetic, microcannula technique, under an hour. Same-day procedure possible if you're a candidate.",
      },
      {
        n: 4,
        title: "Recovery & Follow-Up",
        desc: "Most patients return to work the next day. Sex resumed at 2 to 4 weeks. Optional touch-ups available.",
      },
    ],
    riskReversalTitle: "Free consultation. No commitment. Confidential.",
    riskReversalSub:
      "Your private consultation costs nothing. You walk in. You ask questions. You decide on your timeline. That's it.",
    testimonialsTitle: "What patients say",
    testimonialsRating:
      "Rated 5 / 5 across consenting reviewers",
    testimonials: [
      {
        name: "Michael P.",
        initial: "M",
        treatment: "Girth Enhancement",
        text: "Quick, discreet, and professional from start to finish. Dr. Laurent put me completely at ease. The result exceeded my expectations and my confidence has changed completely.",
      },
      {
        name: "David R.",
        initial: "D",
        treatment: "Combination Program",
        text: "I was nervous walking in. The team handled everything with real professionalism and care. The result feels and looks natural. Honestly the best thing I have done for myself.",
      },
      {
        name: "Andrew S.",
        initial: "A",
        treatment: "Filler + Glans",
        text: "Privacy and discretion were impeccable. Dr. Laurent's expertise was obvious in every detail. Recovery was fast and the result is exactly what I hoped for.",
      },
    ],
    faqTitle: "Frequently asked questions",
    faqs: [
      {
        q: "Am I a good candidate?",
        a: "Most healthy adult men are candidates. Many men who seek enlargement have a distorted view of what they actually have, so a private consultation focused on realistic expectations is part of the process. If you are responding to a difficult life moment rather than a long-standing desire, Dr. Laurent will tell you so honestly.",
      },
      {
        q: "What kind of filler is used?",
        a: "A proprietary blend of hyaluronic acid, calcium-hydroxylapatite, or both, depending on your goals. Hyaluronic acid is dissolvable, which makes the procedure reversible if ever desired.",
      },
      {
        q: "When will I see results?",
        a: "Patients see results immediately after the session. Final settling typically occurs within 2 to 4 weeks.",
      },
      {
        q: "How long do penile fillers last?",
        a: "Typically 12 to 24 months. A maintenance session, usually with less filler, will preserve and refine the result.",
      },
      {
        q: "How long does the procedure take?",
        a: "Under an hour, door to door. You can drive yourself home the same day.",
      },
      {
        q: "What does recovery look like?",
        a: "Most men return to work or school the next day. Mild bruising can last up to a week. Sexual activity is paused for 2 weeks, ideally 4, to prevent filler migration.",
      },
      {
        q: "Can the procedure be done the same day as the consultation?",
        a: "Yes. If you are a candidate and ready to proceed, we routinely combine consultation and treatment on the same visit.",
      },
      {
        q: "What if I live outside Laval or Quebec?",
        a: "Initial consultations can be done virtually by Zoom. The procedure is performed at our Laval clinic in under an hour.",
      },
      {
        q: "Will the procedure affect sensation, erection quality, or fertility?",
        a: "No. The protocol is designed to preserve sensation and erectile function. PRP can actually improve erection quality. There is no impact on fertility or long-term health.",
      },
      {
        q: "Is everything kept confidential?",
        a: "Yes. Records are confidential, the consultation room is private, and the clinic is structured to respect your discretion at every step.",
      },
    ],
    finalCTAtitle: "Ready to start the conversation?",
    finalCTASub:
      "Private consultations book quickly. Reserve your time and walk through your options with Dr. Laurent personally.",
    finalCTAbutton: "Book My Private Consultation",
  },
  fr: {
    eyebrow: "AUGMENTATION PÉNIENNE NON CHIRURGICALE À LAVAL",
    heroTitle: "Une version plus imposante,",
    heroHighlight: "plus confiante de vous.",
    heroSub:
      "Programme d'augmentation sans hospitalisation offert par Dr Laurent. Agents de comblement haut de gamme, thérapie régénérative PRP et protocoles combinés. Résultats visibles immédiatement.",
    heroCTAprimary: "Réserver une consultation privée",
    heroCTAsecondary: "Appeler (514) 500-3422",
    pricingAnchor: "Programmes à partir de 3 000 $",
    stats: [
      { value: "1 000+", label: "Procédures réalisées" },
      { value: "4,9★", label: "Note des patients" },
      { value: "<60 min", label: "Durée du traitement" },
      { value: "Même jour", label: "Consultations possibles" },
    ],
    badges: [
      "Médecin certifié",
      "Agents de comblement FDA",
      "Confidentialité totale",
      "En personne ou virtuelle",
    ],
    formTitle: "Réservez votre consultation privée",
    formSub: "30 secondes. Confidentiel. Sans engagement.",
    formNameLabel: "Nom complet",
    formPhoneLabel: "Numéro de téléphone",
    formEmailLabel: "Courriel (facultatif)",
    formInterestLabel: "Traitement envisagé",
    formSubmit: "Réserver ma consultation privée",
    formDisclaimer: "Vos informations sont chiffrées et ne sont jamais partagées.",
    interestOptions: [
      "Pas certain - je veux en discuter",
      "Comblement dermique",
      "Thérapie régénérative PRP",
      "Programme combiné (Comblement + PRP)",
      "Augmentation du gland",
      "Botox pénien",
      "Scrotox / Grotox",
    ],
    benefitsTitle: "Pourquoi les patients font confiance à Dr Laurent",
    benefitsSub:
      "Excellence médicale, discrétion totale, et une clinique privée pensée autour de vous.",
    doctorName: "Dr Jean-Baptiste Laurent",
    doctorRole: "Médecin esthétique",
    doctorBlurb:
      "Formé aux techniques d'injection avancées et aux protocoles d'augmentation masculine. Chaque comblement pénien, séance de PRP et complément Botox est réalisé personnellement par Dr Laurent. La précision d'un médecin, l'oeil d'un artiste esthétique, sur l'une des procédures les plus discrètes que nous offrons.",
    doctorStats: [
      { value: "15+", label: "Ans" },
      { value: "5000+", label: "Procédures" },
      { value: "100%", label: "Discret" },
    ],
    features: [
      {
        icon: Award,
        title: "Médecin certifié",
        desc: "Procédures réalisées personnellement par Dr Laurent, avec une formation spécialisée en augmentation masculine et en techniques médico-esthétiques.",
      },
      {
        icon: Shield,
        title: "Agents de comblement FDA",
        desc: "Acide hyaluronique et hydroxyapatite de calcium choisis pour leur sensation naturelle, leur durabilité et leur sécurité clinique.",
      },
      {
        icon: Lock,
        title: "Confidentialité totale",
        desc: "Salles de consultation privées, dossiers confidentiels, équipe médicale restreinte. Ce qui se passe à la clinique reste à la clinique.",
      },
      {
        icon: Clock,
        title: "Procédure rapide",
        desc: "La plupart des traitements sont complétés en moins d'une heure. La majorité des patients reprennent le travail dès le lendemain.",
      },
    ],
    proceduresTitle: "Trois axes de traitement principaux",
    proceduresSub:
      "Dr Laurent construit un plan adapté à votre anatomie, vos objectifs et votre style de vie. Chaque plan est privé et personnel.",
    procedures: [
      {
        icon: Sparkles,
        title: "Comblement dermique",
        bullet: "Gain de circonférence visible immédiatement",
        desc: "Acide hyaluronique haut de gamme injecté à la microcanule pour un résultat plus ferme, plus lisse et plus naturel. Durée de 12 à 24 mois.",
      },
      {
        icon: HeartPulse,
        title: "Thérapie régénérative PRP",
        bullet: "Érections plus fortes + potentiel de longueur",
        desc: "Plasma riche en plaquettes prélevé de votre propre sang, combiné à un programme de pompe sur 6 semaines. Régénération nerveuse et tissulaire.",
      },
      {
        icon: TrendingUp,
        title: "Programme combiné",
        bullet: "Résultat maximal, de l'intérieur et de l'extérieur",
        desc: "PRP et pompe pendant 6 semaines, puis placement de comblement dermique. L'option la plus complète pour ceux qui veulent tout.",
      },
      {
        icon: Sparkles,
        title: "Augmentation du gland",
        bullet: "Proportion + aide à l'éjaculation précoce",
        desc: "Acide hyaluronique dans le gland pour maintenir la symétrie. Plusieurs patients rapportent une sensibilité réduite et des rapports plus longs.",
      },
      {
        icon: Shield,
        title: "Botox pénien",
        bullet: "Réduit la rétraction flaccide",
        desc: "Pour les hommes dont le pénis se rétracte au repos. Neuromodulateur ciblé pour une présentation plus imposante au repos.",
      },
      {
        icon: Sparkles,
        title: "Scrotox / Grotox en complément",
        bullet: "Plus lisse, plus complet, plus raffiné",
        desc: "Botox dans le scrotum pour lisser les rides, améliorer la pendaison et réduire la transpiration. Souvent ajouté à un programme principal.",
      },
    ],
    pricingTitle: "Tarification transparente",
    pricingSub:
      "Choisissez le niveau qui correspond à vos objectifs. Chaque programme inclut les soins complets, le suivi et la discrétion de Dr Laurent.",
    tiers: [
      {
        name: "Touchup",
        volume: "6 ml",
        price: "3 000 $",
        bullets: [
          "Augmentation d'entrée de gamme",
          "Résultat subtil et naturel",
          "Une seule séance",
        ],
        highlight: false,
      },
      {
        name: "Silver",
        volume: "12 ml",
        price: "6 000 $",
        bullets: [
          "Programme standard",
          "Résultat visible et équilibré",
          "Le plus choisi par les nouveaux patients",
        ],
        highlight: false,
      },
      {
        name: "Gold",
        volume: "18 ml",
        price: "9 000 $",
        bullets: [
          "Augmentation premium",
          "Résultat fort et défini",
          "Inclut une séance de raffinement",
        ],
        highlight: true,
        badge: "Plus populaire",
      },
      {
        name: "Platinum",
        volume: "24 ml",
        price: "12 000 $",
        bullets: [
          "Augmentation maximale",
          "Transformation complète",
          "Inclut le protocole complet de raffinement",
        ],
        highlight: false,
      },
    ],
    pricingNote:
      "Programmes combinés (Comblement + PRP), augmentation du gland, Botox pénien et Scrotox peuvent être ajoutés à n'importe quel niveau. Discutés lors de votre consultation privée.",
    beforeAfterTitle: "Résultats réels de patients",
    beforeAfterSub:
      "Ces photos contiennent des images médicales explicites partagées avec le consentement des patients. Cliquez sur une tuile pour voir — une confirmation sera demandée avant tout affichage.",
    beforeAfterCTA: "Réserver votre consultation",
    galleryConfirmTitle: "Êtes-vous certain ?",
    galleryConfirmBody:
      "Cette image contient du contenu médical explicite (avant/après pénien). Continuez seulement si vous êtes à l'aise de visionner.",
    galleryConfirmYes: "Oui, afficher",
    galleryConfirmNo: "Annuler",
    galleryRevealHint: "Toucher pour afficher",
    galleryItems: [
      { id: 1, label: "Patient 1", caption: "Programme Silver · 12 ml AH" },
      { id: 2, label: "Patient 2", caption: "Programme Gold · 18 ml AH" },
      { id: 3, label: "Patient 3", caption: "Combinaison · PRP + Comblement" },
      { id: 4, label: "Patient 4", caption: "Programme Platinum · 24 ml AH" },
    ],
    processTitle: "Comment ça fonctionne",
    steps: [
      {
        n: 1,
        title: "Consultation confidentielle",
        desc: "En personne ou virtuelle. Privée et sans jugement. Dr Laurent passe en revue vos objectifs, votre anatomie et vos antécédents.",
      },
      {
        n: 2,
        title: "Plan personnalisé",
        desc: "Recommandation du parcours optimal : comblement, PRP ou combinaison. Volume et niveau adaptés à vos objectifs.",
      },
      {
        n: 3,
        title: "Séance de traitement",
        desc: "Anesthésie locale, technique à la microcanule, moins d'une heure. Procédure le jour même possible si vous êtes candidat.",
      },
      {
        n: 4,
        title: "Récupération et suivi",
        desc: "La plupart des patients reprennent le travail le lendemain. Reprise des rapports à 2 à 4 semaines. Retouches sur demande.",
      },
    ],
    riskReversalTitle: "Consultation gratuite. Sans engagement. Confidentielle.",
    riskReversalSub:
      "Votre consultation privée ne coûte rien. Vous arrivez. Vous posez vos questions. Vous décidez de votre rythme. C'est tout.",
    testimonialsTitle: "Ce que disent les patients",
    testimonialsRating: "Noté 5 / 5 par les patients consentants",
    testimonials: [
      {
        name: "Michael P.",
        initial: "M",
        treatment: "Augmentation de la circonférence",
        text: "Rapide, discret, professionnel du début à la fin. Dr Laurent m'a mis complètement à l'aise. Le résultat a dépassé mes attentes et ma confiance a complètement changé.",
      },
      {
        name: "David R.",
        initial: "D",
        treatment: "Programme combiné",
        text: "J'étais nerveux en arrivant. L'équipe a géré chaque étape avec un vrai professionnalisme. Le résultat est naturel, autant à voir qu'à toucher. Honnêtement la meilleure chose que j'ai faite pour moi.",
      },
      {
        name: "Andrew S.",
        initial: "A",
        treatment: "Comblement + Gland",
        text: "Confidentialité et discrétion impeccables. L'expertise de Dr Laurent transparaissait dans chaque détail. Récupération rapide et résultat exactement à la hauteur de mes attentes.",
      },
    ],
    faqTitle: "Questions fréquentes",
    faqs: [
      {
        q: "Suis-je un bon candidat ?",
        a: "La plupart des hommes adultes en bonne santé le sont. Beaucoup d'hommes qui cherchent une augmentation ont une vision déformée de ce qu'ils ont réellement, donc une consultation privée centrée sur des attentes réalistes fait partie du processus. Si vous réagissez à un moment de vie difficile plutôt qu'à un désir de longue date, Dr Laurent vous le dira honnêtement.",
      },
      {
        q: "Quel type d'agent de comblement est utilisé ?",
        a: "Un mélange propriétaire d'acide hyaluronique, d'hydroxyapatite de calcium, ou des deux, selon vos objectifs. L'acide hyaluronique est dissoluble, ce qui rend la procédure réversible si jamais souhaité.",
      },
      {
        q: "Quand verrai-je les résultats ?",
        a: "Les patients voient les résultats immédiatement après la séance. Le résultat final s'établit généralement en 2 à 4 semaines.",
      },
      {
        q: "Combien de temps durent les comblements péniens ?",
        a: "Typiquement de 12 à 24 mois. Une séance d'entretien, généralement avec moins de produit, préservera et raffinera le résultat.",
      },
      {
        q: "Combien de temps prend la procédure ?",
        a: "Moins d'une heure, de la porte à la porte. Vous pouvez conduire vous-même pour rentrer le jour même.",
      },
      {
        q: "Quelle est la récupération ?",
        a: "La plupart des hommes reprennent le travail ou les études dès le lendemain. Des ecchymoses légères peuvent durer jusqu'à une semaine. L'activité sexuelle est mise en pause 2 semaines, idéalement 4.",
      },
      {
        q: "La procédure peut-elle se faire le même jour que la consultation ?",
        a: "Oui. Si vous êtes candidat et prêt à procéder, nous combinons régulièrement consultation et traitement lors de la même visite.",
      },
      {
        q: "Et si j'habite à l'extérieur de Laval ou du Québec ?",
        a: "Les consultations initiales peuvent se faire en virtuel par Zoom. La procédure est ensuite réalisée à notre clinique de Laval en moins d'une heure.",
      },
      {
        q: "La procédure affecte-t-elle la sensation, l'érection ou la fertilité ?",
        a: "Non. Le protocole préserve la sensation et la fonction érectile. Le PRP peut améliorer la qualité des érections. Aucun impact sur la fertilité ni sur la santé à long terme.",
      },
      {
        q: "Tout reste-t-il confidentiel ?",
        a: "Oui. Les dossiers sont confidentiels, la salle de consultation est privée, et la clinique respecte votre discrétion à chaque étape.",
      },
    ],
    finalCTAtitle: "Prêt à entamer la conversation ?",
    finalCTASub:
      "Les consultations privées se réservent rapidement. Réservez votre créneau et passez en revue vos options avec Dr Laurent personnellement.",
    finalCTAbutton: "Réserver ma consultation privée",
  },
};

export function PenileEnlargementContent() {
  const locale = useLocale();
  const c = content[locale];
  const [revealed, setRevealed] = useState<Set<number>>(new Set());
  const [pendingReveal, setPendingReveal] = useState<number | null>(null);

  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden">
        {/* ─── Hero ─── */}
        <section className="relative min-h-[100svh] flex items-center pt-20 md:pt-24 pb-12 bg-navy">
          <div className="absolute inset-0">
            {/* Solid navy base */}
            <div className="absolute inset-0 bg-navy" />
            {/* Hero image: positioned right side, full opacity */}
            <div
              className="absolute inset-y-0 right-0 w-full lg:w-[60%] bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.pexels.com/photos/8874921/pexels-photo-8874921.jpeg?auto=compress&cs=tinysrgb&w=1600')",
              }}
            />
            {/* Left fade for text legibility, mobile dim */}
            <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/95 via-40% to-navy/0 lg:via-navy/90 lg:via-35%" />
            {/* Mobile darkens the whole image more so text reads */}
            <div className="absolute inset-0 bg-navy/45 lg:bg-transparent" />
            {/* Soft bottom fade into stats strip */}
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-navy to-transparent" />
            {/* Gold ambient glow */}
            <div className="absolute top-1/3 left-1/4 w-[420px] h-[420px] bg-gold/10 rounded-full blur-3xl pointer-events-none" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-16 items-center w-full">
            <div>
              <FadeIn>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-gold text-[11px] tracking-widest font-medium mb-6">
                  <Sparkles className="w-3 h-3" />
                  {c.eyebrow}
                </div>
              </FadeIn>
              <FadeIn delay={0.05}>
                <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-[1.05] mb-6">
                  {c.heroTitle}
                  <br />
                  <span className="gold-shimmer">{c.heroHighlight}</span>
                </h1>
              </FadeIn>
              <FadeIn delay={0.1}>
                <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-7 max-w-xl">
                  {c.heroSub}
                </p>
              </FadeIn>
              <FadeIn delay={0.15}>
                <div className="flex flex-wrap gap-2 mb-8">
                  {c.badges.map((b) => (
                    <span
                      key={b}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/80 text-xs"
                    >
                      <CheckCircle className="w-3.5 h-3.5 text-gold" />
                      {b}
                    </span>
                  ))}
                </div>
              </FadeIn>
              <FadeIn delay={0.2}>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="#consultation"
                    className="flex items-center justify-center gap-2 bg-gold hover:bg-gold-light text-navy px-7 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-gold/30"
                  >
                    <Calendar className="w-5 h-5" />
                    {c.heroCTAprimary}
                  </a>
                  <a
                    href="tel:+15145003422"
                    className="flex items-center justify-center gap-2 bg-white/5 border border-white/15 text-white px-6 py-4 rounded-full text-sm transition-all hover:bg-white/10"
                  >
                    <Phone className="w-4 h-4" />
                    {c.heroCTAsecondary}
                  </a>
                </div>
              </FadeIn>
              <FadeIn delay={0.25}>
                <div className="mt-6 flex items-center gap-2 text-white/50 text-xs">
                  <Lock className="w-3.5 h-3.5" />
                  <span>{c.pricingAnchor}</span>
                  <span className="mx-2 opacity-40">·</span>
                  <span>{c.formSub}</span>
                </div>
              </FadeIn>
            </div>

            {/* Form */}
            <FadeIn delay={0.15} direction="left">
              <div
                id="consultation"
                className="bg-white rounded-3xl p-6 sm:p-8 shadow-2xl shadow-black/20 border border-white/10 scroll-mt-24"
              >
                <div className="flex items-center gap-2 mb-1">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-gold text-gold"
                      />
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {c.testimonialsRating}
                  </span>
                </div>
                <h3 className="font-heading text-2xl sm:text-3xl font-semibold text-navy mb-1">
                  {c.formTitle}
                </h3>
                <p className="text-muted-foreground text-sm mb-5">
                  {c.formSub}
                </p>
                <LeadForm
                  source="website-consultation"
                  service="Penile enhancement"
                  formOptions={c.interestOptions}
                  showServiceSelect
                  redirectTo="/booking"
                />
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ─── Stats strip ─── */}
        <section className="bg-cream-dark border-y border-border/40">
          <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {c.stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-heading text-2xl sm:text-3xl font-semibold text-navy">
                  {s.value}
                </div>
                <div className="text-[11px] sm:text-xs uppercase tracking-wider text-muted-foreground mt-1">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ─── Why choose + Doctor ─── */}
        <section className="py-20 sm:py-24 bg-cream">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-14 items-center">
              {/* Left: Title + features */}
              <div>
                <FadeIn className="mb-10">
                  <div className="w-12 h-px bg-gold mb-5" />
                  <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-semibold text-navy mb-4 leading-tight">
                    {c.benefitsTitle}
                  </h2>
                  <p className="text-muted-foreground max-w-lg">
                    {c.benefitsSub}
                  </p>
                </FadeIn>
                <StaggerChildren
                  className="grid sm:grid-cols-2 gap-4"
                  staggerDelay={0.07}
                >
                  {c.features.map((f) => (
                    <StaggerItem key={f.title}>
                      <div className="group p-5 rounded-2xl bg-white border border-border/50 hover:border-gold/40 hover:shadow-md transition-all duration-500 h-full">
                        <div className="p-2.5 rounded-lg bg-gold/10 w-fit mb-3 group-hover:bg-gold/20 transition-colors">
                          <f.icon className="w-5 h-5 text-gold" />
                        </div>
                        <h3 className="font-heading text-base font-semibold text-navy mb-1.5">
                          {f.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {f.desc}
                        </p>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerChildren>
              </div>

              {/* Right: Doctor portrait card */}
              <FadeIn direction="left">
                <div className="relative rounded-3xl overflow-hidden bg-navy-dark shadow-2xl">
                  <div className="relative aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5]">
                    <div
                      className="absolute inset-0 bg-cover bg-top"
                      style={{
                        backgroundImage:
                          "url('https://drlaurentmedecineprivee.ca/assets/dr-laurent-new-D1TM1Y8l.jpg')",
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/30 to-transparent" />
                  </div>
                  <div className="absolute bottom-0 inset-x-0 p-6 sm:p-7">
                    <div className="w-10 h-px bg-gold mb-4" />
                    <h3 className="font-heading text-2xl sm:text-3xl font-semibold text-white mb-1">
                      {c.doctorName}
                    </h3>
                    <p className="text-gold text-sm font-light tracking-wide mb-4">
                      {c.doctorRole}
                    </p>
                    <p className="text-white/65 text-sm leading-relaxed mb-5">
                      {c.doctorBlurb}
                    </p>
                    <div className="flex items-center gap-5 pt-4 border-t border-white/10">
                      {c.doctorStats.map((s, i) => (
                        <div key={s.label} className="flex items-center gap-5">
                          <div>
                            <div className="font-heading text-xl font-bold text-gold">
                              {s.value}
                            </div>
                            <div className="text-white/40 text-[10px] uppercase tracking-wider">
                              {s.label}
                            </div>
                          </div>
                          {i < c.doctorStats.length - 1 && (
                            <div className="w-px h-8 bg-white/10" />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ─── Procedures ─── */}
        <section className="py-20 sm:py-24 bg-white noise-overlay">
          <div className="relative z-10 max-w-6xl mx-auto px-6">
            <FadeIn className="text-center mb-14 max-w-3xl mx-auto">
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-semibold text-navy mb-4">
                {c.proceduresTitle}
              </h2>
              <p className="text-muted-foreground">{c.proceduresSub}</p>
            </FadeIn>
            <StaggerChildren
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
              staggerDelay={0.06}
            >
              {c.procedures.map((p) => (
                <StaggerItem key={p.title}>
                  <div className="group p-6 rounded-2xl border border-border/50 hover:border-gold/40 hover:shadow-md bg-cream/40 transition-all duration-500 h-full flex flex-col">
                    <div className="p-2.5 rounded-lg bg-gold/10 w-fit mb-4 group-hover:bg-gold/20 transition-colors">
                      <p.icon className="w-5 h-5 text-gold" />
                    </div>
                    <h3 className="font-heading text-xl sm:text-2xl font-semibold text-navy leading-snug mb-2">
                      {p.bullet}
                    </h3>
                    <div className="text-gold text-[10px] font-semibold uppercase tracking-[0.18em] mb-3">
                      {p.title}
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-5">
                      {p.desc}
                    </p>
                    <a
                      href="#consultation"
                      className="flex items-center gap-1.5 text-navy text-sm font-medium hover:gap-2.5 hover:text-gold transition-all"
                    >
                      {locale === "fr" ? "Discuter cette option" : "Discuss this option"}
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </section>

        {/* ─── Real patient results gallery (click-to-reveal) ─── */}
        <section className="py-20 sm:py-24 bg-cream">
          <div className="max-w-6xl mx-auto px-6">
            <FadeIn className="text-center mb-12 max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-gold text-[11px] tracking-widest font-medium mb-4">
                <Eye className="w-3 h-3" />
                {locale === "fr" ? "GALERIE PATIENTS" : "PATIENT GALLERY"}
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-semibold text-navy mb-4">
                {c.beforeAfterTitle}
              </h2>
              <p className="text-muted-foreground">{c.beforeAfterSub}</p>
            </FadeIn>

            <StaggerChildren
              className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4"
              staggerDelay={0.06}
            >
              {c.galleryItems.map((item) => {
                const isRevealed = revealed.has(item.id);
                return (
                  <StaggerItem key={item.id}>
                    <button
                      type="button"
                      onClick={() => {
                        if (isRevealed) {
                          setRevealed((s) => {
                            const next = new Set(s);
                            next.delete(item.id);
                            return next;
                          });
                        } else {
                          setPendingReveal(item.id);
                        }
                      }}
                      className="group relative w-full aspect-[3/4] rounded-2xl overflow-hidden bg-navy border border-border/50 hover:border-gold/40 transition-all duration-500 text-left"
                    >
                      {isRevealed ? (
                        <>
                          {/* TODO: replace this placeholder with real consented patient photo */}
                          <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{
                              backgroundImage: `url('/before-after/${item.id}.jpg'), linear-gradient(135deg, #1B2A4A 0%, #2A3F6A 100%)`,
                            }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/30 to-transparent" />
                          <div className="absolute top-3 right-3 p-2 rounded-full bg-black/40 backdrop-blur-sm">
                            <EyeOff className="w-4 h-4 text-white" />
                          </div>
                          <div className="absolute bottom-0 inset-x-0 p-4">
                            <div className="text-gold text-[10px] uppercase tracking-widest mb-1">
                              {item.label}
                            </div>
                            <div className="text-white text-sm font-medium">
                              {item.caption}
                            </div>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy-dark" />
                          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(212,168,67,0.15),transparent_60%)]" />
                          <div className="absolute inset-3 rounded-xl border border-white/10" />
                          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                            <div className="w-14 h-14 rounded-full bg-gold/15 border border-gold/30 flex items-center justify-center mb-3 group-hover:bg-gold/25 group-hover:scale-110 transition-all">
                              <Lock className="w-6 h-6 text-gold" />
                            </div>
                            <div className="text-white/90 text-xs font-medium uppercase tracking-widest mb-1">
                              {item.label}
                            </div>
                            <div className="text-white/40 text-[10px]">
                              {c.galleryRevealHint}
                            </div>
                          </div>
                        </>
                      )}
                    </button>
                  </StaggerItem>
                );
              })}
            </StaggerChildren>
          </div>
        </section>

        {/* ─── Pricing (moved here) ─── */}
        <section className="py-20 sm:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <FadeIn className="text-center mb-14 max-w-3xl mx-auto">
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-semibold text-navy mb-4">
                {c.pricingTitle}
              </h2>
              <p className="text-muted-foreground">{c.pricingSub}</p>
            </FadeIn>
            <StaggerChildren
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5"
              staggerDelay={0.07}
            >
              {c.tiers.map((t) => (
                <StaggerItem key={t.name}>
                  <div
                    className={`relative p-6 rounded-2xl h-full flex flex-col transition-all duration-500 ${
                      t.highlight
                        ? "bg-navy text-white border-2 border-gold shadow-xl shadow-gold/10 lg:scale-105"
                        : "bg-cream/40 border border-border/50 hover:border-gold/30"
                    }`}
                  >
                    {t.highlight && t.badge && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-navy px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider">
                        {t.badge}
                      </div>
                    )}
                    <div
                      className={`text-xs uppercase tracking-wider mb-2 ${
                        t.highlight ? "text-gold" : "text-muted-foreground"
                      }`}
                    >
                      {t.volume}
                    </div>
                    <h3
                      className={`font-heading text-2xl font-semibold mb-1 ${
                        t.highlight ? "text-white" : "text-navy"
                      }`}
                    >
                      {t.name}
                    </h3>
                    <div
                      className={`font-heading text-4xl font-semibold mb-5 ${
                        t.highlight ? "text-gold" : "text-navy"
                      }`}
                    >
                      {t.price}
                    </div>
                    <ul className="space-y-2 flex-1 mb-6">
                      {t.bullets.map((b) => (
                        <li
                          key={b}
                          className={`flex gap-2 text-sm ${
                            t.highlight ? "text-white/80" : "text-muted-foreground"
                          }`}
                        >
                          <CheckCircle
                            className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                              t.highlight ? "text-gold" : "text-gold"
                            }`}
                          />
                          {b}
                        </li>
                      ))}
                    </ul>
                    <a
                      href="#consultation"
                      className={`block text-center py-3 rounded-full text-sm font-semibold transition-all ${
                        t.highlight
                          ? "bg-gold hover:bg-gold-light text-navy"
                          : "bg-white hover:bg-cream text-navy border border-border"
                      }`}
                    >
                      {locale === "fr" ? "Choisir ce niveau" : "Choose this tier"}
                    </a>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>
            <FadeIn className="mt-8">
              <p className="text-center text-sm text-muted-foreground max-w-3xl mx-auto">
                {c.pricingNote}
              </p>
            </FadeIn>
          </div>
        </section>

        {/* ─── Process ─── */}
        <section className="py-20 sm:py-24 bg-navy relative overflow-hidden">
          <div className="absolute top-1/2 -translate-y-1/2 -left-32 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
          <div className="relative max-w-5xl mx-auto px-6">
            <FadeIn className="text-center mb-16 max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-gold text-[11px] tracking-widest font-medium mb-4">
                {locale === "fr" ? "VOTRE PARCOURS" : "YOUR JOURNEY"}
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-semibold text-white">
                {c.processTitle}
              </h2>
            </FadeIn>

            {/* Connecting line behind the steps (desktop only) */}
            <div className="relative">
              <div
                className="hidden lg:block absolute top-7 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"
                aria-hidden
              />
              <StaggerChildren
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4"
                staggerDelay={0.08}
              >
                {c.steps.map((s) => (
                  <StaggerItem key={s.n}>
                    <div className="relative h-full flex flex-col items-center text-center px-2">
                      <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-gold to-gold-light flex items-center justify-center shadow-lg shadow-gold/20 mb-5 z-10">
                        <span className="font-heading text-xl font-bold text-navy">
                          {s.n}
                        </span>
                      </div>
                      <h3 className="font-heading text-lg font-semibold text-white mb-2">
                        {s.title}
                      </h3>
                      <p className="text-white/55 text-sm leading-relaxed">
                        {s.desc}
                      </p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerChildren>
            </div>
          </div>
        </section>

        {/* ─── Risk reversal ─── */}
        <section className="py-16 bg-gold/10 border-y border-gold/20">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <FadeIn>
              <Shield className="w-10 h-10 text-gold mx-auto mb-4" />
              <h3 className="font-heading text-2xl sm:text-3xl font-semibold text-navy mb-3">
                {c.riskReversalTitle}
              </h3>
              <p className="text-muted-foreground mb-6">{c.riskReversalSub}</p>
              <a
                href="#consultation"
                className="inline-flex items-center gap-2 bg-navy hover:bg-navy-light text-white px-7 py-3.5 rounded-full font-semibold transition-all duration-300 hover:shadow-lg"
              >
                <Calendar className="w-5 h-5" />
                {c.heroCTAprimary}
              </a>
            </FadeIn>
          </div>
        </section>

        {/* ─── Testimonials ─── */}
        <section className="py-20 sm:py-24 bg-cream">
          <div className="max-w-6xl mx-auto px-6">
            <FadeIn className="text-center mb-14">
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-semibold text-navy mb-3">
                {c.testimonialsTitle}
              </h2>
              <div className="flex items-center justify-center gap-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-gold text-gold"
                    />
                  ))}
                </div>
                <span className="text-muted-foreground text-sm">
                  {c.testimonialsRating}
                </span>
              </div>
            </FadeIn>
            <StaggerChildren
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
              staggerDelay={0.08}
            >
              {c.testimonials.map((t) => (
                <StaggerItem key={t.name}>
                  <div className="p-6 rounded-2xl bg-white border border-border/40 h-full flex flex-col">
                    <Quote className="w-8 h-8 text-gold/40 mb-3" />
                    <p className="text-navy/80 text-sm leading-relaxed flex-1 mb-5">
                      &ldquo;{t.text}&rdquo;
                    </p>
                    <div className="flex items-center gap-3 pt-4 border-t border-border/40">
                      <div className="w-10 h-10 rounded-full bg-gold/15 flex items-center justify-center text-gold font-semibold text-sm">
                        {t.initial}
                      </div>
                      <div>
                        <div className="text-navy text-sm font-medium">
                          {t.name}
                        </div>
                        <div className="text-muted-foreground text-xs uppercase tracking-wider">
                          {t.treatment}
                        </div>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </section>

        {/* ─── FAQ ─── */}
        <section className="py-20 sm:py-24 bg-white">
          <div className="max-w-3xl mx-auto px-6">
            <FadeIn className="text-center mb-12">
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-semibold text-navy">
                {c.faqTitle}
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <Accordion className="space-y-3">
                {c.faqs.map((f, i) => (
                  <AccordionItem
                    key={i}
                    className="bg-cream/40 border border-border/40 rounded-xl px-6 data-open:border-gold/30 data-open:shadow-sm transition-all duration-300"
                  >
                    <AccordionTrigger className="text-left font-medium text-navy hover:text-gold text-sm sm:text-base py-4 sm:py-5 hover:no-underline data-open:text-gold">
                      {f.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5">
                      {f.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </FadeIn>
          </div>
        </section>

        {/* ─── Final CTA ─── */}
        <section className="py-20 sm:py-24 bg-navy text-center">
          <div className="max-w-2xl mx-auto px-6">
            <FadeIn>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-4">
                {c.finalCTAtitle}
              </h2>
              <p className="text-white/60 mb-8">{c.finalCTASub}</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="#consultation"
                  className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-light text-navy px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-gold/20"
                >
                  <Calendar className="w-5 h-5" />
                  {c.finalCTAbutton}
                </a>
                <a
                  href="tel:+15145003422"
                  className="inline-flex items-center justify-center gap-2 bg-white/5 border border-white/15 text-white px-7 py-4 rounded-full transition-all hover:bg-white/10"
                >
                  <Phone className="w-4 h-4" />
                  {c.heroCTAsecondary}
                </a>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>

      {/* ─── Sticky mobile CTA bar ─── */}
      <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-white border-t border-border shadow-2xl">
        <div className="grid grid-cols-2 gap-2 p-3">
          <a
            href="tel:+15145003422"
            className="flex items-center justify-center gap-2 bg-cream border border-border text-navy py-3 rounded-xl text-sm font-semibold"
          >
            <Phone className="w-4 h-4" />
            {locale === "fr" ? "Appeler" : "Call"}
          </a>
          <a
            href="#consultation"
            className="flex items-center justify-center gap-2 bg-gold hover:bg-gold-light text-navy py-3 rounded-xl text-sm font-semibold"
          >
            <Calendar className="w-4 h-4" />
            {locale === "fr" ? "Réserver" : "Book"}
          </a>
        </div>
      </div>

      <FooterSection />

      {/* ─── Age-gate confirm modal ─── */}
      {pendingReveal !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-dark/80 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setPendingReveal(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl p-7 animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setPendingReveal(null)}
              className="absolute top-3 right-3 w-8 h-8 rounded-full hover:bg-cream flex items-center justify-center text-muted-foreground transition"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="w-12 h-12 rounded-full bg-gold/15 flex items-center justify-center mb-4">
              <AlertTriangle className="w-6 h-6 text-gold" />
            </div>
            <h3 className="font-heading text-2xl font-semibold text-navy mb-2">
              {c.galleryConfirmTitle}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              {c.galleryConfirmBody}
            </p>
            <div className="flex flex-col-reverse sm:flex-row gap-2">
              <button
                type="button"
                onClick={() => setPendingReveal(null)}
                className="flex-1 px-4 py-3 rounded-xl bg-cream hover:bg-cream-dark text-navy font-medium text-sm transition border border-border"
              >
                {c.galleryConfirmNo}
              </button>
              <button
                type="button"
                onClick={() => {
                  setRevealed((s) => new Set(s).add(pendingReveal));
                  setPendingReveal(null);
                }}
                className="flex-1 px-4 py-3 rounded-xl bg-navy hover:bg-navy-light text-white font-semibold text-sm transition shadow-lg"
              >
                {c.galleryConfirmYes}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
