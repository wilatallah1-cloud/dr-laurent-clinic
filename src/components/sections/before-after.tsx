"use client";

import { FadeIn, StaggerChildren, StaggerItem } from "@/components/motion";
import { Eye } from "lucide-react";

const results = [
  {
    treatment: "Dermal Fillers",
    area: "Lip Enhancement",
    description: "Natural volume enhancement with hyaluronic acid fillers",
  },
  {
    treatment: "Botox",
    area: "Forehead & Crow's Feet",
    description: "Smooth, refreshed appearance with precise injections",
  },
  {
    treatment: "Body Contouring",
    area: "Abdomen",
    description: "Non-invasive sculpting for a defined, toned silhouette",
  },
  {
    treatment: "Laser Treatment",
    area: "Skin Rejuvenation",
    description: "Improved tone, texture, and radiance with advanced laser",
  },
];

export function BeforeAfterSection() {
  return (
    <section id="results" className="relative py-24 sm:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/5 mb-6">
            <Eye className="w-4 h-4 text-gold" />
            <span className="text-sm text-gold font-medium tracking-wide">
              Treatment Results
            </span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-semibold text-navy mb-4">
            Real Results,{" "}
            <span className="text-gold">Real Confidence</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            See the natural, balanced results our patients achieve. Every
            treatment is tailored to enhance your unique features.
          </p>
        </FadeIn>

        <StaggerChildren
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          staggerDelay={0.1}
        >
          {results.map((result) => (
            <StaggerItem key={result.treatment}>
              <div className="group rounded-2xl overflow-hidden bg-white border border-border/50 hover:border-gold/30 hover:shadow-lg transition-all duration-500">
                {/* Placeholder for before/after */}
                <div className="relative h-64 bg-gradient-to-br from-navy/5 to-gold/5 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-3">
                      <Eye className="w-7 h-7 text-gold" />
                    </div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">
                      Before & After
                    </p>
                    <p className="text-xs text-muted-foreground/60 mt-1">
                      Available at consultation
                    </p>
                  </div>
                  {/* Divider line */}
                  <div className="absolute top-0 bottom-0 left-1/2 w-px bg-gold/20" />
                  <div className="absolute top-4 left-4 bg-navy/80 text-white text-[10px] px-2 py-1 rounded-full uppercase tracking-wider">
                    Before
                  </div>
                  <div className="absolute top-4 right-4 bg-gold/90 text-navy text-[10px] px-2 py-1 rounded-full uppercase tracking-wider font-medium">
                    After
                  </div>
                </div>

                <div className="p-5">
                  <div className="text-xs text-gold font-medium uppercase tracking-wider mb-1">
                    {result.area}
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-navy mb-2">
                    {result.treatment}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {result.description}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>

        <FadeIn delay={0.3} className="text-center mt-10">
          <p className="text-sm text-muted-foreground">
            Individual results may vary. Photos available during your personal
            consultation.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
