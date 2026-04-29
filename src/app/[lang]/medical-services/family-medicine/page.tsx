import type { Metadata } from "next";
import { FamilyMedicineContent } from "./content";

export const metadata: Metadata = {
  title: "Family Medicine | Dr. Laurent - Médecine Privée",
  description:
    "Comprehensive family medicine for patients of all ages. From newborns to seniors. Inclusive, personalized primary care in Laval.",
};

export default function FamilyMedicine() {
  return <FamilyMedicineContent />;
}
