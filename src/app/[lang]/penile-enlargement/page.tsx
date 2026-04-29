import type { Metadata } from "next";
import { PenileEnlargementContent } from "./content";

export const metadata: Metadata = {
  title: "Penile Enlargement & Enhancement | Dr. Laurent - Laval",
  description:
    "Non-surgical penile enlargement and enhancement in Laval. Premium dermal fillers, PRP therapy, and combination programs delivered by a board-certified physician. Discreet, same-day consultations available.",
};

export default function PenileEnlargement() {
  return <PenileEnlargementContent />;
}
