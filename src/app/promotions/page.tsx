import type { Metadata } from "next";
import { PromotionsContent } from "./content";

export const metadata: Metadata = {
  title: "Promotions | Dr. Laurent - Médecine Privée",
  description:
    "Take advantage of exclusive offers on premium aesthetic treatments at Dr. Laurent's clinic in Laval. Quality care at exceptional prices.",
};

export default function Promotions() {
  return <PromotionsContent />;
}
