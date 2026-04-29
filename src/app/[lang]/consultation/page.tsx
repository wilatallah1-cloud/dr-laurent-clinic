import type { Metadata } from "next";
import { ConsultationContent } from "./content";

export const metadata: Metadata = {
  title: "Consultation privée | Dr. Laurent",
  description:
    "Consultation privée avec Dr. Jean-Baptiste Laurent. Médecine et esthétique sans file d'attente.",
  robots: { index: false, follow: true },
};

export default function Consultation() {
  return <ConsultationContent />;
}
