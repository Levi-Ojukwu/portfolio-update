"use client"

import { Palette } from "lucide-react"
import { useTheme } from "./theme-provider"
import { Button } from "./ui/button"
import { DropdownMenu, DropdownMenuContent,  DropdownMenuTrigger } from "./ui/dropdown-menu"
import { useColorTheme } from "./color-theme-provider" // <-- Use the correct hook
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu"

export function ThemeSelector() {
  const { colorTheme, setColorTheme } = useColorTheme()

  // Define theme colors
  const themes = [
    { name: "Amber", value: "theme-amber", color: "#ff7e00" },
    { name: "Rose", value: "theme-rose", color: "#e5788f" },
    { name: "Emerald", value: "theme-emerald", color: "#009473" },
    { name: "Blue", value: "theme-blue", color: "#1098ad" },
    { name: "Purple", value: "theme-purple", color: "#9c36b5" },
  ] as const;

  type ThemeOption = typeof themes[number]; 

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" aria-label="Select theme color">
          <Palette className="h-[1.2rem] w-[1.2rem]" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {themes.map((theme) => (
          <DropdownMenuItem
            key={theme.value}
            onClick={() => setColorTheme(theme.value)}
            className="flex items-center gap-2 cursor-pointer"
          >
            <div className="w-4 h-4 rounded-full" style={{ backgroundColor: theme.color }}></div>
            <span>{theme.name}</span>
            {colorTheme === theme.value && <span className="ml-auto">✓</span>}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

