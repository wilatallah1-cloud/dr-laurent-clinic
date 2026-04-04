"use client";

import { ServicePageLayout } from "@/components/service-page-layout";
import { Scale, Award, Heart, Activity } from "lucide-react";

export function WeightManagementContent() {
  return (
    <ServicePageLayout
      heroTitle="Medical Weight"
      heroHighlight="Management"
      heroDescription="Evidence-based, physician-led weight management programs combining medical expertise, nutrition guidance, and ongoing support. Certified by Obesity Canada for excellence in weight management."
      heroBadges={["Obesity Canada certified", "Personalized programs", "Medication options"]}
      heroImage="https://drlaurentmedecineprivee.ca/assets/hero-medical-consultation-DPuVY465.jpg"
      whyTitle="Why Choose Dr. Laurent"
      whySubtitle="A medically supervised approach to weight management — no fad diets, just science-backed results."
      features={[
        {
          icon: Scale,
          title: "Evidence-Based Approach",
          desc: "Programs grounded in current obesity medicine research, combining lifestyle modification with medical interventions when appropriate.",
        },
        {
          icon: Award,
          title: "Obesity Canada Certified",
          desc: "Dr. Laurent holds certification from Obesity Canada, demonstrating specialized expertise in weight management excellence.",
        },
        {
          icon: Heart,
          title: "Compassionate Support",
          desc: "A judgment-free approach that focuses on health outcomes — not numbers on a scale. Your well-being is always the priority.",
        },
        {
          icon: Activity,
          title: "Ongoing Monitoring",
          desc: "Regular follow-ups to track progress, adjust your plan, and address challenges with continuous medical support.",
        },
      ]}
      proceduresTitle="Our Weight Management Services"
      proceduresSubtitle="Comprehensive medical weight management tailored to your body, health, and lifestyle goals."
      procedures={[
        {
          title: "Medical Assessment",
          desc: "Thorough evaluation including metabolic health, blood work, hormonal factors, and lifestyle analysis to identify the root causes of weight gain.",
        },
        {
          title: "Prescription Medications",
          desc: "When appropriate, FDA-approved weight management medications such as GLP-1 agonists to support your journey alongside lifestyle changes.",
        },
        {
          title: "Nutritional Guidance",
          desc: "Personalized nutritional strategies based on your metabolism, preferences, and health conditions — sustainable changes, not crash diets.",
        },
        {
          title: "Hormonal Optimization",
          desc: "Addressing hormonal imbalances (thyroid, cortisol, insulin resistance) that may be contributing to weight gain or resistance to loss.",
        },
        {
          title: "Combined Hormone & Weight Program",
          desc: "An integrated approach for patients who would benefit from simultaneous hormonal therapy and weight management — available as a combined consultation.",
        },
        {
          title: "Lipolysis Treatments",
          desc: "Non-surgical fat reduction treatments for targeted areas that may complement your overall weight management program.",
        },
      ]}
      steps={[
        { step: 1, title: "Initial Consultation", desc: "A comprehensive 45-minute assessment of your health, metabolic profile, lifestyle, and weight management goals." },
        { step: 2, title: "Personalized Plan", desc: "A tailored program combining nutritional guidance, physical activity recommendations, and medical interventions as appropriate." },
        { step: 3, title: "Active Treatment", desc: "Implementation of your plan with prescription support if needed, regular check-ins, and adjustments based on your progress." },
        { step: 4, title: "Maintenance & Support", desc: "Ongoing follow-ups to maintain results, prevent regain, and ensure long-term success and health." },
      ]}
      testimonials={[
        {
          name: "Nathalie C.",
          initial: "N",
          treatment: "Weight Management",
          text: "After years of failed diets, Dr. Laurent finally helped me understand the medical factors behind my weight. The personalized program has been life-changing — I've lost 30 lbs and kept it off.",
          rating: 5,
        },
        {
          name: "Robert F.",
          initial: "R",
          treatment: "Medical Weight Loss",
          text: "The difference between this and every other weight loss program I've tried is that it's actually medical. Dr. Laurent identified insulin resistance I didn't know I had. The results speak for themselves.",
          rating: 5,
        },
        {
          name: "Samira H.",
          initial: "S",
          treatment: "Weight Management",
          text: "No judgment, no shame — just real medical support. Dr. Laurent treated me with dignity and created a plan that fits my life. I've never felt this healthy or this supported.",
          rating: 5,
        },
      ]}
      faqs={[
        {
          q: "What makes medical weight management different from a regular diet?",
          a: "Medical weight management addresses the underlying causes of weight gain — metabolic, hormonal, psychological, and genetic factors. Rather than restrictive dieting, Dr. Laurent creates an evidence-based plan that may include medication, hormonal optimization, and sustainable lifestyle changes.",
        },
        {
          q: "How much does the weight management program cost?",
          a: "The initial weight management consultation (45 min) is $350. Follow-up appointments (20 min) are $250. A combined hormone + weight loss initial consultation is $600, with combined follow-ups at $350. A $40 file opening fee applies for new patients.",
        },
        {
          q: "Do you prescribe weight loss medications?",
          a: "Yes, when medically appropriate. Dr. Laurent may prescribe FDA-approved medications such as GLP-1 receptor agonists (e.g., semaglutide, liraglutide) as part of a comprehensive weight management plan. Suitability is determined during your consultation.",
        },
        {
          q: "How often will I need follow-up appointments?",
          a: "Follow-up frequency is typically every 2-4 weeks during the active phase, then monthly as you reach your goals. The schedule is adjusted based on your progress and specific treatment plan.",
        },
        {
          q: "Is this program suitable for people with diabetes or other conditions?",
          a: "Yes. Dr. Laurent has experience managing weight in patients with diabetes, hypertension, thyroid disorders, PCOS, and other conditions. In fact, medical supervision is especially important when weight management intersects with other health conditions.",
        },
        {
          q: "What results can I expect and how quickly?",
          a: "Results vary by individual, but most patients on a comprehensive medical weight management program can expect to see meaningful progress within the first 4-8 weeks. Dr. Laurent sets realistic expectations during your initial consultation and adjusts your plan as needed.",
        },
      ]}
      formTitle="Book Your Consultation"
      formOptions={[
        "Initial Weight Assessment",
        "Medication Options",
        "Nutritional Guidance",
        "Combined Hormone & Weight",
        "Follow-Up Appointment",
        "Other / Not Sure",
      ]}
    />
  );
}
