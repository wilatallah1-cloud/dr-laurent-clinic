"use client";

import { ServicePageLayout } from "@/components/service-page-layout";
import { useLocale } from "@/lib/locale";
import { Award, Shield, Eye, Clock } from "lucide-react";

const content = {
  en: {
    heroTitle: "Non-Surgical",
    heroHighlight: "Blepharoplasty",
    heroDescription:
      "Rejuvenate your eye area without surgery using advanced CO2 laser technology. Tighten sagging eyelids, reduce puffiness, and restore a refreshed, youthful appearance.",
    heroBadges: ["No surgery required", "CO2 laser precision", "Natural rejuvenation"],
    whyTitle: "Why Choose Dr. Laurent",
    whySubtitle:
      "Expert non-surgical eye rejuvenation with precise CO2 laser technology.",
    featureTraining: "Specialized Training",
    featureTrainingDesc:
      "Advanced expertise in periorbital rejuvenation using CO2 laser and complementary technologies.",
    featureSafe: "Safe Alternative",
    featureSafeDesc:
      "Avoid the risks and lengthy recovery of surgical blepharoplasty with this non-invasive approach.",
    featurePrecision: "Precision Results",
    featurePrecisionDesc:
      "CO2 laser precisely targets excess skin and stimulates collagen for tighter, smoother eyelids.",
    featureRecovery: "Quick Recovery",
    featureRecoveryDesc:
      "Significantly shorter recovery compared to surgery. Most patients resume activities within 5-7 days.",
    proceduresTitle: "Our Eye Rejuvenation Treatments",
    proceduresSubtitle:
      "Advanced solutions for eyelid and periorbital rejuvenation.",
    proc1Title: "CO2 Blepharoplasty",
    proc1Desc:
      "Fractional CO2 laser treatment to tighten upper and lower eyelid skin, reducing hooding and wrinkles. $1,500.",
    proc2Title: "Under-Eye Bags (Ultraformer)",
    proc2Desc:
      "HIFU technology to firm and lift the under-eye area, reducing puffiness and hollowing. $750.",
    proc3Title: "Brow Lift (Ultraformer)",
    proc3Desc:
      "Non-surgical brow elevation to open up the eye area and create a more alert, youthful look. $750.",
    proc4Title: "Periorbital RF Treatment",
    proc4Desc:
      "Radiofrequency to smooth fine lines, crow's feet, and crepey skin around the eyes. $250.",
    proc5Title: "CO2 + PRP Combination",
    proc5Desc:
      "Enhanced healing and results by combining CO2 laser with platelet-rich plasma. CO2 + $300 PRP add-on.",
    proc6Title: "Comprehensive Eye Package",
    proc6Desc:
      "Multi-treatment approach combining laser, RF, and/or HIFU for complete periorbital rejuvenation.",
    step1: "Eye Area Assessment",
    step1Desc:
      "Detailed evaluation of eyelid skin, fat pads, brow position, and your specific concerns.",
    step2: "Treatment Planning",
    step2Desc:
      "Customized protocol selecting the ideal technology and approach for your eye rejuvenation goals.",
    step3: "Laser Treatment",
    step3Desc:
      "Precise CO2 laser application to the eyelid area with topical anesthesia for comfort.",
    step4: "Healing & Results",
    step4Desc:
      "Guided aftercare during the healing phase. Collagen remodeling continues for 3-6 months.",
    testimonial1Treatment: "CO2 Blepharoplasty",
    testimonial1Text:
      "My hooded eyelids made me look tired all the time. The CO2 blepharoplasty tightened my lids beautifully without surgery. People constantly tell me I look rested and refreshed!",
    testimonial2Treatment: "Eye Rejuvenation",
    testimonial2Text:
      "I was considering surgical blepharoplasty but wanted to try the non-surgical option first. The results are remarkable. Tighter skin, fewer wrinkles, and I avoided surgery entirely.",
    testimonial3Treatment: "Brow Lift + CO2",
    testimonial3Text:
      "The combination of brow lift and CO2 treatment opened up my entire eye area. I look years younger and more alert. The recovery was so much easier than surgery would have been.",
    faq1Q: "What is non-surgical blepharoplasty?",
    faq1A:
      "Non-surgical blepharoplasty uses CO2 laser technology to tighten and rejuvenate the eyelid skin without incisions or surgery. The laser precisely removes a thin layer of skin and stimulates deep collagen production, resulting in tighter, smoother eyelids.",
    faq2Q: "How does it compare to surgical blepharoplasty?",
    faq2A:
      "Non-surgical CO2 blepharoplasty is ideal for mild to moderate eyelid laxity. It offers shorter recovery, no incisions, and no scarring. Surgical blepharoplasty may be more appropriate for severe hooding or fat pad repositioning. Dr. Laurent will advise you on the best option.",
    faq3Q: "What is the recovery like?",
    faq3A:
      "Expect redness, swelling, and a sunburn-like feeling for 3-5 days. The skin will peel as it heals over 5-7 days. Most patients feel comfortable returning to social activities within a week. Full results develop over 2-3 months.",
    faq4Q: "Is the procedure painful?",
    faq4A:
      "Topical numbing cream is applied to the treatment area before the procedure. Most patients feel only warmth or slight tingling during the laser application. Post-treatment discomfort is mild and managed with aftercare products.",
    faq5Q: "How long do results last?",
    faq5A:
      "Results can last 2-5 years depending on your skin quality, age, and lifestyle. Maintenance sessions can be performed to sustain your results. Sun protection is essential for preserving your outcomes.",
    faq6Q: "Can non-surgical blepharoplasty be combined with other treatments?",
    faq6A:
      "Yes. It pairs excellently with Ultraformer HIFU for brow lifting, PRP for enhanced healing, and radiofrequency for crow's feet. Dr. Laurent will create a comprehensive plan during your consultation.",
    formTitle: "Book Your Consultation",
    formOptions: [
      "CO2 Blepharoplasty",
      "Under-Eye Bags",
      "Brow Lift",
      "Complete Eye Rejuvenation",
      "Other / Not Sure",
    ],
  },
  fr: {
    heroTitle: "Blépharoplastie",
    heroHighlight: "Non Chirurgicale",
    heroDescription:
      "Rajeunissez votre regard sans chirurgie grâce à la technologie laser CO2 avancée. Raffermissez les paupières tombantes, réduisez les poches et retrouvez une apparence fraîche et rajeunie.",
    heroBadges: ["Sans chirurgie", "Précision laser CO2", "Rajeunissement naturel"],
    whyTitle: "Pourquoi choisir Dr Laurent",
    whySubtitle:
      "Expert en rajeunissement non chirurgical du regard avec la technologie laser CO2 de précision.",
    featureTraining: "Formation spécialisée",
    featureTrainingDesc:
      "Expertise avancée en rajeunissement périorbitaire utilisant le laser CO2 et des technologies complémentaires.",
    featureSafe: "Alternative sécuritaire",
    featureSafeDesc:
      "Évitez les risques et la longue récupération de la blépharoplastie chirurgicale avec cette approche non invasive.",
    featurePrecision: "Résultats de précision",
    featurePrecisionDesc:
      "Le laser CO2 cible précisément l'excès de peau et stimule le collagène pour des paupières plus fermes et plus lisses.",
    featureRecovery: "Récupération rapide",
    featureRecoveryDesc:
      "Récupération significativement plus courte comparée à la chirurgie. La plupart des patients reprennent leurs activités en 5 à 7 jours.",
    proceduresTitle: "Nos traitements de rajeunissement du regard",
    proceduresSubtitle:
      "Solutions avancées pour le rajeunissement des paupières et de la zone périorbitaire.",
    proc1Title: "Blépharoplastie CO2",
    proc1Desc:
      "Traitement laser CO2 fractionné pour raffermir la peau des paupières supérieures et inférieures, réduisant le capuchon et les rides. 1 500 $.",
    proc2Title: "Poches sous les yeux (Ultraformer)",
    proc2Desc:
      "Technologie HIFU pour raffermir et soulever la zone sous les yeux, réduisant les poches et le creusement. 750 $.",
    proc3Title: "Lifting des sourcils (Ultraformer)",
    proc3Desc:
      "Élévation non chirurgicale des sourcils pour ouvrir le regard et créer une apparence plus alerte et rajeunie. 750 $.",
    proc4Title: "Traitement RF périorbitaire",
    proc4Desc:
      "Radiofréquence pour lisser les rides fines, les pattes d'oie et la peau crêpée autour des yeux. 250 $.",
    proc5Title: "Combinaison CO2 + PRP",
    proc5Desc:
      "Guérison et résultats améliorés en combinant le laser CO2 avec le plasma riche en plaquettes. CO2 + ajout PRP 300 $.",
    proc6Title: "Forfait complet du regard",
    proc6Desc:
      "Approche multi-traitement combinant laser, RF et/ou HIFU pour un rajeunissement périorbitaire complet.",
    step1: "Évaluation du contour des yeux",
    step1Desc:
      "Évaluation détaillée de la peau des paupières, des coussinets graisseux, de la position des sourcils et de vos préoccupations spécifiques.",
    step2: "Planification du traitement",
    step2Desc:
      "Protocole personnalisé sélectionnant la technologie et l'approche idéales pour vos objectifs de rajeunissement du regard.",
    step3: "Traitement laser",
    step3Desc:
      "Application laser CO2 précise sur la zone des paupières avec anesthésie topique pour le confort.",
    step4: "Guérison et résultats",
    step4Desc:
      "Suivi guidé pendant la phase de guérison. Le remodelage du collagène se poursuit pendant 3 à 6 mois.",
    testimonial1Treatment: "Blépharoplastie CO2",
    testimonial1Text:
      "Mes paupières tombantes me donnaient l'air fatiguée tout le temps. La blépharoplastie CO2 a raffermi mes paupières magnifiquement sans chirurgie. Les gens me disent constamment que j'ai l'air reposée et rafraîchie!",
    testimonial2Treatment: "Rajeunissement du regard",
    testimonial2Text:
      "J'envisageais la blépharoplastie chirurgicale mais je voulais d'abord essayer l'option non chirurgicale. Les résultats sont remarquables. Peau plus ferme, moins de rides, et j'ai complètement évité la chirurgie.",
    testimonial3Treatment: "Lifting des sourcils + CO2",
    testimonial3Text:
      "La combinaison du lifting des sourcils et du traitement CO2 a ouvert tout mon regard. J'ai l'air de plusieurs années plus jeune et plus alerte. La récupération était tellement plus facile que la chirurgie l'aurait été.",
    faq1Q: "Qu'est-ce que la blépharoplastie non chirurgicale?",
    faq1A:
      "La blépharoplastie non chirurgicale utilise la technologie laser CO2 pour raffermir et rajeunir la peau des paupières sans incisions ni chirurgie. Le laser retire précisément une fine couche de peau et stimule la production profonde de collagène, résultant en des paupières plus fermes et plus lisses.",
    faq2Q: "Comment se compare-t-elle à la blépharoplastie chirurgicale?",
    faq2A:
      "La blépharoplastie CO2 non chirurgicale est idéale pour un relâchement léger à modéré des paupières. Elle offre une récupération plus courte, aucune incision et aucune cicatrice. La blépharoplastie chirurgicale peut être plus appropriée pour un capuchon sévère ou le repositionnement des coussinets graisseux. Dr Laurent vous conseillera sur la meilleure option.",
    faq3Q: "Comment se passe la récupération?",
    faq3A:
      "Attendez-vous à des rougeurs, un gonflement et une sensation semblable à un coup de soleil pendant 3 à 5 jours. La peau pèlera en guérissant sur 5 à 7 jours. La plupart des patients se sentent à l'aise pour reprendre les activités sociales en une semaine. Les résultats complets se développent sur 2 à 3 mois.",
    faq4Q: "La procédure est-elle douloureuse?",
    faq4A:
      "Une crème anesthésiante topique est appliquée sur la zone de traitement avant la procédure. La plupart des patients ne ressentent que de la chaleur ou un léger picotement pendant l'application du laser. L'inconfort post-traitement est léger et géré avec des produits de soins.",
    faq5Q: "Combien de temps durent les résultats?",
    faq5A:
      "Les résultats peuvent durer de 2 à 5 ans selon la qualité de votre peau, votre âge et votre mode de vie. Des séances d'entretien peuvent être effectuées pour maintenir vos résultats. La protection solaire est essentielle pour préserver vos résultats.",
    faq6Q: "La blépharoplastie non chirurgicale peut-elle être combinée avec d'autres traitements?",
    faq6A:
      "Oui. Elle se marie parfaitement avec l'Ultraformer HIFU pour le lifting des sourcils, le PRP pour une guérison améliorée et la radiofréquence pour les pattes d'oie. Dr Laurent créera un plan complet lors de votre consultation.",
    formTitle: "Réservez votre consultation",
    formOptions: [
      "Blépharoplastie CO2",
      "Poches sous les yeux",
      "Lifting des sourcils",
      "Rajeunissement complet du regard",
      "Autre / Pas certain(e)",
    ],
  },
};

export function NonSurgicalBlepharoplastyContent() {
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
        { icon: Award, title: c.featureTraining, desc: c.featureTrainingDesc },
        { icon: Shield, title: c.featureSafe, desc: c.featureSafeDesc },
        { icon: Eye, title: c.featurePrecision, desc: c.featurePrecisionDesc },
        { icon: Clock, title: c.featureRecovery, desc: c.featureRecoveryDesc },
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
          name: "Louise D.",
          initial: "L",
          treatment: c.testimonial1Treatment,
          text: c.testimonial1Text,
          rating: 5,
        },
        {
          name: "Patricia G.",
          initial: "P",
          treatment: c.testimonial2Treatment,
          text: c.testimonial2Text,
          rating: 5,
        },
        {
          name: "Diane M.",
          initial: "D",
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
