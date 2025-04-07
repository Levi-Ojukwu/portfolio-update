import type React from "react"
import ServicesSection from "../components/sections/services"
import ParticlesBackground from "../components/ui/particles-background"

const ServicesPage: React.FC = () => {
  return (
    <div className="relative">
      <ParticlesBackground />
      <ServicesSection />
    </div>
  )
}

export default ServicesPage

