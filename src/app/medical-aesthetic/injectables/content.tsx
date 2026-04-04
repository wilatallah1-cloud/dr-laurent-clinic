"use client";

import { ServicePageLayout } from "@/components/service-page-layout";
import { Award, Shield, Sparkles, Syringe } from "lucide-react";

export function InjectablesContent() {
  return (
    <ServicePageLayout
      heroTitle="Injectables &"
      heroHighlight="Fillers"
      heroDescription="Botox, dermal fillers, and advanced injectable treatments designed to enhance your natural beauty with subtle, elegant results."
      heroBadges={["FDA-approved products", "Precision techniques", "Natural results"]}
      heroImage="https://drlaurentmedecineprivee.ca/assets/hero-background-injectables-sHrFXrk2.jpg"
      whyTitle="Why Choose Dr. Laurent"
      whySubtitle="Medical expertise combined with an artistic eye for naturally beautiful results."
      features={[
        {
          icon: Award,
          title: "Medical Expertise",
          desc: "Board-certified physician with advanced training in injectable techniques and facial anatomy.",
        },
        {
          icon: Shield,
          title: "Premium Products",
          desc: "Only FDA-approved neuromodulators (Dysport, Xeomin, Letybo) and premium hyaluronic acid fillers.",
        },
        {
          icon: Sparkles,
          title: "Natural Results",
          desc: "Subtle, refined enhancements that preserve your natural expressions and facial harmony.",
        },
        {
          icon: Syringe,
          title: "Precision Techniques",
          desc: "Advanced injection methods for optimal comfort, minimal bruising, and beautiful outcomes.",
        },
      ]}
      proceduresTitle="Our Injectable Treatments"
      proceduresSubtitle="Comprehensive solutions for facial rejuvenation and enhancement."
      procedures={[
        {
          title: "Neuromodulators (Botox)",
          desc: "Dysport, Xeomin, and Letybo to smooth dynamic wrinkles on the forehead, crow's feet, and frown lines. Starting at $10/unit.",
        },
        {
          title: "Hyaluronic Acid Fillers",
          desc: "Restore volume, define contours, and smooth lines in the lips, cheeks, jawline, and under-eyes. From $525 per half syringe.",
        },
        {
          title: "Sculptra",
          desc: "Biostimulatory collagen-boosting injections for gradual, long-lasting facial volume restoration. $800 per session.",
        },
        {
          title: "Radiesse",
          desc: "Calcium-based filler for deep volume restoration and collagen stimulation in cheeks and hands. $850 per session.",
        },
        {
          title: "VAMP Treatment",
          desc: "Innovative micro-injection technique to improve skin quality, hydration, and radiance. $350 per syringe.",
        },
        {
          title: "Facial Transformation",
          desc: "Comprehensive multi-syringe treatment plans to reshape and rejuvenate the entire face. Starting from $2,000.",
        },
      ]}
      steps={[
        { step: 1, title: "Consultation & Assessment", desc: "Detailed facial analysis and personalized treatment plan based on your goals and anatomy." },
        { step: 2, title: "Treatment Preparation", desc: "Topical numbing is applied for comfort. Treatment areas are mapped with precision." },
        { step: 3, title: "Expert Injection", desc: "Products are carefully administered using advanced techniques for natural, balanced results." },
        { step: 4, title: "Follow-Up & Maintenance", desc: "Review appointment to assess results and plan future maintenance treatments." },
      ]}
      testimonials={[
        {
          name: "Sophie L.",
          initial: "S",
          treatment: "Dermal Fillers",
          text: "Dr. Laurent has an incredible eye for detail. My fillers look so natural that friends just say I look 'refreshed.' Exactly what I wanted!",
          rating: 5,
        },
        {
          name: "Nathalie R.",
          initial: "N",
          treatment: "Botox",
          text: "I was afraid of looking frozen, but Dr. Laurent's technique is so precise. I can still express myself fully while looking years younger.",
          rating: 5,
        },
        {
          name: "Caroline M.",
          initial: "C",
          treatment: "Full Face Rejuvenation",
          text: "The facial transformation package was worth every penny. Dr. Laurent created a comprehensive plan that addressed all my concerns. I feel like myself again!",
          rating: 5,
        },
      ]}
      faqs={[
        {
          q: "What is the difference between Botox and fillers?",
          a: "Neuromodulators (Botox/Dysport/Xeomin) relax muscles to smooth dynamic wrinkles like forehead lines and crow's feet. Dermal fillers add volume to areas like cheeks, lips, and nasolabial folds. Many patients benefit from a combination of both for comprehensive rejuvenation.",
        },
        {
          q: "How long do injectable results last?",
          a: "Neuromodulators typically last 3-4 months. Hyaluronic acid fillers last 6-18 months depending on the product and treatment area. Sculptra results can last up to 2 years as it stimulates your own collagen production.",
        },
        {
          q: "Is the treatment painful?",
          a: "Most patients report only mild discomfort. We apply topical numbing cream before treatment, and many fillers contain lidocaine for added comfort. The procedure is very well tolerated.",
        },
        {
          q: "What is the recovery time?",
          a: "Most patients return to normal activities immediately. Minor swelling or bruising may occur and typically resolves within a few days. We recommend avoiding strenuous exercise for 24 hours.",
        },
        {
          q: "How much do injectables cost?",
          a: "Neuromodulators start at $10-12 per unit. Hyaluronic acid fillers start at $525 for a half syringe and $750 for a full syringe. A personalized quote is provided during your consultation based on your treatment plan.",
        },
        {
          q: "Can injectables be reversed?",
          a: "Hyaluronic acid fillers can be dissolved with hyaluronidase if needed. Neuromodulators naturally wear off over 3-4 months. Dr. Laurent always takes a conservative approach to ensure you're happy with your results.",
        },
      ]}
      formTitle="Book Your Consultation"
      formOptions={[
        "Botox / Neuromodulators",
        "Dermal Fillers",
        "Sculptra",
        "Radiesse",
        "Full Face Rejuvenation",
        "Other / Not Sure",
      ]}
    />
  );
}
