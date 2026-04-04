import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { DoctorSection } from "@/components/sections/doctor";
import { ServicesSection } from "@/components/sections/services";
import { BeforeAfterSection } from "@/components/sections/before-after";
import { CertificationsSection } from "@/components/sections/certifications";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { FAQSection } from "@/components/sections/faq";
import { CTASection } from "@/components/sections/cta";
import { FooterSection } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <DoctorSection />
        <ServicesSection />
        <BeforeAfterSection />
        <CertificationsSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
      </main>
      <FooterSection />
    </>
  );
}
