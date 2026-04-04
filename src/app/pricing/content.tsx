"use client";

import { Navbar } from "@/components/navbar";
import { FooterSection } from "@/components/sections/footer";
import { FadeIn } from "@/components/motion";
import { Calendar, Phone } from "lucide-react";
import Link from "next/link";

interface PriceItem {
  name: string;
  price: string;
  promo?: string;
}

interface PriceCategory {
  title: string;
  items: PriceItem[];
}

const aestheticCategories: PriceCategory[] = [
  {
    title: "Hyaluronic Acid",
    items: [
      { name: "Regular", price: "$750" },
      { name: "1/2 syringe", price: "$525" },
      { name: "Sculptra", price: "$800" },
      { name: "Radiesse", price: "$850" },
      { name: "Facial transformation", price: "min $2,000" },
      { name: "VAMP - 1 syringe", price: "$350" },
    ],
  },
  {
    title: "Neuromodulators (Botox)",
    items: [
      { name: "Dysport (per unit)", price: "$12" },
      { name: "Xeomin (per unit)", price: "$12" },
      { name: "Letybo (per unit)", price: "$10" },
    ],
  },
  {
    title: "CLARITY Laser - Skin Renewal",
    items: [
      { name: "Full face", price: "$375" },
      { name: "Half face", price: "$300" },
      { name: "Pigmented lesion - Small zone", price: "$300" },
      { name: "Pigmented lesion - Medium zone", price: "$375" },
      { name: "Pigmented lesion - Large zone", price: "$450" },
      { name: "Vascular - Small zone", price: "$300" },
      { name: "Vascular - Medium zone", price: "$375" },
      { name: "Vascular - Large zone", price: "$450" },
    ],
  },
  {
    title: "Potenza Laser",
    items: [
      { name: "Peri-oral (smile lines)", price: "$350" },
      { name: "Peri-orbital (eye contour)", price: "$350" },
      { name: "Full face", price: "$750" },
      { name: "Full face with Fusion", price: "$950" },
      { name: "Cheeks", price: "$450" },
      { name: "Forehead", price: "$450" },
      { name: "Neck", price: "$650" },
      { name: "Face & Neck", price: "$1,250" },
      { name: "Add Exosome", price: "$100" },
    ],
  },
  {
    title: "Potenza + Ultra",
    items: [
      { name: "Face + Neck", price: "$1,500" },
      { name: "Face", price: "$1,000" },
      { name: "Neck", price: "$750" },
    ],
  },
  {
    title: "Laser Hair Removal",
    items: [
      { name: "Upper lip", price: "$60" },
      { name: "Cheeks", price: "$60" },
      { name: "Beard line", price: "$60" },
      { name: "Full beard", price: "$100" },
      { name: "Sideburns", price: "$60" },
      { name: "Chin or neck", price: "$60" },
      { name: "Underarms", price: "$60" },
      { name: "Full arms", price: "$160" },
      { name: "Half arms", price: "$100" },
      { name: "Shoulders", price: "$80" },
      { name: "Full chest", price: "$250" },
      { name: "Half chest", price: "$125" },
      { name: "Abdomen", price: "$150" },
      { name: "Back", price: "$225" },
      { name: "Standard bikini", price: "$115" },
      { name: "Brazilian bikini", price: "$150" },
      { name: "Full legs", price: "$250" },
      { name: "Half legs", price: "$150" },
      { name: "Thighs", price: "$150" },
      { name: "Between eyebrows", price: "$60" },
      { name: "Testicles", price: "$100" },
      { name: "Buttocks", price: "$150" },
      { name: "Combo: Underarm + Std Bikini + Legs", price: "$380" },
    ],
  },
  {
    title: "Lipolysis",
    items: [
      { name: "Chin", price: "$510", promo: "$600" },
      { name: "Arms (both)", price: "$595", promo: "$700" },
      { name: "Saddlebags", price: "$680", promo: "$800" },
      { name: "Thighs (both)", price: "$765", promo: "$900" },
      { name: "Full abdomen", price: "$765", promo: "$900" },
      { name: "Half abdomen", price: "$510", promo: "$600" },
      { name: "Love handles", price: "$425", promo: "$500" },
      { name: "Calf or knee", price: "$595", promo: "$700" },
      { name: "Back fat", price: "$595", promo: "$700" },
    ],
  },
  {
    title: "Facial Treatments",
    items: [
      { name: "Hydrating facial", price: "$225" },
      { name: "Cleansing facial (glow)", price: "$185" },
      { name: "Light chemical peel (superficial)", price: "$265" },
      { name: "Deep chemical peel (medical)", price: "$625" },
      { name: "Microneedling (standard)", price: "$230" },
      { name: "Microneedling + VAMP", price: "$480" },
    ],
  },
  {
    title: "Tempsure Radio Frequency",
    items: [
      { name: "Full face", price: "$650" },
      { name: "Upper face", price: "$350" },
      { name: "Lower face", price: "$350" },
      { name: "Eyes", price: "$250" },
      { name: "Thighs + sides (cellulite)", price: "$450" },
      { name: "Thighs + buttocks (cellulite)", price: "$550" },
      { name: "Skin tags", price: "$130" },
      { name: "Additional", price: "$50 / 5min" },
    ],
  },
  {
    title: "Ultra Laser",
    items: [
      { name: "Full face", price: "$500" },
      { name: "Face + Neck", price: "$750" },
      { name: "Face - Neck - Decolletage", price: "$900" },
      { name: "Add serum", price: "$100" },
    ],
  },
  {
    title: "Picosure Pro Laser",
    items: [
      { name: "Full face", price: "$800" },
      { name: "Half face", price: "$400" },
      { name: "Face - Neck - Decolletage/Chest", price: "$1,920" },
      { name: "Neck", price: "$400" },
      { name: "Decolletage / Chest", price: "$800" },
      { name: "Hands", price: "$400" },
      { name: "Acne scars on cheeks", price: "$200" },
      { name: "Acne scars", price: "$225" },
      { name: "Melasma", price: "$270" },
    ],
  },
  {
    title: "Cynoglow",
    items: [
      { name: "Face", price: "$1,500" },
      { name: "Face & Neck", price: "$2,000" },
    ],
  },
  {
    title: "CO2 Ablative Treatment",
    items: [
      { name: "CO2 - Full face", price: "$1,800" },
      { name: "CO2 - Eyelid (Blepharoplasty)", price: "$1,500" },
      { name: "CO2 - Cheeks or Neck", price: "$1,500" },
      { name: "Additional zone", price: "$500 / zone" },
      { name: "Add PRP", price: "$300" },
      { name: "Add exosome", price: "$100" },
    ],
  },
  {
    title: "CO2 Tetra Pro - Cool Peel",
    items: [
      { name: "Full face", price: "$800" },
      { name: "Full face + neck", price: "$1,200" },
      { name: "Full face + neck + decolletage", price: "$1,500" },
      { name: "Neck only", price: "$600" },
      { name: "Decolletage only", price: "$800" },
      { name: "Hands only", price: "$600" },
      { name: "Arms only", price: "$800" },
      { name: "Cool Peel + Potenza", price: "$1,500 / session" },
      { name: "Ultralift (Cool Peel + Ultraformer)", price: "$3,750" },
    ],
  },
  {
    title: "Tattoo Removal (Picosure Pro)",
    items: [
      { name: "2 inches or less", price: "$99" },
      { name: "2.5 inches", price: "$123" },
      { name: "3 inches", price: "$147" },
      { name: "3.5 inches", price: "$172" },
      { name: "4 inches", price: "$196" },
      { name: "4.5 inches", price: "$221" },
      { name: "5 inches", price: "$245" },
      { name: "5.5 inches", price: "$270" },
      { name: "6 inches", price: "$294" },
      { name: "6.5 inches", price: "$319" },
      { name: "7 inches", price: "$343" },
      { name: "7.5 inches", price: "$368" },
      { name: "8 inches", price: "$392" },
      { name: "8.5 inches", price: "$417" },
      { name: "9 inches", price: "$441" },
      { name: "9.5 inches", price: "$466" },
      { name: "10 - 15 inches", price: "$500" },
      { name: "16 - 20 inches", price: "$750" },
      { name: "21 - 30 inches", price: "$1,000" },
      { name: "Half sleeve", price: "$1,500" },
      { name: "Full sleeve", price: "$1,750" },
      { name: "Back / Chest", price: "$2,000" },
    ],
  },
  {
    title: "PRP (Platelet Rich Plasma)",
    items: [
      { name: "Face", price: "$600" },
      { name: "Scalp", price: "$500" },
      { name: "PRP + Microneedling (Face)", price: "$800" },
      { name: "Joint", price: "$950" },
      { name: "Exosome 2ml", price: "$100" },
    ],
  },
  {
    title: "Ultraformer",
    items: [
      { name: "Full face", price: "$3,500" },
      { name: "Full face + Booster", price: "$4,200" },
      { name: "Face + Neck", price: "$4,500" },
      { name: "Face + Neck + Booster", price: "$5,200" },
      { name: "Face + Neck + Decolletage", price: "$6,000" },
      { name: "Lower face + Neck", price: "$3,500" },
      { name: "Lower face + Neck + Decolletage", price: "$5,000" },
      { name: "Neck add-on", price: "$1,000" },
      { name: "Booster only (full face)", price: "$1,000" },
    ],
  },
  {
    title: "Ultraformer - Fragmented Zones",
    items: [
      { name: "Upper face", price: "$1,500" },
      { name: "Lower face", price: "$2,500" },
      { name: "Neck", price: "$2,500" },
      { name: "Under chin", price: "$1,000" },
      { name: "Under eye bags", price: "$750" },
      { name: "Brow lift", price: "$750" },
      { name: "Peri-oral", price: "$750" },
      { name: "Decolletage", price: "$2,500" },
      { name: "Neck + Decolletage", price: "$3,500" },
      { name: "Knees", price: "$2,800" },
    ],
  },
  {
    title: "Penile Enhancement",
    items: [
      { name: "Touchup - 6ml", price: "$3,000" },
      { name: "Silver - 12ml", price: "$6,000" },
      { name: "Gold - 18ml", price: "$9,000" },
      { name: "Platinum - 24ml", price: "$12,000" },
    ],
  },
  {
    title: "Intimate Neuromodulators",
    items: [
      { name: "Grotox", price: "$1,250" },
      { name: "Scrotox - 100 units", price: "$1,200" },
      { name: "Anal Botox - 50 units", price: "$750" },
      { name: "Anal Botox - 100 units", price: "$1,500" },
      { name: "Anal Botox Aesthetic", price: "$750" },
    ],
  },
  {
    title: "Intimate PRP",
    items: [
      { name: "P-Shot", price: "$1,200" },
      { name: "O-Shot", price: "$1,200" },
      { name: "Add Exosome", price: "$100" },
    ],
  },
  {
    title: "Liquid BBL (Brazilian Butt Lift)",
    items: [
      { name: "Liquid BBL (Filler)", price: "from $4,500" },
      { name: "Liquid BBL (Radiesse)", price: "from $3,200" },
      { name: "Additional targeted zone", price: "$700 / 10cc" },
      { name: "Minor touch-up (≤ 6 weeks)", price: "$800" },
    ],
  },
  {
    title: "Blepharoplasty",
    items: [{ name: "CO2 Blepharoplasty", price: "$1,500" }],
  },
];

