/** @format */

"use client";

import type React from "react";
import { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light" | "system";
type ColorTheme = "theme-red" | "theme-green" | "theme-orange" | "theme-blue" | "theme-purple";

interface ThemeProviderProps {
	children: React.ReactNode;
	defaultTheme?: Theme;
  defaultColorTheme?: ColorTheme
	storageKey?: string;
  colorStorageKey?: string
}

interface ThemeProviderState {
	theme: Theme;
	setTheme: (theme: Theme) => void;
  colorTheme: ColorTheme;
  setColorTheme: (colorTheme: ColorTheme) => void;
}

const ThemeProviderContext = createContext<ThemeProviderState | undefined>(
	undefined,
);

export function ThemeProvider({
	children,
	defaultTheme = "system",
  defaultColorTheme = "theme-blue",
	storageKey = "vite-ui-theme",
  colorStorageKey = "vite-ui-color-theme",
	...props
}: ThemeProviderProps) {
	const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem(storageKey)
      return (storedTheme as Theme) || defaultTheme
    }
    return defaultTheme
	});

  const [colorTheme, setColorTheme] = useState<ColorTheme>(() => {
    if (typeof window !== "undefined") {
      const storedColorTheme = localStorage.getItem(colorStorageKey)
      const validThemes: ColorTheme[] = [
        "theme-red",
        "theme-green",
        "theme-orange",
        "theme-blue",
        "theme-purple",
      ]
      
      if (storedColorTheme && validThemes.includes(storedColorTheme as ColorTheme)) {
        return storedColorTheme as ColorTheme
      }
    }
    return defaultColorTheme
  })

	useEffect(() => {
		const root = window.document.documentElement;

		root.classList.remove("light", "dark");

		if (theme === "system") {
			const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
				.matches
				? "dark"
				: "light";

			root.classList.add(systemTheme);
			return;
		}

		root.classList.add(theme);
	}, [theme]);

	const value: ThemeProviderState = {
		theme,
		setTheme: (theme: Theme) => {
			localStorage.setItem(storageKey, theme);
			setTheme(theme);
		},

    colorTheme,
  setColorTheme: (color: ColorTheme) => {
    localStorage.setItem(colorStorageKey, color);
    setColorTheme(color);
  },
	};

	return (
		<ThemeProviderContext.Provider
			{...props}
			value={value}>
			{children}
		</ThemeProviderContext.Provider>
	);
}

export const useTheme = (): ThemeProviderState => {
	const context = useContext(ThemeProviderContext);

	if (context === undefined)
		throw new Error("useTheme must be used within a ThemeProvider");

	return context;
};
