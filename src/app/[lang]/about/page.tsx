import type { Metadata } from "next";
import { AboutContent } from "./content";

export const metadata: Metadata = {
  title: "About | Dr. Laurent - Médecine Privée",
  description:
    "Learn about Dr. Jean-Baptiste Laurent, a family medicine specialist offering private healthcare and medical aesthetic services in Laval, Quebec.",
};

export default function About() {
  return <AboutContent />;
}
