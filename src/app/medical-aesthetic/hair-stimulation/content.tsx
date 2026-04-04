"use client";

import { ServicePageLayout } from "@/components/service-page-layout";
import { Award, Shield, Sparkles, Heart } from "lucide-react";

export function HairStimulationContent() {
  return (
    <ServicePageLayout
      heroTitle="Hair"
      heroHighlight="Stimulation"
      heroDescription="Advanced PRP and exosome therapies to combat hair loss and thinning. Stimulate natural hair growth, restore density, and regain your confidence."
      heroBadges={["PRP therapy", "Natural regrowth", "Proven results"]}
      heroImage="https://drlaurentmedecineprivee.ca/assets/hero-background-injectables-sHrFXrk2.jpg"
      whyTitle="Why Choose Dr. Laurent"
      whySubtitle="Evidence-based hair restoration using your body's own healing factors."
      features={[
        {
          icon: Award,
          title: "Medical Expertise",
          desc: "Board-certified physician with training in regenerative medicine and hair restoration protocols.",
        },
        {
          icon: Shield,
          title: "Evidence-Based",
          desc: "Clinically proven PRP therapy harnessing your body's own growth factors to stimulate hair follicles.",
        },
        {
          icon: Sparkles,
          title: "Natural Regrowth",
          desc: "Stimulate dormant follicles and strengthen existing hair for thicker, healthier growth.",
        },
        {
          icon: Heart,
          title: "Personalized Protocols",
          desc: "Customized treatment plans based on your hair loss pattern, severity, and goals.",
        },
      ]}
      proceduresTitle="Our Hair Treatments"
      proceduresSubtitle="Comprehensive solutions for hair thinning and loss."
      procedures={[
        {
          title: "Scalp PRP",
          desc: "Platelet-rich plasma injections into the scalp to stimulate hair follicles and promote new growth. $500 per session.",
        },
        {
          title: "PRP + Microneedling",
          desc: "Combining PRP with microneedling for enhanced absorption and stimulation of the scalp. $800 per session.",
        },
        {
          title: "Exosome Therapy",
          desc: "Cutting-edge exosome treatment to boost cellular regeneration and hair follicle activity. Add-on $100.",
        },
        {
          title: "Combination Protocol",
          desc: "Multi-session treatment plan combining PRP, microneedling, and growth factors for maximum results.",
        },
        {
          title: "Maintenance Program",
          desc: "Scheduled follow-up sessions every 3-6 months to sustain and build on your hair regrowth results.",
        },
        {
          title: "Early Intervention",
          desc: "Proactive treatment for early-stage thinning to preserve existing hair and prevent further loss.",
        },
      ]}
      steps={[
        { step: 1, title: "Hair Assessment", desc: "Comprehensive evaluation of your hair loss pattern, scalp health, and potential contributing factors." },
        { step: 2, title: "Blood Draw & Preparation", desc: "A small blood sample is drawn and processed to concentrate your platelet-rich plasma." },
        { step: 3, title: "PRP Treatment", desc: "Growth factor-rich PRP is injected into the scalp at strategic points to stimulate follicle activity." },
        { step: 4, title: "Progress Monitoring", desc: "Regular follow-up appointments to track hair growth progress and adjust your treatment protocol." },
      ]}
      testimonials={[
        {
          name: "Thomas R.",
          initial: "T",
          treatment: "Scalp PRP",
          text: "After three PRP sessions, I noticed significantly less shedding and new baby hairs growing in. My hair looks noticeably thicker. Dr. Laurent's approach is thorough and professional.",
          rating: 5,
        },
        {
          name: "Alexandre P.",
          initial: "A",
          treatment: "PRP + Microneedling",
          text: "I was skeptical at first, but the combination of PRP and microneedling has given me real, visible results. My thinning crown is filling in. Couldn't be happier!",
          rating: 5,
        },
        {
          name: "Nadia S.",
          initial: "N",
          treatment: "Hair Stimulation",
          text: "As a woman dealing with thinning hair, finding Dr. Laurent was a relief. He took the time to understand my concerns and created a treatment plan that is truly working.",
          rating: 5,
        },
      ]}
      faqs={[
        {
          q: "How does PRP hair stimulation work?",
          a: "PRP (Platelet-Rich Plasma) is derived from your own blood. It contains concentrated growth factors that, when injected into the scalp, stimulate dormant hair follicles, improve blood supply, and promote new hair growth.",
        },
        {
          q: "How many sessions are needed?",
          a: "Most patients benefit from an initial series of 3-4 sessions spaced 4-6 weeks apart, followed by maintenance sessions every 3-6 months. Results are progressive and continue to improve with each session.",
        },
        {
          q: "When will I see results?",
          a: "Most patients notice reduced hair shedding within 4-6 weeks. Visible new growth typically becomes apparent after 2-3 months, with continued improvement over 6-12 months.",
        },
        {
          q: "Is PRP hair treatment painful?",
          a: "The scalp is numbed with topical anesthetic before treatment. Most patients describe the sensation as mild pressure or tingling. The procedure is well-tolerated and takes about 45-60 minutes.",
        },
        {
          q: "Who is a good candidate for hair stimulation?",
          a: "PRP works best for individuals with early to moderate hair thinning. It is effective for both men and women experiencing androgenetic alopecia, telogen effluvium, or general hair thinning. A consultation will determine if you're a good candidate.",
        },
        {
          q: "Are there any side effects?",
          a: "Since PRP uses your own blood, allergic reactions are extremely rare. Mild scalp tenderness, redness, or swelling at injection sites may occur for 24-48 hours. There is no significant downtime.",
        },
      ]}
      formTitle="Book Your Consultation"
      formOptions={[
        "Scalp PRP",
        "PRP + Microneedling",
        "Exosome Therapy",
        "Hair Loss Assessment",
        "Other / Not Sure",
      ]}
    />
  );
}
