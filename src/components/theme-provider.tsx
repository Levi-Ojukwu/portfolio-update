"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState } from "react"

type Theme = "dark" | "light"

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
}

type ThemeProviderState = {
  theme: Theme
  setTheme: (theme: Theme) => void
  colorTheme: string
  setColorTheme: (theme: string) => void
}

const initialState: ThemeProviderState = {
  theme: "dark",
  setTheme: () => null,
  colorTheme: "theme-red",
  setColorTheme: () => null,
}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export function ThemeProvider({ children, defaultTheme = "dark", storageKey = "theme", ...props }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(() => (localStorage.getItem(storageKey) as Theme) || defaultTheme)

  const [colorTheme, setColorTheme] = useState<string>(() => localStorage.getItem("color-theme") || "theme-red")

  useEffect(() => {
    const root = window.document.documentElement

    // Remove old theme class
    root.classList.remove("light", "dark")

    // Add new theme class
    root.classList.add(theme)

    // Store theme preference
    localStorage.setItem(storageKey, theme)
  }, [theme, storageKey])

  useEffect(() => {
    const root = window.document.documentElement

    // Remove old color theme classes
    root.classList.remove("theme-red", "theme-green", "theme-orange", "theme-blue", "theme-purple")

    // Add new color theme class
    root.classList.add(colorTheme)

    // Store color theme preference
    localStorage.setItem("color-theme", colorTheme)

    // Apply the color directly as a CSS variable
    const colors = {
      "theme-red": "#ec1839",
      "theme-green": "#5c940d",
      "theme-orange": "#fd7e14",
      "theme-blue": "#1098ad",
      "theme-purple": "#9c36b5",
    }

    root.style.setProperty("--color-primary", colors[colorTheme as keyof typeof colors])
  }, [colorTheme])

  const value = {
    theme,
    setTheme,
    colorTheme,
    setColorTheme,
  }

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)

  if (context === undefined) throw new Error("useTheme must be used within a ThemeProvider")

  return context
}

