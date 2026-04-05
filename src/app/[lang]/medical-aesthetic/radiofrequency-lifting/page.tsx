import type { Metadata } from "next";
import { RadiofrequencyLiftingContent } from "./content";

export const metadata: Metadata = {
  title: "Radiofrequency Lifting | Dr. Laurent - Médecine Privée",
  description:
    "Non-surgical skin tightening and lifting with TempSure radiofrequency and Ultraformer HIFU technology. Expert treatments in Laval.",
};

export default function RadiofrequencyLifting() {
  return <RadiofrequencyLiftingContent />;
}
