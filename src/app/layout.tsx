import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dr. Laurent | Private Healthcare & Medical Aesthetic Solutions in Laval",
  description:
    "Dr. Laurent's private medical clinic combines comprehensive family medicine with advanced medico-aesthetic treatments. Personalized care in Laval, QC.",
  keywords: [
    "private clinic laval",
    "medical aesthetic",
    "family medicine",
    "botox laval",
    "dermal fillers",
    "Dr. Laurent",
    "médecine privée",
  ],
  openGraph: {
    title: "Dr. Laurent | Private Healthcare & Medical Aesthetic Solutions",
    description:
      "One physician. Two specialties. Comprehensive medical care and advanced aesthetic treatments under one roof.",
    type: "website",
    locale: "en_CA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
