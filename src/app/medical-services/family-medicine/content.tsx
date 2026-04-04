"use client";

import { ServicePageLayout } from "@/components/service-page-layout";
import { Heart, Users, Baby, ShieldCheck } from "lucide-react";

export function FamilyMedicineContent() {
  return (
    <ServicePageLayout
      heroTitle="Comprehensive Family"
      heroHighlight="Medicine"
      heroDescription="Primary care for patients of all ages — from newborns to seniors — delivered in an inclusive environment that warmly welcomes every member of your family, including transgender and gender-diverse individuals."
      heroBadges={["All ages welcome", "Inclusive care", "Annual exams"]}
      heroImage="https://drlaurentmedecineprivee.ca/assets/hero-medical-consultation-DPuVY465.jpg"
      whyTitle="Why Choose Dr. Laurent"
      whySubtitle="A family doctor who knows your history, understands your needs, and is available when you need care."
      features={[
        {
          icon: Heart,
          title: "Compassionate Approach",
          desc: "Genuine care built on trust, empathy, and a deep commitment to your family's long-term health and well-being.",
        },
        {
          icon: Users,
          title: "Care for All Ages",
          desc: "From pediatric check-ups to senior wellness — one trusted physician for every member of your family.",
        },
        {
          icon: Baby,
          title: "Pediatric Expertise",
          desc: "Specialized knowledge in children's health, including developmental milestones, vaccinations, and common childhood conditions.",
        },
        {
          icon: ShieldCheck,
          title: "Inclusive & Safe",
          desc: "A proudly inclusive clinic providing respectful, affirming care for the LGBTQIA2S+ community and gender-diverse individuals.",
        },
      ]}
      proceduresTitle="Our Family Medicine Services"
      proceduresSubtitle="Comprehensive primary care services designed to keep your entire family healthy."
      procedures={[
        {
          title: "Adult Intake & Annual Exams",
          desc: "Thorough annual physical examinations including health risk assessments, blood work, and preventive screenings for adults.",
        },
        {
          title: "Pediatric Care",
          desc: "Well-child visits, vaccinations, growth monitoring, and treatment for common childhood illnesses and conditions.",
        },
        {
          title: "Chronic Disease Management",
          desc: "Ongoing management of diabetes, hypertension, asthma, thyroid disorders, and other chronic conditions with regular monitoring.",
        },
        {
          title: "Women's Health",
          desc: "PAP tests, IUD insertion and removal, contraception counseling, and reproductive health consultations.",
        },
        {
          title: "Medical Procedures",
          desc: "In-office procedures including cyst removal, stitches, joint injections, ear cleaning, and minor surgical interventions.",
        },
        {
          title: "Documents & Certificates",
          desc: "Work leave certificates, SAAQ documents, parking permits, prescription renewals, and medical document completion.",
        },
      ]}
      steps={[
        { step: 1, title: "New Patient Intake", desc: "A comprehensive 45-minute appointment to review your complete health history and establish your care plan." },
        { step: 2, title: "Personalized Care Plan", desc: "Based on your health profile, we develop a tailored approach to preventive care and any active concerns." },
        { step: 3, title: "Ongoing Follow-Ups", desc: "Regular follow-up appointments to monitor your health, adjust treatments, and address new concerns as they arise." },
        { step: 4, title: "Coordinated Care", desc: "Referrals to specialists when needed, with full coordination to ensure seamless continuity of care." },
      ]}
      testimonials={[
        {
          name: "Catherine B.",
          initial: "C",
          treatment: "Family Medicine",
          text: "Finally found a family doctor who truly cares. Dr. Laurent sees both me and my children, and the level of attention we receive is remarkable. No more waiting months for an appointment.",
          rating: 5,
        },
        {
          name: "François D.",
          initial: "F",
          treatment: "Annual Exam",
          text: "My annual exam was the most thorough I've ever had. Dr. Laurent caught an issue that had been overlooked for years. I'm grateful for his diligence and expertise.",
          rating: 5,
        },
        {
          name: "Amélie G.",
          initial: "A",
          treatment: "Pediatric Care",
          text: "Dr. Laurent is wonderful with my kids. He's patient, kind, and explains everything in a way that puts both parents and children at ease. We feel so lucky to have found this clinic.",
          rating: 5,
        },
      ]}
      faqs={[
        {
          q: "What ages do you treat?",
          a: "We provide care for patients of all ages, from newborns to seniors. Whether you need pediatric care for your children or health management for elderly family members, we are here for your entire family.",
        },
        {
          q: "How much does a family medicine appointment cost?",
          a: "Adult intake appointments (45 min) are $350. Follow-ups (20 min, 2 reasons) are $200. Pediatric intake (30 min) is $300, and pediatric follow-ups (20 min) are $150. Annual exams (45 min) are $350. A $40 file opening fee applies for new patients.",
        },
        {
          q: "Can Dr. Laurent be my family doctor?",
          a: "Yes. Dr. Laurent accepts new patients as their primary care physician. As a private clinic, there are no waitlists — you can begin receiving care right away with prompt appointment availability.",
        },
        {
          q: "Do you provide vaccinations?",
          a: "Yes, we provide standard vaccinations for both children and adults, including routine immunizations, travel vaccines, and flu shots. Contact us to confirm specific vaccine availability.",
        },
        {
          q: "Can you handle medical procedures in-office?",
          a: "Yes. We perform cyst removal ($350), stitches ($200), joint injections ($300), IUD insertion ($250) and removal ($150), PAP tests ($150), ear cleaning ($80), and other minor procedures.",
        },
        {
          q: "Is the clinic LGBTQIA2S+ friendly?",
          a: "Absolutely. Our clinic proudly provides safe, respectful, and fully inclusive care for all members of the LGBTQIA2S+ community, including transgender and gender-diverse individuals.",
        },
      ]}
      formTitle="Book Your Appointment"
      formOptions={[
        "Adult Intake",
        "Pediatric Visit",
        "Annual Exam",
        "Follow-Up Appointment",
        "Medical Procedure",
        "Other / Not Sure",
      ]}
    />
  );
}
