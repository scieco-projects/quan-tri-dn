import { Navbar } from "@/components/navbar/navbar"
import { HeroSection } from "@/components/hero/hero-section"
import { FeatureSection } from "@/components/features/feature-section"
import { StatsSection } from "@/components/stats/stats-section"
import { TestimonialsSection } from "@/components/testimonials/testimonials-section"
import { CTASection } from "@/components/cta/cta-section"
import { Footer } from "@/components/footer/footer"
import { AiTeachingSection, SciLmsIntro, SystemFeaturesSection } from "@/components/sci-lms/sci-lms-sections"

export default function Home() {
  return (
    <main className="relative">
      <span id="top" className="absolute top-0" aria-hidden="true" />
      <Navbar />
      <HeroSection />
      <StatsSection />
      <div id="gioi-thieu" className="scroll-mt-24">
        <SciLmsIntro />
      </div>
      <div id="tinh-nang" className="scroll-mt-24">
        <FeatureSection />
      </div>
      <div id="framework" className="scroll-mt-24">
        <AiTeachingSection />
      </div>
      <SystemFeaturesSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  )
}
