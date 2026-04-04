"use client";

import { ServicePageLayout } from "@/components/service-page-layout";
import { Award, Shield, Eye, Clock } from "lucide-react";

export function NonSurgicalBlepharoplastyContent() {
  return (
    <ServicePageLayout
      heroTitle="Non-Surgical"
      heroHighlight="Blepharoplasty"
      heroDescription="Rejuvenate your eye area without surgery using advanced CO2 laser technology. Tighten sagging eyelids, reduce puffiness, and restore a refreshed, youthful appearance."
      heroBadges={["No surgery required", "CO2 laser precision", "Natural rejuvenation"]}
      heroImage="https://drlaurentmedecineprivee.ca/assets/hero-background-injectables-sHrFXrk2.jpg"
      whyTitle="Why Choose Dr. Laurent"
      whySubtitle="Expert non-surgical eye rejuvenation with precise CO2 laser technology."
      features={[
        {
          icon: Award,
          title: "Specialized Training",
          desc: "Advanced expertise in periorbital rejuvenation using CO2 laser and complementary technologies.",
        },
        {
          icon: Shield,
          title: "Safe Alternative",
          desc: "Avoid the risks and lengthy recovery of surgical blepharoplasty with this non-invasive approach.",
        },
        {
          icon: Eye,
          title: "Precision Results",
          desc: "CO2 laser precisely targets excess skin and stimulates collagen for tighter, smoother eyelids.",
        },
        {
          icon: Clock,
          title: "Quick Recovery",
          desc: "Significantly shorter recovery compared to surgery. Most patients resume activities within 5-7 days.",
        },
      ]}
      proceduresTitle="Our Eye Rejuvenation Treatments"
      proceduresSubtitle="Advanced solutions for eyelid and periorbital rejuvenation."
      procedures={[
        {
          title: "CO2 Blepharoplasty",
          desc: "Fractional CO2 laser treatment to tighten upper and lower eyelid skin, reducing hooding and wrinkles. $1,500.",
        },
        {
          title: "Under-Eye Bags (Ultraformer)",
          desc: "HIFU technology to firm and lift the under-eye area, reducing puffiness and hollowing. $750.",
        },
        {
          title: "Brow Lift (Ultraformer)",
          desc: "Non-surgical brow elevation to open up the eye area and create a more alert, youthful look. $750.",
        },
        {
          title: "Periorbital RF Treatment",
          desc: "Radiofrequency to smooth fine lines, crow's feet, and crepey skin around the eyes. $250.",
        },
        {
          title: "CO2 + PRP Combination",
          desc: "Enhanced healing and results by combining CO2 laser with platelet-rich plasma. CO2 + $300 PRP add-on.",
        },
        {
          title: "Comprehensive Eye Package",
          desc: "Multi-treatment approach combining laser, RF, and/or HIFU for complete periorbital rejuvenation.",
        },
      ]}
      steps={[
        { step: 1, title: "Eye Area Assessment", desc: "Detailed evaluation of eyelid skin, fat pads, brow position, and your specific concerns." },
        { step: 2, title: "Treatment Planning", desc: "Customized protocol selecting the ideal technology and approach for your eye rejuvenation goals." },
        { step: 3, title: "Laser Treatment", desc: "Precise CO2 laser application to the eyelid area with topical anesthesia for comfort." },
        { step: 4, title: "Healing & Results", desc: "Guided aftercare during the healing phase. Collagen remodeling continues for 3-6 months." },
      ]}
      testimonials={[
        {
          name: "Louise D.",
          initial: "L",
          treatment: "CO2 Blepharoplasty",
          text: "My hooded eyelids made me look tired all the time. The CO2 blepharoplasty tightened my lids beautifully without surgery. People constantly tell me I look rested and refreshed!",
          rating: 5,
        },
        {
          name: "Patricia G.",
          initial: "P",
          treatment: "Eye Rejuvenation",
          text: "I was considering surgical blepharoplasty but wanted to try the non-surgical option first. The results are remarkable — tighter skin, fewer wrinkles, and I avoided surgery entirely.",
          rating: 5,
        },
        {
          name: "Diane M.",
          initial: "D",
          treatment: "Brow Lift + CO2",
          text: "The combination of brow lift and CO2 treatment opened up my entire eye area. I look years younger and more alert. The recovery was so much easier than surgery would have been.",
          rating: 5,
        },
      ]}
      faqs={[
        {
          q: "What is non-surgical blepharoplasty?",
          a: "Non-surgical blepharoplasty uses CO2 laser technology to tighten and rejuvenate the eyelid skin without incisions or surgery. The laser precisely removes a thin layer of skin and stimulates deep collagen production, resulting in tighter, smoother eyelids.",
        },
        {
          q: "How does it compare to surgical blepharoplasty?",
          a: "Non-surgical CO2 blepharoplasty is ideal for mild to moderate eyelid laxity. It offers shorter recovery, no incisions, and no scarring. Surgical blepharoplasty may be more appropriate for severe hooding or fat pad repositioning. Dr. Laurent will advise you on the best option.",
        },
        {
          q: "What is the recovery like?",
          a: "Expect redness, swelling, and a sunburn-like feeling for 3-5 days. The skin will peel as it heals over 5-7 days. Most patients feel comfortable returning to social activities within a week. Full results develop over 2-3 months.",
        },
        {
          q: "Is the procedure painful?",
          a: "Topical numbing cream is applied to the treatment area before the procedure. Most patients feel only warmth or slight tingling during the laser application. Post-treatment discomfort is mild and managed with aftercare products.",
        },
        {
          q: "How long do results last?",
          a: "Results can last 2-5 years depending on your skin quality, age, and lifestyle. Maintenance sessions can be performed to sustain your results. Sun protection is essential for preserving your outcomes.",
        },
        {
          q: "Can non-surgical blepharoplasty be combined with other treatments?",
          a: "Yes. It pairs excellently with Ultraformer HIFU for brow lifting, PRP for enhanced healing, and radiofrequency for crow's feet. Dr. Laurent will create a comprehensive plan during your consultation.",
        },
      ]}
      formTitle="Book Your Consultation"
      formOptions={[
        "CO2 Blepharoplasty",
        "Under-Eye Bags",
        "Brow Lift",
        "Complete Eye Rejuvenation",
        "Other / Not Sure",
      ]}
    />
  );
}
