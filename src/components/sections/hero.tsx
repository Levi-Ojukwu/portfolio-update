"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "../ui/button"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { ArrowRight, Download } from "lucide-react"

const HeroSection: React.FC = () => {
  const [typedText, setTypedText] = useState<string>("")
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState<number>(0)
  const [isDeleting, setIsDeleting] = useState<boolean>(false)
  const [typingSpeed, setTypingSpeed] = useState<number>(150)

  const phrases: string[] = ["Blockchain Developer", "Frontend Developer", "Backend Developer", "Technical Writer"]

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex]

    const type = (): void => {
      if (isDeleting) {
        // Deleting text
        setTypedText(currentPhrase.substring(0, typedText.length - 1))
        setTypingSpeed(50) // Faster when deleting

        if (typedText.length === 0) {
          setIsDeleting(false)
          setCurrentPhraseIndex((currentPhraseIndex + 1) % phrases.length)
          setTypingSpeed(150)
        }
      } else {
        // Typing text
        setTypedText(currentPhrase.substring(0, typedText.length + 1))

        if (typedText.length === currentPhrase.length) {
          // Pause at the end of the phrase
          setTypingSpeed(2000)
          setIsDeleting(true)
        }
      }
    }

    const timer = setTimeout(type, typingSpeed)
    return () => clearTimeout(timer)
  }, [typedText, isDeleting, currentPhraseIndex, typingSpeed, phrases])

  return (
    <section className="pt-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-">
          <motion.div
            className="space-y-5 md:mt-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="px-4 py-2 rounded-full text-sm font-medium bg-[hsl(var(--theme-primary)_/_0.1)] text-[hsl(var(--theme-primary))]">
                Web3 Developer
              </span>
            </motion.div>

            <motion.h1
              className="text-3xl md:text-4xl lg:text-5xl font-semibold font-heading leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Building <span className="animated-gradient-text font-bold">digital experiences</span> for the decentralized future
            </motion.h1>

            <motion.div
              className="h-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2 className="text-xl md:text-2xl font-medium">
                <span className="text-muted-foreground">I am a</span>{" "}
                <span className="text-[hsl(var(--theme-primary))]">{typedText}</span>
                <span className="animate-blink ml-1">|</span>
              </h2>
            </motion.div>

            <motion.p
              className="text-muted-foreground text-base leading-relaxed max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              I am a passionate Full-Stack and Blockchain Developer as well as Technical Writer. I specialize in building scalable and user-centric decentralized applications that seamlessly connect the Web2 and Web3 ecosystems.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Button asChild size="lg" className="bg-gradient text-white hover:opacity-90 group">
                <Link to="/contact" className="flex items-center gap-2">
                  Hire Me
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="group">
                <a href="/MyCV.pdf" download className="flex items-center gap-2">
                  Download CV
                  <Download className="h-4 w-4 transition-transform group-hover:translate-y-1" />
                </a>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative hidden lg:block"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <div className="animated-gradient-border h-[78%]">
              <div className="relative w-full aspect-[4/5] max-w-md mx-auto overflow-hidden ">
                <img src="src/Images/HeroImg.png" alt="Ojukwu Levi Chinedu" className="animate-pulse" />
              </div>
            </div>

            {/* Floating elements */}
            <motion.div
              className="absolute -top-6 -left-6 p-4 rounded-lg glass-card"
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 5,
                ease: "easeInOut",
              }}
            >
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-[hsl(var(--theme-primary))]"></div>
                <span className="font-medium">Blockchain</span>
              </div>
            </motion.div>

           

            <motion.div
              className="absolute left-40 bottom-40  p-4 rounded-lg glass-card"
              animate={{
                y: [0, 10, 0],
                rotate: [0, -5, 0],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 5,
                ease: "easeInOut",
                delay: 0.5,
              }}
            >
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-[hsl(var(--theme-secondary))]"></div>
                <span className="font-medium">Backend</span>
              </div>
            </motion.div>

            <motion.div
              className="absolute top-12 right-10 p-4 rounded-lg glass-card"
              animate={{
                y: [0, 10, 0],
                rotate: [0, -5, 0],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 5,
                ease: "easeInOut",
                delay: 0.5,
              }}
            >
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-[hsl(var(--theme-secondary))]"></div>
                <span className="font-medium">Frontend</span>
              </div>
            </motion.div>

            <motion.div
              className="absolute bottom-72 -left-28 p-4 rounded-lg glass-card"
              animate={{
                y: [0, 10, 0],
                rotate: [0, -5, 0],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 5,
                ease: "easeInOut",
                delay: 0.5,
              }}
            >
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-[hsl(var(--theme-secondary))]"></div>
                <span className="font-medium">Technical writer</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection

