import type { Metadata } from "next";
import { FacialContouringContent } from "./content";

export const metadata: Metadata = {
  title: "Facial Contouring | Dr. Laurent - Médecine Privée",
  description:
    "Non-surgical facial contouring with dermal fillers, Botox, and advanced technologies. Sculpt your jawline, cheekbones, and profile. Expert care in Laval.",
};

export default function FacialContouring() {
  return <FacialContouringContent />;
}
