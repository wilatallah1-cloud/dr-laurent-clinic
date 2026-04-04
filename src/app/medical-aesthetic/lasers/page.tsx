import type { Metadata } from "next";
import { LasersContent } from "./content";

export const metadata: Metadata = {
  title: "Laser Treatments | Dr. Laurent - Médecine Privée",
  description:
    "Advanced laser technology for skin rejuvenation, hair removal, tattoo removal, and pigmentation correction. Expert laser treatments in Laval.",
};

export default function Lasers() {
  return <LasersContent />;
}
