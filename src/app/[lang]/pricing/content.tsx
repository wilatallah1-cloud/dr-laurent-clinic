"use client";

import { Navbar } from "@/components/navbar";
import { FooterSection } from "@/components/sections/footer";
import { FadeIn } from "@/components/motion";
import { Calendar, Phone } from "lucide-react";
import Link from "@/components/locale-link";
import { useLocale } from "@/lib/locale";
import { getTranslations } from "@/lib/translations";

interface PriceItem {
  name: string;
  price: string;
  promo?: string;
}

interface PriceCategory {
  title: string;
  items: PriceItem[];
}

const pricingContent = {
  en: {
    badge: "Transparent pricing",
    heroTitle: "Our",
    heroHighlight: "Prices",
    heroDesc:
      "Clear and transparent pricing for all our medical aesthetic and private medical services.",
    aestheticHeading: "Medical Aesthetic",
    medicalHeading: "Private Medicine",
    lipolysisNote: "* Lipolysis promo pricing valid until Easter 2026.",
    ctaTitle: "Questions About Our",
    ctaHighlight: "Rates?",
    ctaDesc:
      "Contact us for a personalized consultation and a quote tailored to your needs.",
    ctaContact: "Contact Us",
    ctaCall: "Call (514) 500-3422",
  },
  fr: {
    badge: "Tarification transparente",
    heroTitle: "Nos",
    heroHighlight: "tarifs",
    heroDesc:
      "Tarification claire et transparente pour tous nos services d\u2019esth\u00E9tique m\u00E9dicale et de m\u00E9decine priv\u00E9e.",
    aestheticHeading: "Esth\u00E9tique m\u00E9dicale",
    medicalHeading: "M\u00E9decine priv\u00E9e",
    lipolysisNote:
      "* Tarifs promotionnels de lipolyse valides jusqu\u2019\u00E0 P\u00E2ques 2026.",
    ctaTitle: "Des questions sur nos",
    ctaHighlight: "tarifs\u00A0?",
    ctaDesc:
      "Contactez-nous pour une consultation personnalis\u00E9e et un devis adapt\u00E9 \u00E0 vos besoins.",
    ctaContact: "Contactez-nous",
    ctaCall: "Appeler (514) 500-3422",
  },
};

