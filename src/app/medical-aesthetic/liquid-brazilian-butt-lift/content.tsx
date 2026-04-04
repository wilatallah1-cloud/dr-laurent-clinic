"use client";

import { ServicePageLayout } from "@/components/service-page-layout";
import { Award, Shield, Sparkles, Heart } from "lucide-react";

export function LiquidBBLContent() {
  return (
    <ServicePageLayout
      heroTitle="Liquid Brazilian"
      heroHighlight="Butt Lift"
      heroDescription="Non-surgical buttock enhancement using premium dermal fillers and Radiesse for natural volume, lift, and contouring — without surgery, general anesthesia, or extended downtime."
      heroBadges={["Non-surgical", "Natural-looking results", "Minimal downtime"]}
      heroImage="https://drlaurentmedecineprivee.ca/assets/hero-background-injectables-sHrFXrk2.jpg"
      whyTitle="Why Choose Dr. Laurent"
      whySubtitle="Expert non-surgical body contouring for natural, beautiful results."
      features={[
        {
          icon: Award,
          title: "Specialized Expertise",
          desc: "Extensive experience in non-surgical buttock augmentation with advanced injection techniques.",
        },
        {
          icon: Shield,
          title: "Premium Products",
          desc: "Using high-quality hyaluronic acid fillers and Radiesse for safe, predictable results.",
        },
        {
          icon: Sparkles,
          title: "Natural Contour",
          desc: "Sculpted, proportional enhancement that complements your natural body shape and curves.",
        },
        {
          icon: Heart,
          title: "Patient Comfort",
          desc: "Gentle approach with local anesthesia for a comfortable experience and quick recovery.",
        },
      ]}
      proceduresTitle="Our Liquid BBL Options"
      proceduresSubtitle="Customized treatment plans to achieve your ideal shape and volume."
      procedures={[
        {
          title: "Liquid BBL with Filler",
          desc: "Hyaluronic acid-based augmentation for volume and lift. Natural feel with immediate results. From $4,500.",
        },
        {
          title: "Liquid BBL with Radiesse",
          desc: "Calcium hydroxylapatite filler for volume plus collagen stimulation. Longer-lasting structural support. From $3,200.",
        },
        {
          title: "Additional Targeted Zone",
          desc: "Extra volume for specific areas like hip dips or lateral projection. $700 per 10cc of additional product.",
        },
        {
          title: "Touch-Up Treatment",
          desc: "Minor refinement session within 6 weeks of initial treatment for optimal contour. $800.",
        },
        {
          title: "Volume Enhancement",
          desc: "Larger volume treatment for more significant augmentation and projection, customized to your goals.",
        },
        {
          title: "Combination Approach",
          desc: "Strategic use of both fillers and Radiesse for optimal volume, lift, and longevity of results.",
        },
      ]}
      steps={[
        { step: 1, title: "Body Consultation", desc: "Assessment of your anatomy, proportions, and desired outcome. Discussion of product options." },
        { step: 2, title: "Treatment Design", desc: "Mapping of injection sites and volume plan to achieve balanced, proportional enhancement." },
        { step: 3, title: "Injection Procedure", desc: "Strategic product placement using advanced techniques for smooth, natural contouring." },
        { step: 4, title: "Follow-Up & Touch-Up", desc: "Review appointment to assess results. Optional touch-up available within 6 weeks." },
      ]}
      testimonials={[
        {
          name: "Jessica M.",
          initial: "J",
          treatment: "Liquid BBL",
          text: "I wanted more curves but didn't want surgery. The liquid BBL gave me the shape I wanted with zero downtime. Dr. Laurent really understood my goals and delivered beautifully.",
          rating: 5,
        },
        {
          name: "Daniella R.",
          initial: "D",
          treatment: "Liquid BBL - Radiesse",
          text: "The Radiesse option was perfect for me — more structure and longer-lasting results. My shape looks so natural and proportional. Friends think I've just been working out!",
          rating: 5,
        },
        {
          name: "Samantha T.",
          initial: "S",
          treatment: "Liquid BBL + Hip Dips",
          text: "Dr. Laurent addressed both my hip dips and overall volume in one session. The results are exactly what I showed him in my reference photos. So happy!",
          rating: 5,
        },
      ]}
      faqs={[
        {
          q: "What is a liquid BBL?",
          a: "A liquid BBL is a non-surgical buttock enhancement that uses injectable fillers (hyaluronic acid or Radiesse) to add volume, lift, and contour to the buttocks. Unlike a surgical BBL, there is no fat transfer, general anesthesia, or extended recovery.",
        },
        {
          q: "How long do results last?",
          a: "Hyaluronic acid filler results typically last 12-18 months. Radiesse results can last 18-24 months due to its collagen-stimulating properties. Maintenance sessions can extend your results over time.",
        },
        {
          q: "What is the difference between filler and Radiesse options?",
          a: "Hyaluronic acid fillers provide immediate volume and a soft, natural feel. Radiesse is a calcium-based filler that provides structural support and stimulates your body's own collagen production for longer-lasting results. Dr. Laurent will recommend the best option based on your goals.",
        },
        {
          q: "Is the procedure painful?",
          a: "Local anesthesia is used to ensure your comfort throughout the procedure. Most patients report only mild pressure during treatment. Any post-treatment discomfort is minimal and manageable.",
        },
        {
          q: "What is the recovery time?",
          a: "Most patients return to normal activities within 24-48 hours. You should avoid sitting directly on the treated area for a few days and avoid strenuous exercise for about one week.",
        },
        {
          q: "How much product is typically used?",
          a: "The amount varies based on your goals and starting anatomy. A typical session uses 20-60cc of product. Dr. Laurent will provide a personalized estimate during your consultation.",
        },
      ]}
      formTitle="Book Your Consultation"
      formOptions={[
        "Liquid BBL - Filler",
        "Liquid BBL - Radiesse",
        "Hip Dip Correction",
        "Touch-Up Treatment",
        "Other / Not Sure",
      ]}
    />
  );
}
