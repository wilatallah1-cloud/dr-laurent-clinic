"use client";

import { ServicePageLayout } from "@/components/service-page-layout";
import { Brain, Heart, ShieldCheck, Users } from "lucide-react";

export function MentalHealthContent() {
  return (
    <ServicePageLayout
      heroTitle="Mental Health"
      heroHighlight="Support"
      heroDescription="Compassionate, judgment-free mental health consultations in a private setting. From ADHD evaluations to anxiety and depression management, Dr. Laurent provides the support you deserve."
      heroBadges={["ADHD evaluations", "Medication management", "Confidential care"]}
      heroImage="https://drlaurentmedecineprivee.ca/assets/hero-medical-consultation-DPuVY465.jpg"
      whyTitle="Why Choose Dr. Laurent"
      whySubtitle="Mental health care delivered with empathy, expertise, and complete confidentiality."
      features={[
        {
          icon: Brain,
          title: "Expert Assessment",
          desc: "Thorough mental health evaluations using evidence-based approaches to accurately identify conditions and guide treatment.",
        },
        {
          icon: Heart,
          title: "Compassionate Care",
          desc: "A warm, empathetic approach that makes you feel heard, understood, and supported at every stage of your journey.",
        },
        {
          icon: ShieldCheck,
          title: "Complete Confidentiality",
          desc: "Your mental health is deeply personal. We maintain the highest standards of privacy and discretion in every interaction.",
        },
        {
          icon: Users,
          title: "Inclusive Environment",
          desc: "A safe, affirming space for everyone — including the LGBTQIA2S+ community — where you can speak openly without fear of judgment.",
        },
      ]}
      proceduresTitle="Our Mental Health Services"
      proceduresSubtitle="Comprehensive mental health support from initial assessment through ongoing management."
      procedures={[
        {
          title: "ADHD Evaluation",
          desc: "Comprehensive ADHD assessments for patients 12 and older using validated screening tools, clinical interview, and pre-filled evaluation forms.",
        },
        {
          title: "Anxiety & Depression",
          desc: "Assessment and treatment of generalized anxiety, panic disorder, social anxiety, major depression, and related mood disorders.",
        },
        {
          title: "Medication Management",
          desc: "Careful prescription and monitoring of psychiatric medications with regular follow-ups to optimize dosage and minimize side effects.",
        },
        {
          title: "Burnout & Stress",
          desc: "Evaluation and management of work-related burnout, chronic stress, and adjustment disorders with practical treatment strategies.",
        },
        {
          title: "Sleep Disorders",
          desc: "Assessment of insomnia, sleep disturbances, and sleep-related anxiety with evidence-based treatment approaches.",
        },
        {
          title: "Work Leave Documentation",
          desc: "Medical documentation for work leave, disability claims, and workplace accommodations when mental health conditions require time off.",
        },
      ]}
      steps={[
        { step: 1, title: "Initial Consultation", desc: "A 45-minute comprehensive assessment of your mental health history, current symptoms, and treatment goals." },
        { step: 2, title: "Diagnosis & Plan", desc: "Clear explanation of findings with a personalized treatment plan that may include medication, lifestyle changes, and referrals." },
        { step: 3, title: "Treatment & Monitoring", desc: "Regular 35-minute follow-up appointments to monitor progress, adjust medications, and refine your care plan." },
        { step: 4, title: "Ongoing Support", desc: "Continued care with accessible follow-ups, prescription management, and coordination with therapists or specialists as needed." },
      ]}
      testimonials={[
        {
          name: "Alexandre P.",
          initial: "A",
          treatment: "ADHD Evaluation",
          text: "After years of struggling, I finally got a proper ADHD assessment. Dr. Laurent was thorough, compassionate, and didn't rush me. Getting the right diagnosis changed everything for me.",
          rating: 5,
        },
        {
          name: "Marie-Claude S.",
          initial: "M",
          treatment: "Anxiety Treatment",
          text: "I was hesitant to seek help for my anxiety, but Dr. Laurent made me feel completely at ease. The treatment plan has been transformative — I finally feel like myself again.",
          rating: 5,
        },
        {
          name: "Jonathan L.",
          initial: "J",
          treatment: "Depression Management",
          text: "Dr. Laurent listens with genuine empathy and takes the time to explain every treatment option. I felt respected and supported from day one. I can't recommend this clinic enough.",
          rating: 5,
        },
      ]}
      faqs={[
        {
          q: "What does a mental health consultation involve?",
          a: "The initial consultation (45 minutes) includes a comprehensive review of your mental health history, current symptoms, lifestyle factors, and treatment goals. Dr. Laurent may use validated screening tools and will discuss diagnosis and treatment options with you.",
        },
        {
          q: "How much does a mental health consultation cost?",
          a: "Initial mental health consultations (45 min) are $350. Follow-up appointments (35 min) are $250. ADHD evaluations (with pre-filled form) are $750, and ADHD follow-ups (30 min) are $250. A $40 file opening fee applies for new patients.",
        },
        {
          q: "Can Dr. Laurent prescribe psychiatric medication?",
          a: "Yes. As a licensed physician, Dr. Laurent can prescribe and manage psychiatric medications including antidepressants, anxiolytics, ADHD medications, and sleep aids. Regular follow-ups ensure optimal dosing and minimal side effects.",
        },
        {
          q: "How long before I notice improvement?",
          a: "This varies by condition and treatment. Some patients notice improvements within days of starting medication, while others may take 4-6 weeks for full effects. Dr. Laurent will set clear expectations and monitor your progress closely.",
        },
        {
          q: "Do you provide therapy or counseling?",
          a: "Dr. Laurent provides medical mental health care, including diagnosis, medication management, and supportive guidance. For ongoing psychotherapy, he can refer you to trusted psychologists and therapists while continuing to manage your medical treatment.",
        },
        {
          q: "Can I get a work leave certificate for mental health?",
          a: "Yes. When a mental health condition requires time away from work, Dr. Laurent can provide medical documentation including work leave certificates ($75) and other required forms for your employer or insurance provider.",
        },
      ]}
      formTitle="Book Your Consultation"
      formOptions={[
        "ADHD Evaluation",
        "Anxiety / Depression",
        "Medication Management",
        "Burnout / Stress",
        "Sleep Issues",
        "Other / Not Sure",
      ]}
    />
  );
}
