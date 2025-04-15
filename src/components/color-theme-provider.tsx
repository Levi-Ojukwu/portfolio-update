"use client"

import React, { createContext, useContext, useState, useEffect } from "react"

// Define all available color themes
export type ColorTheme =
  | "theme-amber"
  | "theme-rose"
  | "theme-emerald"
  | "theme-blue"
  | "theme-purple";

interface ColorThemeContextType {
  colorTheme: ColorTheme
  setColorTheme: (theme: ColorTheme) => void
}

const ColorThemeContext = createContext<ColorThemeContextType | undefined>(undefined)

interface ColorThemeProviderProps {
  children: React.ReactNode
}

export function ColorThemeProvider({ children }: ColorThemeProviderProps) {
  // Initialize with a default theme, but will check localStorage first
  const [colorTheme, setColorTheme] = useState<ColorTheme>("theme-purple")
  const [mounted, setMounted] = useState(false)

  // Only run on client-side to avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
    // Load saved theme from localStorage if available
    const savedTheme = localStorage.getItem("color-theme") as ColorTheme
    if (savedTheme && isValidTheme(savedTheme)) {
      setColorTheme(savedTheme)
    }
  }, [])

  // Apply theme whenever it changes
  useEffect(() => {
    if (!mounted) return

    // Save theme to localStorage
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

    // Debug log to verify theme changes
    console.log(`Color theme changed to: theme-${colorTheme}`)

  }, [colorTheme, mounted])

  // Helper function to validate theme
  function isValidTheme(theme: string): theme is ColorTheme {
    return ["purple", "blue", "emerald", "amber", "rose"].includes(theme)
  }

  // Provide a value that won't change unless colorTheme changes
  const contextValue = React.useMemo(() => ({ colorTheme, setColorTheme }), [colorTheme])

  return <ColorThemeContext.Provider value={contextValue}>{children}</ColorThemeContext.Provider>
}

export function useColorTheme(): ColorThemeContextType {
  const context = useContext(ColorThemeContext)
  if (context === undefined) {
    throw new Error("useColorTheme must be used within a ColorThemeProvider")
  }
  return context
}

