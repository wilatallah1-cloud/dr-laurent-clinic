"use client";

import { ServicePageLayout } from "@/components/service-page-layout";
import { Award, Shield, Sparkles, Lock } from "lucide-react";

export function HoletoxContent() {
  return (
    <ServicePageLayout
      heroTitle="Holetox at"
      heroHighlight="Dr. Laurent Clinic"
      heroDescription="Advanced perianal neuromodulator treatment for enhanced comfort, hygiene, and confidence. Experience discreet, professional care with transformative results."
      heroBadges={["Years of experience", "Expert treatments", "Total privacy"]}
      heroImage="https://drlaurentmedecineprivee.ca/assets/hero-medical-consultation-DPuVY465.jpg"
      whyTitle="Why Choose Dr. Laurent"
      whySubtitle="Experience the difference of specialized intimate wellness care"
      features={[
        {
          icon: Award,
          title: "Specialized Expertise",
          desc: "Years of experience in intimate wellness treatments with proven, transformative results.",
        },
        {
          icon: Sparkles,
          title: "Advanced Techniques",
          desc: "Precision injection methods for optimal comfort and natural-looking results.",
        },
        {
          icon: Lock,
          title: "Total Privacy",
          desc: "Completely confidential consultations in a safe, judgment-free environment.",
        },
        {
          icon: Shield,
          title: "Patient-Centered Care",
          desc: "Personalized treatment plans tailored to your unique needs and goals.",
        },
      ]}
      proceduresTitle="Our Holetox Treatments"
      proceduresSubtitle="Specialized solutions for enhanced comfort and confidence"
      procedures={[
        {
          title: "Perianal Holetox",
          desc: "Specialized treatment to reduce excessive sweating, minimize irritation, and enhance aesthetic appearance in the perianal area.",
        },
        {
          title: "Comfort Enhancement",
          desc: "Targeted approach to improve daily comfort by reducing moisture, chafing, and discomfort in intimate areas.",
        },
        {
          title: "Maintenance Programs",
          desc: "Customized follow-up schedules to maintain optimal results with regular treatments every 3-6 months.",
        },
      ]}
      steps={[
        { step: 1, title: "Private Consultation", desc: "Confidential discussion of your concerns in a comfortable, judgment-free environment." },
        { step: 2, title: "Personalized Assessment", desc: "Thorough evaluation to create a treatment plan tailored to your specific needs." },
        { step: 3, title: "Expert Treatment", desc: "Precise application with advanced techniques ensuring maximum comfort and results." },
        { step: 4, title: "Ongoing Support", desc: "Follow-up care and monitoring to ensure optimal, long-lasting results." },
      ]}
      testimonials={[
        {
          name: "P.M.",
          initial: "P",
          treatment: "Holetox",
          text: "This treatment has genuinely changed my life. The improvement in daily comfort is remarkable, and the entire process was handled with complete professionalism.",
          rating: 5,
        },
        {
          name: "R.T.",
          initial: "R",
          treatment: "Holetox",
          text: "Dr. Laurent made me feel completely at ease. The results exceeded my expectations, and I wish I had done this years ago.",
          rating: 5,
        },
        {
          name: "K.S.",
          initial: "K",
          treatment: "Holetox",
          text: "Discreet, professional, and incredibly effective. The difference in my confidence and comfort has been life-changing.",
          rating: 5,
        },
      ]}
      faqs={[
        {
          q: "Is Holetox safe?",
          a: "Yes, Holetox uses the same FDA-approved botulinum toxin used in millions of cosmetic procedures worldwide. When performed by a qualified physician like Dr. Laurent, it is a safe and effective treatment.",
        },
        {
          q: "How long does the treatment take?",
          a: "The procedure typically takes 15-30 minutes, making it a quick and convenient treatment option.",
        },
        {
          q: "Is the procedure painful?",
          a: "Most patients experience minimal discomfort. A topical anesthetic is applied before treatment to ensure your comfort throughout the procedure.",
        },
        {
          q: "Who is a good candidate for Holetox?",
          a: "Adults experiencing excessive sweating, discomfort, or aesthetic concerns in the perianal area may benefit from Holetox. A consultation will determine if the treatment is right for you.",
        },
        {
          q: "What can I expect after treatment?",
          a: "You may experience mild swelling or redness that resolves within a few days. Most patients return to normal activities within 24 hours.",
        },
        {
          q: "When will I see results?",
          a: "Results typically become noticeable within 3-7 days and reach full effect within 2 weeks.",
        },
        {
          q: "How long do results last?",
          a: "Results typically last 3-6 months. Regular maintenance treatments are recommended for sustained results.",
        },
        {
          q: "Are there any side effects?",
          a: "Side effects are generally mild and temporary, including minor swelling, redness, or bruising at the treatment site.",
        },
      ]}
      formTitle="Book Your Consultation"
      formOptions={["Perianal Holetox", "Comfort Enhancement", "Excessive Sweating", "Aesthetic Improvement", "Other / Not Sure"]}
    />
  );
}
