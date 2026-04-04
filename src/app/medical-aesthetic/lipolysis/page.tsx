import type { Metadata } from "next";
import { LipolysisContent } from "./content";

export const metadata: Metadata = {
  title: "Lipolysis | Dr. Laurent - Médecine Privée",
  description:
    "Non-surgical fat reduction with injection lipolysis. Target stubborn fat in the chin, arms, abdomen, love handles, and more. Expert treatments in Laval.",
};

export default function Lipolysis() {
  return <LipolysisContent />;
}
