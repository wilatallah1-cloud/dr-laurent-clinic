import type { Metadata } from "next";
import { WeightManagementContent } from "./content";

export const metadata: Metadata = {
  title: "Weight Management | Dr. Laurent - Médecine Privée",
  description:
    "Personalized weight management programs combining medical expertise, nutrition guidance, and ongoing support. Certified by Obesity Canada. Private clinic in Laval.",
};

export default function WeightManagement() {
  return <WeightManagementContent />;
}
