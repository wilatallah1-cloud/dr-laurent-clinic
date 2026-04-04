"use client";

import { ServicePageLayout } from "@/components/service-page-layout";
import { Clock, Activity, ShieldCheck, Zap } from "lucide-react";

export function MinorEmergencyContent() {
  return (
    <ServicePageLayout
      heroTitle="Minor Emergency"
      heroHighlight="Care"
      heroDescription="Skip the hours-long ER wait. Get prompt, professional medical attention for urgent but non-life-threatening health concerns in a private, comfortable setting."
      heroBadges={["Rapid access", "No long waits", "Professional care"]}
      heroImage="https://drlaurentmedecineprivee.ca/assets/hero-medical-consultation-DPuVY465.jpg"
      whyTitle="Why Choose Dr. Laurent"
      whySubtitle="Urgent care without the chaos — fast appointments, thorough assessments, and personalized treatment."
      features={[
        {
          icon: Clock,
          title: "Rapid Access",
          desc: "Same-day appointments available for urgent concerns. No waiting hours in a crowded emergency room.",
        },
        {
          icon: Activity,
          title: "Comprehensive Assessment",
          desc: "Thorough evaluation of your condition with immediate diagnosis and a clear treatment plan.",
        },
        {
          icon: ShieldCheck,
          title: "Professional Environment",
          desc: "Receive urgent care in a calm, private, and fully equipped medical clinic — not a hectic ER.",
        },
        {
          icon: Zap,
          title: "Efficient Treatment",
          desc: "Focused 15-30 minute appointments designed to diagnose, treat, and get you back to feeling better fast.",
        },
      ]}
      proceduresTitle="Conditions We Treat"
      proceduresSubtitle="A wide range of urgent, non-life-threatening conditions treated quickly and effectively."
      procedures={[
        {
          title: "Infections & Fevers",
          desc: "Urinary tract infections, respiratory infections, sinusitis, ear infections, and unexplained fevers requiring prompt attention.",
        },
        {
          title: "Injuries & Wounds",
          desc: "Minor cuts requiring stitches, sprains, strains, minor burns, and other acute injuries that need immediate medical care.",
        },
        {
          title: "Allergic Reactions",
          desc: "Non-severe allergic reactions, skin rashes, hives, and allergic flare-ups requiring assessment and treatment.",
        },
        {
          title: "Digestive Issues",
          desc: "Acute stomach pain, nausea, vomiting, diarrhea, and other sudden gastrointestinal concerns.",
        },
        {
          title: "Skin Conditions",
          desc: "Abscesses, cyst complications, severe acne flare-ups, suspicious lesions, and other urgent dermatological concerns.",
        },
        {
          title: "Pain Management",
          desc: "Acute back pain, severe headaches, joint pain, and other sudden pain conditions requiring prompt medical evaluation.",
        },
      ]}
      steps={[
        { step: 1, title: "Contact Us", desc: "Call or book online for a same-day appointment. We prioritize urgent cases for rapid access." },
        { step: 2, title: "Quick Assessment", desc: "Dr. Laurent evaluates your condition thoroughly, orders tests if needed, and provides a clear diagnosis." },
        { step: 3, title: "Immediate Treatment", desc: "Receive treatment on the spot — prescriptions, procedures, or referrals as your situation requires." },
        { step: 4, title: "Follow-Up Plan", desc: "Clear discharge instructions and follow-up scheduling to ensure complete recovery." },
      ]}
      testimonials={[
        {
          name: "Thomas K.",
          initial: "T",
          treatment: "Minor Emergency",
          text: "I had a severe infection and dreaded spending 8 hours in the ER. I called Dr. Laurent's clinic and was seen within the hour. Diagnosed, prescribed, and home in under 90 minutes. Incredible service.",
          rating: 5,
        },
        {
          name: "Julie M.",
          initial: "J",
          treatment: "Urgent Care",
          text: "My son had a deep cut that needed stitches. Instead of the ER, we came here and were treated immediately. Dr. Laurent was so gentle and professional. My son was brave and we were done in no time.",
          rating: 5,
        },
        {
          name: "Patrick H.",
          initial: "P",
          treatment: "Minor Emergency",
          text: "Woke up with severe back pain and couldn't move. Got a same-day appointment, received a thorough assessment, and walked out with a treatment plan. Worth every penny to avoid the ER.",
          rating: 5,
        },
      ]}
      faqs={[
        {
          q: "What qualifies as a minor emergency?",
          a: "Minor emergencies include conditions that need prompt attention but are not life-threatening — infections, minor wounds, allergic reactions, acute pain, digestive issues, and similar concerns. For chest pain, difficulty breathing, severe bleeding, or suspected stroke, call 911.",
        },
        {
          q: "How quickly can I be seen?",
          a: "We strive to offer same-day appointments for minor emergencies. Call us as early as possible for the best availability. In many cases, we can see you within hours of your call.",
        },
        {
          q: "How much does a minor emergency visit cost?",
          a: "A minor emergency consultation (1 reason, 15 min) is $175. Complex emergencies (2 reasons, 30 min) are $225, and complex emergencies (3 reasons max, 30 min) are $275. A $40 file opening fee applies for new patients.",
        },
        {
          q: "Can you do stitches and minor procedures?",
          a: "Yes. We perform stitches ($200), stitch removal ($10/stitch), cyst removal ($350), joint injections ($300), and other minor procedures right in our clinic.",
        },
        {
          q: "Do I need an appointment or can I walk in?",
          a: "We operate by appointment to minimize your wait time. However, we do our best to accommodate urgent walk-ins. We recommend calling ahead so we can prepare for your visit.",
        },
        {
          q: "Will you refer me to the ER if needed?",
          a: "Absolutely. If your condition requires emergency room care, imaging, or specialist intervention beyond what we can provide, Dr. Laurent will coordinate an appropriate referral and provide documentation to expedite your ER visit.",
        },
      ]}
      formTitle="Book Urgent Appointment"
      formOptions={[
        "Infection / Fever",
        "Injury / Wound",
        "Allergic Reaction",
        "Acute Pain",
        "Digestive Issue",
        "Other / Not Sure",
      ]}
    />
  );
}
