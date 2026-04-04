import type { Metadata } from "next";
import { ConsultationContent } from "./content";

export const metadata: Metadata = {
  title: "Medical Consultation | Dr. Laurent - Médecine Privée",
  description:
    "Private medical consultations with Dr. Laurent. Personalized, confidential healthcare assessments for all your medical needs in Laval.",
};

export default function Consultation() {
  return <ConsultationContent />;
}
