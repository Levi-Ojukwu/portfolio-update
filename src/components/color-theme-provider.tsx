/** @format */

"use client";

import type React from "react";
import {
	createContext,
	useState,
	useEffect,
	useContext,
	type ReactNode,
} from "react";

// Define the color themes
type ColorTheme =
	| "theme-purple"
	| "theme-blue"
	| "theme-emerald"
	| "theme-amber"
	| "theme-rose";

// Define the context type
type ColorThemeContextType = {
	colorTheme: ColorTheme;
	setColorTheme: (theme: ColorTheme) => void;
};

// Create the context with a default value
const ColorThemeContext = createContext<ColorThemeContextType>({
	colorTheme: "theme-purple", // Default theme
	setColorTheme: () => console.warn("setColorTheme is not defined"),
});

// Create a provider component
type ColorThemeProviderProps = {
	children: ReactNode;
};

const ColorThemeProvider: React.FC<ColorThemeProviderProps> = ({
	children }) => {
	// State to hold the current color theme
	const [colorThemeState, setColorThemeState] = useState<ColorTheme>("theme-purple");

	// Function to apply theme to document
	// const applyThemeToDocument = (theme: ColorTheme) => {
	// 	// Remove all theme classes
	// 	document.documentElement.classList.remove(
	// 		"theme-purple",
	// 		"theme-blue",
	// 		"theme-emerald",
	// 		"theme-amber",
	// 		"theme-rose",
	// 	);

	// 	// Add the new theme class
	// 	document.documentElement.classList.add(theme);

	// 	// Also set the data attribute for CSS variables
	// 	document.documentElement.setAttribute("data-color-theme", theme);

	// 	// Debug log to verify theme changes
	// 	console.log(`Color theme changed to: ${theme}`);
	// };

  // Function to apply theme to document
  const setColorTheme = (newTheme: ColorTheme) => {
    // First, update localStorage
    if (typeof window !== "undefined") {
      localStorage.setItem("color-theme", newTheme)
    }

    // Update state
    setColorThemeState(newTheme)

    // Apply theme to document - IMPORTANT: This needs to happen immediately
    // Remove all theme classes first
    document.documentElement.classList.remove(
      "theme-purple",
      "theme-blue",
      "theme-emerald",
      "theme-amber",
      "theme-rose",
    )

    // Add the new theme class
    document.documentElement.classList.add(newTheme)

    // Also set the data attribute for CSS variables
    document.documentElement.setAttribute("data-color-theme", newTheme)

    console.log(`Color theme changed to: ${newTheme}`)
  }

	// Apply theme on initial load and when theme changes
  useEffect(() => {
    // On mount, check localStorage
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem("color-theme") as ColorTheme | null
      if (storedTheme) {
        setColorThemeState(storedTheme)
      }
    }
  }, [])

  useEffect(() => {
    applyThemeToDocument(colorThemeState)
  }, [colorThemeState])

  const applyThemeToDocument = (theme: ColorTheme) => {
    // Remove all theme classes
    document.documentElement.classList.remove(
      "theme-purple",
      "theme-blue",
      "theme-emerald",
      "theme-amber",
      "theme-rose",
    )

    // Add the new theme class
    document.documentElement.classList.add(theme)

    // Also set the data attribute for CSS variables
    document.documentElement.setAttribute("data-color-theme", theme)

    // Debug log to verify theme changes
    console.log(`Color theme changed to: ${theme}`)
  }

	// Provide the context value
	return (
		<ColorThemeContext.Provider value={{ colorTheme: colorThemeState, setColorTheme }}>
			{children}
		</ColorThemeContext.Provider>
	);
};

// Custom hook to use the color theme context
const useColorTheme = () => {
	const context = useContext(ColorThemeContext);
	if (!context) {
		throw new Error("useColorTheme must be used within a ColorThemeProvider");
	}
	return context;
};

// Theme selector component
type ThemeSelectorProps = {
	themes: { label: string; value: string }[];
};

const ThemeSelector: React.FC<ThemeSelectorProps> = ({ themes }) => {
	const { setColorTheme } = useColorTheme();

	return (
		<div>
			{themes.map((theme) => (
				<button
					key={theme.value}
					onClick={() => {
						console.log(`Clicked on theme: ${theme.value}`);
						setColorTheme(theme.value as ColorTheme);
					}}>
					{theme.label}
				</button>
			))}
		</div>
	);
};

