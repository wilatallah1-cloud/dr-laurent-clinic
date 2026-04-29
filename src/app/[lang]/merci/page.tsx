import type { Metadata } from "next";
import { MerciContent } from "./content";

export const metadata: Metadata = {
  title: "Merci | Dr. Laurent",
  description: "Merci pour votre demande. Nous vous contacterons sous 24 heures.",
  robots: { index: false, follow: false },
};

export default function Merci() {
  return <MerciContent />;
}
