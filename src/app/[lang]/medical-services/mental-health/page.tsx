import type { Metadata } from "next";
import { MentalHealthContent } from "./content";

export const metadata: Metadata = {
  title: "Mental Health | Dr. Laurent - Médecine Privée",
  description:
    "Compassionate mental health consultations including ADHD evaluation, anxiety, depression, and medication management at our private clinic in Laval.",
};

export default function MentalHealth() {
  return <MentalHealthContent />;
}
