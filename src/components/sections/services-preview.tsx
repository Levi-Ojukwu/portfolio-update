"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Button } from "../ui/button"
import { Link } from "react-router-dom"
import { ArrowRight, Code, Palette, Smartphone } from "lucide-react"

interface Service {
  icon: React.ReactNode
  title: string
  description: string
}

const ServicesPreview: React.FC = () => {
  const services: Service[] = [
    {
      icon: <Code size={40} />,
      title: "Web3 Development",
      description: "Building decentralized applications with Solidity, Cairo, and modern frontend frameworks.",
    },
    {
      icon: <Smartphone size={40} />,
      title: "Frontend Development",
      description: "Creating responsive, user-friendly interfaces with React, Next.js, and Tailwind CSS.",
    },
    {
      icon: <Palette size={40} />,
      title: "Technical Writing",
      description: "Crafting clear, concise documentation and articles about complex technical concepts.",
    },
  ]

  return (
    <section className="py-20 overflow-hidden bg-secondary/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            My <span className="text-gradient">Services</span>
          </h2>
          <div className="w-24 h-1 bg-gradient mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="service-card"
            >
              <div className="service-icon">{service.icon}</div>
              <h4 className="text-xl font-semibold mb-3 font-heading">{service.title}</h4>
              <p className="text-muted-foreground">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button asChild className="bg-gradient text-white hover:opacity-90 group">
            <Link to="/services" className="flex items-center gap-2">
              All Services
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesPreview

