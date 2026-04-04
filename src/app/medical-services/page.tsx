import type { Metadata } from "next";
import { MedicalServicesContent } from "./content";

export const metadata: Metadata = {
  title: "Medical Services | Dr. Laurent - Médecine Privée",
  description:
    "Comprehensive private medical services including family medicine, consultations, hormone therapy, weight management, and mental health at Dr. Laurent's clinic in Laval.",
};

export default function MedicalServices() {
  return <MedicalServicesContent />;
}