export { ColorThemeProvider, useColorTheme, ThemeSelector };
export type { ColorTheme };

// /** @format */

// "use client";

// import React, {
// 	createContext,
// 	useState,
// 	useContext,
// 	useEffect,
// 	type ReactNode,
// } from "react";

// // Define all available color themes
// type ColorTheme =
// 	| "theme-purple"
// 	| "theme-blue"
// 	| "theme-emerald"
// 	| "theme-amber"
// 	| "theme-rose";

// type ColorThemeContextType = {
// 	colorTheme: ColorTheme;
// 	setColorTheme: (theme: ColorTheme) => void;
// }

// // Create the context with a default value
// const ColorThemeContext = createContext<ColorThemeContextType>({
//   colorTheme: "theme-purple", // Default theme
//   setColorTheme: () => console.warn("setColorTheme is not defined"),
// })

// // Create a provider component
// type ColorThemeProviderProps = {
//   children: ReactNode
// }

// export function ColorThemeProvider({ children }: ColorThemeProviderProps) {
// 	// Initialize with the default theme
// 	const [colorTheme, setColorThemeState] =
// 		useState<ColorTheme>(DEFAULT_COLOR_THEME);
// 	const [mounted, setMounted] = useState(false);

// 	// Function to set the color theme
// 	const setColorTheme = (newTheme: ColorTheme) => {
// 		if (typeof window !== "undefined") {
// 			// Save to localStorage
// 			localStorage.setItem("color-theme", newTheme);
// 		}

// 		// Update state
// 		setColorThemeState(newTheme);

// 		// Apply theme to document
// 		applyThemeToDocument(newTheme);
// 	};

// 	// Function to apply theme to document
// 	const applyThemeToDocument = (theme: ColorTheme) => {
// 		// Remove all theme classes
// 		document.documentElement.classList.remove(
// 			"theme-purple",
// 			"theme-blue",
// 			"theme-emerald",
// 			"theme-amber",
// 			"theme-rose",
// 		);

// 		// Add the new theme class
// 		document.documentElement.classList.add(theme);

// 		// Also set the data attribute for CSS variables
// 		document.documentElement.setAttribute("data-color-theme", theme);

// 		// Debug log to verify theme changes
// 		console.log(`Color theme changed to: ${theme}`);
// 	};

// 	// Effect to initialize theme on mount
// 	useEffect(() => {
// 		setMounted(true);

// 		// Only run on client-side
// 		if (typeof window !== "undefined") {
// 			// Try to get saved theme from localStorage
// 			const savedTheme = localStorage.getItem(
// 				"color-theme",
// 			) as ColorTheme | null;

// 			if (savedTheme && isValidTheme(savedTheme)) {
// 				setColorThemeState(savedTheme);
// 				applyThemeToDocument(savedTheme);
// 			} else {
// 				// If no valid saved theme, set default
// 				localStorage.setItem("color-theme", DEFAULT_COLOR_THEME);
// 				applyThemeToDocument(DEFAULT_COLOR_THEME);
// 			}
// 		}
// 	}, []);

// 	// Helper function to validate theme
// 	function isValidTheme(theme: string): theme is ColorTheme {
// 		return [
// 			"theme-purple",
// 			"theme-blue",
// 			"theme-emerald",
// 			"theme-amber",
// 			"theme-rose",
// 		].includes(theme);
// 	}

// 	// Provide a value that won't change unless colorTheme changes
// 	const contextValue = React.useMemo(
// 		() => ({ colorTheme, setColorTheme }),
// 		[colorTheme],
// 	);

// 	return (
// 		<ColorThemeContext.Provider value={contextValue}>
// 			{children}
// 		</ColorThemeContext.Provider>
// 	);
// }

// export function useColorTheme(): ColorThemeContextType {
// 	const context = useContext(ColorThemeContext);
// 	if (context === undefined) {
// 		throw new Error("useColorTheme must be used within a ColorThemeProvider");
// 	}
// 	return context;
// }
