"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type ColorTheme = "purple" | "blue" | "emerald" | "amber" | "rose"

interface ColorThemeContextType {
  colorTheme: ColorTheme
  setColorTheme: (theme: ColorTheme) => void
}

const ColorThemeContext = createContext<ColorThemeContextType | undefined>(undefined)

interface ColorThemeProviderProps {
  children: React.ReactNode
}

export function ColorThemeProvider({ children }: ColorThemeProviderProps) {
  const [colorTheme, setColorTheme] = useState<ColorTheme>("purple")

  useEffect(() => {
    // Load saved theme from localStorage if available
    const savedTheme = localStorage.getItem("color-theme") as ColorTheme
    if (savedTheme) {
      setColorTheme(savedTheme)
    }
  }, [])

  useEffect(() => {
    // Save theme to localStorage and apply theme class
    localStorage.setItem("color-theme", colorTheme)

    // Remove all theme classes
    document.documentElement.classList.remove(
      "theme-purple",
      "theme-blue",
      "theme-emerald",
      "theme-amber",
      "theme-rose",
    )

    // Add current theme class
    document.documentElement.classList.add(`theme-${colorTheme}`)
  }, [colorTheme])

  return <ColorThemeContext.Provider value={{ colorTheme, setColorTheme }}>{children}</ColorThemeContext.Provider>
}

export function useColorTheme(): ColorThemeContextType {
  const context = useContext(ColorThemeContext)
  if (context === undefined) {
    throw new Error("useColorTheme must be used within a ColorThemeProvider")
  }
  return context
}

