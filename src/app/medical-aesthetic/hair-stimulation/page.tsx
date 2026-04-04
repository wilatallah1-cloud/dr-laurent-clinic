import type { Metadata } from "next";
import { HairStimulationContent } from "./content";

export const metadata: Metadata = {
  title: "Hair Stimulation | Dr. Laurent - Médecine Privée",
  description:
    "PRP hair stimulation and advanced treatments for hair loss and thinning. Restore hair density naturally with expert care in Laval.",
};

export default function HairStimulation() {
  return <HairStimulationContent />;
}
