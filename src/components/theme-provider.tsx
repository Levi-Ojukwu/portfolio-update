/** @format */

"use client";

import type React from "react";
import { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light" | "system";
type ColorTheme = "theme-amber" | "theme-rose" | "theme-emerald" | "theme-blue" | "theme-purple"

interface ThemeProviderProps {
	children: React.ReactNode;
}

interface ThemeContextType {
	theme: Theme
	colorTheme: ColorTheme
	setTheme: (theme: Theme) => void
	setColorTheme: (colorTheme: ColorTheme) => void
	toggleTheme: () => void
  }

// interface ThemeProviderState {
// 	theme: Theme;
// 	setTheme: (theme: Theme) => void;
// }

// const ThemeProviderContext = createContext<ThemeProviderState | undefined>(
// 	undefined,
// );

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

// Default values
const DEFAULT_THEME: Theme = "dark"
const DEFAULT_COLOR_THEME: ColorTheme = "theme-purple"

export function ThemeProvider({children}: ThemeProviderProps) {
	const [theme, setThemeState] = useState<Theme>(DEFAULT_THEME);
	const [colorTheme, setColorThemeState] = useState<ColorTheme>(DEFAULT_COLOR_THEME);
  	const [mounted, setMounted] = useState(false);

	// Set theme in localStorage and update document attributes
	const setTheme = (newTheme: Theme) => {
		localStorage.setItem("theme", newTheme)
		setThemeState(newTheme)
		document.documentElement.setAttribute("data-theme", newTheme)
		document.documentElement.classList.toggle("dark", newTheme === "dark")
	}

	// Set color theme in localStorage and update CSS variables
	const setColorTheme = (newColorTheme: ColorTheme) => {
		localStorage.setItem("colorTheme", newColorTheme)
		setColorThemeState(newColorTheme)
		document.documentElement.setAttribute("data-color-theme", newColorTheme)
	}

	// Toggle between light and dark themes
	const toggleTheme = () => {
		setTheme(theme === "light" ? "dark" : "light")
	}


	useEffect(() => {
		// Apply default theme immediately to prevent flash of unstyled content
		document.documentElement.setAttribute("data-color-theme", DEFAULT_COLOR_THEME)
		document.documentElement.classList.add("dark")
		document.documentElement.setAttribute("data-theme", DEFAULT_THEME)

		// Check if we're in the browser environment
		if (typeof window !== "undefined") {
			// Get stored theme or use default
			const storedTheme = localStorage.getItem("theme") as Theme | null
			const storedColorTheme = localStorage.getItem("colorTheme") as ColorTheme | null
	  
			// Apply stored theme or default
			if (!storedTheme) {
			  localStorage.setItem("theme", DEFAULT_THEME)
			} else {
			  setThemeState(storedTheme)
			  document.documentElement.setAttribute("data-theme", storedTheme)
			  document.documentElement.classList.toggle("dark", storedTheme === "dark")
			}
	  
			// Apply stored color theme or default
			if (!storedColorTheme) {
			  localStorage.setItem("colorTheme", DEFAULT_COLOR_THEME)
			} else {
			  setColorThemeState(storedColorTheme)
			  document.documentElement.setAttribute("data-color-theme", storedColorTheme)
			}
	  
			setMounted(true)
		  }
	}, []);

	return (
		<ThemeContext.Provider value={{ theme, colorTheme, setTheme, setColorTheme, toggleTheme }}>
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