"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Button } from "../ui/button"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"

const ContactCTA: React.FC = () => {
  return (
    <section className="py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient opacity-90"></div>
          <div className="relative z-10 py-16 px-6 md:px-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">Let's Work Together</h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8 text-lg">
              Have a project in mind? I am currently open to full-time employment and collaborative partnerships. I would welcome the chance to contribute to meaningful initiatives and create impactful solutions together.!
            </p>
            <Button asChild size="lg" className="bg-white hover:bg-white/90 text-gray-00 dark:text-gray-800 group">
              <Link to="/contact" className="flex text-gray-600 dark:text-gray-800 items-center gap-2">
                Get In Touch
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactCTA

