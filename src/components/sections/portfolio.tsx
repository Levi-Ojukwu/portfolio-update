"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"

interface Project {
  title: string
  image: string
  description: string
  link: string
  github: string
  technologies: string[]
  category: string
}

const PortfolioSection: React.FC = () => {
  const [filter, setFilter] = useState<string>("all")

  const projects: Project[] = [
    {
      title: "Token Stream dApp",
      image: "/placeholder.svg",
      description: "A decentralized application for streaming tokens between wallets.",
      link: "https://triver.vercel.app/",
      github: "https://github.com",
      technologies: ["React", "Solidity", "Ethers.js", "Tailwind CSS"],
      category: "blockchain",
    },
    {
      title: "Super Corp",
      image: "/placeholder.svg",
      description: "Corporate website with modern design and animations.",
      link: "https://flourishing-ojukwu-levi-supercorp.netlify.app/",
      github: "https://github.com",
      technologies: ["React", "GSAP", "Styled Components"],
      category: "frontend",
    },
    {
      title: "7 Seer",
      image: "/placeholder.svg",
      description: "Landing page for a prediction platform with interactive elements.",
      link: "https://ephemeral-ojukwulevi-7seer-landing-pa.netlify.app/",
      github: "https://github.com",
      technologies: ["Next.js", "Framer Motion", "TypeScript"],
      category: "frontend",
    },
    {
      title: "Omnifood",
      image: "/placeholder.svg",
      description: "Food delivery service website with subscription options.",
      link: "https://omnifood-chinedu-levi.netlify.app/",
      github: "https://github.com",
      technologies: ["HTML", "CSS", "JavaScript"],
      category: "frontend",
    },
    {
      title: "Prime Properties",
      image: "/placeholder.svg",
      description: "Real estate listing platform with property search functionality.",
      link: "https://ojukwu-prime-properties.netlify.app/",
      github: "https://github.com",
      technologies: ["React", "Firebase", "Tailwind CSS"],
      category: "fullstack",
    },
    {
      title: "Blockchain Explorer",
      image: "/placeholder.svg",
      description: "A tool for exploring blockchain transactions and smart contracts.",
      link: "#",
      github: "https://github.com",
      technologies: ["React", "Web3.js", "GraphQL", "Material UI"],
      category: "blockchain",
    },
  ]

  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.category === filter)

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
            My <span className="text-gradient">Portfolio</span>
          </h1>
          <div className="w-24 h-1 bg-gradient mx-auto rounded-full"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-6">
            Explore my latest projects showcasing my skills in Web3 development, frontend design, and full-stack
            applications.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              filter === "all" ? "bg-gradient text-white" : "bg-secondary hover:bg-secondary/80"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter("blockchain")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              filter === "blockchain" ? "bg-gradient text-white" : "bg-secondary hover:bg-secondary/80"
            }`}
          >
            Blockchain
          </button>
          <button
            onClick={() => setFilter("frontend")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              filter === "frontend" ? "bg-gradient text-white" : "bg-secondary hover:bg-secondary/80"
            }`}
          >
            Frontend
          </button>
          <button
            onClick={() => setFilter("fullstack")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              filter === "fullstack" ? "bg-gradient text-white" : "bg-secondary hover:bg-secondary/80"
            }`}
          >
            Full Stack
          </button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="portfolio-card group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-background/90 text-foreground p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 hover:bg-background"
                  >
                    <ExternalLink size={20} />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-background/90 text-foreground p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 hover:bg-background"
                  >
                    <Github size={20} />
                  </a>
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
      </div>
    </section>
  )
}

export default PortfolioSection

