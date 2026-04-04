"use client";

import { ServicePageLayout } from "@/components/service-page-layout";
import { Award, Shield, Sparkles, Lock } from "lucide-react";

export function ScrotoxGrotoxContent() {
  return (
    <ServicePageLayout
      heroTitle="Scrotox & Grotox at"
      heroHighlight="Dr. Laurent Clinic"
      heroDescription="Advanced neuromodulator treatments for enhanced comfort, confidence, and aesthetics in intimate areas. Experience discreet, professional care with lasting results."
      heroBadges={["Years of experience", "Expert treatments", "Complete privacy"]}
      heroImage="https://drlaurentmedecineprivee.ca/assets/hero-medical-consultation-DPuVY465.jpg"
      whyTitle="Why Choose Dr. Laurent"
      whySubtitle="Experience the difference of specialized care with proven results"
      features={[
        {
          icon: Award,
          title: "Specialized Expertise",
          desc: "Years of experience in intimate wellness treatments with proven results.",
        },
        {
          icon: Sparkles,
          title: "Precision Techniques",
          desc: "Advanced injection methods for optimal comfort and natural-looking results.",
        },
        {
          icon: Lock,
          title: "Complete Privacy",
          desc: "Confidential consultations in a judgment-free, professional environment.",
        },
        {
          icon: Shield,
          title: "Patient-Centered Care",
          desc: "Personalized treatment plans tailored to your unique needs and goals.",
        },
      ]}
      proceduresTitle="Our Specialized Treatments"
      proceduresSubtitle="Advanced neuromodulator solutions for intimate wellness"
      procedures={[
        {
          title: "Scrotox",
          desc: "Specialized botulinum toxin treatment for the scrotal area to reduce sweating, minimize wrinkling, and enhance comfort.",
        },
        {
          title: "Grotox",
          desc: "Advanced neuromodulator treatment for the gluteal area to reduce excessive sweating and improve aesthetic appearance.",
        },
        {
          title: "Combination Treatments",
          desc: "Customized treatment plans combining multiple approaches for comprehensive results tailored to your needs.",
        },
      ]}
      steps={[
        { step: 1, title: "Private Consultation", desc: "Confidential discussion of your concerns and goals in a judgment-free environment." },
        { step: 2, title: "Personalized Plan", desc: "Customized treatment strategy designed specifically for your unique needs." },
        { step: 3, title: "Expert Treatment", desc: "Precise application performed with the highest standards of care and comfort." },
        { step: 4, title: "Follow-Up Care", desc: "Ongoing support and monitoring to ensure optimal, long-lasting results." },
      ]}
      testimonials={[
        {
          name: "M.D.",
          initial: "M",
          treatment: "Scrotox",
          text: "Life-changing results. The treatment was quick, professional, and completely discreet. I wish I had done this sooner.",
          rating: 5,
        },
        {
          name: "J.R.",
          initial: "J",
          treatment: "Grotox",
          text: "Dr. Laurent made me feel completely comfortable throughout the entire process. The results exceeded my expectations.",
          rating: 5,
        },
        {
          name: "A.S.",
          initial: "A",
          treatment: "Scrotox",
          text: "Professional, caring, and incredibly skilled. The improvement in my daily comfort has been remarkable.",
          rating: 5,
        },
      ]}
      faqs={[
        {
          q: "Is the treatment painful?",
          a: "Most patients experience minimal discomfort. A topical anesthetic is applied before treatment to ensure your comfort throughout the procedure.",
        },
        {
          q: "How long does the treatment take?",
          a: "The procedure typically takes 15-30 minutes depending on the treatment area and your specific needs.",
        },
        {
          q: "Is the procedure confidential?",
          a: "Absolutely. Complete confidentiality is guaranteed throughout your entire treatment journey with us.",
        },
        {
          q: "Who is a good candidate?",
          a: "Most healthy adults concerned about excessive sweating, discomfort, or aesthetics in intimate areas are good candidates. A consultation will determine the best approach for you.",
        },
        {
          q: "What can I expect after treatment?",
          a: "Mild swelling or redness may occur but typically resolves within a few days. Most patients return to normal activities within 24 hours.",
        },
        {
          q: "When will I see results?",
          a: "Results typically become noticeable within 3-7 days and reach full effect within 2 weeks.",
        },
        {
          q: "Are there any side effects?",
          a: "Side effects are generally mild and temporary, including minor swelling, redness, or bruising at the injection site.",
        },
        {
          q: "How often do I need treatments?",
          a: "Results typically last 3-6 months. Regular maintenance treatments are recommended to maintain optimal results.",
        },
      ]}
      formTitle="Book Your Consultation"
      formOptions={["Scrotox", "Grotox", "Both Treatments", "Other / Not Sure"]}
    />
  );
}
