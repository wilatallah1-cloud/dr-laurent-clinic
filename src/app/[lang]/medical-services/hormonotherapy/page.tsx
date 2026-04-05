import type { Metadata } from "next";
import { HormonotherapyContent } from "./content";

export const metadata: Metadata = {
  title: "Hormone Therapy | Dr. Laurent - Médecine Privée",
  description:
    "Personalized hormone therapy including gender-affirming care and hormonal optimization. Safe, inclusive treatment at our private clinic in Laval.",
};

export default function Hormonotherapy() {
  return <HormonotherapyContent />;
}
