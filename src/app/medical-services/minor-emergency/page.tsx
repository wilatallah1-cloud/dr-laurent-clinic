import type { Metadata } from "next";
import { MinorEmergencyContent } from "./content";

export const metadata: Metadata = {
  title: "Minor Emergency | Dr. Laurent - Médecine Privée",
  description:
    "Skip the ER wait. Fast, professional minor emergency care for urgent health concerns at our private clinic in Laval.",
};

export default function MinorEmergency() {
  return <MinorEmergencyContent />;
}
