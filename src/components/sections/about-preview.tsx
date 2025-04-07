"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Button } from "../ui/button"
import { Link } from "react-router-dom"
import { ProgressBar } from "../ui/progress-bar"
import { ArrowRight } from "lucide-react"

interface Skill {
  name: string
  percentage: number
}

const AboutPreview: React.FC = () => {
  const skills: Skill[] = [
    { name: "Solidity", percentage: 80 },
    { name: "Cairo", percentage: 87 },
    { name: "React.js", percentage: 95 },
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
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-4 font-heading">
              I am Levi Ojukwu, <span className="text-gradient">a Web Developer, and A Technical Writer</span>
            </h3>
            <p className="text-muted-foreground mb-6">
              I create computer programs and solve technical problems using my creativity, analytical thinking and
              problem-solving skills. My goal is solving real-world problems using blockchain technology while keeping
              the user experience at the core.
            </p>

            <div className="space-y-6 mb-8">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <h5 className="font-medium">{skill.name}</h5>
                    <span className="text-muted-foreground">{skill.percentage}%</span>
                  </div>
                  <ProgressBar value={skill.percentage} />
                </div>
              ))}
            </div>

            <Button asChild className="bg-gradient text-white hover:opacity-90 group">
              <Link to="/about" className="flex items-center gap-2">
                More About Me
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="animated-gradient-border">
              <div className="relative aspect-square max-w-md mx-auto overflow-hidden rounded-xl">
                <div className="absolute inset-0 bg-gradient opacity-10"></div>
                <img src="/placeholder.svg" alt="About Me" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Experience badge */}
            <motion.div
              className="absolute top-4 -right-4 md:top-8 md:-right-8 p-4 rounded-lg glass-card"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 5,
                ease: "easeInOut",
              }}
            >
              <div className="text-center">
                <span className="text-4xl font-bold text-gradient">5+</span>
                <p className="text-sm">Years Experience</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutPreview

