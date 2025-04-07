"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Smartphone, Laptop, Palette, Code, Search, Megaphone } from "lucide-react"

interface Service {
  icon: React.ReactNode
  title: string
  description: string
}

const ServicesSection: React.FC = () => {
  const services: Service[] = [
    {
      icon: <Smartphone size={40} />,
      title: "Web Design",
      description:
        "The web design process involves creating a site's architecture, designing its layout and user interface.",
    },
    {
      icon: <Laptop size={40} />,
      title: "Web Maintenance",
      description:
        "I offer support and create good maintenance for your web applications after the completion of your project.",
    },
    {
      icon: <Palette size={40} />,
      title: "Web Hosting",
      description:
        "Hosting and storing your web app's files on a server that can be accessed from anywhere in the world.",
    },
    {
      icon: <Code size={40} />,
      title: "Web Programming",
      description:
        "I help you with your front-end designs, and build APIs that help you integrate your application into its own product.",
    },
    {
      icon: <Search size={40} />,
      title: "Web Optimization",
      description: "This is the process of making web applications more user-friendly and visible to search engines.",
    },
    {
      icon: <Megaphone size={40} />,
      title: "Web Support",
      description:
        "This includes everything from checking your web application for broken links and scripts to updating your app's content.",
    },
  ]

  return (
    <section className="py-20 pt-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">
            My <span className="text-gradient">Services</span>
          </h1>
          <div className="w-24 h-1 bg-gradient mx-auto rounded-full"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-6">
            I offer a wide range of services to help businesses and individuals establish a strong online presence and
            leverage the power of blockchain technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="service-card"
            >
              <div className="service-icon">{service.icon}</div>
              <h4 className="text-xl font-semibold mb-3 font-heading">{service.title}</h4>
              <p className="text-muted-foreground">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-20 p-8 rounded-xl border border-border/50 backdrop-blur-sm bg-card/80"
        >
          <h3 className="text-2xl font-semibold mb-6 font-heading text-center">My Work Process</h3>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient flex items-center justify-center mx-auto mb-4 text-white">
                <span className="font-bold text-xl">01</span>
              </div>
              <h4 className="font-semibold mb-2">Discovery</h4>
              <p className="text-muted-foreground text-sm">Understanding your requirements and project goals</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient flex items-center justify-center mx-auto mb-4 text-white">
                <span className="font-bold text-xl">02</span>
              </div>
              <h4 className="font-semibold mb-2">Planning</h4>
              <p className="text-muted-foreground text-sm">Creating a detailed roadmap and technical architecture</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient flex items-center justify-center mx-auto mb-4 text-white">
                <span className="font-bold text-xl">03</span>
              </div>
              <h4 className="font-semibold mb-2">Development</h4>
              <p className="text-muted-foreground text-sm">Building the solution with regular updates and feedback</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient flex items-center justify-center mx-auto mb-4 text-white">
                <span className="font-bold text-xl">04</span>
              </div>
              <h4 className="font-semibold mb-2">Delivery</h4>
              <p className="text-muted-foreground text-sm">
                Launching the project with ongoing support and maintenance
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesSection

