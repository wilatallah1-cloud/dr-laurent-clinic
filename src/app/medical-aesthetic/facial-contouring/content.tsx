"use client";

import { ServicePageLayout } from "@/components/service-page-layout";
import { Award, Shield, Sparkles, CheckCircle } from "lucide-react";

export function FacialContouringContent() {
  return (
    <ServicePageLayout
      heroTitle="Facial"
      heroHighlight="Contouring"
      heroDescription="Non-surgical facial sculpting using premium fillers, neuromodulators, and advanced technologies to define your jawline, enhance cheekbones, and create harmonious facial proportions."
      heroBadges={["Non-surgical sculpting", "Facial harmony", "Immediate results"]}
      heroImage="https://drlaurentmedecineprivee.ca/assets/hero-background-injectables-sHrFXrk2.jpg"
      whyTitle="Why Choose Dr. Laurent"
      whySubtitle="An artistic approach to facial sculpting grounded in medical expertise and anatomical knowledge."
      features={[
        {
          icon: Award,
          title: "Artistic Vision",
          desc: "Combines medical expertise with an aesthetic eye to create balanced, harmonious facial proportions.",
        },
        {
          icon: Shield,
          title: "Premium Products",
          desc: "FDA-approved fillers (HA, Sculptra, Radiesse) and neuromodulators for safe, predictable results.",
        },
        {
          icon: Sparkles,
          title: "Transformative Results",
          desc: "Sculpt the jawline, lift cheekbones, refine the chin, and create a more defined facial profile.",
        },
        {
          icon: CheckCircle,
          title: "Comprehensive Approach",
          desc: "Multi-product strategies combining fillers, Botox, and technology for complete facial transformation.",
        },
      ]}
      proceduresTitle="Our Contouring Treatments"
      proceduresSubtitle="Targeted solutions to sculpt and define every area of the face."
      procedures={[
        {
          title: "Jawline Definition",
          desc: "Strategic filler placement along the jawline for a sharper, more defined lower face. Creates structure and elegance.",
        },
        {
          title: "Cheekbone Enhancement",
          desc: "Volume and projection to the mid-face for lifted, sculpted cheekbones and improved facial balance.",
        },
        {
          title: "Chin Augmentation",
          desc: "Non-surgical chin projection and reshaping with fillers to improve profile harmony and facial proportions.",
        },
        {
          title: "Facial Transformation Package",
          desc: "Comprehensive multi-area treatment plan addressing jawline, cheeks, chin, and temples. Starting from $2,000.",
        },
        {
          title: "Masseter Slimming (Botox)",
          desc: "Neuromodulator injections to slim a wide or square jaw, creating a softer, more V-shaped facial contour.",
        },
        {
          title: "Temple & Hollow Restoration",
          desc: "Volume restoration to hollowed temples and under-eye areas for a refreshed, youthful facial frame.",
        },
      ]}
      steps={[
        { step: 1, title: "Facial Analysis", desc: "Comprehensive assessment of your facial proportions, symmetry, and contouring goals." },
        { step: 2, title: "Treatment Design", desc: "Artistic mapping of injection points and volume placement to achieve optimal facial harmony." },
        { step: 3, title: "Sculpting Session", desc: "Precise product placement using advanced techniques. Immediate results with continued improvement." },
        { step: 4, title: "Refinement & Maintenance", desc: "Follow-up to assess results and fine-tune as needed. Maintenance plan for long-term contour." },
      ]}
      testimonials={[
        {
          name: "Emilie L.",
          initial: "E",
          treatment: "Jawline Contouring",
          text: "Dr. Laurent sculpted the jawline I always wanted. The results look so natural — like I was born with this bone structure. His artistry is exceptional.",
          rating: 5,
        },
        {
          name: "Mathieu C.",
          initial: "M",
          treatment: "Full Facial Contouring",
          text: "The facial transformation package completely changed my face for the better. Sharper jaw, defined cheekbones, stronger chin. I look like a better version of myself.",
          rating: 5,
        },
        {
          name: "Sarah B.",
          initial: "S",
          treatment: "Cheek & Chin Enhancement",
          text: "I wanted more definition without looking 'done.' Dr. Laurent's approach was so thoughtful and artistic. My profile is dramatically improved and it all looks natural.",
          rating: 5,
        },
      ]}
      faqs={[
        {
          q: "What is non-surgical facial contouring?",
          a: "Non-surgical facial contouring uses injectable fillers, neuromodulators, and energy-based devices to sculpt and define facial features — jawline, cheekbones, chin, and more — without surgery. Results are immediate and can be tailored to your aesthetic goals.",
        },
        {
          q: "How long do facial contouring results last?",
          a: "Hyaluronic acid fillers in structural areas like the jawline and cheekbones typically last 12-18 months. Sculptra and Radiesse can last up to 2 years. Maintenance sessions help sustain your defined contour over time.",
        },
        {
          q: "Is facial contouring suitable for both men and women?",
          a: "Absolutely. Dr. Laurent tailors the approach to suit masculine or feminine facial aesthetics. Men often seek stronger jawline definition, while women may prefer softer contours and cheekbone enhancement. Every plan is fully personalized.",
        },
        {
          q: "What is the recovery time?",
          a: "There is virtually no downtime. You may experience mild swelling or bruising for 2-3 days. Most patients return to normal activities immediately and can apply makeup the following day.",
        },
        {
          q: "How much does facial contouring cost?",
          a: "Single-area treatments start at $750 per syringe of filler. Comprehensive facial transformation packages start from $2,000. A detailed quote is provided during your personalized consultation.",
        },
        {
          q: "Can facial contouring be combined with other treatments?",
          a: "Yes. Facial contouring works beautifully with skin tightening (RF or HIFU), Botox for dynamic wrinkles, and skin treatments like PicoSure or chemical peels for a complete facial rejuvenation.",
        },
      ]}
      formTitle="Book Your Consultation"
      formOptions={[
        "Jawline Definition",
        "Cheekbone Enhancement",
        "Chin Augmentation",
        "Facial Transformation Package",
        "Masseter Slimming",
        "Other / Not Sure",
      ]}
    />
  );
}
