import type { Metadata } from "next";
import { LiquidBBLContent } from "./content";

export const metadata: Metadata = {
  title: "Liquid Brazilian Butt Lift | Dr. Laurent - Médecine Privée",
  description:
    "Non-surgical buttock enhancement with dermal fillers and Radiesse. Natural volume and contour without surgery. Expert treatments in Laval.",
};

export default function LiquidBBL() {
  return <LiquidBBLContent />;
}
