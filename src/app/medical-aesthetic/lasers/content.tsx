"use client";

import { ServicePageLayout } from "@/components/service-page-layout";
import { Award, Shield, Sparkles, Zap } from "lucide-react";

export function LasersContent() {
  return (
    <ServicePageLayout
      heroTitle="Advanced Laser"
      heroHighlight="Treatments"
      heroDescription="State-of-the-art laser technology for skin rejuvenation, hair removal, tattoo removal, and pigmentation correction. Precision treatments for transformative results."
      heroBadges={["Multiple laser platforms", "All skin types", "Proven results"]}
      heroImage="https://drlaurentmedecineprivee.ca/assets/hero-background-injectables-sHrFXrk2.jpg"
      whyTitle="Why Choose Dr. Laurent"
      whySubtitle="A comprehensive suite of medical-grade lasers operated by experienced professionals."
      features={[
        {
          icon: Award,
          title: "Multiple Platforms",
          desc: "Clarity, Potenza, PicoSure Pro, CO2 Tetra, Ultra, and Cynoglow — the right laser for every concern.",
        },
        {
          icon: Shield,
          title: "Medical-Grade Safety",
          desc: "All treatments performed under physician supervision with FDA-cleared devices and strict safety protocols.",
        },
        {
          icon: Sparkles,
          title: "Transformative Results",
          desc: "Treat pigmentation, scars, wrinkles, unwanted hair, tattoos, and more with precision laser energy.",
        },
        {
          icon: Zap,
          title: "Advanced Technology",
          desc: "Latest-generation laser systems for faster treatments, greater comfort, and superior outcomes.",
        },
      ]}
      proceduresTitle="Our Laser Treatments"
      proceduresSubtitle="Comprehensive laser solutions for skin rejuvenation, hair removal, and more."
      procedures={[
        {
          title: "Laser Hair Removal (Clarity)",
          desc: "Permanent hair reduction for all skin types. Treat face, body, and intimate areas. Starting at $60 per zone.",
        },
        {
          title: "Potenza RF Microneedling",
          desc: "Radiofrequency microneedling for acne scars, fine lines, and skin texture. Full face from $750.",
        },
        {
          title: "PicoSure Pro",
          desc: "Ultra-fast picosecond laser for pigmentation, melasma, acne scars, and skin revitalization. Full face from $800.",
        },
        {
          title: "CO2 Ablative Resurfacing",
          desc: "Fractional CO2 laser for deep wrinkles, scars, and comprehensive skin renewal. Full face from $1,800.",
        },
        {
          title: "Cool Peel (CO2 Tetra Pro)",
          desc: "Gentle fractional CO2 treatment with minimal downtime for skin texture and tone improvement. Full face from $800.",
        },
        {
          title: "Tattoo Removal (PicoSure Pro)",
          desc: "Advanced picosecond technology for effective removal of all ink colors. Starting at $99 per session.",
        },
      ]}
      steps={[
        { step: 1, title: "Skin Consultation", desc: "Assessment of your skin type, concerns, and goals to select the optimal laser platform." },
        { step: 2, title: "Treatment Planning", desc: "Customized protocol with appropriate settings, number of sessions, and expected outcomes." },
        { step: 3, title: "Laser Treatment", desc: "Precise laser application with cooling and comfort measures for an optimal experience." },
        { step: 4, title: "Post-Care & Follow-Up", desc: "Detailed aftercare instructions and follow-up appointments to monitor your results." },
      ]}
      testimonials={[
        {
          name: "Amelie B.",
          initial: "A",
          treatment: "PicoSure Pro",
          text: "My sun spots and melasma have dramatically improved after just two PicoSure sessions. My skin looks so much more even and radiant. Incredible technology!",
          rating: 5,
        },
        {
          name: "Laurent G.",
          initial: "L",
          treatment: "Laser Hair Removal",
          text: "After years of waxing, laser hair removal was a game-changer. The Clarity laser worked perfectly on my skin tone. Smooth skin with lasting results!",
          rating: 5,
        },
        {
          name: "Stephanie K.",
          initial: "S",
          treatment: "CO2 Resurfacing",
          text: "The CO2 treatment took years off my face. Yes, there's some downtime, but the results are absolutely worth it. My skin texture is completely transformed.",
          rating: 5,
        },
      ]}
      faqs={[
        {
          q: "Which laser treatment is right for me?",
          a: "The best laser depends on your specific concern, skin type, and goals. During your consultation, Dr. Laurent will assess your skin and recommend the most appropriate laser platform and treatment plan.",
        },
        {
          q: "How many laser sessions are needed?",
          a: "It varies by treatment. Laser hair removal typically requires 6-8 sessions. PicoSure for pigmentation may need 2-4 sessions. CO2 resurfacing often delivers dramatic results in a single session. A personalized plan is created during your consultation.",
        },
        {
          q: "Is laser treatment painful?",
          a: "Comfort levels vary by treatment type. Hair removal feels like a light snap. RF microneedling uses topical numbing for comfort. CO2 treatments involve numbing cream and post-treatment care. We prioritize your comfort throughout every procedure.",
        },
        {
          q: "What is the downtime for laser treatments?",
          a: "It depends on the treatment intensity. Hair removal has no downtime. PicoSure may cause mild redness for 24 hours. CO2 ablative treatments require 5-10 days of healing. Dr. Laurent will explain the recovery for your specific treatment.",
        },
        {
          q: "Are laser treatments safe for darker skin tones?",
          a: "Yes. Our Clarity laser is specifically designed to safely treat all skin types, including darker skin tones. During your consultation, we select the appropriate laser and settings for your skin type to ensure safe, effective treatment.",
        },
        {
          q: "How much do laser treatments cost?",
          a: "Prices vary by treatment and area. Laser hair removal starts at $60 per zone. PicoSure starts at $800 for full face. CO2 resurfacing starts at $800 for Cool Peel. Contact us for a personalized quote based on your treatment plan.",
        },
      ]}
      formTitle="Book Your Consultation"
      formOptions={[
        "Laser Hair Removal",
        "PicoSure Pro (Pigmentation / Scars)",
        "Potenza RF Microneedling",
        "CO2 Resurfacing",
        "Tattoo Removal",
        "Other / Not Sure",
      ]}
    />
  );
}
