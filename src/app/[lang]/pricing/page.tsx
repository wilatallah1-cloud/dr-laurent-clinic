import type { Metadata } from "next";
import { PricingContent } from "./content";

export const metadata: Metadata = {
  title: "Pricing | Dr. Laurent - Médecine Privée",
  description:
    "Clear and transparent pricing for all medical aesthetic and private medical services at Dr. Laurent's clinic in Laval, Quebec.",
};

export default function Pricing() {
  return <PricingContent />;
}