function getAestheticCategories(locale: "en" | "fr"): PriceCategory[] {
  if (locale === "fr") {
    return [
      {
        title: "Acide hyaluronique",
        items: [
          { name: "R\u00E9gulier", price: "$750" },
          { name: "1/2 seringue", price: "$525" },
          { name: "Sculptra", price: "$800" },
          { name: "Radiesse", price: "$850" },
          { name: "Transformation faciale", price: "min 2\u00A0000\u00A0$" },
          { name: "VAMP - 1 seringue", price: "$350" },
        ],
      },
      {
        title: "Neuromodulateurs (Botox)",
        items: [
          { name: "Dysport (par unit\u00E9)", price: "$12" },
          { name: "Xeomin (par unit\u00E9)", price: "$12" },
          { name: "Letybo (par unit\u00E9)", price: "$10" },
        ],
      },
      {
        title: "Laser CLARITY - Renouvellement cutan\u00E9",
        items: [
          { name: "Visage complet", price: "$375" },
          { name: "Demi-visage", price: "$300" },
          { name: "L\u00E9sion pigmentaire - Petite zone", price: "$300" },
          { name: "L\u00E9sion pigmentaire - Zone moyenne", price: "$375" },
          { name: "L\u00E9sion pigmentaire - Grande zone", price: "$450" },
          { name: "Vasculaire - Petite zone", price: "$300" },
          { name: "Vasculaire - Zone moyenne", price: "$375" },
          { name: "Vasculaire - Grande zone", price: "$450" },
        ],
      },
      {
        title: "Laser Potenza",
        items: [
          { name: "P\u00E9ri-oral (rides du sourire)", price: "$350" },
          { name: "P\u00E9ri-orbital (contour des yeux)", price: "$350" },
          { name: "Visage complet", price: "$750" },
          { name: "Visage complet avec Fusion", price: "$950" },
          { name: "Joues", price: "$450" },
          { name: "Front", price: "$450" },
          { name: "Cou", price: "$650" },
          { name: "Visage et cou", price: "$1,250" },
          { name: "Ajout Exosome", price: "$100" },
        ],
      },
      {
        title: "Potenza + Ultra",
        items: [
          { name: "Visage + Cou", price: "$1,500" },
          { name: "Visage", price: "$1,000" },
          { name: "Cou", price: "$750" },
        ],
      },
      {
        title: "\u00C9pilation laser",
        items: [
          { name: "L\u00E8vre sup\u00E9rieure", price: "$60" },
          { name: "Joues", price: "$60" },
          { name: "Ligne de barbe", price: "$60" },
          { name: "Barbe compl\u00E8te", price: "$100" },
          { name: "Favoris", price: "$60" },
          { name: "Menton ou cou", price: "$60" },
          { name: "Aisselles", price: "$60" },
          { name: "Bras complets", price: "$160" },
          { name: "Demi-bras", price: "$100" },
          { name: "\u00C9paules", price: "$80" },
          { name: "Poitrine compl\u00E8te", price: "$250" },
          { name: "Demi-poitrine", price: "$125" },
          { name: "Abdomen", price: "$150" },
          { name: "Dos", price: "$225" },
          { name: "Bikini standard", price: "$115" },
          { name: "Bikini br\u00E9silien", price: "$150" },
          { name: "Jambes compl\u00E8tes", price: "$250" },
          { name: "Demi-jambes", price: "$150" },
          { name: "Cuisses", price: "$150" },
          { name: "Entre les sourcils", price: "$60" },
          { name: "Testicules", price: "$100" },
          { name: "Fessiers", price: "$150" },
          { name: "Combo\u00A0: Aisselles + Bikini std + Jambes", price: "$380" },
        ],
      },
      {
        title: "Lipolyse",
        items: [
          { name: "Menton", price: "$510", promo: "$600" },
          { name: "Bras (les deux)", price: "$595", promo: "$700" },
          { name: "Culotte de cheval", price: "$680", promo: "$800" },
          { name: "Cuisses (les deux)", price: "$765", promo: "$900" },
          { name: "Abdomen complet", price: "$765", promo: "$900" },
          { name: "Demi-abdomen", price: "$510", promo: "$600" },
          { name: "Poign\u00E9es d\u2019amour", price: "$425", promo: "$500" },
          { name: "Mollet ou genou", price: "$595", promo: "$700" },
          { name: "Gras du dos", price: "$595", promo: "$700" },
        ],
      },
      {
        title: "Soins du visage",
        items: [
          { name: "Soin hydratant", price: "$225" },
          { name: "Soin nettoyant (\u00E9clat)", price: "$185" },
          { name: "Peeling chimique l\u00E9ger (superficiel)", price: "$265" },
          { name: "Peeling chimique profond (m\u00E9dical)", price: "$625" },
          { name: "Microneedling (standard)", price: "$230" },
          { name: "Microneedling + VAMP", price: "$480" },
        ],
      },
      {
        title: "Radiofr\u00E9quence Tempsure",
        items: [
          { name: "Visage complet", price: "$650" },
          { name: "Haut du visage", price: "$350" },
          { name: "Bas du visage", price: "$350" },
          { name: "Yeux", price: "$250" },
          { name: "Cuisses + c\u00F4t\u00E9s (cellulite)", price: "$450" },
          { name: "Cuisses + fessiers (cellulite)", price: "$550" },
          { name: "Acrochordons", price: "$130" },
          { name: "Suppl\u00E9mentaire", price: "$50 / 5min" },
        ],
      },
      {
        title: "Laser Ultra",
        items: [
          { name: "Visage complet", price: "$500" },
          { name: "Visage + Cou", price: "$750" },
          { name: "Visage - Cou - D\u00E9collet\u00E9", price: "$900" },
          { name: "Ajout s\u00E9rum", price: "$100" },
        ],
      },
      {
        title: "Laser Picosure Pro",
        items: [
          { name: "Visage complet", price: "$800" },
          { name: "Demi-visage", price: "$400" },
          { name: "Visage - Cou - D\u00E9collet\u00E9/Poitrine", price: "$1,920" },
          { name: "Cou", price: "$400" },
          { name: "D\u00E9collet\u00E9 / Poitrine", price: "$800" },
          { name: "Mains", price: "$400" },
          { name: "Cicatrices d\u2019acn\u00E9 sur les joues", price: "$200" },
          { name: "Cicatrices d\u2019acn\u00E9", price: "$225" },
          { name: "M\u00E9lasma", price: "$270" },
        ],
      },
      {
        title: "Cynoglow",
        items: [
          { name: "Visage", price: "$1,500" },
          { name: "Visage et cou", price: "$2,000" },
        ],
      },
      {
        title: "Traitement ablatif au CO2",
        items: [
          { name: "CO2 - Visage complet", price: "$1,800" },
          { name: "CO2 - Paupi\u00E8re (Bl\u00E9pharoplastie)", price: "$1,500" },
          { name: "CO2 - Joues ou Cou", price: "$1,500" },
          { name: "Zone suppl\u00E9mentaire", price: "$500 / zone" },
          { name: "Ajout PRP", price: "$300" },
          { name: "Ajout exosome", price: "$100" },
        ],
      },
      {
        title: "CO2 Tetra Pro - Cool Peel",
        items: [
          { name: "Visage complet", price: "$800" },
          { name: "Visage complet + cou", price: "$1,200" },
          { name: "Visage complet + cou + d\u00E9collet\u00E9", price: "$1,500" },
          { name: "Cou seulement", price: "$600" },
          { name: "D\u00E9collet\u00E9 seulement", price: "$800" },
          { name: "Mains seulement", price: "$600" },
          { name: "Bras seulement", price: "$800" },
          { name: "Cool Peel + Potenza", price: "$1,500 / s\u00E9ance" },
          { name: "Ultralift (Cool Peel + Ultraformer)", price: "$3,750" },
        ],
      },
      {
        title: "Retrait de tatouage (Picosure Pro)",
        items: [
          { name: "2 pouces ou moins", price: "$99" },
          { name: "2,5 pouces", price: "$123" },
          { name: "3 pouces", price: "$147" },
          { name: "3,5 pouces", price: "$172" },
          { name: "4 pouces", price: "$196" },
          { name: "4,5 pouces", price: "$221" },
          { name: "5 pouces", price: "$245" },
          { name: "5,5 pouces", price: "$270" },
          { name: "6 pouces", price: "$294" },
          { name: "6,5 pouces", price: "$319" },
          { name: "7 pouces", price: "$343" },
          { name: "7,5 pouces", price: "$368" },
          { name: "8 pouces", price: "$392" },
          { name: "8,5 pouces", price: "$417" },
          { name: "9 pouces", price: "$441" },
          { name: "9,5 pouces", price: "$466" },
          { name: "10 - 15 pouces", price: "$500" },
          { name: "16 - 20 pouces", price: "$750" },
          { name: "21 - 30 pouces", price: "$1,000" },
          { name: "Demi-manche", price: "$1,500" },
          { name: "Manche compl\u00E8te", price: "$1,750" },
          { name: "Dos / Poitrine", price: "$2,000" },
        ],
      },
      {
        title: "PRP (Plasma riche en plaquettes)",
        items: [
          { name: "Visage", price: "$600" },
          { name: "Cuir chevelu", price: "$500" },
          { name: "PRP + Microneedling (Visage)", price: "$800" },
          { name: "Articulation", price: "$950" },
          { name: "Exosome 2ml", price: "$100" },
        ],
      },
      {
        title: "Ultraformer",
        items: [
          { name: "Visage complet", price: "$3,500" },
          { name: "Visage complet + Booster", price: "$4,200" },
          { name: "Visage + Cou", price: "$4,500" },
          { name: "Visage + Cou + Booster", price: "$5,200" },
          { name: "Visage + Cou + D\u00E9collet\u00E9", price: "$6,000" },
          { name: "Bas du visage + Cou", price: "$3,500" },
          { name: "Bas du visage + Cou + D\u00E9collet\u00E9", price: "$5,000" },
          { name: "Ajout cou", price: "$1,000" },
          { name: "Booster seulement (visage complet)", price: "$1,000" },
        ],
      },
      {
        title: "Ultraformer - Zones fragment\u00E9es",
        items: [
          { name: "Haut du visage", price: "$1,500" },
          { name: "Bas du visage", price: "$2,500" },
          { name: "Cou", price: "$2,500" },
          { name: "Sous le menton", price: "$1,000" },
          { name: "Poches sous les yeux", price: "$750" },
          { name: "Rehaussement des sourcils", price: "$750" },
          { name: "P\u00E9ri-oral", price: "$750" },
          { name: "D\u00E9collet\u00E9", price: "$2,500" },
          { name: "Cou + D\u00E9collet\u00E9", price: "$3,500" },
          { name: "Genoux", price: "$2,800" },
        ],
      },
      {
        title: "Augmentation p\u00E9nienne",
        items: [
          { name: "Retouche - 6ml", price: "$3,000" },
          { name: "Argent - 12ml", price: "$6,000" },
          { name: "Or - 18ml", price: "$9,000" },
          { name: "Platine - 24ml", price: "$12,000" },
        ],
      },
      {
        title: "Neuromodulateurs intimes",
        items: [
          { name: "Grotox", price: "$1,250" },
          { name: "Scrotox - 100 unit\u00E9s", price: "$1,200" },
          { name: "Botox anal - 50 unit\u00E9s", price: "$750" },
          { name: "Botox anal - 100 unit\u00E9s", price: "$1,500" },
          { name: "Botox anal esth\u00E9tique", price: "$750" },
        ],
      },
      {
        title: "PRP intime",
        items: [
          { name: "P-Shot", price: "$1,200" },
          { name: "O-Shot", price: "$1,200" },
          { name: "Ajout Exosome", price: "$100" },
        ],
      },
      {
        title: "BBL liquide (Brazilian Butt Lift)",
        items: [
          { name: "BBL liquide (Comblement)", price: "\u00E0 partir de $4,500" },
          { name: "BBL liquide (Radiesse)", price: "\u00E0 partir de $3,200" },
          { name: "Zone cibl\u00E9e suppl\u00E9mentaire", price: "$700 / 10cc" },
          { name: "Retouche mineure (\u2264 6 semaines)", price: "$800" },
        ],
      },
      {
        title: "Bl\u00E9pharoplastie",
        items: [{ name: "Bl\u00E9pharoplastie au CO2", price: "$1,500" }],
      },
    ];
  }
  return [
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
        { name: "Minor touch-up (\u2264 6 weeks)", price: "$800" },
      ],
    },
    {
      title: "Blepharoplasty",
      items: [{ name: "CO2 Blepharoplasty", price: "$1,500" }],
    },
  ];
}

