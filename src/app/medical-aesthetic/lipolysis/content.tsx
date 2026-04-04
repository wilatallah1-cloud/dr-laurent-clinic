"use client";

import { ServicePageLayout } from "@/components/service-page-layout";
import { Award, Shield, Sparkles, Clock } from "lucide-react";

export function LipolysisContent() {
  return (
    <ServicePageLayout
      heroTitle="Injection"
      heroHighlight="Lipolysis"
      heroDescription="Non-surgical fat reduction targeting stubborn pockets that resist diet and exercise. Sculpt your contours with precision injection treatments and minimal downtime."
      heroBadges={["Non-surgical", "Targeted fat reduction", "Multiple treatment areas"]}
      heroImage="https://drlaurentmedecineprivee.ca/assets/hero-background-injectables-sHrFXrk2.jpg"
      whyTitle="Why Choose Dr. Laurent"
      whySubtitle="Medical expertise in body contouring with proven, non-invasive fat reduction techniques."
      features={[
        {
          icon: Award,
          title: "Medical Expertise",
          desc: "Board-certified physician with specialized training in body contouring and injection-based fat reduction.",
        },
        {
          icon: Shield,
          title: "Safe & Effective",
          desc: "Clinically proven fat-dissolving formulas that permanently destroy treated fat cells.",
        },
        {
          icon: Sparkles,
          title: "Targeted Results",
          desc: "Precisely target stubborn fat deposits in the chin, arms, abdomen, love handles, and more.",
        },
        {
          icon: Clock,
          title: "Minimal Downtime",
          desc: "Quick in-office treatment with minimal recovery. Return to daily activities the same day.",
        },
      ]}
      proceduresTitle="Treatment Areas"
      proceduresSubtitle="Targeted fat reduction for multiple body areas. Currently on promotion until Easter 2026."
      procedures={[
        {
          title: "Chin (Double Chin)",
          desc: "Eliminate submental fat for a defined jawline and profile. $510 per session (promo).",
        },
        {
          title: "Arms",
          desc: "Reduce stubborn upper arm fat for slimmer, more toned-looking arms. $595 per session (promo).",
        },
        {
          title: "Abdomen",
          desc: "Target belly fat with full or half abdomen treatments. From $510 for half, $765 for full abdomen (promo).",
        },
        {
          title: "Love Handles",
          desc: "Sculpt your waistline by reducing lateral fat deposits. $425 per session (promo).",
        },
        {
          title: "Saddlebags & Thighs",
          desc: "Slim outer thighs and saddlebag areas for smoother contours. From $680 per session (promo).",
        },
        {
          title: "Back Fat & Other Areas",
          desc: "Treat back fat, calves, or knees for comprehensive body contouring. From $595 per session (promo).",
        },
      ]}
      steps={[
        { step: 1, title: "Body Assessment", desc: "Evaluation of your fat distribution, skin quality, and body contouring goals." },
        { step: 2, title: "Treatment Planning", desc: "Personalized protocol determining the number of sessions and injection sites for optimal results." },
        { step: 3, title: "Lipolysis Injections", desc: "Precise injections of fat-dissolving solution into targeted areas. The procedure takes 15-30 minutes." },
        { step: 4, title: "Progressive Results", desc: "Fat cells are gradually eliminated over 4-6 weeks. Follow-up sessions as needed for your desired outcome." },
      ]}
      testimonials={[
        {
          name: "Francois B.",
          initial: "F",
          treatment: "Chin Lipolysis",
          text: "My double chin was my biggest insecurity. After two sessions, it's practically gone. The treatment was quick and the results are remarkable. Wish I'd done it sooner!",
          rating: 5,
        },
        {
          name: "Catherine L.",
          initial: "C",
          treatment: "Love Handles",
          text: "Diet and exercise couldn't touch my love handles. Dr. Laurent's lipolysis treatment finally gave me the waistline I wanted. Professional care from start to finish.",
          rating: 5,
        },
        {
          name: "Marc-Andre V.",
          initial: "M",
          treatment: "Abdomen",
          text: "The abdominal treatment was easier than I expected. Some swelling for a few days, but the fat reduction over the following weeks was impressive. Very happy with my results.",
          rating: 5,
        },
      ]}
      faqs={[
        {
          q: "How does injection lipolysis work?",
          a: "Injection lipolysis uses a fat-dissolving solution that is injected directly into stubborn fat deposits. The solution breaks down fat cell membranes, and the body naturally metabolizes and eliminates the destroyed fat cells over several weeks.",
        },
        {
          q: "Is the fat reduction permanent?",
          a: "Yes. Once fat cells are destroyed, they do not regenerate. However, remaining fat cells can still enlarge with significant weight gain, so maintaining a healthy lifestyle helps preserve your results.",
        },
        {
          q: "How many sessions are needed?",
          a: "Most patients require 2-4 sessions spaced 4-6 weeks apart for optimal results. The number of sessions depends on the treatment area and the amount of fat to be reduced.",
        },
        {
          q: "What are the side effects?",
          a: "Common side effects include temporary swelling, redness, bruising, and tenderness at the injection site. These typically resolve within a few days to a week. Serious side effects are rare.",
        },
        {
          q: "Who is a good candidate for lipolysis?",
          a: "Ideal candidates are at or near their target weight with localized fat deposits that don't respond to diet and exercise. Lipolysis is not a weight-loss treatment but rather a body contouring solution.",
        },
        {
          q: "Are there any current promotions?",
          a: "Yes! We're currently offering promotional pricing on all lipolysis treatments until Easter 2026, with savings of 15% across all treatment areas. Contact us for details.",
        },
      ]}
      formTitle="Book Your Consultation"
      formOptions={[
        "Chin (Double Chin)",
        "Arms",
        "Abdomen",
        "Love Handles",
        "Thighs / Saddlebags",
        "Back Fat",
        "Other / Not Sure",
      ]}
    />
  );
}
