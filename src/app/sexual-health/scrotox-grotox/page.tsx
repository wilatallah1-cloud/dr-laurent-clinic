import type { Metadata } from "next";
import { ScrotoxGrotoxContent } from "./content";

export const metadata: Metadata = {
  title: "Scrotox & Grotox | Dr. Laurent - Médecine Privée",
  description:
    "Advanced neuromodulator treatments for enhanced comfort, confidence, and aesthetics in intimate areas. Discreet, professional care at Dr. Laurent's clinic in Laval.",
};

export default function ScrotoxGrotox() {
  return <ScrotoxGrotoxContent />;
}
