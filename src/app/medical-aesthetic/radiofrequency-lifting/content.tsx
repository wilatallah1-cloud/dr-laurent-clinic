"use client";

import { ServicePageLayout } from "@/components/service-page-layout";
import { Award, Shield, Zap, Clock } from "lucide-react";

export function RadiofrequencyLiftingContent() {
  return (
    <ServicePageLayout
      heroTitle="Radiofrequency"
      heroHighlight="Lifting"
      heroDescription="Non-surgical skin tightening and lifting using advanced radiofrequency and HIFU technology. Achieve firmer, more youthful skin without surgery or downtime."
      heroBadges={["Non-surgical lifting", "Collagen stimulation", "No downtime"]}
      heroImage="https://drlaurentmedecineprivee.ca/assets/hero-background-injectables-sHrFXrk2.jpg"
      whyTitle="Why Choose Dr. Laurent"
      whySubtitle="State-of-the-art radiofrequency and ultrasound technology for visible, lasting results."
      features={[
        {
          icon: Award,
          title: "Advanced Technology",
          desc: "TempSure radiofrequency and Ultraformer HIFU — two complementary technologies for comprehensive skin tightening.",
        },
        {
          icon: Shield,
          title: "Proven & Safe",
          desc: "FDA-cleared devices with an excellent safety profile. Treatments are comfortable and well-tolerated.",
        },
        {
          icon: Zap,
          title: "Collagen Stimulation",
          desc: "Deeply heats tissue to stimulate new collagen and elastin production for progressive, natural improvement.",
        },
        {
          icon: Clock,
          title: "Minimal Downtime",
          desc: "Return to your daily activities immediately. Results develop gradually over weeks following treatment.",
        },
      ]}
      proceduresTitle="Our RF & HIFU Treatments"
      proceduresSubtitle="Customized lifting and tightening solutions for face and body."
      procedures={[
        {
          title: "TempSure Full Face",
          desc: "Comprehensive radiofrequency treatment to tighten skin, reduce fine lines, and improve facial contour. $650 per session.",
        },
        {
          title: "TempSure Eye Area",
          desc: "Targeted RF treatment to firm and smooth the delicate skin around the eyes. $250 per session.",
        },
        {
          title: "Ultraformer HIFU Face",
          desc: "High-intensity focused ultrasound for deep tissue lifting and tightening. Non-surgical facelift alternative. From $3,500.",
        },
        {
          title: "Ultraformer Face + Neck",
          desc: "Extended HIFU treatment covering face and neck for comprehensive lifting and jawline definition. From $4,500.",
        },
        {
          title: "Body Cellulite Treatment",
          desc: "Radiofrequency for thighs and buttocks to smooth cellulite and tighten skin. From $450 per session.",
        },
        {
          title: "Skin Tag Removal",
          desc: "Quick radiofrequency-based removal of skin tags with minimal discomfort. $130 per session.",
        },
      ]}
      steps={[
        { step: 1, title: "Skin Assessment", desc: "Thorough evaluation of skin laxity, texture, and your rejuvenation goals." },
        { step: 2, title: "Treatment Planning", desc: "Customized protocol selecting the ideal technology and parameters for your skin." },
        { step: 3, title: "RF / HIFU Treatment", desc: "Comfortable in-office session with controlled energy delivery for optimal collagen stimulation." },
        { step: 4, title: "Progressive Results", desc: "Collagen remodeling continues for 3-6 months. Follow-up to assess and plan maintenance." },
      ]}
      testimonials={[
        {
          name: "Isabelle T.",
          initial: "I",
          treatment: "Ultraformer HIFU",
          text: "I wanted a non-surgical option for my sagging jawline and the Ultraformer results are incredible. My face looks lifted and more defined without any surgery.",
          rating: 5,
        },
        {
          name: "Marie-Claire D.",
          initial: "M",
          treatment: "TempSure RF",
          text: "The TempSure treatment was so relaxing — almost like a warm facial. Over the next few months, I noticed my skin getting progressively tighter. Love it!",
          rating: 5,
        },
        {
          name: "Joanne P.",
          initial: "J",
          treatment: "RF Body Treatment",
          text: "The cellulite treatment on my thighs has made such a difference. The skin is smoother and firmer. I finally feel confident in shorts again!",
          rating: 5,
        },
      ]}
      faqs={[
        {
          q: "What is the difference between radiofrequency and HIFU?",
          a: "Radiofrequency (TempSure) heats the superficial and mid-layers of skin to stimulate collagen. HIFU (Ultraformer) delivers focused ultrasound energy to deeper tissue layers, including the SMAS layer targeted in surgical facelifts. Both are effective and can be combined for comprehensive results.",
        },
        {
          q: "How many sessions do I need?",
          a: "For TempSure, 3-4 sessions spaced 4-6 weeks apart are typically recommended. Ultraformer HIFU often delivers significant results in a single session, with optional booster sessions for enhanced effect.",
        },
        {
          q: "Is the treatment painful?",
          a: "TempSure feels like a warm massage and is very comfortable. Ultraformer may cause brief moments of tingling during energy delivery but is well-tolerated by most patients.",
        },
        {
          q: "When will I see results?",
          a: "Some immediate tightening is visible, but the full results develop over 2-6 months as new collagen forms. Results continue to improve for up to a year after Ultraformer treatment.",
        },
        {
          q: "How long do results last?",
          a: "TempSure results last 6-12 months with maintenance sessions. Ultraformer results can last 1-2 years. Results vary based on skin quality, age, and lifestyle factors.",
        },
        {
          q: "Is there any downtime?",
          a: "No downtime is required for either treatment. You may experience mild redness or warmth for a few hours after treatment, but you can return to all normal activities immediately.",
        },
      ]}
      formTitle="Book Your Consultation"
      formOptions={[
        "TempSure Radiofrequency",
        "Ultraformer HIFU",
        "Body / Cellulite Treatment",
        "Skin Tag Removal",
        "Other / Not Sure",
      ]}
    />
  );
}
