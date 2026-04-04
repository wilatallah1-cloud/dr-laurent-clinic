import type { Metadata } from "next";
import { PenisFiltersContent } from "./content";

export const metadata: Metadata = {
  title: "Penis Fillers | Dr. Laurent - Médecine Privée",
  description:
    "Advanced, non-surgical penis enhancement using FDA-approved dermal fillers for natural-looking results and increased confidence. Discreet care in Laval.",
};

export default function PenisFillers() {
  return <PenisFiltersContent />;
}
