/** @format */

"use client";

import type React from "react";
import { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light" | "system";
// type ColorTheme = "theme-amber" | "theme-rose" | "theme-emerald" | "theme-blue" | "theme-purple"

interface ThemeProviderProps {
	children: React.ReactNode;
}

interface ThemeContextType {
	theme: Theme
	setTheme: (theme: Theme) => void
	toggleTheme: () => void
  }

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

// Default values
const DEFAULT_THEME: Theme = "dark"

export function ThemeProvider({children}: ThemeProviderProps) {
	const [theme, setThemeState] = useState<Theme>(DEFAULT_THEME);
  	const [mounted, setMounted] = useState(false);

	// Set theme in localStorage and update document attributes
	const setTheme = (newTheme: Theme) => {
		if (typeof window !== "undefined") {
			localStorage.setItem("theme", newTheme)
		}
		setThemeState(newTheme)

		// Apply theme to document
		if (newTheme === "dark") {
			document.documentElement.classList.add("dark")
		  } else {
			document.documentElement.classList.remove("dark")
		}

		document.documentElement.setAttribute("data-theme", newTheme)
	}

	// Toggle between light and dark themes
	const toggleTheme = () => {
		setTheme(theme === "light" ? "dark" : "light")
	}

	useEffect(() => {
		// Apply default theme immediately to prevent flash
		document.documentElement.classList.add("dark")
		document.documentElement.setAttribute("data-theme", DEFAULT_THEME)

		// Check if we're in the browser environment
		if (typeof window !== "undefined") {
			// Get stored theme or use default
			const storedTheme = localStorage.getItem("theme") as Theme | null
	  
			// Apply stored theme or default
			if (storedTheme) {
				setThemeState(storedTheme)
				if (storedTheme === "dark") {
				  document.documentElement.classList.add("dark")
				} else {
				  document.documentElement.classList.remove("dark")
				}
				document.documentElement.setAttribute("data-theme", storedTheme)
			  } else {
				localStorage.setItem("theme", DEFAULT_THEME)
			}
	  
			setMounted(true)
		  }
	}, []);

	return (
		<ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
		  {children}
		</ThemeContext.Provider>
	  )
}

export function useTheme() {
	const context = useContext(ThemeContext)
	if (context === undefined) {
	  throw new Error("useTheme must be used within a ThemeProvider")
	}
	return context
}