const medicalCategories: PriceCategory[] = [
  {
    title: "Administrative Fees",
    items: [{ name: "Medical file opening", price: "$40" }],
  },
  {
    title: "Consultations & Emergencies",
    items: [
      { name: "Minor emergency (1 reason) 15 min", price: "$175" },
      { name: "Complex emergency (2 reasons) 30 min", price: "$225" },
      { name: "Complex emergency (3 reasons max) 30 min", price: "$275" },
    ],
  },
  {
    title: "Hormone Therapy",
    items: [
      { name: "Initial hormone therapy consultation - 45 min", price: "$350" },
      { name: "Hormone therapy follow-up - 30 min", price: "$250" },
    ],
  },
  {
    title: "Weight Management",
    items: [
      { name: "Initial weight management consultation - 45 min", price: "$350" },
      { name: "Weight management follow-up - 20 min", price: "$250" },
    ],
  },
  {
    title: "Combined Package",
    items: [
      { name: "Combo initial hormone + weight loss consultation - 45 min", price: "$600" },
      { name: "Combo hormone + weight loss follow-up - 30 min", price: "$350" },
    ],
  },
  {
    title: "Mental Health",
    items: [
      { name: "Initial mental health consultation - 45 min", price: "$350" },
      { name: "Mental health follow-up - 35 min", price: "$250" },
    ],
  },
  {
    title: "Family Medicine",
    items: [
      { name: "Adult intake - 45 min", price: "$350" },
      { name: "Family doctor follow-up (2 reasons) - 20 min", price: "$200" },
      { name: "Pediatric intake - 30 min", price: "$300" },
      { name: "Pediatric follow-up - 20 min", price: "$150" },
      { name: "Annual family doctor exam - 45 min", price: "$350" },
    ],
  },
  {
    title: "Medical Botox",
    items: [
      { name: "Medical Botox (patient with prescribed Rx)", price: "$500" },
    ],
  },
  {
    title: "Medical Procedures",
    items: [
      { name: "Cyst removal (consultation included)", price: "$350" },
      { name: "Stitches", price: "$200" },
      { name: "Stitch removal", price: "$10 / stitch" },
      { name: "Joint injection (cortisone)", price: "$300" },
      { name: "IUD - insertion (IUD excluded)", price: "$250" },
      { name: "IUD - removal", price: "$150" },
      { name: "PAP test", price: "$150" },
      { name: "Ear cleaning", price: "$80" },
      { name: "ADHD evaluation (12+ / pre-filled form)", price: "$750" },
      { name: "ADHD follow-up - 30 min", price: "$250" },
    ],
  },
  {
    title: "Documents & Certificates",
    items: [
      { name: "Document completion (3 pages or less)", price: "$120" },
      { name: "Document completion (3 to 10 pages)", price: "$240" },
      { name: "Work leave certificate", price: "$75" },
      { name: "Prescription renewal (existing patient)", price: "$75" },
      { name: "Parking permit", price: "$100" },
      { name: "Attendance certificate", price: "$75" },
      { name: "SAAQ document + consultation", price: "$200" },
    ],
  },
];

