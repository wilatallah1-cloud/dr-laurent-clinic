import type { Metadata } from "next";
import { NonSurgicalBlepharoplastyContent } from "./content";

export const metadata: Metadata = {
  title: "Non-Surgical Blepharoplasty | Dr. Laurent - Médecine Privée",
  description:
    "Non-surgical eyelid rejuvenation with CO2 laser blepharoplasty. Tighten and refresh the eye area without surgery. Expert treatments in Laval.",
};

export default function NonSurgicalBlepharoplasty() {
  return <NonSurgicalBlepharoplastyContent />;
}
