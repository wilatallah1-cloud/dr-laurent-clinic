import type { Metadata } from "next";
import { InjectablesContent } from "./content";

export const metadata: Metadata = {
  title: "Injectables & Fillers | Dr. Laurent - Médecine Privée",
  description:
    "Botox, dermal fillers, and advanced injectable treatments to enhance your natural beauty. Expert care by Dr. Laurent in Laval.",
};

export default function Injectables() {
  return <InjectablesContent />;
}