function PriceTable({ category }: { category: PriceCategory }) {
  return (
    <div className="mb-10 last:mb-0">
      <h3 className="font-heading text-xl font-semibold text-navy mb-4">
        {category.title}
      </h3>
      <div className="bg-white rounded-xl border border-border/50 overflow-hidden">
        {category.items.map((item, i) => (
          <div
            key={i}
            className={`flex items-center justify-between px-4 sm:px-5 py-3 sm:py-3.5 min-h-[44px] ${
              i !== category.items.length - 1 ? "border-b border-border/30" : ""
            } hover:bg-cream/50 transition-colors`}
          >
            <span className="text-sm text-navy">{item.name}</span>
            <span className="text-sm font-semibold text-navy flex items-center gap-2 shrink-0 ml-4">
              {item.promo && (
                <span className="text-muted-foreground line-through text-xs">
                  {item.promo}
                </span>
              )}
              <span className={item.promo ? "text-gold" : ""}>
                {item.price}
              </span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function PricingContent() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative bg-navy pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy/95 to-navy/90" />
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <FadeIn>
              <p className="text-gold text-sm font-medium tracking-wider uppercase mb-4">
                Transparent pricing
              </p>
              <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-semibold text-white leading-tight mb-6">
                Our <span className="text-gold">Prices</span>
              </h1>
              <p className="text-white/60 text-lg leading-relaxed max-w-2xl mx-auto">
                Clear and transparent pricing for all our medical aesthetic and
                private medical services.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Medical Aesthetic Prices */}
        <section className="py-24 bg-cream">
          <div className="max-w-4xl mx-auto px-6">
            <FadeIn className="mb-12">
              <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-navy">
                Medical Aesthetic
              </h2>
            </FadeIn>
            {aestheticCategories.map((cat, i) => (
              <FadeIn key={cat.title} delay={Math.min(i * 0.03, 0.3)}>
                <PriceTable category={cat} />
              </FadeIn>
            ))}
            <FadeIn>
              <p className="text-xs text-muted-foreground mt-4 italic">
                * Lipolysis promo pricing valid until Easter 2026.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Private Medicine Prices */}
        <section className="py-24 bg-white noise-overlay">
          <div className="relative z-10 max-w-4xl mx-auto px-6">
            <FadeIn className="mb-12">
              <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-navy">
                Private Medicine
              </h2>
            </FadeIn>
            {medicalCategories.map((cat, i) => (
              <FadeIn key={cat.title} delay={Math.min(i * 0.03, 0.3)}>
                <PriceTable category={cat} />
              </FadeIn>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-navy text-center">
          <div className="max-w-2xl mx-auto px-6">
            <FadeIn>
              <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-white mb-4">
                Questions About Our <span className="text-gold">Rates?</span>
              </h2>
              <p className="text-white/50 mb-8">
                Contact us for a personalized consultation and a quote tailored
                to your needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-light text-navy px-10 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-gold/20"
                >
                  <Calendar className="w-5 h-5" />
                  Contact Us
                </Link>
                <Link
                  href="tel:+15145003422"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white px-6 py-4 rounded-full text-sm transition-all duration-300 hover:bg-white/15"
                >
                  <Phone className="w-4 h-4" />
                  Call (514) 500-3422
                </Link>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
      <FooterSection />
    </>
  );
}
