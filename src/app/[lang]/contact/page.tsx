import type { Metadata } from "next";
import { ContactContent } from "./content";

export const metadata: Metadata = {
  title: "Contact | Dr. Laurent - Médecine Privée",
  description:
    "Contact Dr. Laurent's clinic in Laval. Schedule appointments, ask questions, or visit us at 4072 Boul. le Corbusier, Laval, QC H7L 5R2.",
};

export default function Contact() {
  return <ContactContent />;
}
