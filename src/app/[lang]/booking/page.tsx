import type { Metadata } from "next";
import { BookingContent } from "./content";

export const metadata: Metadata = {
  title: "Réservation | Dr. Laurent",
  description:
    "Réservez votre consultation avec Dr. Laurent directement en ligne. Disponibilités en temps réel.",
};

export default function Booking() {
  return <BookingContent />;
}
