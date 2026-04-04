import type { Metadata } from "next";
import { FaqContent } from "./content";

export const metadata: Metadata = {
  title: "FAQ | Dr. Laurent - Médecine Privée",
  description:
    "Find answers to common questions about our services, treatments, and what to expect at Dr. Laurent's clinic in Laval, Quebec.",
};

export default function Faq() {
  return <FaqContent />;
}
