"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Button } from "../ui/button"
import { Link } from "react-router-dom"
import { ArrowRight, ExternalLink } from "lucide-react"

interface Project {
  title: string
  image: string
  description: string
  link: string
  technologies: string[]
}

const PortfolioPreview: React.FC = () => {
  const projects: Project[] = [
    {
      title: "Triver Token Stream dApp",
      image: "Images/Triver.png",
      description: "A decentralized application for streaming tokens between wallets.",
      link: "https://triver.vercel.app/",
      technologies: ["React", "Solidity", "Ethers.js"],
    },
    {
      title: "Super Corp",
      image: "Images/supercope.png",
      description: "Admin dashboard website with modern design and chart analytics.",
      link: "https://flourishing-ojukwu-levi-supercorp.netlify.app/",
      technologies: ["Tailwind CSS", "React.js"],
    },
    {
      title: "7 Seer",
      image: "Images/Revalysed.png",
      description: "Landing page for a prediction platform with interactive elements.",
      link: "https://ephemeral-ojukwulevi-7seer-landing-pa.netlify.app/",
      technologies: ["React.js", "Tailwind CSS", "TypeScript"],
    },
  ]

  return (
    <section className="py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="portfolio-card group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-center justify-center">
                  <Link
                    to={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-background/90 text-foreground p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0"
                  >
                    <ExternalLink size={20} />
                  </Link>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-2 font-heading">{project.title}</h4>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-2 py-1 bg-secondary text-xs rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
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
            <Link to="/portfolio" className="flex items-center gap-2">
              View All Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default PortfolioPreview

