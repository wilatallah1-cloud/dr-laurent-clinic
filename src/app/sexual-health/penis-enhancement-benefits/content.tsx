"use client";

import { ServicePageLayout } from "@/components/service-page-layout";
import { Award, Shield, Sparkles, Lock, Heart, TrendingUp } from "lucide-react";

export function PenisEnhancementBenefitsContent() {
  return (
    <ServicePageLayout
      heroTitle="Penis Enhancement"
      heroHighlight="Benefits"
      heroDescription="Non-surgical penile enhancement offers a safe, effective path to increased confidence, improved aesthetics, and enhanced satisfaction with minimal downtime."
      heroBadges={["FDA-approved fillers", "Natural results", "Minimal downtime"]}
      heroImage="https://drlaurentmedecineprivee.ca/assets/hero-medical-consultation-DPuVY465.jpg"
      whyTitle="Key Benefits"
      whySubtitle="Discover how non-surgical penis enhancement can transform your confidence and satisfaction"
      features={[
        {
          icon: TrendingUp,
          title: "Increased Confidence",
          desc: "Enhanced size translates to improved self-esteem and confidence in intimate situations.",
        },
        {
          icon: Sparkles,
          title: "Natural Look & Feel",
          desc: "Premium fillers provide a natural appearance and feel that maintains full sensitivity.",
        },
        {
          icon: Shield,
          title: "Safe & Proven",
          desc: "FDA-approved hyaluronic acid fillers performed in a sterile medical environment.",
        },
        {
          icon: Heart,
          title: "Enhanced Satisfaction",
          desc: "Patients report significantly improved satisfaction and quality of intimate life.",
        },
      ]}
      proceduresTitle="Enhancement Options"
      proceduresSubtitle="Comprehensive treatment options designed for your unique goals"
      procedures={[
        {
          title: "Girth Enhancement",
          desc: "Increase penile circumference using premium hyaluronic acid fillers for natural, even results.",
        },
        {
          title: "Glans Enhancement",
          desc: "Targeted enhancement of the glans for improved proportion and aesthetics.",
        },
        {
          title: "Touchup Packages",
          desc: "Maintenance sessions starting at 6ml ($3,000) to preserve and optimize your results over time.",
        },
        {
          title: "Silver Package - 12ml",
          desc: "Moderate enhancement for natural-looking improvement at $6,000.",
        },
        {
          title: "Gold Package - 18ml",
          desc: "Significant enhancement for noticeable results at $9,000.",
        },
        {
          title: "Platinum Package - 24ml",
          desc: "Maximum enhancement for dramatic transformation at $12,000.",
        },
      ]}
      steps={[
        { step: 1, title: "Free Consultation", desc: "Confidential assessment of your goals, anatomy, and the best approach for your needs." },
        { step: 2, title: "Treatment Planning", desc: "Personalized plan selecting the right package and technique for optimal results." },
        { step: 3, title: "Enhancement Procedure", desc: "Quick 30-45 minute procedure with local anesthetic for maximum comfort." },
        { step: 4, title: "Enjoy Results", desc: "Immediate visible enhancement with full results in 2-4 weeks. Results last 12-18 months." },
      ]}
      testimonials={[
        {
          name: "Michael P.",
          initial: "M",
          treatment: "Girth Enhancement",
          text: "The results are incredible and completely natural-looking. My confidence has skyrocketed. Dr. Laurent's expertise made the whole experience comfortable and professional.",
          rating: 5,
        },
        {
          name: "David R.",
          initial: "D",
          treatment: "Gold Package",
          text: "I was nervous at first, but Dr. Laurent put me at ease immediately. The results exceeded my expectations. Best investment I've ever made in myself.",
          rating: 5,
        },
        {
          name: "Andrew S.",
          initial: "A",
          treatment: "Platinum Package",
          text: "Discreet, professional, and life-changing. The enhancement looks and feels completely natural. Recovery was faster than expected.",
          rating: 5,
        },
      ]}
      faqs={[
        {
          q: "What are the main benefits of penis enhancement?",
          a: "The primary benefits include increased girth and improved proportions, enhanced confidence and self-esteem, improved satisfaction in intimate relationships, natural look and feel, and minimal downtime compared to surgical options.",
        },
        {
          q: "Is the enhancement noticeable?",
          a: "Yes, the enhancement provides a noticeable increase in girth while maintaining a completely natural appearance and feel. The degree of enhancement depends on the package chosen.",
        },
        {
          q: "Will sensitivity be affected?",
          a: "No. The hyaluronic acid fillers used are carefully placed to enhance size without affecting nerve function or sensitivity. Most patients report no change in sensation.",
        },
        {
          q: "How long do the results last?",
          a: "Results typically last 12-18 months depending on the amount of filler used. Touch-up sessions can extend and optimize your results over time.",
        },
        {
          q: "What is the recovery like?",
          a: "Most patients return to normal activities within 24-48 hours. Intimate activities should be avoided for approximately 2 weeks. Mild swelling is normal and resolves quickly.",
        },
        {
          q: "Are the fillers safe?",
          a: "Yes. We use only FDA-approved hyaluronic acid fillers, the same type used in millions of cosmetic procedures worldwide. The procedure is performed in a sterile medical environment by a board-certified physician.",
        },
      ]}
      formTitle="Book Your Consultation"
      formOptions={["Girth Enhancement", "Touchup Package", "Silver Package", "Gold Package", "Platinum Package", "General Information"]}
    />
  );
}
