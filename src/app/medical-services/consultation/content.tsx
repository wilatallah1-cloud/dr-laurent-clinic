"use client";

import { ServicePageLayout } from "@/components/service-page-layout";
import { Stethoscope, Clock, ShieldCheck, Users } from "lucide-react";

export function ConsultationContent() {
  return (
    <ServicePageLayout
      heroTitle="Private Medical"
      heroHighlight="Consultation"
      heroDescription="Comprehensive, personalized medical consultations in a private setting. Dr. Laurent takes the time to listen, assess, and create a care plan tailored to your unique health needs."
      heroBadges={["Same-day availability", "Thorough assessment", "Confidential care"]}
      heroImage="https://drlaurentmedecineprivee.ca/assets/hero-medical-consultation-DPuVY465.jpg"
      whyTitle="Why Choose Dr. Laurent"
      whySubtitle="Experience healthcare the way it should be — unhurried, thorough, and centered around you."
      features={[
        {
          icon: Stethoscope,
          title: "Thorough Assessment",
          desc: "Comprehensive evaluations that go beyond surface-level symptoms to identify root causes and create effective treatment plans.",
        },
        {
          icon: Clock,
          title: "Unhurried Appointments",
          desc: "Generous appointment times so you never feel rushed — your concerns deserve full attention and careful consideration.",
        },
        {
          icon: ShieldCheck,
          title: "Complete Confidentiality",
          desc: "Your health information is handled with the highest standards of privacy and discretion at every step.",
        },
        {
          icon: Users,
          title: "Patient-Centered Care",
          desc: "A welcoming, inclusive environment for patients of all ages and backgrounds, including the LGBTQIA2S+ community.",
        },
      ]}
      proceduresTitle="Our Consultation Services"
      proceduresSubtitle="From urgent concerns to preventive health, we offer consultations tailored to your needs."
      procedures={[
        {
          title: "General Medical Consultation",
          desc: "Address a wide range of health concerns with a comprehensive assessment, diagnosis, and personalized treatment plan.",
        },
        {
          title: "Preventive Health Screening",
          desc: "Proactive health evaluations including blood work analysis, risk factor assessment, and early detection strategies.",
        },
        {
          title: "Second Opinion",
          desc: "Receive an independent, thorough review of an existing diagnosis or treatment plan for added peace of mind.",
        },
        {
          title: "Referral Coordination",
          desc: "When specialized care is needed, Dr. Laurent coordinates referrals to trusted specialists and ensures continuity of care.",
        },
        {
          title: "Prescription Management",
          desc: "Review, renewal, and optimization of your current medications to ensure safety and effectiveness.",
        },
        {
          title: "Travel Medicine",
          desc: "Pre-travel health consultations including required vaccinations, preventive medications, and destination-specific health advice.",
        },
      ]}
      steps={[
        { step: 1, title: "Book Your Appointment", desc: "Schedule online or by phone — same-day and next-day appointments are often available." },
        { step: 2, title: "Initial Assessment", desc: "A thorough evaluation of your health history, current concerns, and overall wellness goals." },
        { step: 3, title: "Diagnosis & Plan", desc: "Clear explanation of findings with a personalized treatment or management plan." },
        { step: 4, title: "Follow-Up & Support", desc: "Ongoing care coordination, prescription management, and follow-up appointments as needed." },
      ]}
      testimonials={[
        {
          name: "Sophie L.",
          initial: "S",
          treatment: "General Consultation",
          text: "Dr. Laurent took the time to truly listen and explain everything clearly. For the first time, I felt like my concerns were taken seriously. The experience was exceptional.",
          rating: 5,
        },
        {
          name: "Marc T.",
          initial: "M",
          treatment: "Preventive Screening",
          text: "The thoroughness of my consultation was impressive. Dr. Laurent identified issues my previous doctor had missed. I finally feel like I have a real healthcare partner.",
          rating: 5,
        },
        {
          name: "Isabelle R.",
          initial: "I",
          treatment: "Medical Consultation",
          text: "Private, professional, and genuinely caring. The clinic is beautiful and the staff made me feel welcome from the moment I walked in. Highly recommended.",
          rating: 5,
        },
      ]}
      faqs={[
        {
          q: "What should I bring to my first consultation?",
          a: "Please bring a valid photo ID, your health insurance card (if applicable), a list of current medications, and any recent lab results or medical records relevant to your visit.",
        },
        {
          q: "How long is a typical consultation?",
          a: "Initial consultations are typically 30-45 minutes, allowing ample time for a thorough assessment. Follow-up appointments are usually 15-20 minutes depending on the complexity of your concerns.",
        },
        {
          q: "Do you accept health insurance?",
          a: "As a private clinic, fees are paid at the time of service. We provide detailed receipts that you can submit to your private insurance provider for reimbursement. Many plans cover private medical consultations.",
        },
        {
          q: "Can I book a same-day appointment?",
          a: "Yes, we often have same-day and next-day availability. Contact us by phone for the quickest scheduling, or book online to see available time slots.",
        },
        {
          q: "What is the cost of a consultation?",
          a: "Minor emergency consultations (15 min) start at $175. Complex consultations (30 min) range from $225 to $275 depending on the number of concerns addressed. A $40 file opening fee applies for new patients.",
        },
        {
          q: "Do you offer virtual consultations?",
          a: "Yes, telemedicine appointments are available for follow-ups and certain types of consultations. Contact us to determine if a virtual visit is appropriate for your needs.",
        },
      ]}
      formTitle="Book Your Consultation"
      formOptions={[
        "General Consultation",
        "Preventive Screening",
        "Second Opinion",
        "Prescription Renewal",
        "Other / Not Sure",
      ]}
    />
  );
}
