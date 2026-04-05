"use client";

import { ServicePageLayout } from "@/components/service-page-layout";
import { useLocale } from "@/lib/locale";
import { Award, Shield, Sparkles, Clock } from "lucide-react";

const content = {
  en: {
    heroTitle: "Injection",
    heroHighlight: "Lipolysis",
    heroDescription:
      "Non-surgical fat reduction targeting stubborn pockets that resist diet and exercise. Sculpt your contours with precision injection treatments and minimal downtime.",
    heroBadges: ["Non-surgical", "Targeted fat reduction", "Multiple treatment areas"],
    whyTitle: "Why Choose Dr. Laurent",
    whySubtitle:
      "Medical expertise in body contouring with proven, non-invasive fat reduction techniques.",
    featureExpertise: "Medical Expertise",
    featureExpertiseDesc:
      "Board-certified physician with specialized training in body contouring and injection-based fat reduction.",
    featureSafe: "Safe & Effective",
    featureSafeDesc:
      "Clinically proven fat-dissolving formulas that permanently destroy treated fat cells.",
    featureTargeted: "Targeted Results",
    featureTargetedDesc:
      "Precisely target stubborn fat deposits in the chin, arms, abdomen, love handles, and more.",
    featureDowntime: "Minimal Downtime",
    featureDowntimeDesc:
      "Quick in-office treatment with minimal recovery. Return to daily activities the same day.",
    proceduresTitle: "Treatment Areas",
    proceduresSubtitle:
      "Targeted fat reduction for multiple body areas. Currently on promotion until Easter 2026.",
    proc1Title: "Chin (Double Chin)",
    proc1Desc:
      "Eliminate submental fat for a defined jawline and profile. $510 per session (promo).",
    proc2Title: "Arms",
    proc2Desc:
      "Reduce stubborn upper arm fat for slimmer, more toned-looking arms. $595 per session (promo).",
    proc3Title: "Abdomen",
    proc3Desc:
      "Target belly fat with full or half abdomen treatments. From $510 for half, $765 for full abdomen (promo).",
    proc4Title: "Love Handles",
    proc4Desc:
      "Sculpt your waistline by reducing lateral fat deposits. $425 per session (promo).",
    proc5Title: "Saddlebags & Thighs",
    proc5Desc:
      "Slim outer thighs and saddlebag areas for smoother contours. From $680 per session (promo).",
    proc6Title: "Back Fat & Other Areas",
    proc6Desc:
      "Treat back fat, calves, or knees for comprehensive body contouring. From $595 per session (promo).",
    step1: "Body Assessment",
    step1Desc:
      "Evaluation of your fat distribution, skin quality, and body contouring goals.",
    step2: "Treatment Planning",
    step2Desc:
      "Personalized protocol determining the number of sessions and injection sites for optimal results.",
    step3: "Lipolysis Injections",
    step3Desc:
      "Precise injections of fat-dissolving solution into targeted areas. The procedure takes 15-30 minutes.",
    step4: "Progressive Results",
    step4Desc:
      "Fat cells are gradually eliminated over 4-6 weeks. Follow-up sessions as needed for your desired outcome.",
    testimonial1Treatment: "Chin Lipolysis",
    testimonial1Text:
      "My double chin was my biggest insecurity. After two sessions, it's practically gone. The treatment was quick and the results are remarkable. Wish I'd done it sooner!",
    testimonial2Treatment: "Love Handles",
    testimonial2Text:
      "Diet and exercise couldn't touch my love handles. Dr. Laurent's lipolysis treatment finally gave me the waistline I wanted. Professional care from start to finish.",
    testimonial3Treatment: "Abdomen",
    testimonial3Text:
      "The abdominal treatment was easier than I expected. Some swelling for a few days, but the fat reduction over the following weeks was impressive. Very happy with my results.",
    faq1Q: "How does injection lipolysis work?",
    faq1A:
      "Injection lipolysis uses a fat-dissolving solution that is injected directly into stubborn fat deposits. The solution breaks down fat cell membranes, and the body naturally metabolizes and eliminates the destroyed fat cells over several weeks.",
    faq2Q: "Is the fat reduction permanent?",
    faq2A:
      "Yes. Once fat cells are destroyed, they do not regenerate. However, remaining fat cells can still enlarge with significant weight gain, so maintaining a healthy lifestyle helps preserve your results.",
    faq3Q: "How many sessions are needed?",
    faq3A:
      "Most patients require 2-4 sessions spaced 4-6 weeks apart for optimal results. The number of sessions depends on the treatment area and the amount of fat to be reduced.",
    faq4Q: "What are the side effects?",
    faq4A:
      "Common side effects include temporary swelling, redness, bruising, and tenderness at the injection site. These typically resolve within a few days to a week. Serious side effects are rare.",
    faq5Q: "Who is a good candidate for lipolysis?",
    faq5A:
      "Ideal candidates are at or near their target weight with localized fat deposits that don't respond to diet and exercise. Lipolysis is not a weight-loss treatment but rather a body contouring solution.",
    faq6Q: "Are there any current promotions?",
    faq6A:
      "Yes! We're currently offering promotional pricing on all lipolysis treatments until Easter 2026, with savings of 15% across all treatment areas. Contact us for details.",
    formTitle: "Book Your Consultation",
    formOptions: [
      "Chin (Double Chin)",
      "Arms",
      "Abdomen",
      "Love Handles",
      "Thighs / Saddlebags",
      "Back Fat",
      "Other / Not Sure",
    ],
  },
  fr: {
    heroTitle: "Lipolyse par",
    heroHighlight: "Injection",
    heroDescription:
      "Réduction des graisses non chirurgicale ciblant les amas tenaces qui résistent au régime et à l'exercice. Sculptez vos contours avec des traitements par injection de précision et un temps d'arrêt minimal.",
    heroBadges: ["Non chirurgical", "Réduction ciblée des graisses", "Plusieurs zones de traitement"],
    whyTitle: "Pourquoi choisir Dr Laurent",
    whySubtitle:
      "Expertise médicale en remodelage corporel avec des techniques éprouvées et non invasives de réduction des graisses.",
    featureExpertise: "Expertise médicale",
    featureExpertiseDesc:
      "Médecin certifié avec formation spécialisée en remodelage corporel et réduction des graisses par injection.",
    featureSafe: "Sécuritaire et efficace",
    featureSafeDesc:
      "Formules lipolytiques cliniquement prouvées qui détruisent de façon permanente les cellules graisseuses traitées.",
    featureTargeted: "Résultats ciblés",
    featureTargetedDesc:
      "Ciblez précisément les dépôts de graisse tenaces au menton, aux bras, à l'abdomen, aux poignées d'amour et plus encore.",
    featureDowntime: "Temps d'arrêt minimal",
    featureDowntimeDesc:
      "Traitement rapide en clinique avec récupération minimale. Reprenez vos activités quotidiennes le jour même.",
    proceduresTitle: "Zones de traitement",
    proceduresSubtitle:
      "Réduction ciblée des graisses pour plusieurs zones corporelles. Actuellement en promotion jusqu'à Pâques 2026.",
    proc1Title: "Menton (double menton)",
    proc1Desc:
      "Éliminez la graisse sous-mentonnière pour une mâchoire et un profil définis. 510 $ par séance (promo).",
    proc2Title: "Bras",
    proc2Desc:
      "Réduisez la graisse tenace des bras pour des bras plus minces et plus toniques. 595 $ par séance (promo).",
    proc3Title: "Abdomen",
    proc3Desc:
      "Ciblez la graisse abdominale avec des traitements complets ou partiels. À partir de 510 $ pour demi, 765 $ pour abdomen complet (promo).",
    proc4Title: "Poignées d'amour",
    proc4Desc:
      "Sculptez votre taille en réduisant les dépôts de graisse latéraux. 425 $ par séance (promo).",
    proc5Title: "Culotte de cheval et cuisses",
    proc5Desc:
      "Affinez les cuisses extérieures et la culotte de cheval pour des contours plus lisses. À partir de 680 $ par séance (promo).",
    proc6Title: "Graisse du dos et autres zones",
    proc6Desc:
      "Traitez la graisse du dos, des mollets ou des genoux pour un remodelage corporel complet. À partir de 595 $ par séance (promo).",
    step1: "Évaluation corporelle",
    step1Desc:
      "Évaluation de votre distribution de graisse, de la qualité de votre peau et de vos objectifs de remodelage corporel.",
    step2: "Planification du traitement",
    step2Desc:
      "Protocole personnalisé déterminant le nombre de séances et les sites d'injection pour des résultats optimaux.",
    step3: "Injections lipolytiques",
    step3Desc:
      "Injections précises de solution lipolytique dans les zones ciblées. La procédure prend 15 à 30 minutes.",
    step4: "Résultats progressifs",
    step4Desc:
      "Les cellules graisseuses sont graduellement éliminées sur 4 à 6 semaines. Séances de suivi au besoin pour le résultat souhaité.",
    testimonial1Treatment: "Lipolyse du menton",
    testimonial1Text:
      "Mon double menton était ma plus grande insécurité. Après deux séances, il a pratiquement disparu. Le traitement était rapide et les résultats sont remarquables. J'aurais voulu le faire plus tôt!",
    testimonial2Treatment: "Poignées d'amour",
    testimonial2Text:
      "Le régime et l'exercice n'arrivaient pas à venir à bout de mes poignées d'amour. Le traitement de lipolyse de Dr Laurent m'a enfin donné la taille que je voulais. Des soins professionnels du début à la fin.",
    testimonial3Treatment: "Abdomen",
    testimonial3Text:
      "Le traitement abdominal était plus facile que prévu. Un peu de gonflement pendant quelques jours, mais la réduction de graisse au cours des semaines suivantes était impressionnante. Très content de mes résultats.",
    faq1Q: "Comment fonctionne la lipolyse par injection?",
    faq1A:
      "La lipolyse par injection utilise une solution lipolytique qui est injectée directement dans les dépôts de graisse tenaces. La solution décompose les membranes des cellules graisseuses, et le corps métabolise et élimine naturellement les cellules détruites au cours de plusieurs semaines.",
    faq2Q: "La réduction de graisse est-elle permanente?",
    faq2A:
      "Oui. Une fois les cellules graisseuses détruites, elles ne se régénèrent pas. Cependant, les cellules restantes peuvent encore grossir avec un gain de poids important, donc maintenir un mode de vie sain aide à préserver vos résultats.",
    faq3Q: "Combien de séances sont nécessaires?",
    faq3A:
      "La plupart des patients nécessitent 2 à 4 séances espacées de 4 à 6 semaines pour des résultats optimaux. Le nombre de séances dépend de la zone de traitement et de la quantité de graisse à réduire.",
    faq4Q: "Quels sont les effets secondaires?",
    faq4A:
      "Les effets secondaires courants comprennent un gonflement temporaire, des rougeurs, des ecchymoses et une sensibilité au site d'injection. Ceux-ci se résorbent généralement en quelques jours à une semaine. Les effets secondaires graves sont rares.",
    faq5Q: "Qui est un bon candidat pour la lipolyse?",
    faq5A:
      "Les candidats idéaux sont à leur poids cible ou près de celui-ci avec des dépôts de graisse localisés qui ne répondent pas au régime et à l'exercice. La lipolyse n'est pas un traitement de perte de poids mais plutôt une solution de remodelage corporel.",
    faq6Q: "Y a-t-il des promotions en cours?",
    faq6A:
      "Oui! Nous offrons actuellement des prix promotionnels sur tous les traitements de lipolyse jusqu'à Pâques 2026, avec des économies de 15 % sur toutes les zones de traitement. Contactez-nous pour les détails.",
    formTitle: "Réservez votre consultation",
    formOptions: [
      "Menton (double menton)",
      "Bras",
      "Abdomen",
      "Poignées d'amour",
      "Cuisses / Culotte de cheval",
      "Graisse du dos",
      "Autre / Pas certain(e)",
    ],
  },
};

export function LipolysisContent() {
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
        { icon: Shield, title: c.featureSafe, desc: c.featureSafeDesc },
        { icon: Sparkles, title: c.featureTargeted, desc: c.featureTargetedDesc },
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
          name: "Francois B.",
          initial: "F",
          treatment: c.testimonial1Treatment,
          text: c.testimonial1Text,
          rating: 5,
        },
        {
          name: "Catherine L.",
          initial: "C",
          treatment: c.testimonial2Treatment,
          text: c.testimonial2Text,
          rating: 5,
        },
        {
          name: "Marc-Andre V.",
          initial: "M",
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
