import type { Metadata } from "next";
import { MedicalAestheticContent } from "./content";

export const metadata: Metadata = {
  title: "Medical Aesthetic | Dr. Laurent - Médecine Privée",
  description:
    "Advanced medical aesthetic treatments including injectables, fillers, laser treatments, body contouring, and more at Dr. Laurent's clinic in Laval.",
};

export default function MedicalAesthetic() {
  return <MedicalAestheticContent />;
}
