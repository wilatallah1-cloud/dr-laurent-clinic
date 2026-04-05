import type { Metadata } from "next";
import { SexualHealthFaqContent } from "./content";

export const metadata: Metadata = {
  title: "Penile Enhancement FAQ | Dr. Laurent - Médecine Privée",
  description:
    "Get answers to common questions about penile enhancement procedures, safety, results, and what to expect at Dr. Laurent's clinic in Laval.",
};

export default function SexualHealthFaq() {
  return <SexualHealthFaqContent />;
}
