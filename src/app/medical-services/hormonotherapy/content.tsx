"use client";

import { ServicePageLayout } from "@/components/service-page-layout";
import { Activity, ShieldCheck, Heart, Users } from "lucide-react";

export function HormonotherapyContent() {
  return (
    <ServicePageLayout
      heroTitle="Personalized Hormone"
      heroHighlight="Therapy"
      heroDescription="Comprehensive hormone therapy services including gender-affirming care, hormonal optimization, and ongoing monitoring — delivered in a safe, inclusive, and confidential environment."
      heroBadges={["Gender-affirming care", "Personalized protocols", "Ongoing monitoring"]}
      heroImage="https://drlaurentmedecineprivee.ca/assets/hero-medical-consultation-DPuVY465.jpg"
      whyTitle="Why Choose Dr. Laurent"
      whySubtitle="Expert, affirming hormone therapy guided by evidence-based medicine and genuine compassion."
      features={[
        {
          icon: Activity,
          title: "Evidence-Based Protocols",
          desc: "Hormone therapy protocols grounded in current medical guidelines, tailored to your unique physiology and health goals.",
        },
        {
          icon: Heart,
          title: "Gender-Affirming Care",
          desc: "Compassionate, knowledgeable support for transgender and gender-diverse individuals seeking hormone therapy.",
        },
        {
          icon: ShieldCheck,
          title: "Safe Monitoring",
          desc: "Regular blood work and health monitoring to ensure your hormone levels are optimized safely and effectively.",
        },
        {
          icon: Users,
          title: "Inclusive & Affirming",
          desc: "A proudly inclusive practice where every patient is treated with dignity, respect, and genuine understanding.",
        },
      ]}
      proceduresTitle="Our Hormone Therapy Services"
      proceduresSubtitle="Tailored hormonal care for a wide range of needs, from gender-affirming treatment to age-related optimization."
      procedures={[
        {
          title: "Gender-Affirming Hormone Therapy",
          desc: "Feminizing or masculinizing hormone therapy with individualized protocols, regular monitoring, and compassionate guidance throughout your transition.",
        },
        {
          title: "Testosterone Optimization",
          desc: "Assessment and treatment of low testosterone symptoms including fatigue, mood changes, decreased libido, and muscle loss.",
        },
        {
          title: "Thyroid Management",
          desc: "Diagnosis and treatment of hypothyroidism, hyperthyroidism, and other thyroid conditions affecting your hormonal balance.",
        },
        {
          title: "Menopause & Perimenopause",
          desc: "Hormone replacement therapy and symptom management for hot flashes, mood changes, sleep disturbances, and other menopausal concerns.",
        },
        {
          title: "Hormonal Blood Work",
          desc: "Comprehensive hormone panels including testosterone, estrogen, progesterone, thyroid, cortisol, and other key markers.",
        },
        {
          title: "Combined Hormone & Weight Management",
          desc: "Integrated approach addressing hormonal imbalances alongside weight management for optimal results. Available as a combined consultation.",
        },
      ]}
      steps={[
        { step: 1, title: "Initial Consultation", desc: "A 45-minute assessment of your hormonal health, medical history, goals, and any symptoms you're experiencing." },
        { step: 2, title: "Testing & Analysis", desc: "Comprehensive blood work to establish baseline hormone levels and identify any imbalances or health considerations." },
        { step: 3, title: "Personalized Protocol", desc: "A tailored hormone therapy plan designed for your specific needs, including dosing, method of delivery, and monitoring schedule." },
        { step: 4, title: "Ongoing Monitoring", desc: "Regular 30-minute follow-ups with blood work to fine-tune your protocol and ensure safe, optimal results." },
      ]}
      testimonials={[
        {
          name: "Alex R.",
          initial: "A",
          treatment: "Gender-Affirming HRT",
          text: "Dr. Laurent provided the most affirming, respectful care I've ever experienced. He took the time to answer every question and made me feel safe throughout my transition. This clinic is a gem.",
          rating: 5,
        },
        {
          name: "Daniel M.",
          initial: "D",
          treatment: "Testosterone Therapy",
          text: "After months of fatigue and low energy, Dr. Laurent identified low testosterone and started me on a personalized protocol. Within weeks, I felt like a new person. The monitoring has been excellent.",
          rating: 5,
        },
        {
          name: "Christine V.",
          initial: "C",
          treatment: "Menopause Management",
          text: "Dr. Laurent helped me navigate perimenopause with such care and expertise. My sleep improved, my mood stabilized, and I finally feel like myself again. I wish I'd come sooner.",
          rating: 5,
        },
      ]}
      faqs={[
        {
          q: "What does the initial hormone therapy consultation involve?",
          a: "The initial 45-minute consultation includes a thorough review of your medical history, current symptoms, treatment goals, and any previous hormonal treatments. Dr. Laurent will discuss available options, expected timelines, and order any necessary blood work.",
        },
        {
          q: "How much does hormone therapy cost?",
          a: "The initial hormone therapy consultation (45 min) is $350. Follow-up appointments (30 min) are $250. A combined hormone + weight loss initial consultation (45 min) is $600, with combined follow-ups at $350. A $40 file opening fee applies for new patients.",
        },
        {
          q: "Do you provide gender-affirming hormone therapy?",
          a: "Yes. Dr. Laurent is experienced in providing gender-affirming hormone therapy for transgender and gender-diverse individuals. This includes feminizing and masculinizing hormone protocols with careful, ongoing monitoring.",
        },
        {
          q: "How often will I need follow-up appointments?",
          a: "Follow-up frequency depends on your treatment phase. New patients typically have follow-ups every 4-6 weeks initially, then every 3-6 months once stable. Blood work is regularly scheduled to ensure safe hormone levels.",
        },
        {
          q: "Are there risks associated with hormone therapy?",
          a: "All medical treatments carry some risks. Dr. Laurent will discuss potential side effects and risks specific to your protocol during your consultation. Regular monitoring through blood work and follow-ups helps minimize risks and catch any concerns early.",
        },
        {
          q: "Do I need a referral to start hormone therapy?",
          a: "No referral is required. You can book directly with our clinic. During your initial consultation, Dr. Laurent will assess your suitability for hormone therapy and develop a personalized treatment plan.",
        },
      ]}
      formTitle="Book Your Consultation"
      formOptions={[
        "Gender-Affirming HRT",
        "Testosterone Optimization",
        "Thyroid Management",
        "Menopause / Perimenopause",
        "Hormonal Blood Work",
        "Other / Not Sure",
      ]}
    />
  );
}