function getMedicalCategories(locale: "en" | "fr"): PriceCategory[] {
  if (locale === "fr") {
    return [
      {
        title: "Frais administratifs",
        items: [{ name: "Ouverture de dossier m\u00E9dical", price: "$40" }],
      },
      {
        title: "Consultations et urgences",
        items: [
          { name: "Urgence mineure (1 raison) 15 min", price: "$175" },
          { name: "Urgence complexe (2 raisons) 30 min", price: "$225" },
          { name: "Urgence complexe (3 raisons max) 30 min", price: "$275" },
        ],
      },
      {
        title: "Hormonoth\u00E9rapie",
        items: [
          {
            name: "Consultation initiale en hormonoth\u00E9rapie - 45 min",
            price: "$350",
          },
          { name: "Suivi d\u2019hormonoth\u00E9rapie - 30 min", price: "$250" },
        ],
      },
      {
        title: "Gestion du poids",
        items: [
          {
            name: "Consultation initiale en gestion du poids - 45 min",
            price: "$350",
          },
          { name: "Suivi de gestion du poids - 20 min", price: "$250" },
        ],
      },
      {
        title: "Forfait combin\u00E9",
        items: [
          {
            name: "Consultation initiale combo hormones + perte de poids - 45 min",
            price: "$600",
          },
          {
            name: "Suivi combo hormones + perte de poids - 30 min",
            price: "$350",
          },
        ],
      },
      {
        title: "Sant\u00E9 mentale",
        items: [
          {
            name: "Consultation initiale en sant\u00E9 mentale - 45 min",
            price: "$350",
          },
          { name: "Suivi en sant\u00E9 mentale - 35 min", price: "$250" },
        ],
      },
      {
        title: "M\u00E9decine familiale",
        items: [
          { name: "Prise en charge adulte - 45 min", price: "$350" },
          {
            name: "Suivi m\u00E9decin de famille (2 raisons) - 20 min",
            price: "$200",
          },
          { name: "Prise en charge p\u00E9diatrique - 30 min", price: "$300" },
          { name: "Suivi p\u00E9diatrique - 20 min", price: "$150" },
          {
            name: "Examen annuel m\u00E9decin de famille - 45 min",
            price: "$350",
          },
        ],
      },
      {
        title: "Botox m\u00E9dical",
        items: [
          {
            name: "Botox m\u00E9dical (patient avec Rx prescrit)",
            price: "$500",
          },
        ],
      },
      {
        title: "Proc\u00E9dures m\u00E9dicales",
        items: [
          {
            name: "Retrait de kyste (consultation incluse)",
            price: "$350",
          },
          { name: "Points de suture", price: "$200" },
          { name: "Retrait de points de suture", price: "$10 / point" },
          { name: "Injection articulaire (cortisone)", price: "$300" },
          { name: "St\u00E9rilet - insertion (st\u00E9rilet exclu)", price: "$250" },
          { name: "St\u00E9rilet - retrait", price: "$150" },
          { name: "Test PAP", price: "$150" },
          { name: "Nettoyage d\u2019oreilles", price: "$80" },
          {
            name: "\u00C9valuation TDAH (12+ / formulaire pr\u00E9rempli)",
            price: "$750",
          },
          { name: "Suivi TDAH - 30 min", price: "$250" },
        ],
      },
      {
        title: "Documents et certificats",
        items: [
          {
            name: "Compl\u00E9tion de document (3 pages ou moins)",
            price: "$120",
          },
          {
            name: "Compl\u00E9tion de document (3 \u00E0 10 pages)",
            price: "$240",
          },
          { name: "Certificat d\u2019arr\u00EAt de travail", price: "$75" },
          {
            name: "Renouvellement d\u2019ordonnance (patient existant)",
            price: "$75",
          },
          { name: "Permis de stationnement", price: "$100" },
          { name: "Certificat de pr\u00E9sence", price: "$75" },
          { name: "Document SAAQ + consultation", price: "$200" },
        ],
      },
    ];
  }
  return [
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
        {
          name: "Combo initial hormone + weight loss consultation - 45 min",
          price: "$600",
        },
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
}

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
  const locale = useLocale();
  const t = getTranslations(locale);
  const c = pricingContent[locale];
  const aestheticCategories = getAestheticCategories(locale);
  const medicalCategories = getMedicalCategories(locale);

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
                {c.badge}
              </p>
              <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-semibold text-white leading-tight mb-6">
                {c.heroTitle} <span className="text-gold">{c.heroHighlight}</span>
              </h1>
              <p className="text-white/60 text-lg leading-relaxed max-w-2xl mx-auto">
                {c.heroDesc}
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Medical Aesthetic Prices */}
        <section className="py-24 bg-cream">
          <div className="max-w-4xl mx-auto px-6">
            <FadeIn className="mb-12">
              <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-navy">
                {c.aestheticHeading}
              </h2>
            </FadeIn>
            {aestheticCategories.map((cat, i) => (
              <FadeIn key={cat.title} delay={Math.min(i * 0.03, 0.3)}>
                <PriceTable category={cat} />
              </FadeIn>
            ))}
            <FadeIn>
              <p className="text-xs text-muted-foreground mt-4 italic">
                {c.lipolysisNote}
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Private Medicine Prices */}
        <section className="py-24 bg-white noise-overlay">
          <div className="relative z-10 max-w-4xl mx-auto px-6">
            <FadeIn className="mb-12">
              <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-navy">
                {c.medicalHeading}
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
                {c.ctaTitle} <span className="text-gold">{c.ctaHighlight}</span>
              </h2>
              <p className="text-white/50 mb-8">
                {c.ctaDesc}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/booking"
                  className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-light text-navy px-10 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-gold/20"
                >
                  <Calendar className="w-5 h-5" />
                  {c.ctaContact}
                </Link>
                <Link
                  href="tel:+15145003422"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white px-6 py-4 rounded-full text-sm transition-all duration-300 hover:bg-white/15"
                >
                  <Phone className="w-4 h-4" />
                  {c.ctaCall}
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
