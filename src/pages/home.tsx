import type React from "react"
import HeroSection from "../components/sections/hero"
import AboutPreview from "../components/sections/about-preview"
import ServicesPreview from "../components/sections/services-preview"
import PortfolioPreview from "../components/sections/portfolio-preview"
import ContactCTA from "../components/sections/contact-cta"
import ParticlesBackground from "../components/ui/particles-background"

const HomePage: React.FC = () => {
  return (
    <div className="relative">
      <ParticlesBackground />
      <HeroSection />
      <AboutPreview />
      <ServicesPreview />
      <PortfolioPreview />
      <ContactCTA />
    </div>
  )
}

export default HomePage

