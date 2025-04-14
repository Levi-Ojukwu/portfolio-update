"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { useColorTheme } from "../color-theme-provider"
import { useTheme } from "../theme-provider"

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  color: string
}

const ParticlesBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { colorTheme } = useColorTheme()
  const { theme } = useTheme()
  const [mounted, setMounted] = useState<boolean>(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let particles: Particle[] = []

    const getThemeColor = (): string => {
      const themeColors: Record<string, string> = {
        purple: theme === "dark" ? "#d8b4fe" : "#a855f7",
        blue: theme === "dark" ? "#93c5fd" : "#3b82f6",
        emerald: theme === "dark" ? "#6ee7b7" : "#10b981",
        amber: theme === "dark" ? "#fcd34d" : "#f59e0b",
        rose: theme === "dark" ? "#fda4af" : "#f43f5e",
      }

      return themeColors[colorTheme] || themeColors.purple
    }

    const resizeCanvas = (): void => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initParticles()
    }

    const initParticles = (): void => {
      particles = []
      const particleCount = Math.min(Math.floor(window.innerWidth / 20), 100)
      const color = getThemeColor()

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          color,
        })
      }
    }

    const drawParticles = (): void => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update particle colors if theme changes
      const currentColor = getThemeColor()
      particles.forEach((particle) => {
        particle.color = currentColor
      })

      particles.forEach((particle, i) => {
        // Update position
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.speedX *= -1
        }

        if (particle.y < 0 || particle.y > canvas.height) {
          particle.speedY *= -1
        }

        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.globalAlpha = 0.3
        ctx.fill()

        // Draw connections
        particles.forEach((otherParticle, j) => {
          if (i === j) return

          const dx = particle.x - otherParticle.x
          const dy = particle.y - otherParticle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) {
            ctx.beginPath()
            ctx.strokeStyle = particle.color
            ctx.globalAlpha = 0.1 * (1 - distance / 150)
            ctx.lineWidth = 0.5
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(otherParticle.x, otherParticle.y)
            ctx.stroke()
          }
        })
      })

      animationFrameId = requestAnimationFrame(drawParticles)
    }

    window.addEventListener("resize", resizeCanvas)
    resizeCanvas()
    drawParticles()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [colorTheme, theme, mounted])

  if (!mounted) return null

  return <canvas ref={canvasRef} className="fixed inset-0 w-full h-full pointer-events-none z-0" />
}

export default ParticlesBackground

