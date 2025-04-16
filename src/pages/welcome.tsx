"use client"

import { useState, useEffect } from "react"
import { TypeAnimation } from "react-type-animation"
import { motion, AnimatePresence } from "framer-motion"
import { useNavigate } from "react-router-dom"

export default function WelcomePage() {
  const navigate = useNavigate()
  const [progress, setProgress] = useState(0)
  const [loading, setLoading] = useState(true)
  const [exitAnimation, setExitAnimation] = useState(false)

  useEffect(() => {
    // Ensure the welcome page is full screen without scrollbars
    document.body.style.overflow = "hidden"

    // Simulate loading progress
    const timer = setTimeout(() => {
      if (progress < 100) {
        setProgress((prev) => Math.min(prev + Math.random() * 10, 100))
      } else {
        // When loading completes, wait a moment then set loading to false
        setTimeout(() => {
          setLoading(false)
        }, 500)
      }
    }, 200)

    return () => {
      clearTimeout(timer)
      document.body.style.overflow = ""
    }
  }, [progress])

  // Redirect to main portfolio after loading completes
  useEffect(() => {
    if (!loading && progress === 100) {
      // Start exit animation
      const exitTimer = setTimeout(() => {
        setExitAnimation(true)
      }, 1000)

      // Redirect to main portfolio page after exit animation
      const redirectTimer = setTimeout(() => {
        // Set the timestamp when redirecting from welcome page
        localStorage.setItem("lastVisitTimestamp", Date.now().toString())
        navigate("/")
      }, 2000)

      return () => {
        clearTimeout(exitTimer)
        clearTimeout(redirectTimer)
      }
    }
  }, [loading, progress, navigate])

  return (
    <AnimatePresence>
      {!exitAnimation && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="fixed inset-0 z-50 h-screen w-screen overflow-hidden bg-black"
        >
          {/* Neural network background */}
          <div className="absolute inset-0 opacity-30">
            <NeuralNetworkBackground />
          </div>

          {/* Content container */}
          <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-4">
            {/* Glowing orb effect */}
            <div className="absolute top-1/3 h-64 w-64 -translate-y-1/2 rounded-full opacity-10 blur-3xl theme-purple bg-gradient" />

            {/* Main content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              {/* Logo/Avatar with pulse effect */}
              <motion.div
                className="mx-auto mb-8 flex h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 items-center justify-center rounded-full bg-gradient-to-br from-[hsla(var(--theme-primary),0.2)] to-[hsla(var(--theme-secondary),0.2)] p-2 backdrop-blur-sm"
                animate={{
                  boxShadow: [
                    "0 0 0 rgba(124, 58, 237, 0)",
                    "0 0 20px rgba(124, 58, 237, 0.5)",
                    "0 0 0 rgba(124, 58, 237, 0)",
                  ],
                }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                <BrainCircuitIcon className="h-4 w-4 sm:h-7 sm:w-7 md:h-9 md:w-9 text-[hsl(var(--theme-primary))]" />
              </motion.div>

              {/* Typing animation */}
              <h1 className="mb-6 text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white font-heading">
                <TypeAnimation
                  sequence={["Welcome To My World Of TECHNOLOGY </>", 1000]}
                  speed={50}
                  repeat={0}
                  cursor={true}
                  className="inline-block"
                />
              </h1>

              {/* Loading progress */}
              <div className="mx-auto mb-4 h-1.5 w-full max-w-xs sm:max-w-sm md:max-w-md overflow-hidden rounded-full bg-gray-800/50 backdrop-blur-sm">
                <motion.div
                  className="h-full rounded-full bg-gradient"
                  initial={{ width: "0%" }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              {/* Loading text with dynamic content */}
              <motion.p
                className="text-xs sm:text-sm font-medium text-gray-300"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                {progress < 100 ? `Loading portfolio... ${Math.round(progress)}%` : "Initializing experience..."}
              </motion.p>
            </motion.div>

            {/* Floating elements for visual interest */}
            <FloatingElements />

            {/* Digital particles effect */}
            <DigitalParticles />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// Neural network background - more sophisticated AI visualization
function NeuralNetworkBackground() {
  return (
    <svg className="h-full w-full" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="nodeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(139, 92, 246, 0.3)" />
          <stop offset="100%" stopColor="rgba(79, 70, 229, 0.3)" />
        </linearGradient>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Grid lines */}
      <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
        <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="0.5" />
      </pattern>
      <rect width="100%" height="100%" fill="url(#grid)" />

      {/* Neural network nodes and connections */}
      <g>
        {/* Generate random nodes */}
        {Array.from({ length: 20 }).map((_, i) => {
          const x = Math.random() * 100
          const y = Math.random() * 100
          return (
            <g key={`node-${i}`}>
              <circle cx={`${x}%`} cy={`${y}%`} r="3" fill="url(#nodeGradient)" filter="url(#glow)" />

              {/* Connect to 2-3 other random nodes */}
              {Array.from({ length: Math.floor(Math.random() * 2) + 1 }).map((_, j) => {
                const targetIndex = (i + j + 1) % 20
                const targetX = Math.random() * 100
                const targetY = Math.random() * 100
                return (
                  <path
                    key={`connection-${i}-${j}`}
                    d={`M ${x}% ${y}% Q ${(x + targetX) / 2 + (Math.random() * 10 - 5)}% ${(y + targetY) / 2 + (Math.random() * 10 - 5)}%, ${targetX}% ${targetY}%`}
                    stroke="rgba(139, 92, 246, 0.15)"
                    strokeWidth="0.5"
                    fill="none"
                  />
                )
              })}
            </g>
          )
        })}
      </g>
    </svg>
  )
}

// Floating elements for visual interest
function FloatingElements() {
  return (
    <>
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-1 w-1 sm:h-2 sm:w-2 rounded-full opacity-30"
          style={{
            filter: "blur(1px)",
            backgroundColor: "hsl(var(--theme-primary))",
          }}
          initial={{
            x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1000),
            y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 800),
          }}
          animate={{
            y: [
              Math.random() * (typeof window !== "undefined" ? window.innerHeight : 800),
              Math.random() * (typeof window !== "undefined" ? window.innerHeight : 800),
            ],
            x: [
              Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1000),
              Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1000),
            ],
          }}
          transition={{
            duration: Math.random() * 10 + 20,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
      ))}
    </>
  )
}

// Digital particles effect - adds a tech feel
function DigitalParticles() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {Array.from({ length: 50 }).map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute h-px w-px"
          style={{
            backgroundColor: "hsl(var(--theme-primary))",
          }}
          initial={{
            x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1000),
            y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 800),
            opacity: 0,
          }}
          animate={{
            y: [null, Math.random() * (typeof window !== "undefined" ? window.innerHeight : 800)],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: Math.random() * 5 + 2,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 5,
          }}
        />
      ))}
    </div>
  )
}

// Brain circuit icon - representing AI and technology
function BrainCircuitIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 4.5a2.5 2.5 0 0 0-4.96-.46 2.5 2.5 0 0 0-1.98 3 2.5 2.5 0 0 0-1.32 4.24 3 3 0 0 0 .34 5.58 2.5 2.5 0 0 0 2.96 3.08 2.5 2.5 0 0 0 4.91.05L12 20V4.5Z" />
      <path d="M16 8V5c0-1.1.9-2 2-2" />
      <path d="M12 13h4" />
      <path d="M12 18h6a2 2 0 0 1 2 2v1" />
      <path d="M12 8h8" />
      <path d="M20.5 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" />
      <path d="M16.5 13a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" />
      <path d="M20.5 21a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" />
      <path d="M18.5 3a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" />
    </svg>
  )
}
