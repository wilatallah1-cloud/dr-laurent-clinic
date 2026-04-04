import type { Metadata } from "next";
import { HoletoxContent } from "./content";

export const metadata: Metadata = {
  title: "Holetox | Dr. Laurent - Médecine Privée",
  description:
    "Advanced perianal neuromodulator treatment for enhanced comfort, hygiene, and confidence. Discreet, professional care at Dr. Laurent's clinic in Laval.",
};

export default function Holetox() {
  return <HoletoxContent />;
}
