"use client";

import { ServicePageLayout } from "@/components/service-page-layout";
import { Award, Shield, Sparkles, Lock } from "lucide-react";

export function PenisFiltersContent() {
  return (
    <ServicePageLayout
      heroTitle="Enhanced Confidence &"
      heroHighlight="Satisfaction"
      heroDescription="Advanced, non-surgical penis enhancement using FDA-approved dermal fillers for natural-looking results and increased confidence."
      heroBadges={["FDA-approved fillers", "Medical expertise", "Discreet care"]}
      heroImage="https://drlaurentmedecineprivee.ca/assets/hero-medical-consultation-DPuVY465.jpg"
      whyTitle="Why Choose Dr. Laurent"
      whySubtitle="Medical excellence combined with discreet, professional care in male enhancement procedures."
      features={[
        {
          icon: Award,
          title: "Medical Expertise",
          desc: "Board-certified physician with specialized training in male enhancement procedures and medical aesthetic.",
        },
        {
          icon: Shield,
          title: "FDA-Approved Fillers",
          desc: "Using only premium, FDA-approved hyaluronic acid fillers in sterile medical environment.",
        },
        {
          icon: Sparkles,
          title: "Natural Results",
          desc: "Techniques that maintain sensitivity and function while providing natural-looking enhancement.",
        },
        {
          icon: Lock,
          title: "Discreet & Confidential",
          desc: "Complete privacy and confidentiality throughout your entire journey with us.",
        },
      ]}
      proceduresTitle="Our Enhancement Procedures"
      proceduresSubtitle="Comprehensive treatment options designed to enhance your confidence and satisfaction."
      procedures={[
        {
          title: "Girth Enhancement",
          desc: "Increase penile circumference using FDA-approved hyaluronic acid fillers for natural results.",
        },
        {
          title: "Natural Look & Feel",
          desc: "Maintains sensitivity and function while providing smooth, natural-looking enhancement.",
        },
        {
          title: "Minimal Downtime",
          desc: "Quick 30-45 minute procedure with minimal recovery time—return to normal activities quickly.",
        },
        {
          title: "Confidence Boost",
          desc: "Enhanced size translates to improved self-esteem and confidence in intimate situations.",
        },
        {
          title: "Long-Lasting Results",
          desc: "Results typically last 12-18 months with proper care and optional maintenance sessions.",
        },
        {
          title: "Safe & Proven",
          desc: "FDA-approved fillers in sterile medical environment with board-certified physician.",
        },
      ]}
      steps={[
        { step: 1, title: "Initial Consultation", desc: "Confidential assessment of your goals and anatomy" },
        { step: 2, title: "Treatment Planning", desc: "Personalized plan tailored to your specific needs" },
        { step: 3, title: "Treatment Session", desc: "Quick 30-45 minute procedure with local anesthetic" },
        { step: 4, title: "Follow-Up Care", desc: "Monitoring and optional touch-ups for optimal results" },
      ]}
      testimonials={[
        {
          name: "Michael P.",
          initial: "M",
          treatment: "Girth Enhancement",
          text: "The procedure was quick, discreet, and professional. Dr. Laurent made me feel completely comfortable throughout. The results exceeded my expectations and my confidence has soared!",
          rating: 5,
        },
        {
          name: "David R.",
          initial: "D",
          treatment: "Enhancement Procedure",
          text: "I was nervous at first, but the entire experience was handled with such professionalism and care. The results look natural and feel amazing. Best decision I've made for myself!",
          rating: 5,
        },
        {
          name: "Andrew S.",
          initial: "A",
          treatment: "Girth Enhancement",
          text: "The privacy and discretion were impeccable. Dr. Laurent's expertise showed in every aspect. Recovery was quick and the enhancement is exactly what I hoped for. Highly recommend!",
          rating: 5,
        },
      ]}
      faqs={[
        {
          q: "Am I a good candidate for penis fillers?",
          a: "Most healthy adult men are candidates for this procedure. During your confidential consultation, Dr. Laurent will assess your anatomy, discuss your goals, and determine the best approach for your specific needs.",
        },
        {
          q: "What should I expect during the procedure?",
          a: "The procedure takes approximately 30-45 minutes. Local anesthetic is applied for comfort. FDA-approved hyaluronic acid fillers are carefully injected using specialized techniques for even, natural-looking enhancement.",
        },
        {
          q: "How should I prepare for my appointment?",
          a: "Avoid blood-thinning medications and supplements for one week prior. Come to your appointment well-hydrated. Dr. Laurent will provide detailed preparation instructions during your consultation.",
        },
        {
          q: "What is the recovery time after treatment?",
          a: "Most patients return to normal activities within 24-48 hours. Intimate activities should be avoided for approximately 2 weeks. Mild swelling and sensitivity are normal and resolve quickly.",
        },
        {
          q: "How long do results last?",
          a: "Results typically last 12-18 months depending on the type and amount of filler used. Optional maintenance sessions can extend and enhance your results over time.",
        },
        {
          q: "Will the enhancement feel natural?",
          a: "Yes. The hyaluronic acid fillers used are soft and pliable, providing a natural feel. Dr. Laurent's expertise ensures even distribution for smooth, natural-looking and natural-feeling results.",
        },
      ]}
      formTitle="Book Your Consultation"
      formOptions={["Girth Enhancement", "General Information", "Initial Consultation", "Other / Not Sure"]}
    />
  );
}
